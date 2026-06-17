<script lang="ts">
    import Hero from '$lib/components/sections/Hero.svelte';
    import FeaturedProjects from '$lib/components/sections/FeaturedProjects.svelte';
    import TechStack from '$lib/components/sections/TechStack.svelte';
    import Highlights from '$lib/components/sections/Highlights.svelte';
    import CTA from '$lib/components/sections/CTA.svelte';
	import Seo from '$lib/components/Seo.svelte';

    let { data } = $props();
</script>

<Seo
    title="Emil Storgaard Andersen — Fullstack Developer"
    description="Fullstack developer specializing in .NET, building reliable software for ambitious teams."
/>

<Hero about={data.about} />
<FeaturedProjects projects={data.projects} skills={data.skills} />
<Highlights />
<TechStack skills={data.skills} />
<CTA />