import React from 'react';

const Contact = () => {
  return (
    <section className="min-h-[60vh] flex items-center px-4 md:px-margin-desktop py-24 bg-canvas relative" id="contact">
      <div className="max-w-2xl mx-auto w-full text-center">
        <h2 className="text-headline-lg text-text-primary uppercase tracking-[0.4em] mb-8" data-aos="fade-up">
          06 // OPEN_COMM_CHANNEL
        </h2>
        
        <div className="hud-border hud-corner p-10 bg-surface/40 backdrop-blur-sm" data-aos="fade-up" data-aos-delay="200">
          <p className="text-body-base text-text-secondary mb-10">
            Available for software development opportunities in mobile and web development. Open to remote and on-site positions.
          </p>
          
          <div className="grid grid-cols-1 gap-6">
            <a 
              className="border border-border-muted text-accent-green py-4 px-8 hover:bg-accent-green hover:text-canvas transition-all duration-300 flex items-center justify-center gap-3 group hover:scale-105 hover:shadow-[0_0_20px_rgba(71,237,129,0.3)]" 
              href="mailto:fajrudinsauqi@gmail.com"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <span>✉</span>
              INIT_MAIL_TRANSFER
              <span className="opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1">→</span>
            </a>
            
            <a 
              className="border border-border-muted text-text-primary py-4 px-8 hover:bg-text-secondary hover:text-canvas transition-all duration-300 flex items-center justify-center gap-3 group hover:scale-105 hover:shadow-[0_0_20px_rgba(140,140,140,0.3)]" 
              href="/resume/Resume_Syauqi_Fullstack_Developer-3.pdf"
              download="Ahmad_Fajruddin_Syauqi_Resume.pdf"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <span>📄</span>
              DOWNLOAD_RESUME.PDF
              <span className="opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-y-1">↓</span>
            </a>
            
            <div className="flex justify-center gap-8" data-aos="fade" data-aos-delay="500">
              <a className="text-text-secondary hover:text-accent-blue transition-all duration-300 text-body-sm hover:scale-110 transform" href="https://github.com/syauqiaja" target="_blank" rel="noopener noreferrer">
                [GITHUB]
              </a>
              <a className="text-text-secondary hover:text-accent-blue transition-all duration-300 text-body-sm hover:scale-110 transform" href="https://www.linkedin.com/in/fajruddinsyauqi" target="_blank" rel="noopener noreferrer">
                [LINKEDIN]
              </a>
              <a className="text-text-secondary hover:text-accent-blue transition-all duration-300 text-body-sm hover:scale-110 transform" href="tel:+6289699188684" target="_blank" rel="noopener noreferrer">
                [PHONE]
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
