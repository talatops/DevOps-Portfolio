"use client";

import { resumeData } from "@/lib/data";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Stats() {
    return (
        <section className="py-10 border-y border-emerald-500/10 bg-white/5 backdrop-blur-sm">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                    {resumeData.stats.map((stat, index) => (
                        <ScrollReveal key={index} delay={index * 0.1}>
                            <div className="text-center group hover:bg-white/5 p-4 rounded transition-colors duration-300">
                                <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                                    {stat.value}
                                </div>
                                <div className="text-xs md:text-sm font-mono text-emerald-500/70 uppercase tracking-wider">
                                    {stat.label}
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
