import { storyblokEditable } from "@storyblok/react";
import { Icon } from "@iconify/react/dist/iconify.js";

const AudioCard = ({ blok }) => {
  const audioSrc = blok.audio_file?.filename || "";
  const transcriptHref = blok.link?.cached_url || "";

  return (
    <div
      {...storyblokEditable(blok)}
      className="bg-white rounded-xl shadow-lg p-6"
    >
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className="p-3 bg-sky-100 rounded-full">
          <Icon
            icon={blok.icon?.icon || "lucide:radio"}
            className="w-6 h-6 text-[#0062B1]"
          />
        </div>

        {/* Content */}
        <div className="flex-1">
          {blok.heading && (
            <h3 className="text-lg font-semibold text-[#003666] mb-4">
              {blok.heading}
            </h3>
          )}

          {audioSrc && (
            <audio controls className="w-full mb-4">
              <source src={audioSrc} type="audio/mpeg" />
              Your browser does not support audio playback.
            </audio>
          )}

          {blok.link && (
            <a
              href={transcriptHref}
              target={blok.link?.target || "_blank"}
              rel="noopener noreferrer"
              className="text-[#0062B1] hover:text-[#003666] flex items-center"
            >
              {blok.link_label}
              <Icon icon="lucide:arrow-right" className="w-4 h-4 ml-2" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default AudioCard;
