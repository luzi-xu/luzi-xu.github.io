import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { ContactForm } from "@/components/contact-form";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl space-y-12">
        <div className="border-b-2 border-primary pb-4">
          <h1 className="text-4xl font-bold uppercase tracking-tight">
            Contact
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Get in touch for collaborations, speaking inquiries, or questions.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6 text-lg">
              <p className="leading-relaxed text-muted-foreground text-justify">
                I am always open to discussing new research opportunities and
                collaborations. Please feel free to reach out using the form or
                the contact details below.
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
                    <p className="text-muted-foreground">
                      {siteConfig.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="mt-1 h-5 w-5 shrink-0" />
                  <div>
                    <h3 className="font-bold">Phone</h3>
                    <p className="text-muted-foreground">{siteConfig.phone}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="border-2 border-primary p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
