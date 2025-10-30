// src/app/blogs/page.tsx
import { Metadata } from 'next';
import Link from 'next/link';
import { getPaginatedPostsData, PaginatedBlogPosts, BlogPost } from '../libs/blog-utils';
import BlogCard from '../components/BlogCard';

const YOUR_WEBSITE_URL = 'https://gopalguruji.com'; // IMPORTANT: Update with your actual website URL
const POSTS_PER_PAGE = 9;

// Static metadata for the main blog listing page
export const metadata: Metadata = {
  title: 'Vedic Blog | Insights & Guidance from Pandit Ji - Vedic Sadhana',
  description: 'Explore insightful articles on Hindu pujas, Vedic rituals, astrology, Vastu Shastra, festivals, and spiritual guidance by Pandit Gopal Krishna Sharma.',
  openGraph: {
    title: 'Vedic Blog | Insights & Guidance from Pandit Ji - Vedic Sadhana',
    description: 'Explore insightful articles on Hindu pujas, Vedic rituals, astrology, Vastu Shastra, festivals, and spiritual guidance by Pandit Gopal Krishna Sharma.',
    url: `${YOUR_WEBSITE_URL}/blogs`,
    images: [`${YOUR_WEBSITE_URL}/og-image-blogs.jpg`], // Ensure this image exists
    siteName: 'Vedic Sadhana',
    locale: 'en_US',
    type: 'website',
  },
  alternates: { canonical: `${YOUR_WEBSITE_URL}/blogs` },
};

// Helper to safely resolve params/searchParams
async function resolveDynamicParam<T>(param: Promise<T> | T): Promise<T> {
  if (param && typeof (param as Promise<any>).then === 'function') {
    return await (param as Promise<T>);
  }
  return param as T;
}

interface BlogsPageProps {
  searchParams?: { page?: string };
}

const BlogsPage = async ({ searchParams }: BlogsPageProps) => {
  const resolvedSearchParams = await resolveDynamicParam(searchParams || {}); // Ensure searchParams is an object, even if undefined

  const pageParam = resolvedSearchParams.page;
  const currentPage = Math.max(1, pageParam ? parseInt(pageParam) : 1);

  const { posts, totalPages }: PaginatedBlogPosts = await getPaginatedPostsData(currentPage, POSTS_PER_PAGE);

  const hasNextPage = currentPage < totalPages;
  const hasPreviousPage = currentPage > 1;

  return (
    <div className="min-h-screen bg-[#FFFDFB]">
      <main className="container mx-auto px-4 sm:px-6 py-16 lg:py-24">
        {/* Hero Section for Blog Listing */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center bg-gradient-to-br from-[#FF9500] to-[#FF6347] w-16 h-16 rounded-full mb-4 shadow-lg">
            <span className="text-4xl text-white">ॐ</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#4A2E2A] mb-3" style={{ fontFamily: "'Lora', serif" }}>
            Vedic Insights & Guidance
          </h1>
          <p className="text-base md:text-lg text-[#4A2E2A]/80 max-w-3xl mx-auto">
            Discover profound wisdom, detailed explanations of Hindu rituals, astrology, Vastu Shastra, and spiritual guidance from Pandit Ji.
          </p>
        </div>

        {/* Blog Posts Grid */}
        {posts.length === 0 ? (
          <p className="text-center text-lg md:text-xl text-[#4A2E2A]/70">No blog posts found for this page. Please check back soon!</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {posts.map((post: BlogPost) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <nav className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mt-16" aria-label="Pagination">
            {hasPreviousPage ? (
              <Link href={`/blogs?page=${currentPage - 1}`} className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-full transition-colors duration-200 text-sm sm:text-base">
                Previous
              </Link>
            ) : (
              <span className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-full cursor-not-allowed opacity-50 text-sm sm:text-base">Previous</span>
            )}

            <span className="text-base sm:text-lg text-[#4A2E2A] font-medium">Page {currentPage} of {totalPages}</span>

            {hasNextPage ? (
              <Link href={`/blogs?page=${currentPage + 1}`} className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-full transition-colors duration-200 text-sm sm:text-base">
                Next
              </Link>
            ) : (
              <span className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-full cursor-not-allowed opacity-50 text-sm sm:text-base">Next</span>
            )}
          </nav>
        )}
      </main>
    </div>
  );
};

export default BlogsPage;