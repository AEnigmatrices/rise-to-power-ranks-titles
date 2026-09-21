import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

test('filtered class counts describe the visible appointments and empty results hide column labels', async ({
    page,
}) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto('./reference/');
    const search = page.getByRole('searchbox', { name: 'Search appointments' });
    await search.fill('Mutsu');
    const groups = page.locator('[data-reference-group]:visible');
    for (const group of await groups.all()) {
        const count = await group.locator('[data-reference-row]:visible').count();
        await expect(group.locator('.reference-group__count')).toContainText(
            `${count} ${count === 1 ? 'appointment' : 'appointments'}`,
        );
    }
    await search.fill('zzzzzzzzzz');
    await expect(page.locator('.reference-ledger__columns:visible')).toHaveCount(0);
    await page.getByRole('button', { name: 'Clear search & filters' }).click();
    await expect(search).toBeFocused();
    await expect(page.locator('.reference-ledger__columns:visible')).toHaveCount(1);
});

test('site search suggestions and clear action preserve keyboard navigation', async ({ page }) => {
    await page.goto('./reference/');
    const trigger = page.getByRole('button', { name: 'Search site', exact: true });
    await trigger.focus();
    await trigger.click();
    const dialog = page.getByRole('dialog');
    const search = dialog.getByRole('searchbox', { name: 'Search the site' });
    await dialog.getByRole('button', { name: 'Kantō Kanrei', exact: true }).click();
    await expect(search).toBeFocused();
    await expect(search).toHaveValue('Kantō Kanrei');
    const first = dialog.locator('.global-search__result').first();
    await expect(first).toBeVisible();
    await search.press('ArrowDown');
    await expect(first).toBeFocused();
    await first.press('ArrowUp');
    await expect(search).toBeFocused();
    // The catalogue's slash shortcut must not steal focus from the modal.
    const clear = dialog.getByRole('button', { name: 'Clear site search' });
    await clear.focus();
    await page.keyboard.press('/');
    await expect(clear).toBeFocused();
    await clear.click();
    await expect(search).toBeFocused();
    await expect(search).toHaveValue('');
    await expect(dialog.locator('.global-search__results')).toHaveAttribute('aria-busy', 'false');
    await expect(dialog.locator('.global-search__result')).toHaveCount(0);
    await expect(dialog.getByRole('button', { name: 'Mutsu', exact: true })).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(trigger).toBeFocused();
    await expect(page.locator('html')).not.toHaveClass(/has-search-dialog/);
});

test('unavailable site search offers a working catalogue link', async ({ page }) => {
    await page.route('**/pagefind/pagefind.js', (route) => route.abort());
    await page.goto('./');
    await page.getByRole('button', { name: 'Search site', exact: true }).click();
    const dialog = page.getByRole('dialog');
    await dialog.getByRole('searchbox').fill('Mutsu');
    await expect(dialog.getByRole('status')).toContainText('unavailable right now');
    const fallback = dialog.getByRole('link', { name: /Browse and filter all appointments/ });
    await expect(fallback).toBeVisible();
    await fallback.click();
    await expect(page.getByRole('searchbox', { name: 'Search appointments' })).toBeVisible();
});

test('clearing site search discards an in-flight response', async ({ page }) => {
    let releaseRequest!: () => void;
    const release = new Promise<void>((resolve) => {
        releaseRequest = resolve;
    });
    let requestStarted!: () => void;
    const started = new Promise<void>((resolve) => {
        requestStarted = resolve;
    });
    await page.route('**/pagefind/pagefind.js', async (route) => {
        requestStarted();
        await release;
        await route.continue();
    });
    await page.goto('./');
    await page.getByRole('button', { name: 'Search site', exact: true }).click();
    const dialog = page.getByRole('dialog');
    await dialog.getByRole('searchbox').fill('Mutsu');
    await started;
    await dialog.getByRole('button', { name: 'Clear site search' }).click();
    releaseRequest();
    await expect(dialog.getByRole('status')).toHaveText('Start typing to search the whole site.');
    await expect(dialog.locator('.global-search__results')).toHaveAttribute('aria-busy', 'false');
    await dialog.getByRole('searchbox').fill('Kantō Kanrei');
    await expect(dialog.getByRole('status')).toContainText('for “Kantō Kanrei”');
    await expect(dialog.locator('.global-search__result').first()).toBeVisible();
});

test('area selection toggles off and clearing the map retains a visible focus target', async ({
    page,
}) => {
    await page.goto('./trivia/regions/');
    const area = page.getByLabel('Filter by area');
    const button = page.getByRole('button', { name: /Kantō/ });
    await button.click();
    await expect(button).toHaveAttribute('aria-pressed', 'true');
    await button.click();
    await expect(area).toHaveValue('');
    await expect(button).toHaveAttribute('aria-pressed', 'false');
    await button.click();
    await page.getByRole('button', { name: 'Show all regions' }).click();
    await expect(area).toBeFocused();
    await expect(area).toHaveValue('');
});

test('reference layout fits the intermediate tablet breakpoint', async ({ page }) => {
    await page.setViewportSize({ width: 900, height: 1000 });
    await page.goto('./reference/');
    const widths = await page
        .locator('.table-shell')
        .first()
        .evaluate((el) => ({
            content: el.scrollWidth,
            viewport: el.clientWidth,
        }));
    expect(widths.content).toBeLessThanOrEqual(widths.viewport);
});

test('open site search and a mobile historical note meet automated accessibility checks', async ({
    page,
}) => {
    await page.goto('./');
    await page.getByRole('button', { name: 'Search site', exact: true }).click();
    await page.getByRole('dialog').getByRole('searchbox').fill('Mutsu');
    await expect(page.locator('.global-search__result').first()).toBeVisible();
    const searchAudit = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
        .analyze();
    expect(searchAudit.violations).toEqual([]);
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('./reference/#rank-kanpaku');
    await page.locator('#rank-kanpaku [data-trivia-trigger]').click();
    await expect(page.locator('#trivia-rank-kanpaku')).toBeVisible();
    const noteAudit = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
        .analyze();
    expect(noteAudit.violations).toEqual([]);
});
