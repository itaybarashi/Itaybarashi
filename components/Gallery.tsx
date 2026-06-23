"use client"

export function Gallery() {
  return (
    <section className="py-24 px-5 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">מתוך האימונים</h2>
        
        {/* הגריד שמציג את התוכן */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* תמונה */}
          <div className="aspect-video overflow-hidden rounded-xl border border-white/10 hover:border-[#FCAE1E] transition-colors duration-300">
            <img 
              src="/DekelEran.png" 
              alt="אימון בגרביטס" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
            />
          </div>

          {/* סרטון */}
          <div className="aspect-video overflow-hidden rounded-xl border border-white/10 hover:border-[#FCAE1E] transition-colors duration-300">
            <video 
              src="/videoEran.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover" 
            />
          </div>

        </div>
      </div>
    </section>
  )
}
