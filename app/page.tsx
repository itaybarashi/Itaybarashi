"use client"

import { useState } from "react"
import { Users, Laptop, Globe } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function GatewayPage() {
  const [lang, setLang] = useState<"he" | "en">("en")

  return (
    <main className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center px-5 overflow-hidden">
      
      {/* זוהר עדין ברקע מאחורי הלוגו */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="size-[30rem] -translate-y-24 rounded-full bg-amber-500/10 blur-[120px]" />
      </div>

      {/* מתג שפה בפינה */}
      <div className="absolute top-6 left-6 z-20 flex items-center gap-2">
        <Globe className="size-4 text-zinc-400" />
        <button 
          onClick={() => setLang(lang === "he" ? "en" : "he")}
          className="text-sm font-medium text-zinc-300 hover:text-white border border-white/20 rounded-full px-3 py-1 bg-white/5 transition"
        >
          {lang === "he" ? "English" : "עברית"}
        </button>
      </div>

      <div className="max-w-3xl mx-auto text-center space-y-10 z-10">
        
        {/* לוגו עם המסגרת הבהירה המקורית */}
        <div className="flex flex-col items-center space-y-6">
          <div className="relative">
            <div className="flex items-center justify-center rounded-full bg-[#f0ece6] p-[2px] shadow-[0_10px_30px_-10px_rgba(245,180,80,0.3)]">
              <Image
                src="/gravitas-transparent.png"
                alt="לוגו GRAVITAS"
                width={120} 
                height={120} 
                priority
                className="size-28 object-contain"
              />
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl font-black tracking-tight">
              <span className="text-amber-400 drop-shadow-[0_0_25px_rgba(245,180,80,0.4)]">GRAVITAS</span> <span className="text-white">MOVEMENT</span>
            </h1>
            <p className="text-lg text-zinc-400">
              {lang === "he" ? "בחר את מסלול האימון המתאים לך" : "Choose your training path"}
            </p>
          </div>
        </div>

        {/* שתי אפשרויות בחירה */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${lang === "he" ? "text-right" : "text-left"}`}>
          
          {/* אופציה 1: Online Coaching */}
          <Link 
            href="/online-coaching" 
            className="group relative bg-zinc-900/80 border border-white/10 hover:border-amber-400/50 p-8 rounded-3xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between shadow-xl"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-400">
                <Laptop className="size-6" />
              </div>
              <h2 className="text-2xl font-bold">
                {lang === "he" ? "אונליין קואוצ'ינג (עולמי)" : "Online Coaching"}
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {lang === "he" 
                  ? "תוכניות אימון אישיות, ניתוח טכניקה וליווי לכל הגילאים ולכל הרמות ברחבי העולם (באנגלית)."
                  : "Custom programming, video form analysis, and global guidance for all levels."}
              </p>
            </div>
            <span className="mt-8 inline-block text-sm font-bold text-amber-400 group-hover:translate-x-1 transition-transform">
              {lang === "he" ? "עבור לאונליין →" : "Explore Online →"}
            </span>
          </Link>

          {/* אופציה 2: Face to Face (נוער 12-16) */}
          <Link 
            href="/local" 
            className="group relative bg-zinc-900/80 border border-white/10 hover:border-amber-400/50 p-8 rounded-3xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between shadow-xl"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-400">
                <Users className="size-6" />
              </div>
              <h2 className="text-2xl font-bold">
                {lang === "he" ? "אימונים פרונטליים (נס ציונה)" : "Face-to-Face Training"}
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {lang === "he" 
                  ? "אימוני קליסטניקס, עמידות ידיים ותנועה לבני נוער בגילאי 12-16 בסטודיו."
                  : "In-person calisthenics and handbalance training for youth (ages 12-16) in Ness Ziona."}
              </p>
            </div>
            <span className="mt-8 inline-block text-sm font-bold text-amber-400 group-hover:translate-x-1 transition-transform">
              {lang === "he" ? "הכנס לאתר הישראלי ←" : "Enter Local Site →"}
            </span>
          </Link>

        </div>

      </div>
    </main>
  )
}
