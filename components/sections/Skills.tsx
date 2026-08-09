import { Badge } from "@/components/ui/badge";
import { skills } from "@/content/skills";

export default function Skills() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="text-4xl font-bold tracking-tight">Skills</h2>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skillGroup) => (
          <div
            key={skillGroup.category}
            className="rounded-xl border bg-white p-6"
          >
            <h3 className="text-lg font-semibold">
              {skillGroup.category}
            </h3>

            <div className="mt-4 flex flex-wrap gap-2">
              {skillGroup.items.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
