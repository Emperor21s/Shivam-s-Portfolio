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
        href: '/projects/kardia-repairs-installation',
        name: 'Kardia Repairs & Installation – Service Booking',
        focus: 'Freelance UX/UI Engagement',
        summary:
            'Designing responsive wireframes for Kardia’s Whirlpool-partnered service portal so customers can book repairs and installations with confidence.',
        detail:
            'Mobile- and desktop-first flows for service selection, scheduling, and technician coordination — actively evolving with developers as the app ships.',
        description:
            'Current freelance engagement: shaping the end-to-end booking experience for Kardia Repairs & Installation, aligning customer needs with Whirlpool partner requirements while pairing with developers to refine the live build.',
        hero: {
            role: 'Freelance UX/UI Designer',
            timeframe: 'Feb 2025 – Present',
            tools: ['Figma', 'Responsive wireframes', 'WCAG checklist'],
            team: 'Solo designer collaborating with Kardia stakeholders and developers'
        },
        overview: {
            challenge:
                'Customers needed a trustworthy way to request appliance service, understand coverage, and confirm technician visits without phone calls.',
            solution:
                'Built clear service menus, streamlined booking steps, and technician handoff screens that work across devices and highlight Whirlpool partnership trust signals; actively trimming non-essential visuals to speed delivery.',
            impact:
                'Wireframes accelerate stakeholder buy-in and will evolve into detailed mockups as we add more service categories, admin states, and developer feedback.'
        },
        mockups: [
            {
                title: 'Service landing and CTA',
                description: 'Home screen and hero CTA that frame the under-development booking experience.',
                image: '/images/kardia/Home.png'
            },
            {
                title: 'Service tiles and pricing clarity',
                description: 'Service cards, pricing, and quick starts tailored for Whirlpool’s repair and installation partnership.',
                image: '/images/kardia/Services.png'
            }
        ]
    },
    {
        href: '/projects/couples-app',
        name: 'Couples App – Onboarding & Journaling',
        focus: 'Freelance UI/UX Designer',
        summary:
            'Redesigned onboarding and journaling experiences for a couples communication app to improve activation and navigation clarity.',
        detail:
            'Created a scalable design system with cohesive color palettes, typography, icons, and reusable components while delivering guided prototypes.',
        description:
            'Freelance engagement focused on strengthening how couples onboard, journal, and navigate together. Built flows, mockups, and prototypes that keep both partners aligned.',
        links: [
            {
                label: 'View Figma case study',
                href: 'https://www.figma.com/design/94pnTwGINQfbz0gkJKJPZu/Couples-app?node-id=0-1&p=f&t=LJL1Ro3ga6bWdt6v-0',
                external: true
            }
        ],
        hero: {
            role: 'Freelance UI/UX Designer',
            timeframe: '2025 – Present',
            tools: ['Figma', 'Design system foundations', 'Prototyping'],
            team: 'Solo designer collaborating with founders and engineers'
        },
        overview: {
            challenge:
                'The product needed clearer onboarding, guided journaling, and cleaner navigation to keep couples engaged beyond the first week.',
            solution:
                'Mapped onboarding milestones, restructured journal prompts with emotional check-ins, and built reusable navigation and component patterns in Figma.',
            impact:
                'Early feedback shows higher activation and easier developer handoff thanks to organized system documentation and prototypes that mirror the build.'
        }
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
    }
];

export const getProjectByHref = (href) => projects.find((project) => project.href === href);
