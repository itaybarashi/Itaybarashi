"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function Philosophy() {
  return (
    <section id="philosophy" className="relative px-5 py-28 overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-[35rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />
      
      <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
        {/* Gallery */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }} 
          className="flex justify-center md:order-last"
        >
          <div className="relative h-[30rem] w-[26rem]">
            <div className="absolute top-0 right-0 h-80 w-64 overflow-hidden rounded-2xl shadow-2xl z-10 transition hover:scale-[1.03]">
              <Image src="/me.png" alt="דיוקן" fill className="object-cover" />
            </div>
            <div className="absolute bottom-0 left-0 h-64 w-60 overflow-hidden rounded-2xl shadow-lg z-0 transition hover:scale-[1.03]">
              <div className="absolute inset-0 bg-primary/20 z-10" />
              <Image src="/me-action.png" alt="פעולה" fill className="object-cover" />
            </div>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-black mb-8">הגישה שלי</h2>
          <div className="text-lg text-muted-foreground space-y-6 leading-relaxed">
            <p>האני מאמין שלי פשוט: <strong>זה לא רק מה שאתה משיג — זה מי שאתה נהיה בדרך.</strong></p>
            <p>אני מאמין בללמד אתכם איך להתאמן, להבין את ה'למה' מאחורי כל תנועה, ולהפוך למתאמנים עצמאיים וחזקים יותר.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
