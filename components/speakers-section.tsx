"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Linkedin, Twitter } from "lucide-react"

const speakers = [
  {
    name: "Sam Kasimalla",
    role: "Lead Organizer",
    image: "/speakers/speaker-1.jpg",
  },
  {
    name: "Amazon AWS",
    role: "Speakers, Giveaways & Support",
    image: "/speakers/speaker-2.jpg",
  },
  {
    name: "Local SMEs",
    role: "Subject Matter Experts",
    image: "/speakers/speaker-3.jpg",
  },
  {
    name: "Community",
    role: "Local Business Use Cases",
    image: "/speakers/speaker-4.jpg",
  },
]

export function SpeakersSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="speakers" className="py-24 bg-aws-navy" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Organizers & <span className="text-aws-orange">Speakers</span>
          </h2>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
            Led by Sam Kasimalla and supported by Amazon, our meetups feature subject matter experts, local business leaders, and AWS community builders
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative mb-4 mx-auto w-32 h-32 sm:w-40 sm:h-40"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-aws-orange to-aws-orange/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-1 bg-aws-navy rounded-full overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white/50">
                      {speaker.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                </div>
              </motion.div>

              <h3 className="text-lg font-semibold text-white group-hover:text-aws-orange transition-colors">
                {speaker.name}
              </h3>
              <p className="text-sm text-white/60 mt-1">{speaker.role}</p>

              <div className="flex justify-center gap-3 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <a
                  href="#"
                  className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-aws-orange transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-white" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-aws-orange transition-colors"
                >
                  <Twitter className="w-4 h-4 text-white" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
