"use client";

import React from "react";
import TechIcon, { TechName } from "../TechIcon";
import { OrbitingCircles } from "../ui/OrbitingCircles";

const outerIcons: TechName[] = ["react", "typescript", "nextjs", "nodejs", "javascript"];
const innerIcons: TechName[] = ["csharp", "dotnetcore", "reactnative"];

const IconSlot = ({ name, size }: { name: TechName; size: "md" | "lg" }) => (
  <div className="flex items-center justify-center w-full h-full rounded-full bg-background/90 backdrop-blur-sm border border-foreground/10 shadow-lg">
    <TechIcon name={name} size={size} glowEffect={false} animate={false} />
  </div>
);

const TechOrbit = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <OrbitingCircles iconSize={48} radius={175} duration={20} path>
        {outerIcons.map((name) => (
          <IconSlot key={name} name={name} size="lg" />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={40} radius={112} duration={15} reverse path>
        {innerIcons.map((name) => (
          <IconSlot key={name} name={name} size="md" />
        ))}
      </OrbitingCircles>
    </div>
  );
};

export default TechOrbit;
