"use client";

import BlogList from "@/components/BlogList";
import Header from "@/components/Header";

const Homepage = () => {
  return (
    <div>
      {/* Header components */}
      <Header/>
      {/* Blog List component */}
      <BlogList/>
    </div>
  );
};

export default Homepage;