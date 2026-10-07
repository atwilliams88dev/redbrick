'use client'

import { CalendarClock, ChefHat, Coffee, Clock3 } from 'lucide-react'
import { useEffect, useState } from 'react'

type DaySchedule = {
  label: string
  open: number
  close: number
  kitchenClose: number
}

const schedule: Record<number, DaySchedule | null> = {
  0: null,
  1: { label: 'Monday', open: 7, close: 17, kitchenClose: 14 },
  2: { label: 'Tuesday', open: 7, close: 17, kitchenClose: 14 },
  3: { label: 'Wednesday', open: 7, close: 17, kitchenClose: 14 },
  4: { label: 'Thursday', open: 7, close: 17, kitchenClose: 14 },
  5: { label: 'Friday', open: 7, close: 20, kitchenClose: 20 },
  6: { label: 'Saturday', open: 7, close: 15, kitchenClose: 15 },
}

function getCentralTime() {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Chicago',
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric',
    hourCycle: 'h23',
  }).formatToParts(new Date())

  const weekday = parts.find((part) => part.type === 'weekday')?.value
  const hour = Number(parts.find((part) => part.type === 'hour')?.value ?? 0)
  const minute = Number(parts.find((part) => part.type === 'minute')?.value ?? 0)
  const dayIndex = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(weekday ?? '')

  return { dayIndex, time: hour + minute / 60 }
}

function formatHour(hour: number) {
  if (hour === 12) return '12pm'
  return hour > 12 ? `${hour - 12}pm` : `${hour}am`
}

export function TodayHours() {
  const [status, setStatus] = useState<{
    tone: 'open' | 'kitchen-closed' | 'closed'
    eyebrow: string
    detail: string
  } | null>(null)

  useEffect(() => {
    const updateStatus = () => {
      const { dayIndex, time } = getCentralTime()
      const today = schedule[dayIndex]

      if (!today) {
        setStatus({ tone: 'closed', eyebrow: 'Closed today', detail: 'Open Monday at 7am' })
        return
      }

      if (time < today.open) {
        setStatus({ tone: 'closed', eyebrow: `Opens at ${formatHour(today.open)}`, detail: `${today.label} hours` })
      } else if (time >= today.close) {
        const nextOpen = dayIndex === 6 ? 'Monday at 7am' : 'tomorrow at 7am'
        setStatus({ tone: 'closed', eyebrow: 'Closed for today', detail: `Open ${nextOpen}` })
      } else if (time >= today.kitchenClose) {
        setStatus({
          tone: 'kitchen-closed',
          eyebrow: `Coffee until ${formatHour(today.close)}`,
          detail: 'Kitchen closed for today',
        })
      } else {
        setStatus({
          tone: 'open',
          eyebrow: `Open until ${formatHour(today.close)}`,
          detail: `Kitchen until ${formatHour(today.kitchenClose)}`,
        })
      }
    }

    updateStatus()
    const timer = window.setInterval(updateStatus, 60_000)
    return () => window.clearInterval(timer)
  }, [])

  const tone = status?.tone ?? 'closed'
  const dotColor = tone === 'open' ? 'bg-emerald-500' : tone === 'kitchen-closed' ? 'bg-amber-500' : 'bg-red-700'

  return (
    <a
      href="/visit#hours"
      className="group flex min-w-0 items-center gap-3 rounded-full border border-red-900/15 bg-[#fdfaf6] px-3 py-2 text-left shadow-sm transition hover:border-red-900/35 hover:shadow-md sm:px-4"
      aria-label="View hours of operation"
    >
      <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${dotColor}`} aria-hidden="true" />
      <span className="min-w-0 leading-tight">
        <span className="block truncate text-xs font-bold text-red-950 sm:text-sm">
          {status?.eyebrow ?? 'View today’s hours'}
        </span>
        <span className="hidden truncate text-xs text-gray-500 sm:block">
          {status?.detail ?? 'Café and kitchen schedule'}
        </span>
      </span>
      <CalendarClock className="hidden h-4 w-4 shrink-0 text-red-800 transition group-hover:rotate-6 sm:block" aria-hidden="true" />
    </a>
  )
}

const weeklyHours = [
  { days: 'Monday–Thursday', café: '7am–5pm', kitchen: '7am–2pm', note: 'Coffee & drinks continue until 5pm' },
  { days: 'Friday', café: '7am–8pm', kitchen: 'Full kitchen', note: 'Food, coffee & drinks all day' },
  { days: 'Saturday', café: '7am–3pm', kitchen: 'Full kitchen', note: 'Food, coffee & drinks all day' },
  { days: 'Sunday', café: 'Closed', kitchen: 'Closed', note: 'See you Monday morning' },
]

export function WeeklyHours() {
  return (
    <section id="hours" className="rounded-3xl bg-red-950 p-6 text-white shadow-xl sm:p-8" aria-labelledby="hours-heading">
      <div className="flex items-start gap-4">
        <span className="rounded-2xl bg-white/10 p-3">
          <Clock3 className="h-6 w-6 text-red-100" aria-hidden="true" />
        </span>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-red-200">Plan your visit</p>
          <h2 id="hours-heading" className="mt-1 font-serif text-3xl font-bold">Hours &amp; kitchen</h2>
        </div>
      </div>

      <div className="mt-7 divide-y divide-white/15 border-y border-white/15">
        {weeklyHours.map((item) => (
          <div key={item.days} className="grid gap-2 py-4 sm:grid-cols-[1.15fr_0.8fr_1.35fr] sm:items-center sm:gap-5">
            <p className="font-bold text-white">{item.days}</p>
            <p className={item.café === 'Closed' ? 'font-semibold text-red-200' : 'font-semibold text-white'}>{item.café}</p>
            <div>
              <p className="flex items-center gap-2 text-sm font-semibold text-red-100">
                <ChefHat className="h-4 w-4" aria-hidden="true" /> {item.kitchen}
              </p>
              <p className="mt-0.5 text-xs text-red-200/80">{item.note}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-start gap-3 rounded-2xl bg-white/10 p-4 text-sm text-red-50">
        <Coffee className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" aria-hidden="true" />
        <p><strong>Coffee keeps pouring.</strong> Monday through Thursday, the kitchen wraps up at 2pm while the full coffee and drink menu remains available until 5pm.</p>
      </div>
    </section>
  )
}
