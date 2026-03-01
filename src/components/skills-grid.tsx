"use client";

import React from "react";
import { motion } from "framer-motion";
import { GsapStaggerReveal } from "./gsap-reveal";
import {
    SiReact, SiNextdotjs, SiTypescript, SiNodedotjs,
    SiExpress, SiMongodb, SiPostgresql, SiTailwindcss,
    SiDocker, SiAmazon, SiFigma, SiPython, SiFirebase, SiJsonwebtokens
} from "react-icons/si";
import { ShieldCheck, Terminal } from "lucide-react";

const skills = [
    { name: "React", category: "Frontend", icon: SiReact },
    { name: "Next.js", category: "Frontend", icon: SiNextdotjs },
    { name: "TypeScript", category: "Language", icon: SiTypescript },
    { name: "Node.js", category: "Backend", icon: SiNodedotjs },
    { name: "Express", category: "Backend", icon: SiExpress },
    { name: "MongoDB", category: "Database", icon: SiMongodb },
    { name: "PostgreSQL", category: "Database", icon: SiPostgresql },
    { name: "Tailwind CSS", category: "Styling", icon: SiTailwindcss },
    { name: "Docker", category: "DevOps", icon: SiDocker },
    { name: "AWS", category: "Cloud", icon: SiAmazon },
    { name: "Security Audit", category: "Security", icon: ShieldCheck },
    { name: "Pen Testing", category: "Security", icon: Terminal },
    { name: "Figma", category: "Design", icon: SiFigma },
    { name: "Python", category: "Language", icon: SiPython },
    { name: "Firebase", category: "Backend", icon: SiFirebase },
    { name: "JWT", category: "Security", icon: SiJsonwebtokens },
];

export function SkillsGrid() {
    return (
        <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
                <span className="text-2xl opacity-50 font-mono">{">_"}</span>
                <h2 className="text-3xl font-bold tracking-tight">The Secret Sauce</h2>
            </div>

            <GsapStaggerReveal className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" staggerAmount={0.06}>
                {skills.map((skill) => (
                    <motion.div
                        key={skill.name}
                        whileHover={{
                            y: -8,
                            scale: 1.02,
                            boxShadow: "0 20px 40px -12px rgba(0,0,0,0.3)"
                        }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        className="glass-card p-6 rounded-2xl group cursor-default relative overflow-hidden"
                    >
                        {/* Subtle inner glow on hover */}
                        <div className="absolute inset-0 bg-foreground/[0.02] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                        <div className="flex flex-col items-center justify-center gap-4 py-4 relative z-10">
                            <skill.icon className="w-10 h-10 text-muted group-hover:text-foreground group-hover:scale-110 transition-all duration-500 ease-out" />
                            <h3 className="text-lg font-semibold group-hover:text-foreground transition-colors duration-500 text-center tracking-tight">
                                {skill.name}
                            </h3>
                        </div>
                    </motion.div>
                ))}
            </GsapStaggerReveal>
        </section>
    );
}
