<script lang="ts">
    import { page } from '$app/state';

    let {
        title,
        description,
        image = '/og-image.png',
        type = 'website'
    }: {
        title: string;
        description: string;
        image?: string;
        type?: 'website' | 'article';
    } = $props();

    const SITE_URL = 'https://emilstorgaard.dk';
    const SITE_NAME = 'Emil Storgaard Andersen';

    const fullTitle = $derived(
        title.includes(SITE_NAME) ? title : `${title} — ${SITE_NAME}`
    );
    const fullImage = $derived(image.startsWith('http') ? image : `${SITE_URL}${image}`);
    const url = $derived(`${SITE_URL}${page.url.pathname}`);
</script>

<svelte:head>
    <title>{fullTitle}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={url} />

    <!-- Open Graph -->
    <meta property="og:type" content={type} />
    <meta property="og:url" content={url} />
    <meta property="og:title" content={fullTitle} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={fullImage} />
    <meta property="og:site_name" content={SITE_NAME} />

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={fullTitle} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={fullImage} />

    <!-- Theme color -->
    <meta name="theme-color" content="#0a0a0b" />
</svelte:head>