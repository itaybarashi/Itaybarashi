"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-2" dir="rtl">
        
        {/* צד ימין: הלוגו של הסטודיו */}
        <Link href="/local" className="flex items-center gap-2 shrink-0">
          <Image
            src="/gravitas-transparent.png"
            alt="Gravitas Logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <span className="font-black tracking-wider text-white hidden sm:inline-block text-base">
            GRAVITAS
          </span>
        </Link>

        {/* אמצע: כפתור החזרה לשער הראשי (Gateway) */}
        <div className="flex justify-center shrink-0">
          <Link 
            href="/"
            className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-medium text-zinc-300 hover:text-white border border-white/20 rounded-full px-3 py-1.5 bg-white/5 transition shadow-sm"
          >
            <ArrowLeft className="size-3.5" /> <span className="whitespace-nowrap">Gateway / שער</span>
          </Link>
        </div>

        {/* צד שמאל: כפתור תיאום אימון היכרות */}
        <div className="flex justify-end shrink-0">
          <a
            href="https://wa.me/972552517518?text=היי,%20אשמח%20לתאם%20אימון%20היכרות."
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-gradient-to-r from-amber-300 to-amber-200 px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-bold text-black hover:opacity-95 transition-opacity shadow-lg whitespace-nowrap"
          >
            אימון היכרות
          </a>
        </div>

      </div>
    </header>
  )
}
