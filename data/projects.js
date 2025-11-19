export const projects = [
    {
        slug: 'customer-booking-platform',
        name: 'Customer Booking Platform (In Progress)',
        focus: 'Full-Stack & UX',
        summary:
            'Designing and building a booking experience for a Whirlpool partner, pairing Figma prototypes with a React UI and coordinating REST API integrations.',
        detail:
            'Owns usability validation, accessibility audits, and front-end implementation to maintain consistent interactions across desktop and mobile views.',
        description: [
            'The project modernizes the analog booking process for a national service center by translating technician workflows into a mobile-first experience.',
            'Working directly with stakeholders to prioritize the MVP scope, validate copy, and ensure integrations match service availability rules.',
            'Delivered an interactive prototype that mirrors the production React build—making sprint demos and executive reviews concrete and measurable.'
        ],
        mockups: [
            {
                title: 'Booking flow wireframe',
                description: 'Mid-fidelity user flow that highlights progressive disclosure for customer details, appliance selection, and preferred appointment windows.'
            },
            {
                title: 'Technician dashboard',
                description: 'Desktop layout that blends calendar and ticket panes, ensuring dispatchers can reorder visits and trigger notifications in one view.'
            },
            {
                title: 'Responsive confirmation screen',
                description: 'Final screen illustrating error handling states, accessibility-compliant contrast, and confirmation CTAs for rescheduling or live chat.'
            }
        ]
    },
    {
        slug: 'ecommerce-web-application',
        name: 'E-Commerce Web Application (Capstone Project)',
        focus: 'Full-Stack Delivery',
        summary:
            'Built a simulated online retail experience with a Flask backend, React front-end, and MySQL database powering user accounts, products, and orders.',
        detail:
            'Designed RESTful endpoints, integrated Stripe for payments, and used Selenium + TDD to validate cart and checkout flows while refining the UI/UX in React Router.',
        description: [
            'Led a four-person team through weekly Agile ceremonies, ensuring API contracts, backlog prioritization, and testing milestones remained in sync.',
            'Implemented secure authentication and authorization layers so students could explore real-world flows like password resets and saved carts.',
            'Instrumented observability hooks that captured performance metrics, showcasing how latency budgets were met during demo day.'
        ],
        mockups: [
            {
                title: 'Product discovery grid',
                description: 'Card system with faceted filtering, hover interactions, and quick-add to cart controls used during user acceptance testing.'
            },
            {
                title: 'Checkout orchestration',
                description: 'Step-by-step checkout wizard mockup that maps directly to Flask routes and Stripe events.'
            },
            {
                title: 'Admin merchandising console',
                description: 'Dashboard design that lets operators upload assets, stage promotions, and monitor order health in near real time.'
            }
        ]
    },
    {
        slug: 'hamilton-city-magazine',
        name: 'Hamilton City Magazine Event Platform',
        focus: 'UX & Integration',
        summary:
            'Led UX design for a centralized event listing platform—translating client requirements into Figma mockups and intuitive navigation.',
        detail:
            'Integrated a custom Flask + MySQL backend with a WordPress front-end via an AJAX-powered plugin, enabling live search/filtering and improved accessibility.',
        description: [
            'Interviewed editorial staff to capture publishing workflows and map the user journey from submission to featured listing.',
            'Created a modular design system that allowed the team to theme seasonal campaigns without rebuilding templates.',
            'Documented the integration architecture so WordPress editors could fetch real-time data from the custom event API securely.'
        ],
        mockups: [
            {
                title: 'Event discovery homepage',
                description: 'Hero layout with featured events, category chips, and dynamic calendar callouts anchored to city happenings.'
            },
            {
                title: 'Submission form experience',
                description: 'Form mockup that introduces contextual helper text, inline validation, and responsive controls for mobile reporters.'
            },
            {
                title: 'Interactive event map',
                description: 'Map-first exploration mode blending filters with ARIA-compliant markers for screen reader parity.'
            }
        ]
    }
];

export function getProjectBySlug(slug) {
    return projects.find((project) => project.slug === slug);
}
