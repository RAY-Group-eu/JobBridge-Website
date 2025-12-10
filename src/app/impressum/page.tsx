export default function ImpressumPage() {
    return (
        <main className="min-h-screen bg-black text-white py-24 md:py-32 px-4 font-sans max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-neutral-100">Impressum</h1>

            <div className="space-y-8 text-neutral-300">
                <section className="space-y-2">
                    <h2 className="text-xl font-semibold text-white">Angaben gemäß § 5 TMG</h2>
                    <p>
                        <strong>JobBridge</strong> – ein Projekt der Ray Group.<br />
                        Markenersteller & Verantwortlich für den Inhalt:<br />
                        Rezan Yalçin
                    </p>
                </section>

                <section className="space-y-2">
                    <h2 className="text-xl font-semibold text-white">Kontakt</h2>
                    <p>
                        E-Mail: <a href="mailto:rezan@jobbridge.app" className="text-cyan-400 hover:text-cyan-300">rezan@jobbridge.app</a><br />
                    </p>
                </section>

                <section className="space-y-2">
                    <h2 className="text-xl font-semibold text-white">Anschrift</h2>
                    <p>
                        [Anschrift wird ergänzt]<br />
                    </p>
                </section>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-sm text-neutral-400">
                    <p>Hinweis: Diese Plattform befindet sich im Aufbau. Rechtliche Angaben werden vor dem produktiven Start vollständig ergänzt.</p>
                </div>
            </div>
        </main>
    );
}
