import type { Metadata } from 'next';
import { profile } from '@/content/profile';

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://your-domain.com';
export const siteName = `${profile.name} — Portfolio`;

export function absoluteUrl(path = '/') {
  return new URL(path, siteUrl).toString();
}

export function pageMetadata({
  title,
  description,
  path = '/',
  image = '/opengraph-image',
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      url,
      title,
      description,
      siteName,
      images: [{ url: absoluteUrl(image), width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [absoluteUrl(image)],
    },
  };
}

export const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  url: siteUrl,
  email: profile.email,
  jobTitle: profile.subheadline,
  address: profile.location,
  sameAs: [profile.github, profile.linkedin, profile.website],
  knowsAbout: profile.skills.flatMap((group) => group.items),
};

export function profilePageJsonLd(path = '/') {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    url: absoluteUrl(path),
    name: `${profile.name} Portfolio`,
    about: personJsonLd,
  };
}
