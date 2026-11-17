const COLORS = ['#019d91', '#61f7cf', '#f0b100', '#ff8a80', '#111827', '#b7ffe7'];

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  typeof window.matchMedia === 'function' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Burst small confetti pieces from a viewport point (e.g. a click). */
export function burst(x, y, count = 28) {
  if (typeof document === 'undefined' || prefersReducedMotion()) return;
  for (let i = 0; i < count; i += 1) {
    const el = document.createElement('span');
    const angle = (Math.PI * 2 * i) / count + Math.random() * 0.5;
    const dist = 60 + Math.random() * 110;
    const size = 6 + Math.random() * 6;
    el.className = 'confetti-piece';
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    el.style.width = `${size}px`;
    el.style.height = `${size * (Math.random() > 0.5 ? 1 : 0.5)}px`;
    el.style.background = COLORS[i % COLORS.length];
    el.style.borderRadius = Math.random() > 0.6 ? '9999px' : '2px';
    el.style.setProperty('--dx', `${Math.cos(angle) * dist}px`);
    el.style.setProperty('--dy', `${Math.sin(angle) * dist + 40}px`);
    el.style.setProperty('--r', `${Math.random() * 720 - 360}deg`);
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1100);
  }
}

/** Burst from the centre of an element, or from the click position of an event. */
export function burstFromEvent(e) {
  if (e && typeof e.clientX === 'number' && (e.clientX || e.clientY)) {
    burst(e.clientX, e.clientY);
    return;
  }
  const rect = e?.currentTarget?.getBoundingClientRect?.();
  if (rect) burst(rect.left + rect.width / 2, rect.top + rect.height / 2);
}
