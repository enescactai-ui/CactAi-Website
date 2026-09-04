/**
 * CactAi logo — clean cactus mark in a green badge.
 * Pure SVG, scalable, no external dependencies.
 */
export function Logo({
  size = 32,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <linearGradient
          id="cactaiBadge"
          x1="0"
          y1="0"
          x2="64"
          y2="64"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#52b788" />
          <stop offset="1" stopColor="#1f7d58" />
        </linearGradient>
      </defs>

      {/* Rounded badge */}
      <rect width="64" height="64" rx="16" fill="url(#cactaiBadge)" />

      {/* Cactus — white, clean, rounded */}
      <g
        stroke="#ffffff"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      >
        <path d="M32 47 V22" />
        <path d="M32 37 H23.5 V29" />
        <path d="M32 32 H40.5 V24" />
      </g>

      {/* Pot */}
      <rect x="23.5" y="45.5" width="17" height="9" rx="2.5" fill="#ffffff" />
    </svg>
  );
}

/**
 * Wordmark variant — logo + "CactAi" text inline.
 */
export function Wordmark({
  size = 28,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-2.5 ${className ?? ""}`}>
      <Logo size={size} />
      <span className="font-display text-xl font-semibold tracking-tight">
        CactAi
      </span>
    </div>
  );
}
