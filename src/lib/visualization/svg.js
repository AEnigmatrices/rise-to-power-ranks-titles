/* global document */

const SVG_NS = 'http://www.w3.org/2000/svg';

export const svgElement = (name, attrs = {}) => {
    const node = document.createElementNS(SVG_NS, name);
    Object.entries(attrs).forEach(([key, value]) => node.setAttribute(key, String(value)));
    return node;
};

export const clearElement = (node) => {
    while (node.firstChild) node.firstChild.remove();
};

export const appendMultilineText = (
    parent,
    lines,
    x,
    y,
    className,
    { lineHeight = 16, anchor = 'middle' } = {},
) => {
    const text = svgElement('text', {
        x,
        y,
        class: className,
        'text-anchor': anchor,
    });

    lines.forEach((line, index) => {
        const tspan = svgElement('tspan', {
            x,
            dy: index === 0 ? 0 : lineHeight,
        });
        tspan.textContent = line;
        text.append(tspan);
    });

    parent.append(text);
    return text;
};

export const activateSvgNode = (node, handler) => {
    node.addEventListener('click', handler);
    node.addEventListener('keydown', (event) => {
        if (event.key !== 'Enter' && event.key !== ' ') return;
        event.preventDefault();
        handler();
    });
};

export const ensureVizTooltip = (root) => {
    let tooltip = root.querySelector('[data-viz-tooltip]');
    if (tooltip) return tooltip;

    tooltip = document.createElement('div');
    tooltip.className = 'viz-tooltip';
    tooltip.dataset.vizTooltip = '';
    tooltip.setAttribute('role', 'tooltip');
    tooltip.hidden = true;
    root.append(tooltip);
    return tooltip;
};

const positionTooltip = (root, tooltip, target) => {
    const rootRect = root.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    const center = targetRect.left - rootRect.left + targetRect.width / 2;
    const top = targetRect.top - rootRect.top;

    tooltip.style.left = `${center}px`;
    tooltip.style.top = `${Math.max(8, top - 8)}px`;
};

export const bindVizTooltip = (root, target, lines) => {
    const tooltip = ensureVizTooltip(root);

    const show = () => {
        tooltip.replaceChildren();
        lines.forEach((line, index) => {
            const span = document.createElement(index === 0 ? 'strong' : 'span');
            span.textContent = line;
            tooltip.append(span);
        });
        tooltip.hidden = false;
        positionTooltip(root, tooltip, target);
    };

    const hide = () => {
        tooltip.hidden = true;
    };

    target.addEventListener('pointerenter', show);
    target.addEventListener('pointerleave', hide);
    target.addEventListener('focus', show);
    target.addEventListener('blur', hide);
};

export const bindRelatedHighlight = (root, target, selector, match) => {
    const update = (active) => {
        root.querySelectorAll(selector).forEach((node) => {
            const related = match(node);
            node.classList.toggle('is-related', active && related);
            node.classList.toggle('is-muted', active && !related);
        });
    };

    target.addEventListener('pointerenter', () => update(true));
    target.addEventListener('pointerleave', () => update(false));
    target.addEventListener('focus', () => update(true));
    target.addEventListener('blur', () => update(false));
};
