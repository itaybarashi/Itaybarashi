"use client"

import { motion } from "framer-motion"
import { MapPin, MessageCircle } from "lucide-react"
import Image from "next/image"

export function About() {
  return (
    <section id="about" className="relative px-5 py-28 overflow-hidden">
      
      {/* Background glow for depth */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-[35rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />

      <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">

        {/* Minimal Action Gallery - Fixed to .png for both */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex justify-center md:order-last"
        >
          <div className="relative h-[30rem] w-[26rem] flex items-center justify-center">
            {/* The primary portrait image (me.png) */}
            <div className="absolute top-0 right-0 h-80 w-64 overflow-hidden rounded-2xl border border-border bg-muted shadow-2xl z-10 transition duration-500 hover:scale-[1.03]">
              <Image
                src="/me.png"
                alt="איתי ברשי - דיוקן קליסטניקס"
                fill
                className="object-cover"
              />
            </div>
            {/* The action image (me-action.png) */}
            <div className="absolute bottom-0 left-0 h-64 w-60 overflow-hidden rounded-2xl border border-border bg-muted shadow-lg z-0 transition duration-500 hover:scale-[1.03]">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-transparent opacity-40 z-10" />
              <Image
                src="/me-action.png"
                alt="איתי ברשי - תרגיל קליסטניקס"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Text and CTA */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="mb-4 text-sm font-semibold tracking-[0.25em] text-primary">
            מי אני
          </p>

          <h2 className="text-3xl font-black leading-tight sm:text-4xl">
            היי, אני איתי
          </h2>

          <div className="mt-8 text-lg leading-relaxed text-muted-foreground space-y-6">
            <p>
              אני מתעסק בעולם הקליסטניקס והתנועה כבר קרוב לעשור. 
              הרבה חושבים שזה כישרון, או שהתחלתי מנקודת פתיחה גבוהה — אבל האמת היא שהתחלתי מאפס.
            </p>
            
            <p>
              לא הצלחתי לעשות אפילו מתח אחד, ולקח לי יותר מחצי שנה להגיע לעליית הכוח הראשונה שלי. תרגילים שלאנשים לוקח כמה חודשים, לי לקחו שנים.
            </p>

            <p>
              דווקא בגלל הדרך הזאת, למדתי להבין את הגוף לעומק, להתמודד עם כשלונות, להבין את החשיבות של התמדה וחזרות, ולעבור גם פציעות — וללמוד איך להתגבר עליהן.
            </p>

            <p>
              מעבר לכוח, מצאתי דרך, קהילה, וחברים לחיים שאני איתם עד היום.
            </p>

            <p className="text-foreground font-bold">
              האני מאמין שלי הוא פשוט: <span className="bg-gradient-to-l from-primary to-amber-300 bg-clip-text text-transparent">זה לא רק מה שאתה משיג — זה מי שאתה נהיה בדרך.</span>
            </p>

            <p>
              אני מאמין בללמד אתכם איך להתאמן, להבין את עקרונות האימון ולדעת לעבוד עם ההיגיון הבריא שלכם, הרבה יותר מאשר רק לחזור אחרי מה שאני עושה. המטרה היא שתבינו את ה'למה' מאחורי כל תנועה, ותהפכו למתאמנים עצמאיים וחזקים יותר.
            </p>
          </div>

          <div className="mt-10 flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" />
            נס ציונה
          </div>

          <a
            href="https://wa.me/972532814545"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 font-semibold text-black shadow-[0_10px_40px_-10px_rgba(245,180,80,0.4)] transition hover:scale-105"
          >
            <MessageCircle className="h-5 w-5" />
            דבר איתי בוואטסאפ
          </a>
        </motion.div>

      </div>
    </section>
  )
}
