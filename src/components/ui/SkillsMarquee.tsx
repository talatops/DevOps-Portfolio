"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/lib/data";

export function SkillsMarquee() {
    // Split skills into 3 chunks for multiple rows
    const chunkSize = Math.ceil(resumeData.skills.length / 3);
    const row1 = resumeData.skills.slice(0, chunkSize);
    const row2 = resumeData.skills.slice(chunkSize, chunkSize * 2);
    const row3 = resumeData.skills.slice(chunkSize * 2);

    return (
        <div className="relative w-full overflow-hidden py-10 space-y-6">
            {/* Left fade */}
            <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-obsidian to-transparent z-10 pointer-events-none"></div>
            {/* Right fade */}
            <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-obsidian to-transparent z-10 pointer-events-none"></div>

            <MarqueeRow skills={row1} duration={30} />
            <MarqueeRow skills={row2} duration={30} direction="right" />
            <MarqueeRow skills={row3} duration={30} />
        </div>
    );
}

function MarqueeRow({ skills, duration, direction = "left" }: { skills: string[], duration: number, direction?: "left" | "right" }) {
    return (
        <div className="flex gap-4 overflow-hidden select-none">
            <MarqueeContent skills={skills} duration={duration} direction={direction} />
            <MarqueeContent skills={skills} duration={duration} direction={direction} />
        </div>
    );
}

function MarqueeContent({ skills, duration, direction }: { skills: string[], duration: number, direction: "left" | "right" }) {
    return (
        <motion.div
            initial={{ x: direction === "left" ? 0 : "-100%" }}
            animate={{ x: direction === "left" ? "-100%" : 0 }}
            transition={{
                duration: duration,
                repeat: Infinity,
                ease: "linear",
            }}
            className="flex gap-4 min-w-full flex-shrink-0"
        >
            {skills.map((skill, index) => (
                <div
                    key={index}
                    className="flex-shrink-0 px-6 py-3 bg-white/5 border border-emerald-500/20 rounded-full text-emerald-400 font-mono text-sm hover:bg-emerald-500/10 hover:border-emerald-500/50 hover:text-emerald-300 transition-all cursor-default whitespace-nowrap"
                >
                    {skill}
                </div>
            ))}
        </motion.div>
    );
}
