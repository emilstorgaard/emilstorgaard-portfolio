<script lang="ts">
    import { cn } from '$lib/utils/cn';

    type Size = 'sm' | 'md' | 'lg' | 'xl';

    let {
        size = 'lg',
        class: className = '',
        children
    }: {
        size?: Size;
        class?: string;
        children: import('svelte').Snippet;
    } = $props();

    const sizes: Record<Size, string> = {
        sm: 'max-w-2xl',
        md: 'max-w-4xl',
        lg: 'max-w-6xl',
        xl: 'max-w-7xl'
    };
</script>

<div class={cn('mx-auto w-full px-6 md:px-8', sizes[size], className)}>
    {@render children()}
</div>