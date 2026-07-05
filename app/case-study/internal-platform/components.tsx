import Image from "next/image";
import { publicPath } from "@/lib/public-path";
import type { Pair, SolutionArea, SolutionVisual } from "./content";
import { complexityImagePaths } from "./content";
import styles from "./page.module.css";

export function Pill({ children }: { children: React.ReactNode }) {
  return <span className={styles.pill}>{children}</span>;
}

export function Section({
  children,
  eyebrow,
  id,
  title,
  tone = "plain",
}: {
  children: React.ReactNode;
  eyebrow: string;
  id: string;
  title: string;
  tone?: "plain" | "soft";
}) {
  return (
    <section className={`${styles.section} ${tone === "soft" ? styles.sectionSoft : ""}`} id={id}>
      <div className={styles.container}>
        <div className={styles.sectionHeading}>
          <div className={styles.eyebrow}>{eyebrow}</div>
          <h2>{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function ComplexityVisual({ index }: { index: number }) {
  return (
    <Image
      alt=""
      aria-hidden="true"
      className={styles.complexityImage}
      height="1086"
      loading="lazy"
      src={publicPath(complexityImagePaths[index])}
      unoptimized
      width="1448"
    />
  );
}

export function CardGrid({ items, visuals = false }: { items: Pair[]; visuals?: boolean }) {
  return (
    <div className={styles.cardGrid}>
      {items.map(([title, body], index) => (
        <article className={`${styles.textCard} ${visuals ? styles.complexityCard : ""}`} key={title}>
          <span className={styles.cardNumber}>{String(index + 1).padStart(2, "0")}</span>
          <h3>{title}</h3>
          <p>{body}</p>
          {visuals ? <ComplexityVisual index={index} /> : null}
        </article>
      ))}
    </div>
  );
}

export function Checklist({ items }: { items: readonly string[] }) {
  return (
    <div className={styles.checklist}>
      {items.map((item) => (
        <div className={styles.checkItem} key={item}>
          <span />
          <p>{item}</p>
        </div>
      ))}
    </div>
  );
}

function AccountVisual() {
  return (
    <div className={styles.abstractPanel}>
      <div className={styles.visualHeader}>
        <span>Profile context</span>
        <b>Active account</b>
      </div>
      <div className={styles.accountVisual}>
        <div className={styles.profileCard}>
          <i>AM</i>
          <strong>Profile state</strong>
          <small>Identity, billing, and operational history</small>
        </div>
        <div className={styles.actionStack}>
          {["Update details", "Review cost", "Payment action", "View history"].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ReportVisual() {
  return (
    <div className={styles.abstractPanel}>
      <div className={styles.visualHeader}>
        <span>Report generator</span>
        <b>Guided flow</b>
      </div>
      <div className={styles.flowVisual}>
        {["Context", "Report type", "Criteria", "Review"].map((item, index) => (
          <div key={item}>
            <i>{String(index + 1).padStart(2, "0")}</i>
            <strong>{item}</strong>
            <span />
          </div>
        ))}
      </div>
    </div>
  );
}

function PromotionVisual() {
  return (
    <div className={styles.abstractPanel}>
      <div className={styles.visualHeader}>
        <span>Promotion builder</span>
        <b>Rule review</b>
      </div>
      <div className={styles.rulesVisual}>
        {["Availability", "Eligibility", "Discount logic"].map((title, index) => (
          <div key={title}>
            <strong>{title}</strong>
            <span>{index === 0 ? "Channel + segment" : index === 1 ? "Audience + status" : "Value + renewal"}</span>
            <em>Rule group {index + 1}</em>
          </div>
        ))}
      </div>
    </div>
  );
}

function PermissionVisual() {
  return (
    <div className={styles.abstractPanel}>
      <div className={styles.visualHeader}>
        <span>Roles and permissions</span>
        <b>Access matrix</b>
      </div>
      <div className={styles.matrix}>
        {["Module", "View", "Edit", "Approve", "Delete", "Accounts", "Reports", "Promotions", "Billing"].map(
          (item, index) => (
            <span className={index > 4 ? styles.matrixLabel : ""} key={`${item}-${index}`}>
              {item}
            </span>
          ),
        )}
        {Array.from({ length: 16 }, (_, index) => (
          <i className={index % 4 === 3 ? styles.matrixOff : ""} key={index} />
        ))}
      </div>
    </div>
  );
}

function AreaVisual({ visual }: { visual: SolutionVisual }) {
  if (visual === "account") return <AccountVisual />;
  if (visual === "report") return <ReportVisual />;
  if (visual === "promotion") return <PromotionVisual />;
  return <PermissionVisual />;
}

export function AreaCard({ area, index }: { area: SolutionArea; index: number }) {
  return (
    <article className={styles.areaCard}>
      <div className={styles.areaIntro}>
        <span className={styles.areaNumber}>{String(index + 1).padStart(2, "0")}</span>
        <h3>{area.title}</h3>
        <p>{area.subtitle}</p>
        <div className={styles.pills}>{area.tags.map((tag) => <Pill key={tag}>{tag}</Pill>)}</div>
      </div>
      <div className={styles.areaDecisions}>
        {[
          ["Before", area.before],
          ["Design decision", area.decision],
          ["Why it mattered", area.mattered],
        ].map(([title, body]) => (
          <div key={title}>
            <strong>{title}</strong>
            <p>{body}</p>
          </div>
        ))}
      </div>
      <AreaVisual visual={area.visual} />
    </article>
  );
}
