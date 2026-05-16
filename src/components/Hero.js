import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center px-4 md:px-margin-desktop py-20 bg-canvas relative overflow-hidden" id="home">
      <div className="max-w-container mx-auto w-full">
        {/* Big Title Section */}
        <div className="mb-16 text-center" data-aos="fade-down" data-aos-delay="200">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-4 tracking-tight">
            AHMAD FAJRUDDIN SYAUQI
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary tracking-wide" data-aos="fade-up" data-aos-delay="400">
            Software Developer • Mobile & Web Specialist
          </p>
          <div className="flex justify-center gap-2 mt-4" data-aos="fade-up" data-aos-delay="600">
            <span className="text-accent-green text-sm">Flutter</span>
            <span className="text-text-secondary">•</span>
            <span className="text-accent-green text-sm">Android</span>
            <span className="text-text-secondary">•</span>
            <span className="text-accent-green text-sm">Laravel</span>
          </div>
        </div>

        {/* Terminal and Avatar Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1" data-aos="fade-right" data-aos-delay="800">
            <div className="hud-border hud-corner p-8 bg-surface/50 backdrop-blur-sm crt-glow">
              <div className="flex items-center gap-2 mb-6 border-b border-border-muted pb-2">
                <div className="w-3 h-3 rounded-full bg-red-500 opacity-50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-50"></div>
                <div className="w-3 h-3 rounded-full bg-accent-green opacity-50"></div>
                <span className="ml-auto text-label-caps text-text-secondary">terminal.sh</span>
              </div>

              <div className="text-body-base">
                <div className="mb-4 text-accent-blue italic">Initializing fullstack_developer_v3...</div>
                <div className="mb-2">
                  <span className="text-accent-green">$</span>
                  <span className="text-text-primary"> whoami</span>
                </div>
                <div className="mb-4 text-text-primary">
                  Ahmad Fajruddin Syauqi - Software Developer specializing in mobile & web development with Flutter, Laravel, and Android native.
                </div>

                <div className="mb-2">
                  <span className="text-accent-green">$</span>
                  <span className="text-text-primary"> cat status.env</span>
                </div>
                <div className="mb-4 space-y-1">
                  <div className="flex gap-4">
                    <span className="text-accent-green">LOCATION:</span>
                    <span className="text-text-secondary">Malang, Indonesia</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-accent-green">EXPERIENCE:</span>
                    <span className="text-text-secondary">2+ Years</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-accent-green">STATUS:</span>
                    <span className="text-accent-green flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-accent-green rounded-full"></span>
                      AVAILABLE
                    </span>
                  </div>
                </div>

                <div className="flex items-center">
                  <span className="text-accent-green mr-2">$</span>
                  <span className="text-text-primary">contact --init</span>
                  <span className="terminal-cursor"></span>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center relative" data-aos="fade-left" data-aos-delay="800">
            <div className="relative group">
              <div className="absolute -inset-4 border border-border-muted pointer-events-none group-hover:border-text-secondary/40 transition-colors"></div>
              <div className="absolute -top-4 -left-4 w-4 h-4 border-t-2 border-l-2 border-text-secondary"></div>
              <div className="absolute -bottom-4 -right-4 w-4 h-4 border-b-2 border-r-2 border-text-secondary"></div>

              <div className="w-64 h-64 md:w-80 md:h-80 bg-surface border border-border-muted overflow-hidden transition-all duration-500">
                <img
                  alt="Ahmad Fajruddin Syauqi"
                  className="w-full h-full object-cover"
                  src="/images/me.jpeg"
                />
              </div>

              <div className="absolute -right-8 top-1/2 -translate-y-1/2 rotate-90 text-label-caps text-text-secondary tracking-[0.3em] whitespace-nowrap">
                UID: 0x2A4B9F
              </div>
            </div>
          </div>
          </div>
      </div>
    </section>
  );
};

export default Hero;
