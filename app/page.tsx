"use client"

import { useState, useEffect } from "react"
import { Users, Laptop, Globe, HandMetal } from "lucide-react"
import Link from "next/link"

export default function GatewayPage() {
  const [lang, setLang] = useState<"he" | "en">("en")
  const [isLoading, setIsLoading] = useState(true)

  // זיהוי מיקום אוטומטי בכניסה הראשונה
  useEffect(() => {
    async function detectUserLanguage() {
      try {
        // בדיקת שפת דפדפן כגיבוי ראשוני מהיר
        const browserLang = navigator.language || navigator.languages[0];
        if (browserLang && browserLang.startsWith("he")) {
          setLang("he");
          setIsLoading(false);
          return;
        }

        // בדיקת מיקום מבוססת IP (חינמי ומהיר)
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        
        if (data && data.country_code === "IL") {
          setLang("he");
        } else {
          setLang("en");
        }
      } catch (error) {
        // ברירת מחדל במקרה של שגיאת ברשת
        setLang("en");
      } finally {
        setIsLoading(false);
      }
    }

    detectUserLanguage();
  }, []);

  // בזמן זיהוי קצרצר אפשר להציג מסך שחור נקי כדי שלא יהפוך שפות מול עיני המשתמש
  if (isLoading) {
    return <main className="min-h-screen bg-black" />;
  }

  return (
    <main className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center px-5 py-12 overflow-hidden">
      
      {/* זוהר עדין ברקע */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="size-[35rem] -translate-y-24 rounded-full bg-primary/10 blur-[150px]" />
      </div>

      {/* מתג שפה ידני בפינה (למקרה שמישהו רוצה להחליף) */}
      <div className="absolute top-6 left-6 z-20 flex items-center gap-2">
        <Globe className="size-4 text-zinc-400" />
        <button 
          onClick={() => setLang(lang === "he" ? "en" : "he")}
          className="text-sm font-medium text-zinc-300 hover:text-white border border-white/20 rounded-full px-3 py-1 bg-white/5 transition"
        >
          {lang === "he" ? "English" : "עברית"}
        </button>
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-12 z-10">
        
        {/* כותרת גדולה ומרכזית */}
        <div className="space-y-3">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight">
            {lang === "he" ? (
              <>
                בחר את <span className="bg-gradient-to-l from-amber-300 to-amber-100 bg-clip-text text-transparent">מסלול האימון</span> שלך
              </>
            ) : (
              <>
                Choose Your <span className="bg-gradient-to-l from-amber-300 to-amber-100 bg-clip-text text-transparent">Training</span> Path
              </>
            )}
          </h1>
        </div>

        {/* שלוש אפשרויות בחירה */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 ${lang === "he" ? "text-right" : "text-left"}`}>
          
          {/* אופציה 1: Online Coaching */}
          <Link 
            href="/online-coaching" 
            className="group relative bg-zinc-900/80 border border-white/10 hover:border-amber-300/50 p-6 rounded-3xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between shadow-xl"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-300/10 flex items-center justify-center text-amber-300">
                <Laptop className="size-6" />
              </div>
              <h2 className="text-xl font-bold">
                {lang === "he" ? "אונליין קואוצ'ינג (עולמי)" : "Online Coaching"}
              </h2>
              <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
                {lang === "he" 
                  ? "תוכניות אימון אישיות, ניתוח טכניקה וליווי לכל הרמות ברחבי העולם."
                  : "Custom programming, video form analysis, and global guidance for all levels."}
              </p>
            </div>
            <span className="mt-6 inline-block text-xs md:text-sm font-bold text-amber-300 group-hover:translate-x-1 transition-transform">
              {lang === "he" ? "עבור לאונליין →" : "Explore Online →"}
            </span>
          </Link>

          {/* אופציה 2: Handbalance Courses */}
          <Link 
            href="/handbalance-course" 
            className="group relative bg-zinc-900/80 border border-white/10 hover:border-amber-300/50 p-6 rounded-3xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between shadow-xl"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-300/10 flex items-center justify-center text-amber-300">
                <HandMetal className="size-6" />
              </div>
              <h2 className="text-xl font-bold">
                {lang === "he" ? "קורסי עמידות ידיים (פרונטלי)" : "Handbalance Courses"}
              </h2>
              <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
                {lang === "he" 
                  ? "קורס ממוקד למתחילים — 5 מפגשים פרונטליים לבניית יסודות ועמידה יציבה."
                  : "Focused beginner courses — 5 in-person sessions to master handbalance basics."}
              </p>
            </div>
            <span className="mt-6 inline-block text-xs md:text-sm font-bold text-amber-300 group-hover:translate-x-1 transition-transform">
              {lang === "he" ? "לפרטים על הקורס →" : "Explore Courses →"}
            </span>
          </Link>

          {/* אופציה 3: Face to Face (נוער 12-16) */}
          <Link 
            href="/local" 
            className="group relative bg-zinc-900/80 border border-white/10 hover:border-amber-300/50 p-6 rounded-3xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between shadow-xl"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-300/10 flex items-center justify-center text-amber-300">
                <Users className="size-6" />
              </div>
              <h2 className="text-xl font-bold">
                {lang === "he" ? "אימונים פרונטליים לנוער" : "Face-to-Face (Israel)"}
              </h2>
              <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
                {lang === "he" 
                  ? "אימוני קליסטניקס, עמידות ידיים ותנועה לבני נוער בגילאי 12-16 בנס ציונה."
                  : "In-person calisthenics and handbalance training for youth (ages 12-16) in Ness Ziona."}
              </p>
            </div>
            <span className="mt-6 inline-block text-xs md:text-sm font-bold text-amber-300 group-hover:translate-x-1 transition-transform">
              {lang === "he" ? "הכנס לאתר הסטודיו ←" : "Enter Local Site →"}
            </span>
          </Link>

        </div>

      </div>
    </main>
  )
}
