import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { WorkExperience } from "@/components/sections/WorkExperience";
import { Education } from "@/components/sections/Education";
import { Skills } from "@/components/sections/Skills";
import { Hackathons } from "@/components/sections/Hackathons";
import { AchievementsAndHobbies } from "@/components/sections/AchievementsAndHobbies";
import { OpenSource } from "@/components/sections/OpenSource";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <WorkExperience />
        <Education />
        <Skills />
        <Hackathons />
        <AchievementsAndHobbies />
        <OpenSource />
        <Contact />
      </main>
      <Footer />
    </>
  );
}