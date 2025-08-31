import React from "react";
import Link from "next/link";
import { ButtonProps } from "../../types";

const Button = ({
  variant = "primary",
  size = "md",
  children,
  href,
  onClick,
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) => {
  const baseClasses = "inline-flex items-center justify-center font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background transition-colors duration-200";
  
  const variantClasses = {
    primary: "bg-accent text-accent-foreground hover:bg-accent/90 focus:ring-accent",
    secondary: "border border-foreground/20 text-foreground hover:bg-foreground/5 focus:ring-foreground/20",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${classes} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {children}
    </button>
  );
};

export default Button;