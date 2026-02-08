"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const COMMANDS = [
    { cmd: "terraform plan", output: ["Plan: 24 to add, 0 to change, 0 to destroy.", "Infrastructure synchronized."] },
    { cmd: "docker build -t production-ready .", output: ["Step 1/12 : FROM node:20-alpine", "Build success: image devops-noir:latest"] },
    { cmd: "kubectl get pods -n production", output: ["NAME                READY   STATUS    RESTARTS", "api-gateway-v1      1/1     Running   0", "auth-service-v3     1/1     Running   0"] },
    { cmd: "trivy image portal-ui", output: ["Vulnerabilities: 0 High, 0 Medium", "Security scan: PASSED"] },
    { cmd: "ansible-playbook site.yml", output: ["PLAY [Optimizing clusters] *", "ok: [aws-eks-node-01]", "changed: [aws-eks-node-02]"] },
];

export function TerminalHero() {
    const [lines, setLines] = useState<{ text: string; type: "cmd" | "out" | "info" }[]>([]);
    const [currentLine, setCurrentLine] = useState("");
    const [cmdIndex, setCmdIndex] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let isMounted = true;

        const runTerminal = async () => {
            while (isMounted) {
                const commandObj = COMMANDS[cmdIndex];

                // Typing the command
                for (let i = 0; i <= commandObj.cmd.length; i++) {
                    if (!isMounted) return;
                    setCurrentLine(commandObj.cmd.substring(0, i));
                    await new Promise(r => setTimeout(r, 60 + Math.random() * 40));
                }

                // Push command to history
                setLines(prev => [...prev.slice(-15), { text: `➜ ~ ${commandObj.cmd}`, type: "cmd" }]);
                setCurrentLine("");
                await new Promise(r => setTimeout(r, 500));

                // Show output
                for (const out of commandObj.output) {
                    if (!isMounted) return;
                    setLines(prev => [...prev.slice(-15), { text: out, type: "out" }]);
                    await new Promise(r => setTimeout(r, 200 + Math.random() * 300));
                }

                setCmdIndex((prev) => (prev + 1) % COMMANDS.length);
                await new Promise(r => setTimeout(r, 1500));
            }
        };

        runTerminal();
        return () => { isMounted = false; };
    }, [cmdIndex]);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [lines, currentLine]);

    return (
        <div className="w-full max-w-2xl bg-[#0a192f]/80 backdrop-blur-md border border-emerald-500/10 rounded-lg overflow-hidden shadow-2xl shadow-emerald-500/5 group hover:border-emerald-500/30 transition-all duration-500">
            <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-emerald-500/10">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/40 group-hover:bg-red-500/60 transition-colors"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/40 group-hover:bg-yellow-500/60 transition-colors"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/40 group-hover:bg-green-500/60 transition-colors"></div>
                </div>
                <div className="text-[10px] text-emerald-500/40 font-mono tracking-widest uppercase">talatops@sys-kernel</div>
            </div>

            <div
                ref={scrollRef}
                className="p-6 font-mono text-xs md:text-sm h-[280px] overflow-y-auto scrollbar-hide flex flex-col gap-1.5"
            >
                <div className="text-emerald-500/40 mb-4 border-b border-emerald-500/5 pb-2">
                    # TalatOS System Kernal v2.4.0-release
                    <br /># Connection: SECURE_SOCKET_ESTABLISHED
                </div>

                <AnimatePresence mode="popLayout">
                    {lines.map((line, i) => (
                        <motion.div
                            key={`line-${i}`}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className={`${line.type === "cmd" ? "text-emerald-300" :
                                    line.type === "out" ? "text-gray-400" : "text-emerald-500/50"
                                }`}
                        >
                            {line.text}
                        </motion.div>
                    ))}
                </AnimatePresence>

                <div className="flex items-center text-emerald-300">
                    <span className="text-emerald-600 mr-2">➜</span>
                    <span className="text-emerald-500/60 mr-2">~</span>
                    {currentLine}
                    <motion.span
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                        className="inline-block w-2 h-4 bg-emerald-500 ml-1"
                    />
                </div>
            </div>
        </div>
    );
}
