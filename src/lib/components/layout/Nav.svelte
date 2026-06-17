<script lang="ts">
    import { page } from '$app/state';
    import { t } from '$lib/i18n';
    import { onMount } from 'svelte';
    import { cn } from '$lib/utils/cn';
    import LocaleToggle from '$lib/components/ui/LocaleToggle.svelte';
    import Container from './Container.svelte';
    import Icon from '$lib/components/ui/Icon.svelte';
	import Logo from '../ui/Logo.svelte';

    let scrolled = $state(false);
    let mobileOpen = $state(false);

    onMount(() => {
        const handleScroll = () => {
            scrolled = window.scrollY > 8;
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    });

    const links = $derived([
        { href: '/', label: $t.nav.home },
        { href: '/about', label: $t.nav.about },
        { href: '/projects', label: $t.nav.projects },
        { href: '/contact', label: $t.nav.contact }
    ]);

    function isActive(href: string) {
        if (href === '/') return page.url.pathname === '/';
        return page.url.pathname.startsWith(href);
    }

    $effect(() => {
        if (mobileOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
</script>

<header
    class={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        scrolled || mobileOpen
            ? 'bg-[var(--color-bg)]/80 backdrop-blur-xl border-b border-[var(--color-border)]'
            : 'border-b border-transparent'
    )}
>
    <Container size="xl">
        <nav class="flex items-center justify-between h-16 md:h-20">
            <!-- Logo -->
            <a
                href="/"
                class="group inline-flex items-center transition-opacity hover:opacity-90"
                onclick={() => (mobileOpen = false)}
                aria-label="Home"
            >
                <Logo variant="full" size="sm" />
            </a>

            <!-- Desktop nav -->
            <ul class="hidden md:flex items-center gap-1">
                {#each links as link (link.href)}
                    <li>
                        <a
                            href={link.href}
                            class={cn(
                                'relative px-3 py-2 text-sm transition-colors rounded-md',
                                isActive(link.href)
                                    ? 'text-[var(--color-fg)]'
                                    : 'text-[var(--color-fg-muted)] hover:text-[var(--color-fg)]'
                            )}
                        >
                            {link.label}
                            {#if isActive(link.href)}
                                <span
                                    class="absolute bottom-0 left-3 right-3 h-px bg-[var(--color-accent)]"
                                ></span>
                            {/if}
                        </a>
                    </li>
                {/each}
            </ul>

            <!-- Right side -->
            <div class="hidden md:flex items-center gap-3">
                <LocaleToggle />
            </div>

            <!-- Mobile menu button -->
            <button
                class="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md text-[var(--color-fg)] hover:bg-[var(--color-bg-elevated)] transition-colors"
                onclick={() => (mobileOpen = !mobileOpen)}
                aria-label="Toggle menu"
            >
                {#if mobileOpen}
                    <Icon name="close" size={20} />
                {:else}
                    <Icon name="menu" size={20} />
                {/if}
            </button>
        </nav>
    </Container>

    <!-- Mobile menu -->
    {#if mobileOpen}
        <div class="md:hidden border-t border-[var(--color-border)]">
            <Container size="xl">
                <ul class="py-6 flex flex-col gap-1">
                    {#each links as link (link.href)}
                        <li>
                            <a
                                href={link.href}
                                onclick={() => (mobileOpen = false)}
                                class={cn(
                                    'block px-3 py-3 text-base rounded-md transition-colors',
                                    isActive(link.href)
                                        ? 'text-[var(--color-fg)] bg-[var(--color-bg-elevated)]'
                                        : 'text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] hover:bg-[var(--color-bg-elevated)]'
                                )}
                            >
                                {link.label}
                            </a>
                        </li>
                    {/each}
                    <li class="pt-4 mt-2 border-t border-[var(--color-border)]">
                        <LocaleToggle />
                    </li>
                </ul>
            </Container>
        </div>
    {/if}
</header>