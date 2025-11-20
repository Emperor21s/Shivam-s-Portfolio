export const projects = [
    {
        href: '/projects/ecommerce-experience',
        name: 'E-Commerce Web Application (Capstone Project)',
        focus: 'Full-stack capstone',
        summary:
            'Full-stack web app simulating an online retail store using Flask (Python) and React, with RESTful APIs and a MySQL database for accounts, product data, and orders.',
        detail:
            'Developed a rich UI/UX with React Router for seamless navigation, integrated Stripe API for secure payments, and used Selenium test scripts with TDD practices to ensure reliability.',
        description:
            'Capstone build focused on delivering a responsive shopping experience backed by RESTful endpoints, SQL data models, and tested payment flows.',
        hero: {
            role: 'Developer & UX lead',
            timeframe: 'Capstone project',
            tools: ['Flask', 'React', 'MySQL', 'Stripe', 'Selenium'],
            team: 'Solo project'
        },
        overview: {
            challenge:
                'Simulate an online retail store with responsive navigation and secure checkout backed by a Python and React stack.',
            solution:
                'Designed and implemented RESTful API endpoints, integrated MySQL for users, products, and orders, and paired the backend with React Router views.',
            impact:
                'Stripe-powered payments and Selenium-tested flows kept the experience reliable while supporting a smooth user journey.'
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
        focus: 'Freelance development & IT support',
        summary:
            'Leading the design and development of a customer booking web application with wireframes, interactive prototypes, and React front-end implementation.',
        detail:
            'Managing IT operations with structured digital workflows for ticketing, scheduling, parts procurement, and feedback tracking to reduce service delays.',
        description:
            'Collaborating daily with a small developer team to deliver a responsive, intuitive booking experience while improving technician response times through streamlined communication.',
        hero: {
            role: 'Freelance Software Developer & IT Support',
            timeframe: 'Feb 2025 – Present',
            tools: ['Figma', 'React', 'Digital workflows'],
            team: 'Collaborating with Kardia stakeholders and developers'
        },
        overview: {
            challenge:
                'Create a responsive booking flow for appliance repair and installation customers backed by Whirlpool partner requirements.',
            solution:
                'Produced wireframes and interactive prototypes, then led React front-end delivery while coordinating IT workflows across the service center.',
            impact:
                'Digital workflows improved efficiency and supported faster technician response times.'
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
        focus: 'Academic project',
        summary:
            'Collaborated in a team to build a centralized event listing platform for a local magazine with a responsive experience.',
        detail:
            'Led the UX design with Figma mock-ups, translating client requirements into intuitive interface layouts backed by a custom Flask + MySQL backend.',
        description:
            'Integrated a WordPress front-end via an AJAX-powered plugin for live search and filtering, streamlining event postings and improving user accessibility.',
        hero: {
            role: 'UX Designer & Front-end contributor',
            timeframe: 'Academic project',
            tools: ['Figma', 'Flask', 'MySQL', 'WordPress'],
            team: '4-student group project'
        },
        overview: {
            challenge:
                'Create a centralized event listing platform that keeps browsing simple for local readers.',
            solution:
                'Built Figma mock-ups and paired them with Flask + MySQL services and a WordPress plugin to provide live search and filtering.',
            impact:
                'The solution streamlined event postings and improved user accessibility for the magazine audience.'
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
