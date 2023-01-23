import Link from "next/link";
import React, { Component } from "react";
function ProductIndex() {
  return (
    <>
      <h1>Product List</h1>
      <ul>
        <li>
          <Link href="/product/1">Product 1</Link>
        </li>
        <li>
          <Link href="/product/2">Product 2</Link>
        </li>
        <li>
          <Link href="/product/3">Product 3</Link>
        </li>
      </ul>
    </>
  );
}

export default ProductIndex;
