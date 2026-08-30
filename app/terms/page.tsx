"use client"

import { SiteHeader } from "@/components/site-header"
import { ArrowRight, FileText } from "lucide-react"
import Link from "next/link"

export default function TermsPage() {
  return (
    <main className="relative min-h-screen bg-black text-white flex flex-col overflow-x-hidden" dir="rtl">
      
      <SiteHeader />

      {/* זוהר עדין ברקע */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="size-[35rem] -translate-y-24 rounded-full bg-amber-300/10 blur-[150px]" />
      </div>

      <div className="max-w-3xl mx-auto px-5 py-16 flex-1 w-full space-y-10">
        
        {/* כותרת העמוד */}
        <div className="space-y-4 text-center">
          <div className="w-12 h-12 rounded-2xl bg-amber-300/10 border border-amber-300/30 flex items-center justify-center mx-auto text-amber-300 shadow-lg">
            <FileText className="size-6" />
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight">
            תקנון האימונים הפרונטליים
          </h1>
          <p className="text-zinc-400 text-sm md:text-base">
            מדיניות הסטודיו, זמנים, מנויים ונהלים — GRAVITAS
          </p>
        </div>

        {/* תוכן התקנון */}
        <div className="bg-zinc-950 border border-white/10 rounded-3xl p-6 md:p-10 space-y-8 text-zinc-300 text-sm md:text-base leading-relaxed shadow-xl">
          
          {/* סעיף 1: זמני אימון */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-amber-300 flex items-center gap-2">
              <span>🕐</span> זמני אימון
            </h2>
            <ul className="list-disc list-inside space-y-2 marker:text-amber-300 text-zinc-300">
              <li>כל שיעור נמשך בממוצע כ-75 דקות, ייתכן ויהיו הארכות במידת הצורך.</li>
              <li>נא להגיע בזמן – איחור של יותר מ־10 דקות עלול לפגוע באיכות האימון.</li>
              <li>התחייבות לשעת אימון קבועה מראש.</li>
            </ul>
          </div>

          <hr className="border-white/10" />

          {/* סעיף 2: ביטולים והשלמות */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-amber-300 flex items-center gap-2">
              <span>📅</span> ביטולים והשלמות
            </h2>
            <ul className="list-disc list-inside space-y-2 marker:text-amber-300 text-zinc-300">
              <li>במקרה של ביטול בזמן, תינתן אפשרות להשלמה על בסיס מקום פנוי במהלך החודש הנוכחי בלבד.</li>
              <li>לא ניתנות השלמות לחודשים קודמים.</li>
              <li><strong className="text-white">האחריות הבלעדית לתיאום ומימוש שיעורי ההשלמה חלה על המתאמן.</strong></li>
              <li>במקרה של היעדרות מתמשכת (מעל שבועיים), יש לעדכן מראש – ייתכן ונוכל להקפיא את המנוי לפי שיקול דעת.</li>
            </ul>
          </div>

          <hr className="border-white/10" />

          {/* סעיף 3: מנוי חודשי */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-amber-300 flex items-center gap-2">
              <span>💳</span> מנוי חודשי
            </h2>
            <ul className="list-disc list-inside space-y-2 marker:text-amber-300 text-zinc-300">
              <li>המנוי החודשי כולל כמות אימונים קבועה (לדוגמה: 1 / 2 / 3 אימונים בשבוע).</li>
              <li>המנוי מתחדש בתחילת כל חודש.</li>
              <li>אין החזרים כספיים על אי־הגעה או ביטולים מאוחרים.</li>
              <li>הפסקת מנוי תתבצע בהודעה מראש לפני תחילת החודש הבא.</li>
              <li>ניתן לשדרג / לשנות את כמות האימונים החודשית עד סוף החודש.</li>
            </ul>
          </div>

          <hr className="border-white/10" />

          {/* סעיף 4: חגים, פגרות וימי חופשה */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-amber-300 flex items-center gap-2">
              <span>🏛️</span> חגים, פגרות וימי חופשה
            </h2>
            <div className="space-y-3 text-zinc-300">
              <p>
                <strong className="text-white">חגי ישראל וערבי חג:</strong> הסטודיו סגור בימי חג ובערבי חג (ראש השנה, יום הכיפורים, סוכות, שמחת תורה, חנוכה, פורים, פסח, שבועות, יום העצמאות ויום הזיכרון). שיעורים שנופלים על חג או ערב חג אינם מזכים בהשלמה או בהחזר כספי.
              </p>
              <p>
                <strong className="text-white">חופשת קיץ / פגרת הסטודיו:</strong> הסטודיו יהיה סגור במהלך השנה עד 14 ימי חופשה מרוכזים בתיאום מראש (למשל תקופת פגרת הקיץ או חופשה שנתית של המאמן). הודעה על ימי החופשה תימסר לקבוצות לפחות שבועיים מראש.
              </p>
              <p>
                <strong className="text-white">ימי חופשה פרטיים של המאמן:</strong> למאמן שמורה הזכות לקחת עד 14 ימי חופשה בשנה באישור מראש, ובגינם המערכת תערוך התאמה או השלמה במידת הצורך.
              </p>
            </div>
          </div>

          <hr className="border-white/10" />

          {/* סעיף 5: כללי */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-amber-300 flex items-center gap-2">
              <span>📌</span> כללי
            </h2>
            <ul className="list-disc list-inside space-y-2 marker:text-amber-300 text-zinc-300">
              <li>כל מתאמן נדרש להביא בגדים נוחים לאימון.</li>
              <li>יש להודיע מראש על כל פציעה, מגבלה רפואית או שינוי משמעותי במצב הבריאותי.</li>
              <li>באימונים עובדים ברצינות, אבל גם בכיף. כבוד הדדי, הקשבה והתמדה הם חלק בלתי נפרד מהתהליך.</li>
            </ul>
          </div>

        </div>

        {/* כפתור חזרה */}
        <div className="text-center pt-4">
          <Link
            href="/local"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors border border-white/20 rounded-full px-6 py-2.5 bg-white/5"
          >
            <ArrowRight className="size-4 rtl:rotate-180" />
            <span>חזרה לאתר הסטודיו</span>
          </Link>
        </div>

      </div>

      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} GRAVITAS · קליסטניקס · עמידות ידיים · נס ציונה
      </footer>

    </main>
  )
}
