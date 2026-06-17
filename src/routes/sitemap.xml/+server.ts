import { getProjects } from '$lib/content/service';
import type { RequestHandler } from './$types';

const SITE_URL = 'https://emilstorgaard.dk';

export const GET: RequestHandler = async () => {
    const projects = await getProjects();

    const pages = [
        { url: '/', priority: 1.0, changefreq: 'monthly' },
        { url: '/about', priority: 0.8, changefreq: 'monthly' },
        { url: '/projects', priority: 0.9, changefreq: 'monthly' },
        { url: '/contact', priority: 0.7, changefreq: 'yearly' }
    ];

    const projectPages = projects.map((p) => ({
        url: `/projects/${p.slug}`,
        priority: 0.6,
        changefreq: 'yearly' as const
    }));

    const all = [...pages, ...projectPages];
    const now = new Date().toISOString().split('T')[0];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${all
    .map(
        (p) => `	<url>
        <loc>${SITE_URL}${p.url}</loc>
        <lastmod>${now}</lastmod>
        <changefreq>${p.changefreq}</changefreq>
        <priority>${p.priority}</priority>
    </url>`
    )
    .join('\n')}
</urlset>`;

    return new Response(xml, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'public, max-age=3600'
        }
    });
};