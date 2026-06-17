<script lang="ts">
    import { cn } from '$lib/utils/cn';
    import type { Snippet } from 'svelte';

    type Variant = 'default' | 'accent' | 'outline';

    let {
        variant = 'default',
        class: className = '',
        children
    }: {
        variant?: Variant;
        class?: string;
        children: Snippet;
    } = $props();

    const variants: Record<Variant, string> = {
        default: 'bg-[var(--color-bg-elevated)] text-[var(--color-fg-muted)] border border-[var(--color-border)]',
        accent: 'bg-[var(--color-accent-subtle)] text-[var(--color-accent)] border border-[var(--color-accent)]/20',
        outline: 'border border-[var(--color-border-strong)] text-[var(--color-fg-muted)]'
    };
</script>

<span
    class={cn(
        'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium font-mono',
        variants[variant],
        className
    )}
>
    {@render children()}
</span>