export function Footer() {
    return (
        <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]/70">
            <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-sm text-[var(--color-muted)] sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
                <p>
                    © {new Date().getFullYear()} Shivam Patel. Crafted with Next.js and a passion for building purposeful products.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                    <a href="mailto:shivam.patel@mail.utoronto.ca" className="font-medium text-[var(--color-text)] hover:text-[var(--color-accent)]">
                        Email
                    </a>
                    <a href="https://www.linkedin.com/in/shivampatel2003" target="_blank" rel="noreferrer" className="font-medium text-[var(--color-text)] hover:text-[var(--color-accent)]">
                        LinkedIn
                    </a>
                    <a href="https://github.com/" target="_blank" rel="noreferrer" className="font-medium text-[var(--color-text)] hover:text-[var(--color-accent)]">
                        GitHub
                    </a>
                </div>
            </div>
        </footer>
    );
}
