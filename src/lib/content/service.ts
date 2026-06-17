import type { Project, Skill, Experience, About } from './types';
import { projects as localProjects } from './local/projects';
import { skills as localSkills } from './local/skills';
import { experiences as localExperiences } from './local/experiences';
import { about as localAbout } from './local/about';

/**
 * Content Service
 * 
 * Abstraktionslag mellem app og content source.
 * Lige nu læses fra lokale TS-filer.
 * Senere: skift implementering til Umbraco Delivery API.
 * 
 * Når vi skifter til Umbraco:
 * 1. Erstat funktionernes body med fetch-kald
 * 2. Map Umbraco-response til vores typer
 * 3. Tilføj caching (SvelteKit's built-in fetch caching virker fint)
 */

export async function getProjects(): Promise<Project[]> {
    return [...localProjects].sort((a, b) => a.order - b.order);
}

export async function getFeaturedProjects(): Promise<Project[]> {
    const all = await getProjects();
    return all.filter((p) => p.featured);
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
    return localProjects.find((p) => p.slug === slug) ?? null;
}

export async function getSkills(): Promise<Skill[]> {
    return localSkills;
}

export async function getSkillsByCategory(): Promise<Record<string, Skill[]>> {
    const all = await getSkills();
    return all.reduce(
        (acc, skill) => {
            (acc[skill.category] ||= []).push(skill);
            return acc;
        },
        {} as Record<string, Skill[]>
    );
}

export async function getExperiences(): Promise<Experience[]> {
    return [...localExperiences].sort(
        (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
    );
}

export async function getAbout(): Promise<About> {
    return localAbout;
}