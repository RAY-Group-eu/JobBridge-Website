"use client";

import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

export const StickyScrollTablet = ({
    titleComponent,
    children,
}: {
    titleComponent: React.ReactNode;
    children: React.ReactNode;
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // PHASE 1: Entry (0 - 0.3)
    // Tablet rotates up and scales to 1.
    const rotateX = useTransform(scrollYProgress, [0, 0.3], [20, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.3], [0.9, 1]);
    const translateYEntry = useTransform(scrollYProgress, [0, 0.3], [100, 0]);

    // Opacity fade in for smoother entry
    const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

    // PHASE 2: Sticky Inner Scroll (0.3 - 0.8)
    // The "contentTranslateY" moves the inner content of the tablet UP to simulate scrolling.
    // Assume content is taller than the frame. 
    // We scroll from 0 to -X px. Let's make it proportional or fixed value depending on content.
    // Here we scroll up by 500px (arbitrary sufficient amount for the mockup).
    const contentTranslateY = useTransform(scrollYProgress, [0.35, 0.8], [0, -500]);

    // Stickiness is handled via CSS "sticky" on the wrapper, but we need the container to be tall enough.
    // The container height determines how long we stay in the scroll phases.

    return (
        <section ref={containerRef} className="relative h-[250vh] bg-neutral-950">
            {/* Sticky Wrapper */}
            <div className="sticky top-0 h-screen flex flex-col items-center justify-start pt-20 overflow-hidden">

                {/* Title Section - Fades out slightly as we go deep into phase 2? Or stays? User said "stays pinned". */}
                <div className="relative z-20 mb-10 text-center px-4">
                    {titleComponent}
                </div>

                {/* Tablet Frame */}
                <motion.div
                    style={{
                        rotateX,
                        scale,
                        y: translateYEntry,
                        opacity,
                        perspective: "1000px",
                    }}
                    className="relative z-10"
                >
                    <div className="w-[90vw] md:w-[60rem] h-[60vh] md:h-[70vh] rounded-[30px] border-4 border-[#222] bg-[#111] shadow-2xl p-2 md:p-3 relative">
                        {/* Inner Frame (Screen) */}
                        <div className="w-full h-full rounded-[24px] overflow-hidden bg-neutral-900 border border-white/5 relative">
                            {/* Inner Content that scrolls */}
                            <motion.div style={{ y: contentTranslateY }} className="w-full origin-top">
                                {children}
                            </motion.div>

                            {/* Optional: Overlay gradient at bottom to indicate scroll? */}
                            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-neutral-900 to-transparent pointer-events-none z-20" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
