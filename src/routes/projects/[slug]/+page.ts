import { getProjectBySlug, getSkills, getProjects } from '$lib/content/service';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
    const [project, skills, allProjects] = await Promise.all([
        getProjectBySlug(params.slug),
        getSkills(),
        getProjects()
    ]);

    if (!project) {
        throw error(404, 'Project not found');
    }

    // Find næste projekt for "next case" navigation
    const index = allProjects.findIndex((p) => p.id === project.id);
    const next = allProjects[(index + 1) % allProjects.length];

    return { project, skills, next };
};