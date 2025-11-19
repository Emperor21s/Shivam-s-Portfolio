const professionalSummary =
    'Creative and detail-oriented UI/UX Developer with experience designing and implementing user-centered web interfaces. Skilled in Figma, wireframing, prototyping, accessibility, and responsive front-end development using HTML, CSS, JavaScript, and React.';

const introduction =
    'Comfortable working with design systems and collaborating closely with developers and stakeholders to turn complex requirements into simple, intuitive user experiences.';

const contactDetails = [
    { label: 'Email', value: 'shivambpatel2121@gmail.com', href: 'mailto:shivambpatel2121@gmail.com' },
    { label: 'Phone', value: '+1 (416) 836-5054', href: 'tel:+14168365054' },
    { label: 'Location', value: 'Hamilton, ON' }
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

const projects = [
    {
        name: 'E-Commerce Web Application (Capstone Project)',
        focus: 'UX & Front-end Focus',
        summary:
            'Led UI/UX design for a full-stack e-commerce site, defining navigation structure and page layouts (home, product listing, product detail, cart, checkout).',
        detail: 'Created Figma prototypes and worked with the team to implement designs in React, focusing on responsive behavior, clear visual hierarchy, and a frictionless checkout flow.'
    },
    {
        name: 'Hamilton City Magazine Event Platform',
        focus: 'UX for Client’s Site',
        summary:
            'Designed a mobile-responsive event discovery experience for Hamilton City Magazine, from initial sketches to final UI.',
        detail: 'Defined user journeys (discover events, filter by category/date, view details) and prepared wireframes and high-fidelity mockups in Figma.'
    },
    {
        name: 'Hamilton City Magazine Event Platform – Handoff',
        focus: 'Collaboration',
        summary: 'Collaborated with developers integrating a Flask backend and WordPress front-end, ensuring the final interface matched design intent and remained practical for the client to maintain.',
        detail: 'Provided design support so the team could keep the user experience consistent while launching the production site.'
    }
];

export default function HomePage() {
    return (
        <div className="space-y-16" id="home">
            <section className="grid gap-8 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)]/90 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.12)] md:grid-cols-2">
                <div className="space-y-6">
                    <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-muted)]">UI/UX Developer</p>
                    <h1 className="text-3xl font-semibold leading-tight text-[var(--color-heading)] sm:text-4xl">Shivam Patel</h1>
                    <p className="text-base text-[var(--color-text)]/90">{professionalSummary}</p>
                    <div className="grid gap-4 text-sm text-[var(--color-text)]/90 sm:grid-cols-2">
                        {contactDetails.map((item) => (
                            <div key={item.label} className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-elevated)]/60 p-4">
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
                            className="btn btn-lg bg-transparent text-[var(--color-heading)] ring-1 ring-[var(--color-border)]"
                        >
                            Message me
                        </a>
                    </div>
                </div>
                <div className="space-y-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-elevated)]/70 p-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-muted)]">Introduction</p>
                    <p className="text-base text-[var(--color-text)]/90">{introduction}</p>
                    <p className="text-base text-[var(--color-text)]/90">
                        Research strengths include usability testing, heuristic evaluation, accessibility best practices (WCAG/AODA),
                        and user feedback analysis.
                    </p>
                    <p className="text-base text-[var(--color-text)]/90">
                        Collaboration focus areas: design-to-development handoff, working with engineers and PMs, Agile/Scrum ceremonies,
                        and presenting design decisions.
                    </p>
                </div>
            </section>

            <section className="space-y-8" id="skills">
                <div className="space-y-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-muted)]">Core Skills</p>
                    <p className="text-lg text-[var(--color-text)]/90">
                        UX Design · UI Development · Tools & Systems · Research & Accessibility · Collaboration
                    </p>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                    {coreSkills.map((skill) => (
                        <article
                            key={skill}
                            className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/80 p-5 text-sm text-[var(--color-text)]/90"
                        >
                            {skill}
                        </article>
                    ))}
                </div>
            </section>

            <section className="space-y-10" id="resume">
                <div className="space-y-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-muted)]">Resume</p>
                    <h2 className="text-3xl font-semibold text-[var(--color-heading)]">Experience overview</h2>
                    <p className="text-base text-[var(--color-text)]/90">
                        Mohawk College – Advanced Diploma, Software Development (Honors), Hamilton, ON (Sep 2020 – Apr 2024).
                    </p>
                </div>
                <div className="grid gap-6 lg:grid-cols-3">
                    {experiences.map((experience) => (
                        <article
                            key={experience.role}
                            className="flex h-full flex-col gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/70 p-6"
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
                <div className="rounded-2xl border border-dashed border-[var(--color-border)] bg-[var(--color-elevated)]/60 p-6 text-sm text-[var(--color-text)]/90">
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

            <section className="space-y-10" id="projects">
                <div className="space-y-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-muted)]">Projects</p>
                    <h2 className="text-3xl font-semibold text-[var(--color-heading)]">Recent project collaborations</h2>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
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
                            <p className="text-sm text-[var(--color-text)]/90">{project.detail}</p>
                            <a
                                href="mailto:shivambpatel2121@gmail.com?subject=Project%20collaboration"
                                className="mt-auto inline-flex items-center justify-center gap-2 rounded-full border border-[var(--color-border)] bg-transparent px-4 py-2 text-sm font-semibold text-[var(--color-heading)]"
                            >
                                Message me about this project
                            </a>
                        </article>
                    ))}
                </div>
            </section>

            <section className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)]/90 p-8 text-center">
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
