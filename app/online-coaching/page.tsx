"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Globe, Shield, Zap, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function OnlineCoachingPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-amber-400 selection:text-black">
      
      {/* כפתור חזרה לדף הראשי */}
      <div className="absolute top-6 left-6 z-20">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-300 hover:text-white border border-white/20 rounded-full px-4 py-2 bg-black/50 backdrop-blur-md transition shadow-lg"
        >
          <ArrowLeft className="size-4" /> Back to Gateway
        </Link>
      </div>

      {/* Hero Section עם תמונת הרקע בשחור-לבן */}
      <section className="relative flex min-h-[90vh] items-center justify-center px-5 pt-20 text-center overflow-hidden bg-zinc-950">
        
        {/* תמונת הרקע */}
        <div className="absolute inset-0 -z-20">
          <img
            src="/ShaiBachar.jpg"
            alt="Itay Barshi - Background"
            className="h-full w-full object-cover object-center grayscale contrast-125 brightness-75"
          />
        </div>

        {/* שכבת הצללה כהה לשמירה על קריאות הטקסט */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-black/75 backdrop-blur-[1px]" />
        
        {/* תוכן ה-Hero */}
        <div className="max-w-4xl mx-auto space-y-8 z-10">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-1.5 text-sm font-medium text-amber-400 backdrop-blur-md shadow-lg"
          >
            <Globe className="size-4" /> Global Online Coaching
          </motion.span>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] drop-shadow-lg text-white"
          >
            Master Your Body, <br />
            <span className="bg-gradient-to-l from-amber-400 to-amber-200 bg-clip-text text-transparent drop-shadow">
              Anywhere in the World.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-200 max-w-2xl mx-auto leading-relaxed drop-shadow"
          >
            Customized calisthenics, handbalance, and mobility programming designed to break your plateaus. Built on deep movement principles, not guesswork.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="pt-4"
          >
            <a 
              href="https://wa.me/972532814545?text=Hi,%20I'm%20interested%20in%20Online%20Coaching."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-amber-400 px-8 py-4 text-lg font-bold text-black shadow-[0_10px_30px_-10px_rgba(245,180,80,0.5)] transition-transform hover:scale-105"
            >
              Apply For Coaching
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features / What's Included */}
      <section className="py-24 px-5 border-t border-white/10 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black">What You Get</h2>
            <p className="text-zinc-400">A rigorous, science-backed approach tailored entirely to your goals and biomechanics.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-900/50 border border-white/10 p-8 rounded-3xl space-y-4">
              <Zap className="size-10 text-amber-400" />
              <h3 className="text-xl font-bold">Custom Programming</h3>
              <p className="text-zinc-400">Tailored routines focusing on planche, handstands, levers, or raw structural strength based on your current level.</p>
            </div>

            <div className="bg-zinc-900/50 border border-white/10 p-8 rounded-3xl space-y-4">
              <CheckCircle2 className="size-10 text-amber-400" />
              <h3 className="text-xl font-bold">Video Form Analysis</h3>
              <p className="text-zinc-400">Direct feedback loops. Send your training videos and get precise technical corrections to prevent injuries and accelerate progress.</p>
            </div>

            <div className="bg-zinc-900/50 border border-white/10 p-8 rounded-3xl space-y-4">
              <Shield className="size-10 text-amber-400" />
              <h3 className="text-xl font-bold">Mobility & Longevity</h3>
              <p className="text-zinc-400">In-depth active flexibility and joint conditioning protocols to keep your body bulletproof while getting stronger.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-28 px-5 bg-black border-t border-white/10">
        <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">

          {/* Image Gallery */}
          <div className="flex justify-center">
            <div className="relative h-[450px] w-[350px]">
              <div className="absolute top-0 right-0 h-80 w-64 overflow-hidden rounded-2xl border-4 border-zinc-900 shadow-2xl z-10 transition duration-500 hover:scale-[1.03]">
                <img
                  src="/me.png"
                  alt="Itay Barshi - Portrait"
                  className="h-full w-full object-cover"
                />
              </div>
              
              <div className="absolute bottom-0 left-0 h-64 w-60 overflow-hidden rounded-2xl border-4 border-zinc-900 shadow-2xl z-20 transition duration-500 hover:scale-[1.03]">
                <img
                  src="/macaco.png"
                  alt="Itay Barshi - Movement"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="text-left space-y-6">
            <span className="inline-block bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-sm font-medium text-amber-400">
              About Me
            </span>
            
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
              Hi, I&apos;m <span className="text-amber-400">Itay</span>
            </h2>

            <div className="space-y-4 text-lg text-zinc-400 leading-relaxed">
              <p>
                I&apos;ve been immersed in the world of calisthenics and movement for nearly a decade. Many assume it’s natural talent or that I started from a high baseline — but the truth is, I started from absolute zero.
              </p>
              <p>
                I couldn&apos;t do a single pull-up, and it took me over half a year to achieve my first muscle-up. Skills that take others a few months took me years.
              </p>
              <p>
                Precisely because of this journey, I learned to understand the body deeply, cope with failures, embrace consistency and repetition, navigate injuries, and figure out how to overcome them.
              </p>
            </div>

            <div className="bg-zinc-900/80 p-6 rounded-2xl border border-white/10 shadow-lg">
              <p className="text-xl font-bold text-white">
                My guiding principle is simple: It&apos;s not just what you achieve — it&apos;s who you become along the way.
              </p>
            </div>

            <p className="text-lg text-zinc-400 leading-relaxed">
              I believe in teaching you how to train, helping you understand movement principles, and working with your own sound logic — rather than just blindly copying what I do.
            </p>

            <div className="flex items-center gap-2 text-amber-400 font-semibold pt-2">
              <Globe className="size-5 text-amber-400" />
              <span className="text-lg">Coaching worldwide</span>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Bottom Section */}
      <section className="py-20 px-5 text-center bg-zinc-950 border-t border-white/10">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-black">Ready to Level Up Your Training?</h2>
          <p className="text-zinc-400">Let&apos;s break your limits together, wherever you are.</p>
          <div className="pt-2">
            <a 
              href="https://wa.me/972532814545?text=Hi,%20I'm%20ready%20to%20start%20Online%20Coaching."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-amber-400 px-8 py-4 text-lg font-bold text-black shadow-[0_10px_30px_-10px_rgba(245,180,80,0.5)] transition-transform hover:scale-105"
            >
              Get Started via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} GRAVITAS · Global Online Coaching
      </footer>

    </main>
  )
}
