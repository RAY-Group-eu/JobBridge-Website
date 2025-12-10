import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Use Inter as standard font or similar
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
    title: "JobBridge - Taschengeldjobs sicher & fair",
    description: "Die sichere Plattform für Taschengeldjobs. Für Jugendliche, Eltern und Auftraggeber.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="de" className="dark">
            <body className={cn("min-h-screen bg-background font-sans antialiased", inter.variable)}>
                {children}
            </body>
        </html>
    );
}
