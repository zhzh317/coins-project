import { MetadataRoute } from 'next'
import { allArticles, getAllCategories } from '@/lib/articleData';

const BASE_URL = 'https://coinsciphers.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages = [
    '/',
    '/about',
    '/contact',
    '/overview',
    '/research',
    '/site-map',
    '/privacy-policy',
    '/advertise',
    '/calculator/staking-apy'
  ] as const;

  const articleRoutes = allArticles.map(article => ({
    url: `${BASE_URL}/articles/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const categoryRoutes = getAllCategories().map(category => ({
    url: `${BASE_URL}/category/${category.toLowerCase()}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const staticRoutes = staticPages.map(route => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '/' ? 1.0 : 0.9,
  }));

  return [
    ...staticRoutes,
    ...categoryRoutes,
    ...articleRoutes,
  ];
}
