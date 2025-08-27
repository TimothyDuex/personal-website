"use client";

import React, { useState, useEffect } from "react";
import { createClient } from "../api/supabase/client";
import BlogList from "./BlogList";
import LoadingCircle from "../_components/_util/LoadingCircle";

export interface BlogsTableData {
  id: number;
  title: string;
  content?: string;
  publication_date: Date;
  posted: boolean;
  imageUrl?: string;
}

function Blog() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [blogPosts, setBlogPosts] = useState<BlogsTableData[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        setError(null);

        const supabase = createClient();
        const { data, error: supabaseError } = await supabase
          .from("blogs")
          .select("id, title, publication_date, posted, imageUrl");

        if (supabaseError) {
          throw supabaseError;
        }

        // Fetch images
        // TODO: Make this parallel calls to speed up as more blogs are added
        for (const post of data) {
          if (!post.imageUrl) {
            continue;
          }
          const { data } = supabase.storage
            .from("Personal_Website_Blog_Images")
            .getPublicUrl(post.imageUrl);

          post.imageUrl = data.publicUrl;
        }

        setBlogPosts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        console.error("Error fetching blog posts:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center z-10">
        <LoadingCircle w={10} h={10} />
      </div>
    );
  }

  if (error) {
    return <div className="text-primary-text">Error: {error}</div>;
  }

  return (
    <BlogList
      blogPosts={blogPosts!
        .filter((post) => post.posted)
        .sort((a, b) => +b.publication_date - +a.publication_date)}
    />
  );
}

export default Blog;
