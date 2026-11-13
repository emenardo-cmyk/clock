"use client";

import { PracticeArea } from "@/components/PracticeArea";
import { practices } from "@/lib/content";
import { useI18n } from "@/lib/i18n";

export function PracticeAreas() {
  const { c } = useI18n();

  return (
    <section id="areas" className="section-pad border-b border-line/50">
      <div className="container-narrow">
        <div className="mb-4 max-w-xl md:mb-2">
          <h2 className="display-title mb-4 text-4xl md:text-5xl">{c.areas.title}</h2>
          <p className="text-ink/70">{c.areas.lead}</p>
        </div>
        <div>
          {practices.map((item, index) => (
            <PracticeArea key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
