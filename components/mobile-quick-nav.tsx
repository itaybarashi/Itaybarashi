"use client"

import { Calendar, Tag, HelpCircle, MessageCircle } from "lucide-react"

export function MobileQuickNav() {
  return (
    <div className="fixed bottom-4 inset-x-4 z-40 md:hidden">
      <nav className="flex items-center justify-around bg-black/80 backdrop-blur-xl border border-white/20 rounded-full px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)]" dir="rtl">
        
        <a 
          href="#schedule" 
          className="flex flex-col items-center gap-1 text-[11px] font-medium text-zinc-300 hover:text-amber-300 transition-colors"
        >
          <Calendar className="size-4 text-amber-300" />
          <span>לוז</span>
        </a>

        <a 
          href="#pricing" 
          className="flex flex-col items-center gap-1 text-[11px] font-medium text-zinc-300 hover:text-amber-300 transition-colors"
        >
          <Tag className="size-4 text-amber-300" />
          <span>תמחור</span>
        </a>

        <a 
          href="#faq" 
          className="flex flex-col items-center gap-1 text-[11px] font-medium text-zinc-300 hover:text-amber-300 transition-colors"
        >
          <HelpCircle className="size-4 text-amber-300" />
          <span>שאלות</span>
        </a>

        <a 
          href="https://wa.me/972552517518?text=היי,%20אשמח%20לפרטים%20על%20האימונים%20בסטודיו."
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 text-[11px] font-bold text-amber-300 transition-colors"
        >
          <MessageCircle className="size-4 text-amber-300" />
          <span>וואטסאפ</span>
        </a>

      </nav>
    </div>
  )
}
