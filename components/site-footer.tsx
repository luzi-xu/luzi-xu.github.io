import { siteConfig } from "@/lib/data"

export function SiteFooter() {
  return (
    <footer className="border-t border-primary bg-background py-6">
      <div className="container mx-auto px-4 text-center text-sm text-muted-foreground sm:px-6 lg:px-8">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
