import postgres from "postgres"

function cleanEnv(v: string | undefined) {
  if (!v) return v
  const s = String(v).trim()
  return s.replace(/^['"]|['"]$/g, "")
}

const databaseUrl = cleanEnv(process.env.DATABASE_URL)
if (!databaseUrl) {
  throw new Error(
    "Missing DATABASE_URL. Add it to .env.local (server-only) and restart the dev server."
  )
}

// Server-only Postgres client (uses Supabase pooler if DATABASE_URL points there).
export const sql = postgres(databaseUrl, {
  // Supabase pooler is TLS; keep this on for hosted deployments.
  ssl: "require",
  // Reasonable defaults for a Next.js API route.
  max: 5,
  idle_timeout: 20,
  connect_timeout: 10,
})

