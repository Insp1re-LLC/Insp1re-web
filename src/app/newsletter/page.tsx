"use client";

import { useEffect, useState } from "react";
import NewsletterCard from "@/app/components/ui/NewsletterCard";
import Header from "@/app/components/ui/Header";
import Footer from "@/app/components/ui/Footer";
import { motion } from "framer-motion";

export default function NewsletterPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/api/newsletters")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <main
      id="main-content"
      className="min-h-screen bg-accent-cream text-text flex flex-col"
    >
      <Header />

      <section className="w-full max-w-6xl mx-auto px-6 pt-24 pb-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-heading text-brand font-bold mb-4"
        >
          Read Our Latest Newsletter
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-text/80"
        >
          Health and wellness insights, delivered weekly to your inbox.
        </motion.p>
      </section>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 px-6 pb-20 max-w-6xl mx-auto w-full">
        {posts.map((post, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            viewport={{ once: true }}
          >
            <NewsletterCard post={post} />
          </motion.div>
        ))}
      </section>

      <Footer topWaveColor="#fff9f3" />
    </main>
  );
}
