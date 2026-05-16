import React from 'react';

const Contact = () => {
  return (
    <section className="min-h-[60vh] flex items-center px-4 md:px-margin-desktop py-24 bg-canvas relative" id="contact">
      <div className="max-w-2xl mx-auto w-full text-center">
        <h2 className="text-headline-lg text-text-primary uppercase tracking-[0.4em] mb-8">
          05 // OPEN_COMM_CHANNEL
        </h2>
        
        <div className="hud-border hud-corner p-10 bg-surface/40 backdrop-blur-sm">
          <p className="text-body-base text-text-secondary mb-10">
            Available for software development opportunities in mobile and web development. Open to remote and on-site positions.
          </p>
          
          <div className="grid grid-cols-1 gap-6">
            <a 
              className="border border-border-muted text-accent-green py-4 px-8 hover:bg-accent-green hover:text-canvas transition-all flex items-center justify-center gap-3 group" 
              href="mailto:fajrudinsauqi@gmail.com"
            >
              <span>✉</span>
              INIT_MAIL_TRANSFER
              <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </a>
            
            <a 
              className="border border-border-muted text-text-primary py-4 px-8 hover:bg-text-secondary hover:text-canvas transition-all flex items-center justify-center gap-3 group" 
              href="/resume/Resume_Syauqi_Fullstack_Developer-3.pdf"
              download="Ahmad_Fajruddin_Syauqi_Resume.pdf"
            >
              <span>📄</span>
              DOWNLOAD_RESUME.PDF
              <span className="opacity-0 group-hover:opacity-100 transition-opacity">↓</span>
            </a>
            
            <div className="flex justify-center gap-8">
              <a className="text-text-secondary hover:text-accent-blue transition-colors text-body-sm" href="https://github.com/syauqiaja" target="_blank" rel="noopener noreferrer">
                [GITHUB]
              </a>
              <a className="text-text-secondary hover:text-accent-blue transition-colors text-body-sm" href="https://www.linkedin.com/in/fajruddinsyauqi" target="_blank" rel="noopener noreferrer">
                [LINKEDIN]
              </a>
              <a className="text-text-secondary hover:text-accent-blue transition-colors text-body-sm" href="tel:+6289699188684" target="_blank" rel="noopener noreferrer">
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
