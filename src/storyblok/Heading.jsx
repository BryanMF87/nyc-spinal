import { storyblokEditable } from "@storyblok/react";

/* Semantic level is controlled by the parent component */

export default function Heading({
  blok,
  title ="",
  variant = "section",
  color = "text-primary",
  as,
}) {

  // Heading component is used in each front-end component
  // This sets component-based typography standards for a component-based system
  // The heading component is added in a Storyblok block field for editor control 
  // or directly imported in the front-end for heading text fields
  const resolvedTitle = blok?.title || title;
  const resolvedVariant = blok?.variant || variant;
  const resolvedColor = blok?.color || color;

  const Tag = as || "h2";

  const variants = {
    "page-hero": "text-4xl font-bold leading-[135%] md:text-6xl md:leading-[125%]",
    "section-hero": "text-3xl font-bold leading-[135%] md:text-5xl md:leading-[125%]",
    "section": "text-2xl font-bold leading-[135%] md:text-3xl md:leading-[125%]",
    "card": "text-xl font-bold leading-[135%]",
    "label": "text-base font-semibold leading-[135%] md:text-lg md:leading-[125%]",
  };

  return (
    <Tag
      {...(blok ? storyblokEditable(blok) : {})}
      className={`${variants[resolvedVariant]} ${resolvedColor}`}
    >
      {resolvedTitle}
    </Tag>
  );
}