import React, { useState } from 'react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-surface/80 backdrop-blur-md border-b border-border-muted flex justify-between items-center w-full px-4 md:px-margin-desktop h-14 fixed top-0 z-[60]">
      <div className="text-headline-md text-accent-green uppercase tracking-tighter flex items-center gap-2">
        <span className="w-2 h-2 bg-accent-green rounded-full animate-pulse"></span>
        SYAUQI@DEV:~
      </div>
      
      <nav className="hidden md:flex gap-8 text-label-caps uppercase tracking-widest text-text-secondary">
        <a className="hover:text-accent-green transition-colors py-1 border-b border-transparent hover:border-accent-green" href="#home">01_HOME</a>
        <a className="hover:text-accent-green transition-colors py-1 border-b border-transparent hover:border-accent-green" href="#skills">02_SKILLS</a>
        <a className="hover:text-accent-green transition-colors py-1 border-b border-transparent hover:border-accent-green" href="#education">03_EDUCATION</a>
        <a className="hover:text-accent-green transition-colors py-1 border-b border-transparent hover:border-accent-green" href="#experience">04_EXPERIENCE</a>
        <a className="hover:text-accent-green transition-colors py-1 border-b border-transparent hover:border-accent-green" href="#projects">05_PROJECTS</a>
        <a className="hover:text-accent-green transition-colors py-1 border-b border-transparent hover:border-accent-green" href="#contact">06_CONTACT</a>
      </nav>
      
      <div className="flex gap-4 items-center">
        <button 
          className="md:hidden text-accent-green text-2xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>
        <span className="hidden md:block text-accent-green text-xl cursor-pointer hover:bg-surface transition-all p-1">▣</span>
      </div>

      {mobileMenuOpen && (
        <div className="absolute top-14 left-0 right-0 bg-surface border-b border-border-muted md:hidden">
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
