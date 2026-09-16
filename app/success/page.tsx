"use client"

import { useState } from "react"
import { CheckCircle2, MessageCircle, BellRing, ArrowRight, Copy, Check } from "lucide-react"
import Link from "next/link"

export default function SuccessPage() {
  const parentsGroup = "https://chat.whatsapp.com/DDGY273J0i47mZ7MRYlG3T"
  const announcementsGroup = "https://chat.whatsapp.com/JM9dyaE8IfmFyIYERz11dW"
  const communityGroup = "https://chat.whatsapp.com/Edn2e0z9zR6KVMPfinD8EA"

  const [copiedKey, setCopiedKey] = useState<string | null>(null)

  const handleCopy = (url: string, key: string) => {
    navigator.clipboard.writeText(url)
    setCopiedKey(key)
    setTimeout(() => {
      setCopiedKey(null)
    }, 2000)
  }

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
            ברוך הבא למשפחת <span className="text-amber-300 font-bold">GRAVITAS</span>. הנה הקישורים לקבוצות הוואטסאפ שלנו:
          </p>
        </div>

        {/* כפתורים לקבוצות הוואטסאפ עם אופציית העתקה */}
        <div className="space-y-3.5 pt-2 text-right">
          
          {/* 1. קבוצת הורים הודעות */}
          <div className="flex items-center gap-2">
            <a
              href={parentsGroup}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2.5 rounded-xl border border-white/20 bg-zinc-900 py-3.5 px-4 text-sm font-bold text-white hover:bg-zinc-800 transition-colors shadow-lg"
            >
              <MessageCircle className="size-5 text-amber-300 shrink-0" />
              <span className="truncate">1. קבוצת הורים הודעות</span>
            </a>
            <button
              onClick={() => handleCopy(parentsGroup, "parents")}
              title="העתק קישור לקבוצה"
              className="flex items-center justify-center size-12 shrink-0 rounded-xl border border-white/20 bg-zinc-900 text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors"
            >
              {copiedKey === "parents" ? <Check className="size-4 text-emerald-400" /> : <Copy className="size-4" />}
            </button>
          </div>

          {/* 2. קבוצת נוער הודעות בלבד */}
          <div className="flex items-center gap-2">
            <a
              href={announcementsGroup}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-amber-300 to-amber-200 py-3.5 px-4 text-sm font-bold text-black hover:opacity-95 transition-opacity shadow-lg"
            >
              <BellRing className="size-5 shrink-0" />
              <span className="truncate">2. קבוצת נוער הודעות בלבד</span>
            </a>
            <button
              onClick={() => handleCopy(announcementsGroup, "announcements")}
              title="העתק קישור לקבוצה"
              className="flex items-center justify-center size-12 shrink-0 rounded-xl border border-white/20 bg-zinc-900 text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors"
            >
              {copiedKey === "announcements" ? <Check className="size-4 text-emerald-400" /> : <Copy className="size-4" />}
            </button>
          </div>

          {/* 3. קבוצת נוער דיבורים */}
          <div className="flex items-center gap-2">
            <a
              href={communityGroup}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2.5 rounded-xl border border-white/20 bg-zinc-900 py-3.5 px-4 text-sm font-bold text-white hover:bg-zinc-800 transition-colors shadow-lg"
            >
              <MessageCircle className="size-5 text-amber-300 shrink-0" />
              <span className="truncate">3. קבוצת נוער דיבורים</span>
            </a>
            <button
              onClick={() => handleCopy(communityGroup, "community")}
              title="העתק קישור לקבוצה"
              className="flex items-center justify-center size-12 shrink-0 rounded-xl border border-white/20 bg-zinc-900 text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors"
            >
              {copiedKey === "community" ? <Check className="size-4 text-emerald-400" /> : <Copy className="size-4" />}
            </button>
          </div>

          <p className="text-xs text-zinc-400 pt-2 text-center leading-relaxed">
            💡 <span className="text-amber-300 font-semibold">הקבוצה הראשונה מיועדת להורה.</span> ניתן ללחוץ על כפתור ההעתקה בצד שתי הקבוצות האחרות כדי לשלוח אותן לילד/ה.
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
