"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Stethoscope, CalendarCheck, Tag, MessageSquare } from "lucide-react"

import { cn } from "@/lib/utils"

const TABS = [
  { label: "Home", href: "/", icon: Home },
  { label: "Departments", href: "/departments", icon: Stethoscope },
  { label: "Book", href: "/book", icon: CalendarCheck, primary: true },
  { label: "Offers", href: "/offers", icon: Tag },
  { label: "Contact", href: "/contact", icon: MessageSquare },
]

function isActive(pathname, href) {
  if (href === "/") return pathname === "/"
  return pathname === href || pathname.startsWith(`${href}/`)
}

// App-style bottom navigation, shown only on small screens
export default function MobileTabBar() {
  const pathname = usePathname()

  if (pathname === "/offline") return null

  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-0 bottom-0 z-50 border-t bg-background/90 pb-[env(safe-area-inset-bottom)] shadow-[0_-4px_20px_rgba(0,0,0,0.06)] backdrop-blur-lg md:hidden"
    >
      <ul className="mx-auto grid h-16 max-w-md grid-cols-5 items-center">
        {TABS.map(({ label, href, icon: Icon, primary }) => {
          const active = isActive(pathname, href)

          if (primary) {
            return (
              <li key={label} className="flex justify-center">
                <Link
                  href={href}
                  aria-label="Book appointment"
                  aria-current={active ? "page" : undefined}
                  className="-mt-7 flex flex-col items-center gap-1 select-none"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/40 ring-4 ring-background transition-transform active:scale-90">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span
                    className={cn(
                      "text-[11px] font-medium",
                      active ? "text-primary" : "text-muted-foreground"
                    )}
                  >
                    {label}
                  </span>
                </Link>
              </li>
            )
          }

          return (
            <li key={label}>
              <Link
                href={href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex flex-col items-center gap-1 py-1 select-none transition-transform active:scale-90",
                  active ? "text-primary" : "text-muted-foreground"
                )}
              >
                <span
                  className={cn(
                    "flex h-8 w-14 items-center justify-center rounded-full transition-colors",
                    active && "bg-primary/15"
                  )}
                >
                  <Icon className="h-5 w-5" strokeWidth={active ? 2.4 : 2} />
                </span>
                <span className="text-[11px] font-medium leading-none">{label}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
