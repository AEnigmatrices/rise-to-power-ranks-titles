/* global document, SVGElement, HTMLButtonElement */
import { max, rollups, sum } from 'd3-array';

const SVG_NS = 'http://www.w3.org/2000/svg';
const GRADE_COUNT = 12;

const categoryMeta = {
    'imperial-court': { label: 'Imperial Court', className: 'is-imperial' },
    'provincial-office': { label: 'Provincial Office', className: 'is-provincial' },
    'shogunate-office': { label: 'Shogunate Office', className: 'is-shogunate' },
    shugo: { label: 'Shugo', className: 'is-shugo' },
};

const svgElement = (name, attrs = {}) => {
    const node = document.createElementNS(SVG_NS, name);
    Object.entries(attrs).forEach(([key, value]) => node.setAttribute(key, String(value)));
    return node;
};

const clear = (node) => {
    while (node.firstChild) node.firstChild.remove();
};

const rowGrade = (row) => Number(row.dataset.grade ?? 0);
const rowCount = (row) => Number(row.dataset.count ?? 1);
const rowCategory = (row) => row.dataset.categoryKey ?? '';

const activate = (node, handler) => {
    node.addEventListener('click', handler);
    node.addEventListener('keydown', (event) => {
        if (event.key !== 'Enter' && event.key !== ' ') return;
        event.preventDefault();
        handler();
    });
};

const gradeRows = (rows) =>
    Array.from({ length: GRADE_COUNT }, (_, index) => {
        const grade = index + 1;
        const matching = rows.filter((row) => rowGrade(row) === grade);
        return {
            grade,
            entries: matching.length,
            occurrences: sum(matching, rowCount),
        };
    });

const categoryRows = (rows) => {
    const nested = new Map(
        rollups(
            rows,
            (items) => items.length,
            rowGrade,
            rowCategory,
        ),
    );

    return Array.from({ length: GRADE_COUNT }, (_, index) => {
        const grade = index + 1;
        const byCategory = new Map(nested.get(grade) ?? []);
        return {
            grade,
            categories: Object.keys(categoryMeta).map((category) => ({
                category,
                entries: byCategory.get(category) ?? 0,
            })),
        };
    });
};

