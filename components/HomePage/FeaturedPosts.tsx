import React from "react";
import classes from "./featured-posts.module.css";
import PostsGrid from "../posts/PostsGrid";
import { Post } from "@/types/Post";

interface Props {
  posts: Post[];
}

const FeaturedPosts = ({ posts }: Props) => {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default FeaturedPosts;
