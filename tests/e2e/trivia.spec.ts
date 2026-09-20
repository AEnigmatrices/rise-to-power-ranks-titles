import { expect, test } from '@playwright/test';

test('homepage navigation reaches the historical guide and political context', async ({ page }) => {
    await page.goto('./');

    await page.getByRole('link', { name: /Historical Guide/ }).first().click();
    await expect(page).toHaveURL(/\/trivia\/$/);
    await expect(page.getByRole('heading', { name: 'The stories behind the appointments' })).toBeVisible();

    await page.getByRole('link', { name: /Political Context/ }).click();
    await expect(page).toHaveURL(/\/trivia\/context\/$/);
    await expect(page.getByRole('heading', { name: 'Two authorities in an age of warlords' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'The Imperial Court' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'The Muromachi Shogunate' })).toBeVisible();
});

test('historical guide reaches the region directory', async ({ page }) => {
    await page.goto('./trivia/');

    await page.getByRole('link', { name: /Regions & Provinces/ }).click();
    await expect(page).toHaveURL(/\/trivia\/regions\/$/);
    await expect(page.getByRole('heading', { name: 'Regions & Provinces' })).toBeVisible();
});

test('region directory navigation reaches a detail page and returns to a catalogue appointment', async ({ page }) => {
    await page.goto('./trivia/regions/');

    const mutsu = page.getByRole('link', { name: /Mutsu/ }).first();
    await expect(mutsu).toBeVisible();
    await mutsu.click();

    await expect(page).toHaveURL(/\/trivia\/regions\/mutsu\/$/);
    await expect(page.getByRole('heading', { name: 'Mutsu' })).toBeVisible();

    const related = page.locator('.related-appointment').first();
    await expect(related).toBeVisible();
    const href = await related.getAttribute('href');
    expect(href).toMatch(/^\/rise-to-power-ranks-titles\/reference\/#(?:rank|title)-/);

    await related.click();
    await expect(page).toHaveURL(/\/rise-to-power-ranks-titles\/reference\/#(?:rank|title)-/);
    await expect(page.locator('[data-reference-row]:target')).toBeVisible();
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

    const displayedCount = Number((await page.locator('[data-guide-count]').textContent())?.match(/\d+/)?.[0] ?? 0);
    await expect(visibleCards).toHaveCount(displayedCount);
});

test('office directory links use descriptive names and detail pages link back to the catalogue', async ({ page }) => {
    await page.goto('./trivia/offices/');

    const danjo = page.getByRole('link', { name: /A censor and policing office/ });
    await expect(danjo).toBeVisible();
    await danjo.click();

    await expect(page).toHaveURL(/\/trivia\/offices\/danjo\/$/);
    await expect(page.getByRole('heading', { name: 'A censor and policing office' })).toBeVisible();

    const related = page.getByRole('link', { name: /Supreme Commander/ });
    await expect(related).toHaveAttribute(
        'href',
        '/rise-to-power-ranks-titles/reference/#rank-danjo-no-kami',
    );
});

test('rendered internal links retain the GitHub Pages base path', async ({ page }) => {
    for (const path of ['./', './reference/', './trivia/', './trivia/context/']) {
        await page.goto(path);

        const hrefs = await page.locator('a[href]').evaluateAll((anchors) =>
            anchors.map((anchor) => anchor.getAttribute('href')).filter(Boolean),
        );

        const malformed = hrefs.filter((href) =>
            href?.startsWith('/rise-to-power-ranks-titles') &&
            !href.startsWith('/rise-to-power-ranks-titles/') &&
            href !== '/rise-to-power-ranks-titles',
        );

        expect(malformed, `Malformed internal links on ${path}`).toEqual([]);
    }

    await page.goto('./');
    await expect(page.locator('link[rel="icon"]')).toHaveAttribute(
        'href',
        '/rise-to-power-ranks-titles/favicon.svg',
    );
});


test('political context provides in-page navigation for the long-form history', async ({ page }) => {
    await page.goto('./trivia/context/');

    const jumpNav = page.getByRole('navigation', { name: 'Political context sections' });
    await expect(jumpNav).toBeVisible();

    await jumpNav.getByRole('link', { name: 'Muromachi Shogunate' }).click();
    await expect(page).toHaveURL(/#muromachi-shogunate$/);
    await expect(page.locator('#muromachi-shogunate')).toBeVisible();
});

test('historical guide directories retain the global site navigation', async ({ page }) => {
    await page.goto('./trivia/regions/');

    const siteNav = page.getByRole('navigation', { name: 'Site navigation' });
    await expect(siteNav).toBeVisible();
    await expect(siteNav.getByRole('link', { name: 'Historical Guide' })).toHaveAttribute('aria-current', 'page');

    await page.goto('./trivia/offices/danjo/');
    await expect(page.getByRole('navigation', { name: 'Site navigation' })).toBeVisible();
});
