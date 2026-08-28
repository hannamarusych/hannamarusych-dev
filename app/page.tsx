import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import AIEngineering from "@/components/sections/AIEngineering";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Experience />
      <AIEngineering />
      <FeaturedProjects />
      <Skills />
      <Education />
      <Contact />
    </main>
  );
}
