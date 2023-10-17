import React from "react";

import BlogSummaryCard from "@/components/BlogSummaryCard";

import { getBlogPostList } from "@/helpers/file-helpers";

import { BLOG_TITLE } from "@/constants";

import styles from "./homepage.module.css";

export const metadata = {
  title: BLOG_TITLE,
  description: "A wonderful blog about JavaScript",
};

async function Home() {
  const blogPosts = await getBlogPostList();

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeading}>Latest Content:</h1>
      {/* TODO: Iterate over the data read from the file system! */}
      {blogPosts.map((post) => (
        <BlogSummaryCard
          key={post.slug}
          slug={post.slug}
          title={post.title}
          abstract={post.abstract}
          publishedOn={post.publishedOn}
        />
      ))}
    </div>
  );
}

export default Home;
