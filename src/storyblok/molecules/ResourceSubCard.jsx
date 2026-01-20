import { storyblokEditable } from "@storyblok/react";
import { Icon } from "@iconify/react/dist/iconify.js";

export function ResourceSubCard({ blok }) {

  const {
    icon,
    heading,
    text,
  } = blok;

  return (
    <div
      {...storyblokEditable(blok)}
      className={`flex items-start space-x-4 text-left rounded-lg`}
    >
      <Icon icon={icon.icon} className="h-6 w-6 text-accent" />
      <h4>{heading}</h4>
      <p>{text}</p>
    </div>
  );
}