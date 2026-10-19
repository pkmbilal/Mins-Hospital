"use client"

import { useState } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import {
  Loader2,
  CalendarCheck,
  CheckCircle2,
  Phone,
  Sun,
  Sunset,
  Moon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { CONTACT, DEPARTMENTS } from "@/lib/siteData"

// 0 = Sunday. Days the OPD is closed.
const CLOSED_DAYS = [0]
const BOOKING_WINDOW_DAYS = 14

const SLOTS = [
  { id: "morning", label: "Morning", time: "9 AM – 12 PM", endHour: 12, icon: Sun },
  { id: "afternoon", label: "Afternoon", time: "12 PM – 4 PM", endHour: 16, icon: Sunset },
  { id: "evening", label: "Evening", time: "4 PM – 8 PM", endHour: 20, icon: Moon },
]

const GENDERS = ["Male", "Female", "Other"]

function buildDays() {
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  return Array.from({ length: BOOKING_WINDOW_DAYS }, (_, i) => {
    const d = new Date(today)
    d.setDate(today.getDate() + i)
    return {
      key: `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`,
      weekday: i === 0 ? "Today" : d.toLocaleDateString("en-IN", { weekday: "short" }),
      day: d.getDate(),
      month: d.toLocaleDateString("en-IN", { month: "short" }),
      label: d.toLocaleDateString("en-IN", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      isToday: i === 0,
      closed: CLOSED_DAYS.includes(d.getDay()),
    }
  })
}

function isSlotPast(slot, day) {
  return day?.isToday && new Date().getHours() >= slot.endHour
}

function StepTitle({ step, title, done }) {
  return (
    <div className="mb-3 flex items-center gap-2.5">
      <span
        className={cn(
          "inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold",
          done ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
        )}
      >
        {step}
      </span>
      <h2 className="text-base font-semibold md:text-lg">{title}</h2>
    </div>
  )
}

function chipClass(selected, disabled) {
  return cn(
    "rounded-xl border bg-card text-sm transition active:scale-95 select-none",
    selected
      ? "border-primary bg-primary/10 text-foreground ring-1 ring-primary"
      : "hover:border-primary/40",
    disabled && "pointer-events-none opacity-40"
  )
}

export default function BookingForm() {
  const searchParams = useSearchParams()
  const initialDepartment = DEPARTMENTS.find(
    (d) => d.title.toLowerCase() === (searchParams.get("department") || "").toLowerCase()
  )?.title

  const [days] = useState(buildDays)
  const [department, setDepartment] = useState(initialDepartment || "")
  const [dateKey, setDateKey] = useState("")
  const [slotId, setSlotId] = useState("")
  const [gender, setGender] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [booked, setBooked] = useState(null)

  const selectedDay = days.find((d) => d.key === dateKey)
  const selectedSlot = SLOTS.find((s) => s.id === slotId)
  const phoneValid = phone.replace(/\D/g, "").length >= 10
  const canSubmit =
    department && selectedDay && selectedSlot && name.trim() && phoneValid && !loading

  function selectDate(day) {
    setDateKey(day.key)
    // Clear a slot that is no longer available on the new date
    if (selectedSlot && isSlotPast(selectedSlot, day)) setSlotId("")
  }

  async function onSubmit(e) {
    e.preventDefault()
    if (!canSubmit) return

    if (typeof navigator !== "undefined" && navigator.onLine === false) {
      setError("offline")
      return
    }

    setLoading(true)
    setError("")

    const form = new FormData(e.currentTarget)
    const formData = new FormData()
    formData.append("Department", department)
    formData.append("Preferred Date", selectedDay.label)
    formData.append("Preferred Time", `${selectedSlot.label} (${selectedSlot.time})`)
    formData.append("Patient Name", name.trim())
    formData.append("Phone", phone.trim())
    formData.append("Age", form.get("age") || "-")
    formData.append("Gender", gender || "-")
    formData.append("Notes", form.get("notes") || "-")
    formData.append("_subject", `New Appointment Request - ${department}`)
    formData.append("_captcha", "false")
    formData.append("_template", "table")

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT.email}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      })

      if (!response.ok) throw new Error(`FormSubmit responded ${response.status}`)

      setBooked({
        department,
        date: selectedDay.label,
        slot: `${selectedSlot.label} (${selectedSlot.time})`,
        name: name.trim(),
      })
      window.scrollTo({ top: 0, behavior: "smooth" })
    } catch (err) {
      console.error(err)
      setError("failed")
    } finally {
      setLoading(false)
    }
  }

  const telHref = `tel:${CONTACT.phone.replace(/\s/g, "")}`

  if (booked) {
    return (
      <section className="mx-auto max-w-xl px-4 py-8 md:py-12">
        <Card className="rounded-2xl">
          <CardContent className="p-6 text-center md:p-8">
            <CheckCircle2 className="mx-auto h-14 w-14 text-primary" />
            <h2 className="mt-4 text-xl font-semibold md:text-2xl">Request received</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Thank you, {booked.name}. Our team will call you shortly to confirm
              your appointment.
            </p>

            <dl className="mt-6 divide-y rounded-xl border text-left text-sm">
              {[
                ["Department", booked.department],
                ["Date", booked.date],
                ["Time", booked.slot],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4 px-4 py-3">
                  <dt className="text-muted-foreground">{k}</dt>
                  <dd className="text-right font-medium">{v}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-6 grid gap-2 sm:grid-cols-2">
              <Button asChild size="lg" className="gap-2">
                <a href={telHref}>
                  <Phone className="h-4 w-4" />
                  Call hospital
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/">Back to home</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    )
  }

  return (
    <section className="mx-auto max-w-3xl px-4 py-6 md:py-10">
      <form onSubmit={onSubmit} className="space-y-8">
        {/* 1. Department */}
        <div>
          <StepTitle step={1} title="Choose a department" done={!!department} />
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
            {DEPARTMENTS.map(({ title, icon: Icon }) => (
              <button
                key={title}
                type="button"
                onClick={() => setDepartment(title)}
                aria-pressed={department === title}
                className={cn(
                  chipClass(department === title),
                  "flex flex-col items-center gap-2 px-2 py-3 text-center"
                )}
              >
                <Icon
                  className={cn(
                    "h-6 w-6",
                    department === title ? "text-primary" : "text-muted-foreground"
                  )}
                />
                <span className="text-xs font-medium leading-tight">{title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 2. Date */}
        <div>
          <StepTitle step={2} title="Pick a date" done={!!selectedDay} />
          <div className="-mx-4 flex snap-x gap-2 overflow-x-auto px-4 pb-2 [scrollbar-width:none]">
            {days.map((day) => (
              <button
                key={day.key}
                type="button"
                disabled={day.closed}
                onClick={() => selectDate(day)}
                aria-pressed={dateKey === day.key}
                aria-label={day.closed ? `${day.label} (closed)` : day.label}
                className={cn(
                  chipClass(dateKey === day.key, day.closed),
                  "flex w-16 shrink-0 snap-start flex-col items-center py-2.5"
                )}
              >
                <span className="text-[11px] text-muted-foreground">{day.weekday}</span>
                <span className="text-lg font-semibold leading-tight">{day.day}</span>
                <span className="text-[11px] text-muted-foreground">
                  {day.closed ? "Closed" : day.month}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* 3. Time slot */}
        <div>
          <StepTitle step={3} title="Preferred time" done={!!selectedSlot} />
          <div className="grid grid-cols-3 gap-2">
            {SLOTS.map((slot) => {
              const Icon = slot.icon
              const past = isSlotPast(slot, selectedDay)
              return (
                <button
                  key={slot.id}
                  type="button"
                  disabled={past}
                  onClick={() => setSlotId(slot.id)}
                  aria-pressed={slotId === slot.id}
                  className={cn(
                    chipClass(slotId === slot.id, past),
                    "flex flex-col items-center gap-1 px-2 py-3"
                  )}
                >
                  <Icon
                    className={cn(
                      "h-5 w-5",
                      slotId === slot.id ? "text-primary" : "text-muted-foreground"
                    )}
                  />
                  <span className="font-medium">{slot.label}</span>
                  <span className="text-[11px] text-muted-foreground">{slot.time}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* 4. Patient details */}
        <div>
          <StepTitle step={4} title="Patient details" done={!!name.trim() && phoneValid} />
          <div className="space-y-3">
            <Input
              name="name"
              placeholder="Patient full name *"
              autoComplete="name"
              className="h-12"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Input
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="Phone number *"
              className="h-12"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            {phone && !phoneValid && (
              <p className="text-xs text-destructive">Enter a valid phone number.</p>
            )}

            <div className="grid grid-cols-[6rem_1fr] gap-3">
              <Input
                name="age"
                type="number"
                inputMode="numeric"
                min={0}
                max={120}
                placeholder="Age"
                className="h-12"
              />
              <div className="grid grid-cols-3 gap-2">
                {GENDERS.map((g) => (
                  <button
                    key={g}
                    type="button"
                    onClick={() => setGender(gender === g ? "" : g)}
                    aria-pressed={gender === g}
                    className={cn(chipClass(gender === g), "h-12 text-xs font-medium")}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>

            <Textarea
              name="notes"
              placeholder="Symptoms or notes (optional)"
              className="min-h-[96px]"
            />
          </div>
        </div>

        {error && (
          <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-4 text-sm">
            {error === "offline"
              ? "You're offline. Please call us to book your appointment."
              : "We couldn't send your request. Please try again or call us."}{" "}
            <a href={telHref} className="font-semibold text-primary underline">
              {CONTACT.phone}
            </a>
          </div>
        )}

        <div className="sticky bottom-[calc(4rem+env(safe-area-inset-bottom))] -mx-4 border-t bg-background/90 px-4 py-3 backdrop-blur-lg md:static md:mx-0 md:border-0 md:bg-transparent md:p-0">
          <Button type="submit" size="lg" className="h-12 w-full gap-2" disabled={!canSubmit}>
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <CalendarCheck className="h-4 w-4" />
                Request Appointment
              </>
            )}
          </Button>
        </div>
      </form>
    </section>
  )
}
