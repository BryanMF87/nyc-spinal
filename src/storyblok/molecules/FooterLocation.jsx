import { Icon } from "@iconify/react/dist/iconify.js";

const FooterLocation = ({ blok }) => {
  const isPhone = blok.google_map_link?.url?.startsWith("tel:");

  return (
    <div className="relative flex">
      <div className="flex items-start space-x-4 bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm border border-gray-800 w-full">
        <Icon icon={blok.icon?.icon} className="w-6 h-6 text-blue-400 flex-shrink-0" />
        <div className="space-y-2">
          <h3 className="text-gray-100 font-medium">{blok.title}</h3>
          <a
            href={blok.google_map_link?.url}
            target={isPhone ? undefined : "_blank"}
            rel={isPhone ? undefined : "noopener noreferrer"}
            className="text-gray-300 leading-relaxed hover:text-blue-400 transition-colors block"
          >
            {/* If phone → single line */}
            {isPhone ? (
              blok.address
            ) : (
              <>
                {blok.address && <span>{blok.address}</span>}
                {blok.address_2 && <><br />{blok.address_2}</>}
              </>
            )}
          </a>

        </div>
      </div>
    </div>
  );
};

export default FooterLocation;
