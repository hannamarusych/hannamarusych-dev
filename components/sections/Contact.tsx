import { Mail, Phone } from "lucide-react";
import { siteConfig } from "@/content/site";

export default function Contact() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-12">
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
          Contact
        </p>

        <h2 className="mt-2 text-5xl font-bold">
          Let&apos;s Connect
        </h2>

        <p className="mt-4 max-w-2xl text-lg text-gray-600">
          Open to opportunities in DevOps, Cloud Engineering, and Platform
          Engineering.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <a
          href={`mailto:${siteConfig.email}`}
          className="group rounded-2xl border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="flex items-center gap-4">
            <div className="rounded-xl bg-blue-50 p-3">
              <Mail className="h-6 w-6 text-blue-600" />
            </div>

            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-semibold group-hover:text-blue-600">
                {siteConfig.email}
              </p>
            </div>
          </div>
        </a>

        <a
          href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}
          className="group rounded-2xl border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="flex items-center gap-4">
            <div className="rounded-xl bg-blue-50 p-3">
              <Phone className="h-6 w-6 text-blue-600" />
            </div>

            <div>
              <p className="text-sm text-gray-500">Phone</p>
              <p className="font-semibold group-hover:text-blue-600">
                {siteConfig.phone}
              </p>
            </div>
          </div>
        </a>

        <a
          href={siteConfig.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-2xl border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div>
            <p className="text-sm text-gray-500">GitHub</p>
            <p className="mt-1 font-semibold group-hover:text-blue-600">
              github.com/hannamarusych
            </p>
          </div>
        </a>

        <a
          href={siteConfig.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-2xl border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div>
            <p className="text-sm text-gray-500">LinkedIn</p>
            <p className="mt-1 font-semibold group-hover:text-blue-600">
              linkedin.com/in/hanna-marusych
            </p>
          </div>
        </a>
      </div>
    </section>
  );
}