const renderGradeChart = (svg, rows, selectedGrade, onGrade) => {
    clear(svg);

    const width = 720;
    const height = 280;
    const margin = { top: 18, right: 14, bottom: 44, left: 46 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
    const data = gradeRows(rows);
    const ceiling = Math.max(1, max(data, (item) => item.entries) ?? 1);
    const slot = innerWidth / GRADE_COUNT;
    const barWidth = Math.min(34, slot * 0.6);

    const grid = svgElement('g', { class: 'reference-chart__grid', 'aria-hidden': 'true' });
    [0, 0.25, 0.5, 0.75, 1].forEach((ratio) => {
        const y = margin.top + innerHeight - innerHeight * ratio;
        const line = svgElement('line', {
            x1: margin.left,
            x2: width - margin.right,
            y1: y,
            y2: y,
        });
        grid.append(line);

        const value = svgElement('text', {
            x: margin.left - 10,
            y: y + 4,
            'text-anchor': 'end',
        });
        value.textContent = String(Math.round(ceiling * ratio));
        grid.append(value);
    });
    svg.append(grid);

    data.forEach((item, index) => {
        const x = margin.left + slot * index + slot / 2 - barWidth / 2;
        const barHeight = (item.entries / ceiling) * innerHeight;
        const y = margin.top + innerHeight - barHeight;
        const group = svgElement('g', {
            class: `reference-chart__grade${selectedGrade === item.grade ? ' is-selected' : ''}`,
            role: 'button',
            tabindex: '0',
            'aria-label': `Grade ${item.grade}: ${item.entries} appointments, ${item.occurrences} occurrences. ${selectedGrade === item.grade ? 'Selected.' : 'Select to filter.'}`,
            'data-chart-grade': item.grade,
        });
        activate(group, () => onGrade(item.grade));

        const hit = svgElement('rect', {
            class: 'reference-chart__hit',
            x: margin.left + slot * index + 2,
            y: margin.top,
            width: Math.max(1, slot - 4),
            height: innerHeight,
            rx: 7,
        });
        group.append(hit);

        const rect = svgElement('rect', {
            class: 'reference-chart__bar',
            x,
            y,
            width: barWidth,
            height: Math.max(2, barHeight),
            rx: 5,
        });
        group.append(rect);

        if (item.entries > 0) {
            const count = svgElement('text', {
                class: 'reference-chart__value',
                x: x + barWidth / 2,
                y: Math.max(margin.top + 12, y - 7),
                'text-anchor': 'middle',
            });
            count.textContent = String(item.entries);
            group.append(count);
        }

        const label = svgElement('text', {
            class: 'reference-chart__axis-label',
            x: margin.left + slot * index + slot / 2,
            y: height - 17,
            'text-anchor': 'middle',
        });
        label.textContent = String(item.grade);
        group.append(label);

        svg.append(group);
    });

    const axisTitle = svgElement('text', {
        class: 'reference-chart__axis-title',
        x: margin.left + innerWidth / 2,
        y: height - 1,
        'text-anchor': 'middle',
    });
    axisTitle.textContent = 'Game grade';
    svg.append(axisTitle);
};

const renderCompositionChart = (
    svg,
    legend,
    rows,
    selectedGrade,
    selectedCategory,
    onComposition,
) => {
    clear(svg);
    legend.replaceChildren();

    const width = 720;
    const height = 280;
    const margin = { top: 18, right: 14, bottom: 44, left: 46 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
    const data = categoryRows(rows);
    const totals = data.map((item) => sum(item.categories, (category) => category.entries));
    const ceiling = Math.max(1, max(totals) ?? 1);
    const slot = innerWidth / GRADE_COUNT;
    const barWidth = Math.min(34, slot * 0.6);

    const grid = svgElement('g', { class: 'reference-chart__grid', 'aria-hidden': 'true' });
    [0, 0.25, 0.5, 0.75, 1].forEach((ratio) => {
        const y = margin.top + innerHeight - innerHeight * ratio;
        grid.append(
            svgElement('line', {
                x1: margin.left,
                x2: width - margin.right,
                y1: y,
                y2: y,
            }),
        );
    });
    svg.append(grid);

    data.forEach((item, index) => {
        const x = margin.left + slot * index + slot / 2 - barWidth / 2;
        let yCursor = margin.top + innerHeight;

        item.categories.forEach((category) => {
            if (!category.entries) return;
            const segmentHeight = (category.entries / ceiling) * innerHeight;
            yCursor -= segmentHeight;
            const meta = categoryMeta[category.category];
            const selected =
                selectedGrade === item.grade && selectedCategory === meta.label;
            const group = svgElement('g', {
                class: `reference-chart__segment ${meta.className}${selected ? ' is-selected' : ''}`,
                role: 'button',
                tabindex: '0',
                'aria-label': `Grade ${item.grade}, ${meta.label}: ${category.entries} appointments. Select to filter.`,
                'data-chart-grade': item.grade,
                'data-chart-category': meta.label,
            });
            activate(group, () => onComposition(item.grade, meta.label));

            group.append(
                svgElement('rect', {
                    class: 'reference-chart__segment-rect',
                    x,
                    y: yCursor,
                    width: barWidth,
                    height: Math.max(2, segmentHeight),
                    rx: 3,
                }),
            );
            svg.append(group);
        });

        const label = svgElement('text', {
            class: 'reference-chart__axis-label',
            x: margin.left + slot * index + slot / 2,
            y: height - 17,
            'text-anchor': 'middle',
        });
        label.textContent = String(item.grade);
        svg.append(label);
    });

    const presentCategories = new Set(rows.map(rowCategory));
    Object.entries(categoryMeta).forEach(([key, meta]) => {
        if (!presentCategories.has(key)) return;
        const item = document.createElement('span');
        item.className = 'reference-chart__legend-item';

        const swatch = document.createElement('span');
        swatch.className = `reference-chart__swatch ${meta.className}`;
        swatch.setAttribute('aria-hidden', 'true');

        item.append(swatch, document.createTextNode(meta.label));
        legend.append(item);
    });

    const axisTitle = svgElement('text', {
        class: 'reference-chart__axis-title',
        x: margin.left + innerWidth / 2,
        y: height - 1,
        'text-anchor': 'middle',
    });
    axisTitle.textContent = 'Game grade';
    svg.append(axisTitle);
};

export const renderReferenceCharts = ({
    root,
    rows,
    activeKind,
    selectedGrade,
    selectedCategory,
    onGrade,
    onComposition,
}) => {
    const gradeSvg = root.querySelector('[data-grade-chart]');
    const compositionSvg = root.querySelector('[data-composition-chart]');
    const legend = root.querySelector('[data-chart-legend]');
    const summary = root.querySelector('[data-chart-summary]');
    const clearButton = root.querySelector('[data-grade-clear]');
    const live = root.querySelector('[data-chart-live]');

    if (!(gradeSvg instanceof SVGElement) || !(compositionSvg instanceof SVGElement) || !legend)
        return;

    renderGradeChart(gradeSvg, rows, selectedGrade, onGrade);
    renderCompositionChart(
        compositionSvg,
        legend,
        rows,
        selectedGrade,
        selectedCategory,
        onComposition,
    );

    const stat = activeKind === 'rank' ? 'Politics' : 'Leadership';
    if (summary) {
        summary.textContent = selectedGrade
            ? `Grade ${selectedGrade} selected · ${stat} +${13 - selectedGrade}. Charts show the active ${activeKind} dataset.`
            : `Select a grade to filter the ledger. Lower grade numbers award larger ${stat} bonuses.`;
    }

    if (clearButton instanceof HTMLButtonElement) {
        clearButton.hidden = !selectedGrade;
    }

    if (live) {
        live.textContent = selectedGrade
            ? `Filtered to grade ${selectedGrade}.`
            : `Showing all grades for ${activeKind === 'rank' ? 'Ranks' : 'Titles'}.`;
    }
};
