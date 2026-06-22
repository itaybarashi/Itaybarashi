"use client"

import { motion } from "framer-motion"
import { Reveal } from "@/components/reveal"
import { Users, GraduationCap, Compass } from "lucide-react"

const stats = [
  {
    value: "קהילה",
    label: "קבוצה שצומחת ומתפתחת יחד",
    icon: Users,
  },
  {
    value: "הדרכה מקצועית",
    label: "אימון מעשי עם הבנה תיאורטית מעמיקה",
    icon: GraduationCap,
  },
  {
    value: "ליווי אישי",
    label: "ליווי אישי גם מחוץ לאימונים ובניית תוכנית אישית לבית",
    icon: Compass,
  },
]

export function Philosophy() {
  return (
    <section id="philosophy" className="relative px-5 py-28">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="mb-5 text-sm font-semibold tracking-[0.25em] text-primary">
            הגישה
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="text-balance text-3xl font-black leading-tight sm:text-5xl">
            זה לא מה שאתה משיג,
            <br />
            <span className="bg-gradient-to-l from-primary to-amber-300 bg-clip-text text-transparent">
              זה מי שאתה נהיה.
            </span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            תנועה משפיעה באופן ישיר על הדרך שבה אנחנו תופסים את המציאות, על איך שאנחנו מרגישים, חושבים ופועלים. קליסטניקס היא דרך לפתח כוח מרבי במשקל גוף, במקביל לשיפור ההבנה של הגוף, פיתוח טווחי תנועה, השגת מטרות וצמיחה מנטלית.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {stats.map((s, i) => (
            <motion.div
              key={s.value}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -8 }}
              className="rounded-2xl border border-border bg-card/60 p-7 text-center transition-all duration-300 hover:border-primary/40 hover:shadow-lg"
            >
              <div className="mb-4 flex justify-center">
                <s.icon className="h-10 w-10 text-primary" />
              </div>

              <div className="text-xl font-black text-foreground">
                {s.value}
              </div>

              <div className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
