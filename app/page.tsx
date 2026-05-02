import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { FadeIn } from "@/components/FadeIn";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Parcours } from "@/components/Parcours";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Skills } from "@/components/Skills";
import { Stats } from "@/components/Stats";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <FadeIn y={20}>
          <Hero />
        </FadeIn>
        <FadeIn delay={0.04} y={24}>
          <Stats />
        </FadeIn>
        <FadeIn delay={0.06} y={24}>
          <About />
        </FadeIn>
        <FadeIn delay={0.05} y={24}>
          <Parcours />
        </FadeIn>
        <FadeIn delay={0.04} y={24}>
          <Projects />
        </FadeIn>
        <FadeIn delay={0.06} y={24}>
          <Services />
        </FadeIn>
        <FadeIn delay={0.04} y={24}>
          <Skills />
        </FadeIn>
        <FadeIn delay={0.06} y={28}>
          <Contact />
        </FadeIn>
      </main>
      <FadeIn delay={0.08} y={20}>
        <Footer />
      </FadeIn>
    </>
  );
}
