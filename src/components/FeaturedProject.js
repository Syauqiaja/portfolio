import React, { useCallback, useEffect, useRef, useState } from 'react';
import Icon from './Icon';
import Reveal from './Reveal';
import TechIcon from './TechIcon';
import { featuredProject as project } from '../data';
import { burst } from '../lib/confetti';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Tiny synthesized drum hit, a nod to the game's every-key-is-a-beat idea. */
let audioCtx;
const playBeat = (pitch) => {
  try {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return;
    audioCtx = audioCtx || new Ctx();
    const t = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(pitch, t);
    osc.frequency.exponentialRampToValueAtTime(pitch / 2, t + 0.18);
    gain.gain.setValueAtTime(0.18, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.25);
    osc.connect(gain).connect(audioCtx.destination);
    osc.start(t);
    osc.stop(t + 0.26);
  } catch (e) {
    // Audio is a bonus; ignore failures.
  }
};

const keys = [
  { key: 'f', label: 'F', pitch: 330, tone: 'bg-mint-pop', pos: '-left-3 top-10 md:-left-6', delay: '' },
  { key: 'j', label: 'J', pitch: 440, tone: 'bg-sunshine', pos: '-right-3 bottom-16 md:-right-6', delay: '[animation-delay:0.8s]' },
];

/** Browser-framed autoplaying preview that only plays while on screen. */
const Preview = () => {
  const videoRef = useRef(null);
  const frameRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [userPaused, setUserPaused] = useState(prefersReducedMotion);

  useEffect(() => {
    const video = videoRef.current;
    const frame = frameRef.current;
    if (!video || !frame || typeof IntersectionObserver === 'undefined') return undefined;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !userPaused) {
          const p = video.play();
          if (p && p.catch) p.catch(() => setPlaying(false));
        } else {
          video.pause();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(frame);
    return () => io.disconnect();
  }, [userPaused]);

  const toggle = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      setUserPaused(false);
      const p = video.play();
      if (p && p.catch) p.catch(() => {});
    } else {
      setUserPaused(true);
      video.pause();
    }
  };

  return (
    <div ref={frameRef} className="relative overflow-hidden rounded-feature border border-slate700 bg-ink shadow-subtle">
      <div className="flex items-center gap-2 border-b border-slate700 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-pink" />
        <span className="h-2.5 w-2.5 rounded-full bg-sunshine" />
        <span className="h-2.5 w-2.5 rounded-full bg-mint-pop" />
        <span className="ml-3 truncate rounded-full bg-charcoal px-3 py-1 text-caption text-fog">
          tybeat.fajrsyauqi.com
        </span>
      </div>
      <div className="group/video relative aspect-[16/10] bg-charcoal">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          poster={project.poster}
          muted
          loop
          playsInline
          preload="metadata"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          aria-label="Gameplay preview of Type Beat: picking a level on the rice-field map, typing to the beat, then a three-star result screen."
        >
          <source src={project.video.webm} type="video/webm" />
          <source src={project.video.mp4} type="video/mp4" />
        </video>
        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? 'Pause preview' : 'Play preview'}
          className={`absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-paper/90 text-ink backdrop-blur transition-all duration-300 ease-spring hover:scale-110 ${
            playing ? 'opacity-0 focus-visible:opacity-100 group-hover/video:opacity-100' : 'opacity-100'
          }`}
        >
          <Icon name={playing ? 'pause' : 'play'} size={18} />
        </button>
        {!playing && (
          <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-ink/80 px-3 py-1 text-caption font-medium text-paper">
            Preview
          </span>
        )}
      </div>
    </div>
  );
};

