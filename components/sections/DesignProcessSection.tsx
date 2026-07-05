import { designProcessSteps } from "@/content/projects";

export function DesignProcessSection() {
  return (
    <div className="mb-hero rounded-[1.5rem] bg-background p-card shadow-editorial md:p-hero">
      <div className="mx-auto max-w-4xl text-center">
        <p className="editorial-kicker text-primary">Design process</p>
        <p className="mt-content text-6 font-medium text-muted-foreground">
          I start by understanding the problem, then use AI and prototypes to explore options before shaping work into
          buildable product decisions.
        </p>
      </div>

      <div className="mt-hero grid gap-content lg:grid-cols-5 lg:gap-0">
        {designProcessSteps.map((step, index) => (
          <article
            key={step.title}
            className="relative grid gap-compact rounded-[1.25rem] border border-foreground/10 bg-surface-soft p-content lg:rounded-none lg:border-x-0 lg:border-b-0 lg:border-t-2 lg:bg-transparent lg:px-content lg:pb-0 lg:pt-card"
          >
            <div
              className="absolute -top-[0.6875rem] left-content hidden size-5 rounded-pill border-4 border-background bg-primary lg:block"
              aria-hidden="true"
            />
            {index < designProcessSteps.length - 1 ? (
              <div
                className="absolute left-[calc(1.5rem+1.25rem)] right-0 top-[-0.125rem] hidden border-t-2 border-foreground/10 lg:block"
                aria-hidden="true"
              />
            ) : null}
            <div className="flex items-start justify-between gap-content lg:block">
              <p className="font-mono text-8 font-semibold text-primary">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="max-w-48 text-6 font-bold lg:mt-card">{step.title}</h3>
            </div>
            <p className="text-8 text-muted-foreground">{step.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
