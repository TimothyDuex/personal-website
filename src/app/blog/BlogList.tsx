import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BlogsTableData } from "./Blogs";
import View from "../_components/_util/View";

// Blog List Component
interface BlogListProps {
  blogPosts: BlogsTableData[];
}

const BlogList: React.FC<BlogListProps> = ({ blogPosts }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 adaptive-column-gap-general">
      {blogPosts.map((post) => (
        <BlogPostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

interface BlogPostProps {
  post: BlogsTableData;
}

const BlogPostCard: React.FC<BlogPostProps> = ({ post }) => {
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
    <View className="overflow-hidden">
      <article className={`${baseClasses}`}>
        <Link href={`/blog/${post.title}`}>
          <div className="grid grid-cols-1 gap-2">
            {post.imageUrl && (
              <div className="relative h-20 sm:h-24 md:h-36 lg:h-48 overflow-hidden">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            )}

            <div className="grid grid-cols-1 justify-between m-2 md:m-3">
              <h3 className="font-semibold adaptive-text-body line-clamp-2">
                {post.title}
              </h3>

              <div className="flex items-center adaptive-text-caption">
                <span>{formatDate(post.publication_date)}</span>
              </div>
            </div>
          </div>
        </Link>
      </article>
    </View>
  );
};

export default BlogList;
