'use client';

import React from 'react';
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
            I&apos;m a self-taught developer working in <span className="font-medium text-foreground">TypeScript, JavaScript, Next.js, React, and Node.js</span>, with a solid handle on databases like <span className="font-medium text-foreground">MongoDB, Supabase, and Neon</span>. I transitioned into software from truck driving because I genuinely love building things.
          </p>

          <p>
            I lean hard into <span className="font-medium text-foreground">AI tools</span> to move faster and ship better work. It&apos;s changed how I prototype and debug, and I think it&apos;s just a smarter way to build.
          </p>

          <p>
            When I&apos;m not coding, I&apos;m on the mats. I&apos;m a <span className="font-medium text-foreground">Brazilian Jiu-Jitsu black belt</span> with over a decade of training. That sport taught me more about patience and problem-solving than anything else.
          </p>
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