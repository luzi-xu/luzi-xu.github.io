import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { blogs } from "@/lib/data";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return blogs.map((post) => ({
    id: post.id.toString(),
  }));
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: paramId } = await params;
  const id = Number.parseInt(paramId);
  const post = blogs.find((post) => post.id === id);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <Button
        asChild
        variant="ghost"
        className="mb-8 rounded-none pl-0"
      >
        <Link href="/blogs" className="flex items-center text-muted-foreground">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blogs
        </Link>
      </Button>

      <article className="mx-auto max-w-4xl space-y-8">
        <div className="relative aspect-video w-full overflow-hidden border-2 border-primary bg-muted">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="mb-4 text-3xl font-bold uppercase md:text-4xl">
              {post.title}
            </h1>
            <div className="flex flex-wrap gap-6 text-sm font-bold uppercase tracking-wide text-muted-foreground">
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                {post.date}
              </div>
            </div>
          </div>

          <div
            className="prose prose-gray max-w-none border-t-2 border-primary pt-8 text-lg leading-relaxed [&>h3]:text-xl [&>h3]:font-bold [&>h3]:uppercase [&>h3]:tracking-wide [&>h3]:text-primary [&>h3]:mt-8 [&>h3]:mb-4 [&>ul]:list-disc  [&>ul]:pl-5 [&>ul]:pb-6 [&>ul]:space-y-2 [&>p]:text-justify [&>p]:mb-6 [&>a]:text-primary [&>a]:underline [&>a]:underline-offset-2"
            dangerouslySetInnerHTML={{
              __html: post.content || post.description,
            }}
          />
        </div>
      </article>
    </div>
  );
}
