import type { Project } from '../types';

export const projects: Project[] = [
    {
        id: 'proteinpro',
        slug: 'proteinpro',
        title: { en: 'ProteinPro.dk', da: 'ProteinPro.dk' },
        tagline: {
            en: 'Affiliate platform helping Danes find the right protein products',
            da: 'Affiliate-platform der hjælper danskere med at finde de rette proteinprodukter'
        },
        description: {
            en: '<p>A content-driven affiliate website where users can compare protein products from multiple Danish retailers. Built from the ground up with a focus on SEO, performance, and a clean user experience.</p>',
            da: '<p>En content-drevet affiliate-hjemmeside hvor brugere kan sammenligne proteinprodukter fra flere danske forhandlere. Bygget fra bunden med fokus på SEO, performance og en ren brugeroplevelse.</p>'
        },
        thumbnail: {
            url: '/projects/proteinpro/thumb.png',
            alt: { en: 'ProteinPro homepage', da: 'ProteinPro forside' }
        },
        coverImage: {
            url: '/projects/proteinpro/cover.png',
            alt: { en: 'ProteinPro homepage hero', da: 'ProteinPro forside hero' }
        },
        technologies: ['svelte', 'typescript', 'tailwind', 'nodejs'],
        role: {
            en: 'Solo developer — design, development, and launch',
            da: 'Solo udvikler — design, udvikling og lancering'
        },
        year: 2024,
        liveUrl: 'https://proteinpro.dk',
        featured: true,
        order: 1,
        content: [
            {
                type: 'text',
                id: 'pp-intro',
                heading: { en: 'The challenge', da: 'Udfordringen' },
                body: {
                    en: '<p>The Danish protein market is fragmented across multiple retailers, each with different prices, product lines, and quality. Consumers struggle to find the best deals without spending hours comparing products manually.</p><p>ProteinPro.dk was built to solve this — a single destination where users can discover, compare, and choose protein products that fit their needs and budget.</p>',
                    da: '<p>Det danske proteinmarked er fragmenteret på tværs af flere forhandlere, hver med forskellige priser, produktlinjer og kvalitet. Forbrugere kæmper med at finde de bedste tilbud uden at bruge timer på manuelt at sammenligne produkter.</p><p>ProteinPro.dk blev bygget til at løse dette — én destination hvor brugere kan opdage, sammenligne og vælge proteinprodukter der passer til deres behov og budget.</p>'
                }
            },
            {
                type: 'image',
                id: 'pp-img-homepage',
                image: {
                    url: '/projects/proteinpro/screenshot-homepage.png',
                    alt: {
                        en: 'ProteinPro homepage with featured products and categories',
                        da: 'ProteinPro forside med fremhævede produkter og kategorier'
                    }
                },
                caption: {
                    en: 'The homepage greets users with curated products and clear category navigation',
                    da: 'Forsiden møder brugerne med kurerede produkter og tydelig kategori-navigation'
                }
            },
            {
                type: 'metrics',
                id: 'pp-metrics',
                metrics: [
                    { label: { en: 'Pages', da: 'Sider' }, value: '50+' },
                    { label: { en: 'Load time', da: 'Load-tid' }, value: '< 1s' },
                    { label: { en: 'Lighthouse', da: 'Lighthouse' }, value: '95+' }
                ]
            },
            {
                type: 'text',
                id: 'pp-approach',
                heading: { en: 'Approach', da: 'Tilgang' },
                body: {
                    en: '<p>Built with SvelteKit for blazing-fast performance and excellent SEO out of the box. Static site generation ensures pages load instantly, while the clean component architecture makes it easy to add new product categories and reviews.</p><p>Tailwind CSS allowed for rapid iteration on the design without sacrificing consistency, and the entire site is fully responsive across all devices.</p>',
                    da: '<p>Bygget med SvelteKit for lynhurtig performance og fremragende SEO. Static site generation sikrer at sider loader øjeblikkeligt, mens den rene komponent-arkitektur gør det nemt at tilføje nye produktkategorier og anmeldelser.</p><p>Tailwind CSS gjorde det muligt hurtigt at iterere på designet uden at gå på kompromis med konsistensen, og hele siden er fuldt responsiv på tværs af alle enheder.</p>'
                }
            },
            {
                type: 'gallery',
                id: 'pp-gallery',
                images: [
                    {
                        url: '/projects/proteinpro/screenshot-product.png',
                        alt: {
                            en: 'Product listing page with filters',
                            da: 'Produktoversigt med filtre'
                        }
                    },
                    {
                        url: '/projects/proteinpro/screenshot-detail.png',
                        alt: {
                            en: 'Product detail page with comparison',
                            da: 'Produktdetaljeside med sammenligning'
                        }
                    }
                ]
            },
            {
                type: 'text',
                id: 'pp-outcome',
                heading: { en: 'The result', da: 'Resultatet' },
                body: {
                    en: '<p>A fast, SEO-friendly affiliate platform that gives Danish consumers a single place to make informed decisions about protein products. The clean architecture makes it easy to scale as the catalog grows.</p>',
                    da: '<p>En hurtig, SEO-venlig affiliate-platform der giver danske forbrugere ét sted at træffe informerede beslutninger om proteinprodukter. Den rene arkitektur gør det nemt at skalere efterhånden som kataloget vokser.</p>'
                }
            }
        ]
    },
    {
        id: 'childcare',
        slug: 'private-childcare',
        title: {
            en: 'Private Childcare Website',
            da: 'Privat Børnepasser'
        },
        tagline: {
            en: 'Headless CMS-powered website for a private childcare provider',
            da: 'Headless CMS-drevet hjemmeside til en privat børnepasser'
        },
        description: {
            en: '<p>A professional website for a private childcare provider, built with SvelteKit and Umbraco Headless. Designed to be welcoming, informative, and easy for the owner to maintain.</p>',
            da: '<p>En professionel hjemmeside til en privat børnepasser, bygget med SvelteKit og Umbraco Headless. Designet til at være indbydende, informativt og nemt for ejeren at vedligeholde.</p>'
        },
        thumbnail: {
            url: '/projects/childcare/thumb.png',
            alt: { en: 'Childcare website', da: 'Børnepasser hjemmeside' }
        },
        coverImage: {
            url: '/projects/childcare/cover.png',
            alt: { en: 'Childcare website hero', da: 'Børnepasser hjemmeside hero' }
        },
        technologies: ['svelte', 'typescript', 'tailwind', 'umbraco', 'csharp'],
        role: {
            en: 'Solo developer — full-stack development and CMS setup',
            da: 'Solo udvikler — full-stack udvikling og CMS-opsætning'
        },
        year: 2024,
        liveUrl: 'https://elineskrudtugler.dk',
        featured: true,
        order: 2,
        content: [
            {
                type: 'text',
                id: 'cc-intro',
                heading: { en: 'The brief', da: 'Briefen' },
                body: {
                    en: '<p>A private childcare provider needed a professional online presence to attract new families. The site had to be warm and trustworthy, clearly communicate the services offered, and be easy to update without technical knowledge.</p>',
                    da: '<p>En privat børnepasser havde brug for en professionel online tilstedeværelse for at tiltrække nye familier. Siden skulle være varm og troværdig, tydeligt kommunikere de tilbudte ydelser, og være nem at opdatere uden teknisk viden.</p>'
                }
            },
            {
                type: 'image',
                id: 'cc-img-homepage',
                image: {
                    url: '/projects/childcare/screenshot-homepage.png',
                    alt: {
                        en: 'Childcare website homepage',
                        da: 'Børnepasser hjemmeside forside'
                    }
                },
                caption: {
                    en: 'A warm and inviting homepage built to earn parents’ trust at first glance',
                    da: 'En varm og indbydende forside bygget til at vinde forældres tillid ved første blik'
                }
            },
            {
                type: 'text',
                id: 'cc-stack',
                heading: { en: 'Why headless?', da: 'Hvorfor headless?' },
                body: {
                    en: '<p>I chose Umbraco Headless as the CMS for several reasons: it’s built on .NET (my home turf), has a friendly editor experience, and exposes content via a clean Delivery API. SvelteKit handles the frontend, fetching content at build time and runtime as needed.</p><p>This separation means the site is blazingly fast, scales effortlessly, and the owner can update content from anywhere without ever touching code.</p>',
                    da: '<p>Jeg valgte Umbraco Headless som CMS af flere grunde: det er bygget på .NET (min hjemmebane), har en venlig editor-oplevelse, og eksponerer content via et rent Delivery API. SvelteKit håndterer frontenden, og henter content ved build-tid og runtime efter behov.</p><p>Denne adskillelse betyder at siden er lynhurtig, skalerer ubesværet, og at ejeren kan opdatere content fra hvor som helst uden nogensinde at røre kode.</p>'
                }
            },
            {
                type: 'metrics',
                id: 'cc-metrics',
                metrics: [
                    { label: { en: 'Headless CMS', da: 'Headless CMS' }, value: 'Umbraco' },
                    { label: { en: 'Architecture', da: 'Arkitektur' }, value: 'JAMstack' },
                    { label: { en: 'Maintainable', da: 'Vedligeholdbar' }, value: '100%' }
                ]
            },
            {
                type: 'image',
                id: 'cc-img-cms',
                image: {
                    url: '/projects/childcare/screenshot-cms.png',
                    alt: {
                        en: 'Umbraco backend editing interface',
                        da: 'Umbraco backend redigeringsinterface'
                    }
                },
                caption: {
                    en: 'The Umbraco backend gives the owner full control without touching code',
                    da: 'Umbraco-backenden giver ejeren fuld kontrol uden at røre kode'
                }
            },
            {
                type: 'text',
                id: 'cc-outcome',
                heading: { en: 'The result', da: 'Resultatet' },
                body: {
                    en: '<p>A welcoming, professional website that puts the owner in full control of the content. The headless architecture means the site stays fast, secure, and ready to grow as the business expands.</p>',
                    da: '<p>En indbydende, professionel hjemmeside der giver ejeren fuld kontrol over indholdet. Den headless arkitektur betyder at siden forbliver hurtig, sikker og klar til at vokse i takt med forretningen.</p>'
                }
            }
        ]
    },
    {
        id: 'musicplayer',
        slug: 'music-player',
        title: { en: 'Music Player', da: 'Musikafspiller' },
        tagline: {
            en: 'Custom-built music player web application',
            da: 'Custom-bygget musikafspiller webapp'
        },
        description: {
            en: '<p>A side project exploring the Web Audio API and modern web app patterns. Features a clean interface, playlist management, and smooth audio playback.</p>',
            da: '<p>Et sideprojekt der udforsker Web Audio API og moderne webapp-mønstre. Indeholder en ren brugerflade, playlist-håndtering og smooth audio-afspilning.</p>'
        },
        thumbnail: {
            url: '/projects/musicplayer/thumb.png',
            alt: { en: 'Music Player', da: 'Musikafspiller' }
        },
        coverImage: {
            url: '/projects/musicplayer/cover.png',
            alt: { en: 'Music Player', da: 'Musikafspiller' }
        },
        technologies: ['svelte', 'typescript', 'nodejs'],
        role: {
            en: 'Solo developer — passion project',
            da: 'Solo udvikler — passionsprojekt'
        },
        year: 2023,
        liveUrl: 'https://musik.emilstorgaard.dk',
        featured: true,
        order: 3,
        content: [
            {
                type: 'text',
                id: 'mp-intro',
                heading: { en: 'Why build a music player?', da: 'Hvorfor bygge en musikafspiller?' },
                body: {
                    en: '<p>I wanted to deepen my understanding of the Web Audio API and explore how to build a polished, app-like experience in the browser. Building a music player touches on many interesting problems: state management, audio buffering, UI responsiveness, and persistence.</p>',
                    da: '<p>Jeg ville fordybe mig i Web Audio API og udforske hvordan man bygger en poleret, app-lignende oplevelse i browseren. At bygge en musikafspiller berører mange interessante problemer: state management, audio buffering, UI-responsivitet og persistens.</p>'
                }
            },
            {
                type: 'image',
                id: 'mp-img-player',
                image: {
                    url: '/projects/musicplayer/screenshot-player.png',
                    alt: {
                        en: 'Music player interface with active playback',
                        da: 'Musikafspiller-interface med aktiv afspilning'
                    }
                },
                caption: {
                    en: 'A focused player UI built around the listening experience',
                    da: 'En fokuseret afspiller-UI bygget omkring lytte-oplevelsen'
                }
            },
            {
                type: 'gallery',
                id: 'mp-gallery',
                images: [
                    {
                        url: '/projects/musicplayer/screenshot-upload.png',
                        alt: {
                            en: 'Upload song',
                            da: 'Upload sang'
                        }
                    },
                    {
                        url: '/projects/musicplayer/screenshot-search.png',
                        alt: {
                            en: 'Music library overview',
                            da: 'Musikbibliotek-oversigt'
                        }
                    }
                ]
            },
            {
                type: 'text',
                id: 'mp-learnings',
                heading: { en: 'Key takeaways', da: 'Vigtige læringer' },
                body: {
                    en: '<p>This project sharpened my skills in reactive state management with Svelte stores, working with browser APIs, and crafting smooth, performant UI animations. It’s a reminder that side projects are some of the best ways to learn — no client constraints, just curiosity.</p>',
                    da: '<p>Dette projekt skærpede mine færdigheder i reactive state management med Svelte stores, arbejdet med browser-API’er, og at skabe smooth, performante UI-animationer. Det er en påmindelse om at sideprojekter er nogle af de bedste måder at lære på — ingen kundekrav, bare nysgerrighed.</p>'
                }
            }
        ]
    }
];