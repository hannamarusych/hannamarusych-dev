import { projects } from "@/content/projects";
export default function FeaturedProjects() {
  return (
    <section id="work" className="border-b border-gray-200">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">
            Selected Work
          </p>

          <h2 className="mt-4 text-5xl font-bold tracking-tight text-gray-950">
            Projects that show how I work.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            A few examples of infrastructure, platform engineering, and
            cloud migration work. The goal is not just to list technologies,
            but to show the problems I solve with them.
          </p>
        </div>

        <div className="mt-16 space-y-0">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="grid gap-8 border-t border-gray-300 py-12 lg:grid-cols-[80px_1fr]"
            >
              <div className="text-sm font-semibold text-gray-400">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div>
                <h3 className="text-3xl font-bold tracking-tight text-gray-950">
                  {project.title}
                </h3>

                <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-600">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-sm text-gray-500">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
