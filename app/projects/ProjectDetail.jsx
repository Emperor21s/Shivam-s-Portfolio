import Image from 'next/image';
import Link from 'next/link';

export default function ProjectDetail({
    project,
    mockups = project.mockups ?? [],
    links = project.links ?? [],
    wireframesHeading,
    wireframesDescription,
    wireframesNote,
    wireframes = []
}) {
    return (
        <div className="space-y-16" id="project-details">
            <section className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)]/90 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.12)]">
                <div className="flex flex-wrap items-center justify-between gap-6">
                    <div className="space-y-3">
                        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--color-muted)]">{project.focus}</p>
                        <h1 className="text-3xl font-semibold text-[var(--color-heading)]">{project.name}</h1>
                        <p className="max-w-3xl text-base text-[var(--color-text)]/90">{project.description}</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-5 py-2 text-sm font-semibold text-[var(--color-heading)] transition hover:border-[var(--color-heading)] hover:text-[var(--color-heading)]"
                                target={link.external ? '_blank' : undefined}
                                rel={link.external ? 'noreferrer' : undefined}
                            >
                                {link.label}
                                {link.external ? '↗' : null}
                            </Link>
                        ))}
                        <Link
                            href="/#projects"
                            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-5 py-2 text-sm font-semibold text-[var(--color-heading)]"
                        >
                            ← Back to all projects
                        </Link>
                    </div>
                </div>
                <div className="mt-8 grid gap-4 text-sm text-[var(--color-text)]/80 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-elevated)]/60 p-4">
                        <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">Role</p>
                        <p className="mt-2 font-semibold text-[var(--color-heading)]">{project.hero.role}</p>
                    </div>
                    <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-elevated)]/60 p-4">
                        <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">Timeline</p>
                        <p className="mt-2 font-semibold text-[var(--color-heading)]">{project.hero.timeframe}</p>
                    </div>
                    <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-elevated)]/60 p-4">
                        <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">Team</p>
                        <p className="mt-2 font-semibold text-[var(--color-heading)]">{project.hero.team}</p>
                    </div>
                    <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-elevated)]/60 p-4">
                        <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">Tools</p>
                        <p className="mt-2 font-semibold text-[var(--color-heading)]">{project.hero.tools.join(', ')}</p>
                    </div>
                </div>
            </section>

            <section className="grid gap-6 rounded-3xl border border-[var(--color-border)] bg-[var(--color-elevated)]/40 p-6 lg:grid-cols-3">
                <div className="space-y-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--color-muted)]">Challenge</p>
                    <p className="text-base text-[var(--color-text)]/90">{project.overview.challenge}</p>
                </div>
                <div className="space-y-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--color-muted)]">Solution</p>
                    <p className="text-base text-[var(--color-text)]/90">{project.overview.solution}</p>
                </div>
                <div className="space-y-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--color-muted)]">Impact</p>
                    <p className="text-base text-[var(--color-text)]/90">{project.overview.impact}</p>
                </div>
            </section>

            {mockups.length > 0 && (
                <section className="space-y-8">
                    <div className="space-y-3">
                        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--color-muted)]">Mockups</p>
                        <h2 className="text-3xl font-semibold text-[var(--color-heading)]">Key interface moments</h2>
                        <p className="text-base text-[var(--color-text)]/90">
                            High-fidelity mockups illustrate the experience in desktop and mobile contexts while keeping accessibility
                            at the forefront.
                        </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                        {mockups.map((mockup) => (
                            <article key={mockup.title} className="space-y-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
                                <div className="relative h-64 w-full overflow-hidden rounded-xl bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900">
                                    <Image
                                        src={mockup.image}
                                        alt={mockup.title}
                                        fill
                                        sizes="(min-width: 768px) 50vw, 100vw"
                                        className="object-cover"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-semibold text-[var(--color-heading)]">{mockup.title}</h3>
                                    <p className="text-sm text-[var(--color-text)]/90">{mockup.description}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            )}

            {wireframes.length > 0 && (
                <section className="space-y-8">
                    <div className="space-y-3">
                        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--color-muted)]">Wireframes</p>
                        <h2 className="text-3xl font-semibold text-[var(--color-heading)]">{wireframesHeading}</h2>
                        <p className="text-base text-[var(--color-text)]/90">{wireframesDescription}</p>
                        {wireframesNote ? <p className="text-sm text-[var(--color-text)]/80">{wireframesNote}</p> : null}
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                        {wireframes.map((frame) => (
                            <article key={frame.image} className="space-y-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-elevated)]/60 p-4">
                                <div className="relative h-72 w-full overflow-hidden rounded-xl bg-[var(--color-surface)]">
                                    <Image
                                        src={frame.image}
                                        alt={frame.title}
                                        fill
                                        sizes="(min-width: 768px) 50vw, 100vw"
                                        className="object-contain"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-lg font-semibold text-[var(--color-heading)]">{frame.title}</h3>
                                    <p className="text-sm text-[var(--color-text)]/90">{frame.description}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
}
