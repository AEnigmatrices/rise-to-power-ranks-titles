import { expect, test } from '@playwright/test';

test('homepage navigation reaches the historical guide and political context', async ({ page }) => {
    await page.goto('./');

    await page
        .getByRole('link', { name: /Historical Guide/ })
        .first()
        .click();
    await expect(page).toHaveURL(/\/trivia\/$/);
    await expect(
        page.getByRole('heading', { name: 'The stories behind the appointments' }),
    ).toBeVisible();

    await page.getByRole('link', { name: /Political Context/ }).click();
    await expect(page).toHaveURL(/\/trivia\/context\/$/);
    await expect(
        page.getByRole('heading', { name: 'Two authorities in an age of warlords' }),
    ).toBeVisible();
    await expect(page.getByRole('heading', { name: 'The Imperial Court' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'The Muromachi Shogunate' })).toBeVisible();
});

test('historical guide reaches the region directory', async ({ page }) => {
    await page.goto('./trivia/');

    await page.getByRole('link', { name: /Regions & Provinces/ }).click();
    await expect(page).toHaveURL(/\/trivia\/regions\/$/);
    await expect(page.getByRole('heading', { name: 'Regions & Provinces' })).toBeVisible();
});

test('region directory navigation reaches a detail page and returns to a catalogue appointment', async ({
    page,
}) => {
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

    const targetId = href?.split('#')[1] ?? '';
    expect(targetId).toMatch(/^(?:rank|title)-/);

    await related.click();
    await expect(page).toHaveURL(/\/rise-to-power-ranks-titles\/reference\/#(?:rank|title)-/);

    // WebKit can expose the new URL hash before recalculating the :target pseudo-class
    // after a cross-document view transition. Verify the hashed catalogue row directly.
    await expect(page.locator(`#${targetId}`)).toBeVisible();
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

    const displayedCount = Number(
        (await page.locator('[data-guide-count]').textContent())?.match(/\d+/)?.[0] ?? 0,
    );
    await expect(visibleCards).toHaveCount(displayedCount);
});

test('office directory links use descriptive names and detail pages link back to the catalogue', async ({
    page,
}) => {
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

        const hrefs = await page
            .locator('a[href]')
            .evaluateAll((anchors) =>
                anchors.map((anchor) => anchor.getAttribute('href')).filter(Boolean),
            );

        const malformed = hrefs.filter(
            (href) =>
                href?.startsWith('/rise-to-power-ranks-titles') &&
                !href.startsWith('/rise-to-power-ranks-titles/') &&
                href !== '/rise-to-power-ranks-titles',
        );

        expect(malformed, `Malformed internal links on ${path}`).toEqual([]);
    }

    await page.goto('./');
    const icons = await page
        .locator('link[rel="icon"]')
        .evaluateAll((links) => links.map((link) => link.getAttribute('href') ?? ''));
    expect(icons.length).toBeGreaterThan(0);
    for (const icon of icons) {
        expect(icon).toMatch(/^\/rise-to-power-ranks-titles\/favicon[^/]*\.(?:svg|webp|png)$/);
        const response = await page.request.get(icon);
        expect(response.ok(), `Icon should load: ${icon}`).toBe(true);
    }
});

test('political context provides in-page navigation for the long-form history', async ({
    page,
}) => {
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
    await expect(siteNav.getByRole('link', { name: 'Historical Guide' })).toHaveAttribute(
        'aria-current',
        'page',
    );

    await page.goto('./trivia/offices/danjo/');
    await expect(page.getByRole('navigation', { name: 'Site navigation' })).toBeVisible();
});

test('Toyohisa trivia explains both Nakatsukasa attributions', async ({
    page,
}) => {
    await page.goto('./reference/#rank-nakatsukasa-no-sho');

    const animeToyohisaRow = page.locator('#rank-nakatsukasa-no-sho');
    await expect(animeToyohisaRow).toBeVisible();
    await animeToyohisaRow.locator('[data-trivia-trigger]').click();
    await expect(
        animeToyohisaRow
            .locator('[data-trivia-popover]')
            .getByText('Toyohisa is transmitted under two Nakatsukasa titles'),
    ).toBeVisible();

    await page.goto('./trivia/offices/drifters-toyohisa/');
    await expect(
        page.getByRole('heading', { name: 'Toyohisa is transmitted under two Nakatsukasa titles' }),
    ).toBeVisible();

    const toyohisaRelated = page.locator('.related-appointment');
    await expect(toyohisaRelated).toHaveCount(2);
    await expect(page.getByRole('link', { name: /Scribe Captain/ })).toBeVisible();
    await expect(page.getByRole('link', { name: /Central General/ })).toBeVisible();

    await page.goto('./trivia/offices/drifters-naomasa/');
    await expect(
        page.getByRole('heading', { name: 'Drifters gets Naomasa’s office right' }),
    ).toBeVisible();
    await expect(page.getByRole('link', { name: /Defense Supervisor/ })).toBeVisible();
});

