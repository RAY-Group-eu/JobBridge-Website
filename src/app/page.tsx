import { Hero } from "@/components/ui/animated-hero";
import { ShaderAnimation } from "@/components/ui/shader-animation";
import { HeroScrollDemo } from "@/components/ui/hero-scroll-demo";
import { FeatureSections } from "@/components/FeatureSections";
import { Footer } from "@/components/Footer";

export default function HomePage() {
    return (
        <main className="min-h-screen bg-black text-white font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
            {/* Hero mit Shader-Hintergrund */}
            <section className="relative min-h-[110vh] w-full overflow-hidden flex items-center justify-center">
                <ShaderAnimation />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-transparent" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.1),_transparent_70%)]" />

                {/* Gradient Fade at bottom of Hero to blend into next section */}
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neutral-950 to-transparent z-10" />

                <div className="relative z-10 flex h-full w-full items-center justify-center px-4">
                    <Hero />
                </div>
            </section>

            {/* Scroll-Animation Section - Negative margin to move it up slightly into the fade if desired, or just follow naturally */}
            <section className="relative z-20 -mt-20">
                <HeroScrollDemo />
            </section>

            {/* Feature Sections (Targets, Safety, Steps) */}
            <FeatureSections />

            {/* Footer / CTA */}
            <Footer />
        </main>
    );
}
