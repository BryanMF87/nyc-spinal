import { StoryblokComponent } from "@storyblok/react";

const Footer = ({ blok }) => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 relative overflow-hidden" {...blok}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-24 -top-24 w-96 h-96 bg-blue-500 rounded-full opacity-5"></div>
        <div className="absolute -left-32 -bottom-32 w-96 h-96 bg-blue-400 rounded-full opacity-5"></div>
        <div className="absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-transparent via-gray-700 to-transparent opacity-30"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative">
        {/* Logo */}
        {blok.logo?.filename && (
          <div className="pt-16 pb-12 flex items-center justify-center">
            <div className="relative">
                <img
                src={blok.logo.filename}
                alt="Footer Logo"
                width={200}
                height={50}
                className="brightness-0 invert opacity-90"
                />
                <div className="absolute -inset-4 border border-blue-400 rounded-full opacity-20 animate-pulse"></div>
            </div>
          </div>
        )}

        {/* Locations */}
        {blok.locations?.length > 0 && (
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {blok.locations.map((nested) => (
              <StoryblokComponent blok={nested} key={nested._uid} />
            ))}
          </div>
        )}

        {/* Nav Links */}
        {blok.navigation_links?.length > 0 && (
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
              {blok.navigation_links.map((nested) => (
                <StoryblokComponent blok={nested} key={nested._uid} />
              ))}
            </div>
          </div>
        )}

        {/* Bottom Info */}
        <div className="border-t border-gray-800 py-6 text-center space-y-2 mt-10">
          <p className="text-gray-500 text-sm">
            © {year} {blok?.copyright_text}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
