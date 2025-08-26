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

        <div className="space-y-8 text-lg leading-relaxed text-foreground/80">
          <p>
            I&apos;m a software developer with a strong focus on <span className="font-medium text-foreground">TypeScript, JavaScript, Next.js, React, and Node.js</span>. I&apos;m also deeply experienced in database querying, with expertise in <span className="font-medium text-foreground">MongoDB and Supabase</span>.
          </p>

          <p>
            While I currently work as a truck driver, my true passion lies in creating digital solutions — crafting websites and applications that help people solve problems, save time, and even have fun in the process.
          </p>

          <p>
            Recently, I&apos;ve been leveraging <span className="font-medium text-foreground">AI tools to build faster and smarter</span>, accelerating the way I prototype, debug, and deliver projects. This has opened new possibilities in how I approach problem-solving and has sharpened my ability to create innovative solutions quickly.
          </p>

          <p>
            <span className="font-medium text-foreground">Curiosity is at the heart of who I am.</span> I love to learn continuously, experiment with new technologies, and push myself to grow as both a developer and a person.
          </p>

          <p>
            Outside of coding, I&apos;ve spent over a decade on the mats and earned the rank of <span className="font-medium text-foreground">black belt in Brazilian Jiu-Jitsu</span> — a journey that taught me discipline, resilience, and the art of solving problems one step at a time.
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
                { name: 'nextjs' as TechName, label: 'Next.js' },
                { name: 'react' as TechName, label: 'React' },
                { name: 'nodejs' as TechName, label: 'Node.js' }
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

          {/* Professional Approach */}
          <div className="text-center">
            <p className="text-base text-foreground/70 italic">
              Continuously expanding my toolkit to deliver cutting-edge solutions
            </p>
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