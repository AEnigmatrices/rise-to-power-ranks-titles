import Fuse from 'fuse.js';
import { animate, stagger } from 'motion';
import { isSingleCharacterQuery, normalizeSearchText, sourceOrder } from '../lib/search';

type TriviaTopic = 'highlights' | 'regions' | 'offices' | 'all';

type TriviaSearchRecord = {
    card: HTMLElement;
    title: string;
    area: string;
    topic: string;
    all: string;
};

(() => {
    const root = document.querySelector<HTMLElement>('[data-trivia-guide]');
    if (!root) return;

    const controls = root.querySelector<HTMLElement>('[data-trivia-controls]');
    const search = root.querySelector<HTMLInputElement>('[data-trivia-search]');
    const area = root.querySelector<HTMLSelectElement>('[data-trivia-area]');
    const areaField = root.querySelector<HTMLElement>('[data-trivia-area-field]');
    const context = root.querySelector<HTMLElement>('[data-region-context]');
    const count = root.querySelector<HTMLElement>('[data-trivia-count]');
    const empty = root.querySelector<HTMLElement>('[data-trivia-empty]');
    const more = root.querySelector<HTMLButtonElement>('[data-trivia-more]');
    const moreLabel = more?.querySelector<HTMLElement>('span');
    const grid = root.querySelector<HTMLElement>('#trivia-cards');
    const regionMap = root.querySelector<HTMLElement>('[data-region-map]');
    const mapPaths = Array.from(root.querySelectorAll<SVGPathElement>('[data-map-area]'));
    const mapButtons = Array.from(root.querySelectorAll<HTMLButtonElement>('[data-map-area-button]'));
    const mapClear = root.querySelector<HTMLButtonElement>('[data-map-area-clear]');
    const cards = Array.from(root.querySelectorAll<HTMLElement>('[data-trivia-card]'));
    const topics = Array.from(root.querySelectorAll<HTMLButtonElement>('[data-trivia-topic]'));
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const pageSize = 6;
    let limit = pageSize;

    if (!controls || !search || !area || !areaField || !context || !count || !empty || !more || !moreLabel || !grid) {
        return;
    }

    const initialParams = new URLSearchParams(location.search);
    const requestedTopic = initialParams.get('topic');
    let topic: TriviaTopic =
        requestedTopic === 'regions' || requestedTopic === 'offices' || requestedTopic === 'all'
            ? requestedTopic
            : location.hash === '#regions'
                ? 'regions'
                : 'highlights';

    search.value = initialParams.get('tq') ?? '';
    if (topic === 'regions') area.value = initialParams.get('area') ?? '';

    const records: TriviaSearchRecord[] = cards.map((card) => ({
        card,
        title: normalizeSearchText(card.dataset.searchTitle ?? ''),
        area: normalizeSearchText(card.dataset.area ?? ''),
        topic: normalizeSearchText(card.dataset.topic ?? ''),
        all: normalizeSearchText(card.dataset.searchText ?? ''),
    }));

    const fuse = new Fuse(records, {
        includeScore: true,
        ignoreLocation: true,
        threshold: 0.35,
        minMatchCharLength: 1,
        useTokenSearch: true,
        keys: [
            { name: 'title', weight: 0.42 },
            { name: 'area', weight: 0.16 },
            { name: 'topic', weight: 0.08 },
            { name: 'all', weight: 0.34 },
        ],
    });

    const rankedCards = (query: string): HTMLElement[] => {
        if (!query) {
            return [...cards].sort((a, b) => sourceOrder(a) - sourceOrder(b));
        }

        // Keep single-kanji searches deterministic instead of fuzzing them.
        if (isSingleCharacterQuery(query)) {
            return cards.filter((card) => normalizeSearchText(card.dataset.searchText ?? '').includes(query));
        }

        return fuse.search(query).map((result) => result.item.card);
    };

    const animateCards = (visibleCards: HTMLElement[]) => {
        if (reducedMotion.matches || visibleCards.length === 0) return;
        animate(visibleCards.slice(0, pageSize), {
            opacity: [0.52, 1],
        }, {
            duration: 0.2,
            delay: stagger(0.018),
            ease: 'easeOut',
        });
    };

    const setMapHover = (areaName: string, active: boolean) => {
        if (!areaName) return;
        mapPaths.forEach((path) => {
            if (path.dataset.mapArea !== areaName) return;
            path.classList.toggle('is-hovered', active);
        });
        mapButtons.forEach((button) => {
            if (button.dataset.mapAreaButton !== areaName) return;
            button.classList.toggle('is-hovered', active);
        });
    };

    const syncMap = () => {
        const activeArea = topic === 'regions' ? area.value : '';
        if (regionMap) regionMap.hidden = topic !== 'regions';

        mapPaths.forEach((path) => {
            const pathArea = path.dataset.mapArea ?? '';
            path.classList.toggle('is-selected', Boolean(activeArea && pathArea === activeArea));
            path.classList.toggle('is-dimmed', Boolean(activeArea && pathArea && pathArea !== activeArea));
        });

        mapButtons.forEach((button) => {
            const selected = Boolean(activeArea && button.dataset.mapAreaButton === activeArea);
            button.setAttribute('aria-pressed', String(selected));
        });

        if (mapClear) mapClear.hidden = !activeArea;
    };

    const syncUrlState = () => {
        const url = new URL(location.href);
        const query = search.value.trim();

        if (topic === 'highlights') url.searchParams.delete('topic');
        else url.searchParams.set('topic', topic);

        if (query) url.searchParams.set('tq', query);
        else url.searchParams.delete('tq');

        if (topic === 'regions' && area.value) url.searchParams.set('area', area.value);
        else url.searchParams.delete('area');

        history.replaceState(null, '', url);
    };

    const update = () => {
        const query = normalizeSearchText(search.value);
        const ranked = rankedCards(query);
        const matches = ranked.filter((card) =>
            (topic === 'all' || card.dataset.topic === topic) &&
            (topic !== 'regions' || !area.value || card.dataset.area === area.value));
        const visibleCards = matches.slice(0, limit);
        const visible = new Set(visibleCards);
        const matched = new Set(matches);

        cards.forEach((card) => { card.hidden = !visible.has(card); });

        // Keep keyboard and reading order aligned with Fuse relevance.
        matches.forEach((card) => grid.append(card));
        cards
            .filter((card) => !matched.has(card))
            .sort((a, b) => sourceOrder(a) - sourceOrder(b))
            .forEach((card) => grid.append(card));

        topics.forEach((button) => {
            button.setAttribute('aria-pressed', String(button.dataset.triviaTopic === topic));
        });

        areaField.hidden = topic !== 'regions';
        context.hidden = topic !== 'regions' && topic !== 'all';
        empty.hidden = matches.length > 0;
        more.hidden = matches.length <= limit;
        moreLabel.textContent = `Show ${Math.min(pageSize, Math.max(0, matches.length - limit))} more`;
        const noun = topic === 'regions' ? 'place' : 'note';
        const relevanceNote = query && matches.length > 1 ? ' · best matches first' : '';
        count.textContent = `Showing ${visibleCards.length} of ${matches.length} ${noun}${matches.length === 1 ? '' : 's'}${relevanceNote}`;

        syncMap();
        syncUrlState();
        animateCards(visibleCards);
    };

    const filter = () => {
        limit = pageSize;
        update();
    };

    const chooseArea = (areaName: string) => {
        topic = 'regions';
        area.value = areaName;
        search.value = '';
        const url = new URL(location.href);
        url.hash = '#regions';
        history.replaceState(null, '', url);
        filter();
    };

    topics.forEach((button) => button.addEventListener('click', () => {
        const nextTopic = button.dataset.triviaTopic;
        topic = nextTopic === 'regions' || nextTopic === 'offices' || nextTopic === 'all'
            ? nextTopic
            : 'highlights';
        if (topic !== 'regions') area.value = '';
        const url = new URL(location.href);
        url.hash = topic === 'regions' ? '#regions' : '#trivia';
        history.replaceState(null, '', url);
        filter();
    }));

    search.addEventListener('input', filter);
    area.addEventListener('change', filter);

    root.querySelector<HTMLButtonElement>('[data-trivia-reset]')?.addEventListener('click', () => {
        search.value = '';
        area.value = '';
        filter();
        search.focus();
    });

    more.addEventListener('click', () => {
        const previouslyVisible = new Set(cards.filter((card) => !card.hidden));
        limit += pageSize;
        update();

        // Keep keyboard users at the start of the newly revealed notes.
        const firstNew = cards.find((card) => !card.hidden && !previouslyVisible.has(card));
        if (firstNew) {
            firstNew.tabIndex = -1;
            firstNew.focus({ preventScroll: true });
        }
    });

    mapPaths.forEach((path) => {
        const areaName = path.dataset.mapArea ?? '';
        if (!areaName) return;
        path.addEventListener('pointerenter', () => setMapHover(areaName, true));
        path.addEventListener('pointerleave', () => setMapHover(areaName, false));
        path.addEventListener('click', () => chooseArea(areaName));
    });

    mapButtons.forEach((button) => {
        const areaName = button.dataset.mapAreaButton ?? '';
        button.addEventListener('pointerenter', () => setMapHover(areaName, true));
        button.addEventListener('pointerleave', () => setMapHover(areaName, false));
        button.addEventListener('focus', () => setMapHover(areaName, true));
        button.addEventListener('blur', () => setMapHover(areaName, false));
        button.addEventListener('click', () => chooseArea(areaName));
    });

    mapClear?.addEventListener('click', () => {
        area.value = '';
        filter();
    });

    const followHash = () => {
        if (location.hash !== '#regions' && location.hash !== '#trivia') return;
        topic = location.hash === '#regions' ? 'regions' : 'highlights';
        search.value = '';
        area.value = '';
        filter();
    };

    window.addEventListener('hashchange', followHash);
    controls.hidden = false;
    update();
})();
