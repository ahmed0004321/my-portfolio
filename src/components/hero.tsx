"use client";

import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowUpRight, Mail, Github } from "lucide-react";
import { InteractiveTerminal } from "./terminal";
import { GsapReveal } from "./gsap-reveal";

export function Hero() {
    return (
        <section id="hero" className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                
                {/* Left Column: Terminal */}
                <div className="order-2 lg:order-1">
                    <GsapReveal delay={0.4}>
                        <div className="relative">
                            {/* Decorative background glow */}
                            <div className="absolute -inset-4 bg-foreground/5 blur-3xl rounded-full opacity-50 pointer-events-none" />
                            <InteractiveTerminal />
                        </div>
                    </GsapReveal>
                </div>

                {/* Right Column: Content */}
                <div className="order-1 lg:order-2 flex flex-col items-center lg:items-start text-center lg:text-left">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mb-6 px-4 py-1 rounded-full border border-border bg-surface/50 text-xs font-medium text-muted w-fit"
                    >
                        Based in Bangladesh
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4"
                    >
                        Hello, I&apos;m{" "}
                        <span className="text-foreground block mt-2 whitespace-nowrap">
                            <TypeAnimation
                                sequence={["Oasif Ahmed Rikto.", 2000, "", 500]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                        </span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-2xl md:text-3xl lg:text-4xl font-bold text-muted mb-8"
                    >
                        Full Stack Developer.
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="max-w-xl text-base md:text-lg text-muted mb-10 leading-relaxed"
                    >
                        I build <span className="text-foreground font-medium">accessible, pixel-perfect</span>, and{" "}
                        <span className="text-foreground font-medium">scalable web apps</span>. Specializing in
                        React, Next.js, and modern UI/UX architecture.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
                    >
                        <motion.a
                            href="https://www.linkedin.com/in/oasif-ahmed-rikto-30610b354/"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: "spring", stiffness: 400, damping: 15 }}
                            className="px-6 py-2.5 md:px-8 md:py-3 rounded-full bg-foreground text-background font-semibold text-sm flex items-center gap-2 hover:shadow-[0_10px_30px_-10px_rgba(255,255,255,0.3)] transition-shadow"
                        >
                            Connect now <ArrowUpRight size={18} />
                        </motion.a>
                        <motion.a
                            href="https://github.com/ahmed0004321"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: "spring", stiffness: 400, damping: 15 }}
                            className="px-6 py-2.5 md:px-8 md:py-3 rounded-full glass font-semibold text-sm flex items-center gap-2 hover:bg-foreground/5 transition-all"
                        >
                            <Github size={18} /> GitHub
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
