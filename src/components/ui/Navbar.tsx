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
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[55] bg-obsidian flex flex-col md:hidden"
                    >
                        {/* Technical Background Effects */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98108_1px,transparent_1px),linear-gradient(to_bottom,#10b98108_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
                        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent pointer-events-none" />

                        <div className="container mx-auto px-8 pt-32 relative z-10 flex flex-col h-full">
                            <motion.div
                                className="flex flex-col gap-6"
                                initial="closed"
                                animate="open"
                                variants={{
                                    open: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
                                    closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
                                }}
                            >
                                {navItems.map((item, index) => (
                                    <motion.div
                                        key={item.name}
                                        variants={{
                                            open: { x: 0, opacity: 1 },
                                            closed: { x: -20, opacity: 0 }
                                        }}
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={() => setIsMenuOpen(false)}
                                            className={cn(
                                                "group flex items-baseline gap-4 transition-all",
                                                pathname === item.href ? "text-emerald-500" : "text-gray-400"
                                            )}
                                        >
                                            <span className="text-emerald-500/30 font-mono text-sm leading-none">
                                                0{index}.
                                            </span>
                                            <span className="text-4xl md:text-5xl font-bold tracking-tighter uppercase group-hover:text-emerald-400">
                                                {item.name}
                                            </span>
                                            {pathname === item.href && (
                                                <motion.div
                                                    layoutId="mobile-active"
                                                    className="h-1 w-12 bg-emerald-500 ml-4 mb-2"
                                                />
                                            )}
                                        </Link>
                                    </motion.div>
                                ))}

                                <motion.div
                                    variants={{
                                        open: { y: 0, opacity: 1 },
                                        closed: { y: 20, opacity: 0 }
                                    }}
                                    className="mt-12 pt-12 border-t border-emerald-500/10 flex flex-col gap-8"
                                >
                                    <a
                                        href={resumeData.socials.resume}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full py-5 text-xl font-mono font-bold text-obsidian bg-emerald-500 rounded-lg hover:bg-emerald-400 transition-all text-center shadow-[0_0_30px_rgba(16,185,129,0.2)]"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        &gt; ACCESS_RESUME
                                    </a>

                                    <div className="flex flex-col gap-2 opacity-40 font-mono text-xs">
                                        <p className="">// SYSTEM_STATUS: AUTHORIZED</p>
                                        <p className="">// CONNECTION: SECURE_ENCRYPTION</p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
