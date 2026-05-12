"use client";

import React from "react";

export function GridBackground() {
    return (
        <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden h-full w-full">
            {/* Architectural Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:44px_44px]" />
        </div>
    );
}
