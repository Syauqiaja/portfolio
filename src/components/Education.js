import React from 'react';

const educationData = [
  {
    institution: 'State University of Malang',
    degree: 'Bachelor of Computer Science',
    period: 'Sept 2020 - 2024',
    gpa: '3.88/4.0',
    color: 'accent-green',
    courses: ['Data Structure & Algorithm', 'Database', 'Operating System', 'Network Security']
  },
  {
    institution: 'Bangkit Academy',
    degree: 'Mobile Developer Cohort',
    period: 'Feb 2023 - July 2023',
    achievement: 'Graduate with Distinction',
    color: 'accent-blue',
    highlight: 'Best Presenter in Judging Round',
    link: 'https://drive.google.com/file/d/1FiU1ONEX-gH2JZHKMGJ98xOr-tF1RwPK/view?usp=drive_link'
  },
  {
    institution: 'Djarum Beasiswa Plus',
    degree: 'Djarum Foundation Scholarship',
    period: 'Sept 2022 - Aug 2023',
    color: 'text-secondary',
    courses: ['Leadership', 'Communication', 'Teamwork', 'Problem Solving']
  }
];

const achievementData = {
  title: 'Top 3 Best Capstone Project',
  event: 'Bangkit Academy 2023',
  date: 'July 2023',
  highlights: [
    'Eliminated 720+ competing teams',
    'Secured IDR 140M funding from Google & Dikti',
    'Led team of 6 members'
  ],
  link: 'https://drive.google.com/file/d/1rFWcWzdpRQpg781YKZZPdWSyP5ljMyxB/view?usp=drive_link'
};

const Education = () => {
  return (
    <section className="min-h-screen px-4 md:px-margin-desktop py-24 bg-canvas relative overflow-hidden" id="education">
      {/* Decorative grid background */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(#8C8C8C 1px, transparent 1px), linear-gradient(90deg, #8C8C8C 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>
      
      <div className="max-w-container mx-auto w-full relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center" data-aos="fade-up">
          <h2 className="text-headline-lg text-text-primary uppercase tracking-[0.4em] mb-4">
            06 // ACADEMIC_CREDENTIALS
          </h2>
          <div className="flex justify-center gap-1">
            <div className="w-12 h-1 bg-text-secondary"></div>
            <div className="w-4 h-1 bg-border-muted"></div>
            <div className="w-2 h-1 bg-border-muted"></div>
          </div>
        </div>

        {/* Achievement Banner */}
        <div 
          className="mb-16 relative group"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <div className="hud-border bg-gradient-to-r from-accent-green/10 to-transparent p-8 hover:from-accent-green/20 transition-all duration-500">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-accent-green uppercase tracking-wide">
                      {achievementData.title}
                    </h3>
                    <p className="text-text-secondary text-sm">{achievementData.event} • {achievementData.date}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  {achievementData.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="text-accent-green text-xs mt-1">▸</span>
                      <span className="text-text-secondary text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
              <a
                href={achievementData.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-accent-green border border-accent-green px-4 py-2 hover:bg-accent-green hover:text-canvas transition-all duration-300 text-sm whitespace-nowrap"
              >
                [VIEW_CERTIFICATE] →
              </a>
            </div>
          </div>
        </div>

        {/* Education Cards - Hexagonal Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="relative group"
              data-aos="fade-up"
              data-aos-delay={index * 150 + 300}
            >
              {/* Card */}
              <div className="hud-border bg-surface/50 hover:bg-surface transition-all duration-500 overflow-hidden h-full flex flex-col">
                {/* Icon Header */}
                <div className="relative bg-gradient-to-br from-border-muted to-transparent p-3 border-b border-border-muted">
                  <div className="flex items-start justify-between">
                    <span className="text-[10px] text-text-secondary uppercase tracking-widest">
                      {edu.period}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-headline-md text-text-primary mb-2 uppercase group-hover:text-accent-green transition-colors duration-300">
                    {edu.institution}
                  </h3>
                  <p className="text-body-sm text-text-secondary mb-4">
                    {edu.degree}
                  </p>

                  {edu.gpa && (
                    <div className="mb-4 flex items-center gap-2">
                      <span className="text-accent-green text-xs">GPA:</span>
                      <span className="text-text-primary font-bold">{edu.gpa}</span>
                    </div>
                  )}

                  {edu.achievement && (
                    <div className="mb-4 text-accent-green text-xs italic">
                      - {edu.achievement}
                    </div>
                  )}

                  {edu.highlight && (
                    <div className="mb-4 text-accent-green text-xs italic">
                      - {edu.highlight}
                    </div>
                  )}

                  {edu.courses && (
                    <div className="mt-auto">
                      <div className="text-[10px] text-text-secondary uppercase tracking-widest mb-2">
                        Key Courses:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.slice(0, 4).map((course, idx) => (
                          <span
                            key={idx}
                            className="text-[9px] border border-border-muted px-2 py-1 text-text-secondary hover:border-accent-green hover:text-accent-green transition-all duration-300"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {edu.link && (
                    <a
                      href={edu.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 flex items-center gap-2 text-accent-blue text-xs hover:gap-3 transition-all duration-300"
                    >
                      [VIEW_CREDENTIAL] →
                    </a>
                  )}
                </div>

                {/* Decorative corner accent */}
                <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-${edu.color}/20 to-transparent pointer-events-none`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
