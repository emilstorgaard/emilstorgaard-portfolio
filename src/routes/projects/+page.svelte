<script lang="ts">
    import Container from '$lib/components/layout/Container.svelte';
    import Section from '$lib/components/layout/Section.svelte';
    import ProjectCard from '$lib/components/sections/ProjectCard.svelte';
    import ProjectFilter from '$lib/components/sections/ProjectFilter.svelte';
    import CTA from '$lib/components/sections/CTA.svelte';
    import { reveal } from '$lib/utils/animations';
    import { t, locale } from '$lib/i18n';
	import Seo from '$lib/components/Seo.svelte';

    let { data } = $props();

    let selected = $state('all');

    const skillNameMap = $derived(
        new Map(data.skills.map((s) => [s.id, s.name]))
    );

    // Hent unikke tech-navne fra projekterne
    const categories = $derived(
        Array.from(
            new Set(
                data.projects.flatMap((p) =>
                    p.technologies.map((id) => skillNameMap.get(id) ?? id)
                )
            )
        ).sort()
    );

    const counts = $derived.by(() => {
        const result: Record<string, number> = { all: data.projects.length };
        for (const cat of categories) {
            result[cat] = data.projects.filter((p) =>
                p.technologies.some((id) => (skillNameMap.get(id) ?? id) === cat)
            ).length;
        }
        return result;
    });

    const filtered = $derived(
        selected === 'all'
            ? data.projects
            : data.projects.filter((p) =>
                    p.technologies.some((id) => (skillNameMap.get(id) ?? id) === selected)
                )
    );
</script>

<Seo
    title="Projects"
    description="Selected projects showcasing my work across .NET, SvelteKit, and modern web technologies."
/>

<section class="relative pt-20 md:pt-28 pb-12">
    <div
        class="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[400px] w-[700px] opacity-30"
        style="background: radial-gradient(ellipse at center, var(--color-accent-subtle) 0%, transparent 60%);"
    ></div>

    <Container size="xl">
        <div class="space-y-8 max-w-3xl">
            <div class="space-y-3" use:reveal>
                <div class="flex items-center gap-3">
                    <div class="h-px w-8 bg-[var(--color-accent)]"></div>
                    <span
                        class="font-mono text-xs uppercase tracking-wider text-[var(--color-accent)]"
                    >
                        {$t.nav.projects}
                    </span>
                </div>
                <h1
                    class="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter leading-[0.95] text-gradient"
                >
                    {$locale === 'da' ? 'Udvalgte projekter' : 'Selected work'}
                </h1>
                <p class="text-lg text-[var(--color-fg-muted)] leading-relaxed max-w-2xl">
                    {$locale === 'da'
                        ? 'Et udvalg af projekter jeg er stolt af — fra solo-bygget affiliate-platforme til client work med headless CMS.'
                        : 'A selection of projects I’m proud of — from solo-built affiliate platforms to client work with headless CMS.'}
                </p>
            </div>

            <div use:reveal={{ delay: 100 }}>
                <ProjectFilter {categories} {counts} bind:selected />
            </div>
        </div>
    </Container>
</section>

<Section class="!pt-8">
    <Container size="xl">
        {#if filtered.length === 0}
            <div
                class="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-12 text-center"
            >
                <p class="text-[var(--color-fg-muted)]">
                    {$locale === 'da'
                        ? 'Ingen projekter matcher dette filter.'
                        : 'No projects match this filter.'}
                </p>
            </div>
        {:else}
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                {#each filtered as project, i (project.id)}
                    <div use:reveal={{ delay: i * 80 }}>
                        <ProjectCard {project} skills={data.skills} />
                    </div>
                {/each}
            </div>
        {/if}
    </Container>
</Section>

<CTA />