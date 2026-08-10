"use client"

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
    <section id="top" className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-5 pt-24 pb-12">
      
      {/* 1. תמונת הרקע המלאה */}
      <div className="absolute inset-0 -z-20">
        <img
          src="/ShaiBachar.jpg"
          alt="עמידת ידיים גרביטס בשקיעה"
          className="h-full w-full object-cover object-center scale-105 transform transition-transform duration-1000 grayscale contrast-125 brightness-75"
          // שים לב: הוספתי כאן פילטרים (grayscale, contrast, brightness) כך שהתמונה תהפוך אוטומטית לשחור-לבן דרמטי ומלא קונטרסט שיושב מושלם עם הרקע השחור!
        />
      </div>

      {/* 2. שכבת הצללה כהה ומטושטשת לשמירה על קריאות הטקסט */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-black/60 backdrop-blur-[2px]" />

      {/* 3. שכבת Gradient עדינה בתחתית למעבר חלק */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-0" />

      <div className="mx-auto flex w-full max-w-6xl flex-col items-center text-center z-10">
        
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-5 inline-flex items-center rounded-full border border-white/20 bg-black/40 backdrop-blur-md px-4 py-1.5 text-xs font-medium tracking-wide text-zinc-200 shadow-lg"
        >
          קליסטניקס · עמידות ידיים · תנועה 
        </motion.span>

        <h1 className="max-w-3xl text-balance text-5xl font-black leading-[1.05] tracking-tight sm:text-7xl text-white drop-shadow-lg">
          {["אימוני קליסטניקס", "לנוער", "בנס ציונה"].map((line, i) => (
            <motion.span key={line} custom={i} variants={lineVariants} initial="hidden" animate="show" className="block">
              {i === 1 ? (
                <span className="bg-gradient-to-l from-primary to-amber-300 bg-clip-text text-transparent drop-shadow">
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
          transition={{ delay: 0.7, duration: 0.8, ease: easing }}
          className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-zinc-200 drop-shadow"
        >
          בית לתנועה, פיתוח יכולות פיזיות מנטליות, חיבור לקהילה ויצירתיות לנוער שמכוונים גבוה.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8, ease: easing }}
          className="mt-9 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="https://wa.me/972532814545" 
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-2.5 overflow-hidden rounded-full bg-primary px-7 py-4 text-base font-bold text-primary-foreground shadow-[0_10px_40px_-10px_rgba(245,180,80,0.6)] transition-transform hover:scale-105"
          >
            <span className="relative">תיאום אימון היכרות בוואטסאפ</span>
          </a>
          <a
            href="#schedule"
            className="rounded-full border border-white/30 bg-black/40 backdrop-blur-md px-7 py-4 text-base font-semibold text-white transition-colors hover:bg-black/60 shadow-lg"
          >
            צפו בלוז האימונים
          </a>
        </motion.div>
      </div>
    </section>
  )
}
