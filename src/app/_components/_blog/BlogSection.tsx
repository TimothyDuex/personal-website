import React from "react";
import Blog from "./Blogs";

const BlogSection = () => {
  return (
    <>
      <h2 className="text-2xl font-bold text-primary-text mb-8">
        Personal Blog
      </h2>
      <div className="grid grid-cols-1 gap-1">
        <p className="text-lg text-secondary-text leading-relaxed mb-6">
          Welcome to my Personal Blog! It contains my musings on a variety of
          topics spanning my experiences and hobbies.
        </p>
        <Blog />
      </div>
    </>
  );
};

export default BlogSection;
