"use client"

export function Pricing() {
  return (
    <section id="pricing" className="py-24 px-5 bg-background border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="inline-block bg-card/30 border border-border px-4 py-1.5 rounded-full text-xs font-medium tracking-wide text-muted-foreground">
            מסלולים ומחירים
          </span>
          <h2 className="text-3xl md:text-5xl font-black">
            בחר את מסלול האימון בסטודיו
          </h2>
          <p className="text-muted-foreground">
            התחייבות לתהליך עומק, בניית יכולות פיזיות ומנטליות וליווי אישי במסגרת הסטודיו בנס ציונה.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-right" dir="rtl">
          
          {/* מסלול חד-שבוע */}
          <div className="bg-card/50 border border-border p-8 rounded-3xl flex flex-col justify-between space-y-8 relative">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">מסלול חד-שבועי</h3>
              <p className="text-muted-foreground text-sm">
                4 אימונים בחודש (כ-6 שעות אימון חודשיות). מתאים למתאמנים שרוצים לשלב אימון קליסטניקס ממוקד לצד פעילות נוספת.
              </p>
              <div className="text-4xl font-black text-foreground pt-2">
                300 ₪ <span className="text-sm font-normal text-muted-foreground">/ חודש</span>
              </div>
            </div>

            <a 
              href="https://wa.me/972552517518?text=היי,%20אשמח%20לשמוע%20פרטים%20על%20מסלול%20חד-שבועי%20בסטודיו."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center rounded-full border border-border hover:border-primary py-3 font-bold transition-colors bg-background hover:bg-card"
            >
              בחירת מסלול חד-שבועי
            </a>
          </div>

          {/* מסלול דו-שבוע (מומלץ) */}
          <div className="bg-card border-2 border-primary/60 p-8 rounded-3xl flex flex-col justify-between space-y-8 relative shadow-xl">
            <div className="absolute -top-4 left-8 bg-primary text-primary-foreground text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full">
              המשתלם ביותר
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold">מסלול דו-שבועי</h3>
              <p className="text-muted-foreground text-sm">
                8 אימונים בחודש (12 שעות אימון חודשיות). לתהליך עבודה אמיתי, יצירת התמדה מהירה ובניית יכולות עומק בסטודיו.
              </p>
              <div className="text-4xl font-black text-primary pt-2">
                500 ₪ <span className="text-sm font-normal text-muted-foreground">/ חודש</span>
              </div>
            </div>

            <a 
              href="https://wa.me/972552517518?text=היי,%20אשמח%20לשמוע%20פרטים%20על%20מסלול%20דו-שבועי%20בסטודיו."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center rounded-full bg-primary py-3 font-bold text-primary-foreground hover:scale-[1.02] transition-transform shadow-lg"
            >
              בחירת מסלול דו-שבועי
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
