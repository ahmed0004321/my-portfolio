"use client";

import React from "react";
import { motion } from "framer-motion";

const techIcons = [
    "Tailwind", "Bootstrap", "React", "Next.js", "JavaScript", "Python", "Docker", "MongoDB", "Express js", "Node.js"
];

export function TechMarquee() {
    return (
        <div className="py-12 border-y border-border bg-surface/30 overflow-hidden select-none marquee-container">
            <div className="flex whitespace-nowrap">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="flex items-center gap-20 py-2"
                >
                    {[...techIcons, ...techIcons].map((tech, index) => (
                        <span
                            key={index}
                            className="text-2xl md:text-3xl font-black text-muted/20 hover:text-foreground/40 transition-colors uppercase italic tracking-tighter"
                        >
                            {tech}
                        </span>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
