import { useState } from "react";
import { StoryblokComponent } from "@storyblok/react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import HeaderItemMobile from "./HeaderItemMobile";

const Header = ({ blok }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="relative bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" onClick={() => setMobileOpen(false)}>
          <img
            src={blok.logo.filename}
            alt={blok.logo.alt || "Logo"}
            width={180}
            height={50}
            className="transition-transform duration-300 hover:scale-105"
          />
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          {blok.navigation.map((nestedBlok) => (
            <StoryblokComponent
              blok={nestedBlok}
              key={nestedBlok._uid}
            />
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile navigation */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-200 px-4 py-4">
          {blok.navigation.map((nestedBlok) => (
            <HeaderItemMobile
              key={nestedBlok._uid}
              blok={nestedBlok}
            />
          ))}
        </div>
      )}
    </nav>
  );
};

export default Header;
