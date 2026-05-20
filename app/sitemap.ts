import type { MetadataRoute } from 'next';
import { projects } from '@/content/projects';
import { siteUrl } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/about', '/projects', '/cv', '/resume', '/contact'];
  const projectRoutes = projects.map((project) => `/projects/${project.slug}`);
  return [...staticRoutes, ...projectRoutes].map((route) => ({ url: `${siteUrl}${route}`, lastModified: new Date(), changeFrequency: 'monthly', priority: route === '' ? 1 : 0.75 }));
}
