import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

export function GET() {
    return new ImageResponse(
        (
            <div
                style={{
                    alignItems: "center",
                    background:
                        "radial-gradient(circle at 18% 18%, #1d4ed8 0, transparent 32%), radial-gradient(circle at 78% 30%, #0891b2 0, transparent 30%), linear-gradient(135deg, #02040b 0%, #07111f 52%, #02040b 100%)",
                    color: "white",
                    display: "flex",
                    flexDirection: "column",
                    fontFamily: "Inter, Arial, sans-serif",
                    height: "100%",
                    justifyContent: "center",
                    letterSpacing: 0,
                    padding: "64px",
                    width: "100%",
                }}
            >
                <div
                    style={{
                        alignItems: "center",
                        border: "1px solid rgba(255,255,255,0.14)",
                        borderRadius: "32px",
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                        justifyContent: "space-between",
                        padding: "40px",
                        width: "100%",
                    }}
                >
                    <div
                        style={{
                            alignItems: "center",
                            display: "flex",
                            fontSize: 32,
                            fontWeight: 700,
                            justifyContent: "space-between",
                            width: "100%",
                        }}
                    >
                        <span>Workfare</span>
                        <span style={{ color: "#bfdbfe", fontSize: 22, fontWeight: 500 }}>
                            Die digitale Taschengeldbörse
                        </span>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: 20, width: "100%" }}>
                        <div
                            style={{
                                fontSize: 72,
                                fontWeight: 800,
                                lineHeight: 1.02,
                                maxWidth: 940,
                            }}
                        >
                            Sichere Taschengeldjobs für Jugendliche
                        </div>
                        <div
                            style={{
                                color: "#dbeafe",
                                fontSize: 28,
                                lineHeight: 1.25,
                                maxWidth: 840,
                            }}
                        >
                            Verifizierte Auftraggeber, klare Freigaben und volle Transparenz für Eltern.
                        </div>
                    </div>

                    <div
                        style={{
                            alignItems: "center",
                            color: "#67e8f9",
                            display: "flex",
                            fontSize: 22,
                            fontWeight: 700,
                            justifyContent: "space-between",
                            width: "100%",
                        }}
                    >
                        <span>workfa.re</span>
                        <span>Deutschlandweit gedacht</span>
                    </div>
                </div>
            </div>
        ),
        size,
    );
}
