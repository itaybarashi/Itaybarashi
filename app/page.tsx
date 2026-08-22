"use client"

import { useState } from "react"
import { Users, Laptop, Globe } from "lucide-react"
import Link from "next/link"

export default function GatewayPage() {
  const [lang, setLang] = useState<"he" | "en">("en")

  return (
    <main className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center px-5 overflow-hidden">
      
      {/* זוהר עדין ברקע */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="size-[30rem] -translate-y-24 rounded-full bg-primary/10 blur-[150px]" />
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

      <div className="max-w-3xl mx-auto text-center space-y-12 z-10">
        
        {/* כותרת גדולה ומרכזית בלי לוגו */}
        <div className="space-y-3">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight">
            {lang === "he" ? "בחר את מסלול האימון שלך" : "Choose Your Training Path"}
          </h1>
        </div>

        {/* שתי אפשרויות בחירה */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${lang === "he" ? "text-right" : "text-left"}`}>
          
          {/* אופציה 1: Online Coaching */}
          <Link 
            href="/online-coaching" 
            className="group relative bg-zinc-900/80 border border-white/10 hover:border-primary/50 p-8 rounded-3xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between shadow-xl"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
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
            <span className="mt-8 inline-block text-sm font-bold text-primary group-hover:translate-x-1 transition-transform">
              {lang === "he" ? "עבור לאונליין →" : "Explore Online →"}
            </span>
          </Link>

          {/* אופציה 2: Face to Face (נוער 12-16) עם ישראל בסוגריים */}
          <Link 
            href="/local" 
            className="group relative bg-zinc-900/80 border border-white/10 hover:border-primary/50 p-8 rounded-3xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between shadow-xl"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <Users className="size-6" />
              </div>
              <h2 className="text-2xl font-bold">
                {lang === "he" ? "אימונים פרונטליים (נס ציונה)" : "Face-to-Face (Israel)"}
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {lang === "he" 
                  ? "אימוני קליסטניקס, עמידות ידיים ותנועה לבני נוער בגילאי 12-16 בסטודיו."
                  : "In-person calisthenics and handbalance training for youth (ages 12-16) in Ness Ziona."}
              </p>
            </div>
            <span className="mt-8 inline-block text-sm font-bold text-primary group-hover:translate-x-1 transition-transform">
              {lang === "he" ? "הכנס לאתר הישראלי ←" : "Enter Local Site →"}
            </span>
          </Link>

        </div>

      </div>
    </main>
  )
}
