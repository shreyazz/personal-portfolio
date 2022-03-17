import React from "react";
import { BlogCardWrapper } from "../styles/BlogPageElement";
const BlogCard = ({ blog, theme }) => {
  return (
    <>
      <BlogCardWrapper theme={theme}>
        <img src={blog.cover_image} alt={blog.cover_image} />
        <div className="tags">
          {blog.tag_list.map((tag) => (
            <span className="tag">{tag}</span>
          ))}
        </div>
        <h1>{blog.title}</h1>
        <p>{blog.description}</p>
        <a href={blog.url} target="_blank" rel="noreferrer">
          <p>Read More</p>
        </a>
      </BlogCardWrapper>
    </>
  );
};

export default BlogCard;
