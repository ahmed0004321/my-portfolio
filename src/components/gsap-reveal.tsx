"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface GsapRevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    y?: number;
    duration?: number;
    stagger?: number;
}

export function GsapReveal({
    children,
    className = "",
    delay = 0,
    y = 60,
    duration = 1,
}: GsapRevealProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        gsap.fromTo(
            el,
            { opacity: 0, y },
            {
                opacity: 1,
                y: 0,
                duration,
                delay,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse",
                },
            }
        );

        return () => {
            ScrollTrigger.getAll().forEach((t) => {
                if (t.trigger === el) t.kill();
            });
        };
    }, [delay, y, duration]);

    return (
        <div ref={ref} className={`opacity-0 ${className}`}>
            {children}
        </div>
    );
}

export function GsapStaggerReveal({
    children,
    className = "",
    staggerAmount = 0.08,
}: {
    children: React.ReactNode;
    className?: string;
    staggerAmount?: number;
}) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const items = el.children;

        gsap.fromTo(
            items,
            { opacity: 0, y: 40, scale: 0.95 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                stagger: staggerAmount,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                },
            }
        );

        return () => {
            ScrollTrigger.getAll().forEach((t) => {
                if (t.trigger === el) t.kill();
            });
        };
    }, [staggerAmount]);

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    );
}
