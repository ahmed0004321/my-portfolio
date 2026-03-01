"use client";

import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowUpRight, Mail, Github } from "lucide-react";

export function Hero() {
    return (
        <section id="hero" className="relative pt-40 pb-20 px-6 flex flex-col items-center text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-6 px-4 py-1 rounded-full border border-border bg-surface/50 text-xs font-medium text-muted"
            >
                Based in Bangladesh
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-bold tracking-tight mb-4"
            >
                Hello, I&apos;m{" "}
                <span className="text-foreground">
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
                className="text-4xl md:text-6xl font-bold text-muted mb-8"
            >
                Full Stack Developer.
            </motion.div>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="max-w-2xl text-lg text-muted mb-10 leading-relaxed"
            >
                I build <span className="text-foreground font-medium">accessible, pixel-perfect</span>, and{" "}
                <span className="text-foreground font-medium">scalable web apps</span>. Specializing in
                React, Next.js, and modern UI/UX architecture to turn ideas into digital reality.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap items-center justify-center gap-4"
            >
                <motion.a
                    href="https://www.linkedin.com/in/oasif-ahmed-rikto-30610b354/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="px-8 py-3 rounded-full bg-foreground text-background font-semibold flex items-center gap-2 hover:shadow-[0_10px_30px_-10px_rgba(255,255,255,0.3)] transition-shadow"
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
                    className="px-8 py-3 rounded-full glass font-semibold flex items-center gap-2 hover:bg-foreground/5 transition-all"
                >
                    <Github size={18} /> GitHub
                </motion.a>
                <motion.button
                    onClick={() => {
                        navigator.clipboard.writeText("oasifrikto@gmail.com");
                        alert("Email copied to clipboard!");
                    }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="px-8 py-3 rounded-full glass font-semibold flex items-center gap-2 hover:bg-foreground/5 transition-all"
                >
                    <Mail size={18} /> Copy Email
                </motion.button>
            </motion.div>
        </section>
    );
}
