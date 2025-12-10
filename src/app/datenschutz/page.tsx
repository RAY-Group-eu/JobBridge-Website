export default function DatenschutzPage() {
    return (
        <main className="min-h-screen bg-black text-white py-24 md:py-32 px-4 font-sans max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-neutral-100">Datenschutzerklärung</h1>

            <div className="space-y-8 text-neutral-300">
                <div className="p-6 rounded-xl bg-cyan-900/10 border border-cyan-500/20 text-cyan-200">
                    <h3 className="font-semibold mb-2">Entwurf / In Entwicklung</h3>
                    <p className="text-sm opacity-90">Diese Seite ist ein Projekt in Entwicklung. Eine vollständige, rechtssichere Datenschutzerklärung wird unmittebar vor dem Produktivstart ergänzt.</p>
                </div>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-white">1. Datenschutz auf einen Blick</h2>
                    <p>
                        Wir freuen uns über Ihr Interesse an unserer Plattform JobBridge (ein Projekt der Ray Group).
                        Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen.
                    </p>
                    <p>
                        Aktuell werden über diese Landing-Page keine personenbezogenen Nutzerkonten angelegt.
                        Die Weiterleitung zur Plattform (dropbridge.app) unterliegt eigenen Datenschutzbestimmungen.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-white">2. Verantwortliche Stelle</h2>
                    <p>
                        Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br />
                        Rezan Yalçin (Ray Group)<br />
                        Kontakt: <a href="mailto:rezan@jobbridge.app" className="text-cyan-400 hover:text-cyan-300">rezan@jobbridge.app</a>
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-white">3. Datenerfassung</h2>
                    <p>
                        Beim Besuch unserer Website werden technisch notwendige Daten (Server-Logfiles) erfasst,
                        um die Sicherheit und Stabilität des Angebots zu gewährleisten.
                    </p>
                </section>
            </div>
        </main>
    );
}
