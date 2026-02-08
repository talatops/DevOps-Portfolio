"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/lib/data";
import { Cloud, Server, Container, Code, Terminal, Database, Globe, Lock, Cpu } from "lucide-react";

const iconMap: Record<string, any> = {
    "AWS": Cloud,
    "GCP": Cloud,
    "Azure": Cloud,
    "Docker": Container,
    "Kubernetes": Globe, // Abstract representation
    "Terraform": Server,
    "Ansible": Terminal,
    "Jenkins": Cpu,
    "GitHub Actions": Code,
    "Python": Code,
    "Bash": Terminal,
    "Node.js": Server,
    "React": Code,
    "Linux": Terminal,
    "Nginx": Globe,
    "SQL": Database,
};

export function SkillCloud() {
    return (
        <div className="flex flex-wrap justify-center gap-4">
            {resumeData.skills.map((skill, index) => {
                const Icon = iconMap[skill] || Code;
                return (
                    <motion.div
                        key={skill}
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(16, 185, 129, 0.2)" }}
                        className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-emerald-500/10 rounded-full cursor-default transition-colors hover:border-emerald-500/50"
                    >
                        <Icon size={18} className="text-emerald-500" />
                        <span className="text-gray-300 font-mono text-sm">{skill}</span>
                    </motion.div>
                );
            })}
        </div>
    );
}
