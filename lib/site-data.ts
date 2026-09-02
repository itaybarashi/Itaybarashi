export const WHATSAPP_NUMBER = "972552517518"
export const WHATSAPP_MESSAGE = "היי! אשמח לתאם אימון היכרות בקליסטניקס"
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`

export type LevelKey = "highSchool" | "middleSchool" | "open"

export const LEVELS: Record<
  LevelKey,
  { label: string; dot: string; ring: string; soft: string }
> = {
  highSchool: {
    label: "תיכון",
    dot: "bg-sky-400",
    ring: "ring-sky-400/40",
    soft: "bg-sky-400/10 text-sky-300",
  },
  middleSchool: {
    label: "חטיבה",
    dot: "bg-emerald-400",
    ring: "ring-emerald-400/40",
    soft: "bg-emerald-400/10 text-emerald-300",
  },
  open: {
    label: "אימון פתוח למתקדמים",
    dot: "bg-amber-400",
    ring: "ring-amber-400/40",
    soft: "bg-amber-400/10 text-amber-300",
  },
}

export type Session = {
  time: string
  title: string
  group: string
  level: LevelKey
}

export type Day = {
  name: string
  sessions: Session[]
}

export const SCHEDULE: Day[] = [
  {
    name: "ראשון",
    sessions: [
      { time: "16:00", title: "מתחילים", group: "תיכון", level: "highSchool" },
      { time: "17:00", title: "מתקדמים", group: "תיכון", level: "highSchool" },
    ],
  },
  {
    name: "שני",
    sessions: [
      { time: "15:30", title: "מתקדמים", group: "תיכון", level: "highSchool" },
      { time: "17:00", title: "מתחילים", group: "חטיבה", level: "middleSchool" },
    ],
  },
  {
    name: "שלישי",
    sessions: [
      { time: "16:30", title: "אימון פתוח", group: "כל הרמות", level: "open" },
    ],
  },
  {
    name: "חמישי",
    sessions: [
      { time: "15:30", title: "מתחילים", group: "חטיבה", level: "middleSchool" },
      { time: "17:00", title: "מתקדמים", group: "תיכון", level: "highSchool" },
      { time: "18:00", title: "מתחילים", group: "תיכון", level: "highSchool" },
    ],
  },
  {
    name: "שישי",
    sessions: [
      { time: "16:00", title: "אימון פתוח למתקדמים", group: "מתקדמים", level: "open" },
    ],
  },
]
