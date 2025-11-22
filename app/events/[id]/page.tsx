import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, MapPin } from "lucide-react";
import { events } from "@/lib/data";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return events.map((event) => ({
    id: event.id.toString(),
  }));
}

export default async function EventPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: paramId } = await params;
  const id = Number.parseInt(paramId);
  const event = events.find((e) => e.id === id);

  if (!event) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <Button
        asChild
        variant="ghost"
        className="mb-8 rounded-none pl-0 hover:bg-transparent hover:underline"
      >
        <Link
          href="/events"
          className="flex items-center text-muted-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Events
        </Link>
      </Button>

      <article className="mx-auto max-w-4xl space-y-8">
        <div className="relative aspect-video w-full overflow-hidden border-2 border-primary bg-muted">
          <Image
            src={event.image || "/placeholder.svg"}
            alt={event.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="mb-4 text-3xl font-bold uppercase md:text-4xl">
              {event.title}
            </h1>
            <div className="flex flex-wrap gap-6 text-sm font-bold uppercase tracking-wide text-muted-foreground">
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                {event.date}
              </div>
              <div className="flex items-center">
                <MapPin className="mr-2 h-4 w-4" />
                Main Conference Hall
              </div>
            </div>
          </div>

          <div
            className="prose prose-gray max-w-none border-t-2 border-primary pt-8 text-lg leading-relaxed [&>h3]:text-xl [&>h3]:font-bold [&>h3]:uppercase [&>h3]:tracking-wide [&>h3]:text-primary [&>h3]:mt-8 [&>h3]:mb-4 [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:space-y-2"
            dangerouslySetInnerHTML={{
              __html: event.content || event.description,
            }}
          />
        </div>
      </article>
    </div>
  );
}
