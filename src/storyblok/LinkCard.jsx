import { storyblokEditable } from "@storyblok/react";

export default function LinkCard({ blok }) {

  const {
    link,
    heading,
    text,
  } = blok;

  return (
    <a 
      {...storyblokEditable(blok)}
      className="block p-4 bg-white rounded-lg hover:bg-white/40 transition duration-300" 
      href={link.cached_url}
    >
      <h4 className="font-semibold text-base text-primary mb-1">
        {heading}
      </h4>
      <p className="text-sm text-default">
        {text}
      </p>
    </a>
  );
}