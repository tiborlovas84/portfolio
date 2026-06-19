"use client";

import { useId, useState, type ReactNode } from "react";

import { cn } from "@/lib/utils";

export type AccordionItem = {
  title: string;
  content: ReactNode;
  eyebrow?: string;
};

export function Accordion({
  items,
  defaultOpenIndex = 0,
  showIndex = true,
  className,
}: {
  items: AccordionItem[];
  defaultOpenIndex?: number;
  showIndex?: boolean;
  className?: string;
}) {
  const accordionId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(
    defaultOpenIndex >= 0 && defaultOpenIndex < items.length ? defaultOpenIndex : null,
  );

  return (
    <div className={cn("grid gap-tight", className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `${accordionId}-panel-${index}`;
        const triggerId = `${accordionId}-trigger-${index}`;

        return (
          <div key={item.title} className="rounded-[2rem] bg-surface-soft">
            <button
              id={triggerId}
              type="button"
              aria-controls={panelId}
              aria-expanded={isOpen}
              className="flex w-full cursor-pointer items-center justify-between gap-content p-content text-left md:p-card"
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span
                className={cn(
                  "grid items-center gap-tight",
                  showIndex && "md:grid-cols-[8rem_minmax(0,1fr)]",
                )}
              >
                {showIndex ? (
                  <span className="editorial-kicker">
                    {item.eyebrow ?? String(index + 1).padStart(2, "0")}
                  </span>
                ) : null}
                <span className="text-5 font-semibold leading-tight">{item.title}</span>
              </span>
              <span
                aria-hidden="true"
                className={cn(
                  "relative grid size-10 shrink-0 place-items-center text-4 font-semibold leading-none transition-transform duration-200 ease-out",
                  isOpen && "rotate-90",
                )}
              >
                <span
                  className={cn(
                    "absolute h-[0.1em] w-[0.65em] rounded-pill bg-current opacity-100 transition-opacity duration-200 ease-out",
                    isOpen && "opacity-0",
                  )}
                />
                <span className="absolute h-[0.1em] w-[0.65em] rotate-90 rounded-pill bg-current" />
              </span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              aria-hidden={!isOpen}
              className={cn(
                "grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="min-h-0">
                <div
                  className={cn(
                    "px-content pb-content opacity-0 transition-opacity duration-300 ease-out md:px-card md:pb-card",
                    isOpen && "opacity-100",
                  )}
                >
                  <div className="grid gap-tight md:grid-cols-[8rem_minmax(0,1fr)]">
                    {showIndex ? <div aria-hidden="true" /> : null}
                    <div
                      className={cn(
                        "max-w-3xl space-y-5 text-7 font-semibold text-muted-foreground",
                        !showIndex && "md:col-span-2",
                      )}
                    >
                      {item.content}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
