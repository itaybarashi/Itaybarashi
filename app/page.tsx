import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Philosophy } from "@/components/philosophy"
import { About } from "@/components/about"
import { Location } from "@/components/location" // הוספנו ייבוא
import { Disciplines } from "@/components/disciplines"
import { Schedule } from "@/components/schedule"
import { FinalCta } from "@/components/final-cta"
import { WhatsappFloat } from "@/components/whatsapp-float"

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <SiteHeader />
      <Hero />
      <Philosophy />
      <About />
      <Location /> {/* הוספנו את הרכיב כאן מתחת ל-About */}
      <Disciplines />
      <Schedule />
      <FinalCta />
      <WhatsappFloat />
      <footer className="border-t border-border px-5 py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} GRAVITAS · קליסטניקס · עמידות ידיים · נס ציונה
      </footer>
    </main>
  )
}
