import React from 'react';

const experienceData = [
  {
    period: 'OCT 2024 - PRESENT',
    title: 'Software Developer @ Galaxy Property',
    logs: [
      { type: 'INFO', message: 'Improved crash-free sessions from 58% to 90% using Flutter BLoC.' },
      { type: 'INFO', message: 'Built RESTful APIs and admin systems with Laravel Livewire.' },
      { type: 'INFO', message: 'Reduced development time by 50% via CI/CD automation.' }
    ],
    dotColor: 'bg-accent-green',
    logColor: 'text-accent-green',
    active: true
  },
  {
    period: 'SEPT 2024 - JUNE 2025',
    title: 'Software Developer @ Aliflammim (Remote)',
    logs: [
      { type: 'INFO', message: 'Led team of 3 building Kuwait Quran app with Flutter.' },
      { type: 'INFO', message: 'Implemented Provider and BLoC state management patterns.' },
      { type: 'INFO', message: 'Coordinated sprints and code reviews for timely delivery.' }
    ],
    dotColor: 'bg-accent-secondary',
    logColor: 'text-accent-secondary',
    active: false
  },
  {
    period: 'JAN 2024 - JAN 2025',
    title: 'Android Developer @ Campaign.com',
    logs: [
      { type: 'INFO', message: 'Reduced page load time by 50% using Coroutines and Flow.' },
      { type: 'INFO', message: 'Implemented JUnit tests and cloud messaging features.' },
      { type: 'INFO', message: 'Applied best practices with Kotlin, Java, and Dagger-Hilt.' }
    ],
    dotColor: 'bg-text-secondary',
    logColor: 'text-text-secondary',
    active: false
  },
  {
    period: 'JULY 2023 - JUNE 2024',
    title: 'Founder & Android Developer @ Herbify Indonesia',
    logs: [
      { type: 'INIT', message: 'Published app with 500+ installs in first month.' },
      { type: 'INIT', message: 'Integrated RESTful APIs and JSON data handling.' }
    ],
    dotColor: 'bg-text-secondary/30',
    logColor: 'text-text-secondary',
    active: false
  }
];

const Experience = () => {
  return (
    <section className="min-h-screen flex items-center px-4 md:px-margin-desktop py-24 bg-canvas" id="experience">
      <div className="max-w-4xl mx-auto w-full">
        <div className="mb-12" data-aos="fade-up">
          <h2 className="text-headline-lg text-text-primary uppercase tracking-widest mb-2">
            04 // DEPLOYMENT_LOGS
          </h2>
          <p className="text-text-secondary text-body-sm">
            Professional experience timeline - 2+ years in software development
          </p>
        </div>
        
        <div className="space-y-12 border-l border-border-muted pl-8 relative">
          {experienceData.map((exp, index) => (
            <div key={index} className="relative" data-aos="fade-left" data-aos-delay={index * 150}>
              <div className={`absolute -left-[37px] top-1 w-4 h-4 rounded-full ${exp.dotColor} border-4 border-canvas ${exp.active ? 'shadow-[0_0_10px_rgba(71,237,129,0.5)] animate-pulse' : ''}`}></div>
              
              <div className="text-label-caps text-text-secondary mb-1 uppercase">
                {exp.period}
              </div>
              
              <h3 className="text-headline-md text-text-primary uppercase">
                {exp.title}
              </h3>
              
              <div className="mt-4 p-5 bg-surface hud-border border-border-muted text-body-sm text-text-secondary hover:bg-surface-hover transition-all duration-300">
                {exp.logs.map((log, logIndex) => (
                  <div key={logIndex} className={`flex gap-2 ${logIndex < exp.logs.length - 1 ? 'mb-2' : ''}`}>
                    <span className={exp.logColor}>[{log.type}]</span>
                    <span>{log.message}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
