import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Skill from "@/components/Skill";

export default function Home() {
  return (
    <>
    {/* className="scroll-mt-8" */}
    <section id="Home" >
      <Header/>
    </section>
    <section id="About">
      <About />
    </section>
    <section id="Skill" >
      <Skill/>
    </section>
    <section id="Contact">
      <Contact/>
    </section>
    </>
  )
}