test('Toyohisa appears as a notable holder under both Nakatsukasa attributions', async ({
    page,
}) => {
    await page.goto('./reference/#rank-nakatsukasa-no-taifu');
    await expect(page.locator('#rank-nakatsukasa-no-taifu .holder-details')).toContainText(
        'Shimazu Toyohisa',
    );

    await page.goto('./reference/#rank-nakatsukasa-no-sho');
    await expect(page.locator('#rank-nakatsukasa-no-sho .holder-details')).toContainText(
        'Shimazu Toyohisa',
    );
});

test('Eight Ministries hierarchy switches ministries and links offices to the reference', async ({
    page,
}) => {
    await page.goto('./trivia/context/#imperial-court');

    const hierarchy = page.locator('[data-office-hierarchy]');
    await expect(hierarchy).toBeVisible();
    await expect(hierarchy.locator('[data-hierarchy-current-japanese]')).toHaveText('中務省');

    const chart = hierarchy.locator('[data-office-hierarchy-chart]');
    await expect(chart.getByRole('link', { name: /Nakatsukasa no Taifu/ })).toBeVisible();
    await expect(chart.getByRole('link', { name: /Nakatsukasa no Shō/ })).toBeVisible();

    await hierarchy.locator('[data-ministry="hyobu"]').click();
    await expect(hierarchy.locator('[data-hierarchy-current-japanese]')).toHaveText('兵部省');
    await expect(chart.getByRole('link', { name: /Hyōbu no Shō/ })).toBeVisible();

    await chart.getByRole('link', { name: /Hyōbu no Shō/ }).click();
    await expect(page).toHaveURL(/reference\/#rank-hyobu-no-sho$/);
    await expect(page.locator('#rank-hyobu-no-sho')).toBeVisible();
});

test('reference charts filter the ledger by grade and institutional type', async ({ page }) => {
    await page.goto('./reference/');

    const gradeChart = page.locator('[data-grade-chart]');
    const compositionChart = page.locator('[data-composition-chart]');
    await expect(gradeChart).toBeVisible();
    await expect(compositionChart).toBeVisible();

    await gradeChart.locator('[data-chart-grade="7"]').click();
    await expect(page).toHaveURL(/grade=7/);
    await expect(page.locator('[data-grade-clear]')).toBeVisible();

    const visibleRanks = page.locator('#rank-panel [data-reference-row]:visible');
    await expect(visibleRanks.first()).toHaveAttribute('data-grade', '7');
    expect(await visibleRanks.count()).toBeGreaterThan(0);

    await compositionChart
        .locator('[data-chart-grade="7"][data-chart-category="Imperial Court"]')
        .click();
    await expect(page).toHaveURL(/type=Imperial\+Court/);
    await expect(page.locator('[data-category-filter]')).toHaveValue('Imperial Court');

    await page.locator('[data-grade-clear]').click();
    await expect(page).not.toHaveURL(/grade=/);
});

test('region detail pages surface what the place is known for', async ({ page }) => {
    await page.goto('./trivia/regions/owari/');

    const knownFor = page.locator('.guide-detail__known-for');
    await expect(knownFor.getByText('Known for')).toBeVisible();
    await expect(knownFor.getByText(/Oda Nobunaga’s home province/i)).toBeVisible();
});

test('reference entries expose notable holder context', async ({ page }) => {
    await page.goto('./reference/#rank-hyobu-no-sho');

    const naomasaRow = page.locator('#rank-hyobu-no-sho');
    await expect(naomasaRow).toBeVisible();

    const holderDetails = naomasaRow.locator('.holder-details');
    const holderSummary = holderDetails.locator('summary');

    await expect(async () => {
        if (!(await holderDetails.evaluate((details) => (details as HTMLDetailsElement).open))) {
            await holderSummary.click();
        }
        await expect(holderDetails).toHaveAttribute('open', '');
    }).toPass();

    await expect(holderDetails.getByText('Ii Naomasa')).toBeVisible();
    await expect(holderDetails.getByText(/Red Devils/i)).toBeVisible();

    const unseededRow = page.locator('#rank-tachihaki-senjo');
    await expect(unseededRow.locator('.holder-details')).toHaveCount(0);
});
