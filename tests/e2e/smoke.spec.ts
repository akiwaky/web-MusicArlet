import { test, expect } from '@playwright/test';

test.describe('Smoke tests', () => {
    test('Landing page loads correctly', async ({ page }) => {
        const response = await page.goto('/');
        expect(response?.ok()).toBeTruthy();
        await expect(page.locator('text=Clases de piano')).toBeVisible();
    });

    test('Politicas page loads', async ({ page }) => {
        const response = await page.goto('/politicas');
        expect(response?.ok()).toBeTruthy();
        await expect(page.locator('h1')).toContainText('Reglamento');
    });

    test('Aviso de privacidad page loads', async ({ page }) => {
        const response = await page.goto('/aviso-privacidad');
        expect(response?.ok()).toBeTruthy();
        await expect(page.locator('h1')).toContainText('Aviso de Privacidad');
    });
});
