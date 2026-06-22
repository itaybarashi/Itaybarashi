"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { WHATSAPP_LINK } from "@/lib/site-data"
import { WhatsappIcon } from "@/components/whatsapp-float"

export function FinalCta() {
  return (
    <section className="relative overflow-hidden px-5 py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 size-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[150px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto flex max-w-3xl flex-col items-center rounded-[2rem] border border-border bg-card/50 px-6 py-16 text-center backdrop-blur-sm"
      >
        <span className="flex items-center justify-center rounded-full bg-[#f0ece6] p-3.5">
          <Image
            src="/gravitas-transparent.png"
            alt="לוגו GRAVITAS"
            width={80}
            height={80}
            className="size-14 object-contain"
          />
        </span>
        <h2 className="mt-6 text-balance text-4xl font-black leading-tight sm:text-6xl">
          קבעו אימון היכרות
          <br />
          <span className="bg-gradient-to-l from-primary to-amber-300 bg-clip-text text-transparent">
            ללא עלות.
          </span>
        </h2>
        <p className="mt-5 max-w-md text-pretty leading-relaxed text-muted-foreground">
          חשוב לי שתגיע עם תשוקה ללמוד את הספורט ולהתפתח — ככה בונים צוות מנצח.
        </p>

        <motion.a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="mt-9 flex items-center gap-2.5 rounded-full bg-primary px-8 py-4 text-lg font-bold text-primary-foreground shadow-[0_10px_40px_-10px_rgba(245,180,80,0.6)]"
        >
          <WhatsappIcon className="size-5" />
          תיאום אימון היכרות בוואטסאפ
        </motion.a>
        <p className="mt-5 text-sm text-muted-foreground">נס ציונה · GRAVITAS</p>
      </motion.div>
    </section>
  )
}
