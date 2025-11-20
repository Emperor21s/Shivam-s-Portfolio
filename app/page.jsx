import Link from 'next/link';
import { projects } from '@/data/projects';

const professionalSummary =
    'Results-driven Software Developer with a strong foundation in full-stack development and agile methodologies. Proficient in building responsive web applications using Java, Python, JavaScript (React), and Flask, with hands-on experience creating RESTful APIs and working with SQL databases.';

const introduction =
    'Creative and detail-oriented UI/UX Developer with experience designing and implementing user-centered web interfaces. Skilled in Figma, wireframing, prototyping, accessibility, and responsive front-end development using HTML, CSS, JavaScript, and React.';

const contactDetails = [
    { label: 'Email', value: 'shivambpatel2121@gmail.com', href: 'mailto:shivambpatel2121@gmail.com' },
    { label: 'Phone', value: '+1 (416) 836-5054', href: 'tel:+14168365054' },
    { label: 'Location', value: 'Hamilton, ON' }
];

const coreSkills = [
    'Programming: Python, Java, JavaScript, C#, SQL, HTML5/CSS3',
    'Frameworks & Libraries: Flask, ReactJS, RESTful API design, jQuery',
    'Databases: MySQL, SQL Server (fundamentals)',
    'Tools: Git & GitHub, VS Code, Postman, Azure DevOps, Linux/Unix basics',
    'Practices: Agile/Scrum, TDD, CI/CD (basic), Object-Oriented Design'
];

const experiences = [
    {
        role: 'Freelance Software Developer & IT Support',
        organization: 'Kardia Repair & Installation (Whirlpool Partner)',
        location: 'Hamilton, ON',
        period: 'Feb 2025 – Present',
        bullets: [
            'Leading the design and development of a customer booking web application (in progress) – created wireframes and interactive prototypes in Figma and spearheaded front-end implementation using React, ensuring a responsive, intuitive UI that aligns with business needs.',
            'Managed the service center’s IT operations (ticketing system, scheduling, parts procurement, feedback tracking), implementing structured digital workflows that improved overall efficiency and reduced service delays.',
            'Enhanced technician response times by streamlining issue triage and communication.'
        ]
    },
    {
        role: 'Junior UX Designer (Co-op)',
        organization: 'Ministry of Transportation',
        location: 'St Catharines, ON',
        period: 'May 2023 – Aug 2023',
        bullets: [
            'Designed modern, mobile-responsive web form interfaces using the Ontario Design System (ODS) and Figma, ensuring 100% WCAG 2.1 accessibility compliance and smoother user workflows based on usability testing insights.',
            'Worked closely with front-end developers (Infosys consultants) to translate Figma prototypes into production-ready HTML, CSS, and JavaScript, ensuring pixel-perfect design implementation and cross-browser compatibility.',
            'Utilized Microsoft Azure DevOps to manage user stories, track design deliverables, and contribute during Agile ceremonies to ensure continuous alignment with stakeholder objectives.'
        ]
    },
    {
        role: 'IT Support Officer (Tier 2)',
        organization: 'Ontario Ministry of Public and Business Service Delivery',
        location: 'Guelph, ON',
        period: 'Sep 2022 – Dec 2022',
        bullets: [
            'Provided Tier-2 support to government staff in both on-site and remote settings, resolving diverse technical issues (hardware failures, Windows software errors, VPN connectivity problems) with a high first-contact resolution rate (85%).',
            'Managed user accounts and access rights using Active Directory and Microsoft Intune, and deployed software updates via enterprise management tools while enforcing IT security policies.',
            'Investigated and triaged complex issues, collaborating with network and infrastructure teams to escalate critical incidents and restore services within SLA timeframes.'
        ]
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
                        Comfortable working with design systems and collaborating closely with developers and stakeholders to turn complex
                        requirements into simple, intuitive user experiences.
                    </p>
                    <p className="text-base text-[var(--color-text)]/90">
                        Known for delivering user-centric solutions and collaborating across cross-functional teams to solve complex
                        technical problems in fast-paced environments.
                    </p>
                </div>
            </section>

            <section className="space-y-8" id="skills">
                <div className="space-y-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-muted)]">Core Skills</p>
                    <p className="text-lg text-[var(--color-text)]/90">Programming · Frameworks · Databases · Tools · Practices</p>
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
                            <div className="mt-auto flex flex-wrap gap-3">
                                <Link
                                    href={project.href}
                                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-heading)] px-4 py-2 text-sm font-semibold text-white"
                                >
                                    View project details
                                </Link>
                                <a
                                    href="mailto:shivambpatel2121@gmail.com?subject=Project%20collaboration"
                                    className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--color-border)] bg-transparent px-4 py-2 text-sm font-semibold text-[var(--color-heading)]"
                                >
                                    Message me
                                </a>
                            </div>
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
