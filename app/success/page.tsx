"use client"

import { CheckCircle2, MessageCircle, BellRing, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function SuccessPage() {
  const announcementsGroup = "https://chat.whatsapp.com/JM9dyaE8IfmFyIYERz11dW"
  const communityGroup = "https://chat.whatsapp.com/Edn2e0z9zR6KVMPfinD8EA"

  return (
    <main className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center px-5 py-12 overflow-hidden" dir="rtl">
      
      {/* זוהר עדין ברקע */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="size-[35rem] -translate-y-24 rounded-full bg-amber-300/10 blur-[150px]" />
      </div>

      <div className="max-w-md w-full mx-auto text-center space-y-8 bg-zinc-950 border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl">
        
        {/* אייקון הצלחה */}
        <div className="w-16 h-16 rounded-full bg-amber-300/10 border border-amber-300/30 flex items-center justify-center mx-auto text-amber-300 shadow-lg">
          <CheckCircle2 className="size-8" />
        </div>

        {/* כותרת */}
        <div className="space-y-3">
          <h1 className="text-3xl font-black tracking-tight text-white">
            התשלום עבר בהצלחה!
          </h1>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
            ברוך הבא למשפחת <span className="text-amber-300 font-bold">GRAVITAS</span>. כדי שלא תפספס שום דבר, הצטרף עכשיו לשתי הקבוצות שלנו:
          </p>
        </div>

        {/* כפתורים לקבוצות הוואטסאפ */}
        <div className="space-y-4 pt-2">
          
          {/* קבוצת הודעות בלבד */}
          <a
            href={announcementsGroup}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 w-full rounded-xl bg-gradient-to-r from-amber-300 to-amber-200 py-4 text-sm md:text-base font-bold text-black hover:opacity-95 transition-opacity shadow-lg"
          >
            <BellRing className="size-5" />
            <span>1. קבוצת הודעות ועדכונים (שקטה)</span>
          </a>

          {/* קבוצת מתאמנים */}
          <a
            href={communityGroup}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 w-full rounded-xl border border-white/20 bg-zinc-900 py-4 text-sm md:text-base font-bold text-white hover:bg-zinc-800 transition-colors shadow-lg"
          >
            <MessageCircle className="size-5 text-amber-300" />
            <span>2. קבוצת הקהילה והמתאמנים</span>
          </a>

          <p className="text-xs text-zinc-500 pt-1">
            מומלץ להיכנס לשתי הקבוצות כדי להישאר מחוברים לכל מה שקורה בסטודיו.
          </p>
        </div>

        {/* כפתור חזרה לאתר */}
        <div className="pt-4 border-t border-white/10">
          <Link
            href="/local"
            className="inline-flex items-center gap-2 text-xs md:text-sm font-medium text-zinc-400 hover:text-white transition-colors"
          >
            <span>חזרה לאתר הסטודיו</span>
            <ArrowRight className="size-4 rtl:rotate-180" />
          </Link>
        </div>

      </div>
    </main>
  )
}
