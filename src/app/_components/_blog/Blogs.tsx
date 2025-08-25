"use client";

import { useState, useEffect } from "react";
import { createClient } from "../../api/supabase/client";

type Blog = {
  id: number;
  title: string;
  content: string;
};

function Blogs() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [blogs, setBlogs] = useState<Blog[] | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        setError(null);

        const supabase = createClient();
        const { data, error: supabaseError } = await supabase
          .from("blogs")
          .select();

        if (supabaseError) {
          throw supabaseError;
        }

        setBlogs(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        console.error("Error fetching blogs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <div className="text-primary-text">Loading blog posts...</div>;
  }

  if (error) {
    return <div className="text-primary-text">Error: {error}</div>;
  }

  return (
    <pre className="text-primary-text">{JSON.stringify(blogs, null, 2)}</pre>
  );
}

export default Blogs;
