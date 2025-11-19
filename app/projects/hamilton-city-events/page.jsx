import { notFound } from 'next/navigation';

import { getProjectByHref } from '@/data/projects';

import ProjectDetail from '../ProjectDetail';

export const metadata = {
    title: 'Hamilton City Magazine Event Platform · Case study'
};

export default function HamiltonCityEventsPage() {
    const project = getProjectByHref('/projects/hamilton-city-events');
    if (!project) {
        notFound();
    }

    return <ProjectDetail project={project} />;
}
