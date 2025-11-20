import Link from 'next/link';
import { projects } from '@/data/projects';

const professionalSummary =
    'Creative and detail-oriented UI/UX Developer with experience designing and implementing user-centered web interfaces. Skilled in Figma, wireframing, prototyping, accessibility, and responsive front-end development using HTML, CSS, JavaScript, and React.';

const introduction =
    'Comfortable working with design systems and collaborating closely with developers and stakeholders to turn complex requirements into simple, intuitive user experiences.';

const contactDetails = [
    { label: 'Email', value: 'shivambpatel2121@gmail.com', href: 'mailto:shivambpatel2121@gmail.com' },
    { label: 'Phone', value: '+1 (416) 836-5054', href: 'tel:+14168365054' },
    { label: 'Location', value: 'Hamilton, ON' }
];

const socialLinks = [
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/shivampatel2003',
        handle: 'linkedin.com/in/shivampatel2003',
        description: 'Weekly UX breakdowns & community updates',
        icon: <LinkedInIcon />
    },
    {
        label: 'GitHub',
        href: 'https://github.com/shivampatel2003',
        handle: 'github.com/shivampatel2003',
        description: 'Live prototypes, motion handoff, and code notes',
        icon: <GithubIcon />
    }
];

const highlightStats = [
    { value: '18+', label: 'UX case studies', detail: 'Product launches, redesigns, and concept sprints' },
    { value: '5', label: 'Design systems', detail: 'Component libraries with accessibility baked in' },
    { value: '120+', label: 'Screens prototyped', detail: 'Interactive flows in Figma & coded micro-interactions' }
];

const liveSignals = [
    'Currently open for freelance & contract opportunities',
    'Prioritizing accessibility-first builds (WCAG/AODA)',
    'Daily driver tools: Figma, React, motion-first handoff'
];

const coreSkills = [
    'UX Design: User flows, wireframes, high-fidelity mock-ups, interactive prototypes, information architecture',
    'UI Development: HTML5, CSS3, JavaScript (ES6+), ReactJS, responsive layouts, grid/Flexbox',
    'Tools & Systems: Figma, Miro, Ontario Design System (ODS), Slack, Azure DevOps',
    'Research & Accessibility: Usability testing, heuristic evaluation, accessibility best practices (WCAG/AODA)',
    'Collaboration: Design-to-development handoff, working with engineers & PMs, Agile/Scrum ceremonies'
];

const experiences = [
    {
        role: 'Freelance UX/UI Designer · IT Support',
        organization: 'Kardia Repairs & Installation (Whirlpool Partner)',
        location: 'Hamilton, ON',
        period: 'Feb 2025 – Present',
        bullets: [
            'Leading the UX design of a customer booking website from concept to prototype: created user flows, low-fidelity wireframes, and high-fidelity Figma designs for desktop and mobile.',
            'Built interactive prototypes to validate the booking experience and used informal usability testing with staff/customers to identify friction points and iterate on the design.',
            'Collaborating with a small development team to implement designs using modern front-end practices (semantic HTML, responsive CSS, and React components), ensuring accessibility and visual consistency.'
        ]
    },
    {
        role: 'Junior UX Designer (Co-op)',
        organization: 'Ministry of Transportation',
        location: 'St Catharines, ON',
        period: 'May 2023 – Aug 2023',
        bullets: [
            'Redesigned legacy web forms into modern, accessible interfaces using the Ontario Design System (ODS), improving clarity, reducing cognitive load, and supporting mobile users.',
            'Produced detailed Figma prototypes, component specifications, and design documentation to support front-end developers and maintain a consistent design language across pages.',
            'Conducted usability testing and accessibility checks, then iterated on UI patterns to address issues (field labels, error states, contrast) and support WCAG 2.1/AODA compliance.',
            'Collaborated in an Agile environment using Azure DevOps to manage design tasks, align with user stories, and present work regularly to stakeholders.'
        ]
    },
    {
        role: 'IT Support Officer (Tier 2)',
        organization: 'Ontario Ministry of Public and Business Service Delivery',
        location: 'Guelph, ON',
        period: 'May 2023 – Aug 2023',
        bullets: [
            'Provided end-user support that strengthened empathy, communication, and problem-solving skills used daily in UX work.',
            'Documented common issues and solutions, reinforcing the importance of clear guidance and well-structured information for users.'
        ]
    }
];

