// src/components/BlogCard.tsx
import type { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '../libs/blog-utils';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: FC<BlogCardProps> = ({ post }) => {
  return (
    <Link href={`/blogs/${post.slug}`} className="block h-full"> {/* Ensure link takes full height */}
      <div className="bg-gradient-to-br from-[#FF9500]/30 to-[#FFF7E0]/30 p-0.5 rounded-2xl shadow-md group hover:shadow-lg hover:shadow-orange-900/10 transition-all duration-300 ease-in-out h-full flex flex-col">
        <div className="bg-white rounded-[1.1rem] overflow-hidden h-full flex flex-col hover:-translate-y-1 transition-transform duration-300 ease-in-out">
          {/* Responsive Image */}
          <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-48 xl:h-56"> {/* Adjust heights responsively for various breakpoints */}
            <Image
              src={post.image || '/placeholder-blog.jpg'}
              alt={post.title} // SEO: Descriptive alt text is crucial
              fill
              style={{ objectFit: 'cover' }}
              className="group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 300px" // Optimized responsive image sizing
              priority={false} // Only give priority to LCP image on individual blog post page
            />
          </div>
          <div className="p-4 sm:p-6 flex flex-col flex-grow"> {/* Responsive padding */}
            <h3 className="text-lg sm:text-xl font-bold text-[#4A2E2A] mb-2 leading-tight" style={{ fontFamily: "'Lora', serif" }}>
              {post.title}
            </h3>
            <p className="text-[#4A2E2A]/80 text-sm mb-3 flex-grow line-clamp-3"> {/* Added line-clamp to limit excerpt length */}
              {post.excerpt}
            </p>
            <div className="flex flex-wrap gap-2 mb-4 mt-auto">
              {post.tags && post.tags.map((tag, i) => (
                <span key={i} className="bg-[#FFF7E0] text-[#4A2E2A]/70 text-xs font-semibold px-2 py-0.5 rounded-full border border-orange-100">
                  {tag}
                </span>
              ))}
            </div>
            <div className="text-xs sm:text-sm text-[#4A2E2A]/60 flex justify-between items-center pt-2 border-t border-orange-100">
              <span>By {post.author}</span>
              <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;