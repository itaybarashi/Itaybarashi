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
          
          <div className="flex justify-center items-center gap-3 text-xl text-primary mb-6">
            <MapPin className="h-8 w-8" />
            <span className="font-bold">משה לרר 1, נס ציונה</span>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl mb-8 border border-white/10">
            <h3 className="font-bold text-lg mb-2">הוראות הגעה:</h3>
            <p className="text-muted-foreground">
              משה לרר 1 ממוקם במרכז מסחרי בשכונת ארגמן. עלה במעלית או במדרגות לקומה 2 והמשך עד שתגיע למבנה עגול (מול מרכז הפילאטיס Meytis Pilates Room).
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://www.google.com/maps/search/?api=1&query=משה+לרר+1+נס+ציונה" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition"
            >
              Google Maps
            </a>
            
            <a 
              href="https://waze.com/ul?q=משה+לרר+1+נס+ציונה&navigate=yes" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#33CCFF] text-black px-6 py-3 rounded-full font-bold hover:bg-[#2bb8e6] transition"
            >
              Waze
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
