<script lang="ts">
    import Container from '$lib/components/layout/Container.svelte';
    import Section from '$lib/components/layout/Section.svelte';
    import ProjectCard from './ProjectCard.svelte';
    import Button from '$lib/components/ui/Button.svelte';
    import Icon from '$lib/components/ui/Icon.svelte';
    import { t } from '$lib/i18n';
    import { reveal } from '$lib/utils/animations';
    import type { Project, Skill } from '$lib/content/types';

    let { projects, skills }: { projects: Project[]; skills: Skill[] } = $props();
</script>

<Section id="work">
    <Container size="xl">
        <!-- Section header -->
        <div
            class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16"
            use:reveal
        >
            <div class="space-y-3">
                <div class="flex items-center gap-3">
                    <div class="h-px w-8 bg-[var(--color-accent)]"></div>
                    <span
                        class="font-mono text-xs uppercase tracking-wider text-[var(--color-accent)]"
                    >
                        01 — {$t.sections.featuredWork}
                    </span>
                </div>
                <h2 class="text-4xl md:text-5xl font-semibold tracking-tight">
                    {$t.sections.featuredWorkSub}
                </h2>
            </div>

            <Button href="/projects" variant="ghost" size="md" class="self-start md:self-end">
                {$t.sections.viewAll}
                <Icon name="arrow-right" size={14} />
            </Button>
        </div>

        <!-- Projects grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            {#each projects as project, i (project.id)}
                <div use:reveal={{ delay: i * 100 }}>
                    <ProjectCard {project} {skills} />
                </div>
            {/each}
        </div>
    </Container>
</Section>