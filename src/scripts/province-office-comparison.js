/* global document, CustomEvent, SVGElement, HTMLElement, HTMLSelectElement, URLSearchParams, location */

import { hierarchy, tree } from 'd3-hierarchy';
import {
    activateSvgNode,
    appendMultilineText,
    bindVizTooltip,
    clearElement,
    svgElement,
} from '../lib/visualization/svg.js';

const chartData = (pair) => ({
    type: 'province',
    japanese: pair.province.japanese,
    label: pair.province.name,
    children: [
        {
            type: 'court',
            institution: 'Imperial Court',
            appointment: pair.court,
        },
        pair.shugo
            ? {
                  type: 'shugo',
                  institution: 'Muromachi Shogunate',
                  appointment: pair.shugo,
              }
            : {
                  type: 'missing',
                  institution: 'Muromachi Shogunate',
                  japanese: '守護',
                  label: 'No Shugo title represented',
              },
    ],
});

const render = (root, pair) => {
    const svg = root.querySelector('[data-province-office-chart]');
    if (!(svg instanceof SVGElement)) return;

    clearElement(svg);

    const layout = tree().size([620, 185]);
    const data = hierarchy(chartData(pair));
    layout(data);

    const chart = svgElement('g', { transform: 'translate(140 68)' });

    data.links().forEach((link) => {
        chart.append(
            svgElement('path', {
                class: 'province-office-comparison__link',
                d: `M${link.source.x},${link.source.y} C${link.source.x},${(link.source.y + link.target.y) / 2} ${link.target.x},${(link.source.y + link.target.y) / 2} ${link.target.x},${link.target.y}`,
            }),
        );
    });

    data.descendants().forEach((node) => {
        const item = node.data;
        const group = svgElement('g', {
            class: `province-office-comparison__node is-${item.type}`,
            transform: `translate(${node.x} ${node.y})`,
        });

        const rootNode = item.type === 'province';
        const missing = item.type === 'missing';
        const widthBox = rootNode ? 220 : 250;
        const heightBox = rootNode ? 76 : 116;

        group.append(
            svgElement('rect', {
                x: -widthBox / 2,
                y: -heightBox / 2,
                width: widthBox,
                height: heightBox,
                rx: 11,
                class: 'province-office-comparison__node-box',
            }),
        );

        if (rootNode) {
            appendMultilineText(
                group,
                [item.japanese, item.label],
                0,
                -4,
                'province-office-comparison__node-title',
                { lineHeight: 17 },
            );
        } else if (missing) {
            appendMultilineText(
                group,
                [item.japanese, item.label],
                0,
                -14,
                'province-office-comparison__node-title',
                { lineHeight: 17 },
            );
            const institution = svgElement('text', {
                x: 0,
                y: 30,
                class: 'province-office-comparison__node-meta',
                'text-anchor': 'middle',
            });
            institution.textContent = item.institution;
            group.append(institution);
        } else {
            const appointment = item.appointment;
            group.setAttribute('role', 'link');
            group.setAttribute('tabindex', '0');
            group.setAttribute(
                'aria-label',
                `${appointment.reading}, ${item.institution}, Grade ${appointment.grade}, ${appointment.effect}. Open reference entry.`,
            );

            const open = () => {
                location.href = `${root.dataset.referenceBase}#${appointment.id}`;
            };
            activateSvgNode(group, open);
            bindVizTooltip(root, group, [
                appointment.reading,
                appointment.meaning,
                item.institution,
                `Grade ${appointment.grade} · ${appointment.effect}`,
            ]);

            appendMultilineText(
                group,
                [appointment.japanese, appointment.reading],
                0,
                -25,
                'province-office-comparison__node-title',
                { lineHeight: 17 },
            );

            const institution = svgElement('text', {
                x: 0,
                y: 16,
                class: 'province-office-comparison__node-institution',
                'text-anchor': 'middle',
            });
            institution.textContent = item.institution;
            group.append(institution);

            const meta = svgElement('text', {
                x: 0,
                y: 36,
                class: 'province-office-comparison__node-meta',
                'text-anchor': 'middle',
            });
            meta.textContent = `Grade ${appointment.grade} · ${appointment.effect}`;
            group.append(meta);
        }

        chart.append(group);
    });

    svg.append(chart);
};

(() => {
    const root = document.querySelector('[data-province-office-comparison]');
    if (!(root instanceof HTMLElement)) return;

    const select = root.querySelector('[data-province-office-select]');
    const dataNode = root.querySelector('[data-province-office-data]');
    const empty = root.querySelector('[data-province-office-empty]');
    const selection = root.querySelector('[data-province-office-selection]');
    const japanese = root.querySelector('[data-province-office-japanese]');
    const name = root.querySelector('[data-province-office-name]');
    const locationNode = root.querySelector('[data-province-office-location]');
    const note = root.querySelector('[data-province-office-note]');
    const guideLink = root.querySelector('[data-province-office-guide]');

    if (!(select instanceof HTMLSelectElement) || !dataNode?.textContent) return;

    const pairs = JSON.parse(dataNode.textContent);
    const byId = new Map(pairs.map((pair) => [pair.province.id, pair]));

    const show = (id, notify = true) => {
        const pair = byId.get(id);

        if (!pair) {
            select.value = '';
            if (empty) empty.hidden = false;
            if (selection) selection.hidden = true;
            return;
        }

        select.value = id;
        if (empty) empty.hidden = true;
        if (selection) selection.hidden = false;
        if (japanese) japanese.textContent = pair.province.japanese;
        if (name) name.textContent = pair.province.name;
        if (locationNode) locationNode.textContent = pair.province.location;
        if (guideLink) guideLink.setAttribute('href', `${root.dataset.regionsBase}${pair.province.id}/`);

        if (note) {
            note.textContent = pair.shugo
                ? `${pair.province.name} has both a provincial Court appointment and a Shugo title in Rise to Power. Similar English translations conceal two different institutions.`
                : `${pair.province.name} has a provincial Court appointment, but no Shugo title is represented for it in Rise to Power.`;
        }

        render(root, pair);

        if (notify) {
            root.dispatchEvent(
                new CustomEvent('province-office-change', {
                    bubbles: true,
                    detail: { provinceId: pair.province.id, area: pair.province.area },
                }),
            );
        }
    };

    select.addEventListener('change', () => show(select.value));

    root.addEventListener('guide-area-change', (event) => {
        const activeArea = event.detail?.area ?? '';
        const selected = byId.get(select.value);
        if (selected && activeArea && selected.province.area !== activeArea) show('', false);
    });

    const params = new URLSearchParams(location.search);
    const initialProvince = params.get('province') ?? '';
    if (byId.has(initialProvince)) show(initialProvince, false);
})();
