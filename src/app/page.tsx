"use client";

import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Education } from "@/components/sections/Education";
import { Certifications } from "@/components/sections/Certifications";

export default function Home() {
  return (
    <main className="min-h-screen bg-obsidian text-gray-200">
      <Navbar />
      <Hero />
      <Stats />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Certifications />

      {/* Contact Section Placeholder/Integrated into Footer or separate */}
      <section id="contact" className="py-20 text-center relative z-10">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Get In Touch</h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto text-lg">
            Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <a
            href="mailto:talatfaheem2@gmail.com"
            className="inline-block px-8 py-4 border border-emerald-500 text-emerald-500 font-mono rounded hover:bg-emerald-500/10 transition-colors"
          >
            Say Hello
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
