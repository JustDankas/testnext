import { useRouter } from "next/router";
import React, { Component } from "react";
function FallbackPost({ post }) {
  const router = useRouter();

  if (router.isFallback) return <h1>Loading...</h1>;
  return (
    <div>
      <h1>Fallback post</h1>
      <h1>
        {post.id} {post.title}
      </h1>
      <h3>{post.body}</h3>
    </div>
  );
}

export default FallbackPost;

export async function getStaticPaths() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await response.json();
  return {
    paths: data.slice(0, 10).map((post) => {
      return {
        params: { postId: `${post.id}` },
      };
    }),
    /* Pre-rendered pages will display instantly,
     while not pre-rendered pages will display fallback content
     until rendered by nextjs which will also be saved for future
     renders of said page
     */
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();

  // Data not found so return error page
  if (!data || !data.id)
    return {
      notFound: true,
    };
  return {
    props: { post: data },
    revalidate: 10,
  };
}
