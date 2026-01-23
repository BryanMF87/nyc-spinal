import { StoryblokComponent } from "@storyblok/react";

const FeaturedDoctorCardOverlay = ({blok}) => {
  
  if (!blok) return null; // safety check
  
  const { image, name, title, specialty, buttons } = blok;

  return (
    <div className="group relative">
      <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl text-left overflow-hidden transform transition-all duration-500 hover:scale-105">

        <div className="relative h-[320px] md:h-[420px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-[#003666]/90 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
          <img
            src={image?.filename}
            alt={image?.alt || name}
            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
            style={{ objectPosition: "center 25%" }}
          />
        </div>

        <div className="p-8 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-sky-500/20 via-[#0062B1]/20 to-[#003666]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              {name}
            </h3>

            {title && (
              <p className="text-lg md:text-xl text-white mb-1">
                {title}
              </p>
            )}

            {specialty && (
              <p className="text-sm md:text-base text-white mb-6 md:mb-8">
                {specialty}
              </p>
            )}

            {buttons?.[0] && (
              <div className="flex flex-col sm:flex-row gap-4 sm:justify-between">
                {buttons.map((blok) => (
                  <StoryblokComponent blok={blok} key={blok._uid} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="absolute -inset-4 bg-gradient-to-r from-sky-600 via-[#0062B1] to-[#003666] rounded-2xl opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500 pointer-events-none" />
    </div>
  );
};

export default FeaturedDoctorCardOverlay;
