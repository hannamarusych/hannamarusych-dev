export default function FeaturedProjects() {
  return (
   <section className="mx-auto max-w-7xl px-6 py-16">
      <h2 className="mb-10 text-4xl font-bold">Featured Projects</h2>

      <div className="grid gap-6 md:grid-cols-3">
        <article className="rounded-xl border p-6">
          <h3 className="text-xl font-semibold">Extra Migration</h3>

          <p className="mt-4 text-gray-600">
            Migrated an Amazon EKS platform from CloudFormation to Terraform
            using reusable Infrastructure as Code modules.
          </p>
        </article>

        <article className="rounded-xl border p-6">
          <h3 className="text-xl font-semibold">RouteBox Platform</h3>

          <p className="mt-4 text-gray-600">
            Cloud-native logistics platform built with AWS, ECS, Terraform,
            CI/CD, monitoring, and microservices.
          </p>
        </article>

        <article className="rounded-xl border p-6">
          <h3 className="text-xl font-semibold">Agentic AI Workflows</h3>

          <p className="mt-4 text-gray-600">
            AI-assisted engineering workflows for documentation,
            infrastructure, and software delivery.
          </p>
        </article>
      </div>
    </section>
  );
}