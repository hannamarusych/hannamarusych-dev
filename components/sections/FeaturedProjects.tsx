import ProjectCard from "@/components/cards/ProjectCard";
import { projects } from "@/content/projects";

export default function FeaturedProjects() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-12">
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
          Selected Work
        </p>

        <h2 className="mt-2 text-5xl font-bold">
          Featured Projects
        </h2>

        <p className="mt-4 max-w-2xl text-lg text-gray-600">
          Selected cloud, DevOps, infrastructure, and AI-assisted engineering
          projects.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            github={project.github}
          />
        ))}
      </div>
    </section>
  );
}
