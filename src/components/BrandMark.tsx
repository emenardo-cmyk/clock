type BrandMarkProps = {
  className?: string;
  showName?: boolean;
};

export function BrandMark({ className = "", showName = true }: BrandMarkProps) {
  return (
    <a href="#top" className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M12 1.5 L13.2 10.8 L22.5 12 L13.2 13.2 L12 22.5 L10.8 13.2 L1.5 12 L10.8 10.8 Z"
          fill="currentColor"
        />
      </svg>
      {showName ? (
        <span className="title-3 tracking-[-0.02em]">Emiliano Menardo</span>
      ) : (
        <span className="sr-only">Emiliano Menardo</span>
      )}
    </a>
  );
}
