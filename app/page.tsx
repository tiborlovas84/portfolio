import { AboutImpactSection } from "@/components/sections/AboutImpactSection";
import { ClientStrip } from "@/components/sections/ClientStrip";
import { CTASection } from "@/components/sections/CTASection";
import { EditorialHero } from "@/components/sections/EditorialHero";
import { FocusList } from "@/components/sections/FocusList";
import { PageBackgroundTransition } from "@/components/sections/PageBackgroundTransition";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ProjectShowcase } from "@/components/sections/ProjectShowcase";
import { Section } from "@/components/sections/Section";
import { SuccessStoriesSection } from "@/components/sections/SuccessStoriesSection";
import { featuredProjects } from "@/content/projects";

export default function HomePage() {
  return (
    <PageBackgroundTransition>
      <div data-page-hero>
        <EditorialHero />
      </div>
      <section className="py-section">
        <div className="container">
          <div className="grid gap-hero md:grid-cols-[0.48fr_0.52fr] md:items-center">
            <h2 className="max-w-3xl text-4 font-bold md:pl-hero">
              I help teams perform, from small startups to large Fortune 500 companies.
            </h2>
            <ClientStrip />
          </div>
        </div>
      </section>
      <section id="case-studies" className="py-section">
        <div className="container">
          <ProjectShowcase projects={featuredProjects} />
        </div>
      </section>
      <AboutImpactSection />
      <SuccessStoriesSection />
      <Section
        id="capabilities"
      >
        <FocusList />
      </Section>
      <Section id="process" title="Process & Collaboration">
        <ProcessSection />
      </Section>
      <CTASection />
    </PageBackgroundTransition>
  );
}
