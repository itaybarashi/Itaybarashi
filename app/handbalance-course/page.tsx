"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, X, Globe, ArrowLeft, Target, Users, Calendar, Clock } from "lucide-react"
import Link from "next/link"

export default function HandbalanceCoursePage() {
  const [lang, setLang] = useState<"he" | "en">("he")

  return (
    <main className="min-h-screen bg-black text-white selection:bg-amber-300 selection:text-black">
      
      {/* כפתור חזרה לדף הראשי ומתג שפה */}
      <div className="absolute top-6 left-6 right-6 z-20 flex items-center justify-between pointer-events-none">
        <Link 
          href="/"
          className="pointer-events-auto inline-flex items-center gap-2 text-sm font-medium text-zinc-300 hover:text-white border border-white/20 rounded-full px-4 py-2 bg-black/50 backdrop-blur-md transition shadow-lg"
        >
          <ArrowLeft className="size-4" /> {lang === "he" ? "חזרה לשער" : "Back to Gateway"}
        </Link>

        <button 
          onClick={() => setLang(lang === "he" ? "en" : "he")}
          className="pointer-events-auto flex items-center gap-2 text-sm font-medium text-zinc-300 hover:text-white border border-white/20 rounded-full px-4 py-2 bg-black/50 backdrop-blur-md transition shadow-lg"
        >
          <Globe className="size-4" /> {lang === "he" ? "English" : "עברית"}
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative flex min-h-[85vh] items-center justify-center px-5 pt-28 text-center overflow-hidden bg-zinc-950">
        <div className="absolute inset-0 -z-20 bg-gradient-to-b from-zinc-900 via-black to-black" />
        
        <div className="max-w-4xl mx-auto space-y-8 z-10">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-1.5 text-sm font-medium text-amber-300 backdrop-blur-md shadow-lg"
          >
            {lang === "he" ? "קורס פרונטלי בנס ציונה" : "In-Person Course • Ness Ziona"}
          </motion.span>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] drop-shadow-lg text-white"
          >
            {lang === "he" ? (
              <>
                קורס עמידות ידיים למתחילים <br />
                <span className="bg-gradient-to-l from-amber-300 to-amber-100 bg-clip-text text-transparent drop-shadow">
                  שליטה, איזון ועצמאות.
                </span>
              </>
            ) : (
              <>
                Beginner Handbalance Course <br />
                <span className="bg-gradient-to-l from-amber-300 to-amber-100 bg-clip-text text-transparent drop-shadow">
                  Control, Balance & Independence.
                </span>
              </>
            )}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed drop-shadow"
          >
            {lang === "he" 
              ? "קורס ממוקד להקניית הבנה עמוקה, שליטה וכלים פרקטיים. משלב עבודה טכנית, פיתוח מודעות והתמודדות עם חסמים מנטליים."
              : "A focused course designed to provide deep understanding, control, and practical tools for handbalance mastery."}
          </motion.p>
        </div>
      </section>

      {/* Course Overview & Goals */}
      <section className="py-20 px-5 bg-black border-t border-white/10" dir={lang === "he" ? "rtl" : "ltr"}>
        <div className="max-w-5xl mx-auto space-y-16">
          
          {/* מטרות הקורס */}
          <div className="bg-zinc-950 border border-white/10 p-8 md:p-12 rounded-3xl space-y-8 shadow-2xl">
            <div className="flex items-center gap-3 border-b border-white/10 pb-6">
              <Target className="size-8 text-amber-300" />
              <h2 className="text-3xl font-black">{lang === "he" ? "מטרות הקורס" : "Course Goals"}</h2>
            </div>
            
            <p className="text-zinc-400 text-base leading-relaxed">
              {lang === "he" ? "בסיום הקורס המשתתפים ידעו:" : "By the end of the course, participants will know how to:"}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-zinc-300 text-sm md:text-base">
              <div className="flex items-start gap-3">
                <Check className="size-5 text-amber-300 shrink-0 mt-1" />
                <span>{lang === "he" ? "להבין עקרונות איזון (שליטה באצבעות, קו גוף, Underbalance / Overbalance)" : "Understand balance principles (finger control, body line)"}</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="size-5 text-amber-300 shrink-0 mt-1" />
                <span>{lang === "he" ? "לבצע כניסה לעמידת ידיים בצורה מבוקרת ובטוחה" : "Execute controlled and safe handstand entries"}</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="size-5 text-amber-300 shrink-0 mt-1" />
                <span>{lang === "he" ? "להחזיק עמידת ידיים (קיר -> ניתוקים -> ניסיונות חופשיים)" : "Hold handstands (wall -> floats -> free attempts)"}</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="size-5 text-amber-300 shrink-0 mt-1" />
                <span>{lang === "he" ? "לשלוט ביציאה מנפילה ולהתמודד עם פחד מהיפוך" : "Control bailouts and overcome inversion fear"}</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="size-5 text-amber-300 shrink-0 mt-1" />
                <span>{lang === "he" ? "לבנות תוכנית אימון אישית, להבין נפח, תדירות ופיתוח כוח" : "Build personal training plans, understand volume & frequency"}</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="size-5 text-amber-300 shrink-0 mt-1" />
                <span>{lang === "he" ? "שליטה במנחים (Hollow / Arch, APT / PPT) ועבודת כתפיים" : "Master shapes (Hollow/Arch) and shoulder mechanics"}</span>
              </div>
            </div>
          </div>

          {/* קהל יעד */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zinc-950 border border-white/10 p-8 rounded-3xl space-y-6 shadow-xl">
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <Users className="size-6 text-amber-300" />
                <h3 className="text-xl font-bold">{lang === "he" ? "קהל יעד (למי זה מתאים?)" : "Target Audience"}</h3>
              </div>
              <ul className="space-y-3 text-sm text-zinc-300">
                <li className="flex items-start gap-2">
                  <Check className="size-4 text-amber-300 shrink-0 mt-1" />
                  <span>{lang === "he" ? "מתאמנים מתחילים עד בינוניים בעמידות ידיים" : "Beginner to intermediate handstand practitioners"}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-4 text-amber-300 shrink-0 mt-1" />
                  <span>{lang === "he" ? "אנשים שניסו אך חסרים כלים טכניים לאיזון ושליטה" : "People lacking technical tools for balance and control"}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-4 text-amber-300 shrink-0 mt-1" />
                  <span>{lang === "he" ? "מתאמנים עם רקע בסיסי בעבודה עם משקל גוף" : "Practitioners with basic bodyweight training background"}</span>
                </li>
              </ul>
            </div>

            <div className="bg-zinc-950 border border-red-500/20 p-8 rounded-3xl space-y-6 shadow-xl">
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <X className="size-6 text-red-400" />
                <h3 className="text-xl font-bold">{lang === "he" ? "למי הקורס אינו מתאים?" : "Not Suitable For"}</h3>
              </div>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li className="flex items-start gap-2">
                  <X className="size-4 text-red-400 shrink-0 mt-1" />
                  <span>{lang === "he" ? "מתאמנים המחזיקים עמידת ידיים חופשית מעל 10 שניות" : "Practitioners holding free handstands > 10 seconds"}</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="size-4 text-red-400 shrink-0 mt-1" />
                  <span>{lang === "he" ? "מתאמנים ללא יכולת בסיסית לשאת משקל על הידיים" : "Practitioners unable to bear weight on wrists/hands"}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* מבנה הקורס ומבנה שיעור */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zinc-950 border border-white/10 p-8 rounded-3xl space-y-4 shadow-xl">
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <Calendar className="size-6 text-amber-300" />
                <h3 className="text-xl font-bold">{lang === "he" ? "מבנה הקורס" : "Course Structure"}</h3>
              </div>
              <ul className="space-y-2 text-sm text-zinc-300">
                <li>• <strong>{lang === "he" ? "משך הקורס:" : "Duration:"}</strong> 5 {lang === "he" ? "מפגשים" : "sessions"}</li>
                <li>• <strong>{lang === "he" ? "תדירות:" : "Frequency:"}</strong> {lang === "he" ? "פעם בשבוע" : "Once a week"}</li>
                <li>• <strong>{lang === "he" ? "אורך כל מפגש:" : "Session length:"}</strong> 90 {lang === "he" ? "דקות" : "minutes"}</li>
              </ul>
            </div>

            <div className="bg-zinc-950 border border-white/10 p-8 rounded-3xl space-y-4 shadow-xl">
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <Clock className="size-6 text-amber-300" />
                <h3 className="text-xl font-bold">{lang === "he" ? "מבנה שיעור טיפוסי" : "Typical Class Breakdown"}</h3>
              </div>
              <ul className="space-y-2 text-sm text-zinc-300">
                <li>• {lang === "he" ? "חלק תיאורטי (10–15 דקות)" : "Theoretical part (10-15 min)"}</li>
                <li>• {lang === "he" ? "חלק טכני (15–20 דקות)" : "Technical part (15-20 min)"}</li>
                <li>• {lang === "he" ? "תרגול מודרך (30–40 דקות)" : "Guided practice (30-40 min)"}</li>
                <li>• {lang === "he" ? "עבודה חופשית וליווי אישי (15–25 דקות)" : "Free work & personal coaching (15-25 min)"}</li>
              </ul>
            </div>
          </div>

          {/* פירוט 5 המפגשים */}
          <div className="bg-zinc-950 border border-white/10 p-8 md:p-12 rounded-3xl space-y-8 shadow-2xl">
            <h3 className="text-3xl font-black text-center mb-8">{lang === "he" ? "פירוט המפגשים" : "Session Breakdown"}</h3>
            
            <div className="space-y-6 text-sm md:text-base">
              <div className="border-b border-white/10 pb-4">
                <h4 className="font-bold text-amber-300 text-lg">🟢 {lang === "he" ? "מפגש 1 – יסודות ואיזון ראשוני" : "Session 1 – Basics & Initial Balance"}</h4>
                <p className="text-zinc-400 mt-1">{lang === "he" ? "עקרונות האיזון בעמידת ידיים, התמודדות עם פחד מהיפוך, היכרות עם מנח הפוך. תרגילים: עמידת ראש, צפרדע, עמידת ידיים על קיר." : "Balance principles, fear management, inverted shapes. Exercises: headstand, frog stand, wall handstand."}</p>
              </div>

              <div className="border-b border-white/10 pb-4">
                <h4 className="font-bold text-amber-300 text-lg">🟡 {lang === "he" ? "מפגש 2 – תרגילי בסיס ושליטה ראשונית" : "Session 2 – Base Exercises & Control"}</h4>
                <p className="text-zinc-400 mt-1">{lang === "he" ? "פיזיקה של עמידת ידיים ועבודה עם אצבעות. תרגילים: עורב, Kick Up, טאק סליידים, לימוד נפילה בטוחה." : "Physics of handstands, finger work. Exercises: crow pose, kick up, tuck slides, safe bailout."}</p>
              </div>

              <div className="border-b border-white/10 pb-4">
                <h4 className="font-bold text-amber-300 text-lg">🟠 {lang === "he" ? "מפגש 3 – עבודה מנטלית ומעבר לאיזון אקטיבי" : "Session 3 – Mental Work & Active Balance"}</h4>
                <p className="text-zinc-400 mt-1">{lang === "he" ? "שיפור קו גוף (Hollow / Arch), גמישות כתפיים, ניתוקים מהקיר וניסיונות איזון חופשיים." : "Body line improvement, shoulder flexibility, wall releases and free balance attempts."}</p>
              </div>

              <div className="border-b border-white/10 pb-4">
                <h4 className="font-bold text-amber-300 text-lg">🔵 {lang === "he" ? "מפגש 4 – תכנון אימון ועבודה עצמאית" : "Session 4 – Workout Design & Independent Work"}</h4>
                <p className="text-zinc-400 mt-1">{lang === "he" ? "עקרונות לבניית אימון אישי, התאמת תרגילים לפי רמה, שילוב קיר ועבודה עם פרטנר." : "Designing personal workouts, tailoring exercises, combining wall and partner work."}</p>
              </div>

              <div>
                <h4 className="font-bold text-amber-300 text-lg">🔴 {lang === "he" ? "מפגש 5 – סיכום ובניית תוכנית אישית" : "Session 5 – Summary & Personal Plan"}</h4>
                <p className="text-zinc-400 mt-1">{lang === "he" ? "בניית תוכנית אימון אישית מלאה, מענה על שאלות וכלים להמשך התקדמות עצמאית מחוץ לקורס." : "Building a full personal training plan, Q&A and tools for continued independent progress."}</p>
              </div>
            </div>
          </div>

          {/* Pricing & CTA Box */}
          <div className="bg-zinc-950 border-2 border-amber-300/60 p-8 md:p-12 rounded-3xl text-center space-y-6 shadow-2xl">
            <h3 className="text-2xl font-bold">{lang === "he" ? "עלות הקורס המלא (5 מפגשים)" : "Full Course Investment (5 Sessions)"}</h3>
            <div className="text-5xl font-black text-amber-300">
              {lang === "he" ? "999 ₪" : "₪999"}
            </div>
            <p className="text-zinc-400 text-sm max-w-xl mx-auto">
              {lang === "he" 
                ? "הקורס אינו מתמקד רק בלהצליח עמידת ידיים, אלא בלמידה של איך ללמוד — בצורה חכמה, יעילה ומותאמת אישית."
                : "The course focuses on learning how to learn — intelligently, efficiently, and tailored to you."}
            </p>
            <div className="pt-4">
              <a 
                href={`https://wa.me/972552517518?text=${lang === "he" ? "היי איתי, אשמח לשמוע פרטים נוספים ולהירשם לקורס עמידות הידיים (999 ₪ ל-5 מפגשים)." : "Hi Itay, I'd like to join the Handbalance course (₪999)."}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full md:w-auto px-10 text-center rounded-xl bg-gradient-to-r from-amber-300 to-amber-200 py-4 text-lg font-bold text-black hover:opacity-90 transition-opacity shadow-lg"
              >
                {lang === "he" ? "שריין מקום בקורס בוואטסאפ" : "Secure Your Spot via WhatsApp"}
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-zinc-500 bg-black">
        © {new Date().getFullYear()} GRAVITAS · {lang === "he" ? "קורסי עמידות ידיים · נס ציונה" : "Handbalance Courses · Ness Ziona"}
      </footer>

    </main>
  )
}
