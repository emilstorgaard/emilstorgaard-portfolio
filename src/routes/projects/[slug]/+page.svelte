<script lang="ts">
    import Container from '$lib/components/layout/Container.svelte';
    import Section from '$lib/components/layout/Section.svelte';
    import Button from '$lib/components/ui/Button.svelte';
    import Badge from '$lib/components/ui/Badge.svelte';
    import Icon from '$lib/components/ui/Icon.svelte';
    import ContentBlocks from '$lib/components/content/ContentBlocks.svelte';
    import { tr, t, locale } from '$lib/i18n';
    import { reveal } from '$lib/utils/animations';
	import Seo from '$lib/components/Seo.svelte';

    let { data } = $props();

    const project = $derived(data.project);
    const skills = $derived(data.skills);

    const projectTechs = $derived(
        project.technologies
            .map((id) => skills.find((s) => s.id === id))
            .filter((s): s is NonNullable<typeof s> => !!s)
    );
</script>

<Seo
    title={tr(project.title)}
    description={tr(project.tagline)}
    type="article"
/>

<!-- Hero -->
<section class="relative overflow-hidden pt-20 md:pt-28 pb-12 md:pb-16">
    <div
        class="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] opacity-30"
        style="background: radial-gradient(ellipse at center, var(--color-accent-subtle) 0%, transparent 60%);"
    ></div>

    <Container size="xl">
        <!-- Breadcrumb -->
        <div class="mb-8 animate-fade-in-up">
            <a
                href="/projects"
                class="inline-flex items-center gap-2 font-mono text-xs text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] transition-colors"
            >
                <Icon name="arrow-right" size={12} class="rotate-180" />
                {$locale === 'da' ? 'Alle projekter' : 'All projects'}
            </a>
        </div>

        <div class="space-y-8 max-w-4xl">
            <div class="flex items-center gap-3 animate-fade-in-up" style="animation-delay: 50ms">
                <Badge variant="accent">{project.year}</Badge>
                <span class="font-mono text-xs text-[var(--color-fg-subtle)]">
                    {tr(project.role)}
                </span>
            </div>

            <h1
                class="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter leading-[0.95] text-gradient animate-fade-in-up"
                style="animation-delay: 100ms"
            >
                {tr(project.title)}
            </h1>

            <p
                class="text-xl md:text-2xl text-[var(--color-fg-muted)] font-light leading-relaxed max-w-3xl animate-fade-in-up"
                style="animation-delay: 200ms"
            >
                {tr(project.tagline)}
            </p>

            <div class="flex flex-wrap gap-3 pt-2 animate-fade-in-up" style="animation-delay: 300ms">
                {#if project.liveUrl}
                    <Button href={project.liveUrl} size="lg" external>
                        {$t.sections.viewLive}
                        <Icon name="external" size={14} />
                    </Button>
                {/if}
                {#if project.repoUrl}
                    <Button href={project.repoUrl} size="lg" variant="secondary" external>
                        <Icon name="github" size={16} />
                        {$t.sections.viewCode}
                    </Button>
                {/if}
            </div>
        </div>

<!-- Cover image / placeholder -->
<div
    class="relative mt-12 md:mt-16 rounded-2xl overflow-hidden border border-[var(--color-border)] bg-[var(--color-bg-elevated)] animate-fade-in-up"
    style="animation-delay: 400ms"
>
    <div class="aspect-[16/10] relative">
        <!-- Baggrund (vises både med og uden billede) -->
        <div
            class="absolute inset-0 bg-gradient-to-br from-[var(--color-accent-subtle)] via-transparent to-transparent"
        ></div>
        <div
            class="absolute inset-0 opacity-30"
            style="background-image: radial-gradient(circle at 50% 50%, var(--color-border-strong) 1px, transparent 1px); background-size: 24px 24px;"
        ></div>

        {#if project.coverImage?.url}
            <img
                src={project.coverImage.url}
                alt={tr(project.coverImage.alt)}
                class="relative h-full w-full object-contain"
            />
        {:else}
            <div class="relative h-full w-full flex items-center justify-center">
                <span
                    class="font-mono text-3xl md:text-5xl font-semibold text-[var(--color-fg-subtle)] opacity-40"
                >
                    {tr(project.title)}
                </span>
            </div>
        {/if}
    </div>
</div>
    </Container>
</section>

<!-- Project meta -->
<Section class="!pt-8 md:!pt-12">
    <Container size="xl">
        <div
            class="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 py-8 border-y border-[var(--color-border)]"
            use:reveal
        >
            <div class="space-y-2">
                <div
                    class="font-mono text-xs uppercase tracking-wider text-[var(--color-fg-subtle)]"
                >
                    {$locale === 'da' ? 'Rolle' : 'Role'}
                </div>
                <div class="text-sm text-[var(--color-fg)]">{tr(project.role)}</div>
            </div>
            <div class="space-y-2">
                <div
                    class="font-mono text-xs uppercase tracking-wider text-[var(--color-fg-subtle)]"
                >
                    {$locale === 'da' ? 'År' : 'Year'}
                </div>
                <div class="text-sm text-[var(--color-fg)]">{project.year}</div>
            </div>
            <div class="space-y-2 col-span-2">
                <div
                    class="font-mono text-xs uppercase tracking-wider text-[var(--color-fg-subtle)]"
                >
                    {$locale === 'da' ? 'Teknologier' : 'Technologies'}
                </div>
                <div class="flex flex-wrap gap-1.5">
                    {#each projectTechs as tech (tech.id)}
                        <Badge>{tech.name}</Badge>
                    {/each}
                </div>
            </div>
        </div>
    </Container>
</Section>

<!-- Case study content -->
<Section class="!pt-12">
    <Container size="xl">
        <ContentBlocks blocks={project.content} />
    </Container>
</Section>

<!-- Next project -->
<Section>
    <Container size="xl">
        <a
            href={`/projects/${data.next.slug}`}
            class="group block rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] hover:border-[var(--color-border-strong)] p-8 md:p-12 transition-all hover:-translate-y-1"
            use:reveal
        >
            <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div class="space-y-2">
                    <div
                        class="font-mono text-xs uppercase tracking-wider text-[var(--color-accent)]"
                    >
                        {$locale === 'da' ? 'Næste projekt' : 'Next project'}
                    </div>
                    <h3
                        class="text-3xl md:text-4xl font-semibold tracking-tight text-gradient group-hover:text-[var(--color-accent)] transition-colors"
                    >
                        {tr(data.next.title)}
                    </h3>
                    <p class="text-[var(--color-fg-muted)] max-w-xl">
                        {tr(data.next.tagline)}
                    </p>
                </div>
                <div
                    class="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-border-strong)] text-[var(--color-fg)] transition-transform group-hover:translate-x-1"
                >
                    <Icon name="arrow-right" size={20} />
                </div>
            </div>
        </a>
    </Container>
</Section>

<style>
    @keyframes fade-in-up {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .animate-fade-in-up {
        opacity: 0;
        animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
</style>