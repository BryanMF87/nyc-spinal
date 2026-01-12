import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";

export default function SectionWrapper({ blok }) {

  const {
    text,
    background_color,
    background_image,
    background_image_opacity,
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
        className={`relative w-full overflow-hidden ${background_color} ${text_align}`}
    >

      {/* Background layer */}
      {background_image?.filename && (
        <div
          className="absolute z-0 inset-0 bg-cover bg-center"
          style={background_image?.filename
            ? { 
                backgroundImage: `url(${background_image.filename})`, 
                backgroundSize: "cover", 
                backgroundPosition: "center",
                opacity: `${background_image_opacity}%`,
              }
            : {}
          }
        ></div>
      )}

      {/* Content layer */}
      <div
        className={`${widthClass} ${spacing_vertical} relative z-10 items-start mx-auto px-4 grid grid-cols-1 md:px-6 lg:px-8`}
      >

        {/* Body block */}
        <div className={`grid grid-cols-1 ${gapClass}`}>
          {blok.body?.map((nestedBlok) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
          ))}
        </div>
      </div>
    </section>
  );
}
