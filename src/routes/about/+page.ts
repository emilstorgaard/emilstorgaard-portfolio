import { getAbout, getSkills, getExperiences } from '$lib/content/service';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
    const [about, skills, experiences] = await Promise.all([
        getAbout(),
        getSkills(),
        getExperiences()
    ]);

    return { about, skills, experiences };
};