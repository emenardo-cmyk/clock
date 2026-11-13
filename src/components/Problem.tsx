"use client";

import { useI18n } from "@/lib/i18n";

export function Problem() {
  const { c } = useI18n();

  return (
    <section id="problema" className="section-pad border-b border-line/50">
      <div className="container-narrow">
        <h2 className="display-title mb-10 max-w-xl text-3xl md:text-5xl">
          {c.problem.title}
        </h2>
        <ol className="grid gap-8 md:grid-cols-3 md:gap-10">
          {c.problem.items.map((item, index) => (
            <li key={item.title} className="border-t border-line/70 pt-5">
              <p className="mb-3 text-xs tracking-[0.14em] text-line uppercase">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mb-2 text-xl tracking-[-0.03em]">{item.title}</h3>
              <p className="text-sm text-ink/70">{item.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
