"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function CustomCursor() {
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring configuration for the trailer
    const springConfig = { damping: 25, stiffness: 250 };
    const trailerX = useSpring(mouseX, springConfig);
    const trailerY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);

        const checkHover = () => {
            const hoveredEl = document.querySelectorAll(
                'a, button, [role="button"], .group, input, textarea'
            );

            hoveredEl.forEach((el) => {
                el.addEventListener("mouseenter", () => setIsHovering(true));
                el.addEventListener("mouseleave", () => setIsHovering(false));
            });
        };

        window.addEventListener("mousemove", moveCursor);
        document.addEventListener("mouseenter", handleMouseEnter);
        document.addEventListener("mouseleave", handleMouseLeave);

        checkHover();

        // Re-check for new elements occasionally (e.g., if content loads dynamically)
        const interval = setInterval(checkHover, 1000);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            document.removeEventListener("mouseenter", handleMouseEnter);
            document.removeEventListener("mouseleave", handleMouseLeave);
            clearInterval(interval);
        };
    }, [mouseX, mouseY, isVisible]);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] mix-blend-difference">
            {/* The primary small dot */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full"
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            />

            {/* The larger trailing ring */}
            <motion.div
                className="fixed top-0 left-0 border border-white/50 rounded-full"
                animate={{
                    width: isHovering ? 60 : 32,
                    height: isHovering ? 60 : 32,
                    backgroundColor: isHovering ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0)",
                }}
                style={{
                    x: trailerX,
                    y: trailerY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                transition={{ type: "spring", stiffness: 250, damping: 25 }}
            />
        </div>
    );
}
