import type { Metadata } from "next";
import { GalleryManager } from "@/components/gallery/gallery-manager";
import { Camera } from "lucide-react";

export const metadata: Metadata = {
    title: "Galería — Arlet",
    description: "Una curaduría de momentos musicales en vivo.",
};

export default function GalleryPage() {
    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-accent/30">
            <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-stone-900 z-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-90" />
                </div>

                <div className="relative z-10 text-center px-6">
                    <div className="inline-flex items-center gap-2 mb-4 text-accent/80 uppercase tracking-[0.2em] text-xs font-bold">
                        <Camera className="w-4 h-4" />
                        <span>Portfolio</span>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-4 text-white">
                        Live <span className="text-accent italic font-serif">Frames</span>
                    </h1>
                    <p className="text-white/60 max-w-md mx-auto font-light text-lg">
                        Capturando la energía de la música en vivo.
                    </p>
                </div>
            </section>

            <GalleryManager />
        </div>
    );
}
