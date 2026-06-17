<script lang="ts">
    import { cn } from '$lib/utils/cn';
    import { locale } from '$lib/i18n';

    let {
        categories,
        selected = $bindable('all'),
        counts
    }: {
        categories: string[];
        selected: string;
        counts: Record<string, number>;
    } = $props();

    const allLabel = $derived($locale === 'da' ? 'Alle' : 'All');
</script>

<div class="flex flex-wrap gap-2">
    <button
        onclick={() => (selected = 'all')}
        class={cn(
            'inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border font-mono text-xs transition-all',
            selected === 'all'
                ? 'bg-[var(--color-fg)] text-[var(--color-bg)] border-[var(--color-fg)]'
                : 'bg-[var(--color-bg-elevated)] text-[var(--color-fg-muted)] border-[var(--color-border)] hover:border-[var(--color-border-strong)] hover:text-[var(--color-fg)]'
        )}
    >
        {allLabel}
        <span class="opacity-60">{counts.all}</span>
    </button>

    {#each categories as category (category)}
        <button
            onclick={() => (selected = category)}
            class={cn(
                'inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border font-mono text-xs transition-all',
                selected === category
                    ? 'bg-[var(--color-fg)] text-[var(--color-bg)] border-[var(--color-fg)]'
                    : 'bg-[var(--color-bg-elevated)] text-[var(--color-fg-muted)] border-[var(--color-border)] hover:border-[var(--color-border-strong)] hover:text-[var(--color-fg)]'
            )}
        >
            {category}
            <span class="opacity-60">{counts[category]}</span>
        </button>
    {/each}
</div>