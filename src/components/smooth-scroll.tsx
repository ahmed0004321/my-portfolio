"use client";

import { ReactLenis } from "@studio-freight/react-lenis";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
    return (
        <ReactLenis root options={{ lerp: 0.5, duration: 0.6, smoothWheel: true }}>
            {children as any}
        </ReactLenis>
    );
}
