"use client";

import { resumeData } from "@/lib/data";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { GraduationCap } from "lucide-react";

export function Education() {
    return (
        <section id="education" className="py-20 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-3xl -z-10"></div>

            <div className="container mx-auto px-6 max-w-4xl">
                <ScrollReveal>
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                        <span className="text-emerald-500 font-mono text-xl mr-2">04.</span>
                        Education
                    </h2>
                </ScrollReveal>

                <div className="grid gap-6">
                    {resumeData.education.map((edu, index) => (
                        <ScrollReveal key={index} delay={index * 0.1}>
                            <div className="relative group p-6 bg-white/5 backdrop-blur-sm border border-emerald-900/30 rounded-xl hover:border-emerald-500/30 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(16,185,129,0.05)]">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-emerald-500/10 rounded-lg text-emerald-500 group-hover:scale-110 transition-transform duration-300">
                                        <GraduationCap size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                                            {edu.university}
                                        </h3>
                                        <p className="text-lg text-gray-300 mt-1">
                                            {edu.degree}
                                        </p>
                                        {edu.period && (
                                            <p className="text-sm font-mono text-emerald-500/70 mt-2">
                                                {edu.period}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
