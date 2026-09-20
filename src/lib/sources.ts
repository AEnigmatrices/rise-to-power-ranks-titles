import type { HistoricalSource } from '../data/schema/sources';

const publisherByHost: Record<string, string> = {
    'ndlsearch.ndl.go.jp': 'National Diet Library',
    'crd.ndl.go.jp': 'National Diet Library Collaborative Reference Database',
    'kotobank.jp': 'Kotobank',
    'www.britannica.com': 'Encyclopaedia Britannica',
    'www.cambridge.org': 'Cambridge University Press',
    'www.pref.kagoshima.jp': 'Kagoshima Prefecture',
    'www.city.akita.lg.jp': 'Akita City',
    'www.city.dazaifu.lg.jp': 'Dazaifu City',
    'www.city.nagahama.lg.jp': 'Nagahama City',
    'museum.umic.jp': 'Ueda City Multimedia Information Center',
    'dcollections.lib.keio.ac.jp': 'Keio University Digital Collections',
    'lib-www.smt.city.sendai.jp': 'Sendai City Library',
    'www2.ntj.jac.go.jp': 'Japan Arts Council',
    'en.wikipedia.org': 'Wikipedia',
};

export const getSourcePublisher = (source: HistoricalSource): string => {
    if (source.publisher) return source.publisher;

    try {
        const hostname = new URL(source.url).hostname;
        return publisherByHost[hostname] ?? hostname.replace(/^www\./, '');
    } catch {
        return source.url;
    }
};

export const getSourceLabel = (source: HistoricalSource): string =>
    source.title ?? getSourcePublisher(source);
