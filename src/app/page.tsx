import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ExperienceSection from "@/components/Experience";
import Projects from "@/components/Projects";
import GitHubContributions from "@/components/GitHubContributions";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background blobs */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="blob w-[600px] h-[600px] bg-neon-cyan/10 top-[-200px] left-[-200px]" />
        <div className="blob w-[500px] h-[500px] bg-neon-purple/10 top-[40%] right-[-150px]" />
        <div className="blob w-[400px] h-[400px] bg-neon-pink/8 bottom-[-100px] left-[30%]" />
      </div>

      {/* Grid overlay */}
      <div className="fixed inset-0 grid-bg pointer-events-none -z-10" />

      <Navbar />
      <Hero />
      <About />
      <ExperienceSection />
      <Projects />
      <GitHubContributions username="HamzaBenyazid" />
      <Contact />
      <Footer />
    </main>
  );
}
