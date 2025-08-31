import { ReactNode } from "react";

// Base component props interface
export interface BaseComponentProps {
  className?: string;
  children?: ReactNode;
}

// UI Component Props
export interface ButtonProps extends BaseComponentProps {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export interface BadgeProps extends BaseComponentProps {
  variant?: "default" | "accent" | "status";
  size?: "sm" | "md";
}

export interface SocialLink {
  name: string;
  href: string;
  label: string;
  icon: ReactNode;
}

export interface SocialLinksProps extends BaseComponentProps {
  links: SocialLink[];
  showLabel?: boolean;
}

// Technology related types
export interface TechItem {
  name: string;
  angle: number;
}

// Animation configuration
export interface AnimationConfig {
  orbitDuration: number;
  orbitMobileDuration: number;
  techRotateDuration: number;
  techRotateDelay: number;
}