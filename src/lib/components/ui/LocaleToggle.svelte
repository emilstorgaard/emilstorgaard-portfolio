<script lang="ts">
    import { locale, setLocale } from '$lib/i18n';
    import type { Locale } from '$lib/content/types';

    function toggle() {
        setLocale($locale === 'en' ? 'da' : 'en');
    }

    const labels: Record<Locale, string> = {
        en: 'EN',
        da: 'DA'
    };
</script>

<button
    onclick={toggle}
    class="group relative inline-flex items-center gap-1 h-9 px-3 rounded-md bg-[var(--color-bg-elevated)] border border-[var(--color-border)] hover:border-[var(--color-border-strong)] transition-colors font-mono text-xs"
    aria-label="Toggle language"
>
    <span
        class={$locale === 'en'
            ? 'text-[var(--color-fg)]'
            : 'text-[var(--color-fg-subtle)]'}
    >
        EN
    </span>
    <span class="text-[var(--color-fg-subtle)]">/</span>
    <span
        class={$locale === 'da'
            ? 'text-[var(--color-fg)]'
            : 'text-[var(--color-fg-subtle)]'}
    >
        DA
    </span>
</button>