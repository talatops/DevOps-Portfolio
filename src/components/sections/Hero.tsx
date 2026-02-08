"use client";

import { motion } from "framer-motion";
import { TerminalHero } from "@/components/ui/TerminalHero";
import { SystemStatus } from "@/components/ui/SystemStatus";
import { resumeData } from "@/lib/data";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Grid Effect */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98110_1px,transparent_1px),linear-gradient(to_bottom,#10b98110_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <SystemStatus />
                    <h1 className="mt-6 text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
                        {resumeData.name}
                    </h1>
                    <p className="text-xl md:text-2xl text-emerald-400 font-mono mb-8">
                        &gt; {resumeData.title}
                    </p>
                    <p className="text-gray-400 max-w-lg mb-10 text-lg leading-relaxed">
                        {resumeData.summary}
                    </p>

                    <div className="flex gap-4">
                        <a
                            href="#projects"
                            className="px-6 py-3 bg-emerald-500 text-obsidian font-bold rounded hover:bg-emerald-400 transition-all hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]"
                        >
                            View Projects
                        </a>
                        <a
                            href="#contact"
                            className="px-6 py-3 border border-emerald-500/50 text-emerald-400 rounded hover:bg-emerald-500/10 transition-colors"
                        >
                            Contact Me
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-lime-500 rounded-lg blur opacity-20 animate-pulse"></div>
                    <TerminalHero />
                </motion.div>
            </div>
        </section>
    );
}
