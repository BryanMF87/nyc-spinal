// generate-sitemap.mjs
// Run this before your build: node generate-sitemap.mjs
// It fetches all published stories from Storyblok and writes public/sitemap.xml

import "dotenv/config";
import { writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

// ─── CONFIG ────────────────────────────────────────────────────────────────────
const STORYBLOK_TOKEN = process.env.STORYBLOK_PROD_TOKEN;
if (!STORYBLOK_TOKEN) throw new Error("STORYBLOK_PROD_TOKEN not found in .env");
const BASE_URL = process.env.SITE_URL || "https://spinaldisorders.com";
const FOLDERS = ["", "conditions", "procedures"]; // root + your two folders
// ───────────────────────────────────────────────────────────────────────────────

const __dirname = dirname(fileURLToPath(import.meta.url));

async function fetchStories(startsWith = "") {
  const perPage = 100;
  let page = 1;
  let allStories = [];

  while (true) {
    const params = new URLSearchParams({
      token: STORYBLOK_TOKEN,
      version: "published",
      per_page: perPage,
      page,
      ...(startsWith && { starts_with: startsWith + "/" }),
    });

    const res = await fetch(
      `https://api.storyblok.com/v2/cdn/stories?${params}`
    );

    if (!res.ok) {
      throw new Error(`Storyblok API error: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    const stories = data.stories ?? [];
    allStories = allStories.concat(stories);

    // Stop when we've fetched everything
    if (stories.length < perPage) break;
    page++;
  }

  return allStories;
}

function slugToUrl(fullSlug) {
  // Storyblok uses "home" for the root page — map it to "/"
  if (fullSlug === "home") return BASE_URL + "/";
  return `${BASE_URL}/${fullSlug}`;
}

function buildXml(stories) {
  const today = new Date().toISOString().split("T")[0];

  const urlEntries = stories
    .map((story) => {
      const loc = slugToUrl(story.full_slug);
      const lastmod = (story.published_at ?? story.created_at ?? today).split(
        "T"
      )[0];

      // Assign priority by folder
      let priority = "0.5";
      if (story.full_slug === "home" || story.full_slug === "") {
        priority = "1.0";
      } else if (
        story.full_slug.startsWith("conditions/") ||
        story.full_slug.startsWith("procedures/")
      ) {
        priority = "0.8";
      }

      return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
}

async function main() {
  console.log("Fetching stories from Storyblok...");

  // Fetch root stories + each named folder in parallel
  const results = await Promise.all(
    FOLDERS.map((folder) => fetchStories(folder))
  );

  // Flatten and deduplicate by full_slug
  const seen = new Set();
  const stories = results.flat().filter((s) => {
    if (seen.has(s.full_slug)) return false;
    seen.add(s.full_slug);
    return true;
  });

  console.log(`Found ${stories.length} stories total.`);

  const xml = buildXml(stories);
  const outPath = resolve(__dirname, "public", "sitemap.xml");
  writeFileSync(outPath, xml, "utf-8");

  console.log(`sitemap.xml written to ${outPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
