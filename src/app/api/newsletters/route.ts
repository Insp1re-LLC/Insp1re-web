// src/app/api/newsletter/route.ts
import { NextResponse } from "next/server";
import Parser from "rss-parser";

const parser = new Parser({
  customFields: {
    item: ["enclosure"],
  },
});

export async function GET() {
  const feed = await parser.parseURL(
    "https://rss.beehiiv.com/feeds/yvfCeNmno1.xml"
  );

  const posts = feed.items.slice(0, 5).map((item) => ({
    title: item.title || "",
    link: item.link || "",
    pubDate: item.pubDate || "",
    contentSnippet: item.contentSnippet || "",
    imageUrl: item.enclosure?.url,
  }));

  return NextResponse.json(posts);
}
