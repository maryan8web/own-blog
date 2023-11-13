import PostContent from "@/components/posts/PostDetail/PostContent";
import { getPostData, getPostsFiles } from "@/lib/posts-util";
import React from "react";
import { GetStaticPropsContext } from "next";
import { Post } from "@/types/Post";
import Head from "next/head";

interface Props {
  post: Post;
}

const PostDetailPage = ({ post }: Props) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <PostContent post={post} />
    </>
  );
};

export function getStaticProps(context: GetStaticPropsContext) {
  const { params } = context;

  if (!params || typeof params.slug !== "string") {
    return {
      notFound: true,
    };
  }

  const { slug } = params;
  const postData = getPostData(slug);

  return {
    props: { post: postData },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFileNames = getPostsFiles();

  const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export default PostDetailPage;
