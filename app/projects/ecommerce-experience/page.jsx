import fs from 'fs';
import path from 'path';

import { notFound } from 'next/navigation';

import { getProjectByHref } from '@/data/projects';

import ProjectDetail from '../ProjectDetail';

const ecommerceWireframeStages = [
    {
        key: 'sign-up',
        matchers: ['sign-up', 'signup', 'sign_up', 'register'],
        title: 'Sign up',
        description: 'Account creation entry point with minimal required fields and password helpers.'
    },
    {
        key: 'sign-in',
        matchers: ['sign-in', 'signin', 'sign_in', 'login'],
        title: 'Sign in',
        description: 'Returning shopper authentication with obvious password reset and single CTA placement.'
    },
    {
        key: 'home',
        matchers: ['home', 'landing'],
        title: 'Home',
        description: 'Landing feed that spotlights featured categories and search entry points.'
    },
    {
        key: 'catalog',
        matchers: ['catalog', 'listing', 'browse'],
        title: 'Product listing',
        description: 'Grid layout illustrating filter placement, product cards, and pagination controls.'
    },
    {
        key: 'product',
        matchers: ['product', 'detail', 'pdp'],
        title: 'Product detail',
        description: 'Detail page wireframe with gallery, variant selectors, and anchored add-to-cart.'
    },
    {
        key: 'cart',
        matchers: ['cart', 'bag', 'basket'],
        title: 'Cart',
        description: 'Cart summary showing editable quantities, savings messaging, and checkout CTA.'
    },
    {
        key: 'checkout',
        matchers: ['checkout', 'payment'],
        title: 'Checkout',
        description: 'Step-based checkout covering address, delivery, and payment confirmation.'
    }
];

function loadEcommerceWireframes() {
    const directory = path.join(process.cwd(), 'public', 'images', 'eccomerce');
    if (!fs.existsSync(directory)) {
        return [];
    }

    const files = fs
        .readdirSync(directory)
        .filter((file) => /\.(png|jpe?g|svg|webp)$/i.test(file));

    return files
        .map((file) => {
            const filename = file.toLowerCase();
            const stage = ecommerceWireframeStages.find((option) => option.matchers.some((match) => filename.includes(match)));

            return {
                title: stage?.title ?? 'Wireframe',
                description: stage?.description ?? 'Experience wireframe supporting the shopper journey.',
                image: `/images/eccomerce/${file}`,
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
    const wireframesNote =
        'Concept for a responsive clothing storefront with wishlists, customer authentication, and simple admin tools to maintain the catalog.';

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
