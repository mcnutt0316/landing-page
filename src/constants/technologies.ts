import { TechName } from "../components/TechIcon";
import { TechItem, AnimationConfig } from "../types";

// Override TechItem to use TechName instead of string
interface TechOrbitItem extends Omit<TechItem, 'name'> {
  name: TechName;
}

export const techOrbitItems: TechOrbitItem[] = [
  { name: "react", angle: 0 },
  { name: "typescript", angle: 60 },
  { name: "nextjs", angle: 120 },
  { name: "javascript", angle: 180 },
  { name: "nodejs", angle: 240 },
  { name: "mongodb", angle: 300 },
];

export const featuredTechnologies: TechName[] = [
  "react",
  "typescript", 
  "nextjs",
  "nodejs"
];

export const animationConfig: AnimationConfig = {
  orbitDuration: 18, // seconds
  orbitMobileDuration: 22, // seconds  
  techRotateDuration: 8, // seconds
  techRotateDelay: 2, // seconds per item
};