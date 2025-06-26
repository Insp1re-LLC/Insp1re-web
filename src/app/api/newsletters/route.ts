// src/app/api/newsletters/route.ts

import { NextResponse } from "next/server";
import Parser from "rss-parser";

const parser = new Parser();

export async function GET() {
  const feed = await parser.parseURL("https://honeybeefeed.beehiiv.com/feed");
  const posts = feed.items.slice(0, 5).map((item) => ({
    title: item.title ?? "",
    link: item.link ?? "#",
    pubDate: item.isoDate ?? "",
    excerpt: item.contentSnippet ?? "",
  }));
  return NextResponse.json({ posts });
}
