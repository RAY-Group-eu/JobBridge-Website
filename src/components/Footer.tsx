"use client";

import { reportConversion } from "@/lib/gtag";

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black relative z-10">
            <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between gap-6 text-neutral-500">
                <div className="text-sm">
                    <span className="font-semibold text-white">JobBridge</span>{" "}
                    - die digitale Taschengeldbörse
                </div>
                <div className="flex gap-8 text-sm">
                    <a
                        href="https://app.jobbridge.app"
                        className="hover:text-white transition-colors cursor-pointer"
                        onClick={(e) => {
                            e.preventDefault();
                            reportConversion("https://app.jobbridge.app");
                        }}
                    >
                        Zur Plattform
                    </a>
                    <a href="/impressum" className="hover:text-white transition-colors">
                        Impressum
                    </a>
                    <a href="/datenschutz" className="hover:text-white transition-colors">
                        Datenschutz
                    </a>
                </div>
            </div>
        </footer>
    );
}
