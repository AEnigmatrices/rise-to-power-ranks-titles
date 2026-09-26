const referenceStateKeys = ['view', 'q', 'class', 'type', 'grade'];
const params = new URLSearchParams(window.location.search);
const hasReferenceState = referenceStateKeys.some((key) => params.has(key));
const hasAppointmentHash = /^#(?:rank|title)-/.test(window.location.hash);

if (hasReferenceState || hasAppointmentHash) {
    const base = import.meta.env.BASE_URL.replace(/\\/+$/, '');
    const kind = window.location.hash.startsWith('#title-') || params.get('view') === 'title'
        ? 'titles'
        : 'ranks';
    params.delete('view');
    const query = params.toString();
    window.location.replace(base + '/' + kind + '/' + (query ? '?' + query : '') + window.location.hash);
}
