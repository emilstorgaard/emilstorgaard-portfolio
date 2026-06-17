<script lang="ts">
    import Container from '$lib/components/layout/Container.svelte';
    import Section from '$lib/components/layout/Section.svelte';
    import { reveal } from '$lib/utils/animations';
    import { t, locale } from '$lib/i18n';

    const values = $derived([
        {
            title: $locale === 'da' ? 'Pålidelig & pligtopfyldende' : 'Reliable & dedicated',
            body:
                $locale === 'da'
                    ? 'Jeg holder hvad jeg lover. Når deadlines er sat, leverer jeg — uden at gå på kompromis med kvaliteten.'
                    : 'I keep my promises. When deadlines are set, I deliver — without compromising on quality.'
        },
        {
            title: $locale === 'da' ? 'Struktureret & kreativ' : 'Structured & creative',
            body:
                $locale === 'da'
                    ? 'Jeg trives med ren arkitektur og gennemtænkte løsninger, men er aldrig bange for at tænke kreativt når det skal til.'
                    : 'I thrive on clean architecture and thoughtful solutions, but I’m never afraid to think creatively when needed.'
        },
        {
            title: $locale === 'da' ? 'Holdspiller' : 'Team-first',
            body:
                $locale === 'da'
                    ? 'Jeg arbejder bedst i tæt samarbejde med mit team. Open communication, code reviews og daglig sparring er hvor magien sker.'
                    : 'I do my best work in close collaboration with the team. Open communication, code reviews, and daily sparring is where the magic happens.'
        },
        {
            title: $locale === 'da' ? 'Altid nysgerrig' : 'Always curious',
            body:
                $locale === 'da'
                    ? 'Jeg holder mig ajour med nye teknologier i min fritid og bygger sideprojekter for at holde mig skarp.'
                    : 'I keep up with new tech in my spare time and build side projects to stay sharp.'
        }
    ]);
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
                        05 — {$locale === 'da' ? 'Hvordan jeg arbejder' : 'How I work'}
                    </span>
                </div>
                <h2 class="text-4xl md:text-5xl font-semibold tracking-tight">
                    {$locale === 'da' ? 'Værdier der driver mig' : 'What drives me'}
                </h2>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                {#each values as value, i (value.title)}
                    <div
                        class="group relative overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6 md:p-8 hover:border-[var(--color-border-strong)] transition-all duration-300"
                        use:reveal={{ delay: i * 80 }}
                    >
                        <!-- Number -->
                        <div
                            class="absolute top-6 right-6 font-mono text-xs text-[var(--color-fg-subtle)]"
                        >
                            0{i + 1}
                        </div>

                        <!-- Accent line that grows on hover -->
                        <div
                            class="absolute top-0 left-0 h-px w-12 bg-[var(--color-accent)] transition-all duration-500 group-hover:w-full"
                        ></div>

                        <div class="space-y-3 pr-8">
                            <h3 class="text-xl font-semibold text-[var(--color-fg)]">
                                {value.title}
                            </h3>
                            <p class="text-[var(--color-fg-muted)] leading-relaxed">
                                {value.body}
                            </p>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </Container>
</Section>