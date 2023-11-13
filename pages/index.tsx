import FeaturedPosts from "@/components/HomePage/FeaturedPosts";
import Hero from "@/components/HomePage/Hero";
import { getFeaturedPosts } from "@/lib/posts-util";
import { Post } from "@/types/Post";
import Head from "next/head";
import React from "react";

interface Props {
  posts: Post[];
}

const HomePage = ({ posts }: Props) => {
  return (
    <>
      <Head>
        <title>Maryan' Blog</title>
        <meta
          name="description"
          content="I post about programming and development."
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
};

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: { posts: featuredPosts },
  };
}

export default HomePage;
