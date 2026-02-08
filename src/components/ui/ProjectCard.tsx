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
    images?: string[];
    links?: {
        github?: string;
        demo?: string;
    };
}

export function ProjectCard({ title, subtitle, slug, description, tech, links, isPrivate, images }: ProjectCardProps) {
    const mainImage = images && images.length > 0 ? images[0] : null;

    return (
        <Link href={`/projects/${slug}`}>
            <motion.div
                whileHover={{ y: -5 }}
                className="h-full flex flex-col bg-white/5 backdrop-blur-sm border border-emerald-900/30 rounded-xl overflow-hidden hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] transition-all duration-300 group cursor-pointer"
            >
                {/* Project Image Header */}
                <div className="relative h-48 w-full bg-emerald-950/20 overflow-hidden">
                    {mainImage ? (
                        <img
                            src={mainImage}
                            alt={title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            onError={(e) => {
                                // Fallback if image doesn't exist yet
                                (e.target as HTMLImageElement).src = `https://placehold.co/600x400/021510/10b981?text=${title}`;
                            }}
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-emerald-950/20">
                            <Folder size={40} className="text-emerald-500/20" />
                        </div>
                    )}

                    {/* Overlay Grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98108_1px,transparent_1px),linear-gradient(to_bottom,#10b98108_1px,transparent_1px)] bg-[size:1rem_1rem]" />

                    {/* Floating Badges */}
                    <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-10">
                        <div className="p-2 bg-obsidian/80 backdrop-blur-md border border-emerald-500/20 rounded-lg text-emerald-500">
                            <Folder size={18} />
                        </div>
                        <div className="flex flex-col items-end gap-2">
                            <ArrowUpRight size={20} className="text-white/50 group-hover:text-emerald-500 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                            {isPrivate && (
                                <span className="text-[10px] font-mono text-amber-500 bg-obsidian/80 backdrop-blur-md border border-amber-500/20 px-2 py-0.5 rounded leading-none uppercase tracking-wider">
                                    Private
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Dark Gradient Bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent" />
                </div>

                <div className="p-8 flex flex-col flex-1">
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors uppercase tracking-tight">{title}</h3>
                    <p className="text-emerald-500/70 text-sm font-mono mb-4">{subtitle}</p>

                    <p className="text-gray-400 mb-6 leading-relaxed line-clamp-2 text-sm italic">
                        {description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                        {tech.slice(0, 4).map((t) => (
                            <span key={t} className="text-[10px] uppercase font-mono text-emerald-300 bg-emerald-500/5 px-2 py-1 rounded border border-emerald-500/10">
                                {t}
                            </span>
                        ))}
                        {tech.length > 4 && (
                            <span className="text-[10px] font-mono text-gray-500 px-2 py-1">
                                +{tech.length - 4}
                            </span>
                        )}
                    </div>
                </div>
            </motion.div>
        </Link>
    );
}
