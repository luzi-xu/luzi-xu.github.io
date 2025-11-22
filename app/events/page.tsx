import Image from "next/image"
import Link from "next/link"
import { Calendar } from "lucide-react"
import { events } from "@/lib/data"

export default function EventsPage() {
  return (
    <div className="container mx-auto space-y-12 px-4 py-12 sm:px-6 lg:px-8">

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {events.map((event) => (
          <Link key={event.id} href={`/events/${event.id}`} className="group block h-full">
            <div className="flex h-full flex-col transition-all duration-200 group-hover:-translate-y-1 group-hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] group-hover:border-primary group-hover:border">
              <div className="relative aspect-4/3 w-full overflow-hidden  bg-muted">
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-4 group-hover:border-primary group-hover:border-t">
                <h3 className="mb-2 text-xl font-bold leading-tight group-hover:underline">{event.title}</h3>
                <div className="flex items-center text-xs font-bold uppercase tracking-wide text-primary/80">
                  <Calendar className="mr-2 h-3 w-3" />
                  {event.date}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
