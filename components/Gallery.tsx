"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, ChevronLeft } from "lucide-react"

const images = [
  { src: "/gallery1.jpg", alt: "אימון קליסטניקס 3591" },
  { src: "/gallery2.jpg", alt: "אימון קליסטניקס 3592" },
  { src: "/gallery3.jpg", alt: "אימון קליסטניקס 3593" },
  { src: "/gallery4.jpg", alt: "אימון קליסטניקס 3595" },
  { src: "/gallery5.jpg", alt: "אימון קליסטניקס 3596" },
  { src: "/gallery6.jpg", alt: "אימון קליסטניקס 3597" },
  { src: "/gallery7.jpg", alt: "אימון קליסטניקס 3598" },
  { src: "/gallery8.jpg", alt: "אימון קליסטניקס 3598" },
  { src: "/gallery9.jpg", alt: "אימון קליסטניקס 3598" },
]

export function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // מעבר אוטומטי כל 4 שניות
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 4000)
    return () => clearInterval(timer)
  }, [currentIndex])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <section className="py-24 px-5 bg-black text-white overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">גלריית מתאמנים</h2>

        <div className="relative group aspect-video w-full max-w-4xl mx-auto overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
          
          {/* תמונות עם אנימציה */}
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>

          {/* שכבת הצללה עדינה למטה */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

          {/* כפתורי ניווט */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[#FCAE1E]"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[#FCAE1E]"
          >
            <ChevronRight size={24} />
          </button>

          {/* נקודות אינדיקציה */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 transition-all duration-300 rounded-full ${
                  i === currentIndex ? "w-6 bg-[#FCAE1E]" : "w-2 bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
