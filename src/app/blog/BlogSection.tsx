import React from "react";
import Blog from "./Blogs";

const BlogSection = () => {
  return (
    <>
      <h2 className="adaptive-text-heading adaptive-margin-bottom-general">
        Personal Blog
      </h2>
      <div className="grid grid-cols-1 adaptive-column-gap-general">
        <p className="adaptive-text-body adaptive-text-body-line-height adaptive-margin-bottom-general">
          Welcome to my Personal Blog! It contains my musings on a variety of
          topics spanning my experiences and hobbies.
        </p>
        <Blog />
      </div>
    </>
  );
};

export default BlogSection;
