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
import { InstagramFloat } from "@/components/instagram-float" // הוספנו את הייבוא

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
      
      {/* האינסטגרם - מוצג רק במחשב (md ומעלה) */}
      <div className="hidden md:block">
        <InstagramFeed />
      </div>

      <Schedule />
      <FAQ />
      <FinalCta />
      
      {/* כפתורים צפים */}
      <WhatsappFloat />
      <InstagramFloat />
      
      <footer className="border-t border-border px-5 py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} GRAVITAS · קליסטניקס · עמידות ידיים · נס ציונה
      </footer>
    </main>
  )
}
