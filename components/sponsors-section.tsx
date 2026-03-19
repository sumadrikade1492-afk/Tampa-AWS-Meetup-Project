"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export function SponsorsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 bg-muted/50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Our <span className="text-aws-orange">Sponsors</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Thank you to our amazing partners
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center"
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-card rounded-2xl border border-border p-8 sm:p-12 flex flex-col items-center gap-6 shadow-sm hover:shadow-lg transition-all duration-300 max-w-lg w-full"
          >
            <Image
              src="/images/aws-logo.avif"
              alt="Amazon Web Services"
              width={80}
              height={80}
              className="rounded-lg"
            />
            <div className="text-center">
              <h3 className="text-xl font-bold text-foreground">Amazon</h3>
              <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                Amazon provides speakers, giveaways, and other support as the primary sponsor of the Tampa Bay AWS User Group.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-muted-foreground text-sm">
              Part of the{" "}
              <a
                href="https://www.meetup.com/pro/global-aws/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-aws-orange hover:underline font-medium"
              >
                Global AWS User Group Community
              </a>
              {" "}&mdash; 247 groups worldwide
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
