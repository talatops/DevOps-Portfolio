"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar } from "lucide-react";
import { resumeData } from "@/lib/data";

export function Certifications() {
    return (
        <section id="certifications" className="py-24 relative overflow-hidden bg-obsidian">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-emerald-500 font-mono text-sm mb-4 flex items-center gap-2">
                        <span className="h-[1px] w-8 bg-emerald-500/50" />
                        05. Certifications
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
                        Verified Credentials
                    </h3>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {resumeData.certifications.map((cert, index) => (
                        <motion.div
                            key={cert.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative p-8 bg-white/5 border border-emerald-500/10 rounded-xl hover:border-emerald-500/30 transition-all hover:bg-emerald-500/[0.02]"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <Award className="text-emerald-500/20" size={40} />
                            </div>

                            <div className="flex items-start justify-between mb-6">
                                <div className="p-3 bg-emerald-500/10 rounded-lg text-emerald-500 group-hover:scale-110 transition-transform">
                                    <Award size={24} />
                                </div>
                                {cert.url !== "#" && (
                                    <a
                                        href={cert.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-500 hover:text-emerald-500 transition-colors"
                                    >
                                        <ExternalLink size={18} />
                                    </a>
                                )}
                            </div>

                            <h4 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                                {cert.name}
                            </h4>
                            <p className="text-gray-400 font-mono text-sm mb-4">
                                {cert.issuer}
                            </p>

                            <div className="flex items-center gap-2 text-gray-500 text-xs font-mono">
                                <Calendar size={14} />
                                {cert.date}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
