export type TranslationStatus = 'verified' | 'interpretive' | 'needs-review';

/** English renderings of the supplied Japanese text. Keep the source's English name separately. */
export interface ItemTranslation {
    english: string;
    status: TranslationStatus;
    note?: string;
}
