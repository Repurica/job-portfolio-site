import type { Metadata, Viewport } from 'next';
import './globals.css';
import { FixedDock } from '@/components/FixedDock';
import { InteractiveCursor } from '@/components/InteractiveCursor';
import { JsonLd } from '@/components/JsonLd';
import { ThemeProvider } from '@/components/ThemeProvider';
import { pageMetadata, personJsonLd, profilePageJsonLd } from '@/lib/site';

export const metadata: Metadata = {
  ...pageMetadata({ title: 'Cao Jinming — FinTech & Cybersecurity Portfolio', description: 'A recruiter-friendly portfolio with case studies, interactive CV, standard resume, and contact links.' }),
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://github.com/Repurica/job-portfolio-site'),
};

export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#f6efe2', colorScheme: 'light dark' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="paper">
      <body>
        <ThemeProvider>
          <a href="#main-content" className="skip-link">Skip to content</a>
          <JsonLd data={personJsonLd} />
          <JsonLd data={profilePageJsonLd('/')} />
          <main id="main-content" className="relative pb-28">{children}</main>
          <FixedDock />
          <InteractiveCursor />
        </ThemeProvider>
      </body>
    </html>
  );
}
