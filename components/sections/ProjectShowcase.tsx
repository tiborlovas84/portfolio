import { ProjectCard } from "@/components/sections/ProjectCard";
import { cn } from "@/lib/utils";
import type { ProjectSummary } from "@/content/projects";

const layoutClass: Record<ProjectSummary["layout"], string> = {
  wide: "lg:col-span-2",
  tall: "lg:row-span-2",
  standard: "",
};

export function ProjectShowcase({ projects }: { projects: ProjectSummary[] }) {
  return (
    <div className="grid auto-rows-[minmax(28rem,auto)] gap-5 lg:grid-cols-3">
      {projects.map((project) => (
        <div key={project.slug} className={cn(layoutClass[project.layout])}>
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
}
