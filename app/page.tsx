import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Philosophy } from "@/components/philosophy"
import { About } from "@/components/about"
import { ForWhom } from "@/components/ForWhom"
import { Location } from "@/components/location"
import { Disciplines } from "@/components/disciplines"
import { Gallery } from "@/components/Gallery"       // הוסף את הגלריה הידנית
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
      
      {/* כאן שניהם מופיעים בזה אחר זה */}
      <Gallery />       
      <InstagramFeed /> 
      
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
