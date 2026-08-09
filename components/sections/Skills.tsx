import { skills } from "@/content/skills";
import { Badge } from "@/components/ui/badge";

export default function Skills() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-12">
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
          Technical Stack
        </p>

        <h2 className="mt-2 text-5xl font-bold">
          Skills
        </h2>

        <p className="mt-4 max-w-2xl text-lg text-gray-600">
          Technologies and tools used across cloud infrastructure,
          Kubernetes, Infrastructure as Code, CI/CD, observability,
          scripting, and AI-assisted engineering.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((skill) => (
          <div
            key={skill.category}
            className="rounded-2xl border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <h3 className="text-xl font-bold">
              {skill.category}
            </h3>

            <div className="mt-4 flex flex-wrap gap-2">
              {skill.items.map((item) => (
                <Badge
                  key={item}
                  variant="secondary"
                >
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
