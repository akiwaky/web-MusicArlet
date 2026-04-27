import { MUSIC_CONFIG } from "@/config/music";

export async function submitMusicLead(data: {
    name: string | null;
    whatsapp: string | null;
    zone: string | null;
    times: string | null;
    timestamp: string;
    source: string;
}): Promise<boolean> {
    const res = await fetch(MUSIC_CONFIG.integrations.n8nWebhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });

    if (!res.ok) throw new Error("Network response was not ok");

    return true;
}
