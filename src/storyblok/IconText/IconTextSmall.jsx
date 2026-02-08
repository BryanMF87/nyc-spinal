import { storyblokEditable } from "@storyblok/react";
import { Icon } from "@iconify/react";

export default function IconTextSmall({ blok }) {
  const { icon, heading, text, color } = blok;

  return (
    <div
      {...storyblokEditable(blok)}
      className="flex flex-col"
    >
      <div className="flex items-center space-x-3">
        {icon && (
          <Icon
            icon={icon.icon}
            className={`w-6 h-6 flex-shrink-0 ${
              color ? "text-secondary" : "text-white"
            }`}
          />
        )}

        {heading && (
          <h4
            className={`font-semibold ${
              color ? "text-primary" : "text-white"
            }`}
          >
            {heading}
          </h4>
        )}
      </div>

      {text && (
        <div className="mt-.5 ml-9">
          <p className={`text-sm ${color ? "text-default" : "text-white"}`}>
            {text}
          </p>
        </div>
      )}
    </div>
  );
}
