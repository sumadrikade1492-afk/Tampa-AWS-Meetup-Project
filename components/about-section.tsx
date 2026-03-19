"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Users, Lightbulb, Rocket, Heart } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Community",
    description: "Connect with AWS enthusiasts and professionals",
  },
  {
    icon: Lightbulb,
    title: "Learning",
    description: "Hands-on workshops and expert presentations",
  },
  {
    icon: Rocket,
    title: "Innovation",
    description: "Stay updated with latest AWS services",
  },
  {
    icon: Heart,
    title: "Support",
    description: "Mentorship and career development",
  },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              About <span className="text-aws-orange">Us</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Whether you are an avid user of Amazon Web Services (AWS) today, or you just want to find out more about the advantages of using AWS, we welcome you to join a passionate group of enthusiasts who want to exchange ideas, thoughts, best practices and questions in a comfortable setting where everyone is welcome.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Sometimes we will have a sit-down session, often with subject matter experts from Amazon or local service providers. Sometimes we will have someone from a local business present their use case for the cloud. And other times we will have an informal happy hour so that we can get to know each other better and grow our personal networks.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              We are organizing this group because we are passionate about AWS and the cloud. The primary intent of this group is education &mdash; not sales. All presentations will be educational in scope.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-10 h-10 bg-aws-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-aws-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-aws-orange/20 to-aws-navy/20 rounded-3xl" />
              <div className="absolute inset-4 bg-gradient-to-br from-aws-navy to-aws-navy/80 rounded-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto bg-aws-orange/20 rounded-full flex items-center justify-center mb-6">
                    <Users className="w-12 h-12 text-aws-orange" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">3,196</h3>
                  <p className="text-white/70 mt-2">Community Members</p>
                  <div className="mt-6 grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="text-xl font-bold text-aws-orange">82+</p>
                      <p className="text-sm text-white/60">Events Held</p>
                    </div>
                    <div>
                      <p className="text-xl font-bold text-aws-orange">3</p>
                      <p className="text-sm text-white/60">Organizers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
