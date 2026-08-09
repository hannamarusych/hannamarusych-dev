import { skills } from "@/content/skills";

export default function Skills() {
  return (
    <section id="skills" className="border-b border-gray-200">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">
            Technical Stack
          </p>

          <h2 className="mt-4 text-5xl font-bold tracking-tight text-gray-950">
            Tools I use in production.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            A practical stack built around cloud infrastructure, Kubernetes,
            automation, security, observability, and AI-assisted engineering.
          </p>
        </div>

        <div className="mt-16 border-t border-gray-300">
          {skills.map((skill) => (
            <div
              key={skill.category}
              className="grid gap-4 border-b border-gray-200 py-7 md:grid-cols-[220px_1fr]"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                {skill.category}
              </h3>

              <div className="flex flex-wrap gap-x-5 gap-y-2 text-base text-gray-700">
                {skill.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-3xl">
          <p className="text-base leading-7 text-gray-500">
            I care less about collecting tools and more about understanding
            how they behave in production — how infrastructure is provisioned,
            secured, deployed, observed, and recovered.
          </p>
        </div>
      </div>
    </section>
  );
}