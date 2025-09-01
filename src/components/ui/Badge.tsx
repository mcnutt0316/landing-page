import React from "react";
import { BadgeProps } from "../../types";

const Badge = ({
  children,
  variant = "default",
  size = "md",
  className = "",
}: BadgeProps) => {
  const baseClasses = "inline-flex items-center rounded-full font-mono font-medium relative z-10";
  
  const variantClasses = {
    default: "bg-foreground/5 text-foreground/70 border border-foreground/10",
    accent: "bg-accent/10 text-accent border border-accent/20",
    status: "bg-green-500/10 text-green-600 border border-green-500/20",
  };

  const sizeClasses = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-3 py-1 text-xs",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

export default Badge;