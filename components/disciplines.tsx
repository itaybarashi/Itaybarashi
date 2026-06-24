"use client"

import { motion } from "framer-motion"
import { Dumbbell, Activity, Sparkles } from "lucide-react"
import { Reveal } from "@/components/reveal"

const disciplines = [
  {
    icon: Dumbbell,
    title: "קליסטניקס",
    desc: (
      <>
        פיתוח כוח מרבי ביחס למשקל הגוף, ולמידת תרגילים כמו עליית כוח, פרונט לבר ופלאנץ׳.{" "}
        <a 
          href="https://he.wikipedia.org/wiki/%D7%A7%D7%9C%D7%99%D7%A1%D7%98%D7%A0%D7%99%D7%A7%D7%A1" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-primary hover:underline font-medium text-sm"
        >
          (מה זה קליסטניקס?)
        </a>
      </>
    ),
    accent: "from-primary/20",
  },
  {
    icon: Activity,
    title: "עמידות ידיים",
    desc: "פיתוח היכולת לעמוד על הידיים- פרס לעמידת ידיים, שכיבות סמיכה על הידיים ועד לעמידה על יד אחת.",
    accent: "from-rose-500/20",
  },
  {
    icon: Sparkles,
    title: "יצירתיות",
    desc: "פיתוח הצבע האישי ומימוש הפוטנציאל הייחודי של כל אחד ואחת.",
    accent: "from-emerald-400/20",
  },
]

export function Disciplines() {
  return (
    <section id="disciplines" className="px-5 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-4 text-sm font-semibold tracking-[0.25em] text-primary">
            תחומים
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="max-w-2xl text-balance text-3xl font-black leading-tight sm:text-5xl">
            על מה נעבוד באימונים
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {disciplines.map((d, i) => (
            <motion.article
              key={d.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card/60 p-8"
            >
              <div
                className={`pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-gradient-to-b ${d.accent} to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`}
              />
              <div className="relative flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-500 group-hover:scale-110">
                <d.icon className="size-6" />
              </div>
              <h3 className="relative mt-6 text-2xl font-black">{d.title}</h3>
              <p className="relative mt-3 text-pretty leading-relaxed text-muted-foreground">
                {d.desc}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
