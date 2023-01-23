import React, { Component } from "react";
import { useRouter } from "next/router";
function DocsPage() {
  const router = useRouter();
  const { params = [] } = router.query;

  if (params.length == 1) return <h1>Page for feature {params[0]}</h1>;
  else if (params.length == 2)
    return (
      <h1>
        Page for feature {params[0]} and concept {params[1]}
      </h1>
    );
  return <h1>Docs Page</h1>;
}

export default DocsPage;
