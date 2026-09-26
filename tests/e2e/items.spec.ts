import { expect, test } from '@playwright/test';

test('items landing page links to all four source collections and their categories', async ({ page }) => {
    await page.goto('./items/');
    await expect(page.getByRole('heading', { name: 'Items', exact: true })).toBeVisible();
    for (const label of ['Arms', 'Art & Miscellaneous', 'Books & Scrolls', 'Tea Utensils']) {
        await expect(page.getByRole('heading', { name: label })).toBeVisible();
    }
    await page.getByRole('link', { name: /Scented Wood/ }).click();
    await expect(page).toHaveURL(/\/items\/art\/#scented-wood$/);
    await expect(page.getByRole('heading', { name: 'Scented Wood' })).toBeVisible();
});

test('item categories retain their own sections, search, quality and origin filtering', async ({ page }) => {
    await page.goto('./items/art/');
    await expect(page.locator('[data-item-row]')).toHaveCount(60);
    await expect(page.locator('[data-item-section]')).toHaveCount(5);
    const search = page.getByRole('searchbox', { name: /Search art/ });
    await search.fill('Walnut Cake');
    await expect(page.locator('[data-item-row]:visible')).toHaveCount(1);
    await expect(page.locator('[data-item-count]')).toContainText('1 item across 1 category');
    await search.fill('');
    await page.getByLabel('Minimum quality').selectOption('10');
    await page.getByLabel('Origin').selectOption('Europe');
    await expect(page.locator('[data-item-row]:visible')).toHaveCount(1);
    await expect(page.locator('[data-item-row]:visible')).toContainText('Rose Wine');
    await page.getByRole('button', { name: /Reset/ }).click();
    await expect(page.locator('[data-item-row]:visible')).toHaveCount(60);
});

test('dedicated Ranks and Titles show only their respective appointments', async ({ page }) => {
    await page.goto('./ranks/');
    await expect(page.getByRole('heading', { name: 'Ranks', exact: true })).toBeVisible();
    await expect(page.locator('[data-result-count]')).toContainText('295 unique ranks');
    await expect(page.locator('[data-reference-row][data-kind="title"]')).toHaveCount(0);
    await page.getByRole('link', { name: 'Titles', exact: true }).click();
    await expect(page).toHaveURL(/\/titles\/$/);
    await expect(page.locator('[data-result-count]')).toContainText('70 unique titles');
    await expect(page.locator('[data-reference-row][data-kind="rank"]')).toHaveCount(0);
});

test('navigation routes remain accessible on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('./items/');
    for (const name of ['Overview', 'Items', 'Ranks', 'Titles']) {
        await expect(page.getByRole('navigation', { name: 'Site navigation' }).getByRole('link', { name, exact: true })).toBeVisible();
    }
});
