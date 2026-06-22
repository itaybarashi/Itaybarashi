"use client"

import { motion } from "framer-motion"
import { MapPin, MessageCircle } from "lucide-react"

export function About() {
  return (
    <section id="about" className="relative px-5 py-28 bg-muted/20">
      <div className="mx-auto max-w-3xl text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-black mb-8">מי אני</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            אני מתעסק בעולם הקליסטניקס והתנועה כבר קרוב לעשור. התחלתי מאפס, למדתי להבין את הגוף לעומק, ואני כאן כדי לעזור לך להפוך למתאמן עצמאי וחזק יותר.
          </p>
          <div className="flex justify-center items-center gap-2 text-muted-foreground mb-8">
            <MapPin className="h-4 w-4 text-primary" /> נס ציונה
          </div>
          <a
            href="https://wa.me/972532814545"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 font-bold text-black transition hover:scale-105"
          >
            <MessageCircle className="h-5 w-5" />
            דבר איתי בוואטסאפ
          </a>
        </motion.div>
      </div>
    </section>
  )
}
