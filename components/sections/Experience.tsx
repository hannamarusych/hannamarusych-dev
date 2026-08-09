import { experience } from "@/content/experience";
import { Badge } from "@/components/ui/badge";

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-7xl px-6 py-24"
    >
      <div className="mb-12">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
          Career
        </p>

        <h2 className="mt-2 text-5xl font-bold">
          Experience
        </h2>

        <p className="mt-4 max-w-2xl text-lg text-gray-600">
          Cloud infrastructure, platform engineering, automation,
          and DevOps experience.
        </p>
      </div>

      <div className="space-y-8">
        {experience.map((item) => (
          <div
            key={`${item.company}-${item.role}`}
            className="rounded-2xl border bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex flex-col justify-between gap-4 md:flex-row">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                  {item.period}
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  {item.role}
                </h3>

                <p className="mt-1 text-lg text-gray-500">
                  {item.company}
                </p>
              </div>

              {item.technologies && (
                <div className="flex flex-wrap gap-2 md:max-w-md md:justify-end">
                  {item.technologies.map((technology) => (
                    <Badge
                      key={technology}
                      variant="secondary"
                    >
                      {technology}
                    </Badge>
                  ))}
                </div>
              )}
            </div>

            <p className="mt-6 max-w-4xl leading-8 text-gray-600">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
