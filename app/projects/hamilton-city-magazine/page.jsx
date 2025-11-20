import fs from 'fs';
import path from 'path';

import { notFound } from 'next/navigation';

import { getProjectByHref } from '@/data/projects';

import ProjectDetail from '../ProjectDetail';

const hamiltonWireframeStages = [
    {
        key: 'home',
        matchers: ['home'],
        title: 'Home and featured events',
        description: 'Author: Shivam Patel — Landing layout surfaces magazine features alongside live events.'
    },
    {
        key: 'category',
        matchers: ['category'],
        title: 'Category highlights',
        description: 'Author: Shivam Patel — Category cards spotlight themed roundups with quick-view imagery.'
    },
    {
        key: 'filters',
        matchers: ['filter', 'searchfilter'],
        title: 'Search and filters',
        description: 'Author: Shivam Patel — Combined search and filter controls keep date and location inputs within reach.'
    },
    {
        key: 'search-results',
        matchers: ['eventsearch', 'search', 'extendedsearchwithoutreload'],
        title: 'Search results',
        description: 'Author: Shivam Patel — Event results refresh in place with descriptive cards and save actions.'
    }
];

function loadHamiltonWireframes() {
    const directory = path.join(process.cwd(), 'public', 'images', 'hamiltoncitymagazine');
    if (!fs.existsSync(directory)) {
        return [];
    }

    const files = fs
        .readdirSync(directory)
        .filter((file) => /\.(png|jpe?g|svg|webp)$/i.test(file));

    return files
        .map((file) => {
            const filename = file.toLowerCase();
            const stage = hamiltonWireframeStages.find((option) => option.matchers.some((match) => filename.includes(match)));

            return {
                title: stage?.title ?? 'Interface mockup',
                description:
                    stage?.description ?? 'Author: Shivam Patel — Screen from the Hamilton City Magazine event exploration flow.',
                image: `/images/hamiltoncitymagazine/${encodeURIComponent(file)}`,
                orderIndex: stage ? hamiltonWireframeStages.indexOf(stage) : hamiltonWireframeStages.length
            };
        })
        .sort((a, b) => a.orderIndex - b.orderIndex || a.title.localeCompare(b.title));
}

export const metadata = {
    title: 'Hamilton City Magazine – Event Discovery · Case study'
};

export default function HamiltonCityMagazinePage() {
    const project = getProjectByHref('/projects/hamilton-city-magazine');
    const wireframes = loadHamiltonWireframes();

    if (!project) {
        notFound();
    }

    const wireframesNote =
        'Group project with 4 students; all interface captures authored by Shivam Patel to demonstrate the magazine experience.';

    return (
        <ProjectDetail
            project={project}
            wireframesHeading="Hamilton City Magazine flow"
            wireframesDescription="Responsive screens illustrate how readers browse events, refine results, and save listings on mobile."
            wireframesNote={wireframesNote}
            wireframes={wireframes}
        />
    );
}
