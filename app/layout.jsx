import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { ThemeProvider } from '../components/theme-provider';

export const metadata = {
    title: 'Shivam Patel | Portfolio',
    description:
        'Portfolio website for Shivam Patel highlighting software engineering experience, UX research, and digital product delivery.',
    metadataBase: new URL('https://shivam-portfolio.example.com')
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="bg-[var(--color-background)] text-[var(--color-text)]">
                <ThemeProvider>
                    <div className="flex min-h-screen flex-col">
                        <Header />
                        <main className="mx-auto w-full max-w-6xl grow px-4 py-10 sm:px-6 lg:px-8">{children}</main>
                        <Footer />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
