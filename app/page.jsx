const highlights = [
    {
        title: 'Rapid Prototyping',
        description:
            'Translate ambiguous ideas into interactive interfaces using Figma, React, and usability research to ship validated features quickly.'
    },
    {
        title: 'Full-Stack Delivery',
        description:
            'Build resilient applications with TypeScript, Next.js, Node.js, and GraphQL/REST integrations that handle real-world traffic.'
    },
    {
        title: 'Client Partnership',
        description:
            'Guide stakeholders through discovery, technical trade-offs, and launch planning to ensure every release ladders up to business goals.'
    }
];

const experiences = [
    {
        role: 'Freelance Developer & Support – Staples (in transition)',
        period: 'Oct 2022 – Present',
        bullets: [
            'Support new Staples POS rollouts by coordinating across engineering, retail teams, and vendors to keep operations online.',
            'Prototype accessibility and service design improvements for national retail locations.'
        ]
    },
    {
        role: 'Ontario Ministry of Transportation – UX Research & Design',
        period: 'Jan 2023 – Aug 2023',
        bullets: [
            'Designed multi-channel services (web, kiosks, in-person) for 15M+ Ontarians with a focus on accessibility and digital self-serve.',
            'Created research-backed personas, task flows, and design systems that improved completion time for key transactions.'
        ]
    },
    {
        role: 'Canada Post – IT Support Officer (Tier 2/3)',
        period: 'May 2022 – Aug 2022',
        bullets: [
            'Resolved enterprise-scale incidents across 6K+ workstations and automated routine health checks for nationwide depots.',
            'Partnered with development teams to document recurring issues and reduce escalations by 30%.'
        ]
    }
];

const projects = [
    {
        name: 'E‑commerce Web Application',
        focus: 'React • Node.js • Azure • GraphQL',
        summary:
            'Built a multi-tenant marketplace experience with real-time product inventory, secure checkout, and a component library for merchandising teams.'
    },
    {
        name: 'Hamilton City Magazine Web Experience',
        focus: 'Next.js • Headless CMS • Accessibility',
        summary:
            'Launched a responsive storytelling platform that helped the publication scale distribution beyond print through curated landing pages and paywall-ready flows.'
    },
    {
        name: 'Event Aggregation Platform',
        focus: 'TypeScript • Firebase • UX Research',
        summary:
            'Combined qualitative interviews and telemetry to design a personalized event feed for university organizations, boosting RSVP rates during pilot programs.'
    }
];

const skills = [
    'React & Next.js',
    'TypeScript & Node.js',
    'REST & GraphQL APIs',
    'PostgreSQL & Azure SQL',
    'Figma & Design Systems',
    'UX Research & Testing',
    'Agile Delivery',
    'Incident Response'
];

