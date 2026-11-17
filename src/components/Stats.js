import React from 'react';
import Icon from './Icon';
import Reveal from './Reveal';
import { stats, techStrip } from '../data';
import { useCountUp, useInView } from '../hooks';

const StatTile = ({ stat, delay }) => {
  const [ref, inView] = useInView({ threshold: 0.4 });
  const value = useCountUp(stat.value, inView);
  return (
    <Reveal delay={delay} className="h-full">
      <div ref={ref} className="card group h-full p-6 transition-transform duration-300 ease-spring hover:-translate-y-1">
        <span
          className={`flex h-10 w-10 items-center justify-center rounded-button ${stat.color} ${
            stat.dark ? 'text-mint-pop' : 'text-ink'
          } group-hover:animate-wiggle`}
        >
          <Icon name={stat.icon} size={20} />
        </span>
        <div className="mt-5 font-display text-heading-sm font-medium tabular-nums text-ink">
          {value}
          {stat.suffix}
        </div>
        <div className="mt-1 text-body-sm font-medium text-ink">{stat.label}</div>
        <div className="mt-1 text-body-sm text-steel">{stat.helper}</div>
      </div>
    </Reveal>
  );
};

export const StatTiles = () => (
  <section className="pb-20" aria-label="Highlights">
    <div className="container-page grid grid-cols-2 gap-4 lg:grid-cols-4">
      {stats.map((s, i) => (
        <StatTile key={s.label} stat={s} delay={i * 80} />
      ))}
    </div>
  </section>
);

export const TechMarquee = () => {
  const items = [...techStrip, ...techStrip];
  return (
    <section className="pb-20" aria-label="Tools I use">
      <p className="mb-6 text-center text-body-sm font-medium text-steel">Tools I ship with every day</p>
      <div className="group relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-canvas to-transparent md:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-canvas to-transparent md:w-40" />
        <ul className="flex w-max animate-marquee items-center gap-10 group-hover:[animation-play-state:paused]">
          {items.map((t, i) => (
            <li
              key={`${t}-${i}`}
              aria-hidden={i >= techStrip.length}
              className="flex items-center gap-10 font-display text-subheading font-medium text-fog transition-colors duration-150 hover:text-ink"
            >
              {t}
              <span className="h-1.5 w-1.5 rounded-full bg-cloud" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
