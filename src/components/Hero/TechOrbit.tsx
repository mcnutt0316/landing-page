"use client";

import React from "react";
import TechIcon from "../TechIcon";
import { techOrbitItems, animationConfig } from "../../constants/technologies";
import styles from "./TechOrbit.module.css";

const TechOrbit = () => {
  return (
    <>
      {/* Floating Tech Orbit Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {techOrbitItems.map((tech) => (
          <div
            key={tech.name}
            className={`absolute top-1/2 left-1/2 ${styles.orbitContainer} group`}
            style={{
              "--start-angle": `${tech.angle}deg`,
              animationDelay: "0s",
              animationDuration: `${animationConfig.orbitDuration}s`,
            } as React.CSSProperties}
          >
            <div
              className={`absolute ${styles.orbitIcon} opacity-80 hover:opacity-100 hover:scale-125 transition-all duration-300 cursor-pointer`}
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
    </>
  );
};

export default TechOrbit;