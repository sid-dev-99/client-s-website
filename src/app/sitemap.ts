// src/app/sitemap.ts
import { MetadataRoute } from 'next';
import { getSortedPostsData, BlogPost } from './libs/blog-utils'; // Adjust path

const YOUR_WEBSITE_URL = 'https://gopalguruji.com'; // !!! IMPORTANT: Update this !!!

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts: BlogPost[] = await getSortedPostsData();

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${YOUR_WEBSITE_URL}/blogs/${post.slug}`,
    lastModified: post.date, // Use post date as last modified
    changeFrequency: 'weekly', // How often content is likely to change
    priority: 0.8, // Importance relative to other URLs (0.0 to 1.0)
  }));

  return [
    {
      url: `${YOUR_WEBSITE_URL}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${YOUR_WEBSITE_URL}/blogs`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    // Add other static pages here
    // {
    //   url: `${YOUR_WEBSITE_URL}/about-pandit-ji`,
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.7,
    // },
    ...postEntries,
  ];
}