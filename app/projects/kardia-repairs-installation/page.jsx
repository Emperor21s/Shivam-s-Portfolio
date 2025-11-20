import fs from 'fs';
import path from 'path';

import { notFound } from 'next/navigation';

import { getProjectByHref } from '@/data/projects';

import ProjectDetail from '../ProjectDetail';

const kardiaWireframeStages = [
    {
        key: 'home',
        matchers: ['home', 'landing', 'cta'],
        title: 'Home and service hero',
        description: 'Landing screen with quick-start CTA and Whirlpool partner trust cues.'
    },
    {
        key: 'services',
        matchers: ['service', 'services', 'tiles'],
        title: 'Service selection',
        description: 'Grid of repair and installation options with pricing notes and filters.'
    },
    {
        key: 'booking',
        matchers: ['booking', 'appointment', 'form'],
        title: 'Booking details',
        description: 'Step-by-step form for appliance details, address, and preferred schedule.'
    },
    {
        key: 'confirmation',
        matchers: ['confirmation', 'review'],
        title: 'Review and confirmation',
        description: 'Appointment recap that highlights warranty coverage and next steps.'
    },
    {
        key: 'dashboard',
        matchers: ['dashboard', 'technician', 'queue'],
        title: 'Technician dashboard',
        description: 'Technician and admin views for upcoming visits and communication.'
    }
];

function loadKardiaWireframes() {
    const directory = path.join(process.cwd(), 'public', 'images', 'kardia');
    if (!fs.existsSync(directory)) {
        return [];
    }

    const files = fs
        .readdirSync(directory)
        .filter((file) => /\.(png|jpe?g|svg|webp)$/i.test(file));

    return files
        .map((file) => {
            const filename = file.toLowerCase();
            const stage = kardiaWireframeStages.find((option) => option.matchers.some((match) => filename.includes(match)));

            return {
                title: stage?.title ?? 'Kardia wireframe',
                description:
                    stage?.description ?? 'Screen from the Kardia Repairs & Installation booking and technician experience.',
                image: `/images/kardia/${encodeURIComponent(file)}`,
                orderIndex: stage ? kardiaWireframeStages.indexOf(stage) : kardiaWireframeStages.length
            };
        })
        .sort((a, b) => a.orderIndex - b.orderIndex || a.title.localeCompare(b.title));
}

export const metadata = {
    title: 'Kardia Repairs & Installation · Case study'
};

export default function KardiaRepairsInstallationPage() {
    const project = getProjectByHref('/projects/kardia-repairs-installation');
    const wireframes = loadKardiaWireframes();

    if (!project) {
        notFound();
    }

    const featuredMockups = wireframes.length > 0 ? wireframes.slice(0, 2) : project.mockups;
    const wireframesNote =
        'Freelance engagement for Kardia; more service categories, admin tools, and high-fidelity pages will be added soon.';

    return (
        <ProjectDetail
            project={project}
            mockups={featuredMockups}
            wireframesHeading="Kardia service booking flow"
            wireframesDescription="Wireframes outline how homeowners choose services, schedule visits, and confirm their appointment across devices."
            wireframesNote={wireframesNote}
            wireframes={wireframes}
        />
    );
}
