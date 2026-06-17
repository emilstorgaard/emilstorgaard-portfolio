import type { Experience } from '../types';

export const experiences: Experience[] = [
    {
        id: 'novicell',
        company: 'Novicell',
        title: {
            en: 'Backend Developer & Consultant',
            da: 'Backend-udvikler & Konsulent'
        },
        description: {
            en: `<p>Building and extending REST APIs and integrations for clients of all sizes — including international companies like Bosch. Primary focus on stable, scalable solutions for DynamicWeb-based webshops.</p><p>Working in Scrum with bi-weekly sprint reviews, planning, and retrospectives.</p>`,
            da: `<p>Bygger og udvider REST API'er og integrationer til kunder i alle størrelser — herunder internationale virksomheder som Bosch. Primært fokus på stabile, skalerbare løsninger til DynamicWeb-baserede webshops.</p><p>Arbejder i Scrum med sprint reviews, planning og retrospectives hver 14. dag.</p>`
        },
        startDate: '2024-09-01',
        location: 'Denmark',
        technologies: ['csharp', 'dotnet', 'sql', 'rest-api', 'dynamicweb', 'scrum']
    },
    {
        id: 'norlys',
        company: 'Norlys',
        title: {
            en: 'Computer Technician Apprentice (Programming)',
            da: 'Datateknikerelev med speciale i programmering'
        },
        description: {
            en: `<p>Completed my apprenticeship at Norlys (after Eniig merged with SE). Worked on SQL database design, API development for internal systems, and frontend development.</p>`,
            da: `<p>Færdiggjorde min uddannelse hos Norlys (efter Eniig fusionerede med SE). Arbejdede med SQL-databasedesign, API-udvikling til interne systemer og frontendudvikling.</p>`
        },
        startDate: '2022-09-01',
        endDate: '2024-08-31',
        technologies: ['csharp', 'dotnet', 'sql']
    },
    {
        id: 'eniig',
        company: 'Eniig',
        title: {
            en: 'Computer Technician Apprentice (Programming)',
            da: 'Datateknikerelev med speciale i programmering'
        },
        description: {
            en: `<p>Started my apprenticeship at Eniig, working on SQL database design and implementation, API development for internal systems, and frontend work for websites.</p>`,
            da: `<p>Startede min uddannelse hos Eniig. Arbejdede med design og programmering af SQL-databaser, API-udvikling til interne systemer og frontendudvikling til hjemmesider.</p>`
        },
        startDate: '2019-08-01',
        endDate: '2022-09-01',
        technologies: ['csharp', 'dotnet', 'sql']
    }
];