export default function HomePage() {
    return (
        <div className="space-y-16" id="home">
            <section className="stacked-section animated-section relative overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)]/80 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.15)] md:p-12">
                <div className="pulse-ring" aria-hidden />
                <div className="grid items-center gap-12 md:grid-cols-2">
                    <div className="space-y-6">
                        <div className="flex flex-wrap gap-3">
                            {liveSignals.map((signal) => (
                                <span key={signal} className="floating-chip text-xs font-semibold text-[var(--color-heading)]">
                                    <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" aria-hidden="true" />
                                    {signal}
                                </span>
                            ))}
                        </div>
                        <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-muted)]">UI/UX Developer</p>
                        <h1 className="text-3xl font-semibold leading-tight text-[var(--color-heading)] sm:text-4xl">Shivam Patel</h1>
                        <p className="text-base text-[var(--color-text)]/90">{professionalSummary}</p>
                        <div className="badge-grid text-sm text-[var(--color-text)]/90">
                            {highlightStats.map((item) => (
                                <div key={item.label} className="badge-tile">
                                    <p className="text-2xl font-semibold text-[var(--color-heading)]">{item.value}</p>
                                    <p className="font-semibold text-[var(--color-muted)]">{item.label}</p>
                                    <p className="text-[var(--color-text)]/80">{item.detail}</p>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="/Shivam-Patel-Resume.pdf"
                                download
                                className="btn btn-lg bg-[var(--color-accent)] text-[var(--color-on-accent)] shadow-lg shadow-[var(--color-accent)]/40"
                            >
                                Download sample resume
                            </a>
                            <a
                                href="mailto:shivambpatel2121@gmail.com"
                                className="btn btn-lg bg-transparent text-[var(--color-heading)] ring-2 ring-[var(--color-border)]"
                            >
                                Message me
                            </a>
                        </div>
                        <div className="handmade-card">
                            <div className="flex items-start gap-4">
                                <div className="signature-mark" aria-hidden="true">
                                    <svg viewBox="0 0 120 80" className="h-16 w-20" role="presentation">
                                        <path
                                            d="M10 54c18-12 36-18 56-12 8 2 16 8 22 6 6-2 11-12 12-20"
                                            className="sketch-line"
                                        />
                                        <path d="M18 36c6-12 22-22 38-18" className="sketch-line" />
                                        <circle cx="94" cy="20" r="3" className="sketch-dot" />
                                    </svg>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--color-muted)]">
                                        Hand-drawn then coded
                                    </p>
                                    <p className="text-base text-[var(--color-text)]/95">
                                        Every flow starts in my sketchbook and is built by me—no AI shortcuts—so you see the same personality from pencil line to production code.
                                    </p>
                                </div>
                            </div>
                            <div className="social-row">
                                {socialLinks.map((social) => (
                                    <a key={social.label} href={social.href} className="social-pill" target="_blank" rel="noreferrer">
                                        <span className="icon-wrap" aria-hidden="true">
                                            {social.icon}
                                        </span>
                                        <span className="social-copy">
                                            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
                                                {social.label}
                                            </span>
                                            <span className="text-sm font-semibold text-[var(--color-heading)]">{social.handle}</span>
                                            <span className="text-xs text-[var(--color-text)]/80">{social.description}</span>
                                        </span>
                                        <span className="pill-glow" aria-hidden="true" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="interactive-card space-y-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-elevated)]/70 p-6">
                        <div className="flex items-start justify-between gap-3">
                            <div>
                                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-muted)]">Introduction</p>
                                <p className="mt-3 text-base text-[var(--color-text)]/90">{introduction}</p>
                            </div>
                            <div className="h-12 w-12 rounded-full bg-[var(--color-accent)]/10 ring-1 ring-[var(--color-border)]" aria-hidden="true" />
                        </div>
                        <div className="grid gap-3 text-base text-[var(--color-text)]/90">
                            <p>
                                Research strengths include usability testing, heuristic evaluation, accessibility best practices (WCAG/AODA), and
                                user feedback analysis.
                            </p>
                            <p>
                                Collaboration focus areas: design-to-development handoff, working with engineers and PMs, Agile/Scrum ceremonies,
                                and presenting design decisions.
                            </p>
                        </div>
                        <div className="grid gap-3 text-sm text-[var(--color-text)]/90 sm:grid-cols-2">
                            {contactDetails.map((item) => (
                                <div key={item.label} className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/60 p-4">
                                    <p className="text-[var(--color-muted)]">{item.label}</p>
                                    {item.href ? (
                                        <a href={item.href} className="font-semibold text-[var(--color-heading)] no-underline">
                                            {item.value}
                                        </a>
                                    ) : (
                                        <p className="font-semibold text-[var(--color-heading)]">{item.value}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="stacked-section animated-section space-y-8" id="skills">
                <div className="interactive-card space-y-4 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)]/80 p-6">
                    <div className="flex flex-wrap items-center gap-3">
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-muted)]">Core Skills</p>
                        <span className="rounded-full bg-[var(--color-accent)]/10 px-3 py-1 text-xs font-semibold text-[var(--color-heading)] ring-1 ring-[var(--color-border)]">
                            Interaction + motion friendly
                        </span>
                    </div>
                    <p className="text-lg text-[var(--color-text)]/90">
                        UX Design · UI Development · Tools & Systems · Research & Accessibility · Collaboration
                    </p>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                    {coreSkills.map((skill) => (
                        <article
                            key={skill}
                            className="interactive-card rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/80 p-5 text-sm text-[var(--color-text)]/90 shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
                        >
                            <div className="flex items-start gap-3">
                                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[var(--color-accent)]" aria-hidden="true" />
                                <span>{skill}</span>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="stacked-section animated-section space-y-10" id="resume">
                <div className="space-y-4">
                    <div className="inline-flex items-center gap-3 rounded-full bg-[var(--color-elevated)]/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-muted)] ring-1 ring-[var(--color-border)]">
                        <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" aria-hidden="true" /> Resume
                    </div>
                    <h2 className="text-3xl font-semibold text-[var(--color-heading)]">Experience overview</h2>
                    <p className="text-base text-[var(--color-text)]/90">
                        Mohawk College – Advanced Diploma, Software Development (Honors), Hamilton, ON (Sep 2020 – Apr 2024).
                    </p>
                </div>
                <div className="grid gap-6 lg:grid-cols-3">
                    {experiences.map((experience) => (
                        <article
                            key={experience.role}
                            className="interactive-card flex h-full flex-col gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/70 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
                        >
                            <div className="space-y-1">
                                <h3 className="text-xl font-semibold text-[var(--color-heading)]">{experience.role}</h3>
                                <p className="text-sm text-[var(--color-muted)]">{experience.organization}</p>
                                <p className="text-sm text-[var(--color-muted)]">{experience.location}</p>
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
                <div className="interactive-card rounded-2xl border border-dashed border-[var(--color-border)] bg-[var(--color-elevated)]/60 p-6 text-sm text-[var(--color-text)]/90">
                    <p className="font-semibold text-[var(--color-heading)]">Resume file</p>
                    <p className="mt-2">Download the sample resume to keep an offline copy.</p>
                    <a
                        href="/Shivam-Patel-Resume.pdf"
                        download
                        className="mt-4 inline-flex items-center gap-2 rounded-full bg-[var(--color-heading)] px-5 py-2 text-white"
                    >
                        Sample resume (PDF)
                        <span aria-hidden="true">↓</span>
                    </a>
                </div>
            </section>

            <section className="stacked-section animated-section space-y-10" id="projects">
                <div className="space-y-4">
                    <div className="inline-flex items-center gap-3 rounded-full bg-[var(--color-elevated)]/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-muted)] ring-1 ring-[var(--color-border)]">
                        <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" aria-hidden="true" /> Projects
                    </div>
                    <h2 className="text-3xl font-semibold text-[var(--color-heading)]">Recent project collaborations</h2>
                </div>
                <div className="masonry-grid">
                    {projects.map((project, index) => (
                        <article
                            key={project.name}
                            style={{ animationDelay: `${index * 80}ms` }}
                            className="masonry-item animated-card project-card interactive-card flex h-full flex-col gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div className="space-y-2">
                                    <p className="inline-flex items-center gap-2 rounded-full bg-[var(--color-elevated)]/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.35em] text-[var(--color-muted)] ring-1 ring-[var(--color-border)]">
                                        <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" aria-hidden />
                                        {project.focus}
                                    </p>
                                    <h3 className="text-2xl font-semibold leading-tight text-[var(--color-heading)]">{project.name}</h3>
                                </div>
                                <span className="glow-badge">{String(index + 1).padStart(2, '0')}</span>
                            </div>
                            <div className="space-y-2 text-sm text-[var(--color-text)]/90">
                                <p className="font-semibold text-[var(--color-heading)]/90">{project.summary}</p>
                                <p>{project.detail}</p>
                                {project.hero?.timeframe && (
                                    <p className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)]/10 px-3 py-1 text-[12px] font-semibold text-[var(--color-heading)] ring-1 ring-[var(--color-border)]">
                                        <span aria-hidden className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
                                        {project.hero.timeframe}
                                    </p>
                                )}
                            </div>
                            <div className="project-cta mt-auto grid gap-3 sm:grid-cols-2">
                                <Link
                                    href={project.href}
                                    className="btn-ghost inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-heading)] px-4 py-2 text-sm font-semibold text-white"
                                >
                                    View project details
                                    <span aria-hidden>↗</span>
                                </Link>
                                <a
                                    href="mailto:shivambpatel2121@gmail.com?subject=Project%20collaboration"
                                    className="btn-outline inline-flex items-center justify-center gap-2 rounded-full border border-[var(--color-border)] bg-transparent px-4 py-2 text-sm font-semibold text-[var(--color-heading)]"
                                >
                                    Message me
                                    <span aria-hidden>✦</span>
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="stacked-section animated-section interactive-card rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)]/90 p-8 text-center">
                <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-muted)]">Let’s connect</p>
                <h2 className="mt-4 text-3xl font-semibold text-[var(--color-heading)]">Ready to discuss your next UX or front-end need?</h2>
                <p className="mx-auto mt-4 max-w-2xl text-base text-[var(--color-text)]/90">
                    Reach out with a short note about the challenge, and I will respond as soon as possible.
                </p>
                <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm">
                    <a
                        href="mailto:shivambpatel2121@gmail.com"
                        className="inline-flex items-center gap-2 rounded-full bg-[var(--color-heading)] px-6 py-3 font-semibold text-white"
                    >
                        Message me
                    </a>
                    <a
                        href="tel:+14168365054"
                        className="inline-flex items-center gap-2 rounded-full bg-transparent px-6 py-3 font-semibold text-[var(--color-heading)] ring-1 ring-[var(--color-border)]"
                    >
                        Call +1 (416) 836-5054
                    </a>
                </div>
            </section>
        </div>
    );
}

function LinkedInIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
            <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="1.6" />
            <path d="M7 10.5v6" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M7 7.5a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Z" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M12 16.5v-3.8c0-1.3.8-2.2 2.05-2.2 1.2 0 1.95.9 1.95 2.2v3.8" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
    );
}

function GithubIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
            <path
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 19c-4 1.5-4-2.5-6-3m12 6v-3.3a2.87 2.87 0 0 0-.8-2.2c2.6-.3 5.3-1.3 5.3-6a4.6 4.6 0 0 0-1.2-3.2 4.3 4.3 0 0 0-.1-3.1s-1-.3-3.3 1.2a11.4 11.4 0 0 0-6 0C6.6 4 5.6 4.2 5.6 4.2a4.3 4.3 0 0 0-.1 3.1A4.6 4.6 0 0 0 4.3 11c0 4.6 2.7 5.7 5.3 6a2.87 2.87 0 0 0-.8 2.2V22"
            />
        </svg>
    );
}
