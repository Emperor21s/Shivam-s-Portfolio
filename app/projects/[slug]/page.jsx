import fs from 'fs';
import path from 'path';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProject, projects } from '@/data/projects';

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
    const directory = path.join(process.cwd(), 'public', 'images', 'ecoomerce');
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
                image: `/images/ecoomerce/${file}`,
                orderIndex: stage ? ecommerceWireframeStages.indexOf(stage) : ecommerceWireframeStages.length
            };
        })
        .sort((a, b) => a.orderIndex - b.orderIndex || a.title.localeCompare(b.title));
}

export function generateStaticParams() {
    return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const project = getProject(slug);
    return {
        title: project ? `${project.name} · Case study` : 'Project details'
    };
}

export default async function ProjectDetailPage({ params }) {
    const { slug } = await params;
    const project = getProject(slug);
    const wireframes = slug === 'ecommerce-experience' ? loadEcommerceWireframes() : [];

    if (!project) {
        notFound();
    }

    return (
        <div className="space-y-16" id="project-details">
            <section className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)]/90 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.12)]">
                <div className="flex flex-wrap items-center justify-between gap-6">
                    <div className="space-y-3">
                        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--color-muted)]">{project.focus}</p>
                        <h1 className="text-3xl font-semibold text-[var(--color-heading)]">{project.name}</h1>
                        <p className="max-w-3xl text-base text-[var(--color-text)]/90">{project.description}</p>
                    </div>
                    <Link
                        href="/#projects"
                        className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-5 py-2 text-sm font-semibold text-[var(--color-heading)]"
                    >
                        ← Back to all projects
                    </Link>
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
                    {project.mockups.map((mockup) => (
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

            {wireframes.length > 0 && (
                <section className="space-y-8">
                    <div className="space-y-3">
                        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--color-muted)]">Wireframes</p>
                        <h2 className="text-3xl font-semibold text-[var(--color-heading)]">E-commerce capstone flow</h2>
                        <p className="text-base text-[var(--color-text)]/90">
                            Ordered low-fidelity screens walk through the shopper journey from sign up to checkout, highlighting
                            key interaction points.
                        </p>
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

            <section className="space-y-6">
                <div className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--color-muted)]">Diagram</p>
                    <h2 className="text-3xl font-semibold text-[var(--color-heading)]">Experience architecture</h2>
                    <p className="text-base text-[var(--color-text)]/90">{project.diagram.description}</p>
                </div>
                <div className="overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)]">
                    <div className="relative h-96 w-full">
                        <Image
                            src={project.diagram.image}
                            alt={project.diagram.title}
                            fill
                            sizes="100vw"
                            className="object-cover"
                        />
                    </div>
                    <div className="p-6">
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-muted)]">{project.diagram.title}</p>
                    </div>
                </div>
            </section>

            <section className="space-y-8">
                <div className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--color-muted)]">Gallery</p>
                    <h2 className="text-3xl font-semibold text-[var(--color-heading)]">Supporting visuals</h2>
                    <p className="text-base text-[var(--color-text)]/90">Artifacts that supported stakeholder discussions, development handoff, and QA.</p>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                    {project.gallery.map((frame) => (
                        <article key={frame.title} className="space-y-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-elevated)]/60 p-4">
                            <div className="relative h-56 w-full overflow-hidden rounded-xl">
                                <Image
                                    src={frame.image}
                                    alt={frame.title}
                                    fill
                                    sizes="(min-width: 768px) 50vw, 100vw"
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-[var(--color-heading)]">{frame.title}</h3>
                                <p className="text-sm text-[var(--color-text)]/90">{frame.caption}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
}
