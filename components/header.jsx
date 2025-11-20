'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useTheme } from './theme-provider';

const links = [
    { label: 'Home', href: '#home' },
    { label: 'Resume', href: '#resume' },
    { label: 'Projects', href: '#projects' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shivam2102', external: true },
    { label: 'GitHub', href: 'https://github.com/Emperor21s', external: true }
];

export function Header() {
    const [open, setOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    const renderLinks = (onClick) =>
        links.map((link) =>
            link.external ? (
                <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium tracking-wide transition hover:text-[var(--color-accent)]"
                    onClick={onClick}
                >
                    {link.label}
                </a>
            ) : (
                <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm font-medium tracking-wide transition hover:text-[var(--color-accent)]"
                    onClick={onClick}
                >
                    {link.label}
                </Link>
            )
        );

    return (
        <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-glass)] backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                <Link href="#home" className="text-lg font-semibold tracking-tight">
                    Shivam Patel
                </Link>
                <nav className="hidden items-center gap-8 md:flex">
                    {renderLinks(() => setOpen(false))}
                    <button
                        type="button"
                        onClick={toggleTheme}
                        aria-label="Toggle color theme"
                        className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] p-2 transition hover:border-[var(--color-accent)]"
                    >
                        {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
                    </button>
                </nav>
                <div className="flex items-center gap-3 md:hidden">
                    <button
                        type="button"
                        onClick={toggleTheme}
                        aria-label="Toggle color theme"
                        className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] p-2"
                    >
                        {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
                    </button>
                    <button
                        type="button"
                        onClick={() => setOpen((prev) => !prev)}
                        aria-label="Toggle navigation menu"
                        className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] p-2"
                    >
                        {open ? <CloseIcon /> : <MenuIcon />}
                    </button>
                </div>
            </div>
            {open && (
                <div className="border-t border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-4 sm:px-6">
                    <nav className="flex flex-col gap-4 text-base">{renderLinks(() => setOpen(false))}</nav>
                </div>
            )}
        </header>
    );
}

function MenuIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 7h16M4 12h16M4 17h16" />
        </svg>
    );
}

function CloseIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 6l12 12M18 6l-12 12" />
        </svg>
    );
}

function SunIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
            <circle cx="12" cy="12" r="4" strokeWidth="1.5" />
            <path strokeLinecap="round" strokeWidth="1.5" d="M12 3v2m0 14v2M4.22 4.22l1.42 1.42m12.72 12.72 1.42 1.42M3 12h2m14 0h2m-2.36-6.36 1.42-1.42M4.64 17.36l-1.42 1.42" />
        </svg>
    );
}

function MoonIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M21 15.25A8.25 8.25 0 0 1 12.75 7 8.24 8.24 0 0 1 14.7 1.5 9 9 0 1 0 22.5 9.3 8.24 8.24 0 0 1 21 15.25Z"
            />
        </svg>
    );
}
