import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { StoryblokComponent } from "@storyblok/react";

const HeaderItem = ({ blok }) => {
  return (
    <div className="relative group focus-within">
      <Link
        to={"/" + blok.link?.cached_url}
        className="flex items-center space-x-1 text-default hover:text-secondary"
      >
        <span>{blok.title}</span>
        {blok.submenu?.length > 0 && <ChevronDown size={16} />}
      </Link>

      {blok.submenu?.length > 0 && (
        <div
          className="absolute left-0 top-full pt-2 w-64 opacity-0 invisible
                     group-hover:opacity-100 group-hover:visible
                     group-focus-within:opacity-100 group-focus-within:visible
                     transition-all"
        >
          <div className="bg-white border border-gray-200 rounded-md shadow-lg">
            {blok.submenu.map((nestedBlok) => (
              <StoryblokComponent
                blok={nestedBlok}
                key={nestedBlok._uid}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderItem;
