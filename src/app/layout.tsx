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
  title: "Arlet Ayala Art Music",
  description:
    "Clases de piano formales y completas. 17 años de experiencia, formación integral en técnica, lectura de partitura e historia de la música. Tecamachalco, La Herradura, Bosques, Interlomas y Santa Fe.",
  openGraph: {
    title: "Arlet Ayala Art Music",
    description: "Clases de piano formales y completas. Tecamachalco, La Herradura, Bosques, Interlomas y Santa Fe.",
    url: "https://music.akiwaky.cloud",
    siteName: "Arlet Ayala Art Music",
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arlet Ayala Art Music",
    description: "Clases de piano formales y completas. Tecamachalco, La Herradura, Bosques, Interlomas y Santa Fe.",
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
