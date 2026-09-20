import type { HistoricalSource } from '../schema/sources';

export const politicalContextSources: HistoricalSource[] = [
    {
        url: 'https://ndlsearch.ndl.go.jp/rnavi/humanities/kansyoku',
        title: '官職・位階を調べる',
        publisher: 'National Diet Library',
        note: 'Guide to researching historical Japanese court offices and ranks.',
    },
    {
        url: 'https://www.cambridge.org/core/books/abs/cambridge-history-of-japan/muromachi-local-government-shugo-and-kokujin/2C7AE60F634305049BE5683C5155B229',
        title: 'Muromachi local government: shugo and kokujin',
        publisher: 'Cambridge University Press',
        note: 'Background on Muromachi provincial government and warrior authority.',
    },
];
