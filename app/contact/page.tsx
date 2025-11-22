import { Mail, MapPin, Phone } from "lucide-react"
import { siteConfig } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl space-y-12">
        <div className="border-b-2 border-primary pb-4">
          <h1 className="text-4xl font-bold uppercase tracking-tight">Contact</h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Get in touch for collaborations, speaking inquiries, or questions.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6 text-lg">
              <p className="leading-relaxed text-muted-foreground">
                I am always open to discussing new research opportunities and collaborations. Please feel free to reach
                out using the form or the contact details below.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Mail className="mt-1 h-5 w-5 shrink-0" />
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-muted-foreground hover:text-primary hover:underline"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 h-5 w-5 shrink-0" />
                  <div>
                    <h3 className="font-bold">Office</h3>
                    <p className="text-muted-foreground">{siteConfig.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="mt-1 h-5 w-5 shrink-0" />
                  <div>
                    <h3 className="font-bold">Phone</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-2 border-primary p-6">
              <h3 className="mb-4 font-bold uppercase">Office Hours</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex justify-between border-b border-border pb-2">
                  <span>Tuesday</span>
                  <span>10:00 AM - 12:00 PM</span>
                </li>
                <li className="flex justify-between border-b border-border pb-2">
                  <span>Thursday</span>
                  <span>2:00 PM - 4:00 PM</span>
                </li>
                <li className="flex justify-between pt-2">
                  <span>By Appointment</span>
                  <span>Please email</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="border-2 border-primary p-8">
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-xs font-bold uppercase tracking-wide">
                  Name
                </Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  className="rounded-none border-2 border-primary bg-transparent px-4 py-2 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-xs font-bold uppercase tracking-wide">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="rounded-none border-2 border-primary bg-transparent px-4 py-2 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="text-xs font-bold uppercase tracking-wide">
                  Subject
                </Label>
                <Input
                  id="subject"
                  placeholder="Inquiry regarding..."
                  className="rounded-none border-2 border-primary bg-transparent px-4 py-2 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-xs font-bold uppercase tracking-wide">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="How can I help you?"
                  className="min-h-[150px] rounded-none border-2 border-primary bg-transparent px-4 py-2 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>

              <Button
                type="submit"
                className="w-full rounded-none border-2 border-primary bg-primary py-6 font-bold uppercase tracking-wider text-primary-foreground hover:bg-primary/90"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
