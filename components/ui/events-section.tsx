"use client"

import { useEffect, useState } from "react"

type MeetupEvent = {
  id: string
  title: string
  dateText?: string
  location?: string
  description?: string
  image?: string
  link: string
}

export function EventsSection() {
  const [events, setEvents] = useState<MeetupEvent[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    async function loadEvents() {
      try {
        const res = await fetch("/events.json", { cache: "no-store" })

        if (!res.ok) {
          throw new Error("HTTP " + res.status)
        }

        const data = await res.json()
        setEvents(data)
      } catch (err) {
        console.error(err)
        setError("Could not load meetup events")
      } finally {
        setLoading(false)
      }
    }

    loadEvents()
  }, [])

  return (
    <section id="events" className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-3">Community Meetups</h2>
        <p className="text-gray-600 mb-10">Browse meetup events.</p>

        {loading && <p>Loading events...</p>}
        {error && <p className="text-red-600">{error}</p>}

        {!loading && !error && events.length === 0 && (
          <p>No meetup events found.</p>
        )}

        {!loading && !error && events.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <div
                key={event.id}
                className="rounded-2xl border bg-white shadow-sm overflow-hidden"
              >
                {event.image ? (
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-52 object-cover"
                  />
                ) : (
                  <div className="w-full h-52 bg-gray-100 flex items-center justify-center text-gray-400">
                    No image
                  </div>
                )}

                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>

                  {event.dateText && (
                    <p className="text-sm text-gray-600 mb-2">{event.dateText}</p>
                  )}

                  {event.location && (
                    <p className="text-sm text-gray-600 mb-3">{event.location}</p>
                  )}

                  {event.description && (
                    <p className="text-sm text-gray-500 mb-4">{event.description}</p>
                  )}

                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-lg bg-orange-500 px-4 py-2 text-white font-medium"
                  >
                    View on Meetup
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
