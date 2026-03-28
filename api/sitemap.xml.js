export default async function handler(req, res) {
  try {
    const BASE_URL =
      process.env.SITE_URL || "https://spinaldisorders.com";

    const TOKEN = process.env.STORYBLOK_PROD_TOKEN;

    if (!TOKEN) {
      return res.status(500).send("Missing Storyblok token");
    }

    const response = await fetch(
      `https://api.storyblok.com/v2/cdn/links?token=${TOKEN}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch Storyblok links");
    }

    const data = await response.json();

    const links = Object.values(data.links);

    const pages = links.filter(
      (link) =>
        !link.is_folder &&
        link.published &&
        !link.slug.startsWith("global")
    );

    const urls = pages
      .map((page) => {
        const slug = page.slug === "home" ? "" : page.slug;

        const lastmod = page.published_at
          ? `<lastmod>${new Date(page.published_at).toISOString()}</lastmod>`
          : "";

        return `
          <url>
            <loc>${BASE_URL}/${slug}</loc>
            ${lastmod}
          </url>
        `;
      })
      .join("");

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

    // ✅ headers BEFORE send
    res.setHeader("Content-Type", "text/xml");
    res.setHeader(
      "Cache-Control",
      "s-maxage=3600, stale-while-revalidate"
    );

    res.status(200).send(xml);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error generating sitemap");
  }
}