/* global document, SVGElement, HTMLElement, location */
import { hierarchy, tree } from 'd3-hierarchy';

const SVG_NS = 'http://www.w3.org/2000/svg';

const svgElement = (name, attrs = {}) => {
    const node = document.createElementNS(SVG_NS, name);
    Object.entries(attrs).forEach(([key, value]) => node.setAttribute(key, String(value)));
    return node;
};

const clear = (node) => {
    while (node.firstChild) node.firstChild.remove();
};

const buildTreeData = (ministry) => ({
    name: ministry.meaning,
    japanese: ministry.japanese,
    children: ministry.tiers.map((tier) => ({
        name: tier.label,
        japanese: tier.japanese,
        children: tier.appointments.map((appointment) => ({
            ...appointment,
            name: appointment.reading,
        })),
    })),
});

const appendMultilineText = (parent, lines, x, y, className) => {
    const text = svgElement('text', {
        x,
        y,
        class: className,
        'text-anchor': 'middle',
    });

    lines.forEach((line, index) => {
        const tspan = svgElement('tspan', {
            x,
            dy: index === 0 ? 0 : 15,
        });
        tspan.textContent = line;
        text.append(tspan);
    });

    parent.append(text);
    return text;
};

const render = (root, ministry, referenceBase) => {
    const svg = root.querySelector('[data-office-hierarchy-chart]');
    if (!(svg instanceof SVGElement)) return;

    clear(svg);

    const width = 1040;
    const height = 470;
    const layout = tree()
        .size([width - 120, height - 120])
        .separation((a, b) => (a.parent === b.parent ? 1.15 : 1.4));

    const data = hierarchy(buildTreeData(ministry));
    layout(data);

    const chart = svgElement('g', { transform: 'translate(60 42)' });

    data.links().forEach((link) => {
        const path = svgElement('path', {
            class: 'office-hierarchy__link',
            d: `M${link.source.x},${link.source.y} C${link.source.x},${(link.source.y + link.target.y) / 2} ${link.target.x},${(link.source.y + link.target.y) / 2} ${link.target.x},${link.target.y}`,
        });
        chart.append(path);
    });

    data.descendants().forEach((node) => {
        const depth = node.depth;
        const item = node.data;
        const group = svgElement('g', {
            class: `office-hierarchy__node office-hierarchy__node--depth-${depth}`,
            transform: `translate(${node.x} ${node.y})`,
        });

        const isAppointment = depth === 2;
        const boxWidth = depth === 0 ? 250 : depth === 1 ? 190 : 164;
        const boxHeight = depth === 0 ? 70 : depth === 1 ? 60 : 82;

        const rect = svgElement('rect', {
            x: -boxWidth / 2,
            y: -boxHeight / 2,
            width: boxWidth,
            height: boxHeight,
            rx: 10,
            class: 'office-hierarchy__node-box',
        });
        group.append(rect);

        if (isAppointment) {
            group.setAttribute('role', 'link');
            group.setAttribute('tabindex', '0');
            group.setAttribute(
                'aria-label',
                `${item.reading}, ${item.meaning}, Grade ${item.grade}, ${item.effect}. Open reference entry.`,
            );

            const open = () => {
                location.href = `${referenceBase}#${item.id}`;
            };

            group.addEventListener('click', open);
            group.addEventListener('keydown', (event) => {
                if (event.key !== 'Enter' && event.key !== ' ') return;
                event.preventDefault();
                open();
            });

            appendMultilineText(
                group,
                [item.japanese, item.reading],
                0,
                -8,
                'office-hierarchy__node-title',
            );

            const meta = svgElement('text', {
                x: 0,
                y: 28,
                class: 'office-hierarchy__node-meta',
                'text-anchor': 'middle',
            });
            meta.textContent = `Grade ${item.grade} · ${item.effect}`;
            group.append(meta);
        } else {
            appendMultilineText(
                group,
                [item.japanese, item.name],
                0,
                depth === 0 ? -5 : -3,
                'office-hierarchy__node-title',
            );
        }

        chart.append(group);
    });

    svg.append(chart);
};

(() => {
    const root = document.querySelector('[data-office-hierarchy]');
    if (!(root instanceof HTMLElement)) return;

    const dataNode = root.querySelector('[data-office-hierarchy-data]');
    const referenceBase = root.dataset.referenceBase ?? '';
    if (!dataNode?.textContent) return;

    const ministries = JSON.parse(dataNode.textContent);
    const tabs = Array.from(root.querySelectorAll('[data-ministry]'));
    const currentJapanese = root.querySelector('[data-hierarchy-current-japanese]');
    const currentLabel = root.querySelector('[data-hierarchy-current-label]');

    let active = ministries[0];

    const setActive = (id) => {
        const ministry = ministries.find((candidate) => candidate.id === id) ?? ministries[0];
        active = ministry;

        tabs.forEach((tab) => {
            const selected = tab.dataset.ministry === active.id;
            tab.classList.toggle('is-active', selected);
            tab.setAttribute('aria-selected', String(selected));
            tab.tabIndex = selected ? 0 : -1;
        });

        if (currentJapanese) currentJapanese.textContent = active.japanese;
        if (currentLabel) currentLabel.textContent = active.meaning;
        render(root, active, referenceBase);
    };

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => setActive(tab.dataset.ministry));

        tab.addEventListener('keydown', (event) => {
            if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
            event.preventDefault();

            let next = index;
            if (event.key === 'Home') next = 0;
            else if (event.key === 'End') next = tabs.length - 1;
            else if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
            else next = (index - 1 + tabs.length) % tabs.length;

            const nextTab = tabs[next];
            setActive(nextTab.dataset.ministry);
            nextTab.focus();
        });
    });

    setActive(active.id);
})();
