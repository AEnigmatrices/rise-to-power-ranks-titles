import { normalizeSearchText } from '../lib/search';

type Row = HTMLTableRowElement;

document.querySelectorAll<HTMLElement>('[data-items-catalogue]').forEach((root) => {
    const panels = Array.from(root.querySelectorAll<HTMLElement>('[data-collection-panel]'));
    const tabs = Array.from(root.querySelectorAll<HTMLButtonElement>('[data-collection-tab]'));
    const fixedCollection = root.dataset.fixedCollection || null;
    const search = root.querySelector<HTMLInputElement>('[data-item-search]');
    const typeFilter = root.querySelector<HTMLSelectElement>('[data-category-filter]');
    const qualityFilter = root.querySelector<HTMLSelectElement>('[data-quality-filter]');
    const originFilter = root.querySelector<HTMLSelectElement>('[data-origin-filter]');
    const resultCount = root.querySelector<HTMLElement>('[data-item-count]');
    const qualityChart = root.querySelector<HTMLElement>('[data-quality-chart]');
    const typeChart = root.querySelector<HTMLElement>('[data-type-chart]');
    const chartSummary = root.querySelector<HTMLElement>('[data-chart-summary]');
    const chartLive = root.querySelector<HTMLElement>('[data-chart-live]');
    const gradeClear = root.querySelector<HTMLButtonElement>('[data-grade-clear]');
    const clearSearch = root.querySelector<HTMLButtonElement>('[data-search-clear]');
    const resetButtons = Array.from(root.querySelectorAll<HTMLButtonElement>('[data-item-reset]'));

    if (!search || !typeFilter || !qualityFilter || !originFilter ||
        !resultCount || !qualityChart || !typeChart) return;

    const initialParams = new URLSearchParams(location.search);
    const hash = decodeURIComponent(location.hash.slice(1));
    const hashPanel = panels.find((panel) => panel.querySelector(
        '#' + CSS.escape(hash || '__no-item__'),
    ));
    let active = fixedCollection ?? hashPanel?.dataset.collectionPanel ??
        initialParams.get('collection') ?? panels[0]?.dataset.collectionPanel ?? 'arms';
    if (!panels.some((panel) => panel.dataset.collectionPanel === active)) {
        active = panels[0]?.dataset.collectionPanel ?? 'arms';
    }
    let exactQuality: number | null = null;
    const restoredGrade = Number(initialParams.get('grade'));
    if (Number.isInteger(restoredGrade) && restoredGrade > 0 && restoredGrade <= 10) {
        exactQuality = restoredGrade;
    }
    search.value = initialParams.get('q') ?? '';
    qualityFilter.value = initialParams.get('quality') ?? '';

    const panel = () => panels.find((candidate) => candidate.dataset.collectionPanel === active);
    const rows = () => Array.from(panel()?.querySelectorAll<Row>('[data-item-row]') ?? []);
    const normalizeRow = (row: Row) => normalizeSearchText([
        row.dataset.name, row.dataset.japanese, row.dataset.english,
        row.dataset.type, row.dataset.origin, row.dataset.effect,
    ].join(' '));

    const populate = (select: HTMLSelectElement, values: string[], label: string) => {
        select.replaceChildren(new Option(label, ''));
        values.forEach((value) => select.add(new Option(value, value)));
    };

    const refreshOptions = (restore = false) => {
        const currentType = restore ? initialParams.get('type') ?? '' : '';
        const currentOrigin = restore ? initialParams.get('origin') ?? '' : '';
        const currentRows = rows();
        populate(typeFilter, [...new Set(currentRows.map((row) => row.dataset.type ?? ''))]
            .filter(Boolean), 'All item types');
        populate(originFilter, [...new Set(currentRows.map((row) => row.dataset.origin ?? ''))]
            .filter(Boolean).sort((a, b) => a.localeCompare(b)), 'All origins');
        typeFilter.value = currentType;
        originFilter.value = currentOrigin;
    };

    // Render accessible chart controls: the actual ledger remains the source of truth.
    const makeChart = (
        target: HTMLElement,
        values: Array<{ label: string; count: number; selected: boolean; click: () => void }>,
        ariaPrefix: string,
    ) => {
        target.replaceChildren();
        const maximum = Math.max(1, ...values.map((value) => value.count));
        values.forEach((value) => {
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'items-chart__bar' + (value.selected ? ' is-selected' : '');
            button.setAttribute('aria-pressed', String(value.selected));
            button.setAttribute('aria-label', ariaPrefix + ' ' + value.label + ': ' + value.count + ' items');
            const label = document.createElement('span');
            label.className = 'items-chart__label';
            label.textContent = value.label;
            const track = document.createElement('span');
            track.className = 'items-chart__track';
            const fill = document.createElement('span');
            fill.className = 'items-chart__fill';
            fill.style.width = (value.count ? Math.max(3, value.count / maximum * 100) : 0) + '%';
            track.append(fill);
            const count = document.createElement('span');
            count.className = 'items-chart__count';
            count.textContent = String(value.count);
            button.append(label, track, count);
            button.addEventListener('click', value.click);
            target.append(button);
        });
    };

    const update = (sync = true) => {
        const current = panel();
        if (!current) return;
        const query = normalizeSearchText(search.value.trim());
        const selectedType = typeFilter.value;
        const selectedOrigin = originFilter.value;
        const minimum = Number(qualityFilter.value) || 0;
        const currentRows = rows();

        const candidate = currentRows.filter((row) =>
            (!query || normalizeRow(row).includes(query)) &&
            (!selectedOrigin || row.dataset.origin === selectedOrigin) &&
            Number(row.dataset.quality) >= minimum,
        );
        const matching = candidate.filter((row) =>
            (!selectedType || row.dataset.type === selectedType) &&
            (!exactQuality || Number(row.dataset.quality) === exactQuality),
        );
        const visible = new Set(matching);
        currentRows.forEach((row) => { row.hidden = !visible.has(row); });

        const groups = Array.from(current.querySelectorAll<HTMLTableSectionElement>('[data-item-section]'));
        let visibleGroups = 0;
        groups.forEach((group) => {
            const groupRows = Array.from(group.querySelectorAll<Row>('[data-item-row]'));
            const groupVisible = groupRows.filter((row) => visible.has(row)).length;
            group.hidden = groupVisible === 0;
            group.querySelector<HTMLElement>('[data-section-count]')!.textContent =
                groupVisible + (groupVisible === 1 ? ' item' : ' items');
            if (groupVisible) visibleGroups++;
            current.querySelector<HTMLAnchorElement>('[data-category-link="' +
                CSS.escape(group.dataset.category ?? '') + '"]')
                ?.classList.toggle('is-empty', groupVisible === 0);
        });

        const table = current.querySelector<HTMLTableElement>('table');
        const columns = current.querySelector<HTMLElement>('.reference-ledger__columns');
        const empty = current.querySelector<HTMLElement>('[data-item-empty]');
        if (table) table.hidden = matching.length === 0;
        if (columns) columns.hidden = matching.length === 0;
        if (empty) empty.hidden = matching.length !== 0;

        const totalGroups = groups.length;
        resultCount.textContent = matching.length === currentRows.length
            ? currentRows.length + ' items · ' + totalGroups + ' categories'
            : 'Showing ' + matching.length + ' of ' + currentRows.length +
                ' items · ' + visibleGroups + (visibleGroups === 1 ? ' category' : ' categories');

        const selectedCandidates = candidate.filter((row) =>
            !selectedType || row.dataset.type === selectedType);
        const qualityCounts = new Map<number, number>();
        selectedCandidates.forEach((row) => {
            const value = Number(row.dataset.quality);
            qualityCounts.set(value, (qualityCounts.get(value) ?? 0) + 1);
        });
        makeChart(qualityChart,
            [...new Set(currentRows.map((row) => Number(row.dataset.quality)))]
                .sort((a, b) => b - a).map((value) => ({
                    label: String(value),
                    count: qualityCounts.get(value) ?? 0,
                    selected: exactQuality === value,
                    click: () => {
                        exactQuality = exactQuality === value ? null : value;
                        update();
                    },
                })), 'Filter quality');

        const categoryCounts = new Map<string, number>();
        candidate.filter((row) =>
            !exactQuality || Number(row.dataset.quality) === exactQuality,
        ).forEach((row) => {
            const type = row.dataset.type ?? '';
            categoryCounts.set(type, (categoryCounts.get(type) ?? 0) + 1);
        });
        makeChart(typeChart,
            groups.map((group) => {
                const type = group.dataset.category ?? '';
                const label = group.querySelector<HTMLElement>('.reference-group__title > span')?.textContent ?? type;
                return {
                    label,
                    count: categoryCounts.get(type) ?? 0,
                    selected: selectedType === type,
                    click: () => {
                        typeFilter.value = selectedType === type ? '' : type;
                        update();
                    },
                };
            }), 'Filter type');

        if (gradeClear) gradeClear.hidden = exactQuality === null;
        if (clearSearch) clearSearch.hidden = !search.value;
        const filtered = Boolean(query || selectedType || selectedOrigin || minimum || exactQuality);
        resetButtons.forEach((button) => { button.disabled = !filtered; });
        if (chartSummary) {
            chartSummary.textContent = 'Quality distribution and item types for the selected collection.' +
                (filtered ? ' Charts respond to your search and filters.' : ' Select a bar to filter the ledger.');
        }
        if (chartLive) chartLive.textContent = resultCount.textContent ?? '';

        if (sync) {
            const url = new URL(location.href);
            const values: Array<[string, string]> = [
                ['q', search.value.trim()],
                ['quality', qualityFilter.value],
                ['origin', originFilter.value],
                ['type', typeFilter.value],
                ['grade', exactQuality === null ? '' : String(exactQuality)],
                ['collection', fixedCollection || active === panels[0]?.dataset.collectionPanel ? '' : active],
            ];
            values.forEach(([key, value]) => {
                if (key === 'collection' && fixedCollection) url.searchParams.delete(key);
                else if (value) url.searchParams.set(key, value);
                else url.searchParams.delete(key);
            });
            const target = document.getElementById(url.hash.slice(1));
            if (target && (target.matches('[data-item-row], [data-item-section]')) &&
                (target.hidden || target.closest('[data-collection-panel]')?.getAttribute('data-collection-panel') !== active)) {
                url.hash = '';
            }
            history.replaceState(null, '', url);
        }
    };

    const setCollection = (slug: string, initial = false) => {
        if (fixedCollection) return;
        if (!panels.some((candidate) => candidate.dataset.collectionPanel === slug)) return;
        active = slug;
        tabs.forEach((tab) => {
            const selected = tab.dataset.collectionTab === slug;
            tab.classList.toggle('is-active', selected);
            tab.setAttribute('aria-selected', String(selected));
            tab.tabIndex = selected ? 0 : -1;
        });
        panels.forEach((candidate) => {
            candidate.hidden = candidate.dataset.collectionPanel !== slug;
        });
        refreshOptions(initial);
        exactQuality = initial ? exactQuality : null;
        update(!initial);
    };

    tabs.forEach((tab) => {
        tab.addEventListener('click', () => setCollection(tab.dataset.collectionTab ?? ''));
        tab.addEventListener('keydown', (event) => {
            if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
            event.preventDefault();
            const index = tabs.indexOf(tab);
            const next = event.key === 'Home' ? 0 :
                event.key === 'End' ? tabs.length - 1 :
                (index + (event.key === 'ArrowLeft' ? -1 : 1) + tabs.length) % tabs.length;
            const target = tabs[next];
            setCollection(target.dataset.collectionTab ?? '');
            target.focus();
        });
    });

    const reset = () => {
        search.value = '';
        qualityFilter.value = '';
        typeFilter.value = '';
        originFilter.value = '';
        exactQuality = null;
        update();
        search.focus();
    };
    resetButtons.forEach((button) => button.addEventListener('click', reset));
    clearSearch?.addEventListener('click', () => {
        search.value = '';
        update();
        search.focus();
    });
    search.addEventListener('input', () => update());
    qualityFilter.addEventListener('change', () => update());
    originFilter.addEventListener('change', () => update());
    typeFilter.addEventListener('change', () => update());
    gradeClear?.addEventListener('click', () => {
        exactQuality = null;
        update();
    });
    document.addEventListener('keydown', (event) => {
        const target = event.target;
        const isEditing = target instanceof HTMLInputElement ||
            target instanceof HTMLTextAreaElement ||
            target instanceof HTMLSelectElement ||
            (target instanceof HTMLElement && target.isContentEditable);
        if (event.key === '/' && !isEditing && !event.altKey && !event.metaKey && !event.ctrlKey) {
            event.preventDefault();
            search.focus();
        }
        if (event.key === 'Escape' && document.activeElement === search) {
            search.value = '';
            update();
        }
    });

    const focusHashTarget = () => {
        let id = '';
        try { id = decodeURIComponent(location.hash.slice(1)); }
        catch { return; }
        if (!id) return;
        const owningPanel = panels.find((candidate) =>
            candidate.querySelector('#' + CSS.escape(id)));
        if (!owningPanel) return;
        if (!fixedCollection && owningPanel.dataset.collectionPanel !== active) {
            setCollection(owningPanel.dataset.collectionPanel ?? 'arms');
        }
        const target = document.getElementById(id);
        if (target?.matches('[data-item-row], [data-item-section]') && target.hidden) reset();
        requestAnimationFrame(() => target?.scrollIntoView({ block: 'center' }));
    };

    // The legacy query parameters and deep links still work on collection routes.
    if (fixedCollection) {
        refreshOptions(true);
        panels.forEach((candidate) => { candidate.hidden = false; });
    } else {
        setCollection(active, true);
    }
    update(false);
    focusHashTarget();
    update();
    window.addEventListener('hashchange', focusHashTarget);
});
