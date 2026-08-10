"use client"

import { motion } from "framer-motion"
import { MapPin } from "lucide-react"

export function About() {
  return (
    <section id="about" className="relative px-5 py-28 bg-background text-foreground">
      <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">

        {/* --- צד שמאל (או ימין ברספונסיביות): קולאז' התמונות --- */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          {/* מכל הגלריה */}
          <div className="relative h-[520px] w-[380px]">
            
            {/* 1. התמונה הראשית (מימין למעלה - me.png) */}
            <div className="absolute top-0 right-0 h-72 w-56 overflow-hidden rounded-2xl border-4 border-background shadow-2xl z-10 transition duration-500 hover:scale-[1.03]">
              <img
                src="/me.png"
                alt="איתי ברשי - דיוקן"
                className="h-full w-full object-cover"
              />
            </div>
            
            {/* 2. תמונת הפעולה (משמאל למטה - macaco.png) */}
            <div className="absolute bottom-16 left-0 h-60 w-52 overflow-hidden rounded-2xl border-4 border-background shadow-2xl z-20 transition duration-500 hover:scale-[1.03]">
              <img
                src="/macaco.png"
                alt="איתי ברשי - בפעולה"
                className="h-full w-full object-cover"
              />
            </div>

            {/* 3. התמונה החדשה והצבעונית (ShaiBachar.jpg) - ממוקמת כתוספת יפה למטה מימין */}
            <div className="absolute bottom-0 right-4 h-48 w-60 overflow-hidden rounded-2xl border-4 border-background shadow-2xl z-30 transition duration-500 hover:scale-[1.03]">
              <img
                src="/ShaiBachar.jpg"
                alt="איתי ברשי - שקיעה"
                className="h-full w-full object-cover"
              />
            </div>

          </div>
        </motion.div>

        {/* --- צד ימין: טקסט האודות --- */}
        <div className="text-right space-y-6">
          <span className="inline-block bg-card px-4 py-1.5 rounded-full text-sm font-medium text-primary border border-border">
            מי אני
          </span>
          
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
            היי, אני <span className="text-primary">איתי</span>
          </h2>

          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              אני מתעסק בעולם הקליסטניקס והתנועה כבר קרוב לעשור. הרבה חושבים שזה כישרון, או שהתחלתי מנקודת פתיחה גבוהה — אבל האמת هي שהתחלתי מאפס.
            </p>
            <p>
              לא הצלחתי לעשות אפילו מתח אחד, ולקח לי יותר מחצי שנה להגיע לעליית הכוח הראשונה שלי. תרגילים שלוקחים לאנשים כמה חודשים, לי לקחו שנים.
            </p>
            <p>
              דווקא בגלל הדרך הזאת, למדתי להבין את הגוף לעומק, להתמודד עם כשלונות, להבין את החשיבות של התמדה וחזרות, ולעבור גם פציעות — וללמוד איך להתגבר עליהן.
            </p>
          </div>

          <div className="bg-card p-6 rounded-2xl border border-border shadow-lg">
            <p className="text-xl font-bold text-foreground">
              האני מאמין שלי הוא פשוט: זה לא רק מה שאתה משיג — זה מי שאתה נהיה בדרך.
            </p>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed">
            אני מאמין בללמד אתכם איך להתאמן, להבין את עקרונות האימון ולדעת לעבוד עם ההיגיון הבריא שלכם, הרבה יותר מאשר רק לחזור אחרי מה שאני עושה.
          </p>

          <div className="flex items-center gap-2 text-primary font-semibold pt-2">
            <MapPin className="size-6 text-primary" />
            <span className="text-lg">נס ציונה</span>
          </div>
        </div>

      </div>
    </section>
  )
}
