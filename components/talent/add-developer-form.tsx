"use client"

import { useMemo, useState } from "react"
import { useRouter } from "next/navigation"

import { supabase } from "@/lib/supabase"

type StatusValue = "actively_looking" | "open_to_offers" | "not_looking"

type FormState = {
  name: string
  skills: string
  experience: string
  status: StatusValue
}

const initialState: FormState = {
  name: "",
  skills: "",
  experience: "",
  status: "open_to_offers",
}

function normalizeStatus(input: unknown): StatusValue {
  const s = String(input ?? "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "_")

  if (s === "actively_looking") return "actively_looking"
  if (s === "open_to_offers") return "open_to_offers"
  if (s === "not_looking") return "not_looking"

  // Safe default that matches existing accepted values.
  return "open_to_offers"
}

function normalizeSkills(input: string) {
  // Store as a comma-separated string, but normalize spacing and strip empties.
  return input
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)
    .join(", ")
}

export function AddDeveloperForm() {
  const router = useRouter()

  const [form, setForm] = useState<FormState>(initialState)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  const hasSupabaseConfig = Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  )

  const canSubmit = useMemo(() => {
    return form.name.trim().length > 0 && !submitting
  }, [form.name, submitting])

  const onChange = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setSuccess(null)

    if (!hasSupabaseConfig) {
      setError(
        "Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY, then restart the dev server."
      )
      return
    }

    const name = form.name.trim()
    if (!name) {
      setError("Name is required.")
      return
    }

    setSubmitting(true)
    try {
      const skills = normalizeSkills(form.skills)
      const experience = form.experience.trim()
      const status = normalizeStatus(form.status)

      // Insert only the columns the grid already understands.
      // Some setups use quoted Title-Case column names (e.g. "Name") which are case-sensitive.
      // We try the common lowercase shape first, then fall back to the Title-Case shape.
      const attemptLower = await supabase.from("developers").insert([
        { name, skills, experience, status },
      ])
      if (attemptLower.error) {
        const msg = attemptLower.error.message?.toLowerCase?.() || ""
        const looksLikeCaseMismatch =
          msg.includes('column "name"') ||
          msg.includes('column "skills"') ||
          msg.includes('column "experience"') ||
          msg.includes('column "status"')

        if (!looksLikeCaseMismatch) throw attemptLower.error

        const attemptTitleCase = await supabase.from("developers").insert([
          { Name: name, Skills: skills, Experience: experience, Status: status },
        ])
        if (attemptTitleCase.error) throw attemptTitleCase.error
      }

      setSuccess("Developer submitted! Thanks for sharing.")
      setForm(initialState)

      // Ensure the list reflects the new row.
      window.dispatchEvent(new Event("developers:refresh"))
      router.refresh()
    } catch (err) {
      // Log the full error object for debugging.
      console.error(err)

      // Supabase/PostgREST errors are often plain objects, not `Error` instances.
      const message =
        err instanceof Error
          ? err.message
          : typeof err === "object" && err !== null && "message" in err
            ? String((err as { message?: unknown }).message ?? "")
            : String(err)

      const normalized = (message || "").trim()
      const isFailedToFetch =
        (err instanceof TypeError && normalized.toLowerCase() === "failed to fetch") ||
        normalized.toLowerCase().includes("failed to fetch")

      setError(
        isFailedToFetch
          ? "Network error: failed to reach Supabase. Check your NEXT_PUBLIC_SUPABASE_URL value, internet connection, and whether a firewall/VPN/adblocker is blocking requests to supabase.co."
          : normalized || "Something went wrong submitting this developer."
      )
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="px-6 pt-6">
      <div className="mx-auto w-full max-w-3xl rounded-lg border bg-background p-6">
        <h2 className="text-xl font-semibold">Submit a developer</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Add a new profile to the talent board. Skills should be comma-separated.
        </p>

        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <div className="grid gap-2">
            <label htmlFor="dev-name" className="text-sm font-medium">
              Name
            </label>
            <input
              id="dev-name"
              type="text"
              value={form.name}
              onChange={(e) => onChange("name", e.target.value)}
              placeholder="Jane Doe"
              className="h-10 rounded-md border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
              autoComplete="name"
              disabled={submitting}
              required
            />
          </div>

          <div className="grid gap-2">
            <label htmlFor="dev-skills" className="text-sm font-medium">
              Skills
            </label>
            <input
              id="dev-skills"
              type="text"
              value={form.skills}
              onChange={(e) => onChange("skills", e.target.value)}
              placeholder="AWS, Terraform, TypeScript"
              className="h-10 rounded-md border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
              disabled={submitting}
            />
            <p className="text-xs text-muted-foreground">We’ll store this as a comma-separated string.</p>
          </div>

          <div className="grid gap-2">
            <label htmlFor="dev-experience" className="text-sm font-medium">
              Experience
            </label>
            <textarea
              id="dev-experience"
              value={form.experience}
              onChange={(e) => onChange("experience", e.target.value)}
              placeholder="Senior cloud engineer with 7+ years on AWS..."
              className="min-h-[90px] rounded-md border bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
              disabled={submitting}
            />
          </div>

          <div className="grid gap-2">
            <label htmlFor="dev-status" className="text-sm font-medium">
              Status
            </label>
            <select
              id="dev-status"
              value={form.status}
              onChange={(e) => onChange("status", e.target.value as StatusValue)}
              className="h-10 rounded-md border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
              disabled={submitting}
            >
              <option value="actively_looking">Actively looking</option>
              <option value="open_to_offers">Open to offers</option>
              <option value="not_looking">Not looking</option>
            </select>
          </div>

          {error && (
            <div className="rounded-md border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive">
              {error}
            </div>
          )}
          {success && (
            <div className="rounded-md border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-700 dark:text-emerald-300">
              {success}
            </div>
          )}

          <div className="flex items-center gap-3">
            <button
              type="submit"
              disabled={!canSubmit}
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground disabled:cursor-not-allowed disabled:opacity-50"
            >
              {submitting ? "Submitting..." : "Submit developer"}
            </button>
            <button
              type="button"
              onClick={() => {
                setForm(initialState)
                setError(null)
                setSuccess(null)
              }}
              className="inline-flex h-10 items-center justify-center rounded-md border bg-background px-4 text-sm font-medium disabled:cursor-not-allowed disabled:opacity-50"
              disabled={submitting}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default AddDeveloperForm

