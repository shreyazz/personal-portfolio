import axios from "axios";
import React, { useEffect, useState } from "react";
import { BlogPageWrapper } from "../styles/BlogPageElement";
import BlogCard from "../components/BlogCard";
const Blogs = ({ theme }) => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getBlogs = async () => {
    setIsLoading(true);
    const data = await axios.get(
      "https://dev.to/api/articles?username=shreyazz"
    );

    setBlogs(data.data);
    setIsLoading(false);
  };
  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <>
      <BlogPageWrapper theme={theme}>
        {!isLoading ? (
          blogs.map((blog, id) => (
            <BlogCard key={id.toString()} theme={theme} blog={blog} />
          ))
        ) : (
          <div className="loading">
            {" "}
            <div className="blinker"></div>{" "}
          </div>
        )}
      </BlogPageWrapper>
    </>
  );
};

export default Blogs;
