'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import TechIcon, { TechName } from './TechIcon';

const Hero = () => {

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 pb-8 sm:pb-12 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <div className="text-center lg:text-left space-y-8 order-2 lg:order-1">
            {/* Role Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-medium bg-foreground/5 text-foreground/70 border border-foreground/10 mb-6">
              Software Developer & Creator
            </div>

            {/* Primary Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-sans font-bold tracking-tight text-foreground leading-[1.1]">
              👋 Hi, I&apos;m Corey — Software Developer & Creator
            </h1>

            {/* Subheadline */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-sans font-medium text-foreground/80 leading-relaxed lg:max-w-none max-w-3xl mx-auto lg:mx-0">
              From the open road to the digital world, I specialize in building web applications that make life easier, smarter, and more enjoyable.
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-foreground/60 leading-relaxed lg:max-w-none max-w-2xl mx-auto lg:mx-0">
              Combining technical expertise with creative problem-solving, I craft digital solutions that truly make a difference.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start items-center pt-4">
              <Link href="/work" className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-medium rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background transition-colors duration-200">
                View My Work
              </Link>
              <button className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-medium rounded-lg border border-foreground/20 text-foreground hover:bg-foreground/5 focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:ring-offset-2 focus:ring-offset-background transition-colors duration-200">
                Get In Touch
              </button>
            </div>

            {/* Enhanced Status Indicator with Tech Showcase */}
            <div className="flex items-center justify-center lg:justify-start gap-3 text-sm text-foreground/60">
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="font-mono">Available for new opportunities</span>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-xs">
                <span className="text-foreground/40">•</span>
                <span className="text-foreground/40">Building with</span>
                <div className="relative w-4 h-4 tech-rotate-container">
                  {[
                    'react',
                    'typescript', 
                    'nextjs',
                    'nodejs'
                  ].map((tech, index) => (
                    <div
                      key={tech}
                      className="absolute inset-0 tech-rotate-item opacity-0"
                      style={{
                        animationDelay: `${index * 2}s`,
                        animationDuration: '8s'
                      }}
                    >
                      <TechIcon 
                        name={tech as TechName} 
                        size="sm" 
                        glowEffect={false}
                        animate={false}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              {/* Profile Image */}
              <Image
                src="/profile-picture.jpg"
                alt="Corey - Software Developer and Creator, smiling warmly in a tropical shirt"
                width={300}
                height={300}
                className="rounded-full shadow-xl ring-2 ring-foreground/10 hover:scale-105 transition-transform duration-300 w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 object-cover relative z-10"
                priority
              />
              
              {/* Floating Tech Orbit Animation */}
              <div className="absolute inset-0 pointer-events-none">
                {[
                  { name: 'react' as TechName, delay: '0s', radius: '140%' },
                  { name: 'typescript' as TechName, delay: '3s', radius: '135%' },
                  { name: 'nextjs' as TechName, delay: '6s', radius: '145%' },
                  { name: 'javascript' as TechName, delay: '9s', radius: '150%' },
                  { name: 'nodejs' as TechName, delay: '12s', radius: '138%' },
                  { name: 'mongodb' as TechName, delay: '15s', radius: '142%' }
                ].map((tech, index) => (
                  <div
                    key={tech.name}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 orbit-container"
                    style={{
                      width: tech.radius,
                      height: tech.radius,
                      animationDelay: tech.delay,
                      animationDuration: '20s'
                    }}
                  >
                    <div className="relative w-full h-full orbit-rotation">
                      <div 
                        className="absolute -top-3 left-1/2 -translate-x-1/2 opacity-30 hover:opacity-60 transition-opacity duration-300"
                        style={{
                          transform: `rotate(-${index * 60}deg)`
                        }}
                      >
                        <TechIcon 
                          name={tech.name} 
                          size="md" 
                          glowEffect={false}
                          animate={false}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animation styles for orbit effect */}
      <style jsx>{`
        .orbit-container {
          animation: orbit 20s linear infinite;
        }
        
        .orbit-rotation {
          animation: rotate 20s linear infinite reverse;
        }
        
        @keyframes orbit {
          0% {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
        
        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(-360deg);
          }
        }
        
        /* Tech rotation animation for status indicator */
        .tech-rotate-item {
          animation: techFadeInOut 8s infinite;
        }
        
        @keyframes techFadeInOut {
          0%, 20% {
            opacity: 0;
            transform: scale(0.8);
          }
          25%, 45% {
            opacity: 1;
            transform: scale(1);
          }
          50%, 100% {
            opacity: 0;
            transform: scale(0.8);
          }
        }
        
        /* Reduced motion preference support */
        @media (prefers-reduced-motion: reduce) {
          .orbit-container,
          .orbit-rotation {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
          }
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .orbit-container {
            animation-duration: 25s;
          }
          .orbit-rotation {
            animation-duration: 25s;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;