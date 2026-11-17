import React, { useEffect, useRef, useState } from 'react';
import { burst } from '../lib/confetti';

/** A single eye whose pupil follows the mouse. */
export const Eye = ({ mouse, size = 18, pupil = 8, white = '#ffffff', pupilColor = '#09090b', blink = true }) => {
  const ref = useRef(null);
  let dx = 0;
  let dy = 0;
  if (ref.current && mouse.x >= 0) {
    const r = ref.current.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    const angle = Math.atan2(mouse.y - cy, mouse.x - cx);
    const dist = Math.min(Math.hypot(mouse.x - cx, mouse.y - cy) / 40, 1);
    const max = (size - pupil) / 2 - 1;
    dx = Math.cos(angle) * max * dist;
    dy = Math.sin(angle) * max * dist;
  }
  return (
    <span
      ref={ref}
      className={`relative inline-block rounded-full ${blink ? 'animate-blink' : ''}`}
      style={{ width: size, height: size, background: white }}
    >
      <span
        className="absolute left-1/2 top-1/2 rounded-full transition-transform duration-75 ease-out"
        style={{
          width: pupil,
          height: pupil,
          background: pupilColor,
          marginLeft: -pupil / 2,
          marginTop: -pupil / 2,
          transform: `translate(${dx}px, ${dy}px)`,
        }}
      />
    </span>
  );
};

/**
 * Click-to-boop wrapper: squishes the character, pops a speech bubble and a
 * small confetti burst. Cycles through `lines` on each click.
 */
export const Buddy = ({ lines, className = '', bubbleClass = '', label, children }) => {
  const [boopKey, setBoopKey] = useState(0);
  const [line, setLine] = useState(null);
  const idx = useRef(0);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  const onClick = (e) => {
    setBoopKey((k) => k + 1);
    setLine(lines[idx.current % lines.length]);
    idx.current += 1;
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setLine(null), 1800);
    const r = e.currentTarget.getBoundingClientRect();
    burst(r.left + r.width / 2, r.top + r.height / 3, 14);
  };

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`group absolute cursor-pointer select-none focus-visible:outline-none ${className}`}
    >
      {line && (
        <span
          key={`${boopKey}-bubble`}
          className={`absolute -top-10 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap ${bubbleClass}`}
        >
          <span className="block animate-pop-in rounded-full border border-cloud bg-paper px-3 py-1 text-caption font-medium text-ink">
            {line}
          </span>
        </span>
      )}
      <span key={boopKey} className={`block ${boopKey ? 'animate-boop' : ''}`}>
        {children}
      </span>
    </button>
  );
};

export const BlobBuddy = ({ mouse, size = 128, color = '#61f7cf' }) => (
  <span
    className="relative flex items-center justify-center transition-transform duration-300 ease-spring group-hover:scale-105"
    style={{
      width: size,
      height: size * 0.92,
      background: color,
      borderRadius: '58% 42% 55% 45% / 55% 48% 52% 45%',
    }}
  >
    <span className="flex flex-col items-center gap-2">
      <span className="flex gap-3">
        <Eye mouse={mouse} size={22} pupil={10} />
        <Eye mouse={mouse} size={22} pupil={10} />
      </span>
      <span className="h-3 w-7 rounded-b-full bg-ink transition-all duration-150 group-hover:h-4 group-hover:w-8" />
    </span>
    <span className="absolute bottom-[34%] left-[18%] h-2 w-4 rounded-full bg-pink/70" />
    <span className="absolute bottom-[34%] right-[18%] h-2 w-4 rounded-full bg-pink/70" />
  </span>
);

export const RobotBuddy = ({ mouse }) => (
  <span className="relative flex flex-col items-center">
    <span className="relative mb-1 flex h-6 w-6 items-start justify-center">
      <span className="absolute top-0 h-3 w-3 rounded-full bg-sunshine" />
      <span className="absolute top-0 h-3 w-3 animate-ping rounded-full bg-sunshine" />
      <span className="absolute top-3 h-3 w-1 bg-navy" />
    </span>
    <span className="flex h-20 w-24 flex-col items-center justify-center gap-2 rounded-card bg-navy transition-transform duration-300 ease-spring group-hover:-rotate-6">
      <span className="flex gap-3">
        <Eye mouse={mouse} size={20} pupil={9} white="#61f7cf" pupilColor="#111827" />
        <Eye mouse={mouse} size={20} pupil={9} white="#61f7cf" pupilColor="#111827" />
      </span>
      <span className="flex gap-1">
        {[0, 1, 2, 3].map((i) => (
          <span key={i} className="h-1.5 w-2.5 rounded-sm bg-paper/70" />
        ))}
      </span>
    </span>
  </span>
);

export const StarBuddy = ({ size = 72, spinning }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    className={`transition-transform duration-700 ease-spring ${spinning ? 'rotate-[360deg]' : ''} group-hover:scale-110`}
  >
    <path
      d="M50 6c4 0 6 3 8 9l6 17 18 1c6 0 10 2 11 5s-1 7-6 10l-14 11 5 18c2 6 1 9-2 11s-7 1-12-3L50 74 35 85c-5 4-9 5-12 3s-4-5-2-11l5-18-14-11c-5-3-7-7-6-10s5-5 11-5l18-1 6-17c2-6 5-9 9-9Z"
      fill="#f0b100"
    />
    <circle cx="40" cy="48" r="4.5" fill="#09090b" />
    <circle cx="60" cy="48" r="4.5" fill="#09090b" />
    <path d="M43 59q7 6 14 0" stroke="#09090b" strokeWidth="3.5" fill="none" strokeLinecap="round" />
  </svg>
);

export const PinkBuddy = ({ mouse }) => (
  <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-pink transition-transform duration-300 ease-spring group-hover:rotate-12">
    <span className="flex flex-col items-center gap-1.5">
      <span className="flex gap-2">
        <Eye mouse={mouse} size={16} pupil={8} />
        <Eye mouse={mouse} size={16} pupil={8} />
      </span>
      <span className="h-2 w-2 rounded-full bg-ink" />
    </span>
  </span>
);

/** A little phone mockup with an animated "app" inside. */
export const PhoneMock = () => (
  <span className="block w-44 rounded-[32px] bg-ink p-2 md:w-48">
    <span className="flex h-80 flex-col gap-3 overflow-hidden rounded-[26px] bg-paper p-4 md:h-[350px]">
      <span className="mx-auto mb-1 h-1.5 w-12 rounded-full bg-cloud" />
      <span className="flex items-center gap-2">
        <span className="h-8 w-8 rounded-full bg-mint-pop" />
        <span className="flex flex-col gap-1">
          <span className="h-2 w-16 rounded-full bg-ink" />
          <span className="h-2 w-10 rounded-full bg-cloud" />
        </span>
      </span>
      <span className="flex h-24 items-end gap-1.5 rounded-card bg-canvas p-3">
        {[0.6, 0.9, 0.5, 1, 0.7, 0.85].map((h, i) => (
          <span
            key={i}
            className="flex-1 origin-bottom animate-bar-grow rounded-t bg-teal"
            style={{ height: `${h * 100}%`, animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </span>
      <span className="grid grid-cols-2 gap-2">
        <span className="h-12 rounded-button bg-sunshine/80" />
        <span className="h-12 rounded-button bg-pink/80" />
      </span>
      <span className="h-2 w-24 rounded-full bg-cloud" />
      <span className="h-2 w-20 rounded-full bg-cloud" />
      <span className="mt-auto rounded-button bg-teal py-2 text-center text-caption font-medium text-paper">
        Ship it ✨
      </span>
    </span>
  </span>
);
