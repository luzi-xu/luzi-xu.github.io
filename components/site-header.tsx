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
        "sticky top-0 z-50 w-full border-b-2 border-primary bg-primary transition-transform duration-300",
        !isVisible && "-translate-y-full",
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-3">
            <Brain className="h-10 w-10 text-background" />
            <div className="flex flex-col text-lg  leading-none font-great-vibes text-background">
              <span>Memory</span>
              <span>Awareness</span>
              <span>Decision-making</span>
            </div>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex md:space-x-6">
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

        {/* Mobile Menu Button */}
        <div className="md:hidden text-background">
          <Button variant="ghost" size="icon" className="rounded-none" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
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
