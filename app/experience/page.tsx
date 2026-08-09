import { Badge } from "@/components/ui/badge";
import { experience } from "@/content/experience";

export default function ExperiencePage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-12">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
          Career
        </p>

        <h1 className="mt-3 text-5xl font-bold tracking-tight">
          Experience
        </h1>

        <p className="mt-4 max-w-2xl text-lg text-gray-600">
          Cloud infrastructure and platform engineering experience.
        </p>
      </div>

      <div className="space-y-6">
        {experience.map((item) => (
          <div
            key={`${item.period}-${item.role}`}
            className="rounded-2xl border bg-white p-8"
          >
            <p className="text-sm font-semibold text-blue-600">
              {item.period}
            </p>

            <h2 className="mt-3 text-2xl font-bold">
              {item.role}
            </h2>

            <p className="mt-1 text-gray-500">
              {item.company}
            </p>

            <p className="mt-6 max-w-4xl leading-7 text-gray-600">
              {item.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {item.technologies.map((technology) => (
                <Badge key={technology} variant="secondary">
                  {technology}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
