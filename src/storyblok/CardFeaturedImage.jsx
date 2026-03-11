import { render } from "storyblok-rich-text-react-renderer";
import { storyblokEditable } from "@storyblok/react";

export default function CardFeaturedImage({ blok }) {
  const { heading, text, image, decor } = blok;

  return (
    <div className="relative">
      <div className="aspect-square">
        <div className="relative h-full w-full overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-400/20 to-white/20 backdrop-blur-sm" />
          <div className="absolute -inset-1 bg-gradient-to-r from-sky-400/30 via-white/20 to-sky-400/30 blur-2xl" />
          <div
            className="relative h-full w-full transform transition-transform duration-700 hover:scale-105"
            {...storyblokEditable(blok)}
          >
            <img
              src={image?.filename}
              alt={image?.alt || ""}
              className="h-full w-full object-cover rounded-2xl"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#003666]/50 to-transparent rounded-2xl" />

            <div className="darkmode absolute bottom-0 left-0 right-0 p-8 text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{heading}</h3>
              <div className="text-white">{render(text)}</div>
            </div>

            {decor && (
              <>
                <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-sky-300/50 rounded-tl-xl" />
                <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-sky-300/50 rounded-tr-xl" />
                <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-sky-300/50 rounded-bl-xl" />
                <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-sky-300/50 rounded-br-xl" />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
