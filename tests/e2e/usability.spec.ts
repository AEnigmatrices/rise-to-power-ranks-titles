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

test.describe('narrow layout overflow', () => {
    for (const path of narrowLayoutRoutes) {
        test(`${path} fits a narrow phone without horizontal overflow`, async ({ page }) => {
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
        });
    }
});
