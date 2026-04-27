import { test, expect } from '@playwright/test';

test.describe('Landing interactive flow', () => {
    test('Can navigate the landing and interact with FAQs', async ({ page }) => {
        await page.goto('/');

        await expect(page.locator('h1')).toContainText('Clases de piano');

        await page.click('text=Ver modalidades');
        await expect(page.locator('text=Modalidades')).toBeVisible();

        const firstFaq = page.locator('text=¿Cómo es el pago?');
        await firstFaq.click();
        await expect(page.locator('text=Mensual, antes del día')).toBeVisible();
    });

    test('Lead form silently succeeds via honeypot path', async ({ page }) => {
        await page.goto('/');

        await expect(page.locator('text=O déjame tus datos y yo te escribo')).toBeVisible();

        await page.fill('input[name="name"]', 'Demo User');
        await page.fill('input[name="whatsapp"]', '5551234567');
        await page.selectOption('select[name="zone"]', 'Santa Fe');
        await page.fill('input[name="times"]', 'Demo time slot');

        await page.evaluate(() => {
            const el = document.querySelector('input[name="subject"]') as HTMLInputElement | null;
            if (el) el.value = 'Honeypot Trigger';
        });

        await page.check('input[id="consent"]');
        await page.click('button[type="submit"]');

        const successTitle = page.locator('text=¡Gracias!');
        await expect(successTitle).toBeVisible({ timeout: 5000 });
    });
});
