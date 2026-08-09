import { siteConfig } from "@/content/site";

export default function Contact() {
  return (
    <section id="contact" className="border-b border-gray-200">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">
              Contact
            </p>

            <h2 className="mt-4 text-5xl font-bold tracking-tight text-gray-950">
              Let&apos;s build something reliable.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              I&apos;m open to opportunities in DevOps, Cloud Engineering,
              Platform Engineering, and infrastructure-focused roles.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-7 text-gray-500">
              If you&apos;re working on cloud infrastructure, Kubernetes,
              platform automation, or the next stage of engineering
              modernization, I&apos;d be happy to connect.
            </p>

            <div className="mt-10">
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex border border-gray-900 bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-gray-900"
              >
                Get in touch
              </a>
            </div>
          </div>

          <div className="border-t border-gray-300 lg:border-t-0 lg:border-l lg:pl-10">
            <div className="space-y-7">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                  Email
                </p>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="mt-2 block text-base font-medium text-gray-900 underline decoration-gray-300 underline-offset-4 transition-colors hover:decoration-gray-900"
                >
                  {siteConfig.email}
                </a>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                  Phone
                </p>

                <a
                  href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}
                  className="mt-2 block text-base font-medium text-gray-900"
                >
                  {siteConfig.phone}
                </a>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                  GitHub
                </p>

                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block text-base font-medium text-gray-900 underline decoration-gray-300 underline-offset-4 transition-colors hover:decoration-gray-900"
                >
                  github.com/hannamarusych
                </a>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                  LinkedIn
                </p>

                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block text-base font-medium text-gray-900 underline decoration-gray-300 underline-offset-4 transition-colors hover:decoration-gray-900"
                >
                  linkedin.com/in/hanna-marusych
                </a>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                  Location
                </p>

                <p className="mt-2 text-base font-medium text-gray-900">
                  Chicago, IL
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}