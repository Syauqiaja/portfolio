import React, { useRef, useState } from 'react';
import Icon from './Icon';
import TechIcon from './TechIcon';
import Reveal from './Reveal';
import { skillGroups } from '../data';
import { useCountUp } from '../hooks';

const Ring = ({ level }) => {
  const r = 70;
  const c = 2 * Math.PI * r;
  const shown = useCountUp(level, true, 900);
  return (
    <div className="relative h-44 w-44">
      <svg viewBox="0 0 160 160" className="h-full w-full -rotate-90">
        <circle cx="80" cy="80" r={r} fill="none" stroke="#e4e4e7" strokeWidth="12" />
        <circle
          cx="80"
          cy="80"
          r={r}
          fill="none"
          stroke="#019d91"
          strokeWidth="12"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c - (c * shown) / 100}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-display text-heading-sm font-medium tabular-nums text-ink">{shown}%</span>
        <span className="text-caption font-medium text-steel">confidence</span>
      </div>
    </div>
  );
};

const Skills = () => {
  const [activeId, setActiveId] = useState(skillGroups[0].id);
  const tabRefs = useRef([]);
  const active = skillGroups.find((g) => g.id === activeId);

  const onKeyDown = (e, i) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    e.preventDefault();
    const next = (i + (e.key === 'ArrowRight' ? 1 : -1) + skillGroups.length) % skillGroups.length;
    setActiveId(skillGroups[next].id);
    tabRefs.current[next]?.focus();
  };

  return (
    <section id="skills" className="section scroll-mt-16">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-heading-sm text-ink md:text-heading">What I&apos;m good at</h2>
          <p className="mt-4 text-body-lg text-steel">Pick a lane. Each one is something I&apos;ve shipped to real users.</p>
        </Reveal>

        <Reveal delay={100} className="mt-10 flex justify-center">
          <div role="tablist" aria-label="Skill areas" className="no-scrollbar flex max-w-full gap-1 overflow-x-auto rounded-card border border-cloud bg-paper p-1">
            {skillGroups.map((g, i) => {
              const selected = g.id === activeId;
              return (
                <button
                  key={g.id}
                  ref={(el) => (tabRefs.current[i] = el)}
                  role="tab"
                  type="button"
                  id={`tab-${g.id}`}
                  aria-selected={selected}
                  aria-controls="skill-panel"
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActiveId(g.id)}
                  onKeyDown={(e) => onKeyDown(e, i)}
                  className={`whitespace-nowrap rounded-button px-4 py-2 text-body-sm font-medium transition-colors duration-150 ${
                    selected ? 'bg-teal text-paper' : 'text-steel hover:bg-canvas hover:text-ink'
                  }`}
                >
                  {g.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={150} className="mt-8">
          <div
            id="skill-panel"
            role="tabpanel"
            aria-labelledby={`tab-${active.id}`}
            className="grid gap-6 rounded-feature bg-paper p-6 md:grid-cols-[1.4fr_1fr] md:p-10"
          >
            <div key={active.id} className="animate-pop-in">
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-button ${active.color} ${
                  active.id === 'ops' ? 'text-mint-pop' : 'text-ink'
                } animate-float`}
              >
                <Icon name={active.icon} size={24} />
              </span>
              <h3 className="mt-6 text-heading-sm text-ink">{active.title}</h3>
              <p className="mt-3 max-w-lg text-body text-steel">{active.blurb}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {active.tools.map((t, i) => (
                  <li
                    key={t}
                    className="chip animate-pop-in cursor-default gap-1.5 transition-colors duration-150 hover:animate-wiggle hover:border-teal hover:text-teal"
                    style={{ animationDelay: `${i * 35}ms` }}
                  >
                    <TechIcon name={t} size={14} />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center justify-center rounded-card bg-canvas p-6">
              <Ring key={active.id} level={active.level} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Skills;
