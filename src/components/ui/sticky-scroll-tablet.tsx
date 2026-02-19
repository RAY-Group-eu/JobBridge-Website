"use client";

import React, { useRef } from "react";
import { motion, MotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";

type StickyScrollTabletProps = {
    titleComponent: React.ReactNode;
    children: React.ReactNode | ((scrollYProgress: MotionValue<number>) => React.ReactNode);
};

export const StickyScrollTablet = ({ titleComponent, children }: StickyScrollTabletProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const reduceMotion = useReducedMotion();
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 120,
        damping: 30,
        mass: 0.35,
        restDelta: 0.001,
    });

    const rotateX = useTransform(smoothProgress, [0, 0.12, 0.26], [50, 20, reduceMotion ? 0 : 1.6]);
    const rotateY = useTransform(smoothProgress, [0, 0.14, 0.26], [-18, -7, reduceMotion ? 0 : 0.8]);
    const scale = useTransform(smoothProgress, [0, 0.2], [0.63, 1]);
    const y = useTransform(smoothProgress, [0, 0.14, 0.3], [340, 110, 0]);
    const opacity = useTransform(smoothProgress, [0, 0.1, 0.2], [0, 0.78, 1]);

    const titleOpacity = useTransform(smoothProgress, [0.03, 0.12, 0.88, 1], [0, 1, 1, 0.72]);
    const titleY = useTransform(smoothProgress, [0.03, 0.14], [12, 0]);
    const reflectionX = useTransform(smoothProgress, [0, 1], ["-14%", "8%"]);
    const reflectionOpacity = useTransform(smoothProgress, [0.12, 0.4, 0.9, 1], [0.05, 0.11, 0.06, 0.04]);
    const floorShadowOpacity = useTransform(smoothProgress, [0.12, 0.48, 1], [0.16, 0.26, 0.2]);

    const renderedChildren =
        typeof children === "function"
            ? (children as (progress: MotionValue<number>) => React.ReactNode)(smoothProgress)
            : children;

    return (
        <section
            id="how-it-works"
            ref={containerRef}
            className="relative h-[560vh] overflow-clip bg-[radial-gradient(circle_at_50%_-8%,#0d1a2c_0%,#070d19_42%,#02040b_100%)]"
        >
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(2,4,11,0.85)_0%,rgba(2,4,11,0.5)_50%,rgba(2,4,11,0.9)_100%)]" />

            <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden px-3 pb-5 sm:px-5 sm:pb-7 md:px-8 md:pb-10">
                <motion.div
                    style={{ opacity: titleOpacity, y: titleY }}
                    className="relative z-20 mb-3 max-w-4xl px-4 text-center md:mb-4"
                >
                    {titleComponent}
                </motion.div>

                <motion.div
                    style={{
                        rotateX,
                        rotateY,
                        scale,
                        y,
                        opacity,
                        perspective: "1900px",
                        transformStyle: "preserve-3d",
                    }}
                    className="relative z-10 w-[min(93vw,90rem)] sm:w-[min(95vw,90rem)] md:w-[min(98vw,90rem)]"
                >
                    <div className="relative rounded-[2rem] border border-white/20 bg-[#070c16]/96 p-3 shadow-[0_46px_110px_-42px_rgba(2,5,15,0.95),0_10px_22px_rgba(2,5,15,0.45)] sm:p-3.5 md:rounded-[2.8rem] md:p-3.5">
                        <div className="relative h-[79svh] min-h-[380px] max-h-[86svh] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#030817] sm:min-h-[460px] md:min-h-[620px] md:rounded-[2.2rem]">
                            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(148,163,184,0.06),transparent_42%),linear-gradient(180deg,rgba(3,8,23,0.9),rgba(3,8,23,0.86))]" />
                            <motion.div
                                aria-hidden
                                style={{ x: reflectionX, opacity: reflectionOpacity }}
                                className="pointer-events-none absolute -left-1/4 top-0 z-20 h-full w-1/2 bg-[linear-gradient(108deg,transparent_18%,rgba(255,255,255,0.11)_42%,transparent_66%)]"
                            />
                            <div className="relative z-10 h-full">{renderedChildren}</div>
                            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-8 bg-gradient-to-t from-[#030817]/68 to-transparent" />
                        </div>
                    </div>
                    <motion.div
                        aria-hidden
                        style={{ opacity: floorShadowOpacity }}
                        className="pointer-events-none absolute -bottom-10 left-1/2 h-16 w-[72%] -translate-x-1/2 rounded-[999px] bg-black/70 blur-xl"
                    />
                </motion.div>
            </div>
        </section>
    );
};
