import React from 'react';

const Hero: React.FC = () => {
  const techStack = ['TypeScript', 'JavaScript', 'Next.js', 'React', 'Node.js', 'MongoDB', 'Supabase'];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 bg-background relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        {/* Role Badge */}
        <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-medium bg-foreground/5 text-foreground/70 border border-foreground/10 mb-6">
          Software Developer & Creator
        </div>

        {/* Primary Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-sans font-bold tracking-tight text-foreground leading-[1.1]">
          👋 Hi, I&apos;m Corey — Software Developer & Creator
        </h1>

        {/* Subheadline */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-sans font-medium text-foreground/80 leading-relaxed max-w-3xl mx-auto">
          From the open road to the digital world, I specialize in building web applications that make life easier, smarter, and more enjoyable.
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg text-foreground/60 leading-relaxed max-w-2xl mx-auto">
          Combining technical expertise with creative problem-solving, I craft digital solutions that truly make a difference.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-4">
          <button className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-medium rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background transition-colors duration-200">
            View My Work
          </button>
          <button className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-medium rounded-lg border border-foreground/20 text-foreground hover:bg-foreground/5 focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:ring-offset-2 focus:ring-offset-background transition-colors duration-200">
            Get In Touch
          </button>
        </div>

        {/* Tech Stack Display */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-2xl mx-auto">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center px-3 py-1.5 text-sm font-mono font-medium bg-foreground/5 text-foreground/70 rounded-md border border-foreground/10"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;