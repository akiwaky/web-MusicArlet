import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
    const base = "https://music.akiwaky.cloud";
    const now = new Date();
    return [
        { url: `${base}/`, lastModified: now, changeFrequency: "monthly", priority: 1.0 },
        { url: `${base}/politicas`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
        { url: `${base}/aviso-privacidad`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
        { url: `${base}/gallery`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    ];
}
