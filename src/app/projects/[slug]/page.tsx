import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { projects, getProjectBySlug } from "@/data/projects";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

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
  const project = getProjectBySlug(slug);

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
        {/* Project Image Placeholder */}
        <section>
          <div className="aspect-video bg-foreground/10 rounded-xl flex items-center justify-center">
            <span className="text-foreground/60">Project Screenshot Coming Soon</span>
          </div>
        </section>

        {/* Description */}
        <section className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-foreground/80 leading-relaxed text-lg">
            {project.longDescription}
          </p>
        </section>

        {/* Project Details Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Technologies */}
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Technologies Used
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-2 text-sm bg-foreground/10 text-foreground rounded-full hover:bg-foreground/15 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project Info */}
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Project Info
            </h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-foreground/70">Status:</span>
                <span className={`font-medium ${
                  project.status === 'completed' 
                    ? 'text-green-600 dark:text-green-400' 
                    : 'text-yellow-600 dark:text-yellow-400'
                }`}>
                  {project.status === 'completed' ? 'Completed' : 'In Progress'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground/70">Category:</span>
                <span className="font-medium text-foreground capitalize">
                  {project.category.replace('-', ' ')}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground/70">Duration:</span>
                <span className="font-medium text-foreground">
                  {project.metadata.duration}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground/70">Team Size:</span>
                <span className="font-medium text-foreground">
                  {project.metadata.team_size === 1 ? 'Solo Project' : `${project.metadata.team_size} people`}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Key Highlights
            </h2>
            <ul className="space-y-2">
              {project.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-accent mt-1">✓</span>
                  <span className="text-foreground/80">{highlight}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Challenges */}
        {project.challenges && project.challenges.length > 0 && (
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Technical Challenges
            </h2>
            <ul className="space-y-2">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-orange-500 mt-1">⚡</span>
                  <span className="text-foreground/80">{challenge}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Lessons Learned */}
        {project.lessons_learned && project.lessons_learned.length > 0 && (
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Lessons Learned
            </h2>
            <ul className="space-y-2">
              {project.lessons_learned.map((lesson, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">💡</span>
                  <span className="text-foreground/80">{lesson}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Links */}
        <section className="flex flex-col sm:flex-row gap-4 pt-4">
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 transition-colors duration-200"
            >
              View Live Demo →
            </a>
          )}
          {project.links.github && project.links.github !== '#' && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg border border-foreground/20 text-foreground hover:bg-foreground/5 focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:ring-offset-2 transition-colors duration-200"
            >
              View Source Code →
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