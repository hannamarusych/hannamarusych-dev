import { siteConfig } from "@/content/site";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p>
          © {new Date().getFullYear()} Hanna Marusych
        </p>

        <div className="flex flex-wrap items-center gap-5">
          <a
            href={siteConfig.portfolio}
            className="transition-colors hover:text-gray-950"
          >
            hannamarusych.com
          </a>

          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-gray-950"
          >
            GitHub
          </a>

          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-gray-950"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}