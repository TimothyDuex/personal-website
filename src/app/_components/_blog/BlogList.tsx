import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "./Blogs";

// Blog List Component
interface BlogListProps {
  blogPosts: BlogPost[];
}

const BlogList: React.FC<BlogListProps> = ({ blogPosts }) => {
  return (
    <div className="grid gap-4 grid-cols-2 lg:grid-cols-3">
      {blogPosts.map((post) => (
        <BlogPostComponent key={post.id} post={post} />
      ))}
    </div>
  );
};

interface BlogPostProps {
  post: BlogPost;
}

const BlogPostComponent: React.FC<BlogPostProps> = ({ post }) => {
  const formatDate = (date: Date): string => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const baseClasses =
    "group cursor-pointer transition-all duration-300 hover:transform hover:scale-[1.02]";

  // Default card variant
  return (
    <article
      className={`${baseClasses} bg-secondary-bg rounded-xl border border-secondary-border overflow-hidden`}
    >
      <div className="grid grid-cols-1 gap-2">
        {post.imageUrl && (
          <div className="relative h-48 overflow-hidden">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}

        <div className="grid grid-cols-1 justify-between m-4">
          <Link href={`/blog/${post.title}`}>
            <h3 className="text-xl font-semibold text-primary-text line-clamp-2">
              {post.title}
            </h3>
          </Link>

          <div className="flex items-center gap-2 mb-3 text-sm text-tertiary-text">
            <span>{formatDate(post.publication_date)}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogList;
