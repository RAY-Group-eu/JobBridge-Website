import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";
const microsoftCustomerConnectScript = "https://res.public.onecdn.static.microsoft";
const microsoftCustomerConnectFrame = "https://customerconnect.teams.usercontent.microsoft";

const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline' ${microsoftCustomerConnectScript}${isProduction ? "" : " 'unsafe-eval'"}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://images.unsplash.com",
  "font-src 'self' data:",
  `connect-src 'self'${isProduction ? "" : " ws://localhost:* ws://127.0.0.1:* http://localhost:* http://127.0.0.1:*"}`,
  `frame-src 'self' ${microsoftCustomerConnectFrame}`,
  "media-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "manifest-src 'self'",
  isProduction ? "upgrade-insecure-requests" : "",
].filter(Boolean).join("; ");

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: contentSecurityPolicy,
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), accelerometer=(), gyroscope=(), magnetometer=()",
  },
];

const nextConfig: NextConfig = {
  async redirects() {
    return [
      ...["www.workfa.re", "jobbridge.app", "www.jobbridge.app"].map((host) => ({
        source: "/:path*",
        has: [{ type: "host" as const, value: host.replaceAll(".", "\\.") }],
        destination: "https://workfa.re/:path*",
        permanent: true,
      })),
      ...[
        ["warum-jobbridge-entstanden-ist", "warum-workfare-entstanden-ist"],
        ["wdr-lokalzeit-bonn-jobbridge-video", "wdr-lokalzeit-bonn-taschengeldboerse-video"],
        ["wdr-rezan-jobbridge-jugend-forscht", "wdr-rezan-taschengeldboerse-jugend-forscht"],
        ["jugend-forscht-jobbridge-offiziell-4-preis", "jugend-forscht-taschengeldboerse-offiziell-4-preis"],
      ].map(([oldSlug, newSlug]) => ({
        source: `/einblicke/${oldSlug}`,
        destination: `/einblicke/${newSlug}`,
        permanent: true,
      })),
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
