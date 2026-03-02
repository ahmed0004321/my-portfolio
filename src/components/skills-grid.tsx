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
    { name: "React", category: "Frontend", icon: SiReact, level: 90 },
    { name: "Next.js", category: "Frontend", icon: SiNextdotjs, level: 85 },
    { name: "TypeScript", category: "Language", icon: SiTypescript, level: 80 },
    { name: "Node.js", category: "Backend", icon: SiNodedotjs, level: 75 },
    { name: "Express", category: "Backend", icon: SiExpress, level: 80 },
    { name: "MongoDB", category: "Database", icon: SiMongodb, level: 70 },
    { name: "PostgreSQL", category: "Database", icon: SiPostgresql, level: 65 },
    { name: "Tailwind CSS", category: "Styling", icon: SiTailwindcss, level: 95 },
    { name: "Docker", category: "DevOps", icon: SiDocker, level: 60 },
    { name: "AWS", category: "Cloud", icon: SiAmazon, level: 55 },
    { name: "Security Audit", category: "Security", icon: ShieldCheck, level: 85 },
    { name: "Pen Testing", category: "Security", icon: Terminal, level: 75 },
    { name: "Figma", category: "Design", icon: SiFigma, level: 70 },
    { name: "Python", category: "Language", icon: SiPython, level: 80 },
    { name: "Firebase", category: "Backend", icon: SiFirebase, level: 75 },
    { name: "JWT", category: "Security", icon: SiJsonwebtokens, level: 90 },
];

export function SkillsGrid() {
    return (
        <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
                <span className="text-2xl opacity-50 font-mono">{">_"}</span>
                <h2 className="text-3xl font-bold tracking-tight">The Secret Sauce</h2>
            </div>

            <GsapStaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerAmount={0.06}>
                {skills.map((skill) => (
                    <motion.div
                        key={skill.name}
                        whileHover={{
                            y: -8,
                            scale: 1.02,
                            boxShadow: "0 20px 40px -12px rgba(0,0,0,0.3)"
                        }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        className="glass-card p-6 rounded-2xl group cursor-default relative overflow-hidden flex flex-col gap-4"
                    >
                        {/* Subtle inner glow on hover */}
                        <div className="absolute inset-0 bg-foreground/[0.02] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                        <div className="flex items-center gap-4 relative z-10 text-muted group-hover:text-foreground transition-colors duration-500">
                            <skill.icon className="w-8 h-8 group-hover:scale-110 transition-transform duration-500 ease-out" />
                            <div className="flex-1">
                                <span className="text-xs uppercase tracking-widest opacity-50 block mb-0.5">{skill.category}</span>
                                <h3 className="text-base font-bold tracking-tight">
                                    {skill.name}
                                </h3>
                            </div>
                            <span className="text-sm font-mono opacity-50 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                {skill.level}%
                            </span>
                        </div>

                        {/* Progress Bar Container */}
                        <div className="w-full h-1.5 bg-foreground/5 rounded-full overflow-hidden relative z-10">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                                className="h-full bg-foreground/30 group-hover:bg-foreground/50 transition-colors duration-500 rounded-full"
                            />
                        </div>
                    </motion.div>
                ))}
            </GsapStaggerReveal>
        </section>
    );
}
