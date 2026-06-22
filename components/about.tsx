"use client"

import { motion } from "framer-motion"
import { MapPin, MessageCircle } from "lucide-react"

export function About() {
  return (
    <section id="about" className="relative px-5 py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">

        {/* Image Gallery */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          {/* מכל הגלריה - גובה ורוחב מוגדרים כאן */}
          <div className="relative h-[450px] w-[350px]">
            
            {/* התמונה הראשית (מימין) */}
            <div className="absolute top-0 right-0 h-80 w-64 overflow-hidden rounded-2xl border-4 border-background shadow-2xl z-10 transition duration-500 hover:scale-[1.03]">
              <img
                src="/me.png"
                alt="איתי ברשי - דיוקן"
                className="h-full w-full object-cover"
              />
            </div>
            
            {/* תמונת הפעולה (משמאל למטה) */}
            <div className="absolute bottom-0 left-0 h-64 w-60 overflow-hidden rounded-2xl border-4 border-background shadow-2xl z-20 transition duration-500 hover:scale-[1.03]">
              <img
                src="/macoco.jpg"
                alt="איתי ברשי - בפעולה"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="mb-4 text-sm font-semibold tracking-[0.25em] text-primary">
            מי אני
          </p>

          <h2 className="text-3xl font-black leading-tight sm:text-4xl">
            היי, אני איתי
          </h2>

          <div className="mt-6 text-lg leading-relaxed text-muted-foreground space-y-4">
            <p>
              אני מתעסק בעולם הקליסטניקס והתנועה כבר קרוב לעשור. הרבה חושבים שזה כישרון, או שהתחלתי מנקודת פתיחה גבוהה — אבל האמת היא שהתחלתי מאפס.
            </p>
            <p>
              לא הצלחתי לעשות אפילו מתח אחד, ולקח לי יותר מחצי שנה להגיע לעליית הכוח הראשונה שלי. תרגילים שלאנשים לוקח כמה חודשים, לי לקחו שנים.
            </p>
            <p>
              דווקא בגלל הדרך הזאת, למדתי להבין את הגוף לעומק, להתמודד עם כשלונות, להבין את החשיבות של התמדה וחזרות, ולעבור גם פציעות — וללמוד איך להתגבר עליהן.
            </p>
            <p>
              <strong className="text-foreground">האני מאמין שלי הוא פשוט: זה לא רק מה שאתה משיג — זה מי שאתה נהיה בדרך.</strong>
            </p>
            <p>
              אני מאמין בללמד אתכם איך להתאמן, להבין את עקרונות האימון ולדעת לעבוד עם ההיגיון הבריא שלכם, הרבה יותר מאשר רק לחזור אחרי מה שאני עושה.
            </p>
          </div>

          <div className="mt-8 flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" />
            נס ציונה
          </div>

          <a
            href="https://wa.me/972532814545"
            target="_blank"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-black transition hover:scale-105"
          >
            <MessageCircle className="h-4 w-4" />
            דבר איתי בוואטסאפ
          </a>
        </motion.div>

      </div>
    </section>
  )
}
