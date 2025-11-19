'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const ThemeContext = createContext();
const STORAGE_KEY = 'shivam-portfolio-theme';

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const stored = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null;
        if (stored === 'light' || stored === 'dark') {
            setTheme(stored);
            document.documentElement.dataset.theme = stored;
            return;
        }
        const prefersDark =
            typeof window !== 'undefined' &&
            window.matchMedia &&
            window.matchMedia('(prefers-color-scheme: dark)').matches;
        const resolvedTheme = prefersDark ? 'dark' : 'light';
        setTheme(resolvedTheme);
        document.documentElement.dataset.theme = resolvedTheme;
    }, []);

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        if (typeof window !== 'undefined') {
            localStorage.setItem(STORAGE_KEY, theme);
        }
    }, [theme]);

    const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

    const value = useMemo(
        () => ({
            theme,
            toggleTheme
        }),
        [theme]
    );

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
    const ctx = useContext(ThemeContext);
    if (!ctx) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return ctx;
}
