import Link from "next/link";

export default function Contact() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="rounded-2xl border bg-white p-10">
        <h2 className="text-4xl font-bold tracking-tight">
          Let&apos;s Connect
        </h2>

        <p className="mt-4 max-w-2xl text-lg text-gray-600">
          Interested in cloud infrastructure, platform engineering,
          Kubernetes, Terraform, or AI-assisted engineering workflows?
          Feel free to reach out.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="mailto:devopsannai@gmail.com"
            className="rounded-md bg-black px-5 py-3 text-sm font-medium text-white hover:bg-gray-800"
          >
            Email
          </Link>

          <Link
            href="https://github.com/hannamarusych"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border px-5 py-3 text-sm font-medium hover:bg-gray-50"
          >
            GitHub
          </Link>

          <Link
            href="https://www.linkedin.com/in/hanna-marusych"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border px-5 py-3 text-sm font-medium hover:bg-gray-50"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </section>
  );
}