import { experience } from "@/content/experience";
import { Badge } from "@/components/ui/badge";

export default function Experience() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-12">
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
          Career
        </p>

        <h2 className="mt-2 text-5xl font-bold">
          Experience
        </h2>

        <p className="mt-4 max-w-2xl text-lg text-gray-600">
          DevOps and cloud engineering experience across AWS, Kubernetes,
          Terraform, CI/CD, security, and platform engineering.
        </p>
      </div>

      <div className="space-y-8">
        {experience.map((item) => (
          <div
            key={`${item.company}-${item.role}`}
            className="rounded-2xl border bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex flex-col justify-between gap-4 md:flex-row">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                  {item.period}
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  {item.role}
                </h3>

                <p className="mt-1 text-lg font-medium text-gray-500">
                  {item.company}
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  {item.location}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 md:max-w-md md:justify-end">
                {item.company === "Egencia" ? (
                  <>
                    <Badge variant="secondary">AWS</Badge>
                    <Badge variant="secondary">Kubernetes</Badge>
                    <Badge variant="secondary">Terraform</Badge>
                    <Badge variant="secondary">GitHub Actions</Badge>
                    <Badge variant="secondary">Prometheus</Badge>
                    <Badge variant="secondary">Grafana</Badge>
                  </>
                ) : (
                  <>
                    <Badge variant="secondary">AWS</Badge>
                    <Badge variant="secondary">EKS</Badge>
                    <Badge variant="secondary">Terraform</Badge>
                    <Badge variant="secondary">GitHub Actions</Badge>
                    <Badge variant="secondary">ECR</Badge>
                    <Badge variant="secondary">CloudWatch</Badge>
                  </>
                )}
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {item.responsibilities.map((responsibility) => (
                <div
                  key={responsibility}
                  className="flex gap-3 text-gray-600"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />

                  <p className="leading-7">
                    {responsibility}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}