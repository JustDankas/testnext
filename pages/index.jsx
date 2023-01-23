import React, { Component } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
function Home() {
  const router = useRouter();
  function handleClick() {
    window.alert("order placed");
    router.push("/product");
  }
  return (
    <div>
      <h1>Welcome Home</h1>
      <Link href={"/blog"}>Blog</Link>
      <Link href={"/product"}>Product</Link>
      <button onClick={handleClick}>Complete order</button>
    </div>
  );
}

export default Home;
