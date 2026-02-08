"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { resumeData } from "@/lib/data";
import { Menu, X } from "lucide-react";

const navItems = [
    { name: "Home", href: "/" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
];

export function Navbar() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Prevent scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => { document.body.style.overflow = "unset"; };
    }, [isMenuOpen]);

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 border-b backdrop-blur-md bg-obsidian/70 border-emerald-500/10"
        >
            <div className="flex items-center gap-2">
                <Link href="/" className="text-xl font-bold font-mono tracking-tighter text-emerald-500 hover:text-emerald-400 transition-colors">
                    &lt;TF /&gt;
                </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
                {navItems.map((item, index) => {
                    const isHome = item.name === "Home";
                    const displayIndex = index;

                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-emerald-400 font-mono",
                                pathname === item.href ? "text-emerald-500" : "text-gray-400"
                            )}
                        >
                            {!isHome && (
                                <span className="text-emerald-500/50 mr-1">
                                    0{displayIndex}.
                                </span>
                            )}
                            {item.name}
                        </Link>
                    );
                })}
            </div>

            <div className="hidden md:block">
                <a
                    href={resumeData.socials.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-xs font-mono font-bold text-obsidian bg-emerald-500 rounded hover:bg-emerald-400 transition-colors"
                >
                    RESUME
                </a>
            </div>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden text-emerald-500 z-[60] p-2 hover:bg-emerald-500/10 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle Menu"
            >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Navigation Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[55] bg-obsidian/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
                    >
                        {navItems.map((item, index) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsMenuOpen(false)}
                                className={cn(
                                    "text-3xl font-bold font-mono transition-colors",
                                    pathname === item.href ? "text-emerald-500" : "text-gray-400"
                                )}
                            >
                                <span className="text-emerald-500/30 mr-4 text-xl">0{index}.</span>
                                {item.name}
                            </Link>
                        ))}
                        <a
                            href={resumeData.socials.resume}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-8 px-12 py-4 text-lg font-mono font-bold text-obsidian bg-emerald-500 rounded hover:bg-emerald-400 transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            RESUME
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
