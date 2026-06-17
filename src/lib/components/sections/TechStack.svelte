<script lang="ts">
    import Container from '$lib/components/layout/Container.svelte';
    import Section from '$lib/components/layout/Section.svelte';
    import { t } from '$lib/i18n';
    import { reveal } from '$lib/utils/animations';
    import type { Skill } from '$lib/content/types';

    let { skills }: { skills: Skill[] } = $props();

    const dailySkills = $derived(skills.filter((s) => s.level === 'daily'));
</script>

<Section>
    <Container size="xl">
        <div class="space-y-12">
            <div class="space-y-3 max-w-2xl" use:reveal>
                <div class="flex items-center gap-3">
                    <div class="h-px w-8 bg-[var(--color-accent)]"></div>
                    <span
                        class="font-mono text-xs uppercase tracking-wider text-[var(--color-accent)]"
                    >
                        02 — Stack
                    </span>
                </div>
                <h2 class="text-4xl md:text-5xl font-semibold tracking-tight">
                    Daily drivers
                </h2>
                <p class="text-[var(--color-fg-muted)] leading-relaxed">
                    The technologies I reach for every day to build reliable software.
                </p>
            </div>

            <!-- Skills marquee/grid -->
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3" use:reveal>
                {#each dailySkills as skill (skill.id)}
                    <div
                        class="group relative flex items-center gap-3 px-4 py-3.5 rounded-lg bg-[var(--color-bg-elevated)] border border-[var(--color-border)] hover:border-[var(--color-border-strong)] transition-all duration-200"
                    >
                        <div class="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] shadow-[0_0_8px_var(--color-accent)]"></div>
                        <span class="font-mono text-sm text-[var(--color-fg)]">{skill.name}</span>
                    </div>
                {/each}
            </div>
        </div>
    </Container>
</Section>