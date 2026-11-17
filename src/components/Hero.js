import React, { useEffect, useState } from 'react';
import Icon from './Icon';
import { Buddy, BlobBuddy, RobotBuddy, StarBuddy, PinkBuddy, PhoneMock } from './Characters';
import { heroWords, profile } from '../data';
import { useMouse } from '../hooks';

const RotatingWord = () => {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % heroWords.length), 2200);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="relative inline-block whitespace-nowrap">
      <span className="absolute inset-x-[-4px] bottom-[0.08em] top-[0.45em] -z-10 rounded-button bg-mint-pop/70" />
      <span key={i} className="inline-block animate-word-in">
        {heroWords[i]}
      </span>
    </span>
  );
};

const HeroArt = () => {
  const mouse = useMouse();
  const [starSpin, setStarSpin] = useState(false);

  return (
    <div className="relative mx-auto h-[440px] w-full max-w-[480px] md:h-[500px]" aria-label="Playful illustration, click the characters">
      {/* Backdrop shapes */}
      <div className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-paper md:h-[400px] md:w-[400px]" />
      <div className="absolute left-[8%] top-[18%] h-14 w-14 animate-spin-slow rounded-card border-2 border-dashed border-cloud" />
      <div className="absolute bottom-[12%] right-[6%] h-6 w-6 animate-float rounded-full bg-mint-wash" />

      {/* Phone */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-float-slow">
        <PhoneMock />
      </div>

      {/* Characters */}
      <Buddy
        label="Star character"
        lines={['Woohoo! ⭐', 'Spin me again!', 'Top 3 baby!']}
        className="left-[2%] top-[4%] animate-float-rot"
      >
        <span onClick={() => setStarSpin((s) => !s)}>
          <StarBuddy spinning={starSpin} />
        </span>
      </Buddy>

      <Buddy
        label="Robot character"
        lines={['beep boop 🤖', 'CI/CD green ✅', 'Deploying…']}
        className="right-[0%] top-[8%] animate-float"
      >
        <RobotBuddy mouse={mouse} />
      </Buddy>

      <Buddy
        label="Blob character"
        lines={['Hi there! 👋', 'I ❤️ Flutter', 'Hire Syauqi!', 'Boop!']}
        className="bottom-[4%] left-[0%] animate-float-slow"
      >
        <BlobBuddy mouse={mouse} />
      </Buddy>

      <Buddy
        label="Pink character"
        lines={['Kotlin ftw', 'So smooth ✨', '60 fps!']}
        className="bottom-[16%] right-[4%] animate-float-rot [animation-delay:1s]"
      >
        <PinkBuddy mouse={mouse} />
      </Buddy>

      <span className="pointer-events-none absolute left-1/2 top-[2%] -translate-x-1/2 rounded-full border border-cloud bg-paper px-3 py-1 text-caption font-medium text-steel">
        {'</> tap us!'}
      </span>
    </div>
  );
};

const Hero = () => (
  <section id="home" className="relative overflow-hidden pb-16 pt-12 md:pb-20 md:pt-20">
    <div className="container-page grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
      <div>
        <span className="eyebrow">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
          </span>
          Available for new projects · {profile.location}
        </span>

        <h1 className="relative z-0 mt-6 text-heading-sm text-ink sm:text-heading lg:text-heading-lg">
          Hi, I&apos;m {profile.shortName}. I build <RotatingWord /> people love to use.
        </h1>

        <p className="mt-6 max-w-xl text-body-lg text-steel">
          {profile.role} from Indonesia crafting fast, reliable apps with Flutter, native Android and Laravel.
          2+ years turning messy problems into smooth, shippable products.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#work" className="btn-primary btn-lg group">
            See my work
            <Icon name="arrowRight" size={18} className="transition-transform duration-150 group-hover:translate-x-1" />
          </a>
          <a href={profile.resume} download={profile.resumeName} className="btn-outline btn-lg group">
            <Icon name="download" size={18} className="transition-transform duration-150 group-hover:translate-y-0.5" />
            Download resume
          </a>
        </div>

        <div className="mt-8 flex items-center gap-3 text-body-sm text-steel">
          <img
            src={profile.photo}
            alt={profile.name}
            className="h-10 w-10 rounded-full object-cover ring-2 ring-paper"
          />
          <span>
            <span className="font-medium text-ink">{profile.name}</span>
            <br />
            Flutter · Android · Laravel
          </span>
        </div>
      </div>

      <HeroArt />
    </div>
  </section>
);

export default Hero;
