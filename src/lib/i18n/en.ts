export const en = {
    nav: {
        home: 'Home',
        about: 'About',
        projects: 'Projects',
        contact: 'Contact'
    },
    hero: {
        greeting: 'Hi, I’m Emil',
        availability: 'Available for new projects',
        ctaPrimary: 'View my work',
        ctaSecondary: 'Get in touch'
    },
    sections: {
        featuredWork: 'Selected Work',
        featuredWorkSub: 'A few projects I’m proud of',
        skills: 'Skills & Tools',
        experience: 'Experience',
        viewAll: 'View all projects',
        viewCase: 'View case study',
        viewLive: 'Live site',
        viewCode: 'Source code'
    },
    skillLevel: {
        daily: 'Daily use',
        experienced: 'Experienced',
        familiar: 'Familiar with'
    },
    footer: {
        madeWith: 'Built with SvelteKit',
        rights: 'All rights reserved'
    },
    contact: {
        title: 'Let’s talk',
        subtitle: 'Have a project in mind or just want to chat?',
        name: 'Name',
        email: 'Email',
        subject: 'Subject',
        message: 'Message',
        send: 'Send message',
        sending: 'Sending...',
        success: 'Message sent! I’ll get back to you soon.',
        error: 'Something went wrong. Please try again or email me directly.',
        namePlaceholder: 'Your name',
        emailPlaceholder: 'you@example.com',
        subjectPlaceholder: 'What’s this about?',
        messagePlaceholder: 'Tell me about your project, idea, or question...',
        or: 'or'
    }
} as const;

export type Dictionary = typeof en;