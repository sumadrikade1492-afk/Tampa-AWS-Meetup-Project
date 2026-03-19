"use client"

import { motion } from "framer-motion"
import { Twitter, Linkedin, Github, Youtube } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const socialLinks = [
  { icon: Twitter, href: "https://twitter.com/TampaBayAWS", label: "Twitter" },
  { icon: Linkedin, href: "https://www.linkedin.com/groups/Tampa-Bay-AWS-User-Group", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/tampa-bay-aws", label: "GitHub" },
  { icon: Youtube, href: "https://www.youtube.com/@TampaBayAWS", label: "YouTube" },
]

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-aws-navy border-t border-white/10 py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src="/images/aws-logo.avif"
              alt="AWS Logo"
              width={40}
              height={40}
              className="rounded"
            />
            <span className="font-bold text-lg text-white">Tampa Bay AWS User Group</span>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <Link href="/" className="text-white/60 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/talent" className="text-white/60 hover:text-white transition-colors">
              Talent Board
            </Link>
            <a href="#events" className="text-white/60 hover:text-white transition-colors">
              Events
            </a>
            <a href="https://www.meetup.com/tampa-bay-aws/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
              Meetup
            </a>
            <a href="#contact" className="text-white/60 hover:text-white transition-colors">
              Contact
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-aws-orange transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-white" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} Tampa Bay AWS User Group. All rights reserved.
            </p>
            <p className="text-white/30 text-xs mt-2">
              Part of the Global AWS User Group Community &mdash; 247 groups worldwide
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
