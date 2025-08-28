import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

// This will be replaced with actual project data in Phase 2
const projects = {
  "sample-project": {
    title: "Sample Project",
    description: "A sample project to demonstrate the structure",
    longDescription: "This is a placeholder for individual project pages. In Phase 2, we'll populate this with real project data and create a proper project showcase.",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    status: "completed" as const,
    links: {
      demo: "https://example.com",
      github: "https://github.com/example/repo",
    },
  },
};

type ProjectSlug = keyof typeof projects;

export async function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects[slug as ProjectSlug];

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Corey - Software Developer`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Corey - Software Developer`,
      description: project.description,
      type: "website",
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects[slug as ProjectSlug];

  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-foreground/60">
        <Link href="/projects" className="hover:text-foreground transition-colors">
          Projects
        </Link>
        <span>/</span>
        <span className="text-foreground">{project.title}</span>
      </nav>

      {/* Project Header */}
      <header className="space-y-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
          {project.title}
        </h1>
        <p className="text-lg text-foreground/70">
          {project.description}
        </p>
      </header>

      {/* Project Content */}
      <div className="space-y-8">
        {/* Description */}
        <section className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-foreground/80 leading-relaxed">
            {project.longDescription}
          </p>
        </section>

        {/* Technologies */}
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm bg-foreground/10 text-foreground rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Links */}
        <section className="flex flex-col sm:flex-row gap-4">
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 transition-colors duration-200"
            >
              View Live Demo
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg border border-foreground/20 text-foreground hover:bg-foreground/5 focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:ring-offset-2 transition-colors duration-200"
            >
              View Source Code
            </a>
          )}
        </section>

        {/* Back to Projects */}
        <section className="pt-8 border-t border-foreground/10">
          <Link
            href="/projects"
            className="inline-flex items-center text-foreground/70 hover:text-foreground transition-colors"
          >
            ← Back to Projects
          </Link>
        </section>
      </div>
    </div>
  );
}