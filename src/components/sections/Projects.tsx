"use client";

import { resumeData } from "@/lib/data";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Projects() {
    return (
        <section id="projects" className="py-20 bg-emerald-900/5">
            <div className="container mx-auto px-6">
                <ScrollReveal>
                    <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
                        <span className="text-emerald-500 font-mono text-xl mr-2">02.</span>
                        Featured Projects
                    </h2>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
                    {resumeData.projects.map((project, index) => (
                        <ScrollReveal key={index} delay={index * 0.1}>
                            <ProjectCard {...project} />
                        </ScrollReveal>
                    ))}

                    {/* Placeholder for visual balance/grid if needed, or more projects */}
                    <ScrollReveal delay={0.3}>
                        <div className="h-full flex flex-col justify-center items-center p-8 border border-dashed border-emerald-900/30 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
                            <span className="text-emerald-500/50 group-hover:text-emerald-400 text-lg font-mono">View More on GitHub</span>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
