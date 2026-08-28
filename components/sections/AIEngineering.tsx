import { aiEngineering } from "@/content/ai";

export default function AIEngineering() {
  return (
    <section id="ai" className="border-b border-gray-200">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">
            AI-Assisted Engineering
          </p>

          <h2 className="mt-4 text-5xl font-bold tracking-tight text-gray-950">
            Agentic tooling on top of the platform.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            {aiEngineering.intro}
          </p>
        </div>

        <div className="mt-16 border-t border-gray-300">
          {aiEngineering.skills.map((skill, index) => (
            <article
              key={skill.name}
              className="grid gap-6 border-b border-gray-200 py-9 lg:grid-cols-[80px_260px_1fr]"
            >
              <div className="text-sm font-semibold text-gray-400">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3 className="text-xl font-bold tracking-tight text-gray-950">
                {skill.name}
              </h3>

              <p className="max-w-3xl text-base leading-7 text-gray-600">
                {skill.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 max-w-3xl">
          <p className="text-base leading-7 text-gray-500">
            {aiEngineering.scoping}
          </p>
        </div>
      </div>
    </section>
  );
}
