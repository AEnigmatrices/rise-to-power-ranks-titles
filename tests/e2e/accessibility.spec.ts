import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const accessibilityRoutes = [
    './',
    './reference/',
    './items/',
    './items/arms/',
    './items/art/',
    './items/books/',
    './items/tea/',
    './ranks/',
    './titles/',
    './trivia/',
    './trivia/context/',
    './trivia/regions/',
    './trivia/offices/',
    './trivia/regions/mutsu/',
    './trivia/offices/danjo/',
] as const;

test('core routes have no serious or critical automated accessibility violations', async ({
    context,
}) => {
    test.setTimeout(120_000);

    for (const path of accessibilityRoutes) {
        await test.step(path, async () => {
            const page = await context.newPage();

            try {
                await page.goto(path);

                const results = await new AxeBuilder({ page })
                    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
                    .analyze();

                const blockingViolations = results.violations.filter(
                    (violation) =>
                        violation.impact === 'serious' ||
                        violation.impact === 'critical',
                );

                expect(
                    blockingViolations,
                    `Accessibility violations on ${path}`,
                ).toEqual([]);
            } finally {
                await page.close();
            }
        });
    }
});
