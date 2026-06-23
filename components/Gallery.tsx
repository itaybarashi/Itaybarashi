"use client"

export function Gallery() {
  const images = [
    { src: "/ItayOneArm.png", alt: "איתי בביצוע עמידת ידיים" },
    { src: "/RoniTheTrainer.png", alt: "רוני המאמן" },
    { src: "/Eran.png", alt: "אימון בגרביטס" },
  ]

  return (
    <section className="py-24 px-5 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">מתוך האימונים</h2>
        
        {/* גריד שמשתנה לפי גודל המסך */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <div 
              key={i} 
              className={`aspect-video overflow-hidden rounded-xl border border-white/10 hover:border-[#FCAE1E] transition-colors duration-300 ${i === 0 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
