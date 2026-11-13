"use client";

import Image from "next/image";
import { OrangeTrace } from "@/components/OrangeTrace";
import type { ServiceItem } from "@/lib/content";
import { useI18n } from "@/lib/i18n";

type PracticeAreaProps = {
  item: ServiceItem;
  index: number;
};

export function PracticeArea({ item, index }: PracticeAreaProps) {
  const { locale, c } = useI18n();
  const reverse = index % 2 === 1;

  return (
    <article className="relative grid items-center gap-8 border-t border-line/50 py-12 md:grid-cols-12 md:gap-10 md:py-16">
      <div
        className={`relative md:col-span-5 ${reverse ? "md:order-2" : "md:order-1"}`}
      >
        <div className="relative aspect-[4/3] w-full max-w-md">
          <Image
            src={item.image}
            alt={item.imageAlt[locale]}
            fill
            sizes="(max-width: 768px) 100vw, 38vw"
            className="object-contain"
          />
          <OrangeTrace
            label={item.keyword[locale]}
            path={item.tracePath}
            labelX={item.labelX}
            labelY={item.labelY}
          />
        </div>
      </div>

      <div
        className={`md:col-span-6 ${
          reverse ? "md:order-1 md:col-start-1" : "md:order-2 md:col-start-7"
        }`}
      >
        <p className="mb-3 text-xs tracking-[0.16em] text-line uppercase">
          {String(index + 1).padStart(2, "0")}
        </p>
        <h3 className="display-title mb-5 text-3xl md:text-4xl">
          {item.title[locale]}
        </h3>
        <dl className="space-y-4 text-sm">
          <div>
            <dt className="text-xs tracking-[0.1em] text-ink/45 uppercase">
              {c.services.forWhom}
            </dt>
            <dd className="mt-1 text-ink/80">{item.forWhom[locale]}</dd>
          </div>
          <div>
            <dt className="text-xs tracking-[0.1em] text-ink/45 uppercase">
              {c.services.deliverable}
            </dt>
            <dd className="mt-1 text-ink/80">{item.deliverable[locale]}</dd>
          </div>
          <div>
            <dt className="text-xs tracking-[0.1em] text-ink/45 uppercase">
              {c.services.timeline}
            </dt>
            <dd className="mt-1 text-accent-text">{item.timeline[locale]}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}
