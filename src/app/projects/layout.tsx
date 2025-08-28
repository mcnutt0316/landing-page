import type { Metadata } from "next";

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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              My Projects
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              A collection of web applications and digital solutions I've built using modern technologies and creative problem-solving.
            </p>
          </div>
        </div>
      </div>
      
      {/* Projects content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {children}
      </main>
    </div>
  );
}