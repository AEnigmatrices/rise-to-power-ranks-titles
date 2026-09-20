import Fuse from 'fuse.js';
import { animate } from 'motion/mini';
import { autoUpdate, computePosition, flip, offset, shift, size } from '@floating-ui/dom';
import type { ReferenceKind } from '../lib/appointments';
import {
    isSingleCharacterQuery,
    normalizeSearchText,
    sortClasses,
    sourceOrder,
} from '../lib/search';

type SearchRecord = {
    row: HTMLTableRowElement;
    name: string;
    japanese: string;
    pronunciation: string;
    translation: string;
    className: string;
    category: string;
    all: string;
};

(() => {
    const root = document.querySelector<HTMLElement>('[data-reference-explorer]');

    if (!root) return;

    const tabs = Array.from(root.querySelectorAll<HTMLButtonElement>('[data-view]'));
    const panels = Array.from(root.querySelectorAll<HTMLElement>('[data-panel]'));
    const searchInput = root.querySelector<HTMLInputElement>('[data-search]');
    const classFilter = root.querySelector<HTMLSelectElement>('[data-class-filter]');
    const categoryFilter = root.querySelector<HTMLSelectElement>('[data-category-filter]');
    const resetButtons = Array.from(root.querySelectorAll<HTMLButtonElement>('[data-reset]'));
    const searchClear = root.querySelector<HTMLButtonElement>('[data-search-clear]');
    const searchShortcut = root.querySelector<HTMLElement>('[data-search-shortcut]');
    const resultCount = root.querySelector<HTMLElement>('[data-result-count]');
    const triviaAnchors = Array.from(root.querySelectorAll<HTMLElement>('[data-trivia-anchor]'));
    const hoverCapable = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const floatingCleanups = new WeakMap<HTMLElement, () => void>();
    const searchers = new Map<ReferenceKind, Fuse<SearchRecord>>();

    if (!searchInput || !classFilter || !categoryFilter || !resetButtons.length || !resultCount)
        return;

    let initialParams = new URLSearchParams(location.search);
    const hashKind: ReferenceKind | null = location.hash.startsWith('#title-')
        ? 'title'
        : location.hash.startsWith('#rank-')
          ? 'rank'
          : null;
    let activeKind: ReferenceKind =
        hashKind ??
        (initialParams.get('view') === 'title' || location.hash === '#titles' ? 'title' : 'rank');
    let restoreInitialFilters = true;
    let restoringUrlState = true;

    searchInput.value = initialParams.get('q') ?? '';

    if (searchShortcut) {
        searchShortcut.textContent = '/';
    }

    const closeTrivia = (anchor: HTMLElement) => {
        const cleanup = floatingCleanups.get(anchor);
        if (cleanup) {
            cleanup();
            floatingCleanups.delete(anchor);
        }

        anchor.classList.remove('is-open');
        anchor.removeAttribute('data-pinned');
        const trigger = anchor.querySelector<HTMLButtonElement>('[data-trivia-trigger]');
        trigger?.setAttribute('aria-expanded', 'false');
    };

    const closeAllTrivia = (except: HTMLElement | null = null) => {
        triviaAnchors.forEach((anchor) => {
            if (anchor !== except) closeTrivia(anchor);
        });
    };

    const startTriviaPositioning = (anchor: HTMLElement) => {
        const trigger = anchor.querySelector<HTMLElement>('[data-trivia-trigger]');
        const popover = anchor.querySelector<HTMLElement>('[data-trivia-popover]');
        if (!trigger || !popover) return;

        floatingCleanups.get(anchor)?.();

        const update = async () => {
            const { x, y, placement } = await computePosition(trigger, popover, {
                placement: 'bottom',
                strategy: 'fixed',
                middleware: [
                    offset(10),
                    flip({ padding: 12 }),
                    shift({ padding: 12 }),
                    size({
                        padding: 12,
                        apply({ availableWidth, availableHeight, elements }) {
                            Object.assign(elements.floating.style, {
                                maxWidth: `${Math.max(0, Math.min(380, availableWidth))}px`,
                                maxHeight: `${Math.max(0, Math.min(520, availableHeight))}px`,
                            });
                        },
                    }),
                ],
            });

            Object.assign(popover.style, {
                left: `${Math.round(x)}px`,
                top: `${Math.round(y)}px`,
            });
            popover.dataset.placement = placement.startsWith('top') ? 'above' : 'below';
        };

        const cleanup = autoUpdate(trigger, popover, update);
        floatingCleanups.set(anchor, cleanup);
    };

    const openTrivia = (anchor: HTMLElement, pinned = false) => {
        closeAllTrivia(anchor);
        anchor.classList.add('is-open');
        if (pinned) anchor.dataset.pinned = 'true';

        const trigger = anchor.querySelector<HTMLButtonElement>('[data-trivia-trigger]');
        const popover = anchor.querySelector<HTMLElement>('[data-trivia-popover]');
        trigger?.setAttribute('aria-expanded', 'true');
        startTriviaPositioning(anchor);

        if (popover && !reducedMotion.matches) {
            animate(
                popover,
                { opacity: [0, 1], transform: ['translateY(-4px) scale(0.985)', 'translateY(0) scale(1)'] },
                { duration: 0.16, ease: 'easeOut' },
            );
        }
    };

    triviaAnchors.forEach((anchor) => {
        const trigger = anchor.querySelector<HTMLButtonElement>('[data-trivia-trigger]');
        if (!trigger) return;
        let closeTimer: number | undefined;

        anchor.addEventListener('pointerenter', () => {
            window.clearTimeout(closeTimer);
            if (!hoverCapable.matches || anchor.dataset.pinned === 'true') return;
            openTrivia(anchor);
        });

        anchor.addEventListener('pointerleave', () => {
            if (!hoverCapable.matches || anchor.dataset.pinned === 'true') return;
            closeTimer = window.setTimeout(() => {
                if (anchor.dataset.pinned !== 'true' && !anchor.contains(document.activeElement))
                    closeTrivia(anchor);
            }, 180);
        });

        anchor.addEventListener('focusin', () => {
            if (anchor.dataset.pinned !== 'true') openTrivia(anchor);
        });

        anchor.addEventListener('focusout', () => {
            window.setTimeout(() => {
                if (
                    !anchor.contains(document.activeElement) &&
                    // Touch WebKit blurs buttons to the body before dispatching a tap.
                    (anchor.dataset.pinned !== 'true' ||
                        document.activeElement !== document.body) &&
                    !(hoverCapable.matches && anchor.matches(':hover'))
                ) {
                    closeTrivia(anchor);
                }
            }, 0);
        });

        trigger.addEventListener('click', (event) => {
            event.stopPropagation();

            if (anchor.dataset.pinned === 'true') {
                closeTrivia(anchor);
            } else {
                openTrivia(anchor, true);
            }
        });

        anchor.querySelector('[data-trivia-close]')?.addEventListener('click', () => {
            trigger.focus();
            closeTrivia(anchor);
        });
    });

    const getActivePanel = (): HTMLElement | undefined =>
        panels.find((panel) => panel.dataset.panel === activeKind);

    const getActiveRows = (): HTMLTableRowElement[] => {
        const panel = getActivePanel();
        return panel
            ? Array.from(panel.querySelectorAll<HTMLTableRowElement>('[data-reference-row]'))
            : [];
    };

    const getSearcher = (): Fuse<SearchRecord> => {
        const existing = searchers.get(activeKind);
        if (existing) return existing;

        const records: SearchRecord[] = getActiveRows().map((row) => ({
            row,
            name: normalizeSearchText(row.dataset.searchName ?? ''),
            japanese: normalizeSearchText(row.dataset.searchJapanese ?? ''),
            pronunciation: normalizeSearchText(row.dataset.searchPronunciation ?? ''),
            translation: normalizeSearchText(row.dataset.searchTranslation ?? ''),
            className: normalizeSearchText(row.dataset.class ?? ''),
            category: normalizeSearchText(row.dataset.category ?? ''),
            all: normalizeSearchText(row.dataset.searchText ?? ''),
        }));

        const searcher = new Fuse(records, {
            includeScore: true,
            ignoreLocation: true,
            threshold: 0.34,
            minMatchCharLength: 1,
            useTokenSearch: true,
            keys: [
                { name: 'name', weight: 0.26 },
                { name: 'japanese', weight: 0.24 },
                { name: 'pronunciation', weight: 0.18 },
                { name: 'translation', weight: 0.14 },
                { name: 'className', weight: 0.06 },
                { name: 'category', weight: 0.06 },
                { name: 'all', weight: 0.06 },
            ],
        });

        searchers.set(activeKind, searcher);
        return searcher;
    };

    const refillSelect = (select: HTMLSelectElement, values: string[], firstLabel: string) => {
        select.replaceChildren();

        const firstOption = document.createElement('option');
        firstOption.value = '';
        firstOption.textContent = firstLabel;
        select.append(firstOption);

        values.forEach((value) => {
            const option = document.createElement('option');
            option.value = value;
            option.textContent = value;
            select.append(option);
        });
    };

    const refreshFilterOptions = () => {
        const rows = getActiveRows();
        const classes = Array.from(new Set(rows.map((row) => row.dataset.class ?? '')))
            .filter(Boolean)
            .sort(sortClasses);
        const categories = Array.from(new Set(rows.map((row) => row.dataset.category ?? '')))
            .filter(Boolean)
            .sort((a, b) => a.localeCompare(b));

        refillSelect(classFilter, classes, 'All classes');
        refillSelect(
            categoryFilter,
            categories,
            activeKind === 'rank' ? 'All rank types' : 'All title types',
        );
    };

    const rankedRows = (rows: HTMLTableRowElement[], query: string): HTMLTableRowElement[] => {
        if (!query) {
            return [...rows].sort((a, b) => sourceOrder(a) - sourceOrder(b));
        }

        // One-character searches are especially useful for kanji; keep those exact and predictable.
        if (isSingleCharacterQuery(query)) {
            return rows.filter((row) =>
                normalizeSearchText(row.dataset.searchText ?? '').includes(query),
            );
        }

        return getSearcher()
            .search(query)
            .map((result) => result.item.row);
    };

    const syncUrlState = () => {
        const url = new URL(location.href);
        const query = searchInput.value.trim();

        if (activeKind === 'title') url.searchParams.set('view', 'title');
        else url.searchParams.delete('view');

        if (query) url.searchParams.set('q', query);
        else url.searchParams.delete('q');

        if (classFilter.value) url.searchParams.set('class', classFilter.value);
        else url.searchParams.delete('class');

        if (categoryFilter.value) url.searchParams.set('type', categoryFilter.value);
        else url.searchParams.delete('type');

        // A filtered-out appointment must not override the selected system on reload.
        const target = document.getElementById(url.hash.slice(1));
        if (
            !restoringUrlState &&
            target?.matches('[data-reference-row]') &&
            (target.hidden || target.dataset.kind !== activeKind)
        ) {
            url.hash = '';
        }

        history.replaceState(null, '', url);
    };

    const updateResults = () => {
        closeAllTrivia();

        const query = normalizeSearchText(searchInput.value);
        const selectedClass = classFilter.value;
        const selectedCategory = categoryFilter.value;
        const rows = getActiveRows();
        const ranked = rankedRows(rows, query);
        const matches = ranked.filter(
            (row) =>
                (!selectedClass || row.dataset.class === selectedClass) &&
                (!selectedCategory || row.dataset.category === selectedCategory),
        );

        const visible = new Set(matches);
        rows.forEach((row) => {
            row.hidden = !visible.has(row);
        });

        const panel = getActivePanel();
        const groups = panel
            ? Array.from(panel.querySelectorAll<HTMLTableSectionElement>('[data-reference-group]'))
            : [];

        groups.forEach((group) => {
            const groupRows = Array.from(
                group.querySelectorAll<HTMLTableRowElement>('[data-reference-row]'),
            );
            const groupMatches = matches.filter((row) => groupRows.includes(row));
            const hiddenRows = groupRows
                .filter((row) => !visible.has(row))
                .sort((a, b) => sourceOrder(a) - sourceOrder(b));

            // Keep the class hierarchy intact while still ranking matches by relevance.
            groupMatches.forEach((row) => group.append(row));
            hiddenRows.forEach((row) => group.append(row));
            group.hidden = groupMatches.length === 0;
        });

        const empty = panel?.querySelector<HTMLElement>('[data-empty]');
        const table = panel?.querySelector<HTMLTableElement>('table');
        if (empty) empty.hidden = matches.length !== 0;
        if (table) table.hidden = matches.length === 0;

        const noun = activeKind === 'rank' ? 'ranks' : 'titles';
        const totalEntries = rows.length;
        const totalRecords = rows.reduce((sum, row) => sum + Number(row.dataset.count ?? 1), 0);
        const visibleRecords = matches.reduce(
            (sum, row) => sum + Number(row.dataset.count ?? 1),
            0,
        );
        const filtered = matches.length !== totalEntries || visibleRecords !== totalRecords;
        const relevanceNote = query && matches.length > 1 ? ' · grouped by class' : '';

        resultCount.textContent = filtered
            ? `Showing ${matches.length} of ${totalEntries} unique ${noun} · ${visibleRecords} occurrences${relevanceNote}`
            : `${totalEntries} unique ${noun} · ${totalRecords} occurrences`;

        const hasActiveFilters = Boolean(
            searchInput.value.trim() || classFilter.value || categoryFilter.value,
        );
        resetButtons.forEach((button) => {
            button.disabled = !hasActiveFilters;
        });
        if (searchClear) searchClear.hidden = !searchInput.value;

        if (!restoringUrlState && !reducedMotion.matches) {
            matches.slice(0, 18).forEach((row, index) => {
                animate(
                    row,
                    { opacity: [0.55, 1] },
                    { duration: 0.14, delay: Math.min(index * 0.008, 0.08), ease: 'easeOut' },
                );
            });
            animate(resultCount, { opacity: [0.45, 1] }, { duration: 0.16 });
        }

        syncUrlState();
    };

    const setKind = (kind: string | null, updateHash = true) => {
        closeAllTrivia();
        activeKind = kind === 'title' ? 'title' : 'rank';

        tabs.forEach((tab) => {
            const selected = tab.dataset.view === activeKind;
            tab.classList.toggle('is-active', selected);
            tab.setAttribute('aria-selected', String(selected));
            tab.tabIndex = selected ? 0 : -1;
        });

        panels.forEach((panel) => {
            panel.hidden = panel.dataset.panel !== activeKind;
        });

        const activePanel = getActivePanel();
        if (activePanel && !restoringUrlState && !reducedMotion.matches) {
            animate(
                activePanel,
                { opacity: [0.65, 1], transform: ['translateY(3px)', 'translateY(0)'] },
                { duration: 0.16, ease: 'easeOut' },
            );
        }

        searchInput.placeholder = 'Name, Japanese office, or meaning…';

        classFilter.value = '';
        categoryFilter.value = '';
        refreshFilterOptions();

        if (restoreInitialFilters) {
            classFilter.value = initialParams.get('class') ?? '';
            categoryFilter.value = initialParams.get('type') ?? '';
            restoreInitialFilters = false;
        }

        updateResults();

        if (updateHash && (location.hash === '#ranks' || location.hash === '#titles')) {
            const url = new URL(location.href);
            url.hash = '#reference';
            history.replaceState(null, '', url);
        }
    };

    tabs.forEach((tab) => {
        tab.addEventListener('click', () => setKind(tab.dataset.view ?? null));

        tab.addEventListener('keydown', (event) => {
            if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;

            event.preventDefault();
            const nextKind: ReferenceKind =
                event.key === 'Home'
                    ? 'rank'
                    : event.key === 'End'
                      ? 'title'
                      : activeKind === 'rank'
                        ? 'title'
                        : 'rank';
            setKind(nextKind);
            tabs.find((candidate) => candidate.dataset.view === nextKind)?.focus();
        });
    });

    searchInput.addEventListener('input', updateResults);
    searchClear?.addEventListener('click', () => {
        searchInput.value = '';
        updateResults();
        searchInput.focus();
    });
    classFilter.addEventListener('change', updateResults);
    categoryFilter.addEventListener('change', updateResults);

    root.querySelectorAll<HTMLDetailsElement>('.holder-details').forEach((details) => {
        details.addEventListener('toggle', () => {
            if (!details.open || reducedMotion.matches) return;
            const content = details.querySelector<HTMLElement>('.holder-details__list');
            if (!content) return;
            animate(
                content,
                { opacity: [0, 1], transform: ['translateY(-3px)', 'translateY(0)'] },
                { duration: 0.16, ease: 'easeOut' },
            );
        });
    });

    resetButtons.forEach((button) =>
        button.addEventListener('click', () => {
            searchInput.value = '';
            classFilter.value = '';
            categoryFilter.value = '';
            updateResults();
            searchInput.focus();
        }),
    );

    document.addEventListener('click', (event) => {
        const target = event.target;
        if (!(target instanceof Node)) return;
        if (
            !root.contains(target) ||
            !(target instanceof Element) ||
            !target.closest('[data-trivia-anchor]')
        ) {
            closeAllTrivia();
        }
    });

    document.addEventListener('keydown', (event) => {
        const target = event.target;
        const isEditing =
            target instanceof HTMLInputElement ||
            target instanceof HTMLTextAreaElement ||
            target instanceof HTMLSelectElement ||
            (target instanceof HTMLElement && target.isContentEditable);

        if (event.key === 'Escape') {
            const openAnchor = triviaAnchors.find(
                (anchor) =>
                    anchor.classList.contains('is-open') && anchor.contains(document.activeElement),
            );
            openAnchor?.querySelector<HTMLButtonElement>('[data-trivia-trigger]')?.focus();
            closeAllTrivia();

            if (document.activeElement === searchInput) {
                searchInput.value = '';
                updateResults();
            }
        }

        if (event.key === '/' && !isEditing && !event.ctrlKey && !event.metaKey && !event.altKey) {
            event.preventDefault();
            searchInput.focus();
        }
    });

    const focusHashEntry = () => {
        let rawId: string;
        try {
            rawId = decodeURIComponent(location.hash.slice(1));
        } catch {
            return;
        }
        if (!rawId.startsWith('rank-') && !rawId.startsWith('title-')) return;

        const row = root.querySelector<HTMLTableRowElement>(`#${CSS.escape(rawId)}`);
        if (!row) return;

        const rowKind: ReferenceKind = row.dataset.kind === 'title' ? 'title' : 'rank';
        if (rowKind !== activeKind) setKind(rowKind, false);

        if (row.hidden) {
            searchInput.value = '';
            classFilter.value = '';
            categoryFilter.value = '';
            updateResults();
        }

        requestAnimationFrame(() => row.scrollIntoView({ block: 'center' }));
    };

    window.addEventListener('hashchange', focusHashEntry);
    window.addEventListener('popstate', () => {
        restoringUrlState = true;
        initialParams = new URLSearchParams(location.search);
        searchInput.value = initialParams.get('q') ?? '';
        restoreInitialFilters = true;
        setKind(
            location.hash.startsWith('#title-')
                ? 'title'
                : location.hash.startsWith('#rank-')
                  ? 'rank'
                  : initialParams.get('view'),
            false,
        );
        focusHashEntry();
        restoringUrlState = false;
    });

    setKind(activeKind, false);
    focusHashEntry();
    restoringUrlState = false;
})();
