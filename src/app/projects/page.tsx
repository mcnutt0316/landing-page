"use client";

import Link from "next/link";
import { ExternalLink, Video } from "lucide-react";
import { projects } from "@/data/projects";
import ProjectCarousel from "@/components/ProjectCarousel";
import { useContactModal } from "@/store/useContactModal";

const Projects = () => {
  const { openModal } = useContactModal();
  const featuredProject = projects.find(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <div className="space-y-12">
      {/* Featured Project */}
      {featuredProject && (
        <section>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-2">Featured Project</h2>
            <p className="text-foreground/70">My latest and most comprehensive work</p>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-[oklch(0.30_0.10_240)] bg-[oklch(0.18_0.08_240)]">
            {/* Gradient accent bar across the top */}
            <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[oklch(0.52_0.18_240)] to-[oklch(0.75_0.16_80)]" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-10">
              <div className="space-y-5">
                {/* Badge row */}
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.04em] bg-[oklch(0.42_0.18_240/0.3)] text-[oklch(0.76_0.10_240)] border border-[oklch(0.42_0.18_240/0.4)]">
                    ★ Featured
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.04em] bg-[oklch(0.75_0.16_80/0.15)] text-[oklch(0.80_0.14_80)] border border-[oklch(0.75_0.16_80/0.35)]">
                    🏆 Hackathon 2nd Place
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.04em] bg-[oklch(0.35_0.10_145/0.3)] text-[oklch(0.75_0.14_145)] border border-[oklch(0.35_0.10_145/0.4)]">
                    {featuredProject.status === "completed" ? "Completed" : "In Progress"}
                  </span>
                </div>

                {/* Title + description */}
                <div className="space-y-3">
                  <h3 className="text-3xl font-bold text-white leading-tight">
                    {featuredProject.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-[oklch(0.72_0.02_240)]">
                    {featuredProject.description}
                  </p>
                </div>

                {/* Stats row */}
                <div className="flex gap-6 px-4 py-3 rounded-lg border border-[oklch(0.28_0.06_240)] bg-[oklch(0.16_0.04_240)]">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.07em] text-[oklch(0.5_0.05_240)] mb-0.5">Duration</div>
                    <div className="text-sm font-semibold font-mono text-white">{featuredProject.metadata.duration}</div>
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.07em] text-[oklch(0.5_0.05_240)] mb-0.5">Team Size</div>
                    <div className="text-sm font-semibold font-mono text-white">{featuredProject.metadata.team_size} devs</div>
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.07em] text-[oklch(0.5_0.05_240)] mb-0.5">Status</div>
                    <div className="text-sm font-semibold font-mono text-white">Live</div>
                  </div>
                </div>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-1.5">
                  {featuredProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-md px-3 py-1 text-xs font-mono whitespace-nowrap bg-[oklch(0.28_0.06_240)] text-[oklch(0.76_0.10_240)] border border-[oklch(0.34_0.09_240)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  {featuredProject.links.demo && (
                    <a
                      href={featuredProject.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-2 text-sm font-semibold rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-colors duration-200"
                    >
                      <ExternalLink className="w-3.5 h-3.5" strokeWidth={2.5} />
                      Live Demo
                    </a>
                  )}
                  {featuredProject.links.case_study && (
                    <a
                      href={featuredProject.links.case_study}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-2 text-sm font-medium rounded-lg border border-white/20 text-white hover:bg-white/5 transition-colors duration-200"
                    >
                      <Video className="w-3.5 h-3.5" strokeWidth={2} />
                      Case Study Video
                    </a>
                  )}
                </div>
              </div>

              <ProjectCarousel
                images={[
                  featuredProject.images.hero,
                  ...featuredProject.images.gallery,
                  featuredProject.images.thumbnail,
                ]}
                projectTitle={featuredProject.title}
              />
            </div>
          </div>
        </section>
      )}

      {/* Other Projects */}
      <section>
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-foreground mb-2">Other Projects</h2>
          <p className="text-foreground/70">Additional work showcasing diverse skills and technologies</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherProjects.map((project) => (
            <div
              key={project.id}
              className="bg-foreground/5 rounded-xl p-6 hover:bg-foreground/[0.07] transition-colors duration-200 group"
            >
              <div className="space-y-4">
                <ProjectCarousel
                  images={[
                    project.images.hero,
                    project.images.thumbnail,
                    ...project.images.gallery
                  ]}
                  projectTitle={project.title}
                />
                <div className="space-y-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors duration-200">
                      {project.title}
                    </h3>
                    {project.slug === 'height-table' && (
                      <span
                        className="px-2 py-0.5 text-[10px] font-mono font-semibold uppercase tracking-wide rounded"
                        style={{
                          background: 'oklch(0.55 0.22 25 / 0.15)',
                          color: 'oklch(0.70 0.18 25)',
                          border: '1px solid oklch(0.55 0.22 25 / 0.35)',
                        }}
                      >
                        Domain Depth
                      </span>
                    )}
                    <span className={`px-2 py-1 text-xs font-medium rounded ${
                      project.status === "completed"
                        ? "bg-green-500/20 text-green-700 dark:text-green-300"
                        : "bg-yellow-500/20 text-yellow-700 dark:text-yellow-300"
                    }`}>
                      {project.status === "completed" ? "Completed" : "In Progress"}
                    </span>
                  </div>
                  
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-foreground/10 text-foreground/80 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs bg-foreground/5 text-foreground/60 rounded">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex gap-3 pt-2">
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-accent hover:text-accent/80 font-medium transition-colors duration-200"
                    >
                      Live Demo →
                    </a>
                  )}
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-foreground/70 hover:text-foreground font-medium transition-colors duration-200"
                  >
                    View Code →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-12 border-t border-foreground/10">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Want to see more?
        </h2>
        <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
          I&apos;m actively building and looking for a team. If something here resonates, let&apos;s talk.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <button
            onClick={openModal}
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 transition-colors duration-200"
          >
            Get In Touch
          </button>
          <Link
            href="/about"
            className="inline-flex items-center justify-center gap-1.5 px-8 py-3 text-base font-medium rounded-lg border border-foreground/20 text-foreground hover:border-foreground/40 hover:bg-foreground/5 transition-colors duration-200"
          >
            Read My Story
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Projects;