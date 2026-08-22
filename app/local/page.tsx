import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Philosophy } from "@/components/philosophy"
import { About } from "@/components/about"
import { ForWhom } from "@/components/ForWhom"
import { Location } from "@/components/location"
import { Disciplines } from "@/components/disciplines"
import { Gallery } from "@/components/Gallery"
import { Merch } from "@/components/Merch"
import { InstagramFeed } from "@/components/InstagramFeed"
import { Schedule } from "@/components/schedule"
import { FAQ } from "@/components/FAQ"
import { FinalCta } from "@/components/final-cta"
import { WhatsappFloat } from "@/components/whatsapp-float"
import { InstagramFloat } from "@/components/instagram-float"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      
      {/* כפתור חזרה מהיר לשער הראשי / בחירת שפה */}
      <div className="fixed top-4 left-4 z-50">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-xs md:text-sm font-medium text-zinc-300 hover:text-white border border-white/20 rounded-full px-3.5 py-1.5 bg-black/60 backdrop-blur-md transition shadow-lg"
        >
          <ArrowLeft className="size-4" /> Gateway / חזרה לשער
        </Link>
      </div>

      <SiteHeader />
      <Hero />
      <Philosophy />
      <About />
      <ForWhom />
      <Location />
      <Disciplines />
      
      <Gallery />
      
      <Merch />
      
      <div className="hidden md:block">
        <InstagramFeed />
      </div>

      <Schedule />
      <FAQ />
      <FinalCta />
      
      <WhatsappFloat />
      <InstagramFloat />
      
      <footer className="border-t border-border px-5 py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} GRAVITAS · קליסטניקס · עמידות ידיים · נס ציונה
      </footer>
    </main>
  )
}
