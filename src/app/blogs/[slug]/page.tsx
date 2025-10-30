// src/app/blogs/[slug]/page.tsx
import { Metadata } from 'next';
import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import { getPostData, getAllPostSlugs, BlogPost } from '../../libs/blog-utils';

const YOUR_WEBSITE_URL = 'https://gopalguruji.com'; // IMPORTANT: Update with your actual website URL

// Helper to safely resolve params/searchParams
async function resolveDynamicParam<T>(param: Promise<T> | T): Promise<T> {
  if (param && typeof (param as Promise<any>).then === 'function') {
    return await (param as Promise<T>);
  }
  return param as T;
}

// Metadata generation for SEO
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const resolvedParams = await resolveDynamicParam(params);

  if (!resolvedParams.slug) {
    console.error("Error: params.slug is undefined in generateMetadata.");
    return {
      title: 'Blog Post Not Found | Vedic Sadhana',
      description: 'The requested blog post could not be found.',
    };
  }

  const post = await getPostData(resolvedParams.slug);

  if (!post) {
    return {
      title: 'Blog Post Not Found | Vedic Sadhana',
      description: 'The requested blog post could not be found.',
    };
  }

  const defaultOgImage = `${YOUR_WEBSITE_URL}/og-image-default-blog.jpg`; // Ensure this default image exists
  const postImageUrl = post.image ? `${YOUR_WEBSITE_URL}${post.image}` : defaultOgImage;

  // Article Schema (moved to component as recommended, but keeping for reference)
  // The actual JSON-LD will be rendered in the component for better practice.
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${YOUR_WEBSITE_URL}/blogs/${post.slug}`
    },
    "headline": post.title,
    "description": post.excerpt,
    "image": {
      "@type": "ImageObject",
      "url": postImageUrl,
    },
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Vedic Sadhana", // Your organization name
      "logo": {
        "@type": "ImageObject",
        "url": `${YOUR_WEBSITE_URL}/logo.png`, // Your logo path
      }
    },
    "datePublished": post.date,
    "dateModified": post.date,
    "keywords": post.tags ? post.tags.join(', ') : '',
  };

  return {
    title: post.title + ' | Vedic Blog - Vedic Sadhana',
    description: post.excerpt,
    keywords: post.tags ? post.tags.join(', ') + ', Vedic Sadhana, Pandit Gopal Krishna Sharma' : 'Vedic Sadhana, Pandit Gopal Krishna Sharma',
    openGraph: {
      title: post.title + ' | Vedic Blog - Vedic Sadhana',
      description: post.excerpt,
      url: `${YOUR_WEBSITE_URL}/blogs/${post.slug}`,
      images: [postImageUrl],
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      siteName: 'Vedic Sadhana',
    },
    alternates: {
      canonical: `${YOUR_WEBSITE_URL}/blogs/${post.slug}`,
    },
    // Removed `other` property for JSON-LD as it's better rendered in the component
  };
}

// Statically generate paths for all blog posts
export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug: slug.slug,
  }));
}

interface BlogPostPageProps {
  params: { slug: string };
}

const BlogPostPage: FC<BlogPostPageProps> = async ({ params }) => {
  const resolvedParams = await resolveDynamicParam(params);

  if (!resolvedParams.slug) {
    return (
      <div className="min-h-screen bg-[#FFFDFB] flex items-center justify-center">
        <p className="text-xl text-red-600">Blog post not found or invalid slug.</p>
      </div>
    );
  }

  const post: BlogPost = await getPostData(resolvedParams.slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#FFFDFB] flex items-center justify-center">
        <p className="text-xl text-red-600">Blog post not found or invalid slug.</p>
      </div>
    );
  }

  // Generate JSON-LD schema dynamically for the article
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${YOUR_WEBSITE_URL}/blogs/${post.slug}`
    },
    "headline": post.title,
    "description": post.excerpt,
    "image": {
      "@type": "ImageObject",
      "url": post.image ? `${YOUR_WEBSITE_URL}${post.image}` : `${YOUR_WEBSITE_URL}/og-image-default-blog.jpg`,
    },
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Vedic Sadhana",
      "logo": {
        "@type": "ImageObject",
        "url": `${YOUR_WEBSITE_URL}/logo.png`,
      }
    },
    "datePublished": post.date,
    "dateModified": post.date, // Assuming dateModified is the same as published for simplicity
    "keywords": post.tags ? post.tags.join(', ') : '',
  };

  return (
    <div className="min-h-screen bg-[#FFFDFB]">
      {/* JSON-LD Script for Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <main className="container mx-auto px-6 py-12 md:py-16 lg:py-24 max-w-4xl">
        <article className="bg-white rounded-2xl shadow-xl p-6 md:p-10 lg:p-12 mb-12">
          {/* Responsive Image Section */}
          <div className="relative w-full h-52 sm:h-72 md:h-96 lg:h-[450px] rounded-lg overflow-hidden mb-8">
            <Image
              src={post.image || '/placeholder-blog.jpg'} // Ensure placeholder-blog.jpg exists
              alt={post.title}
              fill
              style={{ objectFit: 'cover' }}
              priority
              // Optimal sizes for responsive image loading
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 80vw, 768px"
            />
          </div>

          {/* Blog Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#4A2E2A] mb-4 leading-tight" style={{ fontFamily: "'Lora', serif" }}>
            {post.title}
          </h1>

          {/* Metadata: Author, Date, Category */}
          <div className="text-xs sm:text-sm text-[#4A2E2A]/70 mb-8 flex flex-wrap gap-x-3 sm:gap-x-4 gap-y-1">
            <span className="underline hover:text-[#FF9500]">By {post.author}</span>
            <span>Published on {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            {post.category && <span className="underline hover:text-[#FF9500]">Category: {post.category}</span>}
          </div>

          {/* Blog Content */}
          <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none text-[#4A2E2A] leading-relaxed">
            <div dangerouslySetInnerHTML={{ __html: post.content || '' }} />
          </div>

          {/* Tags Section */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-8 pt-6 border-t border-orange-100">
              <h3 className="text-lg sm:text-xl font-semibold text-[#4A2E2A] mb-4">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, i) => (
                  <div key={i} className="bg-[#FFF7E0] text-[#4A2E2A]/70 text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-full border border-orange-200 hover:bg-orange-100 transition-colors duration-200">
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          )}
        </article>

        {/* Call to Action Section */}
        <div className="text-center mt-12">
          <p className="text-base sm:text-lg text-[#4A2E2A]/90 mb-6 max-w-2xl mx-auto">
            Found this article helpful? Explore more Vedic insights or connect with Pandit Ji for personalized guidance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/blogs" passHref className="inline-block">
              <button className="bg-gradient-to-r from-[#FF9500] to-[#FF6347] text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto">
                View All Blogs
              </button>
            </Link>
            <Link href={`https://wa.me/9926029451?text=${encodeURIComponent("Hello Pandit Ji, I'd like to discuss a puja or consultation after reading your blog.")}`} target="_blank" rel="noopener noreferrer" passHref className="inline-block">
              <button className="bg-gradient-to-r from-[#FF9500] to-[#FF6347] text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto">
                <FaWhatsapp className="text-xl" /> Inquire on WhatsApp
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogPostPage;