import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { render } from "storyblok-rich-text-react-renderer";

export default function InfoCard({ blok }) {
  const needsWhiteText = ["blue-900", "gradient-to-r from-[#003666] to-[#0062B1]"].includes(blok.background_color);

  const headlineColorClass = needsWhiteText ? "text-white" : "text-blue-900";
  const iconColorClass = needsWhiteText ? "text-white" : "text-blue-600";

  const hasIcon = blok.icon && blok.icon.icon?.trim() !== "";
  const hasHeadline = blok.headline?.trim() !== "";

  return (
    <div
      {...storyblokEditable(blok)}
      className={`bg-${blok.background_color} rounded-2xl h-fit shadow-lg p-6 md:p-8 ${needsWhiteText ? "text-white" : "text-gray-900"}`}
    >
      {hasIcon && hasHeadline ? (
        <div className="flex items-center gap-4 mb-4">
          <Icon icon={blok.icon.icon} className={`w-8 h-8 ${iconColorClass}`} />
          <h2 className={`text-2xl font-bold ${headlineColorClass}`}>{blok.headline}</h2>
        </div>
      ) : hasHeadline ? (
        <h2 className={`text-2xl font-bold mb-4 ${headlineColorClass}`}>{blok.headline}</h2>
      ) : null}

      {blok.text_content && render(blok.text_content)}

      {blok.blocks?.length > 0 && (
        <div {...storyblokEditable(blok)} className="flex flex-wrap gap-6">
          {blok.blocks.map((nested) => (
            <StoryblokComponent blok={nested} key={nested._uid} />
          ))}
        </div>
      )}
    </div>
  );
}
