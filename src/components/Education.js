import React from 'react';
import Icon from './Icon';
import Reveal from './Reveal';
import { achievement, education } from '../data';
import { burstFromEvent } from '../lib/confetti';

const Trophy = () => (
  <svg viewBox="0 0 120 120" className="h-28 w-28 animate-float md:h-36 md:w-36" aria-hidden="true">
    <path d="M30 22h60v22a30 30 0 0 1-60 0V22Z" fill="#f0b100" />
    <path d="M30 30H18a14 14 0 0 0 14 18M90 30h12a14 14 0 0 1-14 18" stroke="#f0b100" strokeWidth="6" fill="none" strokeLinecap="round" />
    <rect x="52" y="72" width="16" height="16" fill="#f0b100" />
    <rect x="38" y="88" width="44" height="12" rx="4" fill="#61f7cf" />
    <circle cx="50" cy="40" r="4" fill="#09090b" />
    <circle cx="70" cy="40" r="4" fill="#09090b" />
    <path d="M52 52q8 7 16 0" stroke="#09090b" strokeWidth="4" fill="none" strokeLinecap="round" />
    <text x="60" y="33" textAnchor="middle" fontSize="10" fontWeight="700" fill="#09090b">3</text>
  </svg>
);

const Education = () => (
  <section id="education" className="section scroll-mt-16">
    <div className="container-page">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="text-heading-sm text-ink md:text-heading">Learning & recognition</h2>
        <p className="mt-4 text-body-lg text-steel">Where I sharpened the fundamentals, and a moment I&apos;m proud of.</p>
      </Reveal>

      <Reveal delay={100} className="mt-10">
        <div className="relative overflow-hidden rounded-hero bg-charcoal p-8 text-paper md:p-12">
          <span className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-teal/30" />
          <span className="absolute -bottom-10 left-1/3 h-24 w-24 animate-float-slow rounded-full bg-mint-pop/20" />
          <div className="relative grid items-center gap-8 md:grid-cols-[auto_1fr]">
            <Trophy />
            <div>
              <span className="inline-flex rounded-full bg-paper/10 px-3 py-1 text-caption font-medium text-mint-pop">
                {achievement.event}
              </span>
              <h3 className="mt-4 text-heading-sm md:text-heading">{achievement.title}</h3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-3">
                {achievement.points.map((p) => (
                  <li key={p} className="flex gap-2 text-body-sm text-fog">
                    <Icon name="sparkles" size={16} className="mt-0.5 shrink-0 text-sunshine" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={achievement.link} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  View certificate <Icon name="arrowUpRight" size={16} />
                </a>
                <button
                  type="button"
                  onClick={burstFromEvent}
                  className="btn border border-slate700 bg-transparent text-paper hover:border-steel"
                >
                  Celebrate 🎉
                </button>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {education.map((edu, i) => (
          <Reveal key={edu.institution} delay={150 + i * 80} className="h-full">
            <article className="card group flex h-full flex-col p-6 transition-transform duration-300 ease-spring hover:-translate-y-1">
              <div className="flex items-start justify-between">
                <span className={`flex h-10 w-10 items-center justify-center rounded-button ${edu.color} text-ink group-hover:animate-wiggle`}>
                  <Icon name={edu.icon} size={20} />
                </span>
                <span className="text-caption font-medium text-fog">{edu.period}</span>
              </div>
              <h3 className="mt-5 text-subheading text-ink">{edu.institution}</h3>
              <p className="mt-1 text-body-sm text-steel">{edu.degree}</p>
              {edu.highlight && (
                <p className="mt-4 rounded-button bg-wash px-3 py-2 text-body-sm font-medium text-ink">{edu.highlight}</p>
              )}
              {edu.tags && (
                <ul className="mt-4 flex flex-wrap gap-2">
                  {edu.tags.map((t) => (
                    <li key={t} className="chip bg-canvas">
                      {t}
                    </li>
                  ))}
                </ul>
              )}
              {edu.link && (
                <a
                  href={edu.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-1 pt-4 text-body-sm font-medium text-teal hover:text-teal-dark"
                >
                  View credential <Icon name="arrowUpRight" size={16} />
                </a>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
