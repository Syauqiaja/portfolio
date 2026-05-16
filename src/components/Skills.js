import React from 'react';

const skillsData = [
  {
    name: 'FLUTTER_MOBILE',
    percentage: 95,
    description: 'Cross-platform development, BLoC, Provider, GetIt architecture.'
  },
  {
    name: 'ANDROID_NATIVE',
    percentage: 90,
    description: 'Kotlin/Java, MVVM, Coroutines, Dagger-Hilt, RxAndroid.'
  },
  {
    name: 'LARAVEL_WEB',
    percentage: 88,
    description: 'RESTful APIs, Livewire, Volt, MySQL, PostgreSQL integration.'
  },
  {
    name: 'CI_CD_AUTOMATION',
    percentage: 85,
    description: 'Pipeline automation, Git workflows, deployment optimization.'
  },
  {
    name: 'STATE_MANAGEMENT',
    percentage: 92,
    description: 'Provider, BLoC patterns, Coroutines Flow, reactive programming.'
  },
  {
    name: 'TESTING_QA',
    percentage: 80,
    description: 'JUnit, PHPUnit, UI testing, code quality assurance.'
  }
];

const Skills = () => {
  return (
    <section className="min-h-[70vh] flex items-center px-4 md:px-margin-desktop py-24 bg-surface/20 border-y border-border-muted" id="skills">
      <div className="max-w-container mx-auto w-full">
        <div className="mb-12 flex items-center gap-4">
          <h2 className="text-headline-lg text-text-primary uppercase tracking-widest">
            02 // SKILLS_MATRIX
          </h2>
          <div className="h-px flex-grow bg-border-muted"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => (
            <div 
              key={index}
              className="hud-border p-6 bg-surface hover:bg-surface-hover transition-colors group"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-text-primary">{skill.name}</span>
                <span className="text-text-primary">{skill.percentage}%</span>
              </div>
              
              <div className="h-1 w-full bg-border-muted overflow-hidden">
                <div 
                  className="h-full bg-text-secondary transition-all duration-1000"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
              
              <p className="mt-4 text-body-sm text-text-secondary">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
