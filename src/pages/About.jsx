import { Link } from 'react-router-dom';
import { StoryblokRichText } from '@storyblok/react';
import { Icon } from '@iconify/react/dist/iconify.js';
import {
  MapPin,
  Clock,
  Activity,
} from 'lucide-react';


const AboutOurPractice = ({blok}) => {

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <div className="relative h-[40vh] md:h-[50vh] bg-gradient-to-r from-[#003666] to-[#0062B1]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#003666]/90 to-[#0062B1]/90" />
          <img
            src={`${blok.hero_image?.filename}`}
            alt={blok.hero_image?.alt || ""}
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative h-full max-w-6xl mx-auto px-4 flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">{blok.hero_headline}</h1>
            <p className="text-xl md:text-2xl text-sky-100">
              {blok.hero_subheadline}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#003666] mb-6 text-center">{blok.location_headline}</h2>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {blok.location_list?.content[0].attrs.body.map((location) => ( 
              <div key={location._uid} className="bg-gradient-to-br from-sky-50 to-[#0062B1]/10 p-6 md:p-8 rounded-2xl">
                <div className="flex items-center space-x-3 mb-4">
                  <MapPin className="w-6 h-6 text-[#0062B1]" />
                  <h3 className="text-lg md:text-xl font-semibold text-[#003666]">{location.headline}</h3>
                </div>
                <p className="text-sm md:text-base text-gray-700 mb-3">
                  {location.paragraph}
                </p>

                
                <a
                  href={`${location.google_maps_link}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm md:text-base text-[#0062B1] hover:text-[#003666] transition-colors mb-4"
                >
                  {location.address}<br />
                  {location.city_state_zip}
                </a>

                
                <div className="w-full h-36 md:h-48 mb-5 rounded-lg overflow-hidden border border-gray-200">
                  <iframe
                    src={`${location.iframe}`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${location.title} Location Map`}
                  ></iframe>
                </div>

                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-[#0062B1]" />
                  <div>
                    <h3 className="text-base mb-0 font-semibold text-[#003666] md:text-lg">Office Hours</h3>
                    <p className="text-sm md:text-base text-gray-700">{location.hours_of_operation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 relative h-48 md:h-64 rounded-2xl overflow-hidden">
            <img
              src={blok.facility_image?.filename}
              alt={blok.facility_image?.alt}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>




      <div className="max-w-6xl mx-auto px-4 py-8 md:py-16">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          <div className="md:col-span-2 space-y-8 md:space-y-12">
            <div className="prose max-w-none">
              <h2 className="text-2xl md:text-3xl font-bold text-[#003666] mb-4 md:mb-6">{blok.who_we_are_headline}</h2>
              <div className="richtext text-base md:text-lg text-gray-700 leading-relaxed">
                <StoryblokRichText doc={blok.who_we_are_paragraph} />
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#003666] mb-4 md:mb-6">{blok.our_approach_headline}</h2>
              <div className="richtext text-base md:text-lg text-gray-700 leading-relaxed mb-8">
                <StoryblokRichText doc={blok.our_approach_paragraph.content} />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {blok.highlights?.content[0].attrs.body.map((highlight) => (
                  <div key={highlight._uid} className="bg-white p-4 md:p-6 rounded-xl shadow-lg">
                    <Icon icon={highlight.icon.icon} className="w-6 md:w-8 h-6 md:h-8 text-[#0062B1] mb-3 md:mb-4" />
                    <h3 className="text-lg md:text-xl font-semibold text-[#003666] mb-2">{highlight.title}</h3>
                    <p className="text-sm md:text-base text-gray-600">{highlight.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#003666] to-[#0062B1] p-6 md:p-8 rounded-2xl text-white">
              <h2 className="text-2xl text-white font-bold mb-4 md:text-3xl md:mb-6">{blok.conditions_and_procedures_headline}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {blok.conditions_and_procedures?.content[0].attrs.body.map((condition) => (
                  <div key={condition._uid} className="flex items-center space-x-3">
                    <Activity className="w-4 md:w-5 h-4 md:h-5 text-sky-300 flex-shrink-0" />
                    <span className="text-sm md:text-base">{condition.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6 md:space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-[#003666] mb-6">{blok.achievements_headline}</h3>
              <div className="space-y-6">
                {blok.achievements?.content[0].attrs.body.map((achievement) => (
                  <div key={achievement._uid} className="flex items-start space-x-4">
                    <Icon icon={achievement.icon.icon} className="w-6 h-6 text-[#0062B1] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-[#003666] mb-1">{achievement.title}</h4>
                      <p className="text-sm text-gray-600">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-sky-50 to-[#0062B1]/10 p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-[#003666] mb-4">{blok.resources_headline}</h3>
              <div className="space-y-4">
                {blok.resources_list?.content[0].attrs.body.map((resource) => (
                  <Link
                  to="/our-doctors"
                  className="block p-4 bg-white rounded-lg hover:bg-sky-50 transition duration-300"
                  key={resource._uid}
                >
                  <h4 className="font-semibold text-[#003666] mb-1">{resource.text}</h4>
                  <p className="text-sm text-gray-600">{resource.description}</p>
                </Link>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-sky-50 to-[#0062B1]/10 p-4 md:p-6 rounded-2xl">
              <h3 className="text-lg md:text-xl font-bold text-[#003666] mb-3 md:mb-4">{blok.call_to_action_headline}</h3>
              <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6">
                {blok.call_to_action_paragraph}
              </p>
              <Link
                to="/contact"
                className="block w-full text-center bg-[#0062B1] text-white py-2 md:py-3 rounded-lg hover:bg-[#003666] transition duration-300 text-sm md:text-base"
              >
                {blok.call_to_action_button}
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AboutOurPractice;