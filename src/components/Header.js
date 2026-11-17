import React, { useEffect, useState } from 'react';
import Logo from './Logo';
import Icon from './Icon';
import { navLinks, profile } from '../data';
import { useScrollProgress } from '../hooks';

/** Highlights the nav link of the section currently on screen. */
function useActiveSection(ids) {
  const [active, setActive] = useState(null);
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);
  return active;
}

const sectionIds = ['home', ...navLinks.map((l) => l.href.slice(1))];

const Header = () => {
  const [open, setOpen] = useState(false);
  const progress = useScrollProgress();
  const active = useActiveSection(sectionIds);

  return (
    <header className="sticky top-0 z-50 bg-paper/90 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Logo />

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`rounded-button px-3 py-2 text-body-sm font-medium transition-colors duration-150 ${
                  isActive ? 'bg-mint-wash text-ink' : 'text-steel hover:bg-canvas hover:text-ink'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a href={profile.resume} download={profile.resumeName} className="btn-outline">
            Resume
          </a>
          <a href="#contact" className="btn-primary">
            Let&apos;s talk
          </a>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-button border border-cloud bg-paper md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <Icon name={open ? 'close' : 'menu'} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className="collapse-grid md:hidden" data-open={open}>
        <div className="overflow-hidden">
          <nav className="container-page flex flex-col gap-1 pb-4" aria-label="Mobile">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-button px-3 py-3 font-display text-subheading font-medium text-ink hover:bg-canvas ${
                  open ? 'animate-pop-in' : ''
                }`}
                style={{ animationDelay: `${i * 40}ms` }}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2">
              <a href={profile.resume} download={profile.resumeName} className="btn-outline">
                Resume
              </a>
              <a href="#contact" onClick={() => setOpen(false)} className="btn-primary">
                Let&apos;s talk
              </a>
            </div>
          </nav>
        </div>
      </div>

      {/* Scroll progress */}
      <div className="h-0.5 w-full bg-mist">
        <div className="h-full origin-left bg-teal" style={{ transform: `scaleX(${progress})` }} />
      </div>
    </header>
  );
};

export default Header;
