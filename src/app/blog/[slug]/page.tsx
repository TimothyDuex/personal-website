"use client";

import { CircleChevronLeft } from "lucide-react";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { createClient } from "../../api/supabase/client";
import LoadingCircle from "../../_components/_util/LoadingCircle";
import { BlogsTableData } from "../Blogs";
import ForceMaxWidthHelper from "../../_components/_util/ForceMaxWidthHelper";
import MarkdownRenderer from "./_util/MarkdownRenderer";

export default function BlogPost() {
  const router = useRouter();

  const pathName = usePathname();
  const pathParts = pathName.split("/");
  const pathBlogTitle = decodeURIComponent(
    pathParts.length > 2 ? pathParts[2] : "",
  );

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [blogData, setBlogData] = useState<BlogsTableData | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        setError(null);

        const supabase = createClient();
        const { data, error: supabaseError } = await supabase
          .from("blogs")
          .select()
          .eq("title", pathBlogTitle)
          .limit(1);

        if (supabaseError) {
          throw supabaseError;
        }

        setBlogData(data[0]);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        console.error("Error fetching blog posts:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [pathBlogTitle]);

  return (
    <>
      {/* Force Max Width */}
      <ForceMaxWidthHelper />
      <div className="grid grid-cols-1 gap-4">
        {/* Back Button */}
        <div className="flex justify-start">
          <button
            onClick={() => router.push(`/blog`)}
            className="px-3 rounded-md text-sm font-medium transition-colors duration-200 text-tertiary-text bg-primary-bg hover:bg-fill-bg-hover hover:text-fill-text-hover"
          >
            <CircleChevronLeft />
          </button>
        </div>
        {/* Blog Content */}
        {loading && (
          <div className="flex items-center justify-center z-10">
            <LoadingCircle w={10} h={10} />
          </div>
        )}
        {error && <div className="text-primary-text">Error: {error}</div>}
        {!loading && !error && !blogData && (
          <div className="text-primary-text">
            Oops, you found a non-existent Blog Post, please go back.
          </div>
        )}
        {blogData && <BlogPostContent blogData={blogData} />}
      </div>
    </>
  );
}

function BlogPostContent({ blogData }: { blogData: BlogsTableData }) {
  return (
    <>
      <h2 className="text-2xl font-bold text-primary-text mb-1 mt-2">
        {blogData.title}
      </h2>
      <MarkdownRenderer content={blogData.content!} />
    </>
  );
}
