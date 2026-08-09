import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";
import { siteConfig } from "@/content/site";

export default function Hero() {
  return (
    <section className="mx-auto grid min-h-[80vh] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
      <div>
        <div className="mb-8">
          <Image
            src="/profile.png"
            alt="Hanna Marusych"
            width={140}
            height={140}
            priority
            className="h-36 w-36 rounded-full border-4 border-blue-600 object-cover"
          />
        </div>

        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
          {siteConfig.location}
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
          platform engineering.
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

      <div className="rounded-3xl border bg-gray-50 p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
          Professional Focus
        </p>

        <h3 className="mt-4 text-3xl font-bold">
          Building reliable cloud platforms.
        </h3>

        <p className="mt-4 leading-7 text-gray-600">
          Focused on secure AWS infrastructure, Kubernetes platform engineering,
          Terraform-based Infrastructure as Code, CI/CD automation,
          observability, and AI-assisted engineering workflows.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border bg-white p-5">
            <p className="font-semibold">Cloud & Infrastructure</p>
            <p className="mt-2 text-sm text-gray-600">
              AWS · EKS · ECS · VPC · IAM · Terraform
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-5">
            <p className="font-semibold">Platform Engineering</p>
            <p className="mt-2 text-sm text-gray-600">
              Kubernetes · Docker · Helm · CI/CD
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-5">
            <p className="font-semibold">Observability</p>
            <p className="mt-2 text-sm text-gray-600">
              Prometheus · Grafana · CloudWatch
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-5">
            <p className="font-semibold">AI-Assisted Engineering</p>
            <p className="mt-2 text-sm text-gray-600">
              Claude Code · MCP · AWS Bedrock · Context Engineering
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}