import { NextResponse } from "next/server"
import { sql } from "@/lib/db"

export const runtime = "nodejs"

export async function GET() {
  try {
    const rows = await sql/* sql */ `
      select
        id,
        "Name" as name,
        "Skills" as skills,
        "Experience" as experience,
        "Status" as status
      from developers
      order by id desc
      limit 200
    `

    return NextResponse.json({ data: rows })
  } catch (e) {
    const message = e instanceof Error ? e.message : String(e)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}

