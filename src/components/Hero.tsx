"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import TechIcon, { TechName } from "./TechIcon";

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
              From the open road to the digital world, I specialize in building
              web applications that make life easier, smarter, and more
              enjoyable.
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-foreground/60 leading-relaxed lg:max-w-none max-w-2xl mx-auto lg:mx-0">
              Combining technical expertise with creative problem-solving, I
              craft digital solutions that truly make a difference.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start items-center pt-4">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-medium rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background transition-colors duration-200"
              >
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
                <span className="font-mono">
                  Available for new opportunities
                </span>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-xs">
                <span className="text-foreground/40">•</span>
                <span className="text-foreground/40">Building with</span>
                <div className="relative w-4 h-4 tech-rotate-container">
                  {["react", "typescript", "nextjs", "nodejs"].map(
                    (tech, index) => (
                      <div
                        key={tech}
                        className="absolute inset-0 tech-rotate-item opacity-0"
                        style={{
                          animationDelay: `${index * 2}s`,
                          animationDuration: "8s",
                        }}
                      >
                        <TechIcon
                          name={tech as TechName}
                          size="sm"
                          glowEffect={false}
                          animate={false}
                        />
                      </div>
                    )
                  )}
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
                  { name: "react" as TechName, angle: 0 },
                  { name: "typescript" as TechName, angle: 60 },
                  { name: "nextjs" as TechName, angle: 120 },
                  { name: "javascript" as TechName, angle: 180 },
                  { name: "nodejs" as TechName, angle: 240 },
                  { name: "mongodb" as TechName, angle: 300 },
                ].map((tech, index) => (
                  <div
                    key={tech.name}
                    className="absolute top-1/2 left-1/2 orbit-container group"
                    style={{
                      "--start-angle": `${tech.angle}deg`,
                      animationDelay: "0s",
                      animationDuration: "18s",
                    } as React.CSSProperties}
                  >
                    <div
                      className="absolute orbit-icon opacity-80 hover:opacity-100 hover:scale-125 transition-all duration-300 cursor-pointer"
                      style={{
                        transform: `translateX(var(--orbit-radius))`,
                      }}
                    >
                      <div className="relative">
                        {/* Enhanced background with stronger contrast and dual-layer system */}
                        <div className="absolute inset-0 -z-10 bg-background/95 backdrop-blur-xl rounded-full scale-[1.8] group-hover:bg-background group-hover:scale-[1.9] transition-all duration-300 border-2 border-foreground/20 group-hover:border-foreground/30 shadow-xl shadow-foreground/10"></div>
                        {/* Enhanced secondary glow layer for better depth */}
                        <div className="absolute inset-0 -z-20 bg-accent/15 rounded-full scale-[2.2] blur-md group-hover:bg-accent/20 group-hover:scale-[2.3] transition-all duration-300"></div>
                        <TechIcon
                          name={tech.name}
                          size="lg"
                          glowEffect={true}
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
        /* CSS custom property for responsive orbit radius - optimized for visual hierarchy */
        .orbit-container {
          --orbit-radius: 200px; /* Default for lg screens - creates 40px breathing room */
          animation: orbit 18s linear infinite;
          transform-origin: center center;
        }

        /* Responsive orbit radius adjustments */
        @media (max-width: 1024px) {
          .orbit-container {
            --orbit-radius: 170px; /* md screens - maintains proportional spacing */
          }
        }

        @media (max-width: 640px) {
          .orbit-container {
            --orbit-radius: 140px; /* sm screens - adequate mobile spacing */
            animation-duration: 22s; /* Slower on mobile for better UX */
          }
        }

        @keyframes orbit {
          from {
            transform: translate(-50%, -50%) rotate(var(--start-angle, 0deg));
          }
          to {
            transform: translate(-50%, -50%) rotate(calc(var(--start-angle, 0deg) + 360deg));
          }
        }

        /* Orbit icon positioning with proper centering */
        .orbit-icon {
          left: 50%;
          top: 50%;
          transform-origin: center center;
          border-radius: 50%;
          padding: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Enhanced hover effects with professional glow and depth */
        .orbit-icon:hover {
          filter: drop-shadow(0 0 16px rgba(59, 130, 246, 0.5))
            drop-shadow(0 0 32px rgba(59, 130, 246, 0.25))
            drop-shadow(0 4px 12px rgba(0, 0, 0, 0.15));
          transform: translateY(-2px);
        }

        /* Group hover enhancement for better contrast */
        .orbit-container:hover .orbit-icon {
          opacity: 1;
        }

        /* Tech rotation animation for status indicator */
        .tech-rotate-item {
          animation: techFadeInOut 8s infinite;
        }

        @keyframes techFadeInOut {
          0%,
          20% {
            opacity: 0;
            transform: scale(0.8);
          }
          25%,
          45% {
            opacity: 1;
            transform: scale(1);
          }
          50%,
          100% {
            opacity: 0;
            transform: scale(0.8);
          }
        }

        /* Improved accessibility for reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .orbit-container {
            animation: none !important;
          }
          .orbit-icon {
            position: static !important;
            transform: none !important;
            display: inline-block;
            margin: 0 8px 8px 0;
            opacity: 0.8 !important;
            left: auto !important;
            top: auto !important;
          }
          .orbit-icon:hover {
            opacity: 1 !important;
            transform: scale(1.1) !important;
            filter: none !important;
          }
        }

        /* High contrast mode adjustments */
        @media (prefers-contrast: high) {
          .orbit-icon {
            background: var(--background);
            border: 2px solid var(--foreground);
            opacity: 1 !important;
          }
          .orbit-icon:hover {
            background: var(--accent);
            border-color: var(--accent);
          }
        }

        /* Performance optimization for smooth animation */
        .orbit-container,
        .orbit-icon {
          will-change: transform;
          backface-visibility: hidden;
          perspective: 1000px;
        }

        /* Glass effect for modern appearance */
        .orbit-icon > div > div {
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }

        /* Responsive enhancements for better mobile experience */
        @media (max-width: 480px) {
          .orbit-container {
            --orbit-radius: 110px; /* Extra small screens - optimal spacing for mobile */
            animation-duration: 24s; /* Even slower for smallest screens */
          }
          .orbit-icon {
            padding: 2px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
