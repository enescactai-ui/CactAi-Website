/**
 * CactAi logo — geometric cactus + purple sparkles.
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
          id="cactaiCactusGrad"
          x1="32"
          y1="6"
          x2="32"
          y2="58"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#1e4a2a" />
          <stop offset="100%" stopColor="#0a1f12" />
        </linearGradient>
      </defs>

      {/* === Cactus geometric body === */}
      <g>
        {/* Top triangle — main spike */}
        <path
          d="M32 6 L40 22 L24 22 Z"
          fill="url(#cactaiCactusGrad)"
        />

        {/* Left arm — circle top */}
        <circle cx="14" cy="26" r="5" fill="url(#cactaiCactusGrad)" />
        {/* Left arm — triangle stem */}
        <path
          d="M14 30 L22 30 L20 44 L16 44 Z"
          fill="url(#cactaiCactusGrad)"
        />

        {/* Center small circle (face) */}
        <circle cx="32" cy="26" r="3.5" fill="url(#cactaiCactusGrad)" />

        {/* Right arm — circle top */}
        <circle cx="50" cy="26" r="5" fill="url(#cactaiCactusGrad)" />
        {/* Right arm — triangle stem */}
        <path
          d="M44 30 L52 30 L48 44 L44 44 Z"
          fill="url(#cactaiCactusGrad)"
        />

        {/* Center body — main column */}
        <path
          d="M26 24 L38 24 L40 50 L24 50 Z"
          fill="url(#cactaiCactusGrad)"
        />

        {/* Base triangle */}
        <path
          d="M22 50 L42 50 L36 60 L28 60 Z"
          fill="url(#cactaiCactusGrad)"
        />
      </g>

      {/* === Purple sparkles === */}
      <g fill="#8b5cf6">
        {/* Top sparkles */}
        <rect x="38" y="4" width="2.5" height="2.5" transform="rotate(45 39.25 5.25)" />
        <circle cx="44" cy="10" r="1.5" />
        <rect x="48" y="6" width="3" height="3" transform="rotate(15 49.5 7.5)" />

        {/* Right side sparkles */}
        <rect x="56" y="16" width="2.5" height="2.5" />
        <circle cx="58" cy="28" r="1.5" />
        <rect x="55" y="38" width="3" height="3" transform="rotate(30 56.5 39.5)" />
        <circle cx="60" cy="48" r="1.2" />

        {/* Left side sparkles */}
        <rect x="4" y="20" width="2.5" height="2.5" transform="rotate(20 5.25 21.25)" />
        <circle cx="6" cy="32" r="1.5" />
        <rect x="3" y="42" width="3" height="3" transform="rotate(-15 4.5 43.5)" />

        {/* Bottom sparkles */}
        <circle cx="14" cy="58" r="1.2" />
        <rect x="46" y="56" width="2" height="2" transform="rotate(45 47 57)" />

        {/* Star burst on top */}
        <path d="M32 0 L33 3 L36 3 L33.5 5 L34.5 8 L32 6 L29.5 8 L30.5 5 L28 3 L31 3 Z" opacity="0.7" />
      </g>
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
