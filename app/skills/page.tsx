import { Badge } from "@/components/ui/badge";
import { skills } from "@/content/skills";

export default function SkillsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-12">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
          Expertise
        </p>

        <h1 className="mt-3 text-5xl font-bold tracking-tight">
          Skills
        </h1>

        <p className="mt-4 max-w-2xl text-lg text-gray-600">
          Technologies and tools used across cloud infrastructure,
          platform engineering, automation, and AI-assisted workflows.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <div
            key={group.category}
            className="rounded-2xl border bg-white p-6"
          >
            <h2 className="text-xl font-bold">
              {group.category}
            </h2>

            <div className="mt-5 flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
