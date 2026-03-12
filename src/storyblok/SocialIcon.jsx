import { Icon } from "@iconify/react";
import { storyblokEditable } from "@storyblok/react";

export default function SocialIcon({ blok }) {
  const url =
    blok.link?.url ||
    blok.link?.cached_url ||
    null;

  if (!blok.icon || !url) return null;

  return (
    <a
      {...storyblokEditable(blok)}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={blok.label || "Social link"}
      className="text-secondary hover:opacity-80 transition"
    >
      <Icon
        icon={blok.icon.icon}
        className="text-xl"
      />
    </a>
  );
}
