"use client";

import React from "react";
import { StickyScrollTablet } from "@/components/ui/sticky-scroll-tablet";
import { Locate, Calendar, CheckCircle, ShieldCheck, MapPin } from "lucide-react";

export function HeroScrollDemo() {
    return (
        <div className="bg-neutral-950">
            <StickyScrollTablet
                titleComponent={
                    <>
                        <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6">
                            So funktioniert <span className="text-cyan-300">JobBridge</span>
                        </h2>
                        <p className="text-neutral-300 max-w-2xl mx-auto text-lg leading-relaxed">
                            Profil anlegen, Rolle wählen, Sicherheit verstehen – und dann passende
                            Taschengeldjobs in deiner Region entdecken. Alles digital, alles sicher.
                        </p>
                    </>
                }
            >
                {/* App Mockup Interface Content - Taller than the container to allow scrolling */}
                <div className="w-full bg-neutral-900 p-4 md:p-8 flex flex-col gap-6 pb-40">

                    {/* Fake App Header */}
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                            <span className="text-neutral-400 text-xs uppercase tracking-wider font-semibold">Dein Standort</span>
                            <span className="text-white font-medium flex items-center gap-2 text-lg">
                                <MapPin className="w-4 h-4 text-cyan-400" /> 53359 Rheinbach
                            </span>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold shadow-lg shadow-cyan-500/20">
                            R
                        </div>
                    </div>

                    {/* Search Bar */}
                    <div className="relative">
                        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                            <Locate className="h-4 w-4 text-neutral-500" />
                        </div>
                        <input
                            type="text"
                            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
                            placeholder="Was möchtest du erledigen?"
                            readOnly
                        />
                    </div>

                    {/* Filter Chips */}
                    <div className="flex gap-2 overflow-hidden">
                        {["Alle Jobs", "Garten", "Einkauf", "Tierpflege", "Technik"].map((filter, i) => (
                            <span key={i} className={`px-4 py-2 rounded-full text-sm font-medium border ${i === 0 ? "bg-cyan-500 text-white border-cyan-500 shadow-md shadow-cyan-900/20" : "bg-white/5 border-white/10 text-neutral-400"}`}>
                                {filter}
                            </span>
                        ))}
                    </div>

                    {/* Section Title */}
                    <h3 className="text-white font-semibold text-lg mt-2">Aktuelle Jobs in deiner Nähe</h3>

                    {/* Job Cards */}
                    <div className="space-y-4">
                        {[
                            { title: "Rasenmähen (Vorgarten)", loc: "Rheinbach Stadt", price: "20€", tag: "Garten" },
                            { title: "Einkaufshilfe für Senioren", loc: "Meckenheim", price: "15€", tag: "Einkauf" },
                            { title: "Hundespaziergang", loc: "Oberdrees", price: "12€", tag: "Tierpflege" },
                            { title: "Laub harken", loc: "Rheinbach", price: "25€", tag: "Garten" },
                            { title: "PC Drucker einrichten", loc: "Wormersdorf", price: "15€", tag: "Technik" },
                            { title: "Keller aufräumen helfen", loc: "Rheinbach", price: "30€", tag: "Haushalt" },
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 flex items-center justify-between hover:bg-white/10 transition-colors">
                                <div className="flex gap-4 items-start">
                                    <div className="w-12 h-12 rounded-xl bg-neutral-800 flex items-center justify-center border border-white/5 shrink-0">
                                        <CheckCircle className="w-6 h-6 text-neutral-600" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium text-base mb-1">{item.title}</h4>
                                        <div className="flex items-center gap-3 text-neutral-400 text-xs">
                                            <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {item.loc}</span>
                                            <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/5">{item.tag}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-right shrink-0">
                                    <span className="block text-cyan-400 font-bold text-lg">{item.price}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Safety Hint */}
                    <div className="bg-gradient-to-r from-cyan-950/40 to-blue-950/40 border border-cyan-500/20 rounded-2xl p-5 flex items-start gap-4 mt-2">
                        <ShieldCheck className="w-6 h-6 text-cyan-400 shrink-0 mt-1" />
                        <div>
                            <h4 className="text-white text-sm font-semibold mb-1">Verifizierter Auftraggeber</h4>
                            <p className="text-neutral-400 text-xs leading-relaxed">
                                Dieser Job wird von einem geprüften Mitglied der JobBridge-Community angeboten. Deine Eltern können alle Details einsehen.
                            </p>
                        </div>
                    </div>

                    {/* Bottom Spacer */}
                    <div className="h-20" />

                </div>
            </StickyScrollTablet>
        </div>
    );
}
