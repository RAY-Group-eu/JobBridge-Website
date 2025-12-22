import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Use Inter as standard font or similar
import "./globals.css";
import { cn } from "@/lib/utils";
import Script from "next/script";

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
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=AW-17814899877"
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17814899877');
          `}
                </Script>
                {children}
            </body>
        </html>
    );
}
