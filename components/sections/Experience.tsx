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
            My experience spans cloud infrastructure, Kubernetes platforms,
            automation, security, and production operations across
            business-critical systems.
          </p>
        </div>

        <div className="mt-16">
          <article className="grid gap-8 border-t border-gray-300 py-12 lg:grid-cols-[180px_1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                April 2023 — Present
              </p>

              <p className="mt-2 text-sm text-gray-500">
                Chicago, IL · Hybrid
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gray-500">
                Egencia · American Express Global Business Travel
              </p>

              <h3 className="mt-3 text-3xl font-bold tracking-tight text-gray-950">
                DevOps Engineer
              </h3>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-700">
                Cloud and platform engineer building and operating AWS and
                Kubernetes infrastructure that enables Egencia&apos;s global
                business-travel services to ship and run reliably at scale.
              </p>

              <div className="mt-8 grid gap-8 md:grid-cols-2">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                    Platform
                  </p>

                  <p className="mt-3 text-base leading-7 text-gray-600">
                    Built and operated Kubernetes platforms with EKS, Docker,
                    Helm, Terraform, and GitOps delivery workflows. Focused on
                    repeatable infrastructure and reducing operational
                    friction for engineering teams.
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                    Impact
                  </p>

                  <p className="mt-3 text-base leading-7 text-gray-600">
                    Contributed to the migration of ML model-serving workloads
                    from AWS SageMaker to Amazon EKS, with an individual
                    inference workload achieving up to 66% lower operating
                    costs through Kubernetes-based resource optimization and
                    autoscaling.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm text-gray-500">
                <span>AWS</span>
                <span>EKS</span>
                <span>Kubernetes</span>
                <span>Terraform</span>
                <span>Helm</span>
                <span>GitOps</span>
                <span>Security</span>
                <span>Observability</span>
              </div>
            </div>
          </article>

          <article className="grid gap-8 border-t border-gray-300 py-12 lg:grid-cols-[180px_1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                August 2020 — March 2023
              </p>

              <p className="mt-2 text-sm text-gray-500">
                New York, NY · Remote
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gray-500">
                FanDuel
              </p>

              <h3 className="mt-3 text-3xl font-bold tracking-tight text-gray-950">
                Cloud Engineer
              </h3>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-700">
                Managed AWS-based infrastructure supporting high-scale sports
                and gaming workloads, with a focus on cloud infrastructure,
                automation, reliability, and data-platform operations.
              </p>

              <div className="mt-8 grid gap-8 md:grid-cols-2">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                    Platform
                  </p>

                  <p className="mt-3 text-base leading-7 text-gray-600">
                    Worked across AWS infrastructure including EC2, EKS, RDS,
                    Lambda, and Terraform-managed environments, supporting
                    production systems and data workloads.
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                    Scale &amp; Impact
                  </p>

                  <p className="mt-3 text-base leading-7 text-gray-600">
                    Supported infrastructure behind a large-scale consumer
                    platform while the data platform evolved toward higher
                    query concurrency, improved workload efficiency, and
                    significantly lower operating costs.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm text-gray-500">
                <span>AWS</span>
                <span>EKS</span>
                <span>Terraform</span>
                <span>EC2</span>
                <span>RDS</span>
                <span>Lambda</span>
                <span>Cloud Infrastructure</span>
              </div>
            </div>
          </article>
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
