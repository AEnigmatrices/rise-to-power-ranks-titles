import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

test('overview, reference, and historical guide pages have no serious or critical automated accessibility violations', async ({ page }) => {
    for (const path of ['./', './reference/', './trivia/', './trivia/context/', './trivia/regions/', './trivia/offices/danjo/']) {
        await page.goto(path);

        const results = await new AxeBuilder({ page })
            .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
            .analyze();

        const blockingViolations = results.violations.filter(
            (violation) => violation.impact === 'serious' || violation.impact === 'critical',
        );

        expect(blockingViolations, `Accessibility violations on ${path}`).toEqual([]);
    }
});
