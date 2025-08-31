import React from "react";
import { SocialLinksProps } from "../../types";

const SocialLinks = ({
  links,
  className = "",
  showLabel = true,
}: SocialLinksProps) => {
  return (
    <div className={`flex items-center gap-6 ${className}`}>
      {showLabel && (
        <div className="flex items-center gap-4">
          <span className="text-sm text-foreground/60 font-mono">Connect:</span>
          <div className="flex items-center gap-3">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-2 rounded-full hover:bg-foreground/5 focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:ring-offset-2 focus:ring-offset-background transition-colors duration-200"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SocialLinks;