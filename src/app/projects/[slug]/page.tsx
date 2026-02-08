"use client";

import { use } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink, ChevronRight } from "lucide-react";
import { resumeData } from "@/lib/data";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const project = resumeData.projects.find((p) => p.slug === slug);

    if (!project) {
        return (
            <div className="min-h-screen bg-obsidian flex flex-col items-center justify-center text-white">
                <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                <Link href="/" className="text-emerald-500 hover:underline flex items-center gap-2">
                    <ArrowLeft size={20} /> Back to Home
                </Link>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-obsidian text-gray-200">
            <Navbar />

            <section className="pt-32 pb-20">
                <div className="container mx-auto px-6 max-w-5xl">
                    <ScrollReveal>
                        <Link
                            href="/#projects"
                            className="inline-flex items-center gap-2 text-emerald-500 hover:text-emerald-400 transition-colors mb-8 font-mono text-sm"
                        >
                            <ArrowLeft size={16} /> Back to Projects
                        </Link>

                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                            <div>
                                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                                    {project.title}
                                </h1>
                                <p className="text-xl text-emerald-500/80 font-mono">
                                    {project.subtitle}
                                </p>
                            </div>

                            <div className="flex flex-col gap-4">
                                <div className="flex flex-wrap gap-4">
                                    {project.links?.github && (
                                        <a
                                            href={project.links.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-3 px-6 py-3 bg-white/5 border border-emerald-500/20 rounded-lg hover:bg-emerald-500/10 hover:border-emerald-500/50 transition-all text-emerald-400 font-mono font-bold w-full md:w-fit"
                                        >
                                            <Github size={20} /> Code
                                        </a>
                                    )}
                                    {project.links?.demo && (
                                        <a
                                            href={project.links.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-3 px-6 py-3 bg-emerald-500 text-obsidian rounded-lg hover:bg-emerald-400 transition-all font-mono font-bold w-full md:w-fit"
                                        >
                                            <ExternalLink size={20} /> Live Demo
                                        </a>
                                    )}
                                </div>
                                {project.isPrivate && (
                                    <div className="flex items-center gap-2 px-4 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-md text-amber-500 text-xs font-mono w-fit">
                                        <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
                                        Private Repository
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-16">
                            {project.tech.map((t) => (
                                <span key={t} className="px-3 py-1 bg-emerald-500/5 border border-emerald-500/10 rounded-full text-emerald-500/70 text-xs font-mono">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </ScrollReveal>

                    <div className="space-y-20">
                        <ScrollReveal delay={0.1}>
                            <div className="max-w-3xl">
                                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                    <span className="text-emerald-500 font-mono text-lg">01.</span>
                                    About the Project
                                </h2>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    {project.longDescription}
                                </p>
                            </div>
                        </ScrollReveal>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                            <ScrollReveal delay={0.2}>
                                <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                                    <span className="text-emerald-500 font-mono text-lg">02.</span>
                                    Key Features
                                </h2>
                                <ul className="space-y-6">
                                    {project.features?.map((feature, i) => (
                                        <li key={i} className="flex gap-4 text-gray-400 group">
                                            <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0 group-hover:scale-150 transition-transform duration-300" />
                                            <span className="group-hover:text-gray-200 transition-colors">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </ScrollReveal>

                            <ScrollReveal delay={0.3}>
                                <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                                    <span className="text-emerald-500 font-mono text-lg">03.</span>
                                    Technical Challenges
                                </h2>
                                <div className="space-y-4">
                                    {project.challenges?.map((challenge, i) => (
                                        <div key={i} className="p-5 bg-white/5 border border-emerald-900/20 rounded-xl hover:border-emerald-500/30 transition-all duration-300">
                                            <p className="text-gray-400 text-sm italic leading-relaxed group-hover:text-gray-300 transition-colors">
                                                "{challenge}"
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
