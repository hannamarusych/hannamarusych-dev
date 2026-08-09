import Hero from "@/components/sections/Hero";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedProjects />
      <Experience />
      <Skills />
      <Education />
    </main>
  );
}
