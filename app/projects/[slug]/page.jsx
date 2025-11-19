import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProjectBySlug } from '../../../data/projects';

export async function generateMetadata({ params }) {
    const resolvedParams = await params;
    const project = getProjectBySlug(resolvedParams.slug);

    if (!project) {
        return { title: 'Project not found' };
    }

    return {
        title: `${project.name} • Shivam Patel`,
        description: project.summary
    };
}

export default async function ProjectDetailPage({ params }) {
    const resolvedParams = await params;
    const project = getProjectBySlug(resolvedParams.slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="space-y-12" id="project-detail">
            <header className="space-y-6 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)]/90 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.12)]">
                <div className="inline-flex items-center gap-3 rounded-full border border-[var(--color-border)] bg-[var(--color-elevated)]/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-[var(--color-muted)]">
                    <span>{project.focus}</span>
                    <span aria-hidden="true" className="text-[var(--color-accent)]">
                        •
                    </span>
                    <span>Case study</span>
                </div>
                <div className="space-y-4">
                    <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-muted)]">Project spotlight</p>
                    <h1 className="text-4xl font-semibold leading-tight text-[var(--color-heading)]">{project.name}</h1>
                    <p className="text-base text-[var(--color-text)]/90">{project.summary}</p>
                    <p className="text-base text-[var(--color-text)]/90">{project.detail}</p>
                </div>
                <div className="flex flex-wrap gap-4 text-sm">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 rounded-full bg-transparent px-5 py-2 font-semibold text-[var(--color-heading)] ring-1 ring-[var(--color-border)]"
                    >
                        ← Back to home
                    </Link>
                    <a
                        href="mailto:shivambpatel2121@gmail.com?subject=Project%20collaboration"
                        className="inline-flex items-center gap-2 rounded-full bg-[var(--color-heading)] px-5 py-2 font-semibold text-white"
                    >
                        Discuss this project
                    </a>
                </div>
            </header>

            <section className="space-y-6" id="project-description">
                <div className="space-y-2">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-muted)]">Description</p>
                    <h2 className="text-2xl font-semibold text-[var(--color-heading)]">How the solution came together</h2>
                </div>
                <div className="grid gap-4 text-base text-[var(--color-text)]/90 md:grid-cols-2">
                    {project.description.map((paragraph) => (
                        <article key={paragraph} className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-elevated)]/70 p-5">
                            {paragraph}
                        </article>
                    ))}
                </div>
            </section>

            <section className="space-y-6" id="project-mockups">
                <div className="space-y-2">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-muted)]">Mockups</p>
                    <h2 className="text-2xl font-semibold text-[var(--color-heading)]">Key UX explorations</h2>
                    <p className="text-base text-[var(--color-text)]/80">
                        Each mockup shows how usability findings translated into layouts and flows you can drop directly into implementation.
                    </p>
                </div>
                <div className="grid gap-5 md:grid-cols-3">
                    {project.mockups.map((mockup) => (
                        <article
                            key={mockup.title}
                            className="flex h-full flex-col gap-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/80 p-5"
                        >
                            <div className="flex h-40 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-elevated)]/80 to-[var(--color-accent)]/20 text-center text-sm text-[var(--color-heading)]">
                                {mockup.title}
                            </div>
                            <p className="text-sm text-[var(--color-text)]/90">{mockup.description}</p>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
}
