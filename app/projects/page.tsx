import ProjectCard from "@/components/cards/ProjectCard";
import { projects } from "@/content/projects";

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-12">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
          Portfolio
        </p>

        <h1 className="mt-3 text-5xl font-bold tracking-tight">
          Projects
        </h1>

        <p className="mt-4 max-w-2xl text-lg text-gray-600">
          Selected cloud infrastructure, platform engineering, and
          AI-assisted engineering projects.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
    </main>
  );
}
