import React from "react";

import { MDXRemote } from "next-mdx-remote/rsc";

import BlogHero from "@/components/BlogHero";

import { BLOG_TITLE } from "@/constants";

import { loadBlogPost } from "@/helpers/file-helpers";
import COMPONENT_MAP from "@/helpers/mdx-components";

import styles from "./postSlug.module.css";

export async function generateMetadata({ params }) {
  const { postSlug } = params;
  const { frontmatter } = await loadBlogPost(postSlug);

  return {
    title: `${frontmatter.title} • ${BLOG_TITLE}`,
    description: frontmatter.abstract,
  };
}

async function BlogPost({ params }) {
  const slug = params.postSlug;
  const { content, frontmatter } = await loadBlogPost(slug);

  return (
    <article className={styles.wrapper}>
      <BlogHero
        title={frontmatter.title}
        publishedOn={frontmatter.publishedOn}
      />
      <div className={styles.page}>
        <MDXRemote source={content} components={COMPONENT_MAP} />
      </div>
    </article>
  );
}

export default BlogPost;
