import React, { useState } from 'react';
import Icon from './Icon';
import Reveal from './Reveal';
import { experience, profile } from '../data';

const initials = (name) =>
  name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

const ExperienceItem = ({ job, open, onToggle, index }) => (
  <Reveal delay={index * 80}>
    <div className={`card border transition-colors duration-150 ${open ? 'border-cloud' : 'border-transparent hover:border-cloud'}`}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center gap-4 p-5 text-left md:p-6"
      >
        {job.logo ? (
          <span
            className={`h-12 w-12 shrink-0 overflow-hidden rounded-button border border-cloud bg-paper transition-transform duration-300 ease-spring ${
              open ? 'rotate-[-8deg] scale-110' : ''
            }`}
          >
            <img src={job.logo} alt={`${job.company} logo`} className="h-full w-full object-cover" loading="lazy" />
          </span>
        ) : (
          <span
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-button font-display text-body font-medium ${job.color} ${
              job.dark ? 'text-mint-pop' : 'text-ink'
            } transition-transform duration-300 ease-spring ${open ? 'rotate-[-8deg] scale-110' : ''}`}
          >
            {initials(job.company)}
          </span>
        )}
        <span className="min-w-0 flex-1">
          <span className="flex flex-wrap items-center gap-2">
            <span className="font-display text-body-lg font-medium text-ink">{job.company}</span>
            {job.current && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-mint-wash px-2 py-0.5 text-caption font-medium text-ink">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-teal" />
                </span>
                Now
              </span>
            )}
          </span>
          <span className="mt-0.5 block text-body-sm text-steel">
            {job.role} · {job.period}
          </span>
        </span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-canvas text-ink transition-transform duration-300 ease-layout ${
            open ? 'rotate-180' : ''
          }`}
        >
          <Icon name="chevronDown" size={16} />
        </span>
      </button>
      <div className="collapse-grid" data-open={open}>
        <div className="overflow-hidden">
          <ul className="space-y-3 px-5 pb-6 md:pl-[88px] md:pr-6">
            {job.points.map((p, i) => (
              <li
                key={p}
                className={`flex gap-3 text-body text-steel ${open ? 'animate-pop-in' : ''}`}
                style={{ animationDelay: `${i * 60 + 80}ms` }}
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-mint-wash text-teal">
                  <Icon name="check" size={12} strokeWidth={3} />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </Reveal>
);

const Experience = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="experience" className="section scroll-mt-16">
      <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="text-heading-sm text-ink md:text-heading">Where I&apos;ve worked</h2>
          <p className="mt-4 max-w-md text-body-lg text-steel">
            From founding my own app to leading remote teams, here&apos;s the road so far. Tap a role to peek inside.
          </p>
          <div className="relative mt-8 hidden w-fit lg:block">
            <img src={profile.photo} alt={profile.name} className="h-56 w-56 rounded-feature object-cover" />
            <span className="absolute -right-6 -top-4 animate-float-rot rounded-full bg-sunshine px-3 py-1.5 text-body-sm font-medium text-ink">
              Hi! 👋
            </span>
          </div>
        </Reveal>

        <div className="space-y-3">
          {experience.map((job, i) => (
            <ExperienceItem
              key={job.company}
              job={job}
              index={i}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
