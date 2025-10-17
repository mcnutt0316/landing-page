import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectCarousel from "@/components/ProjectCarousel";

const Projects = () => {
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
          
          <div className="bg-foreground/5 rounded-xl p-6 lg:p-8 hover:bg-foreground/[0.07] transition-colors duration-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 text-xs font-medium bg-accent/20 text-accent-foreground rounded">
                    Featured
                  </span>
                  <span className="px-2 py-1 text-xs font-medium bg-green-500/20 text-green-700 dark:text-green-300 rounded">
                    {featuredProject.status === "completed" ? "Completed" : "In Progress"}
                  </span>
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                  {featuredProject.title}
                </h3>
                
                <p className="text-foreground/80 leading-relaxed">
                  {featuredProject.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {featuredProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-foreground/10 text-foreground rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  {featuredProject.links.demo && (
                    <a
                      href={featuredProject.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-colors duration-200"
                    >
                      View Live Demo
                    </a>
                  )}
                  <a
                    href={featuredProject.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium rounded-lg border border-foreground/20 text-foreground hover:bg-foreground/5 transition-colors duration-200"
                  >
                    View Code
                  </a>
                </div>
              </div>
              <ProjectCarousel
                images={[
                  featuredProject.images.hero,
                  featuredProject.images.thumbnail,
                  ...featuredProject.images.gallery
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
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors duration-200">
                      {project.title}
                    </h3>
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
          Interested in working together?
        </h2>
        <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
          I'm always excited to take on new challenges and create meaningful digital solutions. 
          Let's discuss how we can bring your ideas to life.
        </p>
        <Link
          href="/#contact"
          className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 transition-colors duration-200"
        >
          Get In Touch
        </Link>
      </section>
    </div>
  );
};

export default Projects;