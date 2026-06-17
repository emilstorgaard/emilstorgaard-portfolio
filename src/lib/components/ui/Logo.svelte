<script lang="ts">
    import { cn } from '$lib/utils/cn';

    type Variant = 'full' | 'mark';
    type Size = 'sm' | 'md' | 'lg';

    let {
        variant = 'full',
        size = 'md',
        class: className = ''
    }: {
        variant?: Variant;
        size?: Size;
        class?: string;
    } = $props();

    const sizes: Record<Size, string> = {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-2xl'
    };
</script>

<span
    class={cn(
        'font-mono font-medium tracking-tight inline-flex items-baseline select-none',
        sizes[size],
        className
    )}
    aria-label="Emil Storgaard Andersen"
>
    <span
        class="text-[var(--color-accent)] transition-transform duration-300 group-hover:-translate-y-px"
    >~/</span>
    {#if variant === 'full'}
        <span class="text-[var(--color-fg)]">emil</span>
    {:else}
        <span class="text-[var(--color-fg)]">e</span>
    {/if}
</span>