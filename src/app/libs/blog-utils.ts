// src/libs/blog-utils.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import remarkMdx from 'remark-mdx'; // Import remark-mdx to handle MDX content

export interface BlogPost {
  slug: string;
  title: string;
  date: string; // Format: YYYY-MM-DD
  author: string;
  category: string;
  tags: string[];
  excerpt: string;
  image: string; // Path to thumbnail image (e.g., /blog-images/my-post.jpg)
  content?: string; // Only available for single post view
}

// Interface for paginated data
export interface PaginatedBlogPosts {
  posts: BlogPost[];
  totalPosts: number;
  currentPage: number;
  totalPages: number;
  postsPerPage: number;
}

// IMPORTANT: The 'posts' directory should be at the project root level.
const postsDirectory = path.join(process.cwd(), 'posts');

let allPostsCache: BlogPost[] | null = null;

async function _getAllPosts(): Promise<BlogPost[]> {
  if (allPostsCache) return allPostsCache;

  if (!fs.existsSync(postsDirectory)) {
    console.warn(`Blog posts directory not found at: ${postsDirectory}. No blog posts will be loaded.`);
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData: BlogPost[] = await Promise.all(
    fileNames.map(async (fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);
      return {
        slug,
        ...(matterResult.data as Omit<BlogPost, 'slug' | 'content'>),
      };
    })
  );

  const sortedPosts = allPostsData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  allPostsCache = sortedPosts;
  return sortedPosts;
}

// ✅ Added this export so sitemap.ts works
export async function getSortedPostsData(): Promise<BlogPost[]> {
  return await _getAllPosts();
}

export async function getPaginatedPostsData(
  currentPage: number = 1,
  postsPerPage: number = 9
): Promise<PaginatedBlogPosts> {
  const allPosts = await _getAllPosts();
  const totalPosts = allPosts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  currentPage = Math.max(1, Math.min(currentPage, totalPages > 0 ? totalPages : 1));

  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;

  const postsForPage = allPosts.slice(startIndex, endIndex);

  return {
    posts: postsForPage,
    totalPosts,
    currentPage,
    totalPages,
    postsPerPage,
  };
}

export async function getPostData(slug: string): Promise<BlogPost> {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .use(remarkMdx)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  return {
    slug,
    ...(matterResult.data as Omit<BlogPost, 'slug' | 'content'>),
    content: contentHtml,
  };
}

export function getAllPostSlugs() {
  if (!fs.existsSync(postsDirectory)) {
    console.warn(`Blog posts directory not found at: ${postsDirectory}. Cannot generate slugs.`);
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => ({
    slug: fileName.replace(/\.mdx$/, ''),
  }));
}
