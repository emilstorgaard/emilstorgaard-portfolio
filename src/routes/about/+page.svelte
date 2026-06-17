<script lang="ts">
    import AboutHero from '$lib/components/sections/AboutHero.svelte';
    import ExperienceTimeline from '$lib/components/sections/ExperienceTimeline.svelte';
    import SkillsShowcase from '$lib/components/sections/SkillsShowcase.svelte';
    import Values from '$lib/components/sections/Values.svelte';
    import CTA from '$lib/components/sections/CTA.svelte';
	import Seo from '$lib/components/Seo.svelte';

    let { data } = $props();
</script>

<Seo
    title="About"
    description="Fullstack developer with 5+ years of experience in .NET, currently building scalable solutions at Novicell."
/>

<AboutHero about={data.about} />
<ExperienceTimeline experiences={data.experiences} skills={data.skills} />
<SkillsShowcase skills={data.skills} />
<Values />
<CTA />