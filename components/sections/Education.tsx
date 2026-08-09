import { certifications } from "@/content/certifications";

export default function Education() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Education
          </p>

          <h2 className="mt-2 text-4xl font-bold">
            Education
          </h2>

          <div className="mt-6 rounded-2xl border bg-white p-6">
            <h3 className="text-xl font-bold">
              Bachelor&apos;s Degree in Management of Organizations
            </h3>

            <p className="mt-2 text-gray-600">
              National Aviation University
            </p>

            <p className="mt-1 text-sm text-gray-500">
              Kyiv, Ukraine
            </p>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Certifications
          </p>

          <h2 className="mt-2 text-4xl font-bold">
            Certifications
          </h2>

          <div className="mt-6 space-y-4">
            {certifications.map((certification) => (
              <div
                key={certification.name}
                className="rounded-2xl border bg-white p-5"
              >
                <p className="font-semibold">
                  {certification.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
