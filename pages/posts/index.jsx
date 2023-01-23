import Link from "next/link";
import React, { Component } from "react";
function Posts({ posts }) {
  return (
    <ul>
      <h1>List of posts</h1>
      {posts?.map((post) => (
        <li className="test">
          <Link href={`/posts/${post.id}`}>
            <h3>{post.id}</h3>
            <p>{post.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Posts;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return {
    props: { posts: data },
  };
}
