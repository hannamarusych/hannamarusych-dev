import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";
import { siteConfig } from "@/content/site";

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.4fr_0.8fr] lg:py-28">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
          DevOps Engineer
        </p>

        <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl">
          {siteConfig.name}
        </h1>

        <h2 className="mt-4 text-2xl font-semibold text-gray-700 sm:text-3xl">
          {siteConfig.headline}
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          DevOps Engineer with 5+ years of experience designing, building, and
          operating cloud platforms on AWS and Kubernetes. Experienced in
          Infrastructure as Code, CI/CD automation, cloud infrastructure, and
          platform engineering that enables development teams to deliver
          software faster, more securely, and at scale.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {[
            "AWS",
            "Kubernetes",
            "Terraform",
            "GitHub Actions",
            "CI/CD",
            "Agentic AI Workflows",
          ].map((technology) => (
            <span
              key={technology}
              className="rounded-full border bg-white px-3 py-1 text-sm font-medium text-gray-700"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="/projects"
            className="inline-flex h-11 items-center justify-center rounded-md bg-blue-600 px-6 text-sm font-medium text-white transition-colors hover:bg-blue-700"
          >
            View Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>

          <a
            href={siteConfig.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center rounded-md border border-gray-300 bg-white px-6 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-50"
          >
            Download Resume
            <Download className="ml-2 h-4 w-4" />
          </a>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-5">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-blue-600"
          >
            GitHub
          </a>

          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-blue-600"
          >
            LinkedIn
          </a>

          <a
            href={`mailto:${siteConfig.email}`}
            className="text-sm font-medium text-gray-700 transition-colors hover:text-blue-600"
          >
            Email
          </a>
        </div>
      </div>

      <div className="flex justify-center lg:justify-end">
        <div className="w-full max-w-sm rounded-3xl border bg-white p-6 shadow-sm">
          <div className="relative mx-auto aspect-square w-full max-w-xs overflow-hidden rounded-2xl bg-gray-100">
            <Image
              src="/profile.png"
              alt="Hanna Marusych"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 320px, 360px"
            />
          </div>

          <div className="mt-6 text-center">
            <h3 className="text-2xl font-bold">
              {siteConfig.name}
            </h3>

            <p className="mt-2 text-gray-600">
              DevOps Engineer · Cloud & Platform Engineering
            </p>

            <p className="mt-3 text-sm text-gray-500">
              Chicago, IL
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}