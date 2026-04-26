import type { Metadata } from "next";
import ContactModal from "@/components/ContactModal";

export const metadata: Metadata = {
  title: "Projects | Corey - Software Developer",
  description: "Explore my portfolio of web applications and software projects. From full-stack applications to creative digital solutions, see how I combine technical expertise with problem-solving.",
  keywords: ["software developer", "web development", "portfolio", "projects", "TypeScript", "React", "Next.js"],
  openGraph: {
    title: "Projects | Corey - Software Developer",
    description: "Explore my portfolio of web applications and software projects built with modern technologies.",
    type: "website",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      {/* Projects section header */}
      <div className="bg-background/50 backdrop-blur-sm border-b border-foreground/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-[100px]">
          <div className="font-mono text-[11px] font-medium tracking-[0.1em] uppercase text-accent mb-3">
            {'// the work'}
          </div>
          <h1 className="text-[40px] font-bold tracking-[-0.02em] text-foreground mb-4 leading-tight">
            Built from the inside out.
          </h1>
          <p className="text-base leading-[1.7] text-foreground/60 max-w-[560px]">
            Every project here solves a problem I&apos;ve personally lived. The domain expertise isn&apos;t decoration — it&apos;s the foundation.
          </p>
        </div>
      </div>
      
      {/* Projects content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {children}
      </main>
      <ContactModal />
    </div>
  );
}