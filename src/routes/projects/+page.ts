import { getProjects, getSkills } from '$lib/content/service';
import type { PageLoad } from './[slug]/$types';

export const load: PageLoad = async () => {
    const [projects, skills] = await Promise.all([getProjects(), getSkills()]);
    return { projects, skills };
};