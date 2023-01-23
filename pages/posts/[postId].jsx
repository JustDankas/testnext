import Link from "next/link";
import React, { Component } from "react";
function Post({ post }) {
  return (
    <div>
      <h1>Data for post {post.id}</h1>
      <p>{post.body}</p>
      <Link href={"/posts"}>posts</Link>
    </div>
  );
}

export default Post;

export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return {
    paths: data.map((post) => {
      return {
        params: { postId: `${post.id}` },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.postId}`
  );
  const data = await response.json();
  return {
    props: { post: data },
    // props: {},
  };
}
