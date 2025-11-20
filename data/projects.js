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
            'Mobile- and desktop-first flows for service selection, scheduling, and technician coordination — with more pages and details arriving soon.',
        description:
            'Current freelance engagement: shaping the end-to-end booking experience for Kardia Repairs & Installation, aligning customer needs with Whirlpool partner requirements while iterating quickly on feedback.',
        hero: {
            role: 'Freelance UX/UI Designer',
            timeframe: 'Feb 2025 – Present',
            tools: ['Figma', 'Responsive wireframes', 'WCAG checklist'],
            team: 'Solo designer collaborating with Kardia stakeholders'
        },
        overview: {
            challenge:
                'Customers needed a trustworthy way to request appliance service, understand coverage, and confirm technician visits without phone calls.',
            solution:
                'Built clear service menus, streamlined booking steps, and technician handoff screens that work across devices and highlight Whirlpool partnership trust signals.',
            impact:
                'Wireframes accelerate stakeholder buy-in and will evolve into detailed mockups as we add more service categories and admin states.'
        },
        mockups: [
            {
                title: 'Service landing and CTA',
                description: 'Hero and service tiles guide visitors to start a repair or installation request quickly.',
                image: '/images/kardia/kardia-home.svg'
            },
            {
                title: 'Booking and confirmation',
                description: 'Appointment, coverage, and confirmation steps keep customers informed before a technician arrives.',
                image: '/images/kardia/kardia-confirmation.svg'
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
];

export const getProjectByHref = (href) => projects.find((project) => project.href === href);
