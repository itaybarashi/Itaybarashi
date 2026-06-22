"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { WHATSAPP_LINK } from "@/lib/site-data"

const links = [
  { href: "#philosophy", label: "הגישה" },
  { href: "#disciplines", label: "תחומים" },
  { href: "#schedule", label: "לוז" },
]

export function SiteHeader() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        
        <a href="#top" className="flex items-center gap-2.5">
          
          {/* לוגו עם רקע לבן נקי */}
          <span className="flex items-center justify-center rounded-full bg-white p-2 shadow-md">
            <Image
              src="/gravitaslogo.png"
              alt="לוגו GRAVITAS"
              width={40}
              height={40}
              className="h-8 w-auto object-contain"
            />
          </span>

          {/* טקסט */}
          <span className="text-lg font-black tracking-[0.18em] text-foreground">
            GRAVITAS
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition-transform hover:scale-105"
        >
          אימון היכרות
        </a>
      </div>
    </motion.header>
  )
}
