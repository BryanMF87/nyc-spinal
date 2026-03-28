import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const FooterLink = ({ blok }) => {
  const link = blok?.link;

  if (!link) return null;

  const linkType = link.linktype;

  const label = blok.label || link?.story?.name || "Link";

  const baseClasses =
    "group flex items-center text-gray-300 hover:text-blue-400 transition-colors";

  /**
   * STORY (internal page)
   */
  if (linkType === "story") {
    const href = link.cached_url
      ? link.cached_url === "home"
        ? "/"
        : `/${link.cached_url}`
      : "/";

    return (
      <Link to={href} className={baseClasses}>
        <span>{label}</span>
        <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
      </Link>
    );
  }

  /**
   * ASSET (PDF, files, downloads)
   */
  if (linkType === "asset") {
    const href = link.url;

    if (!href) return null;

    return (
      <a
        href={href}
        target={link.target || "_blank"}
        rel="noopener noreferrer"
        className={baseClasses}
      >
        <span>{label}</span>
        <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
      </a>
    );
  }

  /**
   * EXTERNAL URL
   */
  if (linkType === "url") {
    const href = link.url;

    if (!href) return null;

    return (
      <a
        href={href}
        target={link.target || "_blank"}
        rel="noopener noreferrer"
        className={baseClasses}
      >
        <span>{label}</span>
        <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
      </a>
    );
  }

  /**
   * SAFETY NET (unknown link type)
   */
  return null;
};

export default FooterLink;
