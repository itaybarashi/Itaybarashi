import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Philosophy } from "@/components/philosophy"
import { About } from "@/components/about"
import { ForWhom } from "@/components/ForWhom"
import { Location } from "@/components/location"
import { Disciplines } from "@/components/disciplines"
import { Gallery } from "@/components/Gallery"
import { InstagramFeed } from "@/components/InstagramFeed"
import { Schedule } from "@/components/schedule"
import { FAQ } from "@/components/FAQ"
import { FinalCta } from "@/components/final-cta"
import { WhatsappFloat } from "@/components/whatsapp-float"

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <SiteHeader />
      <Hero />
      <Philosophy />
      <About />
      <ForWhom />
      <Location />
      <Disciplines />
      
      {/* הגלריה הידנית תמיד תופיע */}
      <Gallery />
      
      {/* האינסטגרם - מוצג רק במסכים בינוניים ומעלה (מחשב) */}
      <div className="hidden md:block">
        <InstagramFeed />
      </div>

      {/* כפתור אינסטגרם למובייל בלבד */}
      <div className="md:hidden flex justify-center py-10">
        <a 
          href="https://www.instagram.com/itay_barashi_" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:opacity-90 transition-opacity"
        >
          עקבו אחריי באינסטגרם
        </a>
      </div>
      
      <Schedule />
      <FAQ />
      <FinalCta />
      <WhatsappFloat />
      <footer className="border-t border-border px-5 py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} GRAVITAS · קליסטניקס · עמידות ידיים · נס ציונה
      </footer>
    </main>
  )
}
