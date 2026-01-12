import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronLeft,
  ChevronRight,
  BookIcon,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Disc
} from 'lucide-react';

import { Icon } from '@iconify/react/dist/iconify.js';
import { render } from 'storyblok-rich-text-react-renderer';


const MeetDrShah = ({blok}) => {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeSection, setActiveSection] = useState('about');

  const sections = [
    {
      id: 'about',
      title: 'About Dr. Shah',
      icon: BookOpen
    },
    {
      id: 'publications',
      title: 'Publications & Research',
      icon: BookIcon
    },
    {
      id: 'discReplacement',
      title: 'Disc Replacement',
      icon: Disc
    }
  ];

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % blok.image_slider_images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + blok.image_slider_images.length) % blok.image_slider_images.length);
  };

  const ImageCarousel = ({ isMobile }) => (
    <div className={`${isMobile ? 'md:hidden' : 'hidden md:block'} bg-white rounded-2xl shadow-lg overflow-hidden relative group`}>
      <div className="relative">
        <img
          src={blok.image_slider_images[currentImageIndex]?.filename}
          alt={`Dr. Neel Shah - ${currentImageIndex + 1}`}
          className="w-full h-96 object-cover object-top"
        />
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition-colors shadow-md"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6 text-[#003666]" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition-colors shadow-md"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6 text-[#003666]" />
        </button>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {blok.image_slider_images.map((image, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${index === currentImageIndex ? 'bg-[#003666]' : 'bg-white/60'}`}
            />
          ))}
        </div>
      </div>
      <div className="p-6">
        {render(blok.image_slider_text)}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      {/* <Helmet>
        <title>Meet Dr. Neel Shah - Board-Certified Orthopedic Spine Surgeon | NY Spinal Disorders</title>
        <meta name="description" content="Dr. Neel P. Shah specializes in minimally invasive spine surgery and complex spinal disorders. NYU Langone affiliated surgeon providing personalized spine care and advanced surgical techniques in New York." />
        <meta name="keywords" content="Dr. Neel Shah, spine surgeon, spinal disorders, minimally invasive surgery, orthopedic surgeon, spine surgery publications, medical presentations, NYU Langone, New York spine specialist, microsurgery" />
        <meta name="author" content="Dr. Neel P. Shah" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Dr. Neel P. Shah - Board-Certified Spine Surgeon in New York" />
        <meta property="og:description" content="Dr. Neel P. Shah specializes in minimally invasive spine surgery and complex spinal disorders, providing personalized care at NYU Langone and the NY Center for Spinal Disorders." />
        <meta property="og:image" content="/images/logo-header.png" />
        <meta property="og:url" content="https://www.nycspinaldisorders.com/meet-dr-shah" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dr. Neel P. Shah - Leading NY Spine Surgeon" />
        <meta name="twitter:description" content="Board-certified orthopedic spine surgeon specializing in minimally invasive techniques and complex spinal disorders. NYU Langone affiliated." />
        <meta name="twitter:image" content="/images/logo-header.png" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#003666" />
        <meta name="mobile-web-app-capable" content="yes" />
      </Helmet> */}

      <div className="relative h-96 bg-gradient-to-r from-[#003666] to-[#0062B1]">
        <div className="absolute inset-0">
          <img
            src={`${blok.hero_image.filename}`}
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative h-full max-w-6xl mx-auto px-4 flex items-center">
          <div>
            <h1 className="text-5xl font-bold text-white mb-4">{blok.hero_headline}</h1>
            <p className="text-lg md:text-2xl text-sky-100">{blok.hero_subheadline_top}</p>
            <p className="text-base md:text-xl text-sky-100 mt-2">{blok.hero_subheadline_bottom}</p>
            <div className="flex space-x-6 mt-8">
              <a href={`${blok.hero_linkedin_link.url}`} target="_blank" rel="noopener noreferrer" className="text-white hover:text-sky-200 transition-colors">
                <Icon icon={blok.hero_linkedin_icon.icon} className="text-2xl"/>
              </a>
              <a href={`${blok.hero_ig_link.url}`} target="_blank" rel="noopener noreferrer" className="text-white hover:text-sky-200 transition-colors">
                <Icon icon={blok.hero_ig_icon.icon} className="text-2xl"/>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden px-4 mt-8">
        <ImageCarousel isMobile={true} />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            
            <div className="mb-8 space-y-4">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex items-center justify-between p-4 bg-white rounded-lg shadow-md hover:bg-sky-50 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-3">
                    <section.icon className="w-6 h-6 text-[#0062B1]" />
                    <span className="text-lg font-semibold text-[#003666]">{section.title}</span>
                  </div>
                  {activeSection === section.id ? (
                    <ChevronUp className="w-5 h-5 text-[#0062B1]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#0062B1]" />
                  )}
                </button>
              ))}
            </div>

            
            {activeSection === 'about' && (
              <div className="space-y-12 animate-fadeIn">
                <div className="prose max-w-none">
                  <div className="richtext bg-white rounded-xl p-8 shadow-sm">
                    {render(blok.dr_shah_intro)}
                  </div>

                  <div className="bg-gradient-to-r from-[#003666] to-[#0062B1] rounded-xl p-8 mt-8">
                    <h2 className=" text-white text-3xl font-bold mb-6">{blok.vision_headline}</h2>
                    <div className="space-y-6">
                      <p className=" text-white text-lg leading-relaxed">
                        {blok.vision_paragraph}
                      </p>
                      <div className="grid md:grid-cols-2 gap-6">
                        {blok.vision_list.map(item => (
                          <div key={item._uid} className="bg-white/10 rounded-lg p-6">
                            <h3 className="text-xl text-white font-semibold mb-3">{item.text}</h3>
                            <p className="text-white">{item.description}</p>
                        </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="richtext mt-8 bg-white rounded-xl p-8 shadow-sm">
                    {render(blok.personal_approach)}
                  </div>

                  <div className="mt-8">
                    <h2 className="text-3xl font-bold text-[#003666] mb-6">{blok.academia_headline}</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="bg-white rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-semibold text-[#003666] mb-4">{blok.academia_education_headline}</h3>
                        <ul className="space-y-3 text-gray-700">
                          {blok.academia_education_list.map(item => (
                             <li key={item._uid} className="flex items-center">
                              <div className="w-2 h-2 bg-[#0062B1] rounded-full mr-3 shrink-0"></div>
                                <span>{item.text}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-white rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-semibold text-[#003666] mb-4">{blok.academia_training_headline}</h3>
                        <ul className="space-y-3 text-gray-700">
                          {blok.academia_training_list.map(item => (
                             <li key={item._uid} className="flex items-center">
                              <div className="w-2 h-2 bg-[#0062B1] rounded-full mr-3 shrink-0"></div>
                                <span>{item.text}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-8 bg-white rounded-xl p-6 shadow-sm">
                      <h3 className="text-xl font-semibold text-[#003666] mb-4">{blok.academia_appointments_headline}</h3>
                        <ul className="space-y-3 text-gray-700">
                          {blok.academia_appointments_list.map(item => (
                             <li key={item._uid} className="flex items-center">
                              <div className="w-2 h-2 bg-[#0062B1] rounded-full mr-3"></div>
                                <span>{item.text}</span>
                            </li>
                          ))}
                        </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            
            {activeSection === 'publications' && (
              <div className="space-y-8 animate-fadeIn">
                <section id="presentations" className="mb-16">
                  <div className="flex items-center mb-8">
                    <Icon icon={blok.presentations_icon.icon} className="w-8 h-8 text-[#0062B1] mr-4" />
                    <h2 className="text-3xl font-bold text-[#003666]">{blok.presentations_headline}</h2>
                  </div>

                  <div className="grid gap-6">
                    {blok.presentations_list.map((presentation, idx) => (
                      <div key={idx} className="bg-white rounded-xl shadow-lg p-6">
                        <div className="flex items-start gap-4">
                            <Icon icon={presentation.icon} className="w-6 h-6 text-[#0062B1] flex-shrink-0 mt-1" />
                          <div>
                            <h3 className="text-xl font-bold text-[#003666] mb-2">{presentation.text}</h3>
                            <p className="text-gray-600 whitespace-pre-line">{presentation.description}</p>
                            {presentation.link.url !== "" && (
                              <a
                                href={`${presentation.link.url}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#0062B1] hover:text-[#003666] mt-2 inline-block"
                              >
                                Watch Video
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="publications" className="mb-16">
                  <div className="flex items-center mb-8">
                    <Icon icon={blok.publications_icon.icon} className="w-8 h-8 text-[#0062B1] mr-4" />
                    <h2 className="text-3xl font-bold text-[#003666]">{blok.publications_headline}</h2>
                  </div>

                  <div className="grid gap-6">
                    {blok.publications_list.map((publication, idx) => (
                      <div key={idx} className="bg-white rounded-xl shadow-lg p-6">
                        <h3 className="text-xl font-bold text-[#003666] mb-2">{publication.text}</h3>
                        <p className="text-gray-600 mb-2 whitespace-pre-line leading-4">{publication.description}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            )}

            
            {activeSection === 'discReplacement' && (
              <div className="space-y-8 animate-fadeIn">
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h2 className="text-3xl font-bold text-[#003666] mb-6">{blok.disc_replacement_headline}</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {blok.disc_replacement_paragraph}
                  </p>
                  <div className="mt-8 flex justify-center">
                    <Link to={`/${blok.disc_replacement_link.cached_url}`} className="inline-flex items-center bg-[#0062B1] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#003666] transition-all duration-300 text-lg">
                      {blok.disc_replacement_button}
                      <ChevronRight className="ml-2" />
                    </Link>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {blok.disc_types.map(item=> (
                    <div key={item._uid} className="bg-gradient-to-br from-sky-50 to-[#0062B1]/10 p-6 rounded-xl shadow-md">
                      <h3 className="text-xl font-bold text-[#003666] mb-4">{item.text}</h3>
                      <p className="text-gray-700 mb-4">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>

                  
              </div>
            )}
          </div>

          
          <div className="space-y-8">
            <ImageCarousel isMobile={false} />

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src={`${blok.cards_list[0].asset.filename}`}
                alt={`${blok.cards_list[0].asset.alt}`}
                className="w-full h-auto object-contain p-2 md:p-4 max-h-48 md:max-h-none rounded-[40px]"
              />
              <div className="p-4 text-center bg-gray-50">
                <p className="text-sm font-semibold text-gray-700">{blok.cards_list[0].text}</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg overflow-hidden">
              <h3 className="text-xl font-bold text-[#003666] mb-4">{blok.cards_list[1].text}</h3>
              <p className="text-gray-700 mb-6">
                {blok.cards_list[1].description}
              </p>
              <Link
                to={`/${blok.cards_list[1].link.cached_url}`}
                className="block w-full text-center bg-[#0062B1] text-white py-3 rounded-lg hover:bg-[#003666] transition duration-300 font-semibold"
              >
                Contact Us
              </Link>
            </div>

            <div className="bg-gradient-to-br from-[#003666] to-[#0062B1] rounded-2xl p-6">
              <h3 className="text-xl text-white font-bold mb-4">{blok.cards_list[2].text}</h3>
              <p className="text-white">
                {blok.cards_list[2].description}
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default MeetDrShah;