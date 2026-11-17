import React, { useEffect, useRef, useState } from 'react';
import Icon from './Icon';
import Reveal from './Reveal';
import { BlobBuddy, Buddy, StarBuddy } from './Characters';
import { profile } from '../data';
import { burstFromEvent } from '../lib/confetti';
import { useMouse } from '../hooks';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const timer = useRef(null);
  const mouse = useMouse();

  useEffect(() => () => clearTimeout(timer.current), []);

  const copyEmail = async (e) => {
    burstFromEvent(e);
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const links = [
    { label: 'Email', href: `mailto:${profile.email}`, icon: 'mail' },
    { label: 'GitHub', href: profile.github, icon: 'github', external: true },
    { label: 'LinkedIn', href: profile.linkedin, icon: 'linkedin', external: true },
    { label: 'Phone', href: `tel:${profile.phone}`, icon: 'phone' },
  ];

  return (
    <section id="contact" className="section scroll-mt-16">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-hero bg-charcoal px-6 py-16 text-center md:px-12 md:py-20">
            <span className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-teal/25" />
            <span className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-mint-pop/10" />

            <Buddy
              label="Blob character"
              lines={['Say hi! 👋', 'Email him!', 'Boop!']}
              className="bottom-8 left-8 hidden animate-float-slow md:block"
            >
              <BlobBuddy mouse={mouse} size={96} />
            </Buddy>
            <Buddy
              label="Star character"
              lines={["Let's go! 🚀", '⭐⭐⭐⭐⭐']}
              className="right-10 top-10 hidden animate-float-rot md:block"
            >
              <StarBuddy size={64} />
            </Buddy>

            <div className="relative mx-auto max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-paper/10 px-3 py-1 text-caption font-medium text-mint-pop">
                <span className="h-1.5 w-1.5 rounded-full bg-mint-pop" />
                Open to remote & on-site roles
              </span>
              <h2 className="mt-6 text-heading-sm text-paper md:text-heading lg:text-heading-lg">
                Let&apos;s build something delightful together.
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-body-lg text-fog">
                Got a mobile or web project in mind? I&apos;d love to hear about it.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <button type="button" onClick={copyEmail} className="btn-primary btn-lg min-w-[220px]" aria-live="polite">
                  <Icon name={copied ? 'check' : 'copy'} size={18} />
                  {copied ? 'Copied to clipboard!' : profile.email}
                </button>
                <a href={profile.resume} download={profile.resumeName} className="btn-outline btn-lg group">
                  <Icon name="download" size={18} className="transition-transform duration-150 group-hover:translate-y-0.5" />
                  Resume
                </a>
              </div>

              <ul className="mt-10 flex flex-wrap justify-center gap-2">
                {links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="group inline-flex items-center gap-2 rounded-button px-3 py-2 text-body-sm font-medium text-fog transition-colors duration-150 hover:bg-paper/10 hover:text-paper"
                    >
                      <Icon name={l.icon} size={16} className="transition-transform duration-300 ease-spring group-hover:-rotate-12 group-hover:scale-125" />
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
