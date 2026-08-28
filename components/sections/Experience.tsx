import { experience } from "@/content/experience";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">
            Experience
          </p>

          <h2 className="mt-4 text-5xl font-bold tracking-tight text-gray-950">
            Building infrastructure that has to work.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Nearly 6 years building and operating AWS and Kubernetes platforms
            for high-scale consumer and B2B products — delivery paths,
            Terraform modules, routing, observability, and the agentic tooling
            on top.
          </p>
        </div>

        <div className="mt-16">
          {experience.map((role) => (
            <article
              key={role.company}
              className="grid gap-8 border-t border-gray-300 py-12 lg:grid-cols-[200px_1fr]"
            >
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                  {role.period}
                </p>

                <p className="mt-2 text-sm text-gray-500">{role.location}</p>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gray-500">
                  {role.company}
                </p>

                <h3 className="mt-3 text-3xl font-bold tracking-tight text-gray-950">
                  {role.role}
                </h3>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-700">
                  {role.summary}
                </p>

                <ul className="mt-8 max-w-3xl space-y-4 border-t border-gray-200 pt-8">
                  {role.responsibilities.map((item) => (
                    <li
                      key={item}
                      className="grid grid-cols-[16px_1fr] gap-3 text-base leading-7 text-gray-600"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-3 h-px w-3 bg-gray-400"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm text-gray-500">
                  {role.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 border-t border-gray-200 pt-10">
          <p className="max-w-3xl text-base leading-7 text-gray-500">
            I&apos;m most interested in the problems where infrastructure,
            developer experience, reliability, and security overlap.
          </p>
        </div>
      </div>
    </section>
  );
}
