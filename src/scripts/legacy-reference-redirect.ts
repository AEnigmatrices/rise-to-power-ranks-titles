const referenceStateKeys = ['view', 'q', 'class', 'type'];

const hasReferenceState = referenceStateKeys.some((key) =>
    new URLSearchParams(window.location.search).has(key),
);
const hasAppointmentHash = /^#(?:rank|title)-/.test(window.location.hash);

if (hasReferenceState || hasAppointmentHash) {
    const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
    const target = `${base}/reference/${window.location.search}${window.location.hash}`;
    window.location.replace(target);
}
