import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Project from "@/components/Project";
import Skill from "@/components/Skill";

export default function Home() {
  return (
    <>
    {/* className="scroll-mt-8" */}
    <section id="Home" className="scroll-mt-16">
      <Header/>
    </section>
    <section id="About" className="md:scroll-mt-8">
      <About />
    </section>
    <section id="Skill" className="md:scroll-mt-8">
      <Skill/>
    </section> 
    <section id="Project">
      <Project/>
    </section>
    <section id="Contact" >
      <Contact/>
    </section>
    </>
  )
}
