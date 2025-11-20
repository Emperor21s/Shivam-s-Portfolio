import fs from 'fs';
import path from 'path';

import { notFound } from 'next/navigation';

import { getProjectByHref } from '@/data/projects';

import ProjectDetail from '../ProjectDetail';

const ecommerceWireframeStages = [
    {
        key: 'sign-up',
        matchers: ['sign-up', 'signup', 'sign_up', 'register', 'sign up'],
        title: 'Sign up',
        description: 'Account creation with required profile fields so shoppers can authenticate and save activity.'
    },
    {
        key: 'home',
        matchers: ['home page', 'homepage', 'home'],
        title: 'Home',
        description: 'Landing feed surfacing featured items, quick search, and clear category entry points.'
    },
    {
        key: 'search',
        matchers: ['search', 'searchreport'],
        title: 'Search and insights',
        description: 'Search results paired with quick filters and reporting shortcuts for admins.'
    },
    {
        key: 'product',
        matchers: ['itemdescription', 'item description', 'itemdescription (2)', 'detailscrud'],
        title: 'Item detail',
        description: 'Detailed product page with imagery, specs, and clear add-to-cart actions.'
    },
    {
        key: 'catalog',
        matchers: ['items', 'category', 'crud', 'add-update', 'itemdropdown'],
        title: 'Inventory management',
        description: 'Admin tooling to add, update, categorize, and review inventory items.'
    },
    {
        key: 'cart',
        matchers: ['cart', 'multipleitemscart'],
        title: 'Cart',
        description: 'Cart summary with item quantities, totals, and next-step prompts.'
    },
    {
        key: 'payment',
        matchers: ['payment', 'checkout'],
        title: 'Checkout',
        description: 'Payment confirmation with billing details and order overview.'
    },
    {
        key: 'orders',
        matchers: ['orders'],
        title: 'Orders',
        description: 'Order management screen showing statuses and fulfillment actions.'
    },
    {
        key: 'sales',
        matchers: ['sales', 'salespage'],
        title: 'Sales dashboards',
        description: 'Sales snapshots highlighting revenue, top products, and trends.'
    },
    {
        key: 'reports',
        matchers: ['reports', 'reportshomepage'],
        title: 'Reports',
        description: 'Report library for drilling into purchase patterns and inventory health.'
    },
    {
        key: 'profile',
        matchers: ['userprofile', 'profile'],
        title: 'User profile',
        description: 'Profile screen summarizing saved details, addresses, and preferences.'
    },
    {
        key: 'admin-home',
        matchers: ['admin homepage', 'adminhomepage'],
        title: 'Admin home',
        description: 'Admin landing page spotlighting shortcuts to catalog, orders, and analytics.'
    }
];

function loadEcommerceWireframes() {
    const directory = path.join(process.cwd(), 'public', 'images', 'ecommerce');
    if (!fs.existsSync(directory)) {
        return [];
    }

    const files = fs
        .readdirSync(directory)
        .filter((file) => /\.(png|jpe?g|svg|webp)$/i.test(file));

    return files
        .filter((file) => !file.toLowerCase().includes('erd'))
        .map((file) => {
            const filename = file.toLowerCase();
            const stage = ecommerceWireframeStages.find((option) => option.matchers.some((match) => filename.includes(match)));

            return {
                title: stage?.title ?? 'Wireframe',
                description: stage?.description ?? 'Experience wireframe supporting the shopper journey.',
                image: `/images/ecommerce/${encodeURIComponent(file)}`,
                orderIndex: stage ? ecommerceWireframeStages.indexOf(stage) : ecommerceWireframeStages.length
            };
        })
        .sort((a, b) => a.orderIndex - b.orderIndex || a.title.localeCompare(b.title));
}

export const metadata = {
    title: 'E-Commerce Web Application (Capstone Project) · Case study'
};

export default function EcommerceExperiencePage() {
    const project = getProjectByHref('/projects/ecommerce-experience');
    const wireframes = loadEcommerceWireframes();
    if (!project) {
        notFound();
    }
    const wireframesNote = 'Screens captured from the live JSX pages that power the storefront and admin experience.';

    return (
        <ProjectDetail
            project={project}
            wireframesHeading="E-commerce capstone flow"
            wireframesDescription="Ordered low-fidelity screens walk through the shopper journey from sign up to checkout, highlighting key interaction points."
            wireframesNote={wireframesNote}
            wireframes={wireframes}
        />
    );
}
