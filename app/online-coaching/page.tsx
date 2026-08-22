"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, Globe, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function OnlineCoachingPage() {
  const [lang, setLang] = useState<"he" | "en">("en")

  return (
    <main className="min-h-screen bg-black text-white selection:bg-amber-400 selection:text-black">
      
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
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-1.5 text-sm font-medium text-amber-400 backdrop-blur-md shadow-lg"
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
                <span className="bg-gradient-to-l from-amber-400 to-amber-200 bg-clip-text text-transparent drop-shadow">
                  בכל מקום בעולם.
                </span>
              </>
            ) : (
              <>
                Deep Movement Work, <br />
                <span className="bg-gradient-to-l from-amber-400 to-amber-200 bg-clip-text text-transparent drop-shadow">
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

      {/* Coaching Plans Section (הסגנון הנקי והמדויק) */}
      <section className="py-24 px-5 bg-black border-t border-white/10">
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
            
            {/* מסלול חודשי / עצמאי */}
            <div className="bg-zinc-950 border border-white/10 p-8 rounded-3xl flex flex-col justify-between space-y-8 relative shadow-2xl">
              <div className="space-y-6">
                <div className="text-center space-y-2 border-b border-white/10 pb-6">
                  <h3 className="text-lg font-bold uppercase tracking-wider text-zinc-300">
                    {lang === "he" ? "ליווי חודשי - מעקב שוטף" : "1 to 1 Coaching - Monthly Feedback"}
                  </h3>
                  <div className="text-3xl md:text-4xl font-black text-white pt-1">
                    {lang === "he" ? "499 ₪" : "$149.99"} <span className="text-sm font-normal text-zinc-400">/ {lang === "he" ? "חודש" : "month"}</span>
                  </div>
                </div>

                <p className="text-zinc-400 text-sm leading-relaxed">
                  {lang === "he" 
                    ? "אידיאלי למי שמעדיף להתאמן באופן עצמאי עם תוכנית אישית מותאמת, ולקבל מעקב חודשי מסודר לבדיקת התקדמות ועדכון."
                    : "Ideal for those who prefer to follow a personalized program independently, with structured monthly check-ins to track progress and adjust the plan."}
                </p>

                <ul className="space-y-3 text-sm text-zinc-300 pt-2">
                  <li className="flex items-start gap-3">
                    <Check className="size-5 text-amber-400 shrink-0 mt-0.5" />
                    <span>{lang === "he" ? "ניתוח טכניקה ראשוני דרך וידאו" : "Initial analysis via video test"}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="size-5 text-amber-400 shrink-0 mt-0.5" />
                    <span>{lang === "he" ? "תוכנית אימונים חודשית (מתחדשת כל 4 שבועות)" : "Monthly Training Plan (4-weeks program updated each month)"}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="size-5 text-amber-400 shrink-0 mt-0.5" />
                    <span>{lang === "he" ? "צ'ק-אין חודשי עם משוב מפורט והתאמות" : "Monthly check-in, with feedback and exercise adjustments"}</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4 pt-4">
                <a 
                  href={`https://wa.me/972552517518?text=${lang === "he" ? "היי, אשמח להתחיל במסלול הליווי החודשי באונליין." : "Hi, I'm interested in the Monthly Coaching plan."}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center rounded-xl bg-amber-400 py-3.5 text-base font-bold text-black hover:bg-amber-300 transition-colors shadow-lg"
                >
                  {lang === "he" ? "התחל עכשיו" : "Join now"}
                </a>
                <p className="text-center text-xs text-zinc-500">
                  {lang === "he" ? "אפשרות למסלול שנתי בהנחה משמעותית" : "Save significantly with annual commitment"}
                </p>
              </div>
            </div>

            {/* מסלול מלא / אינטנסיבי */}
            <div className="bg-zinc-950 border border-amber-400/40 p-8 rounded-3xl flex flex-col justify-between space-y-8 relative shadow-2xl">
              <div className="space-y-6">
                <div className="text-center space-y-2 border-b border-white/10 pb-6">
                  <h3 className="text-lg font-bold uppercase tracking-wider text-amber-400">
                    {lang === "he" ? "ליווי אישי מלא - אונליין" : "1 to 1 Coaching - Full Time"}
                  </h3>
                  <div className="text-3xl md:text-4xl font-black text-white pt-1">
                    {lang === "he" ? "4,299 ₪" : "$1,299"} <span className="text-sm font-normal text-zinc-400">/ {lang === "he" ? "שנה (בהנחה)" : "year (annual)"}</span>
                  </div>
                </div>

                <p className="text-zinc-400 text-sm leading-relaxed">
                  {lang === "he" 
                    ? "מתאים לכל הרמות. מעניק גישה מלאה אליי, כולל ליווי שוטף, מענה שאלות, ביקורות וידאו שוטפות והכוונה מדויקת לאורך כל התהליך."
                    : "Suitable for all levels. Offers full access to your coach, including ongoing support, feedback on video submissions, and guidance throughout the entire program."}
                </p>

                <ul className="space-y-3 text-sm text-zinc-300 pt-2">
                  <li className="flex items-start gap-3">
                    <Check className="size-5 text-amber-400 shrink-0 mt-0.5" />
                    <span>{lang === "he" ? "ניתוח טכניקה ראשוני דרך וידאו" : "Initial analysis via video test"}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="size-5 text-amber-400 shrink-0 mt-0.5" />
                    <span>{lang === "he" ? "תוכנית אימונים חודשית מותאמת אישית" : "Monthly Training Plan (4-weeks program updated each month)"}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="size-5 text-amber-400 shrink-0 mt-0.5" />
                    <span>{lang === "he" ? "מעקב שוטף, פידבק טכני ומענה על שאלות" : "Ongoing check-ins, feedback and exercise guidance"}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="size-5 text-amber-400 shrink-0 mt-0.5" />
                    <span>{lang === "he" ? "זמינות לבדיקת סרטוני ביצוע ותיקונים שוטפים" : "Regular video submissions review and technical adjustments"}</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4 pt-4">
                <a 
                  href={`https://wa.me/972552517518?text=${lang === "he" ? "היי, אשמח להתחיל במסלול הליווי המלא באונליין." : "Hi, I'm interested in the Full Time Coaching plan."}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center rounded-xl bg-amber-400 py-3.5 text-base font-bold text-black hover:bg-amber-300 transition-colors shadow-lg"
                >
                  {lang === "he" ? "התחל עכשיו" : "Join now"}
                </a>
                <p className="text-center text-xs text-amber-400/80 font-medium">
                  {lang === "he" ? "מסלול מומלץ לתהליך עומק אמיתי" : "Recommended for true, long-term progress"}
                </p>
              </div>
            </div>

          </div>
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
                  src="/ShaiBachar.jpg"
                  alt="Itay Barshi - Movement"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <span className="inline-block bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-sm font-medium text-amber-400">
              {lang === "he" ? "קצת עלי" : "About Me"}
            </span>
            
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
              {lang === "he" ? <>היי, אני <span className="text-amber-400">איתי</span></> : <>Hi, I&apos;m <span className="text-amber-400">Itay</span></>}
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

            <p className="text-lg text-zinc-400 leading-relaxed">
              {lang === "he" 
                ? "המטרה שלי היא ללמד אותך לחשוב, לנוע ולהתאמן באופן עצמאי, בהתבסס על עקרונות ברורים ולא על חיקוי עיוור."
                : "My goal is to teach you how to think, move, and train independently, based on clear principles rather than blind imitation."}
            </p>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} GRAVITAS · {lang === "he" ? "אונליין קואוצ'ינג עולמי" : "Global Online Coaching"}
      </footer>

    </main>
  )
}
