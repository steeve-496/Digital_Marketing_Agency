import React, { useEffect, useState } from "react";
import BlockRenderer from "./components/BlockRenderer";

export default function App() {
  const [page, setPage] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/pages")
      .then((res) => res.json())
      .then((pages) => {
        const home = pages.find((p) => p.path === "/");
        return fetch(`http://localhost:5000/api/pages/${home.id}`);
      })
      .then((res) => res.json())
      .then((pageData) => setPage(pageData));
  }, []);

  if (!page) return <div className="loading">Loading...</div>;

  return (
    <div>
      <BlockRenderer blocks={page.blocks} />
    </div>
  );
}