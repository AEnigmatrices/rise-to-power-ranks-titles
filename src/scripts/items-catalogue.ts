import { normalizeSearchText } from '../lib/search';

document.querySelectorAll<HTMLElement>('[data-items-catalogue]').forEach((root) => {
    const search = root.querySelector<HTMLInputElement>('[data-item-search]');
    const quality = root.querySelector<HTMLSelectElement>('[data-quality-filter]');
    const origin = root.querySelector<HTMLSelectElement>('[data-origin-filter]');
    const count = root.querySelector<HTMLElement>('[data-item-count]');
    const empty = root.querySelector<HTMLElement>('[data-item-empty]');
    const sections = Array.from(root.querySelectorAll<HTMLElement>('[data-item-section]'));
    const categoryLinks = Array.from(root.querySelectorAll<HTMLAnchorElement>('[data-category-link]'));

    if (!search || !quality || !origin || !count || !empty) return;

    const params = new URLSearchParams(location.search);
    search.value = params.get('q') ?? '';
    quality.value = params.get('quality') ?? '';
    origin.value = params.get('origin') ?? '';

    const update = () => {
        const query = normalizeSearchText(search.value.trim());
        const minimum = Number(quality.value) || 0;
        const selectedOrigin = origin.value;
        let total = 0;
        let visibleCategories = 0;

        sections.forEach((section) => {
            let visible = 0;
            section.querySelectorAll<HTMLTableRowElement>('[data-item-row]').forEach((row) => {
                const text = normalizeSearchText([
                    row.dataset.name,
                    row.dataset.japanese,
                    row.dataset.english,
                    row.dataset.type,
                    row.dataset.effect,
                    row.dataset.origin,
                ].join(' '));
                const show = (!query || text.includes(query)) &&
                    Number(row.dataset.quality) >= minimum &&
                    (!selectedOrigin || row.dataset.origin === selectedOrigin);
                row.hidden = !show;
                if (show) visible++;
            });
            section.hidden = visible === 0;
            section.querySelector<HTMLElement>('[data-section-count]')!.textContent =
                `${visible} ${visible === 1 ? 'item' : 'items'}`;
            categoryLinks.find((link) => link.dataset.categoryLink === section.id)
                ?.classList.toggle('is-empty', visible === 0);
            total += visible;
            if (visible) visibleCategories++;
        });

        count.textContent = `${total} ${total === 1 ? 'item' : 'items'} across ${visibleCategories} ${visibleCategories === 1 ? 'category' : 'categories'}`;
        empty.hidden = total !== 0;

        const url = new URL(location.href);
        for (const [key, value] of [['q', search.value.trim()], ['quality', quality.value], ['origin', origin.value]]) {
            if (value) url.searchParams.set(key, value);
            else url.searchParams.delete(key);
        }
        // Do not leave a deep link pointing to an item filtered out of view.
        const target = document.getElementById(url.hash.slice(1));
        if (target?.matches('[data-item-row]') && target.hidden) url.hash = '';
        history.replaceState(null, '', url);
    };

    root.querySelector<HTMLButtonElement>('[data-item-reset]')?.addEventListener('click', () => {
        search.value = '';
        quality.value = '';
        origin.value = '';
        update();
        search.focus();
    });

    search.addEventListener('input', update);
    quality.addEventListener('change', update);
    origin.addEventListener('change', update);

    // Deep links take precedence over saved filters when the requested item would be hidden.
    const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (target?.matches('[data-item-row]') && (search.value || quality.value || origin.value)) {
        const item = target as HTMLTableRowElement;
        const query = normalizeSearchText(search.value.trim());
        const text = normalizeSearchText([item.dataset.name, item.dataset.japanese, item.dataset.english, item.dataset.type, item.dataset.effect, item.dataset.origin].join(' '));
        if ((query && !text.includes(query)) || (quality.value && Number(item.dataset.quality) < Number(quality.value)) || (origin.value && item.dataset.origin !== origin.value)) {
            search.value = '';
            quality.value = '';
            origin.value = '';
        }
    }
    update();
});
