"use client";

import { useEffect, useRef } from "react";

type ConstructionLinesProps = {
  className?: string;
  variant?: "hero" | "section";
};

export function ConstructionLines({
  className = "",
  variant = "hero",
}: ConstructionLinesProps) {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const enable = () => {
      node.dataset.active = "true";
    };

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      enable();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          enable();
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <svg
      ref={ref}
      className={`construction-lines pointer-events-none absolute inset-0 h-full w-full ${className}`}
      viewBox="0 0 1200 800"
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <line
        className="guide-stroke"
        x1="40"
        y1="60"
        x2="1160"
        y2="60"
        stroke="#B9B4AC"
        strokeWidth="1"
        pathLength="1"
        style={{ animationDelay: "0ms" }}
      />
      <line
        className="guide-stroke"
        x1="40"
        y1="740"
        x2="1160"
        y2="740"
        stroke="#B9B4AC"
        strokeWidth="1"
        pathLength="1"
        style={{ animationDelay: "120ms" }}
      />
      <line
        className="guide-stroke"
        x1="80"
        y1="20"
        x2="80"
        y2="780"
        stroke="#B9B4AC"
        strokeWidth="1"
        pathLength="1"
        style={{ animationDelay: "80ms" }}
      />
      <line
        className="guide-stroke"
        x1="1120"
        y1="20"
        x2="1120"
        y2="780"
        stroke="#B9B4AC"
        strokeWidth="1"
        pathLength="1"
        style={{ animationDelay: "160ms" }}
      />
      {variant === "hero" ? (
        <>
          <line
            className="guide-stroke"
            x1="80"
            y1="60"
            x2="620"
            y2="420"
            stroke="#B9B4AC"
            strokeWidth="1"
            strokeOpacity="0.55"
            pathLength="1"
            style={{ animationDelay: "220ms" }}
          />
          <line
            className="guide-stroke"
            x1="620"
            y1="120"
            x2="1120"
            y2="520"
            stroke="#B9B4AC"
            strokeWidth="1"
            strokeOpacity="0.45"
            pathLength="1"
            style={{ animationDelay: "280ms" }}
          />
          <circle
            className="guide-dot"
            cx="620"
            cy="420"
            r="3"
            fill="#B9B4AC"
            style={{ animationDelay: "500ms" }}
          />
        </>
      ) : null}
    </svg>
  );
}
