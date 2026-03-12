import { storyblokEditable } from "@storyblok/react";
import { Icon } from "@iconify/react/dist/iconify.js";


const LinkBlok = ({ blok }) => {

  const { link_to, icon_position, text_size } = blok;

  const baseClasses = `inline-flex items-center transition duration-200 link`;

  const textSizeClasses = {
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
  };

  const textSizeClass = textSizeClasses[text_size || "base"];

  // Resolve href from Storyblok link field
  const getHref = () => {
    if (!link_to) return "#";
    switch (link_to.linktype) {
      case "url":
        return link_to.url || link_to.cached_url || "#";
      case "story":
        return "/" + (link_to.cached_url?.split("/").slice(1).join("/") || "");
      case "email":
        return `mailto:${link_to.email}`;
      case "asset":
        return link_to.cached_url || "#";
      default:
        return "#";
    }
  };

  const href = getHref();

  return (
    <a
      {...storyblokEditable(blok)}
      href={href}
      target={link_to?.target || "_self"}
      rel="noopener noreferrer"
      className={`${baseClasses} ${textSizeClass}`}
    >
      {blok.icon?.icon && icon_position === "left" && <Icon icon={blok.icon.icon} className="w-4 h-4 mr-2" />}
      {blok.text}
      {blok.icon?.icon && icon_position === "right" && <Icon icon={blok.icon.icon} className="w-4 h-4 ml-2" />}
    </a>
  );
};

export default LinkBlok;
