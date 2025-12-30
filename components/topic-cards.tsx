"use cache";

import Link from "next/link";
import { topics, type Topic } from "@/lib/data";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default async function TopicCards({
  className,
  ...props
}: React.ComponentProps<"ul">) {
  return (
    <ul
      className={cn("space-y-5 sm:columns-2 lg:columns-3", className)}
      {...props}
    >
      {topics.map((topic) => (
        <li key={topic.slug} className="break-inside-avoid">
          <TopicCard {...topic} />
        </li>
      ))}
    </ul>
  );
}

function TopicCard({ slug, title, description, icon: Icon, cards }: Topic) {
  return (
    <Link href={`/topics/${slug}`}>
      <Card>
        <CardHeader className="flex">
          <div className="bg-accent rounded-md p-3" role="img">
            <Icon className="size-5" aria-hidden />
          </div>
        </CardHeader>
        <CardContent className="space-y-2">
          <CardTitle className="">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardContent>
        <CardFooter className="space-x-2 font-mono text-muted-foreground text-xs">
          <span className="rounded-full bg-secondary px-3 py-1.5">
            {cards.length} بطاقات
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
}
