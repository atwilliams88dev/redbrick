import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.redbrick618.com/',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      images: [
        'https://www.redbrick618.com/norms.jpeg',
        'https://www.redbrick618.com/interior.png',
        'https://www.redbrick618.com/storefront-polished.png',
        'https://www.redbrick618.com/menu_new.jpg',
      ],
    },
    {
      url: 'https://www.redbrick618.com/menu',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
      images: ['https://www.redbrick618.com/menu_new.jpg'],
    },
    {
      url: 'https://www.redbrick618.com/visit',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      images: ['https://www.redbrick618.com/storefront-polished.png'],
    },
  ]
}
