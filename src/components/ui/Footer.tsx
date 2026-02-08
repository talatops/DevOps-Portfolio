"use client";

import { useState } from "react";
import { Github, Linkedin, Mail, Check, Copy } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
    const [copied, setCopied] = useState(false);
    const email = "talatfaheem2@gmail.com";

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <footer className="py-8 bg-obsidian border-t border-emerald-500/10">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-sm text-gray-500 font-mono">
                    &copy; {new Date().getFullYear()} Talat Faheem. All rights reserved.
                </div>

                <div className="flex items-center gap-6">
                    <a
                        href="https://github.com/talatops"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-emerald-500 transition-colors"
                        aria-label="GitHub"
                    >
                        <Github size={20} />
                    </a>
                    <a
                        href="https://linkedin.com/in/talat-fm"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-emerald-500 transition-colors"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={20} />
                    </a>

                    <div className="flex items-center gap-2">
                        <button
                            onClick={handleCopy}
                            className="group flex items-center gap-2 text-gray-400 hover:text-emerald-500 transition-colors"
                            aria-label="Copy Email"
                        >
                            <Mail size={20} />
                            <span className="text-sm font-mono hidden md:inline">{email}</span>
                        </button>
                        <button
                            onClick={handleCopy}
                            className="text-gray-500 hover:text-emerald-500 transition-colors"
                        >
                            {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
