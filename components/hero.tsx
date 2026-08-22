"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const easing = [0.22, 1, 0.36, 1] as const

const lineVariants = {
  hidden: { opacity: 0, y: 40, rotate: 2 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { duration: 0.9, ease: easing, delay: 0.2 + i * 0.15 },
  }),
}

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden px-5 pt-24">
      
      {/* רקע עם זוהרים עדינים */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/4 size-[45rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[150px]" />
      </div>

      {/* שכבת Gradient עדינה בתחתית בלבד */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-0" />

      <div className="mx-auto flex w-full max-w-6xl flex-col items-center text-center z-10">
        
        {/* לוגו: מסגרת דקה מאוד */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: easing }}
          className="relative mb-8"
        >
          <div className="flex items-center justify-center rounded-full bg-[#f0ece6] p-[1px] shadow-[0_10px_30px_-10px_rgba(245,180,80,0.2)]">
            <Image
              src="/gravitas-transparent.png"
              alt="לוגו GRAVITAS"
              width={300} 
              height={300} 
              priority
              className="size-44 object-contain sm:size-60"
            />
          </div>
        </motion.div>

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-5 inline-flex items-center rounded-full border border-border bg-card/30 px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground"
        >
          קליסטניקס · עמידות ידיים · תנועה 
        </motion.span>

        <h1 className="max-w-3xl text-balance text-5xl font-black leading-[1.05] tracking-tight sm:text-7xl">
          {["אימוני קליסטניקס", "לנוער", "בנס ציונה"].map((line, i) => (
            <motion.span key={line} custom={i} variants={lineVariants} initial="hidden" animate="show" className="block">
              {i === 1 ? (
                <span className="bg-gradient-to-l from-primary to-amber-300 bg-clip-text text-transparent">
                  {line}
                </span>
              ) : (
                line
              )}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8, ease: easing }}
          className="mt-8 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground"
        >
          בית לתנועה, פיתוח יכולות פיזיות מנטליות, חיבור לקהילה ויצירתיות לנוער שמכוונים גבוה.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8, ease: easing }}
          className="mt-9 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="https://wa.me/972552517518" 
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-2.5 overflow-hidden rounded-full bg-primary px-7 py-4 text-base font-bold text-primary-foreground shadow-[0_10px_40px_-10px_rgba(245,180,80,0.6)] transition-transform hover:scale-105"
          >
            <span className="relative">תיאום אימון היכרות בוואטסאפ</span>
          </a>
          <a
            href="#schedule"
            className="rounded-full border border-border px-7 py-4 text-base font-semibold text-foreground transition-colors hover:bg-card"
          >
            צפו בלוז האימונים
          </a>
        </motion.div>
      </div>
    </section>
  )
}
