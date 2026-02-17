import { TechName } from "../components/TechIcon";
import { TechItem, AnimationConfig } from "../types";

// Override TechItem to use TechName instead of string
interface TechOrbitItem extends Omit<TechItem, 'name'> {
  name: TechName;
}

export const techOrbitItems: TechOrbitItem[] = [
  { name: "react", angle: 0 },
  { name: "typescript", angle: 45 },
  { name: "csharp", angle: 90 },
  { name: "nextjs", angle: 135 },
  { name: "dotnetcore", angle: 180 },
  { name: "javascript", angle: 225 },
  { name: "reactnative", angle: 270 },
  { name: "nodejs", angle: 315 },
];

export const featuredTechnologies: TechName[] = [
  "react",
  "typescript",
  "nextjs",
  "nodejs",
  "csharp",
  "reactnative",
  "dotnetcore",
  "javascript"
];

export const animationConfig: AnimationConfig = {
  orbitDuration: 18, // seconds
  orbitMobileDuration: 22, // seconds  
  techRotateDuration: 8, // seconds
  techRotateDelay: 2, // seconds per item
};