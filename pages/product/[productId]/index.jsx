import React, { Component } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
function ProductDetails() {
  const router = useRouter();
  const productId = router.query.productId;
  return (
    <div>
      <h1>Details about {productId}</h1>
      <Link href={"/product"}>products</Link>
    </div>
  );
}

export default ProductDetails;
