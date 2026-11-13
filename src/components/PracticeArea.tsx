"use client";

import Image from "next/image";
import { OrangeTrace } from "@/components/OrangeTrace";
import type { PracticeItem } from "@/lib/content";
import { useI18n } from "@/lib/i18n";

type PracticeAreaProps = {
  item: PracticeItem;
  index: number;
};

export function PracticeArea({ item, index }: PracticeAreaProps) {
  const { locale } = useI18n();
  const reverse = index % 2 === 1;

  return (
    <article className="relative grid items-center gap-8 border-t border-line/50 py-14 md:grid-cols-12 md:gap-10 md:py-20">
      <div
        className={`relative md:col-span-6 ${reverse ? "md:order-2" : "md:order-1"}`}
      >
        <div className="relative aspect-[4/3] w-full max-w-lg">
          <Image
            src={item.image}
            alt={item.imageAlt[locale]}
            fill
            sizes="(max-width: 768px) 100vw, 42vw"
            className="object-contain"
          />
          <OrangeTrace
            label={item.keyword[locale]}
            path="M 48 200 C 100 110, 170 75, 230 120 C 275 155, 250 220, 190 250"
            labelX={268}
            labelY={108}
          />
        </div>
      </div>

      <div
        className={`md:col-span-5 ${reverse ? "md:order-1 md:col-start-2" : "md:order-2 md:col-start-8"}`}
      >
        <p className="mb-3 text-xs tracking-[0.16em] text-line uppercase">
          {String(index + 1).padStart(2, "0")}
        </p>
        <h3 className="display-title mb-4 text-3xl md:text-4xl">
          {item.title[locale]}
        </h3>
        <p className="mb-5 max-w-md text-ink/75">{item.body[locale]}</p>
        <p className="text-sm tracking-[-0.02em]">
          <span className="inline-block h-1.5 w-1.5 translate-y-[-1px] rounded-full bg-accent" />{" "}
          <span className="keyword-lit">{item.keyword[locale]}</span>
        </p>
      </div>
    </article>
  );
}
