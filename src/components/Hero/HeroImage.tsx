"use client";

import React from "react";
import Image from "next/image";
import TechOrbit from "./TechOrbit";

const HeroImage = () => {
  return (
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

        {/* Tech Orbit Animation */}
        <TechOrbit />
      </div>
    </div>
  );
};

export default HeroImage;