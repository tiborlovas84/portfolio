"use client";

import { useId, useState, type ReactNode } from "react";

import { cn } from "@/lib/utils";

export type AccordionItem = {
  title: string;
  content: ReactNode;
  eyebrow?: ReactNode;
  summary?: ReactNode;
  showTitle?: boolean;
};

type AccordionProps = {
  items: AccordionItem[];
  defaultOpenIndex?: number;
  showIndex?: boolean;
  className?: string;
  itemClassName?: string;
};

export function GenomeAccordion({
  items,
  defaultOpenIndex = 0,
  showIndex = true,
  className,
  itemClassName,
}: AccordionProps) {
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
          <div key={item.title} className={cn("rounded-[2rem] bg-surface-soft", itemClassName)}>
            <button
              id={triggerId}
              type="button"
              aria-controls={panelId}
              aria-expanded={isOpen}
              className={cn(
                "flex w-full cursor-pointer items-center justify-between gap-content p-content text-left md:p-card",
                item.summary && "grid grid-cols-[5rem_minmax(0,1fr)_3rem] gap-content",
              )}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span
                className={cn(
                  "grid min-w-0 items-center gap-tight",
                  showIndex && !item.summary && "md:grid-cols-[3rem_minmax(0,1fr)]",
                )}
              >
                {showIndex ? (
                  <span className="editorial-kicker grid gap-1">
                    {item.eyebrow ?? String(index + 1).padStart(2, "0")}
                  </span>
                ) : null}
                {item.showTitle === false ? null : (
                  <span className="text-5 font-semibold leading-tight">{item.title}</span>
                )}
              </span>
              {item.summary ? <span className="min-w-0 flex-1">{item.summary}</span> : null}
              <span className="grid w-12 shrink-0 place-items-center justify-self-center" aria-hidden="true">
                <span
                  className={cn(
                    "relative grid size-7 place-items-center text-6 font-semibold leading-none transition-transform duration-200 ease-out",
                    isOpen && "rotate-90",
                  )}
                >
                  <span
                    className={cn(
                      "absolute h-[0.1em] w-[0.55em] rounded-pill bg-current opacity-100 transition-opacity duration-200 ease-out",
                      isOpen && "opacity-0",
                    )}
                  />
                  <span className="absolute h-[0.1em] w-[0.55em] rotate-90 rounded-pill bg-current" />
                </span>
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
                  <div
                    className={cn(
                      "grid gap-tight md:grid-cols-[3rem_minmax(0,1fr)]",
                      item.summary && "md:grid-cols-[calc(5rem+theme(spacing.content))_minmax(0,1fr)] md:gap-0",
                    )}
                  >
                    {showIndex ? <div aria-hidden="true" /> : null}
                    <div
                      className={cn(
                        "max-w-3xl space-y-5 text-7 font-normal text-muted-foreground",
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
