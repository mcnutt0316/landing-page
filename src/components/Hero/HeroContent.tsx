"use client";

import React from "react";
import TechIcon, { TechName } from "../TechIcon";
import Button from "../ui/Button";
import SocialLinks from "../ui/SocialLinks";
import { socialLinks } from "../../constants/socialLinks";
import { featuredTechnologies, animationConfig } from "../../constants/technologies";
import { useContactModal } from "../../store/useContactModal";
import styles from "./Hero.module.css";

const HeroContent = () => {
  const { openModal } = useContactModal();

  return (
    <div className="text-center lg:text-left space-y-8 order-2 lg:order-1">
      {/* Pill badge with animated green dot */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-mono text-xs font-semibold tracking-wide">
        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
        self-taught · no degree · no bootcamp
      </div>

      {/* Primary Headline — three lines, last has accent emphasis */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-sans font-extrabold tracking-[-0.03em] text-foreground leading-[1.08]">
        I drove trucks.
        <br />
        I earned a black belt.
        <br />
        Then I <em className="not-italic text-accent">taught myself</em> to code.
      </h1>

      {/* Subheadline */}
      <h2 className="text-lg sm:text-xl font-sans font-normal text-foreground/60 leading-[1.65] lg:max-w-[540px] max-w-3xl mx-auto lg:mx-0">
        <strong className="text-foreground font-semibold">I&apos;m Corey.</strong>{" "}
        I build full-stack web applications — and I come with domain expertise
        that no computer science program can teach. I know what good software
        feels like to the people who actually need it.
      </h2>

      {/* Flat tech stack reference line */}
      <p className="text-[15px] text-foreground/40 font-sans leading-relaxed lg:max-w-none max-w-2xl mx-auto lg:mx-0">
        TypeScript · React · Next.js · Node.js · C# · ASP.NET Core · PostgreSQL
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start items-center pt-4">
        <Button href="/projects" variant="primary" size="lg">
          View My Work
        </Button>
        <Button variant="secondary" size="lg" onClick={openModal}>
          Get In Touch
        </Button>
      </div>

      {/* Social Links */}
      <SocialLinks
        links={socialLinks}
        className="justify-center lg:justify-start pt-6"
      />

      {/* Status row — green available indicator + supporting credentials + rotating tech icon */}
      <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-2 font-mono text-xs text-foreground/40">
        <div className="flex items-center gap-2">
          <span className="flex h-1.5 w-1.5 bg-green-500 rounded-full animate-pulse" />
          <span>Available for new opportunities</span>
        </div>
        <span className="text-foreground/30">·</span>
        <span>2nd place, hackathon 2024</span>
        <span className="text-foreground/30">·</span>
        <span>BJJ black belt</span>
        {/* Rotating tech icon — keeps the small "Building with [icon]" cue */}
        <span className="hidden sm:inline text-foreground/30">·</span>
        <div className="hidden sm:flex items-center gap-2">
          <span>Building with</span>
          <div className="relative w-4 h-4 tech-rotate-container">
            {featuredTechnologies.map((tech, index) => (
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
