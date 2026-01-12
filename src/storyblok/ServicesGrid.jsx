import { Link } from 'react-router-dom';
import { storyblokEditable } from '@storyblok/react';
import { render } from 'storyblok-rich-text-react-renderer';

const ServicesGrid = ({ blok }) => {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full"
      {...storyblokEditable(blok)}
    >
      {blok.services.map((service) => (
        <Link
          to={service.path}
          key={service.content._uid}
          className="group relative text-left bg-white rounded-xl shadow-lg overflow-hidden w-full aspect-[4/3] sm:aspect-[5/4] md:aspect-[4/3] transition-all duration-500 hover:shadow-2xl hover:scale-105"
        >
          {/* Image */}
          <div className="absolute inset-0">
            {service.content.image && (
              <img
                src={service.content.image.filename}
                alt={service.content.image.alt || ""}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            )}
          </div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-sky-600 to-[#003666] opacity-75 group-hover:opacity-85 transition-opacity duration-500" />

          {/* Content */}
          <div className="relative h-full z-20 p-6 flex flex-col justify-between">
            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white drop-shadow-lg">
                {service.name}
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-white/90 drop-shadow">
                {render(service.content.subheadline)}
              </p>
            </div>
            <div className="flex items-center mt-4">
              <span className="inline-flex items-center text-white text-sm sm:text-base font-medium">
                {blok.learn_more_text}
                <svg
                  className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </div>
          </div>

          {/* Hover blur effect */}
          <div className="absolute -inset-1 bg-white opacity-0 group-hover:opacity-20 transform transition-all duration-500 blur-lg" />
        </Link>
      ))}
    </div>
  );
};

export default ServicesGrid;
