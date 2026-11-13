"use client";

import { useEffect, useRef } from "react";

type OrangeTraceProps = {
  className?: string;
  path?: string;
  viewBox?: string;
  label?: string;
  labelX?: number;
  labelY?: number;
};

const DEFAULT_PATH =
  "M 40 220 C 90 120, 160 80, 220 110 C 280 145, 250 220, 190 250 C 150 270, 120 255, 110 230";

export function OrangeTrace({
  className = "",
  path = DEFAULT_PATH,
  viewBox = "0 0 360 320",
  label,
  labelX = 250,
  labelY = 120,
}: OrangeTraceProps) {
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
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <svg
      ref={ref}
      className={`orange-trace pointer-events-none absolute inset-0 h-full w-full ${className}`}
      viewBox={viewBox}
      fill="none"
      aria-hidden={label ? undefined : true}
      role={label ? "img" : undefined}
      aria-label={label}
    >
      <path
        className="guide-stroke"
        d={path}
        stroke="#E8501E"
        strokeWidth="1.5"
        strokeLinecap="round"
        pathLength="1"
        style={{ animationDuration: "700ms" }}
      />
      <circle
        className="guide-dot"
        cx={labelX - 18}
        cy={labelY - 4}
        r="3.5"
        fill="#E8501E"
        style={{ animationDelay: "520ms" }}
      />
      {label ? (
        <text
          className="guide-label"
          x={labelX}
          y={labelY}
          fill="#B83A12"
          fontSize="14"
          fontFamily="var(--font-geist-sans), system-ui, sans-serif"
          letterSpacing="-0.02em"
          style={{ animationDelay: "600ms" }}
        >
          {label}
        </text>
      ) : null}
    </svg>
  );
}
