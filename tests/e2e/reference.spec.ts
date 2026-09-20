import { expect, test } from '@playwright/test';

test('catalogue search, keyboard shortcut, and tab switching work together', async ({ page }) => {
    await page.goto('./reference/');

    const search = page.getByRole('searchbox', { name: 'Search appointments' });
    const resultCount = page.locator('[data-result-count]');

    await expect(page.getByRole('heading', { name: 'Browse every appointment' })).toBeVisible();
    await expect(resultCount).toContainText('295 unique ranks');

    await page.keyboard.press('/');
    await expect(search).toBeFocused();

    await search.fill('Supreme Commander');
    const supremeCommander = page.locator('#rank-danjo-no-kami');
    await expect(supremeCommander).toBeVisible();
    await expect(supremeCommander).toContainText('Supreme Commander');
    await expect(resultCount).toContainText('Showing');

    await search.clear();
    await page.getByRole('tab', { name: /Shogunate Titles/ }).click();
    await expect(page.getByRole('tab', { name: /Shogunate Titles/ })).toHaveAttribute('aria-selected', 'true');
    await expect(resultCount).toContainText('70 unique titles');
});

test('catalogue state is reflected in the URL and direct appointment links resolve', async ({ page }) => {
    await page.goto('./reference/');

    const search = page.getByRole('searchbox', { name: 'Search appointments' });
    await search.fill('Supreme Commander');

    await expect(page).toHaveURL(/\/reference\/[?&]q=Supreme\+Commander(?:&|#|$)/);

    const row = page.locator('#rank-danjo-no-kami');
    await expect(row).toBeVisible();

    await row.locator('.entry-permalink').click();
    await expect(page).toHaveURL(/\/reference\/.*#rank-danjo-no-kami$/);
});

test('catalogue uses compact appointment cards at tablet widths', async ({ page }) => {
    await page.setViewportSize({ width: 820, height: 1000 });
    await page.goto('./reference/#rank-kanpaku');

    const row = page.locator('[data-reference-row]:visible').first();
    await expect(row).toBeVisible();
    await expect(row.locator('.name-cell')).toBeVisible();
    await expect(row.locator('.japanese .pronunciation')).toBeVisible();
});

test('legacy root catalogue URLs forward to the reference page', async ({ page }) => {
    await page.goto('./?view=title&q=Shugo#title-iga-shugo');

    await expect(page).toHaveURL(/\/reference\/\?view=title&q=Shugo#title-iga-shugo$/);
    await expect(page.getByRole('tab', { name: /Shogunate Titles/ })).toHaveAttribute('aria-selected', 'true');
});

test('homepage remains an overview rather than embedding the catalogue', async ({ page }) => {
    await page.goto('./');

    await expect(page.getByRole('heading', { name: 'Two old authorities. One age of warlords.' })).toBeVisible();
    await expect(page.getByRole('searchbox', { name: 'Search appointments' })).toHaveCount(0);

    await page.getByRole('link', { name: /Browse the reference/ }).click();
    await expect(page).toHaveURL(/\/reference\/$/);
});
