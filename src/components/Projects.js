import React from 'react';

const allProjects = [
  {
    id: 'HERBIFY_APP',
    title: 'HERBIFY_TELEMEDICINE',
    description: 'Led Herbal Telemedicine platform development for Indonesia, leveraging ML image classification. Switched from MVVM to Clean Architecture with modularization for scalability. Top 3 Best Capstone Project Bangkit 2023, securing IDR 140M funding from Google and Dikti.',
    tags: ['KOTLIN', 'CLEAN_ARCH', 'ML', 'MVVM'],
    image: 'https://placehold.co/600x400/EEE/31343C',
    version: 'PRODUCTION // v3.2.1',
    link: 'https://play.google.com/store/apps/details?id=com.herbify.herbifyapp'
  },
  {
    id: 'VRLABORATORY_LMS',
    title: 'VRLABORATORY_LMS',
    description: 'Engineered VR-integrated Learning Management System using Laravel Volt and Tailwind CSS, enabling immersive laboratory simulations with RESTful API backend.',
    tags: ['LARAVEL', 'VR', 'API'],
    image: 'https://placehold.co/600x400/EEE/31343C',
    version: 'PRODUCTION // v2.1.0',
    link: 'http://vrlaboratory.bio'
  },
  {
    id: 'VIRULEARN_PLATFORM',
    title: 'VIRULEARN_PLATFORM',
    description: 'Developed LMS in collaboration with Inovasiin.Id for interactive virus education. Implemented responsive UI with Bootstrap and Laravel Livewire for dynamic content.',
    tags: ['LIVEWIRE', 'BOOTSTRAP'],
    image: 'https://placehold.co/600x400/EEE/31343C',
    version: 'LIVE // v1.5.3',
    link: 'https://virulearn.com'
  },
  {
    id: 'PLANTELLIGENCE',
    title: 'PLANTELLIGENCE',
    description: 'Built an interactive digital flipbook application using Laravel Livewire for real-time rendering and TurnJS for page-turning animations, delivering an enhanced user reading experience.',
    tags: ['LARAVEL', 'LIVEWIRE', 'TURNJS'],
    image: 'https://placehold.co/600x400/EEE/31343C',
    version: 'LIVE // v1.0.0',
    link: 'https://plantelligence.bio'
  }
];

const Projects = () => {
  return (
    <section className="min-h-screen px-4 md:px-margin-desktop py-24 bg-surface/10 border-t border-border-muted" id="projects">
      <div className="max-w-container mx-auto w-full">
        <div className="mb-16 text-center">
          <h2 className="text-headline-lg text-text-primary uppercase tracking-[0.4em] mb-4">
            04 // RECENT_DEPLOYMENTS
          </h2>
          <div className="flex justify-center gap-1">
            <div className="w-12 h-1 bg-text-secondary"></div>
            <div className="w-4 h-1 bg-border-muted"></div>
            <div className="w-2 h-1 bg-border-muted"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {allProjects.map((project) => (
            <div 
              key={project.id} 
              className="hud-border bg-surface/50 group hover:bg-surface transition-all overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img 
                  alt={project.title} 
                  className="w-full aspect-video object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105" 
                  src={project.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-canvas to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4 bg-text-secondary/90 text-canvas px-3 py-1 text-[10px] tracking-widest uppercase font-semibold">
                  {project.version}
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-headline-md text-text-primary group-hover:text-accent-green transition-colors uppercase">
                  {project.title}
                </h3>
                <p className="text-body-sm text-text-secondary leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="border border-border-muted px-2 py-1 text-[10px] text-text-secondary uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-accent-green hover:gap-4 transition-all group/btn text-sm"
                >
                  [VIEW_PROJECT] <span className="text-sm">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
