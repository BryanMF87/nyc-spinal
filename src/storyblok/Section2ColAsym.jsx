import { StoryblokComponent, storyblokEditable } from "@storyblok/react";

export default function Section2ColAsym({ blok }) {
  const {
    background_color,
    background_image,
    spacing_vertical,
    text_align,
    width,
  } = blok;

  return (
    <section
      {...storyblokEditable(blok)}
      className={`relative w-full ${background_color} ${background_image} ${text_align}`}
    >
      <div
        className={`${width} ${spacing_vertical} items-start mx-auto px-4 grid grid-cols-1 gap-12 md:grid-cols-[2fr_1fr] md:px-6 lg:px-8`}
      >
        <div className="grid grid-cols-1 gap-8">
          {blok.left_column?.map((nestedBlok) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
          ))}
        </div>
        <div className="grid grid-cols-1 gap-8">
          {blok.right_column?.map((nestedBlok) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
          ))}
        </div>
      </div>
    </section>
  );
}
