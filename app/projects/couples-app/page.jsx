import { notFound } from 'next/navigation';

import { getProjectByHref } from '@/data/projects';

import ProjectDetail from '../ProjectDetail';

export const metadata = {
    title: 'Couples App – Onboarding & Journaling · Case study'
};

export default function CouplesAppPage() {
    const project = getProjectByHref('/projects/couples-app');

    if (!project) {
        notFound();
    }

    return <ProjectDetail project={project} />;
}
