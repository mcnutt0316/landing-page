"use client";

import React from "react";
import TechIcon, { TechName } from "../TechIcon";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import SocialLinks from "../ui/SocialLinks";
import { socialLinks } from "../../constants/socialLinks";
import { featuredTechnologies, animationConfig } from "../../constants/technologies";
import styles from "./Hero.module.css";

const HeroContent = () => {
  return (
    <div className="text-center lg:text-left space-y-8 order-2 lg:order-1">
      {/* Role Badge */}
      <Badge className="mb-6">
        Software Developer & Creator
      </Badge>

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
        <Button href="/projects" variant="primary" size="lg">
          View My Work
        </Button>
        <Button variant="secondary" size="lg">
          Get In Touch
        </Button>
      </div>

      {/* Social Links */}
      <SocialLinks 
        links={socialLinks} 
        className="justify-center lg:justify-start pt-6" 
      />

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
            {featuredTechnologies.map(
              (tech, index) => (
                <div
                  key={tech}
                  className={`absolute inset-0 ${styles.techRotateItem} opacity-0`}
                  style={{
                    animationDelay: `${index * animationConfig.techRotateDelay}s`,
                    animationDuration: `${animationConfig.techRotateDuration}s`,
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
  );
};

export default HeroContent;