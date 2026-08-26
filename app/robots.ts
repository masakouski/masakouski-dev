import type { MetadataRoute } from 'next';
import { site } from '@/content/site';

// output:'export' требует явно зафиксировать статичность служебных роутов.
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
