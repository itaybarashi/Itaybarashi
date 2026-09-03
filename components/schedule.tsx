"use client"

import { useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Clock, Users } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { LEVELS, SCHEDULE, type LevelKey } from "@/lib/site-data"

const easing = [0.22, 1, 0.36, 1] as const
const filterKeys = Object.keys(LEVELS) as LevelKey[]

export function Schedule() {
  const [active, setActive] = useState<LevelKey | "all">("all")

  const days = useMemo(() => {
    if (active === "all") return SCHEDULE
    return SCHEDULE.map((d) => ({
      ...d,
      sessions: d.sessions.filter((s) => s.level === active),
    })).filter((d) => d.sessions.length > 0)
  }, [active])

  return (
    <section id="schedule" className="relative px-5 py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/2 size-[28rem] rounded-full bg-primary/10 blur-[130px]" />
      </div>

      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="mb-4 text-center text-sm font-semibold tracking-[0.25em] text-primary">
            מתי מתאמנים
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="text-center text-balance text-3xl font-black leading-tight sm:text-5xl">
            לוז אימונים
          </h2>
        </Reveal>

        {/* filters */}
        <Reveal delay={0.1}>
          <div className="mt-9 flex flex-wrap justify-center gap-2.5">
            <FilterChip
              label="הכל"
              isActive={active === "all"}
              onClick={() => setActive("all")}
            />
            {filterKeys.map((key) => (
              <FilterChip
                key={key}
                label={LEVELS[key].label}
                dot={LEVELS[key].dot}
                isActive={active === key}
                onClick={() => setActive(key)}
              />
            ))}
          </div>
        </Reveal>

        {/* days grid */}
        <motion.div layout className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {days.map((day) => (
              <motion.div
                key={day.name}
                layout
                initial={{ opacity: 0, y: 24, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: easing }}
                className="rounded-3xl border border-border bg-card/60 p-6"
              >
                <div className="flex items-center justify-between border-b border-border pb-3">
                  <h3 className="text-xl font-black">{day.name}</h3>
                  <span className="text-xs font-medium text-muted-foreground">
                    {day.sessions.length} אימונים
                  </span>
                </div>

                <div className="mt-4 flex flex-col gap-3">
                  {day.sessions.map((s, i) => {
                    const lvl = LEVELS[s.level]
                    return (
                      <motion.div
                        key={`${s.time}-${s.title}-${i}`}
                        initial={{ opacity: 0, x: 12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.08, ease: easing }}
                        whileHover={{ x: -4 }}
                        className={`group flex items-center justify-between gap-3 rounded-2xl border border-transparent bg-secondary/40 p-3 ring-1 ring-inset transition-colors hover:bg-secondary ${lvl.ring}`}
                      >
                        <div className="flex items-center gap-3">
                          <span className={`size-3 shrink-0 rounded-full ${lvl.dot}`} />
                          <div>
                            <div className="flex items-center gap-1.5 font-bold">
                              <Clock className="size-3.5 text-muted-foreground" />
                              {s.time}
                              <span className="text-foreground">· {s.title}</span>
                            </div>
                            <div className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                              <Users className="size-3.5" />
                              {s.group}
                            </div>
                          </div>
                        </div>

                        <span
                          className={`rounded-full px-2.5 py-1 text-[11px] font-semibold shrink-0 ${lvl.soft}`}
                        >
                          {lvl.label}
                        </span>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

function FilterChip({
  label,
  dot,
  isActive,
  onClick,
}: {
  label: string
  dot?: string
  isActive: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all ${
        isActive
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border bg-card/50 text-muted-foreground hover:text-foreground"
      }`}
    >
      {dot && <span className={`size-2.5 rounded-full ${dot}`} />}
      {label}
    </button>
  )
}
