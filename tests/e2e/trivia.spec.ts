import { expect, test } from '@playwright/test';

test('historical guide directories are separate navigable pages', async ({ page }) => {
    await page.goto('./trivia/');

    await expect(page.getByRole('heading', { name: 'The stories behind the appointments' })).toBeVisible();
    await expect(page.getByRole('link', { name: /Regions & Provinces/ })).toBeVisible();
    await expect(page.getByRole('link', { name: /Offices & Titles/ })).toBeVisible();
});

test('region directory map filters place cards by area', async ({ page }) => {
    await page.goto('./trivia/regions/');

    const kanto = page.locator('[data-map-area-button="Kantō"]');
    await expect(kanto).toBeVisible();
    await kanto.click();

    await expect(kanto).toHaveAttribute('aria-pressed', 'true');
    await expect(page.locator('[data-guide-area]')).toHaveValue('Kantō');
    await expect(page).toHaveURL(/area=Kant%C5%8D/);

    const visibleCards = page.locator('[data-guide-card]:visible');
    await expect(visibleCards.first()).toBeVisible();
    await expect(visibleCards.first()).toHaveAttribute('data-area', 'Kantō');
});

test('office detail pages connect historical context back to catalogue appointments', async ({ page }) => {
    await page.goto('./trivia/offices/danjo/');

    await expect(page.getByRole('heading', { name: 'A censor and policing office' })).toBeVisible();

    const related = page.getByRole('link', { name: /Supreme Commander/ });
    await expect(related).toBeVisible();
    await expect(related).toHaveAttribute('href', /#rank-danjo-no-kami$/);
});
