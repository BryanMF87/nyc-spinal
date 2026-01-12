import { Helmet } from "react-helmet-async";

const SITE_URL = "https://www.nycspinaldisorders.com";
const SITE_NAME = "New York Center for Spinal Disorders";
const DEFAULT_TITLE = "New York Center for Spinal Disorders";
const DEFAULT_DESCRIPTION =
  "Expert spine care in New York City. Board-certified orthopedic surgeons specializing in minimally invasive spine treatments.";
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/logo-header.png`;

const SEO = ({ blok, story }) => {
  if (!story) return null;

  const {
    title,
    description,
    keywords,
    author,
    noindex,
    canonical_url,
    og_title,
    og_description,
    og_image,
    twitter_title,
    twitter_description,
    twitter_image,
  } = blok || {};

  const autoCanonical =
    story.full_slug === "home"
      ? SITE_URL
      : `${SITE_URL}/${story.full_slug}`;

  const canonical = canonical_url || autoCanonical;

  const finalTitle = title || DEFAULT_TITLE;
  const finalDescription = description || DEFAULT_DESCRIPTION;

  const finalOgImage =
    og_image?.filename || twitter_image?.filename || DEFAULT_OG_IMAGE;

  return (
    <Helmet>
      {/* Core */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />

      {keywords && <meta name="keywords" content={keywords} />}
      {author && <meta name="author" content={author} />}

      <meta
        name="robots"
        content={noindex ? "noindex, nofollow" : "index, follow"}
      />

      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={og_title || finalTitle} />
      <meta
        property="og:description"
        content={og_description || finalDescription}
      />
      <meta property="og:image" content={finalOgImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content={twitter_title || finalTitle}
      />
      <meta
        name="twitter:description"
        content={twitter_description || finalDescription}
      />
      <meta name="twitter:image" content={finalOgImage} />

      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Helmet>
  );
};

export default SEO;
