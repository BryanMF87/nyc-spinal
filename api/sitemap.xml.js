export default async function handler(req, res) {
  try {
    const BASE_URL =
      process.env.SITE_URL || "https://spinaldisorders.com";

    const TOKEN = process.env.STORYBLOK_PROD_TOKEN;

    if (!TOKEN) {
      return res.status(500).send("Missing Storyblok token");
    }

    // -----------------------------
    // FETCH ALL STORIES
    // -----------------------------
    const response = await fetch(
      `https://api.storyblok.com/v2/cdn/stories?token=${TOKEN}&version=published&per_page=1000`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch Storyblok stories");
    }

    const data = await response.json();
    const stories = data.stories || [];

    // -----------------------------
    // CLEAN + NORMALIZE URLS
    // -----------------------------
    const seen = new Set();

    const urls = stories
      .map((story) => {
        let slug = story.full_slug;

        if (!slug) return null;

        // remove system folders
        if (slug.startsWith("global")) return null;

        // normalize homepage
        if (slug === "home") slug = "";

        // normalize trailing slash behavior
        const loc = `${BASE_URL}/${slug}`.replace(/\/$/, "");

        if (seen.has(loc)) return null;
        seen.add(loc);

        const lastmod = story.published_at
          ? `<lastmod>${new Date(
              story.published_at
            ).toISOString()}</lastmod>`
          : "";

        return `
<url>
  <loc>${loc}</loc>
  ${lastmod}
</url>`;
      })
      .filter(Boolean)
      .join("");

    // -----------------------------
    // XML WRAPPER
    // -----------------------------
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

    // -----------------------------
    // HEADERS (SEO + CDN CACHE)
    // -----------------------------
    res.setHeader("Content-Type", "text/xml");
    res.setHeader(
      "Cache-Control",
      "s-maxage=3600, stale-while-revalidate=86400"
    );

    return res.status(200).send(xml);
  } catch (error) {
    console.error("Sitemap error:", error);
    return res.status(500).send("Error generating sitemap");
  }
}