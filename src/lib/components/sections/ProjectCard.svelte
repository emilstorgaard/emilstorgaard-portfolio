<script lang="ts">
    import type { Project, Skill } from '$lib/content/types';
    import { tr, t } from '$lib/i18n';
    import Icon from '$lib/components/ui/Icon.svelte';
    import Badge from '$lib/components/ui/Badge.svelte';

    let {
        project,
        skills,
        featured = false
    }: {
        project: Project;
        skills: Skill[];
        featured?: boolean;
    } = $props();

    const projectTechs = $derived(
        project.technologies
            .map((techId) => skills.find((s) => s.id === techId))
            .filter((s): s is Skill => !!s)
    );
</script>

<a
    href={`/projects/${project.slug}`}
    class="group relative flex flex-col overflow-hidden rounded-xl bg-[var(--color-bg-elevated)] border border-[var(--color-border)] hover:border-[var(--color-border-strong)] transition-all duration-300 hover:-translate-y-1"
    class:md:col-span-2={featured}
>
    <!-- Image -->
    <div
        class="relative aspect-[16/10] overflow-hidden bg-[var(--color-bg-subtle)]"
    >
        <!-- Placeholder gradient (vises hvis billedet ikke loader) -->
        <div
            class="absolute inset-0 bg-gradient-to-br from-[var(--color-accent-subtle)] via-transparent to-transparent"
        ></div>

        <!-- Subtle pattern -->
        <div
            class="absolute inset-0 opacity-30"
            style="background-image: radial-gradient(circle at 50% 50%, var(--color-border-strong) 1px, transparent 1px); background-size: 20px 20px;"
        ></div>

        {#if project.thumbnail?.url}
            <img
                src={project.thumbnail.url}
                alt={tr(project.thumbnail.alt)}
                loading="lazy"
                class="relative h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                onerror={(e) => {
                    const img = e.currentTarget as HTMLImageElement;
                    img.style.display = 'none';
                    const fallback = img.nextElementSibling as HTMLElement | null;
                    if (fallback) fallback.style.display = 'flex';
                }}
            />
            <!-- Fallback hvis billede ikke loader -->
            <div
                class="absolute inset-0 hidden items-center justify-center"
            >
                <span
                    class="font-mono text-2xl md:text-4xl font-semibold text-[var(--color-fg-subtle)] opacity-40"
                >
                    {tr(project.title)}
                </span>
            </div>
        {:else}
            <div class="relative h-full w-full flex items-center justify-center">
                <span
                    class="font-mono text-2xl md:text-4xl font-semibold text-[var(--color-fg-subtle)] opacity-40"
                >
                    {tr(project.title)}
                </span>
            </div>
        {/if}

        <!-- Year badge -->
        <div class="absolute top-4 left-4 flex items-center gap-2">
            <span
                class="px-2.5 py-1 rounded-full text-xs font-mono bg-[var(--color-bg)]/80 backdrop-blur-md border border-[var(--color-border)] text-[var(--color-fg-muted)]"
            >
                {project.year}
            </span>
        </div>

        <!-- Arrow indicator on hover -->
        <div
            class="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-bg)]/80 backdrop-blur-md border border-[var(--color-border)] text-[var(--color-fg)] transition-all duration-300 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0"
        >
            <Icon name="arrow-up-right" size={16} />
        </div>
    </div>

    <!-- Content -->
    <div class="flex flex-col flex-1 p-6 md:p-7 gap-4">
        <div class="space-y-2">
            <h3
                class="text-xl md:text-2xl font-semibold tracking-tight text-[var(--color-fg)] group-hover:text-[var(--color-accent)] transition-colors"
            >
                {tr(project.title)}
            </h3>
            <p class="text-sm text-[var(--color-fg-muted)] leading-relaxed">
                {tr(project.tagline)}
            </p>
        </div>

        <!-- Tech stack -->
        <div class="flex flex-wrap gap-1.5 mt-auto pt-2">
            {#each projectTechs.slice(0, 5) as tech (tech.id)}
                <Badge>{tech.name}</Badge>
            {/each}
            {#if projectTechs.length > 5}
                <Badge variant="outline">+{projectTechs.length - 5}</Badge>
            {/if}
        </div>
    </div>
</a>