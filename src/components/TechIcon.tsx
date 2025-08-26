'use client';

import React from 'react';
import Image from 'next/image';

// Technology names and their corresponding icon paths
export type TechName = 
  | 'typescript' 
  | 'javascript' 
  | 'react' 
  | 'nextjs' 
  | 'nodejs' 
  | 'mongodb' 
  | 'supabase' 
  | 'claude';

// Size variants for responsive design
export type TechIconSize = 'sm' | 'md' | 'lg' | 'xl';

// Component props interface
export interface TechIconProps {
  name: TechName;
  label?: string;
  size?: TechIconSize;
  showLabel?: boolean;
  animate?: boolean;
  glowEffect?: boolean;
  className?: string;
}

// Icon configuration with paths and brand colors
const techConfig: Record<TechName, {
  path: string;
  brandColor: string;
  label: string;
}> = {
  typescript: {
    path: '/icons/typescript.svg',
    brandColor: '#3178c6',
    label: 'TypeScript'
  },
  javascript: {
    path: '/icons/javascript.svg',
    brandColor: '#f7df1e',
    label: 'JavaScript'
  },
  react: {
    path: '/icons/react.svg',
    brandColor: '#61dafb',
    label: 'React'
  },
  nextjs: {
    path: '/icons/nextjs.svg',
    brandColor: 'var(--foreground)',
    label: 'Next.js'
  },
  nodejs: {
    path: '/icons/node-js.svg',
    brandColor: '#339933',
    label: 'Node.js'
  },
  mongodb: {
    path: '/icons/mongodb-icon.svg',
    brandColor: 'var(--tech-mongodb)',
    label: 'MongoDB'
  },
  supabase: {
    path: '/icons/supabase-icon.svg',
    brandColor: '#3ecf8e',
    label: 'Supabase'
  },
  claude: {
    path: '/icons/claude.svg',
    brandColor: '#d97757',
    label: 'Claude AI'
  }
};

// Size mapping for icon dimensions
const sizeMap: Record<TechIconSize, {
  iconSize: number;
  containerClass: string;
}> = {
  sm: {
    iconSize: 16,
    containerClass: 'w-4 h-4'
  },
  md: {
    iconSize: 20,
    containerClass: 'w-5 h-5'
  },
  lg: {
    iconSize: 24,
    containerClass: 'w-6 h-6'
  },
  xl: {
    iconSize: 32,
    containerClass: 'w-8 h-8'
  }
};

const TechIcon: React.FC<TechIconProps> = ({
  name,
  label,
  size = 'md',
  showLabel = false,
  animate = false,
  glowEffect = false,
  className = ''
}) => {
  const config = techConfig[name];
  const sizeConfig = sizeMap[size];
  const displayLabel = label || config.label;

  if (!config) {
    console.warn(`TechIcon: Unknown technology name "${name}"`);
    return null;
  }

  const iconElement = (
    <div 
      className={`
        tech-icon-container relative inline-flex items-center justify-center transition-all duration-300
        ${sizeConfig.containerClass}
        ${animate ? 'hover:scale-110' : ''}
        ${glowEffect ? 'tech-icon-glow' : ''}
        ${className}
      `}
      style={{
        '--tech-brand-color': config.brandColor,
        filter: glowEffect ? 'drop-shadow(0 0 0px var(--tech-brand-color))' : undefined,
        transition: 'all 0.3s ease',
        willChange: animate || glowEffect ? 'transform, filter' : 'auto'
      } as React.CSSProperties}
      onMouseEnter={(e) => {
        if (glowEffect && window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
          e.currentTarget.style.filter = `drop-shadow(0 0 8px ${config.brandColor}40)`;
        }
      }}
      onMouseLeave={(e) => {
        if (glowEffect) {
          e.currentTarget.style.filter = 'drop-shadow(0 0 0px var(--tech-brand-color))';
        }
      }}
      tabIndex={animate ? 0 : -1}
      role={animate ? 'button' : 'img'}
      aria-label={`${displayLabel} technology icon`}
    >
      <Image
        src={config.path}
        alt=""
        width={sizeConfig.iconSize}
        height={sizeConfig.iconSize}
        className={`
          tech-icon transition-all duration-300
          ${name === 'nextjs' ? 'dark:invert' : ''}
        `}
        priority={size === 'lg' || size === 'xl'}
        loading={size === 'sm' ? 'lazy' : 'eager'}
      />
    </div>
  );

  if (showLabel) {
    return (
      <div className="inline-flex items-center gap-2">
        {iconElement}
        <span className="text-sm font-medium font-mono">
          {displayLabel}
        </span>
      </div>
    );
  }

  return iconElement;
};

export default TechIcon;