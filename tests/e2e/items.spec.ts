import { expect, test } from '@playwright/test';

test('Items uses the same tabbed reference presentation as Ranks and Titles', async ({ page }) => {
    await page.goto('./items/');
    await expect(page.getByRole('link', { name: /Download all 430 items/ }))
        .toHaveAttribute('href', /data\/item-translations\.csv$/);
    await expect(page.getByRole('heading', { name: 'Items', exact: true })).toBeVisible();

    const collections = page.getByRole('tablist', { name: 'Item collection' });
    for (const name of ['Arms', 'Art & Miscellaneous', 'Books & Scrolls', 'Tea Utensils']) {
        await expect(collections.getByRole('tab', { name: new RegExp(name) })).toBeVisible();
    }
    await expect(page.getByText('Items by quality', { exact: true })).toBeVisible();
    await expect(page.getByText('Items by type', { exact: true })).toBeVisible();
    await expect(page.locator('[data-collection-panel]:visible [data-item-row]')).toHaveCount(135);

    await collections.getByRole('tab', { name: /Art & Miscellaneous/ }).click();
    await expect(page.locator('[data-collection-panel]:visible [data-item-row]')).toHaveCount(60);
    await expect(page.locator('[data-item-count]')).toContainText('60 items');
    await page.getByRole('link', { name: /Scented Wood/ }).click();
    await expect(page).toHaveURL(/\/items\/art\/#scented-wood$/);
    await expect(page.locator('#scented-wood')).toBeVisible();
});

test('category sections share one three-column ledger with Japanese readings and expandable game details', async ({ page }) => {
    await page.goto('./items/art/');
    await expect(page.locator('[data-item-row]')).toHaveCount(60);
    await expect(page.locator('[data-item-section]')).toHaveCount(5);
    const ledger = page.locator('.items-ledger');
    await expect(ledger.getByRole('columnheader')).toHaveCount(3);
    await expect(ledger.getByRole('columnheader', { name: 'Japanese and pronunciation' })).toHaveCount(1);
    const sake = page.locator('[data-item-row][data-japanese="菩提泉"]');
    await expect(sake.locator('.japanese')).toContainText('Bodaisen');
    await expect(sake.locator('.items-meaning-cell')).toContainText('Bodaisen Sake');
    await expect(sake.locator('.items-detail-list')).not.toBeVisible();
    await sake.getByText('Item details').click();
    await expect(sake.locator('.items-detail-list')).toBeVisible();
    await expect(sake.locator('.items-detail-list dt')).toHaveText(['Quality', 'Origin', 'Effect']);
    await expect(page.locator('table caption')).toHaveCount(0);
});

test('item search, type, origin, quality and charts filter the same ledger', async ({ page }) => {
    await page.goto('./items/art/');
    const search = page.getByRole('searchbox', { name: 'Search items' });
    await search.fill('Walnut Cake');
    await expect(page.locator('[data-item-row]:visible')).toHaveCount(1);
    await expect(page.locator('[data-item-count]')).toContainText('Showing 1 of 60 items');
    await search.fill('');

    await page.getByLabel('Minimum quality').selectOption('10');
    await page.getByLabel('Filter by origin').selectOption('Europe');
    await expect(page.locator('[data-item-row]:visible')).toHaveCount(1);
    await expect(page.locator('[data-item-row]:visible')).toContainText('Rose Wine');

    await page.getByRole('button', { name: 'Reset filters' }).click();
    await expect(page.locator('[data-item-row]:visible')).toHaveCount(60);

    await page.getByRole('button', { name: /Filter type Scented Wood:/ }).click();
    await expect(page.locator('[data-item-row]:visible')).toHaveCount(20);
    await expect(page.getByLabel('Filter by type')).toHaveValue('Scented Wood');
    await expect(page).toHaveURL(/type=Scented\+Wood/);

    await page.getByRole('button', { name: 'Reset filters' }).click();
    await expect(page.locator('[data-item-row]:visible')).toHaveCount(60);
});

test('collection tabs support keyboard navigation and retain selected URL state', async ({ page }) => {
    await page.goto('./items/');
    const arms = page.getByRole('tab', { name: /^Arms/ });
    const art = page.getByRole('tab', { name: /^Art & Miscellaneous/ });
    await arms.focus();
    await arms.press('ArrowRight');
    await expect(art).toBeFocused();
    await expect(art).toHaveAttribute('aria-selected', 'true');
    await expect(page).toHaveURL(/collection=art/);
    await page.reload();
    await expect(art).toHaveAttribute('aria-selected', 'true');
});

test('mobile item ledger uses grouped cards and remains navigable', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('./items/tea/');
    await expect(page.getByRole('navigation', { name: 'Item collections' })).toBeVisible();
    await expect(page.locator('[data-item-section]:visible')).toHaveCount(8);
    await expect(page.locator('[data-item-row]:visible').first()).toBeVisible();
    const row = page.locator('[data-item-row]:visible').first();
    await expect(row.locator('.name-cell')).toBeVisible();
    await expect(row.locator('.japanese')).toBeVisible();
    await expect(row.locator('.items-meaning-cell')).toBeVisible();
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
        await expect(page.getByRole('navigation', { name: 'Site navigation' })
            .getByRole('link', { name, exact: true })).toBeVisible();
    }
});

test('historical trivia is optional, sourced and expandable without changing the ledger', async ({ page }) => {
    await page.goto('./items/arms/');
    const sword = page.locator('[data-item-row][data-japanese="童子切安綱"]');
    await expect(sword.getByText('Historical trivia')).toBeVisible();
    await expect(sword.locator('.items-trivia-body')).not.toBeVisible();
    await sword.getByText('Historical trivia').click();
    await expect(sword.locator('.items-trivia-body')).toContainText('National Treasure');
    await expect(sword.locator('.items-trivia-sources a')).toHaveAttribute('href', /^https:\/\//);
    const other = page.locator('[data-item-row][data-japanese="種子島筒"]');
    await expect(other.getByText('Historical trivia')).toHaveCount(0);
});
