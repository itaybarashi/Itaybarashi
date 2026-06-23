"use client"

import Script from 'next/script'

export function InstagramFeed() {
  return (
    <section className="py-24 px-5 bg-black text-white text-center">
      <h2 className="text-3xl font-bold mb-12">מתוך האימונים</h2>
      
      {/* הוספנו min-height כדי שהדפדפן בטלפון לא "יעלים" את הגלריה לפני שהיא נטענת.
        ה-class שקיבלת מ-Elfsight נשמר בדיוק כפי שהוא.
      */}
      <div 
        className="elfsight-app-4cd4fb1b-7300-40e9-9abe-3beaa15df478" 
        style={{ minHeight: '400px' }} 
        data-elfsight-app-lazy
      ></div>
      
      {/* הסקריפט נטען רק אחרי שהדף מוכן, מה ששומר על האתר שלך מהיר.
      */}
      <Script 
        src="https://elfsightcdn.com/platform.js" 
        strategy="afterInteractive" 
      />
    </section>
  )
}
