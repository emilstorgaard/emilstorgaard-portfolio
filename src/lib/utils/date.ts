import type { Locale } from '$lib/content/types';

export function formatPeriod(
    startDate: string,
    endDate: string | undefined,
    locale: Locale
): string {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : null;

    const monthFormat = locale === 'da' ? 'da-DK' : 'en-US';
    const startStr = start.toLocaleDateString(monthFormat, {
        month: 'short',
        year: 'numeric'
    });

    if (!end) {
        return `${startStr} — ${locale === 'da' ? 'nu' : 'Present'}`;
    }

    const endStr = end.toLocaleDateString(monthFormat, {
        month: 'short',
        year: 'numeric'
    });

    return `${startStr} — ${endStr}`;
}

export function calculateDuration(
    startDate: string,
    endDate: string | undefined,
    locale: Locale
): string {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();

    const months =
        (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());

    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    const labels =
        locale === 'da'
            ? { year: 'år', years: 'år', month: 'måned', months: 'måneder' }
            : { year: 'yr', years: 'yrs', month: 'mo', months: 'mos' };

    const parts: string[] = [];
    if (years > 0) parts.push(`${years} ${years === 1 ? labels.year : labels.years}`);
    if (remainingMonths > 0)
        parts.push(`${remainingMonths} ${remainingMonths === 1 ? labels.month : labels.months}`);

    return parts.join(' ') || `< 1 ${labels.month}`;
}