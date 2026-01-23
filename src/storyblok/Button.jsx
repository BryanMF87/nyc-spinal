import { storyblokEditable } from "@storyblok/react";
import { ChevronRight } from "lucide-react";

const Button = ({ blok }) => {

    const {
        text,
        link,
        arrow_icon,
        type = "primary", 
        variant = "filled",
        size = "large",
        borderRadius = "medium",
        fullWidth = false,
        center = false,
    } = blok;

  const radiusOptions = {
    none: "rounded-none",
    small: "rounded-sm",
    medium: "rounded-md",
    large: "rounded-lg",
    xlarge: "rounded-xl",
    full: "rounded-full",
  };

  const sizeOptions = {
    small: "px-4 py-2",
    large: "px-6 py-3",
  };

  const typeStyles = {
    primary: {
        filled: {
            bg: "bg-secondary",
            text: "text-white",
            hoverBg: "hover:bg-primary",
            border: "",
            hoverText: "hover:text-white",
        },
        outline: {
            bg: "bg-transparent",
            text: "text-secondary",
            hoverBg: "hover:bg-secondary/10",
            border: "border border-secondary",
            hoverText: "hover:text-secondary",
        },
    },
    white: {
        filled: {
            bg: "bg-white",
            text: "text-primary",
            hoverBg: "hover:bg-white/90",
            border: "",
            hoverText: "hover:text-primary",
        },
        outline: {
            bg: "bg-transparent",
            text: "text-primary",
            hoverBg: "hover:bg-white/20",
            border: "border border-primary",
            hoverText: "hover:text-primary",
        },
    },
    accent: {
      filled: {
          bg: "bg-accent",
          text: "text-white",
          hoverBg: "hover:bg-secondary",
          border: "",
          hoverText: "hover:text-white",
      },
      outline: {
          bg: "bg-transparent",
          text: "text-accent",
          hoverBg: "hover:bg-accent/10",
          border: "border border-accent",
          hoverText: "hover:text-accent",
      }
    }
  };


  const { bg, text: textColor, hoverBg, border, hoverText } = typeStyles[type][variant];

  const borderRadiusClass = radiusOptions[borderRadius];
  const sizeClass = sizeOptions[size] || "px-6 py-3";
  const widthClass = fullWidth ? "w-full" : "w-fit";
  const centerClass = center ? "mx-auto" : "";
  const variantClass = `${bg} ${textColor} ${border} ${hoverBg} ${hoverText}`;

  const baseClasses = `font-normal flex items-center justify-center gap-2 font-semibold transition duration-300 ease-in-out text-sm md:text-base`;

  // Normalize href depending on link type
  const getHref = () => {
    if (!link) return "#";

    switch (link.linktype) {
      case "url":
        return link.url || link.cached_url || "#";
      case "story":
        return "/" + link.cached_url;
      case "email":
        return `mailto:${link.email}`;
      case "asset":
        return link.cached_url || "#";
      default:
        return "#";
    }
  };

  const href = getHref();

  return (
    <a
      {...storyblokEditable(blok)}
      href={href}
      target={link?.target || "_self"}
      rel="noopener noreferrer"
      className={`${sizeClass} ${baseClasses} ${widthClass} ${centerClass} ${borderRadiusClass} ${variantClass}`}
    >
      {text}
      {arrow_icon && <ChevronRight className="w-6 h-6" />}
    </a>
  ) 
};

export default Button;
