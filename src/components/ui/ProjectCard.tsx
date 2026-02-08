"use client";

import { motion } from "framer-motion";
import { Folder, Github, ExternalLink, ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
    title: string;
    subtitle: string;
    slug: string;
    description: string;
    tech: string[];
    isPrivate?: boolean;
    links?: {
        github?: string;
        demo?: string;
    };
}

export function ProjectCard({ title, subtitle, slug, description, tech, links, isPrivate }: ProjectCardProps) {
    return (
        <Link href={`/projects/${slug}`}>
            <motion.div
                whileHover={{ y: -5 }}
                className="h-full flex flex-col justify-between p-8 bg-white/5 backdrop-blur-sm border border-emerald-900/30 rounded-xl hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] transition-all duration-300 group cursor-pointer"
            >
                <div>
                    <div className="flex justify-between items-start mb-6">
                        <Folder size={40} className="text-emerald-500 group-hover:text-emerald-400 transition-colors" />
                        <div className="flex flex-col items-end gap-2">
                            <ArrowUpRight size={20} className="text-emerald-500/50 group-hover:text-emerald-500 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                            {isPrivate && (
                                <span className="text-[10px] font-mono text-amber-500/70 bg-amber-500/5 border border-amber-500/20 px-2 py-0.5 rounded leading-none uppercase tracking-wider">
                                    Private
                                </span>
                            )}
                        </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">{title}</h3>
                    <p className="text-emerald-500/70 text-sm font-mono mb-4">{subtitle}</p>

                    <p className="text-gray-400 mb-6 leading-relaxed line-clamp-3">
                        {description}
                    </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                    {tech.map((t) => (
                        <span key={t} className="text-xs font-mono text-emerald-300 bg-emerald-900/20 px-3 py-1 rounded-full border border-emerald-500/10">
                            {t}
                        </span>
                    ))}
                </div>
            </motion.div>
        </Link>
    );
}
