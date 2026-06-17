import { getFeaturedProjects, getSkills, getAbout } from '$lib/content/service';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
    const [projects, skills, about] = await Promise.all([
        getFeaturedProjects(),
        getSkills(),
        getAbout()
    ]);

    return {
        projects,
        skills,
        about
    };
};