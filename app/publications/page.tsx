import { publications } from "@/lib/data";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NotebookPen, Play } from "lucide-react";

export default function PublicationsPage() {
  return (
    <div className="container mx-auto space-y-12 px-4 py-12 sm:px-6 lg:px-8">
      <div className="space-y-12">
        {publications.map((category) => (
          <section key={category.category} className="space-y-6">
            <h2 className="flex items-center gap-4 text-2xl font-bold uppercase tracking-wide text-primary">
              <span className="px-1 text-primary">
                {category.category}
              </span>
              <span className="h-px flex-1 bg-primary/20"></span>
            </h2>

            <ul className="space-y-4 list-disc pl-5 text-justify">
              {category.items.map((pub) => (
                <li
                  key={pub.id}
                  className="pl-1 group relative transition-colors"
                >
                  <div className="text-lg leading-relaxed text-foreground">
                    {/* We render the citation text directly, highlighting the year if needed */}
                    {pub.citation}
                    {pub.blogUrl && (
                      <Button
                        variant="ghost"
                        size="icon-sm"
                        asChild
                        className="ml-1 rounded-full"
                      >
                        {/* @ts-ignore: blogUrl is string */}
                        <Link href={pub.blogUrl}>
                          <NotebookPen className="size-4" />
                        </Link>
                      </Button>
                    )}
                    {/* @ts-ignore: eventUrl is optional */}
                    {pub.eventUrl && (
                      <Button
                        variant="ghost"
                        size="icon-sm"
                        asChild
                        className="ml-1 rounded-full"
                      >
                        {/* @ts-ignore: eventUrl is string */}
                        <Link href={pub.eventUrl}>
                          <Play className="size-4" />
                        </Link>
                      </Button>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
