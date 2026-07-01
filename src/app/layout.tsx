import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "State of Mobiles 2026 — The Complete Guide",
  description:
    "Every phone worth buying in India in 2026. 24 phones, 6 categories, cheapest to most expensive. All 5G, all new. Budget picks to ultra flagships.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Outfit:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
