"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const galleryImages = [
  { id: 1, src: "/images/gallery/1-presentation.jpg", alt: "Tech presentation at Tampa AWS Meetup" },
  { id: 2, src: "/images/gallery/2-networking.jpg", alt: "Networking session with cloud professionals" },
  { id: 3, src: "/images/gallery/3-workshop.jpg", alt: "Hands-on workshop with AWS services" },
  { id: 4, src: "/images/gallery/4-community.jpg", alt: "Community gathering at tech hub" },
  { id: 5, src: "/images/gallery/5-speaker.jpg", alt: "Speaker presenting on cloud architecture" },
  { id: 6, src: "/images/gallery/6-collaboration.jpg", alt: "Team building and collaboration" },
]

export function GallerySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="gallery" className="py-24 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Event <span className="text-primary">Gallery</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Highlights from our past meetups and events
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
