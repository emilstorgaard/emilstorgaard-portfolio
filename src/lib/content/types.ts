// Matcher Umbraco Delivery API's struktur så skift bliver smertefrit

export type Locale = 'en' | 'da';

export type LocalizedString = {
    en: string;
    da: string;
};

export type LocalizedRichText = {
    en: string; // HTML eller markdown
    da: string;
};

export type MediaItem = {
    url: string;
    alt: LocalizedString;
    width?: number;
    height?: number;
};

// --- Content Blocks (matcher Umbraco Block List) ---

export type ContentBlock =
    | TextBlock
    | ImageBlock
    | QuoteBlock
    | CodeBlock
    | GalleryBlock
    | MetricsBlock;

export type TextBlock = {
    type: 'text';
    id: string;
    heading?: LocalizedString;
    body: LocalizedRichText;
};

export type ImageBlock = {
    type: 'image';
    id: string;
    image: MediaItem;
    caption?: LocalizedString;
};

export type QuoteBlock = {
    type: 'quote';
    id: string;
    quote: LocalizedString;
    author?: string;
};

export type CodeBlock = {
    type: 'code';
    id: string;
    language: string;
    code: string;
    filename?: string;
};

export type GalleryBlock = {
    type: 'gallery';
    id: string;
    images: MediaItem[];
};

export type MetricsBlock = {
    type: 'metrics';
    id: string;
    metrics: Array<{
        label: LocalizedString;
        value: string;
    }>;
};

// --- Domain Models ---

export type Project = {
    id: string;
    slug: string;
    title: LocalizedString;
    tagline: LocalizedString;
    description: LocalizedRichText;
    thumbnail: MediaItem;
    coverImage?: MediaItem;
    technologies: string[]; // refs til Skill.id
    role: LocalizedString;
    year: number;
    liveUrl?: string;
    repoUrl?: string;
    featured: boolean;
    order: number;
    content: ContentBlock[]; // case study body
};

export type SkillCategory = 'language' | 'framework' | 'database' | 'tool' | 'platform' | 'methodology';

export type SkillLevel = 'daily' | 'experienced' | 'familiar';

export type Skill = {
    id: string;
    name: string;
    category: SkillCategory;
    level: SkillLevel;
    yearsOfExperience?: number;
    icon?: string; // Lucide-navn eller URL
};

export type Experience = {
    id: string;
    company: string;
    title: LocalizedString;
    description: LocalizedRichText;
    startDate: string; // ISO
    endDate?: string;  // ISO eller undefined hvis nuværende
    location?: string;
    technologies?: string[];
};

export type About = {
    name: string;
    title: LocalizedString;
    location: string;
    email: string;
    phone?: string;
    photoUrl?: string;        // ← TILFØJ DENNE
    bio: LocalizedRichText;
    shortBio: LocalizedString;
    availability: LocalizedString;
    social: {
        github?: string;
        linkedin?: string;
        twitter?: string;
    };
    cvUrl?: string;
};