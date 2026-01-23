import { storyblokEditable } from "@storyblok/react";
import { Icon } from "@iconify/react";

export default function IconTextFeatured({ blok }) {
  const { icon, heading, text, color } = blok;

  return (
    <div {...storyblokEditable(blok)} className="text-left">
      <div className="flex items-center space-x-4 mb-4">
        <div
          className={`p-3 rounded-lg ${
            color ? "bg-white/10" : "bg-secondary/90"
          }`}
        >
          {icon && (
            <Icon
              icon={icon.icon}
              className={`w-6 h-6 ${
                color ? "text-secondary" : "text-light"
              }`}
            />
          )}
        </div>

        {heading && (
          <h4
            className={`text-lg font-semibold ${
              color ? "text-primary" : "text-white"
            }`}
          >
            {heading}
          </h4>
        )}
      </div>

      {text && (
        <p className={`${color ? "text-white" : "text-default"} pl-16`}>
          {text}
        </p>
      )}
    </div>
  );
}
