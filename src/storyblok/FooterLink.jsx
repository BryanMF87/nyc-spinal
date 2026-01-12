import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const FooterLink = ({ blok }) => {
  const isInternal = blok.link?.story;

  const label = blok.label || blok.link?.story?.name;

  return isInternal ? (
    <Link
      to={"/" + blok.link.cached_url}
      className="group flex items-center text-gray-300 hover:text-blue-400 transition-colors"
    >
      <span>{label}</span>
      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
    </Link>
  ) : (
    <a
      href={blok.link?.url}
      className="group flex items-center text-gray-300 hover:text-blue-400 transition-colors"
    >
      <span>{label}</span>
      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
    </a>
  );
};

export default FooterLink;
