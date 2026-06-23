"use client"

import { motion } from "framer-motion"
import { Instagram } from "lucide-react" // וודא שמותקן אצלך lucide-react

export function InstagramFloat() {
  return (
    <motion.a
      href="https://www.instagram.com/itay_barashi_"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      aria-label="בקרו באינסטגרם שלנו"
      className="fixed bottom-24 left-5 z-50 flex items-center justify-center p-3 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white shadow-[0_8px_30px_rgba(238,42,123,0.35)]"
    >
      <Instagram size={28} />
    </motion.a>
  )
}
