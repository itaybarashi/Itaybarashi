"use client"

import Script from 'next/script'

export function InstagramFeed() {
  return (
    <section className="py-24 px-5 bg-black text-white text-center">
      <h2 className="text-3xl font-bold mb-12">מתוך האימונים</h2>
      
      {/* ה-Container של Elfsight */}
      <div className="elfsight-app-4cd4fb1b-7300-40e9-9abe-3beaa15df478" data-elfsight-app-lazy></div>
      
      {/* הטעינה של הסקריפט דרך Next/Script לביצועים אופטימליים */}
      <Script 
        src="https://elfsightcdn.com/platform.js" 
        strategy="afterInteractive" 
      />
    </section>
  )
}
