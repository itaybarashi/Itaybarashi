export const WHATSAPP_NUMBER = "972552517518"
export const WHATSAPP_MESSAGE = "היי! אשמח לתאם אימון היכרות בקליסטניקס"
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`

export type LevelKey = "youthBeginner" | "advanced" | "kidsBeginner" | "open"

export const LEVELS: Record<
  LevelKey,
  { label: string; dot: string; ring: string; soft: string }
> = {
  youthBeginner: {
    label: "נוער · מתחילים",
    dot: "bg-sky-400",
    ring: "ring-sky-400/40",
    soft: "bg-sky-400/10 text-sky-300",
  },
  advanced: {
    label: "נוער · מתקדמים",
    dot: "bg-rose-500",
    ring: "ring-rose-500/40",
    soft: "bg-rose-500/10 text-rose-300",
  },
  kidsBeginner: {
    label: "ילדים · מתחילים",
    dot: "bg-emerald-400",
    ring: "ring-emerald-400/40",
    soft: "bg-emerald-400/10 text-emerald-300",
  },
  open: {
    label: "אימון פתוח",
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
      { time: "15:00", title: "מתחילים", group: "נוער (13+)", level: "youthBeginner" },
      { time: "16:00", title: "מתקדמים", group: "נוער (13+)", level: "advanced" },
    ],
  },
  {
    name: "שני",
    sessions: [
      { time: "16:00", title: "מתקדמים", group: "נוער (13+)", level: "advanced" },
      { time: "17:30", title: "מתחילים", group: "ילדים (11-12)", level: "kidsBeginner" },
    ],
  },
  {
    name: "שלישי",
    sessions: [
      { time: "15:00", title: "אימון פתוח", group: "כל הרמות", level: "open" },
    ],
  },
  {
    name: "חמישי",
    sessions: [
      { time: "15:00", title: "מתקדמים", group: "נוער (13+)", level: "advanced" },
      { time: "16:30", title: "מתחילים", group: "ילדים (11-12)", level: "kidsBeginner" },
      { time: "17:30", title: "מתחילים", group: "נוער (13+)", level: "youthBeginner" },
    ],
  },
  {
    name: "שישי",
    sessions: [
      { time: "16:00", title: "אימון פתוח", group: "מתקדמים", level: "open" },
    ],
  },
]
