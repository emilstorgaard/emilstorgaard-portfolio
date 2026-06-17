<script lang="ts">
    import { page } from '$app/state';
    import Container from '$lib/components/layout/Container.svelte';
    import Button from '$lib/components/ui/Button.svelte';
    import Icon from '$lib/components/ui/Icon.svelte';
    import { locale } from '$lib/i18n';
</script>

<svelte:head>
    <title>{page.status} — Emil Storgaard Andersen</title>
</svelte:head>

<section class="relative overflow-hidden min-h-[80vh] flex items-center">
    <div
        class="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[800px] opacity-30"
        style="background: radial-gradient(ellipse at center, var(--color-accent-subtle) 0%, transparent 60%);"
    ></div>

    <Container size="lg">
        <div class="relative space-y-8 text-center max-w-2xl mx-auto">
            <div class="space-y-2">
                <div class="font-mono text-sm text-[var(--color-accent)] uppercase tracking-wider">
                    Error {page.status}
                </div>
                <h1
                    class="text-7xl md:text-9xl font-semibold tracking-tighter text-gradient"
                >
                    {page.status}
                </h1>
            </div>

            <div class="space-y-3">
                <h2 class="text-2xl md:text-3xl font-semibold text-[var(--color-fg)]">
                    {#if page.status === 404}
                        {$locale === 'da' ? 'Siden findes ikke' : 'Page not found'}
                    {:else}
                        {$locale === 'da' ? 'Noget gik galt' : 'Something went wrong'}
                    {/if}
                </h2>
                <p class="text-[var(--color-fg-muted)] max-w-md mx-auto">
                    {#if page.status === 404}
                        {$locale === 'da'
                            ? 'Den side du leder efter eksisterer ikke — eller er flyttet. Lad os få dig tilbage på sporet.'
                            : 'The page you’re looking for doesn’t exist — or has moved. Let’s get you back on track.'}
                    {:else}
                        {page.error?.message ?? 'An unexpected error occurred.'}
                    {/if}
                </p>
            </div>

            <div class="flex flex-wrap items-center justify-center gap-3 pt-4">
                <Button href="/" size="lg">
                    <Icon name="arrow-right" size={16} class="rotate-180" />
                    {$locale === 'da' ? 'Tilbage til forsiden' : 'Back to home'}
                </Button>
                <Button href="/projects" size="lg" variant="secondary">
                    {$locale === 'da' ? 'Se projekter' : 'View projects'}
                </Button>
            </div>
        </div>
    </Container>
</section>