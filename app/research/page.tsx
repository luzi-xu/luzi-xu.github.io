import Image from "next/image"
import { FileText } from "lucide-react"
import { researchTopics } from "@/lib/data"
import { Badge } from "@/components/ui/badge"

export default function ResearchPage() {
  return (
    <div className="container mx-auto space-y-12 px-4 py-12 sm:px-6 lg:px-8">

      <div className="space-y-8">
        {researchTopics.map((topic) => (
          <div
            key={topic.id}
            className="flex flex-col gap-8 p-6 transition-colors hover:bg-accent/10 md:flex-row"
          >
            {/* Left: Featured Image */}
            <div className="relative aspect-video w-full shrink-0 overflow-hidden border border-primary bg-muted md:w-1/3 lg:w-[400px]">
              <Image src={topic.image || "/placeholder.svg"} alt={topic.title} fill className="object-cover" />
            </div>

            {/* Right: Details */}
            <div className="flex flex-col space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-primary">{topic.title}</h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-justify">{topic.description}</p>
              </div>

              <div className="mt-auto space-y-3">
                <h3 className="font-bold uppercase tracking-wide text-primary/80">Example Papers</h3>
                <div className="flex flex-wrap gap-2">
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground text-base text-justify">
                    {topic.papers.map((paper, index) => (
                      <li key={index} dangerouslySetInnerHTML={{ __html: paper }} className="[&>b]:text-primary" />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
