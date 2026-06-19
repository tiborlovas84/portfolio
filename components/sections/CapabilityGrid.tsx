import { capabilities } from "@/content/projects";

export function CapabilityGrid() {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      {capabilities.map((capability, index) => (
        <article key={capability.title} className="rounded-[2rem] bg-background p-8 shadow-editorial md:p-10">
          <p className="editorial-kicker mb-8">{String(index + 1).padStart(2, "0")}</p>
          <h3 className="text-4 font-medium">{capability.title}</h3>
          {"description" in capability && capability.description ? (
            <p className="mt-5 text-7 text-muted-foreground">
              {capability.description}
            </p>
          ) : null}
        </article>
      ))}
    </div>
  );
}
