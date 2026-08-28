import { certifications } from "@/content/certifications";
import { education } from "@/content/education";

export default function Education() {
  return (
    <section className="border-b border-gray-200">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 py-24 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">
            Education
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-950">
            Academic Background
          </h2>

          <div className="mt-10 border-t border-gray-300 pt-7">
            <h3 className="text-xl font-bold text-gray-950">
              {education.degree}
            </h3>

            <p className="mt-2 text-gray-600">{education.school}</p>

            <p className="mt-1 text-sm text-gray-500">{education.location}</p>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">
            Certifications
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-950">
            Professional Certifications
          </h2>

          <div className="mt-10 border-t border-gray-300">
            {certifications.map((certification) => (
              <div
                key={certification.name}
                className="border-b border-gray-200 py-5"
              >
                <p className="font-semibold text-gray-900">
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
