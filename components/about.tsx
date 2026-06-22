"use client"

import { motion } from "framer-motion"
import { MapPin, MessageCircle } from "lucide-react"

export function About() {
  return (
    <section className="relative px-5 py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative h-80 w-80 overflow-hidden rounded-2xl border border-border bg-muted shadow-xl transition duration-500 hover:scale-[1.03]">

            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent opacity-40" />

            <img
              src="/me.jpg"
              alt="איתי ברשי - קליסטניקס"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="mb-4 text-sm font-semibold tracking-[0.25em] text-primary">
            מי אני
          </p>

          <h2 className="text-3xl font-black leading-tight sm:text-4xl">
            אני איתי,
            <br />
            מאמן קליסטניקס ועמידות ידיים
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            אני עוזר למתאמנים לפתח כוח אמיתי, שליטה בגוף וביטחון דרך תנועה.
            האימונים מותאמים אישית לכל רמה – מתחילים ועד מתקדמים.
          </p>

          {/* Location */}
          <div className="mt-6 flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" />
            נס ציונה
          </div>

          {/* CTA */}
          <a
            href="https://wa.me/972532814545"
            target="_blank"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-black transition hover:scale-105"
          >
            <MessageCircle className="h-4 w-4" />
            דבר איתי בוואטסאפ
          </a>
        </motion.div>

      </div>
    </section>
  )
}
