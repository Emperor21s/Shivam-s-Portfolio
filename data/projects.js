export const projects = [
    {
        href: '/projects/ecommerce-experience',
        name: 'E-Commerce Web Application (Capstone Project)',
        focus: 'UX & Front-end Focus',
        summary:
            'Led UI/UX design for a full-stack e-commerce site, defining navigation structure and page layouts (home, product listing, product detail, cart, checkout).',
        detail:
            'Created Figma prototypes and worked with the team to implement designs in React, focusing on responsive behavior, clear visual hierarchy, and a frictionless checkout flow.',
        description:
            'This capstone initiative aimed to deliver a responsive shopping experience for desktop and mobile. I facilitated design workshops, built component libraries, and paired with developers to convert prototypes into modular React views that met accessibility checkpoints.',
        hero: {
            role: 'Lead UX/UI Designer',
            timeframe: 'Jan – Apr 2024',
            tools: ['Figma', 'React', 'Storybook', 'WCAG checklist'],
            team: '5-person multidisciplinary team'
        },
        overview: {
            challenge:
                'Students and alumni needed an intuitive storefront to browse dozens of program-branded products without getting lost in cluttered navigation.',
            solution:
                'Designed progressive disclosure patterns, simplified the checkout path, and provided reusable card and banner components that rendered consistently in React.',
            impact:
                'Usability walkthroughs showed a 35% faster path to checkout and fewer clarifying questions during testing sessions.'
        },
        mockups: [
            {
                title: 'Home page',
                description: 'Landing experience highlighting featured items, calls to action, and quick category shortcuts.',
                image: '/images/ecommerce/Home%20Page.png'
            },
            {
                title: 'Item detail',
                description: 'Product detail template with full description, key specs, and add-to-cart controls.',
                image: '/images/ecommerce/itemdescription.png'
            },
            {
                title: 'Cart & checkout',
                description: 'Cart summary and checkout states showing totals, payment inputs, and confirmation.',
                image: '/images/ecommerce/Cart.png'
            }
        ]
    },
    {
        href: '/projects/hamilton-city-magazine',
        name: 'Hamilton City Magazine – Event Discovery',
        focus: 'Group UX Case Study',
        summary:
            'Co-led a 4-student group project to redesign Hamilton City Magazine’s digital event experience for faster discovery.',
        detail:
            'Owned the UI architecture, visual direction, and accessibility pass while collaborating with teammates on content sourcing and QA.',
        description:
            'We repositioned Hamilton City Magazine’s event hub to surface timely listings, smarter filters, and mobile-friendly cards that respect editorial photography.',
        hero: {
            role: 'Product Designer & Front-end Lead',
            timeframe: 'Jan – Apr 2024',
            tools: ['Figma', 'Next.js', 'Tailwind CSS', 'Notion'],
            team: '4-student group project'
        },
        overview: {
            challenge:
                'Readers struggled to locate relevant happenings because search, filters, and imagery were fragmented across pages.',
            solution:
                'Unified the experience into a single responsive flow with prominent categories, inline filters, and seamless search states.',
            impact:
                'Prototype reviews with peers showed clearer navigation, faster event saves, and consistent presentation of magazine photography.'
        },
        mockups: [
            {
                title: 'Homepage discovery',
                description:
                    'Author: Shivam Patel — Magazine landing balances featured events with quick-save controls and editorial highlights.',
                image: '/images/hamiltoncitymagazine/scaperhome.png'
            },
            {
                title: 'Category and filter system',
                description:
                    'Author: Shivam Patel — Category browsing and filter drawers keep listings responsive for mobile readers.',
                image: '/images/hamiltoncitymagazine/scapercategory.png'
            }
        ]
    },
    {
        href: '/projects/hamilton-city-events',
        name: 'Hamilton City Magazine Event Platform',
        focus: 'UX for Client’s Site',
        summary:
            'Designed a mobile-responsive event discovery experience for Hamilton City Magazine, from initial sketches to final UI.',
        detail:
            'Defined user journeys (discover events, filter by category/date, view details) and prepared wireframes and high-fidelity mockups in Figma.',
        description:
            'Hamilton City Magazine wanted a modern event discovery interface that reflected the city’s vibrancy. I partnered with their editorial team to surface real-time event content, created an icon system for categories, and prototyped swipe-friendly cards.',
        hero: {
            role: 'Product Designer',
            timeframe: 'Sep – Nov 2023',
            tools: ['Figma', 'Miro', 'After Effects'],
            team: 'Client stakeholders + 2 developers'
        },
        overview: {
            challenge:
                'Event seekers bounced because the existing list buried imagery and filters behind multiple taps.',
            solution:
                'Modernized the layout with immersive hero cards, inline filtering, and calendar snippets, ensuring WCAG AA contrast.',
            impact:
                'Client usability test recorded 3x faster discovery of relevant events and higher satisfaction with personalization controls.'
        },
        mockups: [
            {
                title: 'Mobile discovery feed',
                description: 'Edge-to-edge cards featuring cover photography, quick-save toggles, and prominent dates optimized for thumb reach.',
                image: '/images/projects/hcm-feed.svg'
            },
            {
                title: 'Filter controls',
                description: 'Overlay filter sheet with category chips, date pickers, and map previews for location-based browsing.',
                image: '/images/projects/hcm-filters.svg'
            }
        ]
    },
    {
        href: '/projects/hamilton-handoff',
        name: 'Hamilton City Magazine Event Platform – Handoff',
        focus: 'Collaboration',
        summary:
            'Collaborated with developers integrating a Flask backend and WordPress front-end, ensuring the final interface matched design intent and remained practical for the client to maintain.',
        detail:
            'Provided design support so the team could keep the user experience consistent while launching the production site.',
        description:
            'After the initial design sprint, I supported implementation by translating the design library into a living documentation hub, annotating edge cases, and coaching the client’s content authors.',
        hero: {
            role: 'Design-to-Dev Partner',
            timeframe: 'Nov – Dec 2023',
            tools: ['Figma', 'Confluence', 'Notion', 'Wave'],
            team: 'Shared services team + agency developers'
        },
        overview: {
            challenge:
                'The distributed build team needed clarity around responsive behavior, accessibility states, and content governance.',
            solution:
                'Produced annotated specs, screen recordings, and QA checklists that mapped to each backlog item.',
            impact:
                'Launch QA uncovered 40% fewer critical UI bugs compared to previous releases.'
        },
        mockups: [
            {
                title: 'Annotated hero component',
                description: 'Callouts describing spacing rules, font tokens, and breakpoint behavior for engineering.',
                image: '/images/projects/handoff-hero.svg'
            },
            {
                title: 'State documentation',
                description: 'Table of hover, focus, and error states for buttons, cards, and filter chips to support accessible theming.',
                image: '/images/projects/handoff-states.svg'
            }
        ]
    }
];

export const getProjectByHref = (href) => projects.find((project) => project.href === href);
