function requireEnv(key: string): string {
    const v = process.env[key];
    if (!v) {
        throw new Error(`Missing required env var: ${key}`);
    }
    return v;
}

export const MUSIC_CONFIG = {
    contact: {
        whatsappNumber: "5215620202727",
        defaultMessage: "Me contacto desde la página web, me gustaría información sobre:",
    },

    pricing: {
        trialPriceAnchor: null as number | null,
        regularPriceAnchor: null as number | null,
        rangeDisclaimer: "Los precios varían según modalidad y horario. Contáctame para una cotización personalizada.",
    },

    zones: {
        primary: "Zona por confirmar",
        surchargeLogic: "",
    },

    policies: {
        cancellationHours: 24,
        lateFee: 200,
        paymentDeadlineDay: 6,
    },

    teacher: {
        name: "Arlet",
        fullName: "Arlet",
        yearsExperience: 17,
        school: "Escuela Superior de Música",
    },

    integrations: {
        n8nWebhookUrl: requireEnv("NEXT_PUBLIC_N8N_WEBHOOK_MUSIC"),
    },
}
