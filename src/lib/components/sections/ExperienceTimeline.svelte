<script lang="ts">
    import Container from '$lib/components/layout/Container.svelte';
    import Section from '$lib/components/layout/Section.svelte';
    import Badge from '$lib/components/ui/Badge.svelte';
    import { reveal } from '$lib/utils/animations';
    import { locale, t, tr } from '$lib/i18n';
    import { formatPeriod, calculateDuration } from '$lib/utils/date';
    import type { Experience, Skill } from '$lib/content/types';

    let { experiences, skills }: { experiences: Experience[]; skills: Skill[] } = $props();

    function getTechName(id: string): string {
        return skills.find((s) => s.id === id)?.name ?? id;
    }
</script>

<Section>
    <Container size="xl">
        <div class="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12 lg:gap-16">
            <!-- Section header (sticky on desktop) -->
            <div class="lg:sticky lg:top-28 lg:self-start space-y-3" use:reveal>
                <div class="flex items-center gap-3">
                    <div class="h-px w-8 bg-[var(--color-accent)]"></div>
                    <span
                        class="font-mono text-xs uppercase tracking-wider text-[var(--color-accent)]"
                    >
                        03 — {$t.sections.experience}
                    </span>
                </div>
                <h2 class="text-4xl md:text-5xl font-semibold tracking-tight">
                    {$locale === 'da' ? 'Karriere' : 'Career'}
                </h2>
                <p class="text-[var(--color-fg-muted)] leading-relaxed">
                    {$locale === 'da'
                        ? 'Mine roller og hvor jeg har lært det jeg kan.'
                        : 'My roles and where I built my craft.'}
                </p>
            </div>

            <!-- Timeline -->
            <div class="relative">
                <!-- Vertical line -->
                <div
                    class="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-[var(--color-border-strong)] via-[var(--color-border)] to-transparent"
                ></div>

                <div class="space-y-12">
                    {#each experiences as exp, i (exp.id)}
                        <div class="relative pl-12" use:reveal={{ delay: i * 100 }}>
                            <!-- Dot -->
                            <div
                                class="absolute left-0 top-2 flex items-center justify-center h-6 w-6 rounded-full bg-[var(--color-bg)] border-2 border-[var(--color-accent)]"
                            >
                                {#if !exp.endDate}
                                    <span
                                        class="h-2 w-2 rounded-full bg-[var(--color-accent)] animate-pulse"
                                    ></span>
                                {:else}
                                    <span class="h-2 w-2 rounded-full bg-[var(--color-border-strong)]"></span>
                                {/if}
                            </div>

                            <article
                                class="group relative rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6 md:p-7 hover:border-[var(--color-border-strong)] transition-colors"
                            >
                                <div class="flex flex-col gap-1.5 mb-4">
                                    <div class="flex flex-wrap items-baseline gap-2">
                                        <h3 class="text-xl font-semibold text-[var(--color-fg)]">
                                            {exp.company}
                                        </h3>
                                        {#if !exp.endDate}
                                            <Badge variant="accent">Current</Badge>
                                        {/if}
                                    </div>
                                    <div class="text-[var(--color-fg-muted)]">
                                        {tr(exp.title)}
                                    </div>
                                    <div
                                        class="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 font-mono text-xs text-[var(--color-fg-subtle)]"
                                    >
                                        <span>{formatPeriod(exp.startDate, exp.endDate, $locale)}</span>
                                        <span class="text-[var(--color-border-strong)]">·</span>
                                        <span>{calculateDuration(exp.startDate, exp.endDate, $locale)}</span>
                                        {#if exp.location}
                                            <span class="text-[var(--color-border-strong)]">·</span>
                                            <span>{exp.location}</span>
                                        {/if}
                                    </div>
                                </div>

                                <div
                                    class="prose prose-invert text-sm max-w-none text-[var(--color-fg-muted)] leading-relaxed [&_p]:mb-3 last:[&_p]:mb-0"
                                >
                                    {@html tr(exp.description)}
                                </div>

                                {#if exp.technologies && exp.technologies.length > 0}
                                    <div class="flex flex-wrap gap-1.5 mt-5 pt-5 border-t border-[var(--color-border)]">
                                        {#each exp.technologies as techId (techId)}
                                            <Badge>{getTechName(techId)}</Badge>
                                        {/each}
                                    </div>
                                {/if}
                            </article>
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    </Container>
</Section>