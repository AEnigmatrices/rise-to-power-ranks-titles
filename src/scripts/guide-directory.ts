import Fuse from 'fuse.js';
import { animate } from 'motion/mini';
import { isSingleCharacterQuery, normalizeSearchText } from '../lib/search';

type DirectoryRecord = {
    card: HTMLElement;
    all: string;
};

(() => {
    const root = document.querySelector<HTMLElement>('[data-guide-directory]');
    if (!root) return;

    const search = root.querySelector<HTMLInputElement>('[data-guide-search]');
    const area = root.querySelector<HTMLSelectElement>('[data-guide-area]');
    const count = root.querySelector<HTMLElement>('[data-guide-count]');
    const empty = root.querySelector<HTMLElement>('[data-guide-empty]');
    const cards = Array.from(root.querySelectorAll<HTMLElement>('[data-guide-card]'));
    const map = root.querySelector<HTMLElement>('[data-region-map]');
    const mapPaths = Array.from(root.querySelectorAll<SVGPathElement>('[data-map-area]'));
    const mapButtons = Array.from(
        root.querySelectorAll<HTMLButtonElement>('[data-map-area-button]'),
    );
    const mapClear = root.querySelector<HTMLButtonElement>('[data-map-area-clear]');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let initialized = false;

    if (!search || !count || !empty) return;

    const params = new URLSearchParams(location.search);
    search.value = params.get('q') ?? '';
    if (area) area.value = params.get('area') ?? '';

    const records: DirectoryRecord[] = cards.map((card) => ({
        card,
        all: normalizeSearchText(card.dataset.search ?? card.textContent ?? ''),
    }));

    const fuse = new Fuse(records, {
        includeScore: true,
        ignoreLocation: true,
        threshold: 0.35,
        minMatchCharLength: 1,
        keys: [{ name: 'all', weight: 1 }],
    });

    const syncMap = () => {
        const activeArea = area?.value ?? '';
        if (map) map.hidden = false;

        mapPaths.forEach((path) => {
            const pathArea = path.dataset.mapArea ?? '';
            path.classList.toggle('is-selected', Boolean(activeArea && pathArea === activeArea));
            path.classList.toggle(
                'is-dimmed',
                Boolean(activeArea && pathArea && pathArea !== activeArea),
            );
        });

        mapButtons.forEach((button) => {
            const selected = Boolean(activeArea && button.dataset.mapAreaButton === activeArea);
            button.setAttribute('aria-pressed', String(selected));
        });

        if (mapClear) mapClear.hidden = !activeArea;
    };

    const syncUrl = () => {
        const url = new URL(location.href);
        const query = search.value.trim();

        if (query) url.searchParams.set('q', query);
        else url.searchParams.delete('q');

        if (area?.value) url.searchParams.set('area', area.value);
        else url.searchParams.delete('area');

        history.replaceState(null, '', url);
    };

    const update = () => {
        const query = normalizeSearchText(search.value);
        const ranked = query
            ? isSingleCharacterQuery(query)
                ? records
                      .filter((record) => record.all.includes(query))
                      .map((record) => record.card)
                : fuse.search(query).map((result) => result.item.card)
            : cards;

        const matches = ranked.filter((card) => !area?.value || card.dataset.area === area.value);

        const visible = new Set(matches);
        cards.forEach((card) => {
            card.hidden = !visible.has(card);
        });

        const grid = root.querySelector<HTMLElement>('[data-guide-grid]');
        if (grid) {
            matches.forEach((card) => grid.append(card));
            cards.filter((card) => !visible.has(card)).forEach((card) => grid.append(card));
        }

        empty.hidden = matches.length > 0;
        count.textContent = `${matches.length} ${matches.length === 1 ? 'entry' : 'entries'}${query || area?.value ? ` of ${cards.length}` : ''}`;

        if (initialized && !reducedMotion.matches) {
            matches.slice(0, 18).forEach((card, index) => {
                animate(
                    card,
                    { opacity: [0.5, 1], transform: ['translateY(5px)', 'translateY(0)'] },
                    { duration: 0.16, delay: Math.min(index * 0.01, 0.09), ease: 'ease-out' },
                );
            });
            animate(count, { opacity: [0.45, 1] }, { duration: 0.16 });
        }

        syncMap();
        syncUrl();
        initialized = true;
    };

    const chooseArea = (areaName: string) => {
        if (!area || !areaName) return;
        area.value = areaName;
        update();
    };

    search.addEventListener('input', update);
    search.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            search.value = '';
            update();
        }
    });
    area?.addEventListener('change', update);

    root.querySelectorAll<HTMLButtonElement>('[data-guide-reset]').forEach((button) => {
        button.addEventListener('click', () => {
            search.value = '';
            if (area) area.value = '';
            update();
            search.focus();
        });
    });

    window.addEventListener('popstate', () => {
        const current = new URLSearchParams(location.search);
        search.value = current.get('q') ?? '';
        if (area) area.value = current.get('area') ?? '';
        update();
    });

    mapPaths.forEach((path) => {
        const areaName = path.dataset.mapArea ?? '';
        if (!areaName) return;
        path.addEventListener('click', () => chooseArea(areaName));
    });

    mapButtons.forEach((button) => {
        button.addEventListener('click', () => chooseArea(button.dataset.mapAreaButton ?? ''));
    });

    mapClear?.addEventListener('click', () => {
        if (!area) return;
        area.value = '';
        update();
    });

    update();
})();
