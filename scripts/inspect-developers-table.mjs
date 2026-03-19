import "dotenv/config"
import postgres from "postgres"

const url = process.env.DATABASE_URL
if (!url) {
  console.error("Missing DATABASE_URL in environment")
  process.exit(1)
}

const sql = postgres(url, { ssl: "require", max: 1 })

try {
  const cols = await sql`
    select column_name, data_type
    from information_schema.columns
    where table_schema = 'public'
      and table_name = 'developers'
    order by ordinal_position
  `

  console.log(cols)
} finally {
  await sql.end({ timeout: 5 })
}

