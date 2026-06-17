<script lang="ts">
    import { cn } from '$lib/utils/cn';
    import type { Snippet } from 'svelte';
    import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';

    type Variant = 'primary' | 'secondary' | 'ghost';
    type Size = 'sm' | 'md' | 'lg';

    type Props = {
        variant?: Variant;
        size?: Size;
        href?: string;
        external?: boolean;
        class?: string;
        children: Snippet;
    } & Omit<HTMLAnchorAttributes & HTMLButtonAttributes, 'class' | 'children'>;

    let {
        variant = 'primary',
        size = 'md',
        href,
        external = false,
        class: className = '',
        children,
        ...rest
    }: Props = $props();

    const base =
        'inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)] disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap';

    const variants: Record<Variant, string> = {
        primary:
            'bg-[var(--color-fg)] text-[var(--color-bg)] hover:bg-white hover:scale-[1.02] active:scale-[0.98]',
        secondary:
            'bg-[var(--color-bg-elevated)] text-[var(--color-fg)] border border-[var(--color-border-strong)] hover:border-[var(--color-fg-muted)] hover:bg-[var(--color-bg-subtle)]',
        ghost:
            'text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] hover:bg-[var(--color-bg-elevated)]'
    };

    const sizes: Record<Size, string> = {
        sm: 'h-9 px-3 text-sm',
        md: 'h-11 px-5 text-sm',
        lg: 'h-12 px-6 text-base'
    };

    // $derived gør at classes reagerer på prop-ændringer
    const classes = $derived(cn(base, variants[variant], sizes[size], className));
</script>

{#if href}
    <a
        {href}
        class={classes}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        {...rest}
    >
        {@render children()}
    </a>
{:else}
    <button class={classes} {...rest}>
        {@render children()}
    </button>
{/if}