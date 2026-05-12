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
        // The webhook URL is NEXT_PUBLIC_* by design (public, baked into the
        // JS bundle). The env var lets us override per environment without a
        // rebuild of the codebase, but the fallback ensures the build never
        // breaks if the var is missing from the build environment.
        n8nWebhookUrl:
            process.env.NEXT_PUBLIC_N8N_WEBHOOK_MUSIC
            ?? "https://n8n.akiwaky.cloud/webhook/music/lead",
    },
}
