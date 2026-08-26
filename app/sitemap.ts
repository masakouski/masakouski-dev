import type { MetadataRoute } from 'next';
import { site } from '@/content/site';

// output:'export' требует явно зафиксировать статичность служебных роутов.
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: site.url, lastModified: new Date(), changeFrequency: 'yearly', priority: 1 }];
}
