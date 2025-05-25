import {ReactNode} from 'react';
import {ThemeProvider} from '@/components/ThemeProvider';
import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'Yugioh Quiz',
    description: 'Quiz game for Yu-Gi-Oh! fans',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                    <div className="p-4">{children}</div>
                </ThemeProvider>
            </body>
        </html>
    );
}
