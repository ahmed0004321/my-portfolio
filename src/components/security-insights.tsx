"use client";

import React from "react";
import { ArrowUpRight, Clock, Calendar } from "lucide-react";
import { GsapStaggerReveal } from "./gsap-reveal";

const articles = [
    {
        title: "Zero Trust Architecture: Rethinking Security in Modern Web Apps",
        date: "May 12, 2025",
        readTime: "8 min read",
        category: "Security",
        description: "An in-depth look at how user-centric security models are shaping the future of web development.",
    },
    {
        title: "The State of Modern Authentication: JWT vs. Session Cookies",
        date: "Apr 28, 2025",
        readTime: "6 min read",
        category: "Development",
        description: "Evaluating the pros and cons of secure authentication patterns in distributed systems.",
    },
    {
        title: "Implementing Secure Supply Chain in Node.js Projects",
        date: "Mar 15, 2025",
        readTime: "10 min read",
        category: "DevOps",
        description: "Automated ways to audit and lock down your dependencies to prevent supply chain attacks.",
    },
];

export function SecurityInsights() {
    return (
        <section id="blog" className="py-24 px-6 max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                <div>
                    <div className="flex items-center gap-4 mb-4">
                        <span className="text-2xl opacity-50 font-mono">{"//"}</span>
                        <h2 className="text-3xl font-bold tracking-tight">Security Insights</h2>
                    </div>
                    <p className="text-muted max-w-md">
                        My thoughts on cyber security, full stack development, and building robust digital products.
                    </p>
                </div>
                <button className="text-sm font-semibold flex items-center gap-2 hover:text-foreground transition-colors border-b border-transparent hover:border-foreground pb-1">
                    View all articles <ArrowUpRight size={16} />
                </button>
            </div>

            <GsapStaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerAmount={0.12}>
                {articles.map((article) => (
                    <article
                        key={article.title}
                        className="glass-card rounded-2xl overflow-hidden group flex flex-col hover:-translate-y-2 transition-transform duration-300"
                    >
                        <div className="p-8 flex flex-col flex-1">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="px-3 py-1 rounded-full bg-foreground/5 border border-border text-[10px] uppercase font-bold tracking-widest text-muted">
                                    {article.category}
                                </span>
                                <div className="flex items-center gap-1.5 text-[11px] text-muted/60">
                                    <Clock size={12} /> {article.readTime}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold mb-4 leading-tight group-hover:text-foreground transition-colors">
                                {article.title}
                            </h3>

                            <p className="text-sm text-muted leading-relaxed mb-8 flex-1">
                                {article.description}
                            </p>

                            <div className="flex items-center justify-between pt-6 border-t border-border mt-auto">
                                <div className="flex items-center gap-2 text-[11px] text-muted">
                                    <Calendar size={12} /> {article.date}
                                </div>
                                <div className="text-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                                    <ArrowUpRight size={18} />
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </GsapStaggerReveal>
        </section>
    );
}
