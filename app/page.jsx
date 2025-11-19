const professionalSummary =
    'Results-driven Software & UX Developer with a strong foundation in full-stack development and agile methodologies. Experienced in building responsive React and Flask applications, creating RESTful APIs backed by SQL databases, and translating research into intuitive user experiences.';

const introduction =
    'I combine product discovery, accessibility testing, and visual design with hands-on experience shipping production-ready code—bridging the gap between UX strategy and engineering execution.';

const contactDetails = [
    { label: 'Email', value: 'shivambpatel2121@gmail.com', href: 'mailto:shivambpatel2121@gmail.com' },
    { label: 'Phone', value: '+1 (416) 836-5054', href: 'tel:+14168365054' },
    { label: 'Location', value: 'Hamilton, ON' },
    { label: 'LinkedIn', value: 'linkedin.com/in/shivam2102', href: 'https://www.linkedin.com/in/shivam2102' }
];

const coreSkills = [
    'Full-stack delivery: Design React interfaces, build RESTful APIs with Flask, and integrate SQL-backed data models.',
    'UX craftsmanship: Create user flows, high-fidelity prototypes, and usability tests that prioritize accessibility.',
    'Front-end engineering: HTML5, CSS3, JavaScript (ES6+), React Router, responsive layouts, cross-browser QA.',
    'Operational excellence: Azure DevOps, Git/GitHub, Agile ceremonies, ticket triage, and IT support workflows.',
    'Quality mindset: Test-driven development, unit/integration testing, and structured handoffs for smoother launches.'
];

const technicalSkills = [
    {
        category: 'Programming',
        items: ['Python', 'Java', 'JavaScript', 'C#', 'SQL', 'HTML5/CSS3']
    },
    {
        category: 'Frameworks & Libraries',
        items: ['Flask', 'ReactJS', 'RESTful API design', 'jQuery']
    },
    {
        category: 'Databases',
        items: ['MySQL', 'SQL Server (fundamentals)']
    },
    {
        category: 'Tools',
        items: ['Git & GitHub', 'VS Code', 'Postman', 'Azure DevOps', 'Linux/Unix basics']
    },
    {
        category: 'Practices',
        items: ['Agile/Scrum', 'TDD', 'CI/CD pipelines (basic)', 'Object-Oriented Design']
    },
    {
        category: 'Experience Enhancers',
        items: ['Cross-browser development', 'Responsive Web Design', 'Unit/Integration Testing']
    }
];

const experiences = [
    {
        role: 'Freelance Software Developer & IT Support',
        organization: 'Kardia Repair & Installation (Whirlpool Partner)',
        location: 'Hamilton, ON',
        period: 'Feb 2025 – Present',
        bullets: [
            'Leading the design and development of a customer booking web application: produced Figma wireframes and prototypes, then spearheaded the React front-end implementation to ensure a responsive, intuitive UI.',
            'Coordinating daily with a small developer team to align milestones, refine REST API contracts, and uphold accessibility and performance standards across devices.',
            'Managing service-center IT operations (ticketing, scheduling, parts procurement, feedback tracking) and implementing digital workflows that improved efficiency and reduced technician response times.'
        ]
    },
    {
        role: 'Junior UX Designer (Co-op)',
        organization: 'Ministry of Transportation',
        location: 'St Catharines, ON',
        period: 'May 2023 – Aug 2023',
        bullets: [
            'Designed modern, mobile-responsive web forms using the Ontario Design System (ODS) and Figma, ensuring 100% WCAG 2.1 accessibility compliance.',
            'Partnered with Infosys front-end developers to translate Figma prototypes into production-ready HTML, CSS, and JavaScript with pixel-perfect fidelity.',
            'Leveraged Azure DevOps to manage user stories, share design deliverables, and participate in Agile ceremonies for alignment with stakeholders.'
        ]
    },
    {
        role: 'IT Support Officer (Tier 2)',
        organization: 'Ontario Ministry of Public and Business Service Delivery',
        location: 'Guelph, ON',
        period: 'Sep 2022 – Dec 2022',
        bullets: [
            'Provided Tier-2 support for 100+ government staff, resolving hardware, Windows, and VPN issues with an 85% first-contact resolution rate to minimize downtime.',
            'Managed user accounts and access rights using Active Directory and Microsoft Intune, deploying software updates while enforcing IT security policies.',
            'Investigated complex incidents alongside network/infrastructure teams, delivering diagnostics and updates that restored services within SLA timeframes.'
        ]
    }
];

