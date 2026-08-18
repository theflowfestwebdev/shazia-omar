import {Header} from "@/components/Header";
import {Hero} from "@/components/Hero";
import {About} from "@/components/About";
import {Books} from "@/components/Books";
import {Yoga} from "@/components/Yoga";
import {FlowFest} from "@/components/FlowFest";
import {Impact} from "@/components/Impact";
import {Footer} from "@/components/Footer";
import {Feature} from "@/components/Feature";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Books />
        <Yoga />
        <Impact />
      </main>
      <Footer />
    </>
  );
}
