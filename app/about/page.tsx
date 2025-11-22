import Image from "next/image"
import { collaborators, profile } from "@/lib/data"
import Link from "next/link"
import { FileText, Twitter, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="container mx-auto space-y-16 px-4 py-12 sm:px-6 lg:px-8">
      {/* Main Profile */}
      <section className="space-y-8">
        <div className="grid gap-12 md:grid-cols-[300px_1fr]">
          <div className="flex flex-col items-center">
            <div className="relative aspect-3/4 w-full overflow-hidden border-2 border-primary bg-muted">
              <Image
                src={profile.image || "/placeholder.svg"}
                alt={profile.name}
                fill
                className="object-cover grayscale transition-all hover:grayscale-0"
              />
            </div>
            <div className="mt-4 text-center">
              <h2 className="text-2xl font-bold">{profile.name}</h2>
              <p className="text-lg text-muted-foreground">{profile.title}</p>
              <p className="text-sm text-muted-foreground/80 line-clamp-2">{profile.description}</p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="prose prose-gray max-w-none text-md leading-relaxed text-justify">
              <p>{profile.bio}</p>
              <p>
                My approach combines rigorous experimental design with advanced computational modeling. I believe that
                understanding the brain requires bridging the gap between biological realism and functional abstraction.
              </p>
              <p>Outside of the lab, I enjoy hiking, classical piano, and science fiction literature.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Collaborators */}
      <section className="space-y-8">
        <div className="border-b-2 border-primary pb-4">
          <h2 className="text-3xl font-bold uppercase tracking-tight">Collaborators & Team</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {collaborators.map((person, index) => (
            <div key={index} className="flex flex-col border-2 border-primary p-6 transition-colors hover:bg-accent/10">
              <div className="mb-6 flex justify-center">
                <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-primary bg-muted">
                  <Image src={person.image || "/placeholder.svg"} alt={person.name} fill className="object-cover" />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold">{person.name}</h3>
                <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">{person.role}</p>
                <hr className="my-4 border-primary/20" />
                <p className="text-sm text-muted-foreground text-justify">{person.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
