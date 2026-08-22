"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { WHATSAPP_LINK } from "@/lib/site-data"

const links = [
  { href: "#philosophy", label: "הגישה" },
  { href: "#schedule", label: "לוז" },
  { href: "#pricing", label: "תמחור" },
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
          <span className="font-bold tracking-tight text-foreground text-lg hidden sm:inline-block">
            GRAVITAS
          </span>
        </a>

        {/* קישורי הניווט */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* כפתור פעולה מהיר */}
        <div>
          <a
            href={WHATSAPP_LINK || "https://wa.me/972552517518"}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-primary px-5 py-2 text-xs md:text-sm font-bold text-primary-foreground shadow-lg transition-transform hover:scale-105"
          >
            תיאום אימון
          </a>
        </div>

      </div>
    </motion.header>
  )
}
