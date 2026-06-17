<script lang="ts">
    import Container from './Container.svelte';
    import { t } from '$lib/i18n';
    import Icon from '$lib/components/ui/Icon.svelte';
    import { about } from '$lib/content/local/about';
	import Logo from '../ui/Logo.svelte';

    const year = new Date().getFullYear();
</script>

<footer class="relative mt-32 border-t border-[var(--color-border)]">
    <Container size="xl">
        <div class="py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
            <!-- Brand -->
            <div class="space-y-4">
                <a href="/" class="font-mono text-sm font-medium">
                    <span class="text-[var(--color-accent)]">~/</span>emil
                </a>
                <p class="text-sm text-[var(--color-fg-muted)] max-w-xs leading-relaxed">
                    Fullstack developer crafting reliable software for ambitious teams.
                </p>
            </div>

            <!-- Links -->
            <div class="grid grid-cols-2 gap-8">
                <div>
                    <h4
                        class="font-mono text-xs uppercase tracking-wider text-[var(--color-fg-subtle)] mb-4"
                    >
                        Navigation
                    </h4>
                    <ul class="space-y-2.5 text-sm">
                        <li>
                            <a href="/" class="text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] transition-colors">
                                {$t.nav.home}
                            </a>
                        </li>
                        <li>
                            <a href="/about" class="text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] transition-colors">
                                {$t.nav.about}
                            </a>
                        </li>
                        <li>
                            <a href="/projects" class="text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] transition-colors">
                                {$t.nav.projects}
                            </a>
                        </li>
                        <li>
                            <a href="/contact" class="text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] transition-colors">
                                {$t.nav.contact}
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4
                        class="font-mono text-xs uppercase tracking-wider text-[var(--color-fg-subtle)] mb-4"
                    >
                        Connect
                    </h4>
                    <ul class="space-y-2.5 text-sm">
                        {#if about.social.github}
                            <li>
                                <a
                                    href={about.social.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="inline-flex items-center gap-2 text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] transition-colors"
                                >
                                    <Icon name="github" size={14} /> GitHub
                                </a>
                            </li>
                        {/if}
                        {#if about.social.linkedin}
                            <li>
                                <a
                                    href={about.social.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="inline-flex items-center gap-2 text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] transition-colors"
                                >
                                    <Icon name="linkedin" size={14} /> LinkedIn
                                </a>
                            </li>
                        {/if}
                        <li>
                            <a
                                href={`mailto:${about.email}`}
                                class="inline-flex items-center gap-2 text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] transition-colors"
                            >
                                <Icon name="mail" size={14} /> Email
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Contact -->
            <div class="space-y-4">
                <h4 class="font-mono text-xs uppercase tracking-wider text-[var(--color-fg-subtle)]">
                    Get in touch
                </h4>
                <a href="/" class="group inline-flex items-center" aria-label="Home">
                    <Logo variant="full" size="sm" />
                </a>
                <p class="text-sm text-[var(--color-fg-muted)]">
                    {about.location}
                </p>
            </div>
        </div>

        <div
            class="py-6 border-t border-[var(--color-border)] flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-[var(--color-fg-subtle)]"
        >
            <p>© {year} {about.name}. {$t.footer.rights}.</p>
            <p class="font-mono">{$t.footer.madeWith}</p>
        </div>
    </Container>
</footer>