<script lang="ts">
    import Container from '$lib/components/layout/Container.svelte';
    import Button from '$lib/components/ui/Button.svelte';
    import AvailabilityIndicator from '$lib/components/ui/AvailabilityIndicator.svelte';
    import Icon from '$lib/components/ui/Icon.svelte';
    import { t, tr } from '$lib/i18n';
    import type { About } from '$lib/content/types';
	import Logo from '../ui/Logo.svelte';

    let { about }: { about: About } = $props();
</script>

<section class="relative overflow-hidden pt-20 md:pt-28 pb-16 md:pb-24">
    <!-- Background glow effects -->
    <div
        class="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] opacity-40"
        style="background: radial-gradient(ellipse at center, var(--color-accent-subtle) 0%, transparent 60%);"
    ></div>

    <Container size="xl">
        <div class="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-16 items-center">
            <!-- Text content -->
            <div class="relative space-y-8 order-2 lg:order-1">
                <!-- Brand mark + availability -->
                <div class="flex flex-wrap items-center gap-3 animate-fade-in-up" style="animation-delay: 0ms">
                    <div
                        class="inline-flex items-center justify-center h-9 px-3 rounded-full bg-[var(--color-bg-elevated)] border border-[var(--color-border)]"
                    >
                        <Logo variant="full" size="sm" />
                    </div>
                    <AvailabilityIndicator />
                </div>
                <!-- Main heading -->
                <div class="space-y-6">
                    <h1
                        class="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-semibold tracking-tighter leading-[0.95] animate-fade-in-up"
                        style="animation-delay: 100ms"
                    >
                        <span class="text-gradient">{$t.hero.greeting}.</span>
                        <br />
                        <span class="text-[var(--color-fg-muted)]">
                            I build
                            <span class="text-[var(--color-fg)] relative whitespace-nowrap">
                                software
                                <svg
                                    class="absolute -bottom-2 left-0 w-full"
                                    height="8"
                                    viewBox="0 0 200 8"
                                    fill="none"
                                    preserveAspectRatio="none"
                                >
                                    <path
                                        d="M1 5.5C40 2 80 2 120 4.5C160 7 180 6 199 4"
                                        stroke="var(--color-accent)"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                    />
                                </svg>
                            </span>
                            <br class="hidden md:block" />
                            that lasts.
                        </span>
                    </h1>

                    <p
                        class="text-lg md:text-xl text-[var(--color-fg-muted)] max-w-2xl leading-relaxed animate-fade-in-up"
                        style="animation-delay: 200ms"
                    >
                        {tr(about.shortBio)}
                    </p>
                </div>

                <!-- CTAs -->
                <div
                    class="flex flex-wrap gap-3 pt-2 animate-fade-in-up"
                    style="animation-delay: 300ms"
                >
                    <Button href="/projects" size="lg">
                        {$t.hero.ctaPrimary}
                        <Icon name="arrow-right" size={16} />
                    </Button>
                    <Button href="/contact" size="lg" variant="secondary">
                        {$t.hero.ctaSecondary}
                    </Button>
                </div>

                <!-- Currently at -->
                <div
                    class="pt-8 flex flex-col sm:flex-row sm:items-center gap-3 text-sm animate-fade-in-up"
                    style="animation-delay: 400ms"
                >
                    <span class="font-mono text-xs uppercase tracking-wider text-[var(--color-fg-subtle)]">
                        Currently at
                    </span>
                    <div class="flex items-center gap-2">
                        <span class="font-medium text-[var(--color-fg)]">Novicell</span>
                        <span class="text-[var(--color-fg-subtle)]">·</span>
                        <span class="text-[var(--color-fg-muted)]">Backend Developer & Consultant</span>
                    </div>
                </div>
            </div>

            <!-- Portrait -->
            {#if about.photoUrl}
                <div
                    class="relative order-1 lg:order-2 max-w-sm mx-auto lg:max-w-none w-full animate-fade-in-up"
                    style="animation-delay: 250ms"
                >
                    <!-- Glow behind image -->
                    <div
                        class="absolute -inset-4 rounded-3xl opacity-50 blur-2xl pointer-events-none"
                        style="background: radial-gradient(circle at 30% 30%, var(--color-accent-subtle), transparent 70%);"
                    ></div>

                    <!-- Image frame -->
                    <div class="relative group">
                        <!-- Gradient border -->
                        <div
                            class="absolute -inset-px rounded-2xl bg-gradient-to-br from-[var(--color-border-strong)] via-[var(--color-border)] to-transparent"
                        ></div>

                        <div class="relative overflow-hidden rounded-2xl bg-[var(--color-bg-elevated)]">
                            <!-- Subtle pattern as fallback -->
                            <div
                                class="absolute inset-0 opacity-30"
                                style="background-image: radial-gradient(circle at 50% 50%, var(--color-border-strong) 1px, transparent 1px); background-size: 24px 24px;"
                            ></div>

                            <div class="relative aspect-[4/5] overflow-hidden">
                                <img
                                    src={about.photoUrl}
                                    alt={about.name}
                                    loading="eager"
                                    fetchpriority="high"
                                    class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                                />

                                <!-- Subtle dark overlay at bottom for badge readability -->
                                <div
                                    class="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[var(--color-bg)]/80 via-[var(--color-bg)]/20 to-transparent pointer-events-none"
                                ></div>
                            </div>
                        </div>

                        <!-- Floating tech badge -->
                        <div
                            class="absolute -bottom-3 -left-3 flex items-center gap-2 px-3.5 py-2 rounded-full bg-[var(--color-bg-elevated)] border border-[var(--color-border-strong)] shadow-xl shadow-black/50 backdrop-blur-xl"
                        >
                            <span
                                class="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] shadow-[0_0_8px_var(--color-accent)]"
                            ></span>
                            <span class="font-mono text-xs text-[var(--color-fg)]">.NET</span>
                            <span class="text-[var(--color-fg-subtle)]">·</span>
                            <span class="font-mono text-xs text-[var(--color-fg-muted)]">Fullstack</span>
                        </div>

                        <!-- Top-right corner accent -->
                        <div
                            class="absolute -top-2 -right-2 h-16 w-16 rounded-full opacity-60"
                            style="background: radial-gradient(circle, var(--color-accent-subtle), transparent 70%);"
                        ></div>
                    </div>

                    <!-- Mini info under image (mobile only - desktop har det i text-siden) -->
                    <div class="mt-6 lg:hidden flex items-center justify-center gap-2 text-xs">
                        <span class="font-mono text-[var(--color-fg-subtle)]">Based in</span>
                        <span class="text-[var(--color-fg)]">{about.location}</span>
                    </div>
                </div>
            {/if}
        </div>
    </Container>

    <!-- Scroll indicator -->
    <div
        class="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-[var(--color-fg-subtle)] animate-fade-in-up"
        style="animation-delay: 600ms"
    >
        <span class="font-mono text-xs uppercase tracking-wider">Scroll</span>
        <div class="h-8 w-px bg-gradient-to-b from-[var(--color-fg-subtle)] to-transparent"></div>
    </div>
</section>

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