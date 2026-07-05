import type { Metadata } from "next";
import Image from "next/image";
import { CaseStudyIterationTabs } from "@/components/sections/CaseStudyIterationTabs";
import { PageBackgroundTransition } from "@/components/sections/PageBackgroundTransition";
import { ShimmerDotsBackground } from "../../../components/shimmer-dots-background";
import {
  AreaCard,
  CardGrid,
  Checklist,
  Pill,
  Section,
  publicPath,
} from "./components";
import {
  areas,
  complexity,
  constraints,
  heroImage,
  heroTags,
  impactHighlights,
  judgmentQuestions,
  measurementSignals,
  outcomes,
  overviewCopy,
  problems,
  projectMeta,
  role,
  system,
  systemPatterns,
  systemProof,
} from "./content";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Internal Platform Redesign - Tibor Lovas",
  description:
    "An NDA-safe case study about redesigning a complex internal platform into clearer workflows and reusable product patterns.",
};

export default function InternalPlatformCaseStudy() {
  return (
    <PageBackgroundTransition>
      <div className={styles.page}>
        <section className={styles.hero} id="top" data-page-hero>
          <ShimmerDotsBackground className={styles.shimmerCanvas} />
          <div className={styles.container}>
            <div className={styles.pills}>
              {heroTags.map((tag) => (
                <Pill key={tag}>{tag}</Pill>
              ))}
            </div>
            <h1>Redesigning a legacy internal platform into clearer workflows and reusable product patterns.</h1>
            <p className={styles.heroSubtitle}>
              A year-long redesign of a complex internal system used to manage account, billing, reporting,
              promotions, permissions, and core operational workflows.
            </p>
            <div className={styles.heroGrid}>
              <div className={styles.impactCard}>
                <span className={styles.eyebrow}>Impact at a glance</span>
                <ul>
                  {impactHighlights.map(([title, body]) => (
                    <li key={title}>
                      <span aria-hidden="true">✓</span>
                      <div>
                        <strong>{title}</strong>
                        <p>{body}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.metaCard}>
                {projectMeta.map(([title, body]) => (
                  <div key={title}>
                    <span>{title}</span>
                    <strong>{body}</strong>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.heroImageWrap}>
              <Image
                alt={heroImage.alt}
                aria-hidden="true"
                className={styles.heroImage}
                height={heroImage.height}
                priority
                src={publicPath(heroImage.path)}
                unoptimized
                width={heroImage.width}
              />
            </div>
          </div>
        </section>

        <CaseStudyIterationTabs currentHref="/case-study/internal-platform" />

        <Section id="overview" eyebrow="Overview" title="This was not just a UI refresh.">
          <div className={styles.prose}>
            {overviewCopy.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Section>

        <Section
          id="problem"
          eyebrow="The problem"
          title="The platform had grown around business rules, not around how people worked."
          tone="soft"
        >
          <p className={styles.lede}>
            Internal users could get work done, but too much depended on training, memory, and knowing how the system
            had evolved over time.
          </p>
          <CardGrid items={problems} />
          <div className={`${styles.problemSubsection} ${styles.complexitySubsection}`} id="complexity">
            <div className={styles.eyebrow}>Complexity</div>
            <h3>The hidden complexity behind simple tasks.</h3>
            <p className={styles.lede}>
              Many tasks looked simple from the outside, but the right action depended on profile state, permissions,
              billing conditions, history, and downstream impact.
            </p>
            <CardGrid items={complexity} visuals />
          </div>
          <div className={styles.problemSubsection} id="constraints">
            <div className={styles.eyebrow}>Constraints</div>
            <h3>What the redesign had to respect.</h3>
            <CardGrid items={constraints} />
          </div>
        </Section>

        <Section id="role" eyebrow="My role" title="I worked across flows, screens, systems, and handoff.">
          <p className={styles.lede}>
            My role was to turn ambiguous legacy logic into workflows, patterns, and implementation-ready decisions that
            product, design, and engineering could align around.
          </p>
          <Checklist items={role} />
        </Section>

        <Section
          id="solution"
          eyebrow="Solution"
          title="I redesigned the areas where complexity created the most risk."
          tone="soft"
        >
          <p className={styles.lede}>
            Each area followed the same logic: understand the legacy rules, map the edge cases, simplify the decisions,
            and turn repeated problems into reusable product patterns.
          </p>
          <div className={styles.areaGrid}>
            {areas.map((area, index) => (
              <AreaCard area={area} index={index} key={area.title} />
            ))}
          </div>
        </Section>

        <Section id="design-system" eyebrow="Design system" title="The design system came from real product problems.">
          <div className={styles.systemIntro}>
            <div className={styles.prose}>
              <p>
                The system was not created as a separate UI exercise. It came from repeated workflow problems across
                forms, tables, dialogs, filters, history, permissions, and validation states.
              </p>
              <p>
                A major part of the project was helping shape a custom Radix-based system and aligning patterns with
                engineering implementation.
              </p>
            </div>
            <div className={styles.patternPanel}>
              <h3>Reusable patterns</h3>
              <div className={styles.pills}>
                {system.map((item) => (
                  <Pill key={item}>{item}</Pill>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.ruleGrid}>
            {systemPatterns.map(([title, body]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
          <div className={styles.rulesPanel}>
            <div className={styles.rulesHeading}>
              <span>From repeated edge cases to reusable rules</span>
              <h3>
                Instead of treating confirmations, permission states, validation, and table behavior as separate UI
                decisions, we turned them into shared product rules that could be reused across modules.
              </h3>
            </div>
            <div className={styles.proofCard}>
              <div className={styles.proofHeader}>
                <span>Before</span>
                <span>After</span>
              </div>
              {systemProof.map(([before, after]) => (
                <div className={styles.proofRow} key={before}>
                  <span>{before}</span>
                  <strong>{after}</strong>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section
          id="outcomes"
          eyebrow="Outcomes"
          title="A complex internal workflow became easier to understand, safer to operate, and more consistent across edge cases."
          tone="soft"
        >
          <CardGrid items={outcomes} />
        </Section>

        <Section
          id="measurement"
          eyebrow="How we measured progress"
          title="Success was visible through clearer workflows, reusable patterns, and fewer ambiguous implementation decisions."
        >
          <CardGrid items={measurementSignals} />
        </Section>

        <Section
          id="judgment"
          eyebrow="Design judgment"
          title="The hardest part was deciding what to simplify and what to preserve."
          tone="soft"
        >
          <Checklist items={judgmentQuestions} />
        </Section>

        <Section id="takeaway" eyebrow="Takeaway" title="Turning complex systems into clearer decisions teams can build from.">
          <p className={styles.takeaway}>
            This project reflects the product design work I do best: turning complex systems into clearer workflows,
            reusable patterns, and decisions teams can build from.
          </p>
        </Section>

        <section className={styles.note}>
          <div className={styles.container}>
            <span className={styles.eyebrow}>Case study note</span>
            <h2>NDA-safe, but still specific.</h2>
            <p>
              Details have been generalized for confidentiality. Visuals are recreated and sanitized fragments based on
              the work, showing workflow complexity, interaction patterns, and design decisions without exposing
              protected product content.
            </p>
          </div>
        </section>
      </div>
    </PageBackgroundTransition>
  );
}
