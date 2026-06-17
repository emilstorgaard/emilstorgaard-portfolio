<script lang="ts">
    import Container from '$lib/components/layout/Container.svelte';
    import Section from '$lib/components/layout/Section.svelte';
    import { reveal } from '$lib/utils/animations';
    import { t, locale } from '$lib/i18n';
    import type { Skill, SkillLevel } from '$lib/content/types';

    let { skills }: { skills: Skill[] } = $props();

    const grouped = $derived({
        daily: skills.filter((s) => s.level === 'daily'),
        experienced: skills.filter((s) => s.level === 'experienced'),
        familiar: skills.filter((s) => s.level === 'familiar')
    });

    const groups = $derived([
        {
            key: 'daily' as SkillLevel,
            label: $t.skillLevel.daily,
            description:
                $locale === 'da'
                    ? 'Værktøjer jeg bruger hver dag i mit arbejde'
                    : 'Tools I reach for every single day',
            skills: grouped.daily,
            accent: true
        },
        {
            key: 'experienced' as SkillLevel,
            label: $t.skillLevel.experienced,
            description:
                $locale === 'da'
                    ? 'Teknologier jeg har solid erfaring med'
                    : 'Technologies I have solid experience with',
            skills: grouped.experienced,
            accent: false
        },
        {
            key: 'familiar' as SkillLevel,
            label: $t.skillLevel.familiar,
            description:
                $locale === 'da'
                    ? 'Teknologier jeg kender og kan arbejde med'
                    : 'Technologies I’ve worked with and can pick up quickly',
            skills: grouped.familiar,
            accent: false
        }
    ]);
</script>

<Section>
    <Container size="xl">
        <div class="space-y-12 md:space-y-16">
            <div class="space-y-3 max-w-2xl" use:reveal>
                <div class="flex items-center gap-3">
                    <div class="h-px w-8 bg-[var(--color-accent)]"></div>
                    <span
                        class="font-mono text-xs uppercase tracking-wider text-[var(--color-accent)]"
                    >
                        04 — {$t.sections.skills}
                    </span>
                </div>
                <h2 class="text-4xl md:text-5xl font-semibold tracking-tight">
                    {$locale === 'da' ? 'Værktøjskassen' : 'The toolkit'}
                </h2>
                <p class="text-[var(--color-fg-muted)] leading-relaxed">
                    {$locale === 'da'
                        ? 'En ærlig oversigt — fra det jeg arbejder med dagligt, til det jeg har prøvet og kan hoppe på.'
                        : 'An honest breakdown — from what I use every day to what I’ve worked with and can pick up quickly.'}
                </p>
            </div>

            <div class="space-y-12">
                {#each groups as group, i (group.key)}
                    {#if group.skills.length > 0}
                        <div use:reveal={{ delay: i * 100 }} class="space-y-5">
                            <div
                                class="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4 border-b border-[var(--color-border)]"
                            >
                                <div class="space-y-1">
                                    <h3
                                        class="text-2xl font-semibold text-[var(--color-fg)] flex items-center gap-3"
                                    >
                                        {#if group.accent}
                                            <span
                                                class="h-2 w-2 rounded-full bg-[var(--color-accent)] shadow-[0_0_12px_var(--color-accent)]"
                                            ></span>
                                        {/if}
                                        {group.label}
                                    </h3>
                                    <p class="text-sm text-[var(--color-fg-muted)]">
                                        {group.description}
                                    </p>
                                </div>
                                <span
                                    class="font-mono text-xs text-[var(--color-fg-subtle)]"
                                >
                                    {group.skills.length} {$locale === 'da' ? 'i alt' : 'total'}
                                </span>
                            </div>

                            <div class="flex flex-wrap gap-2">
                                {#each group.skills as skill (skill.id)}
                                    <div
                                        class="group/skill flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[var(--color-bg-elevated)] border border-[var(--color-border)] hover:border-[var(--color-border-strong)] hover:bg-[var(--color-bg-subtle)] transition-all"
                                    >
                                        <span class="font-mono text-sm text-[var(--color-fg)]">
                                            {skill.name}
                                        </span>
                                        {#if skill.yearsOfExperience}
                                            <span
                                                class="font-mono text-xs text-[var(--color-fg-subtle)] tabular-nums"
                                            >
                                                ·{skill.yearsOfExperience}y
                                            </span>
                                        {/if}
                                    </div>
                                {/each}
                            </div>
                        </div>
                    {/if}
                {/each}
            </div>
        </div>
    </Container>
</Section>