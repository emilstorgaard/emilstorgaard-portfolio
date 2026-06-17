import { writable, derived, get } from 'svelte/store';
import { browser } from '$app/environment';
import { en, type Dictionary } from './en';
import { da } from './da';
import type { Locale, LocalizedString, LocalizedRichText } from '$lib/content/types';

const dictionaries: Record<Locale, Dictionary> = { en, da };

const STORAGE_KEY = 'emil-locale';

function getInitialLocale(): Locale {
    if (!browser) return 'en';
    const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (stored === 'en' || stored === 'da') return stored;
    return navigator.language.startsWith('da') ? 'da' : 'en';
}

export const locale = writable<Locale>(getInitialLocale());

if (browser) {
    locale.subscribe((value) => {
        localStorage.setItem(STORAGE_KEY, value);
        document.documentElement.lang = value;
    });
}

export const t = derived(locale, ($locale) => dictionaries[$locale]);

/** Pluk det rigtige sprog fra et LocalizedString eller LocalizedRichText */
export function tr(value: LocalizedString | LocalizedRichText | undefined): string {
    if (!value) return '';
    const $locale = get(locale);
    return value[$locale] ?? value.en ?? '';
}

export function setLocale(newLocale: Locale) {
    locale.set(newLocale);
}