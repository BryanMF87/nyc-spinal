import { StoryblokComponent } from "@storyblok/react";

const Card = ({ blok }) => {
  const {
    background_color,
    padding,
    spacing,
    shadow,
    rounding,
    image,
    image_height,
  } = blok;

  const spacingOptions = {
    none: "gap-0",
    xs: "gap-2",
    sm: "gap-4",
    md: "gap-6",
    lg: "gap-8",
  };

  const spacingClass = spacingOptions[spacing]

  const shadowClass = shadow ? "shadow-lg" : "";

  const roundingClasses = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xxl: "rounded-2xl",
  };

  const imageHeightClasses = {
    sm: "h-48",
    lg: "h-80",
  };

  const roundedClass = roundingClasses[rounding];
  const imageHeightClass = imageHeightClasses[image_height] || "h-48";

  const darkModeBackgrounds = [
    "bg-gradient-to-br from-[#003666] to-[#0062B1]",
    "bg-[#003666]",
  ];

  const isDark = darkModeBackgrounds.includes(background_color);
  const typographyClass = isDark ? "darkmode" : "";

  const isVideo = (filename = "") =>
  /\.(mp4|webm|ogg)$/i.test(filename);

  return (
    <div className={`card flex flex-col h-fit ${shadowClass} ${roundedClass} overflow-hidden`}>
      {/* ✅ Top Media (Image OR Video) */}
        {image?.filename?.trim() && (
          <div
            className={`relative bg-gray-100 w-full ${imageHeightClass} rounded-t-${rounding}`}
          >
            {isVideo(image.filename) ? (
              <video
                controls
                className={`w-full h-full object-cover rounded-t-${rounding}`}
                poster={image.poster?.filename || undefined}
              >
                <source src={image.filename} type="video/mp4" />
                Your browser does not support video playback.
              </video>
            ) : (
              <img
                src={image.filename}
                alt={image.alt || ""}
                className={`w-full h-full object-cover rounded-t-${rounding}`}
              />
            )}
          </div>
        )}


      {/* 🧾 Card Body */}
      <div
        className={`flex flex-col h-fit ${spacingClass} ${typographyClass} ${padding} ${background_color} ${
          image?.filename ? `rounded-t-none` : roundedClass
        } rounded-b-${rounding}`}
      >
        {blok.body?.map((nestedBlok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </div>
    </div>
  );
};

export default Card;
