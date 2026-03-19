"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden"
    >
      {/* Background with diagonal gradient */}
      <div className="absolute inset-0">
        {/* Navy blue base */}
        <div className="absolute inset-0 bg-aws-navy" />
        
        {/* Orange gradient overlay with wave shape */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 700"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="orangeGradient" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FF9900" stopOpacity="1" />
              <stop offset="50%" stopColor="#FF9900" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#FF9900" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M800,0 L1440,0 L1440,700 L400,700 Q600,500 700,300 Q750,150 800,0"
            fill="url(#orangeGradient)"
          />
        </svg>
        
        {/* Curved wave divider */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,60 Q360,120 720,60 T1440,60 L1440,120 L0,120 Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-4 justify-center lg:justify-start"
            >
              <span className="text-sm font-medium text-aws-orange bg-aws-orange/10 px-3 py-1 rounded-full">3,196 members</span>
              <span className="text-sm text-white/60">Tampa, FL</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight text-balance"
            >
              Tampa Bay AWS User Group
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-base sm:text-lg text-white/90 max-w-lg mx-auto lg:mx-0 text-pretty"
            >
              Exchange ideas, best practices, and questions with a passionate group of AWS enthusiasts in the Tampa Bay area. Everyone is welcome.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="bg-aws-orange hover:bg-aws-orange/90 text-white font-semibold px-6 py-5 rounded-full shadow-lg hover:shadow-xl transition-all"
                onClick={() => scrollToSection("#events")}
              >
                Join Next Meetup
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-aws-navy px-6 py-5 rounded-full bg-transparent transition-all"
                asChild
              >
                <Link href="/talent">Browse Talent Board</Link>
              </Button>
            </motion.div>
          </div>

          {/* Cloud Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-[400px] h-[300px]">
              {/* Main Cloud with AWS logo */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-4 right-8"
              >
                <div className="relative">
                  {/* Cloud shape */}
                  <svg width="180" height="120" viewBox="0 0 180 120" fill="none">
                    <ellipse cx="130" cy="80" rx="50" ry="35" fill="#87CEEB" fillOpacity="0.9" />
                    <ellipse cx="90" cy="70" rx="60" ry="45" fill="#87CEEB" fillOpacity="0.95" />
                    <ellipse cx="50" cy="85" rx="40" ry="30" fill="#87CEEB" fillOpacity="0.9" />
                    <ellipse cx="70" cy="50" rx="35" ry="28" fill="white" fillOpacity="0.95" />
                    <ellipse cx="110" cy="45" rx="40" ry="32" fill="white" fillOpacity="0.9" />
                  </svg>
                  {/* AWS Logo */}
                  <div className="absolute top-6 left-1/2 -translate-x-1/2">
                    <Image
                      src="/images/aws-logo.avif"
                      alt="AWS"
                      width={48}
                      height={48}
                      className="rounded"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Secondary cloud */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-0 left-4"
              >
                <svg width="80" height="60" viewBox="0 0 80 60" fill="none">
                  <ellipse cx="55" cy="40" rx="25" ry="18" fill="#87CEEB" fillOpacity="0.8" />
                  <ellipse cx="35" cy="35" rx="30" ry="22" fill="white" fillOpacity="0.9" />
                </svg>
              </motion.div>

              {/* Gear icons */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-2 right-4"
              >
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="1.5">
                  <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                  <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
                </svg>
              </motion.div>

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute top-16 right-0"
              >
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="1.5">
                  <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                  <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
                </svg>
              </motion.div>

              {/* Server/Monitor illustration */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-8 left-8"
              >
                <svg width="100" height="80" viewBox="0 0 100 80" fill="none">
                  {/* Monitor */}
                  <rect x="10" y="5" width="80" height="55" rx="4" fill="#1E3A5F" stroke="#2D4A6F" strokeWidth="2" />
                  <rect x="15" y="10" width="70" height="40" rx="2" fill="#2D4A6F" />
                  {/* Screen content */}
                  <rect x="20" y="15" width="25" height="3" rx="1" fill="#4A90D9" />
                  <rect x="20" y="22" width="40" height="2" rx="1" fill="#6B7280" />
                  <rect x="20" y="28" width="35" height="2" rx="1" fill="#6B7280" />
                  <rect x="20" y="34" width="45" height="2" rx="1" fill="#6B7280" />
                  {/* Monitor stand */}
                  <rect x="40" y="60" width="20" height="8" fill="#374151" />
                  <rect x="30" y="68" width="40" height="4" rx="2" fill="#4B5563" />
                </svg>
              </motion.div>

              {/* Database/Server stack */}
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                className="absolute bottom-4 right-16"
              >
                <svg width="60" height="70" viewBox="0 0 60 70" fill="none">
                  {/* Server boxes */}
                  <rect x="5" y="5" width="50" height="18" rx="3" fill="#1E3A5F" stroke="#FF9900" strokeWidth="1" />
                  <circle cx="15" cy="14" r="3" fill="#4ADE80" />
                  <rect x="22" y="12" width="25" height="4" rx="1" fill="#374151" />
                  
                  <rect x="5" y="26" width="50" height="18" rx="3" fill="#1E3A5F" stroke="#3B82F6" strokeWidth="1" />
                  <circle cx="15" cy="35" r="3" fill="#4ADE80" />
                  <rect x="22" y="33" width="25" height="4" rx="1" fill="#374151" />
                  
                  <rect x="5" y="47" width="50" height="18" rx="3" fill="#1E3A5F" stroke="#3B82F6" strokeWidth="1" />
                  <circle cx="15" cy="56" r="3" fill="#FBBF24" />
                  <rect x="22" y="54" width="25" height="4" rx="1" fill="#374151" />
                </svg>
              </motion.div>

              {/* Upload/Cloud icon */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                className="absolute top-20 left-24"
              >
                <div className="w-10 h-10 bg-aws-orange rounded-lg flex items-center justify-center shadow-lg">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                    <polyline points="17 8 12 3 7 8" />
                    <line x1="12" y1="3" x2="12" y2="15" />
                  </svg>
                </div>
              </motion.div>

              {/* Envelope icon */}
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                className="absolute bottom-20 left-0"
              >
                <div className="w-12 h-10 bg-aws-orange rounded flex items-center justify-center">
                  <svg width="20" height="16" viewBox="0 0 24 20" fill="none" stroke="white" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
              </motion.div>

              {/* Play button */}
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-12 right-4"
              >
                <div className="w-14 h-10 bg-aws-orange rounded-lg flex items-center justify-center shadow-lg">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                </div>
              </motion.div>

              {/* Small decorative dots */}
              <div className="absolute top-8 left-16 w-2 h-2 bg-aws-orange rounded-full opacity-60" />
              <div className="absolute top-24 right-24 w-1.5 h-1.5 bg-white rounded-full opacity-40" />
              <div className="absolute bottom-28 left-20 w-1.5 h-1.5 bg-aws-orange rounded-full opacity-50" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
