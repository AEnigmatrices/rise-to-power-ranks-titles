import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

test('main reference page has no serious or critical automated accessibility violations', async ({ page }) => {
    await page.goto('./');

    const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze();

    const blockingViolations = results.violations.filter(
        (violation) => violation.impact === 'serious' || violation.impact === 'critical',
    );

    expect(blockingViolations).toEqual([]);
});
