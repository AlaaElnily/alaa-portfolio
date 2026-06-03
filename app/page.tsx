import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Projects from "@/app/components/Projects";
import PersonalWork from "@/app/components/PersonalWork";
import Experience from "@/app/components/Experience";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";
import FadeInObserver from "@/app/components/FadeInObserver";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';

export default function Home() {
  return (
    <>
      <SpeedInsights />
      <FadeInObserver />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <PersonalWork />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <Analytics />
    </>
  );
}
