"use client"

import Script from 'next/script'

export function InstagramFeed() {
  return (
    <section className="py-24 px-5 bg-black text-white text-center">
      <h2 className="text-3xl font-bold mb-12">מתוך האימונים</h2>
      
      <div className="max-w-6xl mx-auto">
        {/* טעינת הסקריפט של הוידג'ט */}
        <Script 
          src="https://cdn.lightwidget.com/widgets/lightwidget.js" 
          strategy="afterInteractive" 
        />
        
        {/* ה-Iframe של הוידג'ט */}
        <iframe 
          src="//lightwidget.com/widgets/3e2a31e7011b53969444defe04145c6a.html" 
          scrolling="no" 
          allowTransparency={true} 
          className="lightwidget-widget w-full border-0 overflow-hidden"
          style={{ width: '100%', border: 0, overflow: 'hidden' }}
        ></iframe>
      </div>

      <a 
        href="https://www.instagram.com/itay_barashi_" 
        target="_blank"
        className="inline-block mt-12 px-8 py-3 bg-[#FCAE1E] text-black font-bold rounded-full hover:opacity-90 transition-opacity"
      >
        האימונים שלי  
      </a>
    </section>
  )
}
