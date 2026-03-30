export default async function handler(req, res) {
  try {
    const BASE_URL =
      process.env.SITE_URL || "https://nyspinaldisorders.com/";

    const TOKEN = process.env.STORYBLOK_PROD_TOKEN;

    if (!TOKEN) {
      return res.status(500).send("Missing Storyblok token");
    }

    const response = await fetch(
      `https://api.storyblok.com/v2/cdn/stories?token=${TOKEN}&version=published&per_page=100`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch Storyblok stories");
    }

    const data = await response.json();

    const stories = data.stories || [];

    const pages = stories.filter((story) => {
      return (
        story.is_folder === false &&
        story.full_slug &&
        !story.full_slug.startsWith("global")
      );
    });

    const urls = pages
      .map((story) => {
        const slug =
          story.full_slug === "home" ? "" : story.full_slug;

        const lastmod = story.published_at
          ? `<lastmod>${new Date(story.published_at).toISOString()}</lastmod>`
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

    res.setHeader("Content-Type", "text/xml");
    res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");
    res.status(200).send(xml);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error generating sitemap");
  }
}