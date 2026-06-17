<script lang="ts">
    import Container from '$lib/components/layout/Container.svelte';
    import Section from '$lib/components/layout/Section.svelte';
    import ContactForm from '$lib/components/sections/ContactForm.svelte';
    import Icon from '$lib/components/ui/Icon.svelte';
    import { t, locale } from '$lib/i18n';
    import { reveal } from '$lib/utils/animations';
    import { about } from '$lib/content/local/about';
	import Seo from '$lib/components/Seo.svelte';

    let { form } = $props();
</script>

<Seo
    title="Contact"
    description="Let's talk about your project. Open to freelance work and new opportunities."
/>

<section class="relative overflow-hidden pt-20 md:pt-28 pb-12">
    <div
        class="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] opacity-30"
        style="background: radial-gradient(ellipse at center, var(--color-accent-subtle) 0%, transparent 60%);"
    ></div>

    <Container size="xl">
        <div class="space-y-4 max-w-3xl animate-fade-in-up">
            <div class="flex items-center gap-3">
                <div class="h-px w-8 bg-[var(--color-accent)]"></div>
                <span class="font-mono text-xs uppercase tracking-wider text-[var(--color-accent)]">
                    {$t.nav.contact}
                </span>
            </div>
            <h1
                class="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter leading-[0.95] text-gradient"
            >
                {$t.contact.title}
            </h1>
            <p class="text-lg md:text-xl text-[var(--color-fg-muted)] leading-relaxed max-w-2xl">
                {$t.contact.subtitle}
            </p>
        </div>
    </Container>
</section>

<Section class="!pt-8">
    <Container size="xl">
        <div class="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16">
            <!-- Form -->
            <div use:reveal>
                <ContactForm {form} />
            </div>

            <!-- Direct contact -->
            <aside class="space-y-6" use:reveal={{ delay: 150 }}>
                <div class="space-y-3">
                    <h2 class="text-xl font-semibold text-[var(--color-fg)]">
                        {$locale === 'da' ? 'Eller skriv direkte' : 'Or reach out directly'}
                    </h2>
                    <p class="text-sm text-[var(--color-fg-muted)] leading-relaxed">
                        {$locale === 'da'
                            ? 'Foretrækker du en anden kanal? Du kan altid fange mig her:'
                            : 'Prefer another channel? You can always catch me here:'}
                    </p>
                </div>

                <div class="space-y-3">
                    <a
                        href={`mailto:${about.email}`}
                        class="group flex items-center gap-4 p-4 rounded-lg bg-[var(--color-bg-elevated)] border border-[var(--color-border)] hover:border-[var(--color-border-strong)] transition-all"
                    >
                        <div
                            class="flex h-10 w-10 items-center justify-center rounded-md bg-[var(--color-bg-subtle)] text-[var(--color-fg-muted)] group-hover:text-[var(--color-accent)] transition-colors"
                        >
                            <Icon name="mail" size={18} />
                        </div>
                        <div class="flex-1 min-w-0">
                            <div class="font-mono text-xs uppercase tracking-wider text-[var(--color-fg-subtle)]">
                                Email
                            </div>
                            <div class="text-sm text-[var(--color-fg)] truncate">{about.email}</div>
                        </div>
                        <Icon
                            name="arrow-up-right"
                            size={16}
                            class="text-[var(--color-fg-subtle)] group-hover:text-[var(--color-fg)] transition-colors"
                        />
                    </a>

                    {#if about.phone}
                        <a
                            href={`tel:${about.phone.replace(/\s/g, '')}`}
                            class="group flex items-center gap-4 p-4 rounded-lg bg-[var(--color-bg-elevated)] border border-[var(--color-border)] hover:border-[var(--color-border-strong)] transition-all"
                        >
                            <div
                                class="flex h-10 w-10 items-center justify-center rounded-md bg-[var(--color-bg-subtle)] text-[var(--color-fg-muted)] group-hover:text-[var(--color-accent)] transition-colors font-mono text-sm font-semibold"
                            >
                                +45
                            </div>
                            <div class="flex-1 min-w-0">
                                <div class="font-mono text-xs uppercase tracking-wider text-[var(--color-fg-subtle)]">
                                    Phone
                                </div>
                                <div class="text-sm text-[var(--color-fg)] truncate">{about.phone}</div>
                            </div>
                            <Icon
                                name="arrow-up-right"
                                size={16}
                                class="text-[var(--color-fg-subtle)] group-hover:text-[var(--color-fg)] transition-colors"
                            />
                        </a>
                    {/if}

                    {#if about.social.linkedin}
                        <a
                            href={about.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            class="group flex items-center gap-4 p-4 rounded-lg bg-[var(--color-bg-elevated)] border border-[var(--color-border)] hover:border-[var(--color-border-strong)] transition-all"
                        >
                            <div
                                class="flex h-10 w-10 items-center justify-center rounded-md bg-[var(--color-bg-subtle)] text-[var(--color-fg-muted)] group-hover:text-[var(--color-accent)] transition-colors"
                            >
                                <Icon name="linkedin" size={18} />
                            </div>
                            <div class="flex-1 min-w-0">
                                <div class="font-mono text-xs uppercase tracking-wider text-[var(--color-fg-subtle)]">
                                    LinkedIn
                                </div>
                                <div class="text-sm text-[var(--color-fg)]">
                                    {$locale === 'da' ? 'Følg mig på LinkedIn' : 'Connect on LinkedIn'}
                                </div>
                            </div>
                            <Icon
                                name="arrow-up-right"
                                size={16}
                                class="text-[var(--color-fg-subtle)] group-hover:text-[var(--color-fg)] transition-colors"
                            />
                        </a>
                    {/if}

                    {#if about.social.github}
                        <a
                            href={about.social.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            class="group flex items-center gap-4 p-4 rounded-lg bg-[var(--color-bg-elevated)] border border-[var(--color-border)] hover:border-[var(--color-border-strong)] transition-all"
                        >
                            <div
                                class="flex h-10 w-10 items-center justify-center rounded-md bg-[var(--color-bg-subtle)] text-[var(--color-fg-muted)] group-hover:text-[var(--color-accent)] transition-colors"
                            >
                                <Icon name="github" size={18} />
                            </div>
                            <div class="flex-1 min-w-0">
                                <div class="font-mono text-xs uppercase tracking-wider text-[var(--color-fg-subtle)]">
                                    GitHub
                                </div>
                                <div class="text-sm text-[var(--color-fg)]">
                                    {$locale === 'da' ? 'Se min kode' : 'See my code'}
                                </div>
                            </div>
                            <Icon
                                name="arrow-up-right"
                                size={16}
                                class="text-[var(--color-fg-subtle)] group-hover:text-[var(--color-fg)] transition-colors"
                            />
                        </a>
                    {/if}
                </div>

                <!-- Response time -->
                <div
                    class="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-subtle)] p-4 space-y-1"
                >
                    <div class="flex items-center gap-2">
                        <span class="relative flex h-2 w-2">
                            <span class="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping"></span>
                            <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                        </span>
                        <span class="font-mono text-xs uppercase tracking-wider text-[var(--color-fg)]">
                            {$locale === 'da' ? 'Hurtigt svar' : 'Quick response'}
                        </span>
                    </div>
                    <p class="text-sm text-[var(--color-fg-muted)] leading-relaxed">
                        {$locale === 'da'
                            ? 'Jeg svarer typisk inden for 24 timer.'
                            : 'I typically respond within 24 hours.'}
                    </p>
                </div>
            </aside>
        </div>
    </Container>
</Section>

<style>
    @keyframes fade-in-up {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in-up {
        opacity: 0;
        animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
</style>