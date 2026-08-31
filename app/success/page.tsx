"use client"

import { SiteHeader } from "@/components/site-header"
import { CheckCircle2, MessageCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function SuccessPage() {
  // הודעה אחת משולבת הכוללת את שני הקישורים
  const combinedMessage = encodeURIComponent(
    "היי! ההרשמה והתשלום לסטודיו GRAVITAS בוצעו בהצלחה.\n\n" +
    "1. הנה הקישור להצטרפות לקבוצת הוואטסאפ: https://chat.whatsapp.com/YOUR_GROUP_LINK\n" +
    "2. הנה הקישור לאתר ולתקנון הסטודיו: https://gravitas-movement.co.il/terms"
  );

  return (
    <main className="relative min-h-screen bg-black text-white flex flex-col overflow-x-hidden" dir="rtl">
      
      <SiteHeader />

      {/* זוהר עדין ברקע */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="size-[35rem] -translate-y-24 rounded-full bg-amber-300/10 blur-[150px]" />
      </div>

      <div className="max-w-xl mx-auto px-5 py-20 flex-1 w-full space-y-8 text-center my-auto">
        
        {/* אייקון הצלחה */}
        <div className="w-20 h-20 rounded-3xl bg-amber-300/10 border border-amber-300/30 flex items-center justify-center mx-auto text-amber-300 shadow-xl shadow-amber-300/5">
          <CheckCircle2 className="size-10" />
        </div>

        {/* כותרת */}
        <div className="space-y-3">
          <h1 className="text-3xl md:text-4xl font-black tracking-tight">
            התשלום בוצע בהצלחה!
          </h1>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
            תודה רבה! ההרשמה והתשלום נקלטו במערכת. אם שילמת עבור מתאמן צעיר, תוכל לשלוח לו בלחיצה אחת את כל הפרטים והקישורים לוואטסאפ:
          </p>
        </div>

        {/* אזור כפתור שיתוף וואטסאפ */}
        <div className="bg-zinc-950 border border-white/10 rounded-3xl p-6 md:p-8 space-y-4 shadow-xl">
          <a
            href={`https://wa.me/?text=${combinedMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-between bg-emerald-600 hover:bg-emerald-500 text-white font-medium px-6 py-4 rounded-2xl transition-all shadow-lg shadow-emerald-600/20 group"
          >
            <span className="flex items-center gap-3">
              <MessageCircle className="size-5" />
              <span>שליחת הקישורים לילד לוואטסאפ</span>
            </span>
            <ArrowRight className="size-4 rtl:rotate-180 group-hover:-translate-x-1 transition-transform" />
          </a>
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
