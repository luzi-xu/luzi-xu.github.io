import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { news, profile, siteConfig } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faResearchgate, faBluesky, faGoogleScholar } from "@fortawesome/free-brands-svg-icons";
import {
  faFileLines,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className="container mx-auto space-y-16 px-4 py-12 sm:px-6 lg:px-8">
      {/* Self Intro Section */}
      <section className="grid gap-12 md:grid-cols-[280px_1fr] lg:gap-16">
        <div className="relative aspect-2/3 w-full overflow-hidden bg-muted md:aspect-auto md:h-[420px]">
          <Image
            src={profile.image || "/placeholder.svg"}
            alt={profile.name}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="flex flex-col justify-center space-y-6">
          <div>
            {/* <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
              {profile.name}
            </h1>
            <p className="mt-2 text-xl text-muted-foreground">
              {profile.title}
            </p>
            <p className="text-lg text-muted-foreground">
              {profile.department}
            </p>
            <p className="text-lg text-muted-foreground">
              {profile.institution}
            </p> */}
          </div>
          <div className="prose prose-gray max-w-none text-lg leading-relaxed text-foreground text-justify">
            {profile.bio.split("\n").map((paragraph, index) => (
              <p key={index} className="mb-4">
                <span dangerouslySetInnerHTML={{ __html: paragraph }} className="[&>a]:text-primary [&>a]:underline [&>a]:underline-offset-2" />
              </p>
            ))}
          </div>
          {/* Replaced buttons with right-aligned social links using icons */}
          <div className="flex flex-wrap justify-end gap-1">
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="h-12 w-12 rounded-full bg-transparent hover:bg-primary hover:text-primary-foreground"
              title="Google Scholar"
            >
              <Link href={siteConfig.social.scholar}>
                <FontAwesomeIcon icon={faGoogleScholar} className="h-6 w-6" />
                <span className="sr-only">Google Scholar</span>
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="h-12 w-12 rounded-full bg-transparent hover:bg-primary hover:text-primary-foreground"
              title="Bluesky"
            >
              <Link href={siteConfig.social.bluesky}>
                <FontAwesomeIcon icon={faBluesky} className="h-6 w-6" />
                <span className="sr-only">Bluesky</span>
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="h-12 w-12 rounded-full bg-transparent hover:bg-primary hover:text-primary-foreground"
              title="X (Twitter)"
            >
              <Link href={siteConfig.social.twitter}>
                <FontAwesomeIcon icon={faXTwitter} className="h-6 w-6" />
                <span className="sr-only">X (Twitter)</span>
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="h-12 w-12 rounded-full bg-transparent hover:bg-primary hover:text-primary-foreground"
              title="ResearchGate"
            >
              <Link href={siteConfig.social.researchgate}>
                <FontAwesomeIcon icon={faResearchgate} className="h-6 w-6" />
                <span className="sr-only">ResearchGate</span>
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="h-12 w-12 rounded-full bg-transparent hover:bg-primary hover:text-primary-foreground"
              title="CV"
            >
              <Link href={siteConfig.social.cv}>
                <FontAwesomeIcon icon={faFileLines} className="h-6 w-6" />
                <span className="sr-only">CV</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section>
        <h2 className="mb-8 border-b-2 border-primary pb-2 text-3xl font-bold uppercase tracking-tight">
          Latest News
        </h2>
        <div className="flex flex-col gap-8">
          {news.map((item) => (
            <div
              key={item.id}
              className="group flex h-full flex-col border-30 border-secondary bg-card transition-colors hover:bg-accent/20"
            >
              <div className="grid gap-6 md:grid-cols-[300px_1fr] p-6">
                {/* Left: Image */}
                <div className="relative h-[500px] w-full overflow-hidden border border-border bg-muted md:h-full min-h-80">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Right: Content */}
                <div className="flex flex-col justify-between">
                  <div>
                    <div className="mb-2 flex justify-end">
                      <span className="px-3 py-1 text-xs font-bold text-primary">
                        {item.date}
                      </span>
                    </div>
                    {/* <h3 className="mb-3 text-2xl font-bold leading-tight">
                      {item.title}
                    </h3> */}
                      {item.description.split("\n").map((paragraph, index) => (
                        <p key={index} className="mb-4 text-base text-muted-foreground text-justify">
                          <span dangerouslySetInnerHTML={{ __html: paragraph }} className="[&>a]:text-primary [&>a]:underline [&>a]:underline-offset-2" />
                        </p>
                      ))}
                  </div>

                  <div className="flex gap-4">
                    <Button
                      asChild
                      variant="outline"
                      className="h-10 rounded-none border-2 border-primary bg-transparent px-4 text-sm font-medium hover:bg-primary hover:text-primary-foreground"
                    >
                      <Link href={item.paperLink}>
                        <FileText className="mr-2 h-4 w-4" />
                        {item.buttonText?.paper || siteConfig.newsButtonTexts.paper}
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="h-10 rounded-none border-2 border-primary bg-transparent px-4 text-sm font-medium hover:bg-primary hover:text-primary-foreground"
                    >
                      <Link href={item.blogLink}>
                        <ArrowRight className="mr-2 h-4 w-4" />
                        {item.buttonText?.blog || siteConfig.newsButtonTexts.blog}
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
