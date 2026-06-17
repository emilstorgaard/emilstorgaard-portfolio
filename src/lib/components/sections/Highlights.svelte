<script lang="ts">
    import Container from '$lib/components/layout/Container.svelte';
    import Section from '$lib/components/layout/Section.svelte';
    import { reveal } from '$lib/utils/animations';

    const stats = [
        { value: '5+', label: 'Years of experience', sub: 'Building production software' },
        { value: '.NET', label: 'Core specialty', sub: 'Backend & APIs' },
        { value: '∞', label: 'Curious by nature', sub: 'Always learning new tech' }
    ];
</script>

<Section>
    <Container size="xl">
        <div
            class="relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-8 md:p-12"
            use:reveal
        >
            <!-- Background pattern -->
            <div
                class="absolute inset-0 opacity-[0.03]"
                style="background-image: linear-gradient(var(--color-fg) 1px, transparent 1px), linear-gradient(90deg, var(--color-fg) 1px, transparent 1px); background-size: 40px 40px;"
            ></div>

            <!-- Accent glow -->
            <div
                class="absolute -top-20 -right-20 h-64 w-64 opacity-30 pointer-events-none"
                style="background: radial-gradient(circle, var(--color-accent-subtle) 0%, transparent 70%);"
            ></div>

            <div class="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
                {#each stats as stat, i (stat.label)}
                    <div class="space-y-2" use:reveal={{ delay: i * 100 }}>
                        <div
                            class="text-5xl md:text-6xl font-semibold tracking-tighter text-gradient"
                        >
                            {stat.value}
                        </div>
                        <div class="space-y-1 pt-2 border-t border-[var(--color-border)]">
                            <div class="text-sm font-medium text-[var(--color-fg)]">{stat.label}</div>
                            <div class="text-xs text-[var(--color-fg-subtle)]">{stat.sub}</div>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </Container>
</Section>