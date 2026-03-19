"use client"

import { useEffect, useState } from "react"

import { DeveloperCard } from "@/components/talent/developer-card"
import { developers as demoDevelopers, type DeveloperProfile, type DeveloperStatus } from "@/lib/talent-data"

type DeveloperRow = {
  id: number | string
  name: string | null
  skills: string | null
  experience: string | null
  status: string | null
}

function normalizeStatus(input: string | null | undefined): DeveloperStatus {
  const s = (input || "").trim().toLowerCase()
  if (s === "actively_looking" || s === "actively looking") return "actively_looking"
  if (s === "open_to_offers" || s === "open to offers") return "open_to_offers"
  if (s === "not_looking" || s === "not looking") return "not_looking"
  return "open_to_offers"
}

function splitSkills(input: string | null | undefined): string[] {
  if (!input) return []
  return input
    .split(/[,|]/g)
    .map((s) => s.trim())
    .filter(Boolean)
}

export function DeveloperGrid() {
  const [developers, setDevelopers] = useState<DeveloperProfile[]>([])
  const [loading, setLoading] = useState(true)
  const [notice, setNotice] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    const getData = async () => {
      try {
        setLoading(true)
        setNotice(null)

        if (cancelled) return
        const res = await fetch("/api/developers", { cache: "no-store" })
        const json = (await res.json()) as
          | { data: DeveloperRow[] }
          | { error: string }

        if (!res.ok || "error" in json) {
          const message =
            "error" in json
              ? json.error
              : `Request failed with status ${res.status}`
          setNotice(message || "Using demo data (DB error)")
          setDevelopers(demoDevelopers)
          return
        }

        const rows = (Array.isArray(json.data) ? json.data : []) as DeveloperRow[]
        const mapped: DeveloperProfile[] = rows.map((row) => {
          const name = row.name?.trim() || "Unnamed developer"
          const skills = splitSkills(row.skills)
          const headline =
            row.experience?.trim() ||
            (skills.length ? `${skills[0]} Developer` : "AWS Developer")

          return {
            id: String(row.id ?? name),
            name,
            headline,
            status: normalizeStatus(row.status),
            isNew: false,
            skills,
            bio: "",
          }
        })

        setDevelopers(mapped)
      } catch (e) {
        if (cancelled) return
        const message = e instanceof Error ? e.message : String(e)
        console.error(e)
        setNotice(message || "Using demo data (network error)")
        setDevelopers(demoDevelopers)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    getData()

    // Allows other client components (like a submission form) to request a refresh
    // without introducing shared state or changing the API contract.
    const onRefresh = () => {
      void getData()
    }
    window.addEventListener("developers:refresh", onRefresh)

    return () => {
      cancelled = true
      window.removeEventListener("developers:refresh", onRefresh)
    }
  }, [])

  if (loading) {
    return <p className="text-center text-gray-500">Loading developers...</p>
  }

  return (
    <section id="developers" className="py-16 px-6 bg-background">
      {notice && (
        <p className="text-center text-sm text-muted-foreground mb-6">
          {notice}
        </p>
      )}
      {developers.length === 0 ? (
        <p className="text-center text-gray-500">No developers found</p>
      ) : (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {developers.map((developer) => (
          <DeveloperCard key={developer.id} developer={developer} />
        ))}
      </div>
      )}
    </section>
  )
}

export default DeveloperGrid