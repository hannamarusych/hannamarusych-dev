import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
  <section className="mx-auto flex min-h-[75vh] max-w-7xl items-center px-6 py-20">
      <div className="max-w-3xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-600">
          DevOps Engineer
        </p>

        <h1 className="text-6xl font-bold tracking-tight">
          Hanna Marusych
        </h1>

        <p className="mt-8 text-xl leading-9 text-gray-600">
          Building secure cloud platforms on AWS using Kubernetes,
          Terraform, CI/CD, and Agentic AI Workflows.
        </p>

        <div className="mt-10 flex gap-4">
          <Button size="lg">View Projects</Button>

          <Button variant="outline" size="lg">
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
}