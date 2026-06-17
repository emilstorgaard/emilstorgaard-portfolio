<script lang="ts">
    import { cn } from '$lib/utils/cn';

    let {
        id,
        class: className = '',
        children
    }: {
        id?: string;
        class?: string;
        children: import('svelte').Snippet;
    } = $props();
</script>

<section {id} class={cn('relative py-24 md:py-32', className)}>
    {@render children()}
</section>