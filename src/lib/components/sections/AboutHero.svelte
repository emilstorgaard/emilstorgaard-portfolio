<script lang="ts">
    import Container from '$lib/components/layout/Container.svelte';
    import Button from '$lib/components/ui/Button.svelte';
    import Icon from '$lib/components/ui/Icon.svelte';
    import Badge from '$lib/components/ui/Badge.svelte';
    import { tr, t } from '$lib/i18n';
    import type { About } from '$lib/content/types';

    let { about }: { about: About } = $props();
</script>

<section class="relative overflow-hidden pt-20 md:pt-28 pb-16">
    <!-- Background glow -->
    <div
        class="pointer-events-none absolute -top-40 right-0 h-[500px] w-[600px] opacity-30"
        style="background: radial-gradient(ellipse at center, var(--color-accent-subtle) 0%, transparent 60%);"
    ></div>

    <Container size="xl">
        <div class="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-start">
            <!-- Text side -->
            <div class="space-y-8">
                <div class="space-y-3 animate-fade-in-up" style="animation-delay: 0ms">
                    <div class="flex items-center gap-3">
                        <div class="h-px w-8 bg-[var(--color-accent)]"></div>
                        <span
                            class="font-mono text-xs uppercase tracking-wider text-[var(--color-accent)]"
                        >
                            {$t.nav.about}
                        </span>
                    </div>
                    <h1
                        class="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter leading-[0.95] text-gradient"
                    >
                        {about.name.split(' ').slice(0, 2).join(' ')}.
                    </h1>
                    <p class="text-xl md:text-2xl text-[var(--color-fg-muted)] font-light">
                        {tr(about.title)} · {about.location}
                    </p>
                </div>

                <div
                    class="prose prose-invert max-w-none text-[var(--color-fg-muted)] leading-relaxed space-y-4 animate-fade-in-up [&_p]:mb-4 [&_strong]:text-[var(--color-fg)] [&_strong]:font-medium"
                    style="animation-delay: 150ms"
                >
                    {@html tr(about.bio)}
                </div>

                <div
                    class="flex flex-wrap gap-3 pt-2 animate-fade-in-up"
                    style="animation-delay: 300ms"
                >
                    {#if about.cvUrl}
                        <Button href={about.cvUrl} size="lg" external>
                            Download CV
                            <Icon name="arrow-down" size={16} />
                        </Button>
                    {/if}
                    <Button href="/contact" size="lg" variant="secondary">
                        {$t.hero.ctaSecondary}
                        <Icon name="arrow-right" size={16} />
                    </Button>
                </div>
            </div>

            <!-- Info card -->
            <aside
                class="relative animate-fade-in-up lg:sticky lg:top-28"
                style="animation-delay: 200ms"
            >
                <div
                    class="relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6 md:p-8 space-y-6"
                >
                    <!-- Subtle pattern -->
                    <div
                        class="absolute inset-0 opacity-[0.03] pointer-events-none"
                        style="background-image: linear-gradient(var(--color-fg) 1px, transparent 1px), linear-gradient(90deg, var(--color-fg) 1px, transparent 1px); background-size: 30px 30px;"
                    ></div>

                    <!-- Photo (polaroid-style) or fallback avatar -->
                    <div class="relative flex items-start gap-4">
                        {#if about.photoUrl}
                            <div
                                class="relative shrink-0 group transition-transform duration-500 hover:rotate-0"
                                style="transform: rotate(-3deg);"
                            >
                                <!-- Soft shadow behind -->
                                <div
                                    class="absolute -inset-1 rounded-xl bg-black/40 blur-md pointer-events-none"
                                ></div>

                                <div
                                    class="relative h-24 w-20 md:h-28 md:w-24 overflow-hidden rounded-xl border border-[var(--color-border-strong)] bg-[var(--color-bg-subtle)]"
                                >
                                    <img
                                        src={about.photoUrl}
                                        alt={about.name}
                                        loading="eager"
                                        fetchpriority="high"
                                        class="h-full w-full object-cover"
                                    />
                                </div>
                            </div>
                        {:else}
                            <!-- Fallback initial avatar -->
                            <div
                                class="h-20 w-20 shrink-0 rounded-full bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-hover)] flex items-center justify-center text-3xl font-semibold text-white shadow-lg shadow-[var(--color-accent)]/20"
                            >
                                {about.name.charAt(0)}
                            </div>
                        {/if}

                        <div class="relative pt-2 space-y-1 min-w-0">
                            <div class="text-lg font-semibold text-[var(--color-fg)] leading-tight">
                                {about.name}
                            </div>
                            <div class="text-sm text-[var(--color-fg-muted)]">
                                {tr(about.title)}
                            </div>
                        </div>
                    </div>

                    <div class="relative space-y-3 pt-4 border-t border-[var(--color-border)]">
                        <div class="space-y-1">
                            <div
                                class="font-mono text-xs uppercase tracking-wider text-[var(--color-fg-subtle)]"
                            >
                                Location
                            </div>
                            <div class="text-sm text-[var(--color-fg)]">{about.location}</div>
                        </div>

                        <div class="space-y-1">
                            <div
                                class="font-mono text-xs uppercase tracking-wider text-[var(--color-fg-subtle)]"
                            >
                                Email
                            </div>
                            <a
                                href={`mailto:${about.email}`}
                                class="text-sm text-[var(--color-fg)] hover:text-[var(--color-accent)] transition-colors break-all"
                            >
                                {about.email}
                            </a>
                        </div>

                        {#if about.phone}
                            <div class="space-y-1">
                                <div
                                    class="font-mono text-xs uppercase tracking-wider text-[var(--color-fg-subtle)]"
                                >
                                    Phone
                                </div>
                                <a
                                    href={`tel:${about.phone.replace(/\s/g, '')}`}
                                    class="text-sm text-[var(--color-fg)] hover:text-[var(--color-accent)] transition-colors"
                                >
                                    {about.phone}
                                </a>
                            </div>
                        {/if}

                        <div class="space-y-2 pt-2">
                            <div
                                class="font-mono text-xs uppercase tracking-wider text-[var(--color-fg-subtle)]"
                            >
                                Status
                            </div>
                            <Badge variant="accent">
                                <span class="relative flex h-1.5 w-1.5">
                                    <span
                                        class="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping"
                                    ></span>
                                    <span
                                        class="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400"
                                    ></span>
                                </span>
                                {tr(about.availability)}
                            </Badge>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    </Container>
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