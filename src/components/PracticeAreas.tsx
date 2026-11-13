"use client";

import { PracticeArea } from "@/components/PracticeArea";
import { services } from "@/lib/content";
import { useI18n } from "@/lib/i18n";

export function PracticeAreas() {
  const { c } = useI18n();

  return (
    <section id="servicios" className="section-pad border-b border-line/50">
      <div className="container-narrow">
        <h2 className="display-title mb-2 text-4xl md:text-5xl">{c.services.title}</h2>
        <div>
          {services.map((item, index) => (
            <PracticeArea key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
