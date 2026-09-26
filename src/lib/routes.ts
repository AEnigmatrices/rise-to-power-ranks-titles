const normalizedBase = import.meta.env.BASE_URL.replace(/\/+$/, '');

export const sitePath = (path = '') => {
    const suffix = path.replace(/^\/+/, '');
    return suffix ? `${normalizedBase}/${suffix}` : `${normalizedBase}/`;
};

export const appointmentPath = (id: string) => `${sitePath(id.startsWith('title-') ? 'titles/' : 'ranks/')}#${id}`;
