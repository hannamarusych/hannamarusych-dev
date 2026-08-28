import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/content/site";

export default function Hero() {
  return (
    <section className="border-b border-gray-200">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 py-24 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-32">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">
            {siteConfig.headline} · {siteConfig.tagline}
          </p>

          <h1 className="mt-6 max-w-4xl text-6xl font-bold tracking-[-0.04em] text-gray-950 sm:text-7xl">
            I build the platforms other engineers ship on.
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-8 text-gray-600">
            {siteConfig.summary}
          </p>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-500">
            {siteConfig.summarySecondary}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/experience"
              className="inline-flex h-12 items-center justify-center bg-gray-950 px-6 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
            >
              See the work
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>

            <a
              href={siteConfig.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center border border-gray-300 px-6 text-sm font-semibold text-gray-900 transition-colors hover:border-gray-900"
            >
              Resume
              <Download className="ml-2 h-4 w-4" />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500">
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-gray-950"
            >
              LinkedIn
            </a>

            <a
              href={`mailto:${siteConfig.email}`}
              className="transition-colors hover:text-gray-950"
            >
              Email
            </a>
          </div>
        </div>

        <div className="flex items-end lg:justify-end">
          <div className="max-w-sm border-l border-gray-300 pl-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">
              What I run
            </p>

            <div className="mt-6 space-y-6">
              <div>
                <h2 className="font-semibold text-gray-950">
                  50 services, 3 teams
                </h2>
                <p className="mt-2 text-sm leading-6 text-gray-500">
                  The Kubernetes platform behind Egencia&apos;s services —
                  EKS, Terraform modules, and the delivery path onto them.
                </p>
              </div>

              <div>
                <h2 className="font-semibold text-gray-950">
                  Self-service paths
                </h2>
                <p className="mt-2 text-sm leading-6 text-gray-500">
                  OIDC-federated pipelines, GitOps delivery, and routing that
                  brings up its own load balancer, DNS record, and TLS
                  certificate.
                </p>
              </div>

              <div>
                <h2 className="font-semibold text-gray-950">
                  Agentic tooling
                </h2>
                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Claude Code skills and MCP integrations that take over the
                  manual review passes — PRs, logs, rollouts, Terraform plans.
                </p>
              </div>
            </div>

            <div className="mt-8 h-px w-16 bg-gray-950" />

            <p className="mt-6 text-sm leading-6 text-gray-500">
              Infrastructure should make the safe path the easy path.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
