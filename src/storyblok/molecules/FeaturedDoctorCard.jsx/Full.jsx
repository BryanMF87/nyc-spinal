import { StoryblokComponent } from "@storyblok/react";

const FeaturedDoctorCardFull = ({
  image,
  name,
  title,
  specialty,
  description,
  buttons,
}) => {
  return (
    <div className="flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      
      {/* Image */}
      {image?.filename && (
        <div className="h-64 md:h-[390px] overflow-hidden">
          <img
            src={image.filename}
            alt={image.alt || name}
            className="w-full h-full object-cover object-[center_30%]"
          />
        </div>
      )}

      {/* Content */}
      <div className="flex flex-col flex-grow justify-between p-6 md:p-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
            {name}
          </h2>

          {title && (
            <p className="text-base md:text-lg text-secondary mb-1">
              {title}
            </p>
          )}

          {specialty && (
            <p className="text-sm text-gray-600 mb-4">
              {specialty}
            </p>
          )}

          {description && (
            <p className="text-gray-700 mb-6">
              {description}
            </p>
          )}
        </div>

        {/* Buttons */}
        {buttons.length > 0 && (
          <div className="flex flex-col sm:flex-row gap-4 sm:justify-between">
            {buttons.map((blok) => (
              <StoryblokComponent blok={blok} key={blok._uid} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedDoctorCardFull;
