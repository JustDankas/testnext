import React, { Component } from "react";
import Link from "next/link";
import styles from "@/styles/home.module.css";
import { useRouter } from "next/router";
function Home() {
  const router = useRouter();
  function handleClick() {
    window.alert("order placed");
    router.push("/product");
  }
  return (
    <div className={styles.main}>
      <h1>Welcome Home</h1>
      <Link href={"/blog"}>Blog</Link>
      <Link href={"/product"}>Product</Link>
      <button onClick={handleClick}>Complete order</button>
    </div>
  );
}

export default Home;
