"use client";

import React from "react";
import { motion, MotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { StickyScrollTablet } from "@/components/ui/sticky-scroll-tablet";

type JobItem = {
    title: string;
    location: string;
    price: string;
    description: string;
    category: string;
    duration: string;
};

const jobs: JobItem[] = [
    {
        title: "Gartenhilfe am Samstag",
        location: "Rheinbach Zentrum",
        price: "17 EUR / Std.",
        description: "Hecke schneiden und Beete säubern (ca. 2 Stunden).",
        category: "Garten",
        duration: "2 Std.",
    },
    {
        title: "Einkaufshilfe für Senior",
        location: "Meckenheim",
        price: "15 EUR / Std.",
        description: "Wocheneinkauf begleiten und Taschen ins Haus tragen.",
        category: "Einkauf",
        duration: "1-2 Std.",
    },
    {
        title: "Hundespaziergang nachmittags",
        location: "Wormersdorf",
        price: "14 EUR / Std.",
        description: "45 Minuten Spaziergang mit ruhigem Familienhund.",
        category: "Tierpflege",
        duration: "45 Min.",
    },
    {
        title: "Laptop einrichten zuhause",
        location: "Rheinbach Nord",
        price: "18 EUR / Std.",
        description: "WLAN einrichten und Drucker verbinden (ca. 90 Minuten).",
        category: "Technik",
        duration: "90 Min.",
    },
];

const selectedJob = jobs[1];

export function HeroScrollDemo() {
    return (
        <div className="relative bg-[#02040b]">
            <StickyScrollTablet
                titleComponent={
                    <>
                        <h2 className="text-balance text-4xl font-semibold tracking-tight text-white md:text-6xl">
                            So funktioniert{" "}
                            <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                                JobBridge
                            </span>
                        </h2>
                        <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-neutral-200 md:text-lg">
                            Fokus auf den Kern: Jobs finden, Job öffnen, bewerben, Bestätigung erhalten.
                        </p>
                    </>
                }
            >
                {(scrollYProgress) => <PlatformSequence scrollYProgress={scrollYProgress} />}
            </StickyScrollTablet>
        </div>
    );
}

function PlatformSequence({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
    const reduceMotion = useReducedMotion();
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 140,
        damping: 34,
        mass: 0.35,
        restDelta: 0.001,
    });

    const feedOpacity = useTransform(smoothProgress, [0, 0.38, 0.46, 1], [1, 1, 0, 0]);
    const feedScale = useTransform(smoothProgress, [0.32, 0.46], [1, 0.985]);
    const feedY = useTransform(smoothProgress, [0.2, 0.4], [0, -24]);

    const selectedCardOpacity = useTransform(smoothProgress, [0.16, 0.29, 0.42], [0.68, 1, 0.72]);
    const cardClickPulseOpacity = useTransform(smoothProgress, [0.21, 0.28, 0.35], [0, 0.82, 0]);
    const cardClickPulseScale = useTransform(smoothProgress, [0.21, 0.28, 0.35], [0.7, 1.3, 1.9]);
    const cardPressScale = useTransform(smoothProgress, [0.24, 0.29, 0.33], [1, 0.968, 1]);
    const cardTapDotOpacity = useTransform(smoothProgress, [0.22, 0.28, 0.34], [0, 1, 0]);
    const cardTapDotScale = useTransform(smoothProgress, [0.22, 0.28, 0.34], [0.5, 1, 0.86]);

    const stageBackdropOpacity = useTransform(smoothProgress, [0.33, 0.43, 1], [0, 0.94, 0.97]);

    const detailOpacity = useTransform(smoothProgress, [0.4, 0.52, 0.66, 0.74], [0, 1, 1, 0]);
    const detailScale = useTransform(smoothProgress, [0.4, 0.52], [0.955, 1]);
    const detailY = useTransform(smoothProgress, [0.4, 0.52], [24, 0]);

    const applyOpacity = useTransform(smoothProgress, [0.68, 0.77, 0.86, 0.91], [0, 1, 1, 0]);
    const applyScale = useTransform(smoothProgress, [0.68, 0.77], [0.955, 1]);
    const applyY = useTransform(smoothProgress, [0.68, 0.77], [24, 0]);

    const successOpacity = useTransform(smoothProgress, [0.85, 0.9], [0, 1]);
    const successScale = useTransform(smoothProgress, [0.85, 0.9], [0.95, 1]);
    const successY = useTransform(smoothProgress, [0.85, 0.9], [24, 0]);
    const checkDropY = useTransform(smoothProgress, [0.85, 0.9, 0.94], [-120, 16, 0]);
    const checkScale = useTransform(smoothProgress, [0.85, 0.9, 0.94], [0.58, 1.14, 1]);
    const checkRotate = useTransform(smoothProgress, [0.85, 0.9, 0.94], [-10, 3, 0]);
    const checkOpacity = useTransform(smoothProgress, [0.85, 0.9], [0, 1]);
    const ringScale = useTransform(smoothProgress, [0.885, 0.95], [0.72, 1.12]);
    const ringOpacity = useTransform(smoothProgress, [0.885, 0.95], [0.25, 0.03]);
    const checkPathLength = useTransform(smoothProgress, [0.875, 0.94], [0, 1]);
    const detailTapPulseOpacity = useTransform(smoothProgress, [0.62, 0.67, 0.73], [0, 0.74, 0]);
    const detailTapPulseScale = useTransform(smoothProgress, [0.62, 0.67, 0.73], [0.76, 1.28, 1.84]);
    const detailButtonPressScale = useTransform(smoothProgress, [0.64, 0.675, 0.705], [1, 0.955, 1]);
    const detailTapDotOpacity = useTransform(smoothProgress, [0.64, 0.68, 0.71], [0, 1, 0]);
    const detailTapDotScale = useTransform(smoothProgress, [0.64, 0.68, 0.71], [0.55, 1, 0.88]);
    const sendTapPulseOpacity = useTransform(smoothProgress, [0.8, 0.85, 0.9], [0, 0.74, 0]);
    const sendTapPulseScale = useTransform(smoothProgress, [0.8, 0.85, 0.9], [0.74, 1.3, 1.88]);
    const sendButtonPressScale = useTransform(smoothProgress, [0.815, 0.845, 0.875], [1, 0.955, 1]);
    const sendTapDotOpacity = useTransform(smoothProgress, [0.815, 0.85, 0.88], [0, 1, 0]);
    const sendTapDotScale = useTransform(smoothProgress, [0.815, 0.85, 0.88], [0.56, 1, 0.88]);

    return (
        <div className="relative h-full overflow-hidden px-4 py-3 sm:px-5 md:px-7 md:py-4">
            <motion.div
                style={{
                    opacity: feedOpacity,
                    scale: feedScale,
                    y: reduceMotion ? 0 : feedY,
                }}
                className="absolute inset-0 flex justify-center"
            >
                <div className="flex h-full w-full max-w-5xl flex-col justify-center px-1.5 pb-3 pt-2 sm:px-2.5 md:px-3 md:pb-4 md:pt-4">
                    <div className="mb-2.5 px-0.5 sm:mb-3">
                        <h3 className="text-2xl font-semibold text-white md:text-3xl">Aktuelle Jobs</h3>
                        <p className="mt-1 text-base text-white/72">Verifizierte Aufgaben in deiner Nähe.</p>
                    </div>

                    <div className="grid grid-cols-1 auto-rows-[minmax(10rem,1fr)] gap-2.5 sm:grid-cols-2 sm:auto-rows-[minmax(11.2rem,1fr)] md:auto-rows-[minmax(12.2rem,1fr)] md:gap-3.5">
                        {jobs.map((job, index) => {
                            const selected = index === 1;
                            return (
                                <motion.article
                                    key={job.title}
                                    style={selected ? { scale: cardPressScale } : undefined}
                                    className={`relative h-full overflow-hidden rounded-xl border p-3 sm:p-3.5 md:p-5 ${
                                        selected
                                            ? "cursor-pointer border-[#90aee0]/45 bg-[#162238]/78"
                                            : "border-white/10 bg-[#0e1728]/72"
                                    } ${index > 1 ? "hidden sm:block" : ""}`}
                                >
                                    {selected && (
                                        <>
                                            <motion.div
                                                style={{ opacity: selectedCardOpacity }}
                                                className="pointer-events-none absolute inset-0 rounded-xl border border-[#a8c1ef]/38"
                                            />
                                            <motion.div
                                                style={{ opacity: cardClickPulseOpacity, scale: cardClickPulseScale }}
                                                className="pointer-events-none absolute left-[53%] top-1/2 h-11 w-11 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/65"
                                            />
                                            <motion.div
                                                style={{ opacity: cardTapDotOpacity, scale: cardTapDotScale }}
                                                className="pointer-events-none absolute left-[53%] top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
                                            />
                                        </>
                                    )}
                                    <div className="flex h-full flex-col justify-between">
                                        <div>
                                            <div className="flex items-center justify-between gap-2">
                                                <p className="text-[0.95rem] font-semibold leading-snug text-white sm:text-[1.06rem] md:text-[1.22rem]">{job.title}</p>
                                                <span className="rounded-full border border-white/12 bg-white/[0.03] px-2 py-1 text-[11px] font-medium text-slate-200 sm:text-xs md:text-sm">
                                                    {job.price}
                                                </span>
                                            </div>
                                            <p className="mt-1.5 text-[13px] leading-relaxed text-neutral-300 sm:mt-2 sm:text-sm md:text-[15px]">{job.description}</p>
                                            <div className="mt-2 hidden flex-wrap gap-1.5 sm:mt-3 sm:flex sm:gap-2">
                                                <span className="rounded-full border border-white/12 bg-white/[0.03] px-2 py-1 text-[10px] font-medium text-white/78 sm:px-2.5 sm:text-[11px]">
                                                    {job.category}
                                                </span>
                                                <span className="rounded-full border border-white/12 bg-white/[0.03] px-2 py-1 text-[10px] font-medium text-white/78 sm:px-2.5 sm:text-[11px]">
                                                    {job.duration}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="mt-1.5 inline-flex items-center gap-1 text-xs text-white/72 sm:mt-3 sm:text-sm">
                                            <MapPin className="h-3 w-3 text-white/55 sm:h-3.5 sm:w-3.5" />
                                            {job.location}
                                        </div>
                                    </div>
                                </motion.article>
                            );
                        })}
                    </div>
                </div>
            </motion.div>

            <motion.div
                style={{ opacity: stageBackdropOpacity }}
                className="pointer-events-none absolute inset-0 rounded-[1.3rem] bg-black/86 backdrop-blur-[8px]"
            />

            <motion.div
                style={{
                    opacity: detailOpacity,
                    scale: detailScale,
                    y: reduceMotion ? 0 : detailY,
                }}
                className="pointer-events-none absolute left-1/2 top-1/2 z-20 w-[86%] max-h-[84%] max-w-2xl -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl border border-white/12 bg-[#0b1322]/96 sm:w-[90%]"
            >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_0%,rgba(151,172,209,0.18),transparent_44%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_36%)]" />

                <div className="relative px-4 pb-4 pt-5 sm:px-5 md:px-6 md:pb-5 md:pt-6">
                    <div className="inline-flex items-center rounded-full border border-white/12 bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.08em] text-white/70">
                        Jobdetails
                    </div>
                    <h4 className="mt-3 text-2xl font-semibold text-white md:text-3xl">{selectedJob.title}</h4>
                    <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-white/80">
                        <span className="font-semibold text-slate-200">{selectedJob.price}</span>
                        <span className="inline-flex items-center gap-1.5">
                            <MapPin className="h-4 w-4 text-white/60" />
                            {selectedJob.location}
                        </span>
                    </div>
                </div>

                <div className="relative border-t border-white/8 px-4 py-4 sm:px-5 md:px-6 md:py-5">
                    <p className="text-xs text-white/55">Aufgabe</p>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-300">{selectedJob.description}</p>

                    <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
                        <div className="rounded-xl border border-white/12 bg-black/20 p-3 text-sm text-white/80">
                            Geprüfter Auftraggeber
                        </div>
                        <div className="rounded-xl border border-white/12 bg-black/20 p-3 text-sm text-white/80">
                            Sichere Kommunikation
                        </div>
                    </div>
                </div>

                <div className="relative flex items-center justify-end border-t border-white/8 px-4 py-4 sm:px-5 md:px-6">
                    <div className="relative">
                        <motion.div
                            style={{ opacity: detailTapPulseOpacity, scale: detailTapPulseScale }}
                            className="pointer-events-none absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/70"
                        />
                        <motion.div
                            style={{ opacity: detailTapDotOpacity, scale: detailTapDotScale }}
                            className="pointer-events-none absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
                        />
                        <motion.button
                            type="button"
                            style={{ scale: detailButtonPressScale }}
                            className="inline-flex items-center gap-2 rounded-full bg-[#36588f] px-5 py-2.5 text-sm font-medium text-white"
                        >
                            Bewerben
                            <ArrowRight className="h-4 w-4" />
                        </motion.button>
                    </div>
                </div>
            </motion.div>

            <motion.div
                style={{
                    opacity: applyOpacity,
                    scale: applyScale,
                    y: reduceMotion ? 0 : applyY,
                }}
                className="pointer-events-none absolute left-1/2 top-1/2 z-30 w-[86%] max-h-[84%] max-w-[24rem] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl border border-white/12 bg-[#0b1220]/98 p-4 sm:w-[90%] sm:p-5 md:p-6"
            >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(151,172,209,0.2),transparent_48%)]" />
                <h5 className="text-xl font-semibold text-white sm:text-2xl">Bewerbung schreiben</h5>
                <p className="mt-1 text-sm text-white/65">Für: {selectedJob.title}</p>

                <div className="mt-4 rounded-xl border border-white/12 bg-black/30 p-3 text-sm text-neutral-200">
                    Hallo, ich habe Erfahrung mit Gartenarbeit und kann am Montag ab 16:30 Uhr starten.
                </div>

                <div className="relative mt-5">
                    <motion.div
                        style={{ opacity: sendTapPulseOpacity, scale: sendTapPulseScale }}
                        className="pointer-events-none absolute left-1/2 top-1/2 h-11 w-11 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/70"
                    />
                    <motion.div
                        style={{ opacity: sendTapDotOpacity, scale: sendTapDotScale }}
                        className="pointer-events-none absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
                    />
                    <motion.button
                        type="button"
                        style={{ scale: sendButtonPressScale }}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#36588f] px-4 py-3 text-sm font-semibold text-white"
                    >
                        Bewerbung abschicken
                        <ArrowRight className="h-4 w-4" />
                    </motion.button>
                </div>
            </motion.div>

            <motion.div
                style={{
                    opacity: successOpacity,
                    scale: successScale,
                    y: reduceMotion ? 0 : successY,
                }}
                className="pointer-events-none absolute left-1/2 top-1/2 z-40 w-[84%] max-w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-emerald-300/28 bg-[#0b1220]/97 p-6 text-center backdrop-blur-xl sm:w-[90%] md:p-8"
            >
                <motion.div
                    style={{
                        opacity: ringOpacity,
                        scale: ringScale,
                    }}
                    className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-[62%] rounded-full border border-white/35"
                />
                <motion.div
                    style={{
                        y: reduceMotion ? 0 : checkDropY,
                        scale: checkScale,
                        rotate: checkRotate,
                        opacity: checkOpacity,
                    }}
                    className="mx-auto inline-flex h-24 w-24 items-center justify-center rounded-full bg-white/10"
                >
                    <motion.svg viewBox="0 0 96 96" className="h-16 w-16" fill="none" aria-hidden>
                        <motion.circle
                            cx="48"
                            cy="48"
                            r="40"
                            stroke="rgba(134,239,172,0.45)"
                            strokeWidth="4"
                            style={{ pathLength: checkPathLength, opacity: checkPathLength }}
                        />
                        <motion.path
                            d="M30 50 L42 62 L67 36"
                            stroke="#86efac"
                            strokeWidth="6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            style={{ pathLength: checkPathLength }}
                        />
                    </motion.svg>
                </motion.div>
                <p className="mt-5 text-xl font-semibold text-emerald-100 md:text-2xl">Bewerbung erfolgreich</p>
                <p className="mt-1 text-sm text-emerald-100/70">Bestätigung wurde sicher übermittelt.</p>
            </motion.div>
        </div>
    );
}
