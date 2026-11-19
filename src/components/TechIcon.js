import React from 'react';
import Icon from './Icon';
import { brandIcons, glyphFor } from '../techIcons';

/** Brand logo for a tool (Simple Icons), or a generic glyph when none exists. */
const TechIcon = ({ name, size = 16, className = '' }) => {
  const brand = brandIcons[name];
  if (brand) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={brand.hex}
        className={`shrink-0 ${className}`}
        aria-hidden="true"
      >
        <path d={brand.path} />
      </svg>
    );
  }
  return <Icon name={glyphFor(name)} size={size} className={`shrink-0 text-teal ${className}`} />;
};

export default TechIcon;
