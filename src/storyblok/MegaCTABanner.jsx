import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

export default function MegaCTABanner({ blok }) {
  const {
    heading,
    text,
    buttons,
  } = blok;

  return (
    <section
      {...storyblokEditable(blok)}
      className="relative py-24 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#003666] via-[#0062B1] to-sky-800 opacity-90" />

      <div className="relative max-w-4xl mx-auto px-4 text-center text-white">
        {heading && (
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-8">
            {heading}
          </h2>
        )}

        {text && (
          <p className="text-xl text-sky-100 mb-12">
            {text}
          </p>
        )}

        {buttons?.length > 0 && (
          <div className="flex flex-col md:flex-row justify-center gap-4">
            {buttons.map((blok) => (
              <StoryblokComponent blok={blok} key={blok._uid} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
