import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { ProjectSummary } from "@/content/projects";

export function ProjectCard({ project }: { project: ProjectSummary }) {
  return (
    <Card className="group flex h-full overflow-hidden rounded-[2rem] transition-colors hover:bg-editorial-mist">
      <CardContent className="flex h-full w-full flex-col p-0">
        <div className="flex min-h-72 flex-1 flex-col justify-between bg-editorial-mist p-8 md:p-10">
          <div className="flex items-start justify-between gap-6">
            <p className="editorial-kicker max-w-[14rem]">{project.eyebrow}</p>
            <ArrowUpRight
              className="mt-1 size-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              aria-hidden="true"
            />
          </div>
          <div className="mt-16 grid gap-3 text-8 text-muted-foreground sm:grid-cols-3">
            <span>Product</span>
            <span>System</span>
            <span>Delivery</span>
          </div>
        </div>
        <div className="p-8 md:p-10">
          <div className="mb-8 flex items-start justify-between gap-6">
          <p className="editorial-kicker max-w-[14rem]">{project.impact}</p>
          <ArrowUpRight
            className="mt-1 size-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 md:hidden"
            aria-hidden="true"
          />
          </div>
        <h3 className="max-w-xl text-4 font-semibold">{project.title}</h3>
        <p className="mt-5 max-w-xl text-6">{project.signal}</p>
        {project.summary ? (
          <p className="mt-6 max-w-2xl text-7 text-muted-foreground">
            {project.summary}
          </p>
        ) : null}
        {project.capabilities.length > 0 ? (
          <div className="mt-8 flex flex-wrap gap-2">
            {project.capabilities.map((capability) => (
              <Badge key={capability}>{capability}</Badge>
            ))}
          </div>
        ) : null}
        <div className="mt-12 pt-6">
          <p className="text-8 text-muted-foreground">{project.cta}</p>
        </div>
        </div>
        <Link
          href={`/case-study/${project.slug}`}
          className="absolute inset-0"
          aria-label={`Read ${project.title}`}
        />
      </CardContent>
    </Card>
  );
}
