import { StoryblokComponent, storyblokEditable } from "@storyblok/react";

export default function Section1Col({ blok }) {

  const {
    background_color,
    background_image,
    spacing_vertical,
    text_align,
    width,
    gap
  } = blok;

  const widthOptions = {
    small: "max-w-3xl",
    medium: "max-w-5xl",
    default: "max-w-6xl",
    wide: "max-w-7xl",
    full: "max-w-none", 
  }

  const widthClass = widthOptions[width];

  const gapOptions = {
    none: "gap-0",
    sm: "gap-8",
    md: "gap-12",
    lg: "gap-14",
    xl: "gap-16",
  }

  const gapClass = gapOptions[gap];

  return (
    <section
        {...storyblokEditable(blok)}
        className={`relative w-full ${background_color} ${text_align}`}
        style={background_image?.filename
            ? { bacgroundImage: `url(${background_image.filename})`, backgroundSize: "cover", backgroundPosition: "center"}
            : {}
        }
    >
      <div
        className={`${widthClass} ${spacing_vertical} items-start mx-auto px-4 grid grid-cols-1 md:px-6 lg:px-8`}
      >
        <div className={`grid grid-cols-1 ${gapClass}`}>
          {blok.column?.map((nestedBlok) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
          ))}
        </div>
      </div>
    </section>
  );
}
