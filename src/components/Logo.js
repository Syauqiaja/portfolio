import React from 'react';

/** Little blinking blob mark + wordmark. */
const Logo = ({ dark = false }) => (
  <a href="#home" className="group inline-flex items-center gap-2" aria-label="Syauqi, back to top">
    <span
      className="flex h-8 w-8 items-center justify-center gap-1 bg-mint-pop transition-transform duration-300 ease-spring group-hover:rotate-12 group-hover:scale-110"
      style={{ borderRadius: '58% 42% 55% 45% / 55% 48% 52% 45%' }}
    >
      <span className="h-2 w-1.5 animate-blink rounded-full bg-ink" />
      <span className="h-2 w-1.5 animate-blink rounded-full bg-ink" />
    </span>
    <span className={`font-display text-body-lg font-medium tracking-[-0.03em] ${dark ? 'text-paper' : 'text-ink'}`}>
      syauqi<span className="text-teal">.</span>
    </span>
  </a>
);

export default Logo;
