import { expect, test } from '@playwright/test';

test('catalogue search, keyboard shortcut, and tab switching work together', async ({ page }) => {
    await page.goto('./');

    const search = page.getByRole('searchbox', { name: 'Search appointments' });
    const resultCount = page.locator('[data-result-count]');

    await expect(page.getByRole('heading', { name: 'Browse every appointment' })).toBeVisible();
    await expect(resultCount).toContainText('295 unique ranks');

    await page.keyboard.press('/');
    await expect(search).toBeFocused();

    await search.fill('Supreme Commander');
    await expect(page.locator('[data-reference-row]:visible')).toContainText('Supreme Commander');
    await expect(resultCount).toContainText('Showing');

    await search.clear();
    await page.getByRole('tab', { name: /Shogunate Titles/ }).click();
    await expect(page.getByRole('tab', { name: /Shogunate Titles/ })).toHaveAttribute('aria-selected', 'true');
    await expect(resultCount).toContainText('70 unique titles');
});

test('region map filters the historical geography cards', async ({ page }) => {
    await page.goto('./#regions');

    const regionTopic = page.locator('[data-trivia-topic="regions"]');
    await regionTopic.click();

    const kanto = page.locator('[data-map-area-button="Kantō"]');
    await expect(kanto).toBeVisible();
    await kanto.click();

    await expect(kanto).toHaveAttribute('aria-pressed', 'true');
    await expect(page.locator('[data-trivia-area]')).toHaveValue('Kantō');
    await expect(page.locator('[data-trivia-card]:visible').first()).toBeVisible();
});
