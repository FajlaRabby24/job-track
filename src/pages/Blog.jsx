import React from "react";
import useScroolToTop from "../hooks/useScroolToTop";
import useTitle from "../hooks/useTitle";

const Blog = () => {
  useScroolToTop();
  useTitle("JobTrack | Blog");
  return (
    <div className="max-w-7xl text-center  pt-20 mx-auto">
      <h1 className="title text-3xl ">Blog coming soon...</h1>
    </div>
  );
};

export default Blog;
