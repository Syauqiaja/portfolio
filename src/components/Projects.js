import React, { useEffect, useRef, useState } from 'react';
import Icon from './Icon';
import Reveal from './Reveal';
import { projects } from '../data';

const filters = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];

/** Illustrated cover that tilts toward the pointer. */
const ProjectArt = ({ project }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const { art } = project;

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ x: py * -8, y: px * 10 });
  };

  return (
    <div style={{ perspective: 900 }}>
      <div
        onPointerMove={onMove}
        onPointerLeave={() => setTilt({ x: 0, y: 0 })}
        className={`relative aspect-[4/3] overflow-hidden rounded-feature ${art.bg} transition-transform duration-300 ease-out`}
        style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
      >
        <span
          className={`absolute -right-10 -top-10 h-48 w-48 rounded-full ${art.blob} opacity-80 transition-transform duration-500 ease-spring group-hover:scale-125`}
        />
        <span
          className={`absolute bottom-8 left-8 h-14 w-14 animate-spin-slow rounded-card ${art.accent} opacity-90`}
        />
        <span className="absolute bottom-10 right-12 h-5 w-5 animate-float rounded-full bg-paper" />
        <span className="absolute left-10 top-10 h-3 w-3 animate-float rounded-full bg-ink [animation-delay:0.6s]" />
        <span
          className="absolute inset-0 flex items-center justify-center text-[88px] transition-transform duration-500 ease-spring group-hover:-rotate-12 group-hover:scale-125"
          style={{ transform: `translate(${tilt.y * 1.5}px, ${-tilt.x * 1.5}px)` }}
          aria-hidden="true"
        >
          {art.emoji}
        </span>
        <span className="absolute left-5 top-5 rounded-full bg-paper px-3 py-1 text-caption font-medium text-ink">
          {project.category}
        </span>
      </div>
    </div>
  );
};

const ProjectCard = ({ project }) => (
  <article className="group w-[85%] shrink-0 snap-start sm:w-[60%] lg:w-[calc(50%-12px)]">
    <ProjectArt project={project} />
    <div className="px-1 pt-5">
      <h3 className="text-subheading text-ink">{project.title}</h3>
      <p className="mt-2 text-body-sm text-steel">{project.description}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <li key={t} className="chip">
            {t}
          </li>
        ))}
      </ul>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-1 text-body-sm font-medium text-teal hover:text-teal-dark"
      >
        {project.linkLabel}
        <Icon name="arrowUpRight" size={16} className="transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </a>
    </div>
  </article>
);

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [progress, setProgress] = useState(0);
  const trackRef = useRef(null);
  const visible = projects.filter((p) => filter === 'All' || p.category === filter);

  const updateProgress = () => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 1);
  };

  useEffect(() => {
    const el = trackRef.current;
    if (el) el.scrollLeft = 0;
    updateProgress();
    window.addEventListener('resize', updateProgress);
    return () => window.removeEventListener('resize', updateProgress);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  const scrollByCard = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector('article');
    const step = card ? card.getBoundingClientRect().width + 24 : el.clientWidth * 0.8;
    if (el.scrollBy) el.scrollBy({ left: dir * step, behavior: 'smooth' });
    else el.scrollLeft += dir * step;
  };

  return (
    <section id="work" className="section scroll-mt-16 overflow-hidden">
      <div className="container-page">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-heading-sm text-ink md:text-heading">Selected work</h2>
            <p className="mt-3 max-w-lg text-body-lg text-steel">Apps and platforms I&apos;ve designed, built and shipped.</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex gap-1 rounded-card border border-cloud bg-paper p-1">
              {filters.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFilter(f)}
                  aria-pressed={filter === f}
                  className={`rounded-button px-3 py-1.5 text-body-sm font-medium transition-colors duration-150 ${
                    filter === f ? 'bg-ink text-paper' : 'text-steel hover:text-ink'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
            <div className="hidden gap-2 sm:flex">
              <button type="button" onClick={() => scrollByCard(-1)} className="btn-outline h-10 w-10 !p-0" aria-label="Previous project">
                <Icon name="arrowLeft" size={18} />
              </button>
              <button type="button" onClick={() => scrollByCard(1)} className="btn-outline h-10 w-10 !p-0" aria-label="Next project">
                <Icon name="arrowRight" size={18} />
              </button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div
            ref={trackRef}
            onScroll={updateProgress}
            className="no-scrollbar -mx-4 mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-px-4 px-4 pb-2 md:-mx-8 md:scroll-px-8 md:px-8"
          >
            {visible.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
            <div className="w-px shrink-0" aria-hidden="true" />
          </div>
          <div className="mt-8 h-1 overflow-hidden rounded-full bg-cloud">
            <div
              className="h-full rounded-full bg-teal transition-[width] duration-150"
              style={{ width: `${Math.max(progress, 0.08) * 100}%` }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Projects;
