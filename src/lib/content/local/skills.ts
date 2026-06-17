import type { Skill } from '../types';

export const skills: Skill[] = [
    // Daily
    { id: 'csharp', name: 'C#', category: 'language', level: 'daily', yearsOfExperience: 5 },
    { id: 'dotnet', name: '.NET', category: 'framework', level: 'daily', yearsOfExperience: 5 },
    { id: 'sql', name: 'SQL', category: 'database', level: 'daily', yearsOfExperience: 5 },
    { id: 'typescript', name: 'TypeScript', category: 'language', level: 'daily' },
    { id: 'javascript', name: 'JavaScript', category: 'language', level: 'daily' },
    { id: 'git', name: 'Git', category: 'tool', level: 'daily' },
    { id: 'scrum', name: 'Scrum', category: 'methodology', level: 'daily' },
    { id: 'azure-devops', name: 'Azure DevOps', category: 'tool', level: 'daily' },

    // Experienced
    { id: 'svelte', name: 'Svelte / SvelteKit', category: 'framework', level: 'experienced' },
    { id: 'react', name: 'React', category: 'framework', level: 'experienced' },
    { id: 'nodejs', name: 'Node.js', category: 'platform', level: 'experienced' },
    { id: 'docker', name: 'Docker', category: 'tool', level: 'experienced' },
    { id: 'umbraco', name: 'Umbraco', category: 'platform', level: 'experienced' },
    { id: 'dynamicweb', name: 'DynamicWeb', category: 'platform', level: 'experienced' },
    { id: 'tailwind', name: 'TailwindCSS', category: 'framework', level: 'experienced' },
    { id: 'html', name: 'HTML', category: 'language', level: 'experienced' },
    { id: 'css', name: 'CSS', category: 'language', level: 'experienced' },
    { id: 'rest-api', name: 'REST APIs', category: 'methodology', level: 'experienced' },

    // Familiar
    { id: 'golang', name: 'Go', category: 'language', level: 'familiar' },
    { id: 'python', name: 'Python', category: 'language', level: 'familiar' }
];