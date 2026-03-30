import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const FooterLink = ({ blok }) => {
  const link = blok?.link;
  if (!link) return null;

  console.log(blok.label, link);

  const label = blok.label || link?.story?.name || "Link";

  const baseClasses =
    "group flex items-center text-gray-300 hover:text-accent transition-colors";

  const content = (
    <>
      <span>{label}</span>
      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
    </>
  );

  if (link.linktype === "story") {
    const href =
      link.cached_url === "home"
        ? "/"
        : `/${link.cached_url}`;

    return (
      <Link to={href} className={baseClasses}>
        {content}
      </Link>
    );
  }

  if (link.linktype === "asset" || link.linktype ==="url") {
    const href = link.url;
    if (!href) return null;

    return (
      <a
        href={href}
        target={link.target || "_blank"}
        rel="noopener noreferrer"
        className={baseClasses}
      >
        {content}
      </a>
    );
  };
};

export default FooterLink;