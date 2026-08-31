"use client"

import { SiteHeader } from "@/components/site-header"
import { CheckCircle2, MessageCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function SuccessPage() {
  // הודעות מוכנות מראש שההורה יכול לשלוח לילד בלחיצה אחת
  const group1Message = encodeURIComponent("היי! ההרשמה והתשלום לסטודיו GRAVITAS הושלמו בהצלחה. הנה הקישור להצטרפות לקבוצת הוואטסאפ של הקבוצה:");
  const generalMessage = encodeURIComponent("היי, שילמתי על האימונים ב-GRAVITAS. הנה הקישור לאתר הסטודיו שלנו:");

  return (
    <main className="relative min-h-screen bg-black text-white flex flex-col overflow-x-hidden" dir="rtl">
      
      <SiteHeader />

      {/* זוהר עדין ברקע */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="size-[35rem] -translate-y-24 rounded-full bg-emerald-500/10 blur-[150px]" />
      </div>

      <div className="max-w-xl mx-auto px-5 py-20 flex-1 w-full space-y-8 text-center my-auto">
        
        {/* אייקון הצלחה */}
        <div className="w-20 h-20 rounded-3xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400 shadow-xl shadow-emerald-500/5">
          <CheckCircle2 className="size-10" />
        </div>

        {/* כותרת */}
        <div className="space-y-3">
          <h1 className="text-3xl md:text-4xl font-black tracking-tight">
            התשלום בוצע בהצלחה!
          </h1>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
            תודה רבה! ההרשמה נקלטה במערכת. אם התשלום בוצע עבור המתאמן הצעיר, תוכל לשלוח לו מיד את הקישורים לוואטסאפ בלחיצת כפתור:
          </p>
        </div>

        {/* אזור כפתורי השיתוף לוואטסאפ עבור ההורה */}
        <div className="bg-zinc-950 border border-white/10 rounded-3xl p-6 md:p-8 space-y-4 shadow-xl">
          <h2 className="text-sm font-bold text-zinc-300 uppercase tracking-wider">
            שליחת הקישורים לילד / מתאמן לוואטסאפ
          </h2>

          <div className="space-y-3">
            {/* כפתור שיתוף קבוצת וואטסאפ */}
            <a
              href={`https://wa.me/?text=${group1Message}%20https://chat.whatsapp.com/YOUR_GROUP_LINK`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-between bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 font-medium px-5 py-3.5 rounded-2xl transition-all shadow-md group"
            >
              <span className="flex items-center gap-3">
                <MessageCircle className="size-5 text-emerald-400" />
                <span>שלח לילד: קישור לקבוצת הוואטסאפ</span>
              </span>
              <ArrowRight className="size-4 rtl:rotate-180 group-hover:-translate-x-1 transition-transform" />
            </a>

            {/* כפתור שיתוף כללי לאתר / תקנון */}
            <a
              href={`https://wa.me/?text=${generalMessage}%20https://gravitas-movement.co.il`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-between bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-200 font-medium px-5 py-3.5 rounded-2xl transition-all shadow-md group"
            >
              <span className="flex items-center gap-3">
                <MessageCircle className="size-5 text-zinc-400" />
                <span>שלח לילד: קישור לאתר הסטודיו</span>
              </span>
              <ArrowRight className="size-4 rtl:rotate-180 group-hover:-translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* כפתור חזרה לאתר */}
        <div className="pt-2">
          <Link
            href="/local"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
          >
            <span>חזרה לעמוד הבית של הסטודיו</span>
          </Link>
        </div>

      </div>

      <footer className="border-t border-white/10 px-5 py-6 text-center text-xs text-zinc-600">
        GRAVITAS · קליסטניקס · נס ציונה
      </footer>

    </main>
  )
}