const projects = [
    {
        name: 'Customer Booking Platform (In Progress)',
        focus: 'Full-Stack & UX',
        summary:
            'Designing and building a booking experience for a Whirlpool partner, pairing Figma prototypes with a React UI and coordinating REST API integrations.',
        detail: 'Owns usability validation, accessibility audits, and front-end implementation to maintain consistent interactions across desktop and mobile views.'
    },
    {
        name: 'E-Commerce Web Application (Capstone Project)',
        focus: 'Full-Stack Delivery',
        summary:
            'Built a simulated online retail experience with a Flask backend, React front-end, and MySQL database powering user accounts, products, and orders.',
        detail: 'Designed RESTful endpoints, integrated Stripe for payments, and used Selenium + TDD to validate cart and checkout flows while refining the UI/UX in React Router.'
    },
    {
        name: 'Hamilton City Magazine Event Platform',
        focus: 'UX & Integration',
        summary:
            'Led UX design for a centralized event listing platform—translating client requirements into Figma mockups and intuitive navigation.',
        detail: 'Integrated a custom Flask + MySQL backend with a WordPress front-end via an AJAX-powered plugin, enabling live search/filtering and improved accessibility.'
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
                        Technical toolkit: React, Flask, RESTful API design, SQL schema modeling, Stripe/third-party integrations, and
                        automated testing to ensure reliability.
                    </p>
                    <p className="text-base text-[var(--color-text)]/90">
                        Collaboration focus areas: design-to-development handoff, Agile/Scrum ceremonies, IT operations, and presenting
                        research-backed decisions to cross-functional teams.
                    </p>
                </div>
            </section>

            <section className="space-y-8" id="skills">
                <div className="space-y-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-muted)]">Core Skills</p>
                    <p className="text-lg text-[var(--color-text)]/90">
                        UX Strategy · Front-end Engineering · Product Delivery · Agile Collaboration · Quality Practices
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

            <section className="space-y-8" id="technical-skills">
                <div className="space-y-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-muted)]">Technical Skills</p>
                    <p className="text-lg text-[var(--color-text)]/90">
                        The toolset I rely on to build performant, accessible products from concept to launch.
                    </p>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {technicalSkills.map((skill) => (
                        <article
                            key={skill.category}
                            className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/80 p-5 shadow-[0_15px_40px_rgba(15,23,42,0.08)]"
                        >
                            <div className="flex items-center justify-between gap-4">
                                <h3 className="text-base font-semibold text-[var(--color-heading)]">{skill.category}</h3>
                                <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">{skill.items.length} items</span>
                            </div>
                            <div className="mt-4 flex flex-wrap gap-2 text-sm text-[var(--color-text)]/90">
                                {skill.items.map((item) => (
                                    <span
                                        key={item}
                                        className="rounded-full border border-[var(--color-border)] bg-[var(--color-elevated)]/70 px-3 py-1"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="space-y-10" id="resume">
                <div className="space-y-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-muted)]">Resume</p>
                    <h2 className="text-3xl font-semibold text-[var(--color-heading)]">Experience overview</h2>
                    <p className="text-base text-[var(--color-text)]/90">
                        Mohawk College – Advanced Diploma, Software Development (Honors), Hamilton, ON (Sep 2020 – Apr 2024). Coursework: Full-Stack
                        Development, Web Programming, Database Design, Software Testing, Agile Project Management.
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
