"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { resumeData } from "@/lib/data";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ChevronDown, ChevronUp } from "lucide-react";

export function Experience() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section id="experience" className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <ScrollReveal>
                    <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
                        <span className="text-emerald-500 font-mono text-xl mr-2">01.</span>
                        Experience
                    </h2>
                </ScrollReveal>

                <div className="relative max-w-3xl mx-auto" ref={containerRef}>
                    {/* Timeline Line */}
                    <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-emerald-900/50 rounded-full">
                        <motion.div
                            style={{ height }}
                            className="absolute top-0 left-0 w-full bg-gradient-to-b from-emerald-500/0 via-emerald-500 to-emerald-500/0 shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                        />
                    </div>

                    <div className="space-y-12">
                        {resumeData.experience.map((job, index) => (
                            <ExperienceItem key={index} job={job} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function ExperienceItem({ job, index }: { job: any; index: number }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const visiblePoints = isExpanded ? job.points : job.points.slice(0, 2);
    const hasMore = job.points.length > 2;

    return (
        <ScrollReveal delay={index * 0.1}>
            <div className="relative pl-12 group">
                {/* Timeline Dot */}
                <div className="absolute left-[14px] top-2 w-3 h-3 rounded-full bg-obsidian border-2 border-emerald-500 z-10 group-hover:scale-125 group-hover:bg-emerald-500 transition-all duration-300 shadow-[0_0_0_4px_rgba(5,5,5,1)]"></div>

                <div className="p-6 bg-white/5 backdrop-blur-sm border border-emerald-900/30 rounded-lg hover:border-emerald-500/30 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(16,185,129,0.05)]">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                        <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                            {job.role}
                        </h3>
                        <span className="font-mono text-xs text-emerald-500/70 bg-emerald-500/10 px-3 py-1 rounded-full w-fit">
                            {job.period}
                        </span>
                    </div>

                    <div className="text-base font-semibold text-emerald-500 mb-4">
                        @ {job.company}
                    </div>

                    <ul className="space-y-2 mb-4">
                        <AnimatePresence initial={false} mode="wait">
                            {visiblePoints.map((point: string, i: number) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex gap-3 text-gray-400 text-sm md:text-base leading-relaxed"
                                >
                                    <span className="text-emerald-500 mt-1.5 min-w-[6px] h-1.5 w-1.5 rounded-full bg-emerald-500/50 block"></span>
                                    <span>{point}</span>
                                </motion.li>
                            ))}
                        </AnimatePresence>
                    </ul>

                    {hasMore && (
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="flex items-center gap-1 text-xs font-mono text-emerald-500/70 hover:text-emerald-400 transition-colors uppercase tracking-wider"
                        >
                            {isExpanded ? (
                                <>
                                    Show Less <ChevronUp size={14} />
                                </>
                            ) : (
                                <>
                                    Read More <ChevronDown size={14} />
                                </>
                            )}
                        </button>
                    )}
                </div>
            </div>
        </ScrollReveal>
    );
}