const FeaturedProject = () => {
  const [pressed, setPressed] = useState(null);
  const [hits, setHits] = useState(0);
  const sectionRef = useRef(null);
  const keyRefs = useRef({});

  const hit = useCallback((k) => {
    setPressed(k.key);
    setHits((n) => n + 1);
    playBeat(k.pitch);
    const el = keyRefs.current[k.key];
    if (el) {
      const r = el.getBoundingClientRect();
      burst(r.left + r.width / 2, r.top + r.height / 2, 10);
    }
    window.setTimeout(() => setPressed((cur) => (cur === k.key ? null : cur)), 160);
  }, []);

  // Pressing F or J on a real keyboard while the spotlight is on screen hits the keycaps.
  useEffect(() => {
    const onKey = (e) => {
      if (e.repeat || e.metaKey || e.ctrlKey || e.altKey) return;
      const tag = (e.target && e.target.tagName) || '';
      if (/INPUT|TEXTAREA|SELECT/.test(tag)) return;
      const k = keys.find((x) => x.key === e.key.toLowerCase());
      const node = sectionRef.current;
      if (!k || !node) return;
      const r = node.getBoundingClientRect();
      if (r.bottom < 0 || r.top > window.innerHeight) return;
      hit(k);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [hit]);

  return (
    <Reveal>
      <article
        ref={sectionRef}
        aria-labelledby="featured-title"
        className="relative mt-10 rounded-hero bg-charcoal p-6 text-paper sm:p-10 lg:p-12"
      >
        <span className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-teal opacity-30 blur-3xl" />
        <span className="pointer-events-none absolute -bottom-20 left-10 h-56 w-56 rounded-full bg-mint-pop opacity-10 blur-3xl" />

        <div className="relative grid items-center gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-12">
          <div className="relative">
            <Preview />
            {keys.map((k) => (
              <button
                key={k.key}
                ref={(el) => {
                  keyRefs.current[k.key] = el;
                }}
                type="button"
                onClick={() => hit(k)}
                aria-label={`Play the ${k.label} beat`}
                className={`absolute z-10 hidden h-14 w-14 animate-float items-center justify-center rounded-card border-b-4 border-ink/30 font-display text-heading-sm font-medium text-ink transition-transform duration-150 ease-spring sm:flex ${k.tone} ${k.pos} ${k.delay} ${
                  pressed === k.key ? 'translate-y-1 scale-90 border-b-0' : 'hover:-rotate-6 hover:scale-110'
                }`}
              >
                {k.label}
              </button>
            ))}
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-sunshine px-3 py-1 text-caption font-medium text-ink">
                <span className="inline-block animate-wiggle">★</span> Featured project
              </span>
              <span className="relative inline-flex items-center gap-1.5 rounded-full bg-mint-pop px-3 py-1 text-caption font-medium text-ink">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
                </span>
                {project.badge} · Live
              </span>
            </div>

            <h3 id="featured-title" className="mt-5 text-heading-sm text-paper md:text-heading">
              {project.title}
            </h3>
            <p className="mt-2 font-display text-subheading font-medium text-mint-pop">{project.tagline}</p>
            <p className="mt-4 text-body text-fog">{project.description}</p>

            <ul className="mt-6 space-y-3">
              {project.highlights.map((h) => (
                <li key={h.label} className="flex items-center gap-3 text-body-sm text-cloud">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-button bg-slate700 text-mint-pop">
                    <Icon name={h.icon} size={16} />
                  </span>
                  {h.label}
                </li>
              ))}
            </ul>

            <ul className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <li key={t} className="chip gap-1.5">
                  <TechIcon name={t} size={14} />
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-primary btn-lg group">
                {project.linkLabel}
                <Icon
                  name="arrowUpRight"
                  size={18}
                  className="transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
              <span className="inline-flex items-center gap-2 text-body-sm text-fog">
                <Icon name="keyboard" size={18} className="text-mint-pop" />
                {project.note}
              </span>
            </div>

            <p className="mt-6 hidden text-caption text-steel sm:block" aria-live="polite">
              {hits === 0 ? (
                <>
                  Psst, press <kbd className="rounded bg-slate700 px-1.5 py-0.5 text-fog">F</kbd> or{' '}
                  <kbd className="rounded bg-slate700 px-1.5 py-0.5 text-fog">J</kbd> to play a beat.
                </>
              ) : (
                <>
                  {hits} beat{hits === 1 ? '' : 's'} played. Imagine a whole song of them.
                </>
              )}
            </p>
          </div>
        </div>
      </article>
    </Reveal>
  );
};

export default FeaturedProject;
