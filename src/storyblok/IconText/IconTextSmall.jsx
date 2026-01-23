import { storyblokEditable } from "@storyblok/react";
import { Icon } from "@iconify/react";

export default function IconTextSmall({ blok }) {
  const { icon, heading, text, color } = blok;

  return (
    <div
      {...storyblokEditable(blok)}
      className="flex items-start space-x-4"
    >
      {icon && (
        <Icon
          icon={icon}
          className={`w-6 h-6 flex-shrink-0 mt-1 ${
            color ? "text-white" : "text-secondary"
          }`}
        />
      )}

      <div>
        {heading && (
          <h4
            className={`font-semibold mb-1 ${
              color ? "text-white" : "text-primary"
            }`}
          >
            {heading}
          </h4>
        )}

        {text && (
          <p
            className={`text-sm ${
              color ? "text-white/90" : "text-gray-600"
            }`}
          >
            {text}
          </p>
        )}
      </div>
    </div>
  );
}
