import { Accordion } from "@/components/ui/accordion";
import { processSteps } from "@/content/projects";

export function ProcessSection() {
  const items = processSteps.map((step) => ({
    title: step.title,
    content: Array.isArray(step.description) ? (
      step.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)
    ) : (
      <p>{step.description}</p>
    ),
  }));

  return (
    <Accordion items={items} />
  );
}
