"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqItems = [
  {
    q: "למי האימונים מתאימים?",
    a: "כרגע הקבוצות מיועדות לבני נוער בגילאי 12-16 מחולקות לפי רמות. אני מחפש מתאמנים עם תשוקה לספורט ורצון להגיע לרמה גבוהה."
  },
  {
    q: "האם צריך ניסיון קודם?",
    a: "קליסטניקס הוא אימון בעצימות גבוהה. אני לא מצפה לניסיון מקצועי, אבל כן נדרשת יכולת בסיסית של תנועה והבנה של הגוף לשיעורים שלי. ."
  },
  {
    q: "מה צריך להביא לאימון?",
    a: " בגדים נוחים ונעליים מתאימות. כל הציוד המקצועי נמצא בסטודיו."
  },
  {
    q: "איפה חונים?",
    a: "יש חניון מסודר וחינמי במרכז המסחרי ממש מתחת למתחם."
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24 px-5 bg-black text-white border-t border-white/10">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">שאלות ותשובות</h2>
        <div className="space-y-4">
          {faqItems.map((item, i) => (
            <div key={i} className="border border-white/10 rounded-xl overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 flex justify-between items-center bg-white/[0.02] hover:bg-white/[0.05] transition"
              >
                <span className="font-bold text-lg">{item.q}</span>
                <ChevronDown className={`transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }}
                    className="px-6 pb-6 text-gray-400 leading-relaxed"
                  >
                    {item.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
