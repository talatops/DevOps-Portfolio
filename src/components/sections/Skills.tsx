"use client";

import { SkillsMarquee } from "@/components/ui/SkillsMarquee";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Skills() {
    return (
        <section id="skills" className="py-20 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl -z-10"></div>

            <div className="container mx-auto px-6 max-w-4xl text-center">
                <ScrollReveal>
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">
                        <span className="text-emerald-500 font-mono text-xl mr-2">03.</span>
                        Technical Arsenal
                    </h2>
                    <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
                        A comprehensive set of tools and technologies I use to build scalable, secure, and efficient cloud infrastructure.
                    </p>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                    <SkillsMarquee />
                </ScrollReveal>
            </div>
        </section>
    );
}
