import { expect, test } from '@playwright/test';

test('keyboard users can skip navigation and reach the page content', async ({ page }) => {
    await page.goto('./');
    await page.keyboard.press('Tab');
    const skip = page.getByRole('link', { name: 'Skip to content' });
    await expect(skip).toBeFocused();
    await page.keyboard.press('Enter');
    await expect(page.locator('#main-content')).toBeFocused();
});

test('changing systems from an appointment link survives a reload', async ({ page }) => {
    await page.goto('./reference/#rank-kanpaku');
    const titles = page.getByRole('tab', { name: /Shogunate Titles/ });
    await titles.click();
    await expect(page).toHaveURL(/\?view=title$/);
    await page.reload();
    await expect(titles).toHaveAttribute('aria-selected', 'true');
    await expect(page.locator('[data-result-count]')).toContainText('70 unique titles');
});

test('appointment links reveal entries even when URL filters exclude them', async ({ page }) => {
    await page.goto('./reference/?q=zzzzzz#rank-kanpaku');
    await expect(page.locator('#rank-kanpaku')).toBeVisible();
    await expect(page.getByRole('searchbox', { name: 'Search appointments' })).toHaveValue('');
    await expect(page).toHaveURL(/#rank-kanpaku$/);
});

test('empty catalogue results recover and Escape keeps search focused', async ({ page }) => {
    await page.goto('./reference/');
    const search = page.getByRole('searchbox', { name: 'Search appointments' });
    await search.fill('zzzzzzzzzz');
    await expect(
        page
            .getByRole('tabpanel', { name: /Imperial Court Ranks/ })
            .getByText('No matching appointments', { exact: true }),
    ).toBeVisible();
    await page.getByRole('button', { name: 'Clear search & filters' }).click();
    await expect(search).toBeFocused();
    await expect(page.locator('[data-result-count]')).toContainText('295 unique ranks');
    await search.fill('Mutsu');
    await search.press('Escape');
    await expect(search).toHaveValue('');
    await expect(search).toBeFocused();
});

test('system tabs support Home and End keyboard navigation', async ({ page }) => {
    await page.goto('./reference/');
    const ranks = page.getByRole('tab', { name: /Imperial Court Ranks/ });
    const titles = page.getByRole('tab', { name: /Shogunate Titles/ });
    await ranks.focus();
    await ranks.press('End');
    await expect(titles).toBeFocused();
    await expect(titles).toHaveAttribute('aria-selected', 'true');
    await titles.press('Home');
    await expect(ranks).toBeFocused();
    await expect(ranks).toHaveAttribute('aria-selected', 'true');
});

test('historical notes stay within the viewport and close with keyboard focus restored', async ({
    page,
}) => {
    await page.goto('./reference/?q=Regent');
    const trigger = page.locator('#rank-kanpaku [data-trivia-trigger]');
    await trigger.click();
    const note = page.locator('#trivia-rank-kanpaku');
    await expect(note).toBeVisible();
    await expect
        .poll(async () => {
            const box = await note.boundingBox();
            const viewport = page.viewportSize();
            return Boolean(
                box &&
                viewport &&
                box.x >= 0 &&
                box.y >= 0 &&
                box.x + box.width <= viewport.width &&
                box.y + box.height <= viewport.height,
            );
        })
        .toBe(true);
    const close = note.getByRole('button', { name: 'Close historical note' });
    await close.focus();
    await close.press('Escape');
    await expect(trigger).toBeFocused();
    await expect(trigger).toHaveAttribute('aria-expanded', 'false');
    await trigger.click();
    await close.click();
    await expect(trigger).toBeFocused();
    await expect(trigger).toHaveAttribute('aria-expanded', 'false');
});

test('directory recovery clears both the search and the map filter', async ({ page }) => {
    await page.goto('./trivia/regions/?area=Kant%C5%8D&q=zzzzzzzz');
    await expect(page.getByText('No matching places', { exact: true })).toBeVisible();
    await page.getByRole('button', { name: 'Clear search & filters' }).click();
    await expect(page.locator('[data-guide-area]')).toHaveValue('');
    await expect(page.locator('[data-guide-search]')).toBeFocused();
    await expect(page.locator('[data-guide-card]:visible')).toHaveCount(72);
    await expect(page.locator('[data-map-area-button][aria-pressed="true"]')).toHaveCount(0);
});

const narrowLayoutRoutes = [
    './',
    './reference/',
    './trivia/',
    './trivia/context/',
    './trivia/regions/',
    './trivia/offices/',
    './trivia/regions/mutsu/',
    './trivia/offices/danjo/',
] as const;

test('core page layouts fit a narrow phone without horizontal overflow', async ({
    context,
}) => {
    test.setTimeout(60_000);

    for (const path of narrowLayoutRoutes) {
        await test.step(path, async () => {
            const page = await context.newPage();

            try {
                await page.setViewportSize({ width: 320, height: 780 });
                await page.goto(path);

                const width = await page.evaluate(() => ({
                    content: document.documentElement.scrollWidth,
                    viewport: document.documentElement.clientWidth,
                }));

                expect(
                    width.content,
                    `Horizontal overflow on ${path}`,
                ).toBeLessThanOrEqual(width.viewport);
            } finally {
                await page.close();
            }
        });
    }
});


test('global Pagefind search opens from the navigation and returns guide pages', async ({ page }) => {
    await page.goto('./');

    await page.getByRole('button', { name: 'Search' }).click();

    const dialog = page.getByRole('dialog', { name: /Search the reference & historical guide/ });
    await expect(dialog).toBeVisible();

    const search = dialog.getByRole('searchbox', { name: 'Search the site' });
    await search.fill('Kantō Kanrei');

    const result = dialog.locator(
        '.global-search__result[href="/rise-to-power-ranks-titles/trivia/offices/kanto-kanrei/"]',
    );
    await expect(result).toBeVisible();
    await expect(result).toContainText(/Kantō Kanrei/i);
});

test('global Pagefind search supports the keyboard shortcut and closes with Escape', async ({ page }) => {
    await page.goto('./trivia/');

    await page.keyboard.press('Control+K');

    const dialog = page.getByRole('dialog', { name: /Search the reference & historical guide/ });
    await expect(dialog).toBeVisible();

    await page.keyboard.press('Escape');
    await expect(dialog).toBeHidden();
});


test('reference search exposes clear and reset states only when useful', async ({ page }) => {
    await page.goto('./reference/');

    const search = page.getByRole('searchbox', { name: 'Search appointments' });
    const clear = page.getByRole('button', { name: 'Clear appointment search' });
    const reset = page.locator('.toolbar').getByRole('button', { name: 'Reset' });

    await expect(clear).toBeHidden();
    await expect(reset).toBeDisabled();

    await search.fill('Mutsu');
    await expect(clear).toBeVisible();
    await expect(reset).toBeEnabled();

    await clear.click();
    await expect(search).toHaveValue('');
    await expect(search).toBeFocused();
    await expect(clear).toBeHidden();
    await expect(reset).toBeDisabled();
});

test('guide directory clear controls preserve keyboard focus and reset state', async ({ page }) => {
    await page.goto('./trivia/offices/');

    const search = page.getByRole('searchbox', { name: 'Search offices and titles' });
    const clear = page.getByRole('button', { name: 'Clear office search' });
    const reset = page.locator('.guide-directory__controls').getByRole('button', { name: 'Reset' });

    await expect(clear).toBeHidden();
    await expect(reset).toBeDisabled();

    await search.fill('Kanrei');
    await expect(clear).toBeVisible();
    await expect(reset).toBeEnabled();

    await clear.click();
    await expect(search).toBeFocused();
    await expect(search).toHaveValue('');
    await expect(reset).toBeDisabled();
});

test('global search supports arrow-key result navigation and restores focus', async ({ page }) => {
    await page.goto('./');
    const trigger = page.getByRole('button', { name: 'Search site' });

    await trigger.focus();
    await trigger.click();

    const dialog = page.getByRole('dialog', { name: /Search the reference & historical guide/ });
    const search = dialog.getByRole('searchbox', { name: 'Search the site' });
    await search.fill('Kantō Kanrei');

    await expect(dialog.locator('.global-search__result').first()).toBeVisible();
    await search.press('ArrowDown');
    await expect(dialog.locator('.global-search__result').first()).toBeFocused();

    await page.keyboard.press('Escape');
    await expect(dialog).toBeHidden();
    await expect(trigger).toBeFocused();
});
