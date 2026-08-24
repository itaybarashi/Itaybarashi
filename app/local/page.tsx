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
import { Pricing } from "@/components/pricing"
import { FAQ } from "@/components/FAQ"
import { FinalCta } from "@/components/final-cta"
import { MobileQuickNav } from "@/components/mobile-quick-nav"

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden pb-20 md:pb-0">
      
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
      <Pricing />
      <div id="faq">
        <FAQ />
      </div>
      <FinalCta />
      
      <MobileQuickNav />
      
      <footer className="border-t border-border px-5 py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} GRAVITAS · קליסטניקס · עמידות ידיים · נס ציונה
      </footer>
    </main>
  )
}
