import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://www.redbrick618.com/sitemap.xml',
    host: 'https://www.redbrick618.com',
  }
}
