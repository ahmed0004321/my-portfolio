import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    status: string;
    images?: string[];
    liveLink?: string;
    repoLink?: string;
}

const MotionImage = motion(Image);

export function ProjectCard({ title, description, tags, status, images, liveLink, repoLink }: ProjectCardProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const nextImage = (e?: React.MouseEvent) => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        if (images && images.length > 0) {
            setCurrentImageIndex((prev) => (prev + 1) % images.length);
        }
    };

    const prevImage = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (images && images.length > 0) {
            setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
        }
    };

    useEffect(() => {
        if (images && images.length > 1) {
            const interval = setInterval(() => {
                nextImage();
            }, 4000); // Auto-slide every 4 seconds
            return () => clearInterval(interval);
        }
    }, [images]);

    // Handle ESC key to close modal
    useEffect(() => {
        if (!isModalOpen) return;
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsModalOpen(false);
        };
        window.addEventListener("keydown", handleEsc);
        return () => {
            window.removeEventListener("keydown", handleEsc);
        };
    }, [isModalOpen]);

    return (
        <>
            <motion.div
                whileHover={{
                    y: -12,
                    boxShadow: "0 30px 60px -12px rgba(0,0,0,0.4)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onClick={() => setIsModalOpen(true)}
                className="glass-card rounded-2xl overflow-hidden group flex flex-col h-full cursor-pointer relative"
            >
                {/* Expand Hint */}
                <div className="absolute top-12 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-foreground/10 backdrop-blur-md p-2 rounded-lg border border-border">
                    <Maximize2 size={16} className="text-foreground" />
                </div>

                {/* Header */}
                <div className="px-4 py-2 border-b border-border bg-foreground/5 flex items-center justify-between">
                    <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 group-hover:bg-red-500/50 transition-colors" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 group-hover:bg-yellow-500/50 transition-colors" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 group-hover:bg-green-500/50 transition-colors" />
                    </div>
                    <span className="text-[10px] font-mono text-muted/50 uppercase tracking-widest leading-none">
                        {status}
                    </span>
                </div>

                <div className="p-8 flex flex-col flex-1">
                    {/* Visual Slider */}
                    <div className="w-full aspect-video rounded-xl bg-surface border border-border mb-8 relative overflow-hidden group/slider">
                        <AnimatePresence mode="wait">
                            {images && images.length > 0 ? (
                                <MotionImage
                                    key={images[currentImageIndex]}
                                    src={images[currentImageIndex]}
                                    alt={`${title} screenshot`}
                                    fill
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.4 }}
                                    className="object-cover"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center relative">
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-accent)_0%,_transparent_70%)] opacity-10 group-hover:opacity-20 transition-opacity" />
                                    <div className="text-4xl font-black text-foreground/5 select-none">{title.split(" ")[0]}</div>
                                </div>
                            )}
                        </AnimatePresence>

                        {/* Manual Navigation Controls */}
                        {images && images.length > 1 && (
                            <>
                                <button
                                    onClick={prevImage}
                                    className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/50 backdrop-blur-sm opacity-0 group-hover/slider:opacity-100 transition-opacity hover:bg-background border border-border z-20"
                                >
                                    <ChevronLeft size={16} />
                                </button>
                                <button
                                    onClick={nextImage}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/50 backdrop-blur-sm opacity-0 group-hover/slider:opacity-100 transition-opacity hover:bg-background border border-border z-20"
                                >
                                    <ChevronRight size={16} />
                                </button>

                                {/* Pagination Dots */}
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                                    {images.map((_, i) => (
                                        <div
                                            key={i}
                                            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === currentImageIndex ? "bg-foreground w-4" : "bg-foreground/20"
                                                }`}
                                        />
                                    ))}
                                </div>
                            </>
                        )}
                    </div>

                    <h3 className="text-2xl font-bold mb-4 group-hover:text-foreground transition-colors text-ellipsis overflow-hidden whitespace-nowrap">
                        {title}
                    </h3>

                    <p className="text-muted leading-relaxed mb-8 flex-1 line-clamp-3 overflow-hidden">
                        {description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-2.5 py-1 rounded-md bg-foreground/5 border border-border text-[10px] uppercase font-bold tracking-widest text-muted/80"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="flex items-center gap-4 pt-6 border-t border-border mt-auto">
                        <a
                            href={liveLink || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex-1 py-2.5 rounded-lg bg-foreground/10 hover:bg-foreground text-foreground hover:text-background text-sm font-semibold transition-all flex items-center justify-center gap-2"
                        >
                            View Live <ArrowUpRight size={16} />
                        </a>
                        <a
                            href={repoLink || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-2.5 rounded-lg border border-border hover:bg-foreground/5 text-muted hover:text-foreground transition-all"
                        >
                            <Github size={18} />
                        </a>
                    </div>
                </div>
            </motion.div>

            {/* Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
                    >
                        {/* Backdrop */}
                        <motion.div
                            initial={{ backdropFilter: "blur(0px)" }}
                            animate={{ backdropFilter: "blur(8px)" }}
                            className="absolute inset-0 bg-background/60"
                            onClick={() => setIsModalOpen(false)}
                        />

                        {/* Content Container */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="glass-card w-full max-w-6xl max-h-[650px] overflow-y-scroll rounded-3xl relative z-10 flex flex-col border border-border/50 shadow-2xl scrollbar-hide cursor-default"
                            onClick={() => setIsModalOpen(false)}
                        >
                            {/* Modal Header */}
                            <div
                                className="sticky top-0 z-30 px-6 py-4 border-b border-border bg-background/80 backdrop-blur-xl flex items-center justify-between"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="flex items-center gap-4">
                                    <div className="flex gap-1.5 grayscale">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
                                    </div>
                                    <h2 className="text-lg font-bold tracking-tight">{title}</h2>
                                </div>
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="p-2 rounded-xl hover:bg-foreground/5 text-muted hover:text-foreground transition-colors"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="p-6 md:p-10 flex flex-col gap-10">
                                {/* Large Gallery */}
                                <div className="w-full aspect-video md:aspect-[21/9] rounded-2xl bg-surface border border-border relative overflow-hidden group/modal-slider shadow-lg">
                                    <AnimatePresence mode="wait">
                                        {images && images.length > 0 ? (
                                            <MotionImage
                                                key={images[currentImageIndex]}
                                                src={images[currentImageIndex]}
                                                alt={`${title} screenshot`}
                                                fill
                                                initial={{ opacity: 0, scale: 1.05 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.95 }}
                                                transition={{ duration: 0.5 }}
                                                className="object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center">
                                                <div className="text-6xl font-black text-foreground/5 select-none">{title.split(" ")[0]}</div>
                                            </div>
                                        )}
                                    </AnimatePresence>

                                    {/* Modal Slider Controls */}
                                    {images && images.length > 1 && (
                                        <>
                                            <button
                                                onClick={prevImage}
                                                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/80 backdrop-blur-md opacity-0 group-hover/modal-slider:opacity-100 transition-opacity hover:bg-background border border-border z-30"
                                            >
                                                <ChevronLeft size={20} />
                                            </button>
                                            <button
                                                onClick={nextImage}
                                                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/80 backdrop-blur-md opacity-0 group-hover/modal-slider:opacity-100 transition-opacity hover:bg-background border border-border z-30"
                                            >
                                                <ChevronRight size={20} />
                                            </button>

                                            <div
                                                className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                {images.map((_, i) => (
                                                    <button
                                                        key={i}
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            setCurrentImageIndex(i);
                                                        }}
                                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentImageIndex ? "bg-foreground w-6" : "bg-foreground/20 hover:bg-foreground/40"
                                                            }`}
                                                    />
                                                ))}
                                            </div>
                                        </>
                                    )}
                                </div>

                                {/* Right Side: Details */}
                                <div className="flex flex-col">
                                    <div className="flex items-center gap-2 mb-6">
                                        <span className="px-3 py-1 rounded-full bg-foreground/5 border border-border text-[10px] uppercase font-bold tracking-widest text-muted/80">
                                            {status}
                                        </span>
                                    </div>

                                    <h3 className="text-3xl font-bold mb-6 tracking-tight">Project Overview</h3>

                                    <div className="prose prose-invert max-w-none mb-10">
                                        <p className="text-muted text-lg leading-relaxed">
                                            {description}
                                        </p>
                                    </div>

                                    <div
                                        className="mb-10"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <h4 className="text-sm font-bold uppercase tracking-widest text-foreground/40 mb-4">Core Technology</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-3 py-1.5 rounded-xl bg-foreground/5 border border-border text-xs font-semibold text-muted hover:text-foreground transition-colors"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div
                                        className="flex flex-col sm:flex-row items-center gap-4 mt-auto"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <a
                                            href={liveLink || "#"}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full sm:flex-1 py-4 rounded-2xl bg-foreground text-background text-sm font-bold transition-transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 shadow-xl"
                                        >
                                            Launch Live Site <ArrowUpRight size={18} />
                                        </a>
                                        <a
                                            href={repoLink || "#"}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full sm:w-auto p-4 rounded-2xl border border-border hover:bg-foreground/5 text-muted hover:text-foreground transition-all flex items-center justify-center"
                                        >
                                            <Github size={22} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
