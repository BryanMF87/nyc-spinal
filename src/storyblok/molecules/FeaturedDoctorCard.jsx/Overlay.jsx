import { StoryblokComponent } from "@storyblok/react";

const FeaturedDoctorCardOverlay = ({
  image,
  name,
  title,
  specialty,
  buttons,
}) => {
  return (
    <div className="group relative h-[320px] md:h-[420px] overflow-hidden rounded-2xl">
      
      {image?.filename && (
        <img
          src={image.filename}
          alt={image.alt || name}
          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
        />
      )}

      <div className="absolute inset-0 bg-gradient group-hover:opacity-50 transition-opacity duration-500" />

      <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
        <h3 className="text-xl md:text-2xl font-bold">
          {name}
        </h3>

        {title && (
          <p className="text-sm md:text-base opacity-90">
            {title}
          </p>
        )}

        {specialty && (
          <p className="text-xs md:text-sm opacity-80 mt-1">
            {specialty}
          </p>
        )}

        {buttons.length > 0 && (
          <div className="mt-4">
            {buttons.map((blok) => (
              <StoryblokComponent blok={blok} key={blok._uid} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedDoctorCardOverlay;
