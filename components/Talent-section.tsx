"use client"

import { useEffect, useState } from "react"
import supabase from "@/lib/supabase"
import { motion } from "framer-motion"

// ✅ Updated type based on your Supabase table
type Developer = {
  id: number
  name: string
  skills: string
  experience: string
  status: string
}

export function EventsSection() {
  const [events, setEvents] = useState<developer[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    ;(async () => {
      setLoading(true)

      const { data, error } = await supabase
        .from("developers")
        .select("*")

      if (cancelled) return

      if (error) {
        setError(error.message)
        setEvents([])
      } else {
        setEvents(Array.isArray(data) ? data : [])
        setError(null)
      }

      setLoading(false)
    })()

    return () => {
      cancelled = true
    }
  }, [])

  return (
    <section id="events" className="py-16 px-6 bg-gray-50">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">
          Developer Talent Board
        </h2>
        <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
          Explore developers and their skills from our Supabase database.
        </p>
      </div>

      {loading && (
        <p className="text-center text-gray-500">Loading developers...</p>
      )}

      {error && (
        <p className="text-center text-red-600">Error: {error}</p>
      )}

      {!loading && events.length === 0 && (
        <p className="text-center text-gray-500">No data found</p>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((dev, index) => (
          <motion.div
            key={dev.id || index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
          >
            {/* ✅ Name */}
            <h3 className="text-xl font-semibold mb-2">
              {dev.name}
            </h3>

            {/* ✅ Skills */}
            <p className="text-sm text-gray-600 mb-1">
              💻 Skills: {dev.skills}
            </p>

            {/* ✅ Experience */}
            <p className="text-sm text-gray-600 mb-2">
              📅 Experience: {dev.experience}
            </p>

            {/* ✅ Status */}
            <p className="text-sm text-gray-500">
              📢 Status: {dev.status}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}