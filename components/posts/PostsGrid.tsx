import React from "react";
import PostItem from "./PostItem";
import classes from "./posts-grid.module.css";
import { Post } from "@/types/Post";

interface Props {
  posts: Post[];
}

const PostsGrid = ({ posts }: Props) => {
  if (!posts || posts.length === 0) {
    return <p>No posts available</p>;
  }

  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
};

export default PostsGrid;
