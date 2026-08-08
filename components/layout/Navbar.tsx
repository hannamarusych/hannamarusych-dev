export default function Navbar() {
  return (
    <nav className="border-b border-gray-200">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="text-xl font-bold">
          Hanna Marusych
        </div>

        <div className="flex gap-6">
          <a href="/">Home</a>
          <a href="/projects">Projects</a>
          <a href="/experience">Experience</a>
          <a href="/resume">Resume</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}
