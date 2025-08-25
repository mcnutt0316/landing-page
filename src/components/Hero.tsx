import React from 'react';
import Image from 'next/image';

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
              <button className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-medium rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background transition-colors duration-200">
                View My Work
              </button>
              <button className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-medium rounded-lg border border-foreground/20 text-foreground hover:bg-foreground/5 focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:ring-offset-2 focus:ring-offset-background transition-colors duration-200">
                Get In Touch
              </button>
            </div>

            {/* Value Proposition Teaser */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-foreground/60">
              <span className="flex h-2 w-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="font-mono">Available for new opportunities</span>
            </div>
          </div>

          {/* Image Column */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              <Image
                src="/profile-picture.jpg"
                alt="Corey - Software Developer and Creator, smiling warmly in a tropical shirt"
                width={300}
                height={300}
                className="rounded-full shadow-xl ring-2 ring-foreground/10 hover:scale-105 transition-transform duration-300 w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;