<script lang="ts">
    import Container from '$lib/components/layout/Container.svelte';
    import Section from '$lib/components/layout/Section.svelte';
    import Button from '$lib/components/ui/Button.svelte';
    import Icon from '$lib/components/ui/Icon.svelte';
    import { reveal } from '$lib/utils/animations';
    import { about } from '$lib/content/local/about';
</script>

<Section>
    <Container size="lg">
        <div
            class="relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-gradient-to-br from-[var(--color-bg-elevated)] via-[var(--color-bg-elevated)] to-[var(--color-bg-subtle)] p-10 md:p-16 text-center"
            use:reveal
        >
            <!-- Background glow -->
            <div
                class="absolute -top-1/2 left-1/2 -translate-x-1/2 h-[400px] w-[600px] opacity-60 pointer-events-none"
                style="background: radial-gradient(ellipse at center, var(--color-accent-subtle) 0%, transparent 60%);"
            ></div>

            <div class="relative space-y-8 max-w-2xl mx-auto">
                <div class="space-y-4">
                    <span
                        class="inline-block font-mono text-xs uppercase tracking-wider text-[var(--color-accent)]"
                    >
                        Let's build something
                    </span>
                    <h2 class="text-4xl md:text-5xl font-semibold tracking-tight text-gradient">
                        Have a project in mind?
                    </h2>
                    <p
                        class="text-lg text-[var(--color-fg-muted)] max-w-lg mx-auto leading-relaxed"
                    >
                        I'm currently available for freelance work and open to new opportunities.
                        Let's talk about how I can help.
                    </p>
                </div>

                <div class="flex flex-wrap items-center justify-center gap-3">
                    <Button href="/contact" size="lg">
                        Start a conversation
                        <Icon name="arrow-right" size={16} />
                    </Button>
                    <Button href={`mailto:${about.email}`} size="lg" variant="secondary">
                        <Icon name="mail" size={16} />
                        {about.email}
                    </Button>
                </div>
            </div>
        </div>
    </Container>
</Section>