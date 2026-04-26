'use client';

import React from 'react';
import Link from 'next/link';
import TechIcon, { TechName } from './TechIcon';

const About = () => {
  return (
    <section className="pt-8 sm:pt-12 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-foreground mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="space-y-6 text-lg leading-relaxed text-foreground/80">
          <p>
            I transitioned from <span className="font-medium text-foreground">commercial truck driving</span> to software development — not because of a career seminar, but because the logistics software I used every day was broken and I wanted to fix it. I started learning <span className="font-medium text-foreground">TypeScript</span> at night and never stopped.
          </p>

          <p>
            I&apos;m a <span className="font-medium text-foreground">Brazilian Jiu-Jitsu black belt</span> with 10+ years on the mat. That sport taught me to stay methodical under pressure, to treat every failure as data, and to keep showing up. Those aren&apos;t soft skills — they&apos;re the whole job.
          </p>
        </div>

        {/* Link to full About page */}
        <div className="mt-8 text-center">
          <Link
            href="/about"
            className="inline-flex items-center gap-1.5 text-sm font-mono font-medium text-accent hover:text-foreground transition-colors duration-150"
          >
            Read the full story
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Technical Skills Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-sans font-semibold text-foreground mb-8 text-center">
            Technical Expertise
          </h3>
          
          {/* Primary Skills - Prominent Display */}
          <div className="mb-8">
            <h4 className="text-lg font-medium text-foreground/80 mb-4 text-center">Core Technologies</h4>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {[
                { name: 'typescript' as TechName, label: 'TypeScript' },
                { name: 'javascript' as TechName, label: 'JavaScript' },
                { name: 'csharp' as TechName, label: 'C#' },
                { name: 'nextjs' as TechName, label: 'Next.js' },
                { name: 'react' as TechName, label: 'React' },
                { name: 'reactnative' as TechName, label: 'React Native' },
                { name: 'nodejs' as TechName, label: 'Node.js' },
                { name: 'dotnetcore' as TechName, label: '.NET Core' }
              ].map((skill, index) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-center gap-3 px-4 py-3 bg-accent text-accent-foreground rounded-lg border border-accent hover:bg-accent/90 transition-all duration-300 hover:scale-105 shadow-sm group"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animation: 'fadeInUp 0.6s ease-out forwards'
                  }}
                >
                  <TechIcon 
                    name={skill.name} 
                    size="lg" 
                    glowEffect={true}
                    animate={true}
                  />
                  <span className="font-mono text-sm font-medium">{skill.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Secondary Skills */}
          <div className="mb-8">
            <h4 className="text-lg font-medium text-foreground/80 mb-4 text-center">Databases & Tools</h4>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { name: 'mongodb' as TechName, label: 'MongoDB' },
                { name: 'supabase' as TechName, label: 'Supabase' },
                { name: 'neon' as TechName, label: 'Neon' },
                { name: 'github' as TechName, label: 'GitHub' },
                { name: 'visualstudio' as TechName, label: 'Visual Studio' },
                { name: 'claude' as TechName, label: 'Claude AI' }
              ].map((skill, index) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-center gap-3 px-4 py-3 bg-foreground/5 text-foreground/80 rounded-lg border border-foreground/10 hover:bg-foreground/10 transition-all duration-300 hover:scale-105 group"
                  style={{
                    animationDelay: `${(index + 5) * 0.1}s`,
                    animation: 'fadeInUp 0.6s ease-out forwards'
                  }}
                >
                  <TechIcon 
                    name={skill.name} 
                    size="md" 
                    glowEffect={true}
                    animate={true}
                  />
                  <span className="font-mono text-sm font-medium">{skill.label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
      
      {/* Animation keyframes - injected via style tag for performance */}
      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Reduced motion preference support */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;