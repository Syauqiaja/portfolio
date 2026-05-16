import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-surface border-t border-border-muted flex flex-col md:flex-row justify-between items-center w-full px-4 md:px-margin-desktop py-4 md:h-8 fixed bottom-0 z-50">
      <div className="text-label-caps text-text-secondary tracking-widest text-[10px] mb-2 md:mb-0 uppercase">
        SYSTEM_READY // 2026 SYAUQI_PORTFOLIO // BUILD: V3.0.0-STABLE
      </div>
      
      <div className="flex gap-4 md:gap-gutter text-[10px] text-text-secondary uppercase">
        <span className="hover:text-accent-green transition-colors cursor-pointer border-r border-border-muted pr-4">
          Status: Available
        </span>
        <span className="hover:text-accent-green transition-colors cursor-pointer border-r border-border-muted pr-4">
          Response: &lt;24h
        </span>
        <span className="hover:text-accent-green transition-colors cursor-pointer">
          Loc: Malang, ID
        </span>
      </div>
    </footer>
  );
};

export default Footer;
