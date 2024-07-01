"use client";

import BlogList from "@/components/BlogList";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Homepage = () => {
  return (
    <div>
      {/* Header components */}
      <Header/>
      {/* Blog List component */}
      <BlogList/>
      {/* Footer Component */}
      <Footer/>
    </div>
  );
};

export default Homepage;