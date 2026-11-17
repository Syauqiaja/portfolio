import React from 'react';

/** Waving-flag mark (same artwork as public/favicon.svg) + wordmark. */
export const FlagMark = ({ size = 32, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 512 512" className={className} aria-hidden="true">
    <rect width="512" height="512" rx="112" fill="#019d91" />
    <g transform="translate(-10 6)" fill="#ffffff">
      <rect x="132" y="104" width="44" height="300" rx="22" />
      <g className="origin-[168px_200px] transition-transform duration-300 ease-spring group-hover:skew-y-[-6deg] group-hover:scale-x-105">
        <path d="M168 116C240 78 306 166 396 120V196C306 242 240 154 168 192Z" />
        <path d="M168 222C226 192 282 262 340 236V306C282 332 226 262 168 292Z" />
      </g>
    </g>
  </svg>
);

const Logo = ({ dark = false }) => (
  <a href="#home" className="group inline-flex items-center gap-2" aria-label="Syauqi, back to top">
    <FlagMark className="transition-transform duration-300 ease-spring group-hover:-rotate-6 group-hover:scale-110" />
    <span className={`font-display text-body-lg font-medium tracking-[-0.03em] ${dark ? 'text-paper' : 'text-ink'}`}>
      syauqi<span className="text-teal">.</span>
    </span>
  </a>
);

export default Logo;
