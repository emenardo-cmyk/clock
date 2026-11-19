"use client";

import { useEffect, useRef } from "react";
import { useI18n } from "@/lib/i18n";

export function TaglineReveal() {
  const { c } = useI18n();
  const ref = useRef<HTMLParagraphElement>(null);
  const lines = [c.tagline.line1, c.tagline.line2];

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const spans = Array.from(root.querySelectorAll<HTMLElement>("[data-word]"));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      spans.forEach((span) => span.classList.add("is-on"));
      return;
    }

    const observers = spans.map((span, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry?.isIntersecting) {
            window.setTimeout(() => {
              span.classList.add("is-on");
            }, Math.min(index * 70, 400));
            observer.disconnect();
          }
        },
        { threshold: 0.6, rootMargin: "0px 0px -20% 0px" },
      );
      observer.observe(span);
      return observer;
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, [c.tagline.line1, c.tagline.line2]);

  return (
    <section className="section-y border-y border-line/70 bg-paper-deep/40">
      <div className="container-page">
        <p
          ref={ref}
          className="heading-2 mx-auto max-w-[680px] text-center"
          aria-label={`${c.tagline.line1} ${c.tagline.line2}`}
        >
          {lines.map((line) => (
            <span key={line} className="block">
              {line.split(" ").map((word, wordIndex, arr) => (
                <span key={`${line}-${wordIndex}`}>
                  <span data-word className="tagline-word">
                    {word}
                  </span>
                  {wordIndex < arr.length - 1 ? " " : null}
                </span>
              ))}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
