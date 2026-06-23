"use client"

import { motion } from "framer-motion"
import { Users, Target, Zap, GraduationCap } from "lucide-react"

const items = [
  { 
    title: "כל הרמות", 
    desc: "אימונים מותאמים , מהבסיס ועד לביצוע תרגילים מורכבים.",
    icon: <Target className="h-6 w-6 text-primary" />
  },
  { 
    title: "מסלולי אימון", 
    desc: "חלוקה ברורה לקבוצות מתחילים ומתקדמים לפי רמת מיומנות.",
    icon: <GraduationCap className="h-6 w-6 text-primary" />
  },
  { 
    title: "הקהילה שלנו", 
    desc: "מסגרת למתאמנים בעלי רצון להתקדם, להתמיד ולהשתפר.",
    icon: <Users className="h-6 w-6 text-primary" />
  },
  { 
    title: "אימוני נוער", 
    desc: "קבוצות ייעודיות לגילאי 12-16 .",
    icon: <Zap className="h-6 w-6 text-primary" />
  },
]

export function ForWhom() {
  return (
    <section className="py-24 px-5 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-16 text-center">למי זה מתאים?</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 border border-white/10 rounded-xl bg-white/[0.02] flex items-start gap-4"
            >
              <div className="mt-1">{item.icon}</div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-white">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
