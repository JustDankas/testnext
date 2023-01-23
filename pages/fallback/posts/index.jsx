import Link from "next/link";
import React, { Component } from "react";
function FallbackPosts({ posts }) {
  return (
    <ul>
      <h1>List of posts</h1>
      {posts?.map((post) => (
        <li className="test">
          <Link href={`posts/${post.id}`}>
            <h3>{post.id}</h3>
            <p>{post.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default FallbackPosts;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return {
    props: { posts: data.slice(0, 10) },
    revalidate: 10, // Every 10 seconds if a user requests the html,
    // he/she will initiate page regeneration but will not be served the new html,
    // instead he/she can aqcuire it after it has been regenerated
  };
}
