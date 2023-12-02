import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Project from "@/components/Project";
import Skill from "@/components/Skill";

export default function Home() {
  return (
    <>
    {/* className="scroll-mt-8" */}
    <section id="Home" className="scroll-mt-0">
      <Header/>
    </section>
    <section id="About" className="scroll-mt-8">
      <About />
    </section>
    <section id="Skill" className="scroll-mt-9">
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
