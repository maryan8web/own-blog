import React from "react";
import AllPosts from "./AllPosts";
import { getAllPosts } from "@/lib/posts-util";
import { Post } from "@/types/Post";
import Head from "next/head";

interface Props {
  posts: Post[];
}

const AllPostsPage = ({ posts }: Props) => {
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="A list of all programming tutorials and posts."
        />
      </Head>
      <AllPosts posts={posts} />
    </>
  );
};

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: { posts: allPosts },
  };
}

export default AllPostsPage;
