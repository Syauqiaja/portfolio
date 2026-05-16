import React, { useState } from 'react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-surface/80 backdrop-blur-md border-b border-border-muted flex justify-between items-center w-full px-4 md:px-8 lg:px-margin-desktop h-14 fixed top-0 z-[60] overflow-hidden">
      <div className="text-headline-md text-accent-green uppercase tracking-tighter flex items-center gap-2 flex-shrink-0">
        <span className="w-2 h-2 bg-accent-green rounded-full animate-pulse"></span>
        <span className="hidden sm:inline">SYAUQI@DEV:~</span>
        <span className="sm:hidden">SYAUQI</span>
      </div>
      
      <nav className="hidden lg:flex gap-4 xl:gap-8 text-label-caps uppercase tracking-widest text-text-secondary flex-shrink-0">
        <a className="hover:text-accent-green transition-colors py-1 border-b border-transparent hover:border-accent-green whitespace-nowrap" href="#home">01_HOME</a>
        <a className="hover:text-accent-green transition-colors py-1 border-b border-transparent hover:border-accent-green whitespace-nowrap" href="#skills">02_SKILLS</a>
        <a className="hover:text-accent-green transition-colors py-1 border-b border-transparent hover:border-accent-green whitespace-nowrap" href="#education">03_EDU</a>
        <a className="hover:text-accent-green transition-colors py-1 border-b border-transparent hover:border-accent-green whitespace-nowrap" href="#experience">04_EXP</a>
        <a className="hover:text-accent-green transition-colors py-1 border-b border-transparent hover:border-accent-green whitespace-nowrap" href="#projects">05_PROJ</a>
        <a className="hover:text-accent-green transition-colors py-1 border-b border-transparent hover:border-accent-green whitespace-nowrap" href="#contact">06_CONTACT</a>
      </nav>
      
      <div className="flex gap-4 items-center flex-shrink-0">
        <button 
          className="lg:hidden text-accent-green text-2xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>
        <span className="hidden lg:block text-accent-green text-xl cursor-pointer hover:bg-surface transition-all p-1">▣</span>
      </div>

      {mobileMenuOpen && (
        <div className="absolute top-14 left-0 right-0 bg-surface border-b border-border-muted lg:hidden">
          <nav className="flex flex-col p-4 gap-4 text-label-caps uppercase tracking-widest text-text-secondary">
            <a className="hover:text-accent-green transition-colors" href="#home" onClick={() => setMobileMenuOpen(false)}>01_HOME</a>
            <a className="hover:text-accent-green transition-colors" href="#skills" onClick={() => setMobileMenuOpen(false)}>02_SKILLS</a>
            <a className="hover:text-accent-green transition-colors" href="#education" onClick={() => setMobileMenuOpen(false)}>03_EDUCATION</a>
            <a className="hover:text-accent-green transition-colors" href="#experience" onClick={() => setMobileMenuOpen(false)}>04_EXPERIENCE</a>
            <a className="hover:text-accent-green transition-colors" href="#projects" onClick={() => setMobileMenuOpen(false)}>05_PROJECTS</a>
            <a className="hover:text-accent-green transition-colors" href="#contact" onClick={() => setMobileMenuOpen(false)}>06_CONTACT</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
