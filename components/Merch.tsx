"use client"

import { motion } from "framer-motion"
import { ShoppingBag } from "lucide-react"

export function Merch() {
  return (
    <section className="py-24 px-5 bg-zinc-950 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4 tracking-tighter uppercase">
            GRAVITAS <span className="text-[#FCAE1E]">GEAR</span>
          </h2>
          <p className="text-zinc-400 text-lg">חולצות בעיצוב ציוד קליסטניקס.</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* תמונה ראשית */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <img 
              src="/shirt1.png" 
              alt="חולצת גרביטס קדמית ואחורית" 
              className="rounded-2xl w-full shadow-2xl border border-white/10"
            />
          </motion.div>

          {/* תמונה משלימה - פלטת צבעים */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <img 
              src="/shirt2.png" 
              alt="מגוון צבעי חולצות גרביטס" 
              className="rounded-2xl w-full shadow-2xl border border-white/10"
            />
          </motion.div>
        </div>

        {/* כפתור הזמנה */}
        <div className="mt-16 text-center">
          <a 
            href="https://wa.me/972532814545?text=היי איתי, אשמח להזמין חולצה של גרביטס!" 
            className="inline-flex items-center gap-3 bg-[#FCAE1E] text-black font-bold py-4 px-10 rounded-full hover:bg-white transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(252,174,30,0.3)]"
          >
            <ShoppingBag size={20} />
            <span>להזמנה בווטסאפ (₪89)</span>
          </a>
        </div>
      </div>
    </section>
  )
}