export default function HomePage() {
    return (
        <div className="space-y-20" id="home">
            <section className="grid gap-8 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)]/80 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.12)] lg:grid-cols-[3fr,2fr]">
                <div className="space-y-6">
                    <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-muted)]">Product Engineer · UX Researcher</p>
                    <h1 className="text-3xl font-semibold leading-tight text-[var(--color-heading)] sm:text-4xl">
                        Hi, I’m Shivam Patel. I design and code digital experiences that help civic institutions and retailers serve people faster.
                    </h1>
                    <p className="text-lg text-[var(--color-text)]/90">
                        Currently based in Hamilton, ON and finishing the Honours BSc in Computer Science at Toronto Metropolitan University.
                        I thrive at the intersection of research, service design, and hands-on engineering—turning complex systems into intuitive products.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a
                            href="#resume"
                            className="btn btn-lg bg-[var(--color-accent)] text-[var(--color-on-accent)] shadow-lg shadow-[var(--color-accent)]/40"
                        >
                            View resume snapshot
                        </a>
                        <a
                            href="mailto:shivam.patel@mail.utoronto.ca"
                            className="btn btn-lg bg-transparent text-[var(--color-heading)] ring-1 ring-[var(--color-border)]"
                        >
                            Say hello
                        </a>
                    </div>
                </div>
                <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-elevated)] p-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">At a glance</p>
                    <dl className="mt-6 space-y-5 text-sm">
                        <div className="flex items-center justify-between border-b border-dashed border-[var(--color-border)] pb-3">
                            <dt className="text-[var(--color-muted)]">Years creating digital products</dt>
                            <dd className="text-lg font-semibold text-[var(--color-heading)]">4+</dd>
                        </div>
                        <div className="flex items-center justify-between border-b border-dashed border-[var(--color-border)] pb-3">
                            <dt className="text-[var(--color-muted)]">Platforms supported</dt>
                            <dd className="text-lg font-semibold text-[var(--color-heading)]">Web · Kiosk · Mobile</dd>
                        </div>
                        <div className="flex items-center justify-between">
                            <dt className="text-[var(--color-muted)]">Industries</dt>
                            <dd className="text-lg font-semibold text-[var(--color-heading)]">Public sector · Retail · Media</dd>
                        </div>
                    </dl>
                </div>
            </section>

            <section className="grid gap-6 md:grid-cols-3">
                {highlights.map((highlight) => (
                    <article
                        key={highlight.title}
                        className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-elevated)] p-6"
                    >
                        <h3 className="text-xl font-semibold text-[var(--color-heading)]">{highlight.title}</h3>
                        <p className="mt-3 text-sm text-[var(--color-text)]/90">{highlight.description}</p>
                    </article>
                ))}
            </section>

            <section className="space-y-10" id="resume">
                <div className="max-w-3xl space-y-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-muted)]">Resume</p>
                    <h2 className="text-3xl font-semibold text-[var(--color-heading)]">Blending research, service design, and resilient engineering.</h2>
                    <p className="text-lg text-[var(--color-text)]/90">
                        I love helping cross-functional teams validate the right problem, build delightful solutions, and launch them with confidence.
                        Here’s a snapshot of the roles that shaped how I work.
                    </p>
                </div>
                <div className="grid gap-6 lg:grid-cols-3">
                    {experiences.map((experience) => (
                        <article
                            key={experience.role}
                            className="flex h-full flex-col gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/70 p-6"
                        >
                            <div>
                                <h3 className="text-xl font-semibold text-[var(--color-heading)]">{experience.role}</h3>
                                <p className="text-sm text-[var(--color-muted)]">{experience.period}</p>
                            </div>
                            <ul className="space-y-3 text-sm text-[var(--color-text)]/90">
                                {experience.bullets.map((bullet) => (
                                    <li key={bullet} className="flex gap-2">
                                        <span className="mt-1 h-2 w-2 rounded-full bg-[var(--color-accent)]" aria-hidden="true" />
                                        <span>{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
                <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-elevated)] p-6">
                    <h3 className="text-lg font-semibold text-[var(--color-heading)]">Core tools & processes</h3>
                    <div className="mt-4 flex flex-wrap gap-3">
                        {skills.map((skill) => (
                            <span
                                key={skill}
                                className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-sm font-medium text-[var(--color-heading)]"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            <section className="space-y-10" id="projects">
                <div className="max-w-3xl space-y-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-muted)]">Projects</p>
                    <h2 className="text-3xl font-semibold text-[var(--color-heading)]">Recent initiatives I’m proud of.</h2>
                    <p className="text-lg text-[var(--color-text)]/90">
                        Each engagement required balancing discovery, engineering rigor, and measurable outcomes. These stories represent the type of partnership I bring to your team.
                    </p>
                </div>
                <div className="grid gap-6 lg:grid-cols-3">
                    {projects.map((project) => (
                        <article
                            key={project.name}
                            className="flex h-full flex-col gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6"
                        >
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--color-muted)]">{project.focus}</p>
                                <h3 className="mt-2 text-2xl font-semibold text-[var(--color-heading)]">{project.name}</h3>
                            </div>
                            <p className="text-sm text-[var(--color-text)]/90">{project.summary}</p>
                            <div className="mt-auto text-sm font-semibold text-[var(--color-accent)]">Case study in progress →</div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)]/80 p-8 text-center">
                <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-muted)]">Let’s collaborate</p>
                <h2 className="mt-4 text-3xl font-semibold text-[var(--color-heading)]">
                    Have a product brief, service challenge, or upcoming launch?
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--color-text)]/90">
                    I’m ready to help teams uncover insights, translate them into elegant software, and iterate after launch. Send a note with a few lines about your challenge, and I’ll reply within a day.
                </p>
                <a
                    href="mailto:shivam.patel@mail.utoronto.ca"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--color-heading)] px-6 py-3 text-base font-semibold text-white"
                >
                    Start a conversation
                    <span aria-hidden="true">→</span>
                </a>
            </section>
        </div>
    );
}
