import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Skill from "@/components/Skill";

export default function Home() {
  return (
    <>
    <section id="Home" >
      <Header/>
    </section>
    <section id="About" className="scroll-mt-8">
      <About />
    </section>
    <section id="Skill" >
      <Skill/>
    </section>
    <section id="Contact" >
      <Contact/>
    </section>
    </>
  )
}
