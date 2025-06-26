"use client";

import { useEffect, useState } from "react";
import NewsletterCard from "@/app/components/ui/NewsletterCard";

export default function NewsletterPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/api/newsletters")
      .then((res) => res.json())
      .then((data) => setPosts(data.posts));
  }, []);

  return (
    <main className="bg-accent-cream py-16 px-6">
      <div className="max-w-5xl mx-auto space-y-12">
        <h2 className="text-3xl font-heading text-brand">
          Latest News & Inspiration
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <NewsletterCard key={i} post={post} />
          ))}
        </div>
      </div>
    </main>
  );
}
