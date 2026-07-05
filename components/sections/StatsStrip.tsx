import { homepageStats } from "@/content/projects";

export function StatsStrip() {
  return (
    <div className="container">
      <dl className="grid gap-card rounded-[2rem] bg-primary p-card text-primary-foreground md:grid-cols-3 md:p-hero">
        {homepageStats.map((stat) => (
          <div key={stat.label} className="grid justify-items-center gap-content text-center">
            <dt className="text-1 font-black">{stat.value}</dt>
            <dd className="w-full whitespace-pre-line text-6 font-normal">{stat.label}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
