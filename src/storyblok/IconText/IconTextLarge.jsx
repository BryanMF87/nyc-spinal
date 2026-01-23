import { storyblokEditable } from "@storyblok/react";
import { Icon } from "@iconify/react";

export default function IconTextLarge({ blok }) {
  const { icon, heading, text, color } = blok;

  return (
    <div
      {...storyblokEditable(blok)}
      className="flex items-start space-x-4"
    >
      {icon && (
        <Icon
          icon={icon.icon}
          className={`w-8 h-8 flex-shrink-0 ${
            color ? "text-secondary" : "text-white"
          }`}
        />
      )}

      <div>
        {heading && (
          <h3
            className={`text-xl font-semibold mb-2 ${
              color ? "text-primary" : "text-white"
            }`}
          >
            {heading}
          </h3>
        )}

        {text && (
          <p className={`${color ? "text-default" : "text-white"}`}>
            {text}
          </p>
        )}
      </div>
    </div>
  );
}
