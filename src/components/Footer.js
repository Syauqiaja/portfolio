import React from 'react';
import Logo from './Logo';
import Icon from './Icon';
import { navLinks, profile } from '../data';

const Footer = () => (
  <footer className="bg-ink py-20 text-paper">
    <div className="container-page">
      <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_auto]">
        <div>
          <Logo dark />
          <p className="mt-4 max-w-xs text-body-sm text-steel">
            {profile.role} building mobile & web products from {profile.location}.
          </p>
        </div>

        <div>
          <h3 className="font-sans text-body-sm font-medium text-paper">Navigate</h3>
          <ul className="mt-4 space-y-3">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-body-sm text-steel transition-colors duration-150 hover:text-paper">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-sans text-body-sm font-medium text-paper">Elsewhere</h3>
          <ul className="mt-4 space-y-3">
            <li>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-body-sm text-steel transition-colors duration-150 hover:text-paper">
                GitHub
              </a>
            </li>
            <li>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-body-sm text-steel transition-colors duration-150 hover:text-paper">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={`mailto:${profile.email}`} className="text-body-sm text-steel transition-colors duration-150 hover:text-paper">
                Email
              </a>
            </li>
          </ul>
        </div>

        <div>
          <a
            href="#home"
            className="group inline-flex items-center gap-2 rounded-button border border-slate700 px-4 py-2 text-body-sm font-medium text-paper transition-colors duration-150 hover:border-steel"
          >
            Back to top
            <Icon name="arrowUp" size={16} className="transition-transform duration-300 ease-spring group-hover:-translate-y-1" />
          </a>
        </div>
      </div>

      <div className="mt-16 flex flex-col gap-2 border-t border-slate700 pt-6 text-caption text-steel sm:flex-row sm:justify-between">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Built with React & Tailwind CSS</span>
      </div>
    </div>
  </footer>
);

export default Footer;
