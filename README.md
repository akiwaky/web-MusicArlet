# web-MusicArlet

Sitio independiente de **Arlet — Clases de Piano**. Next.js 16 (App Router) con export estático, alojado en Cloudflare Pages.

## Setup local

```bash
npm install
cp .env.example .env.local   # editar el valor del webhook
npm run dev
```

Abre http://localhost:3000

## Comandos

```bash
npm run dev          # Dev server
npm run build        # Build estático en out/
npm run lint         # ESLint
npm run test:unit    # Vitest
npm run test:e2e     # Playwright
npm test             # Ambos
```

## Variables de entorno

| Variable | Descripción |
|---|---|
| `NEXT_PUBLIC_N8N_WEBHOOK_MUSIC` | URL del webhook n8n que recibe leads del formulario. **Opcional** — si no se define, se usa el fallback `https://n8n.akiwaky.cloud/webhook/music/lead`. Útil para apuntar a un webhook `-dev` o `-test` en entornos de preview. |

En Cloudflare Pages, configurar bajo *Settings → Environment variables* (Production y Preview) sólo si quieres sobreescribir el default.

## Deploy

- **Hosting:** Cloudflare Pages
- **Build command:** `npm run build`
- **Output directory:** `out`
- **Node version:** 20 (`NODE_VERSION=20`)
- **Staging:** https://music.akiwaky.cloud
- **Producción:** dominio definitivo pendiente del cliente (futuro: `arlet.akiwaky.cloud` o dominio propio)

## Backend

El formulario de leads envía un POST al webhook de n8n. El workflow vive en la instancia n8n de Akiwaky (`n8n.akiwaky.cloud`) y persiste leads en Notion.

## Estructura

```
src/
  app/
    page.tsx              # Landing principal
    layout.tsx            # Root layout con paleta Arlet
    gracias/              # Confirmación post-form
    aviso-privacidad/
    politicas/
    gallery/              # Portfolio de fotografía musical
    robots.ts, sitemap.ts
  components/
    ui/whatsapp-button.tsx
    layout/header.tsx, footer.tsx
    gallery/              # Masonry, lightbox, filter bar
  config/music.ts         # Datos de negocio (precios, contacto, políticas)
  integrations/n8n/webhooks.ts
  data/mock-gallery-data.ts
  lib/utils.ts
public/
  *.png                   # Assets de la landing (hero, hands-on-keys, etc.)
```
