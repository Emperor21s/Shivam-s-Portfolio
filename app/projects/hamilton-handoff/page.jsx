import { notFound } from 'next/navigation';

import { getProjectByHref } from '@/data/projects';

import ProjectDetail from '../ProjectDetail';

export const metadata = {
    title: 'Hamilton City Magazine Event Platform – Handoff · Case study'
};

export default function HamiltonHandoffPage() {
    const project = getProjectByHref('/projects/hamilton-handoff');
    if (!project) {
        notFound();
    }

    return <ProjectDetail project={project} />;
}
