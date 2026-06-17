<script lang="ts">
	import './layout.css'; // TODO brug app.css
    import Nav from '$lib/components/layout/Nav.svelte';
    import Footer from '$lib/components/layout/Footer.svelte';
    import { onNavigate } from '$app/navigation';

    let { children } = $props();

    // View Transitions for smooth page changes
    onNavigate((navigation) => {
        if (!document.startViewTransition) return;
        return new Promise((resolve) => {
            document.startViewTransition(async () => {
                resolve();
                await navigation.complete;
            });
        });
    });
</script>

<svelte:head>
    <style>
        ::view-transition-old(root),
        ::view-transition-new(root) {
            animation-duration: 0.3s;
        }
    </style>
</svelte:head>

<div class="relative flex flex-col min-h-screen">
    <Nav />

    <main class="flex-1 pt-16 md:pt-20 relative z-10">
        {@render children()}
    </main>

    <Footer />
</div>