"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, Globe, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function OnlineCoachingPage() {
  const [lang, setLang] = useState<"he" | "en">("en")

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

      {/* Hero Section עם תמונת הרקע */}
      <section className="relative flex min-h-[90vh] items-center justify-center px-5 pt-28 text-center overflow-hidden bg-zinc-950">
        
        {/* תמונת הרקע */}
        <div className="absolute inset-0 -z-20">
          <img
            src="/ShaiBachar.jpg"
            alt="Itay Barshi - Background"
            className="h-full w-full object-cover object-center grayscale contrast-125 brightness-75"
          />
        </div>

        {/* שכבת הצללה כהה */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-black/75 backdrop-blur-[1px]" />
        
        <div className="max-w-4xl mx-auto space-y-8 z-10">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-1.5 text-sm font-medium text-amber-300 backdrop-blur-md shadow-lg"
          >
            <Globe className="size-4" /> {lang === "he" ? "אונליין קואוצ'ינג עולמי" : "Online Coaching"}
          </motion.span>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] drop-shadow-lg text-white"
          >
            {lang === "he" ? (
              <>
                עבודת תנועה עמוקה, <br />
                <span className="bg-gradient-to-l from-amber-300 to-amber-100 bg-clip-text text-transparent drop-shadow">
                  בכל מקום בעולם.
                </span>
              </>
            ) : (
              <>
                Deep Movement Work, <br />
                <span className="bg-gradient-to-l from-amber-300 to-amber-100 bg-clip-text text-transparent drop-shadow">
                  Wherever You Are.
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
              ? "תוכניות אימון אישיות בקליסטניקס, עמידות ידיים ותנועה. בנויות על עקרונות, כוונה והבנה אמיתית של הגוף מעבר לניחושים."
              : "Individual programming for calisthenics, handbalance, and mobility. Built on principles, intent, and understanding the body over guesswork."}
          </motion.p>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-28 px-5 bg-black border-t border-white/10">
        <div className={`mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2 ${lang === "he" ? "md:text-right" : "text-left"}`}>

          {/* Image Gallery */}
          <div className="flex justify-center">
            <div className="relative h-[450px] w-[350px]">
              <div className="absolute top-0 right-0 h-80 w-64 overflow-hidden rounded-2xl border-4 border-zinc-900 shadow-2xl z-10 transition duration-500 hover:scale-[1.03]">
                <img
                  src="/me.png"
                  alt="Itay Barshi - Portrait"
                  className="h-full w-full object-cover"
                />
              </div>
              
              <div className="absolute bottom-0 left-0 h-64 w-60 overflow-hidden rounded-2xl border-4 border-zinc-900 shadow-2xl z-20 transition duration-500 hover:scale-[1.03]">
                <img
                  src="/macaco.png"
                  alt="Itay Barshi - Movement"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <span className="inline-block bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-sm font-medium text-amber-300">
              {lang === "he" ? "קצת עלי" : "About Me"}
            </span>
            
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
              {lang === "he" ? <>היי, אני <span className="bg-gradient-to-l from-amber-300 to-amber-100 bg-clip-text text-transparent">איתי</span></> : <>Hi, I&apos;m <span className="bg-gradient-to-l from-amber-300 to-amber-100 bg-clip-text text-transparent">Itay</span></>}
            </h2>

            <div className="space-y-4 text-lg text-zinc-400 leading-relaxed">
              {lang === "he" ? (
                <>
                  פיתחתי והעמקתי את ההבנה שלי בקליסטניקס, תנועה וכוח משקל גוף קרוב לעשור. לא התחלתי עם כישרון טבעי או נקודת פתיחה גבוהה — התחלתי מאפס מוחלט.
                  <br /><br />
                  לא הצלחתי לעשות אפילו מתח אחד בהתחלה, ולקח לי שנים של ניסוי, טעות וסבלנות להגיע לתרגילים הראשונים.
                  <br /><br />
                  בזכות הדרך הזו, האימון שלי אינו מבוסס על פתרונות קסם מהירים. הוא עוסק בהבנת הגוף שלך, כיבוד התהליך, למידה משלבים תת-אופטימליים ובניית יכולת אמיתית ויציבה.
                </>
              ) : (
                <>
                  <p>
                    I have spent nearly a decade exploring calisthenics, movement, and bodyweight strength. I didn&apos;t start with natural talent or a high baseline — I started from absolute zero.
                  </p>
                  <p>
                    I couldn&apos;t do a single pull-up when I began, and learning basic skills took me years of trial, error, and patience.
                  </p>
                  <p>
                    Because of that journey, my coaching isn&apos;t about quick fixes. It&apos;s about understanding your own body, respecting the process, learning from plateaus, and building real, sustainable capability.
                  </p>
                </>
              )}
            </div>

            <div className="bg-zinc-900/80 p-6 rounded-2xl border border-white/10 shadow-lg">
              <p className="text-xl font-bold text-white">
                {lang === "he" 
                  ? "זה לא רק מה שאתה משיג על המתח — זה מי שאתה הופך להיות בדרך."
                  : "It&apos;s not just what you achieve on the bars — it&apos;s who you become along the way."}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Coaching Plans Section */}
      <section className="py-24 px-5 bg-zinc-950 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase">
              {lang === "he" ? "מסלולי אימון" : "Coaching Plans"}
            </h2>
            <p className="text-zinc-400">
              {lang === "he" 
                ? "בחר את סוג הליווי המתאים ביותר לקצב ולשגרת האימונים שלך."
                : "Choose the level of guidance that best fits your training style."}
            </p>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${lang === "he" ? "text-right" : "text-left"}`}>
            
            {/* מסלול חודשי */}
            <div className="bg-black border border-white/10 p-8 rounded-3xl flex flex-col justify-between space-y-8 relative shadow-2xl">
              <div className="space-y-6">
                <div className="text-center space-y-2 border-b border-white/10 pb-6">
                  <h3 className="text-lg font-bold uppercase tracking-wider text-zinc-300">
                    {lang === "he" ? "ליווי אישי - חודשי" : "1 to 1 Coaching - Monthly"}
                  </h3>
                  <div className="text-3xl md:text-4xl font-black text-white pt-1">
                    {lang === "he" ? "499 ₪" : "$149.99"} <span className="text-sm font-normal text-zinc-400">/ {lang === "he" ? "חודש" : "month"}</span>
                  </div>
                </div>

                <p className="text-zinc-400 text-sm leading-relaxed">
                  {lang === "he" 
                    ? "מתאים לכל הרמות. ליווי אישי מלא, תוכנית מותאמת אישית, מענה שוטף וביקורות וידאו חודשיות."
                    : "Suitable for all levels. Full 1-to-1 coaching, custom programming, ongoing support, and regular feedback."}
                </p>

                <ul className="space-y-3 text-sm text-zinc-300 pt-2">
                  <li className="flex items-start gap-3">
                    <Check className="size-5 text-amber-300 shrink-0 mt-0.5" />
                    <span>{lang === "he" ? "ניתוח טכניקה ראשוני דרך וידאו" : "Initial analysis via video test"}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="size-5 text-amber-300 shrink-0 mt-0.5" />
                    <span>{lang === "he" ? "תוכנית אימונים חודשית מותאמת אישית" : "Monthly Training Plan (4-weeks program updated each month)"}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="size-5 text-amber-300 shrink-0 mt-0.5" />
                    <span>{lang === "he" ? "מעקב שוטף, פידבק טכני ומענה על שאלות" : "Ongoing check-ins, feedback and exercise guidance"}</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4 pt-4">
                <a 
                  href={`https://wa.me/972552517518?text=${lang === "he" ? "היי, אשמח להתחיל במסלול הליווי החודשי באונליין." : "Hi, I'm interested in the Monthly Coaching plan."}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center rounded-xl bg-gradient-to-r from-amber-300 to-amber-200 py-3.5 text-base font-bold text-black hover:opacity-90 transition-opacity shadow-lg"
                >
                  {lang === "he" ? "התחל עכשיו" : "Join now"}
                </a>
              </div>
            </div>

            {/* מסלול שנתי (Full Time) */}
            <div className="bg-black border border-amber-300/40 p-8 rounded-3xl flex flex-col justify-between space-y-8 relative shadow-2xl">
              <div className="space-y-6">
                <div className="text-center space-y-2 border-b border-white/10 pb-6">
                  <h3 className="text-lg font-bold uppercase tracking-wider text-amber-300">
                    {lang === "he" ? "ליווי אישי מלא - שנתי (מומלץ)" : "1 to 1 Coaching - Annual"}
                  </h3>
                  <div className="text-3xl md:text-4xl font-black text-white pt-1">
                    {lang === "he" ? "4,299 ₪" : "$1,299"} <span className="text-sm font-normal text-zinc-400">/ {lang === "he" ? "שנה (בהנחה)" : "year (annual)"}</span>
                  </div>
                </div>

                <p className="text-zinc-400 text-sm leading-relaxed">
                  {lang === "he" 
                    ? "מתאים לתהליך עומק ארוך טווח. מעניק גישה מלאה אליי, כולל ליווי שוטף, מענה שאלות, ביקורות וידאו שוטפות והכוונה מדויקת לאורך כל התהליך בהנחה משמעותית."
                    : "For true, long-term mastery. Full access to your coach, including ongoing support, feedback on video submissions, and guidance throughout the entire year at a discounted rate."}
                </p>

                <ul className="space-y-3 text-sm text-zinc-300 pt-2">
                  <li className="flex items-start gap-3">
                    <Check className="size-5 text-amber-300 shrink-0 mt-0.5" />
                    <span>{lang === "he" ? "ניתוח טכניקה ראשוני דרך וידאו" : "Initial analysis via video test"}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="size-5 text-amber-300 shrink-0 mt-0.5" />
                    <span>{lang === "he" ? "תוכנית אימונים חודשית מותאמת אישית" : "Monthly Training Plan (4-weeks program updated each month)"}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="size-5 text-amber-300 shrink-0 mt-0.5" />
                    <span>{lang === "he" ? "מעקב שוטף, פידבק טכני ומענה על שאלות" : "Ongoing check-ins, feedback and exercise guidance"}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="size-5 text-amber-300 shrink-0 mt-0.5" />
                    <span>{lang === "he" ? "זמינות לבדיקת סרטוני ביצוע ותיקונים שוטפים" : "Regular video submissions review and technical adjustments"}</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4 pt-4">
                <a 
                  href={`https://wa.me/972552517518?text=${lang === "he" ? "היי, אשמח להתחיל במסלול הליווי השנתי באונליין." : "Hi, I'm interested in the Annual Coaching plan."}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center rounded-xl bg-gradient-to-r from-amber-300 to-amber-200 py-3.5 text-base font-bold text-black hover:opacity-90 transition-opacity shadow-lg"
                >
                  {lang === "he" ? "התחל עכשיו" : "Join now"}
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-zinc-500 bg-black">
        © {new Date().getFullYear()} GRAVITAS · {lang === "he" ? "אונליין קואוצ'ינג עולמי" : "Global Online Coaching"}
      </footer>

    </main>
  )
}
