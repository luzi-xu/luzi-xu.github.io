"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Brain } from "lucide-react"
import { navLinks } from "@/lib/data"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isVisible, setIsVisible] = React.useState(true)
  const [lastScrollY, setLastScrollY] = React.useState(0)
  const pathname = usePathname()

  React.useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        const currentScrollY = window.scrollY

        // Hide if scrolling down and not at top
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsVisible(false)
        } else {
          // Show if scrolling up or at top
          setIsVisible(true)
        }

        setLastScrollY(currentScrollY)
      }
    }

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar)
      return () => window.removeEventListener("scroll", controlNavbar)
    }
  }, [lastScrollY])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-primary bg-primary transition-transform duration-300",
        !isVisible && "-translate-y-full",
      )}
    >
      <div>
        {/* Brand Row */}
        <div className="flex items-center justify-between h-16 relative ps-2 sm:ps-6 md:ps-10 lg:ps-16" style={{ background: "linear-gradient(to right, hsl(171.23deg 51.18% 50.2%) 0%, hsl(171.23deg 51.18% 50.2%) 40%, #fff 80%, #fff 100%)" }}>
          <div
            className="absolute top-0 right-0 h-full z-0"
            style={{
              left: 64,
              right: 0,
              background: "linear-gradient(to right, #CC66AF 0%, #CC66AF 10%, #0CC5E1 60%, #fff 100%)",
            }}
            aria-hidden="true"
          />
          <Link href="/" className="flex items-center space-x-3 relative z-10">
            <img src="/logo.jpg" alt="Logo" width={64} height={64} />
            <div className="flex flex-col text-lg leading-none font-great-vibes text-background">
              <span>Memory</span>
              <span>Awareness</span>
              <span>Decision-making</span>
            </div>
          </Link>
          {/* Mobile Menu Button (at top right corner) */}
          <div className="md:hidden text-primary relative z-10 pe-4">
            <Button variant="ghost" size="icon" className="rounded-none" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
        {/* Navigation Row */}
        <div className="flex items-center justify-end pe-2 sm:pe-6 md:pe-10 lg:pe-16">
          {/* Desktop Nav */}
          <nav className="hidden md:flex md:space-x-6 py-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium uppercase tracking-wide transition-colors hover:text-background hover:underline hover:underline-offset-4",
                  pathname === link.href
                    ? "text-background underline underline-offset-4 font-bold"
                    : "text-background",
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="border-t-2 border-primary bg-primary md:hidden">
          <div className="space-y-1 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "block py-2 text-sm font-medium uppercase tracking-wide",
                  pathname === link.href ? "text-background font-bold" : "text-background",
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
