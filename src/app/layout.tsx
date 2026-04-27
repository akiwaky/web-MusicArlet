import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://music.akiwaky.cloud"),
  title: "Arlet — Clases de Piano",
  description:
    "Clases de piano formales y completas. 17 años de experiencia, formación integral en técnica, lectura de partitura e historia de la música. CDMX y zona metropolitana.",
  openGraph: {
    title: "Arlet — Clases de Piano",
    description: "Clases de piano formales y completas. CDMX y zona metropolitana.",
    url: "https://music.akiwaky.cloud",
    siteName: "Arlet — Clases de Piano",
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arlet — Clases de Piano",
    description: "Clases de piano formales y completas. CDMX y zona metropolitana.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground selection:bg-accent/30`}
      >
        {children}
      </body>
    </html>
  );
}
