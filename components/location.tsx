"use client"

import { motion } from "framer-motion"
import { MapPin } from "lucide-react"

export function Location() {
  return (
    <section className="py-24 px-5 bg-black text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-black mb-6">איפה אנחנו נמצאים?</h2>
          <div className="flex justify-center items-center gap-3 text-xl text-primary mb-8">
            <MapPin className="h-8 w-8" />
            <span className="font-bold">נס ציונה, ישראל</span>
          </div>
          <p className="text-muted-foreground text-lg">
            האימונים מתקיימים באווירה מקצועית ותומכת. 
            מזמין אותך להצטרף לקהילת התנועה שלנו ולהתחיל להתקדם לעבר היעדים שלך.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
