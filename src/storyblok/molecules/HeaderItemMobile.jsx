import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const HeaderItemMobile = ({ blok }) => {
  const [open, setOpen] = useState(false);
  const hasChildren = blok.submenu?.length > 0;

  return (
    <div className="border-b border-gray-100 pb-2 mb-2">
      <div className="flex justify-between items-center">
        <Link
          to={"/" + blok.link?.cached_url}
          className="py-2 text-gray-700"
        >
          {blok.title}
        </Link>

        {hasChildren && (
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle submenu"
          >
            <ChevronDown
              size={16}
              className={`transition-transform ${open ? "rotate-180" : ""}`}
            />
          </button>
        )}
      </div>

      {hasChildren && open && (
        <div className="pl-4 mt-2 space-y-1">
          {blok.submenu.map((subItem) => (
            <HeaderItemMobile
              key={subItem._uid}
              blok={subItem}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HeaderItemMobile;
