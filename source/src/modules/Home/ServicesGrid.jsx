import React from 'react';
import { Link } from 'react-router-dom';

const ServicesGrid = () => {
  const services = [
    {
      title: 'Herniated Discs',
      imageSrc: '../images/herniateddisc.png',
      description: 'Expert treatment for disc-related pain and pressure on spinal nerves.',
      gradient: 'from-[#0062B1] to-sky-500',
      link: '/herniated-discs'
    },
    {
      title: 'Degenerative Disc Disease',
      imageSrc: '../images/degenerativedisc.png',
      description: 'Management of age-related spinal disc deterioration.',
      gradient: 'from-[#003666] to-sky-600',
      link: '/degenerative-disc-disease'
    },
    {
      title: 'Spinal Stenosis',
      imageSrc: '../images/spinalstenosis.png',
      description: 'Relief from narrowing of the spinal canal causing nerve compression.',
      gradient: 'from-sky-600 to-[#0062B1]',
      link: '/spinal-stenosis'
    },
    {
      title: 'Sciatica',
      imageSrc: '../images/sciatica.png',
      description: 'Targeted treatment for radiating leg pain and nerve inflammation.',
      gradient: 'from-[#0062B1] to-[#003666]',
      link: '/lumbar-radiculopathy-sciatica'
    },
    {
      title: 'Back and Neck Pain',
      imageSrc: '../images/backneckpain.png',
      description: 'Comprehensive care for acute and chronic spinal pain conditions.',
      gradient: 'from-sky-500 to-[#0062B1]',
      link: '/back-and-neck-pain'
    },
    {
      title: 'Disc Replacement',
      imageSrc: '../images/discreplacement.png',
      description: 'State-of-the-art artificial disc replacement to restore mobility and relieve pain.',
      gradient: 'from-[#0062B1] to-sky-500',
      link: '/disc-replacement'
    },
    {
      title: 'Microdiscectomy',
      imageSrc: '../images/microdiscectomy.jpeg',
      description: 'Minimally invasive procedure to relieve nerve compression and alleviate back pain.',
      gradient: 'from-[#003666] to-[#0062B1]',
      link: '/microdiscectomy'
    },    
    {
      title: 'Revision Spinal Surgery',
      imageSrc: '../images/spinesurgery.png',
      description: 'Expert care for patients requiring follow-up procedures.',
      gradient: 'from-sky-600 to-[#003666]',
      link: '/revision-spinal-surgery'
    },
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#003666] mb-2">
          Common Conditions & Treatments
        </h2>
        <h3 className="text-2xl text-[#0062B1] mb-10">
          Comprehensive Spine Care Services
        </h3>
        
        
        <div className="relative">
          
          <div className="md:hidden text-sm text-gray-500 mb-4 flex items-center justify-center">
            <svg 
              className="w-5 h-5 mr-2 animate-bounce" 
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
            Scroll to see more
          </div>

          
          <div className="w-full overflow-x-auto pb-6 md:pb-0 custom-scrollbar">
            
            <div className="inline-flex md:grid md:grid-cols-4 gap-6 md:w-full min-w-max md:min-w-0">
            {services.map((service) => (
              <Link
                to={service.link}
                key={service.title}
                className="block group relative bg-white rounded-xl shadow-lg overflow-hidden w-72 h-64 flex-shrink-0 transition-all duration-500 hover:shadow-2xl hover:scale-105"
              >
                <div className="absolute inset-0">
                  <img
                    src={service.imageSrc}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-75 group-hover:opacity-85 transition-opacity duration-500`}
                />

                <div className="relative h-full z-20 p-6 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-white transition-colors duration-300 drop-shadow-lg">
                      {service.title}
                    </h3>
                    <p className="text-sm text-white/90 drop-shadow">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center mt-4">
                    <span className="inline-flex items-center text-white text-sm font-medium">
                      Learn More
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

                <div className="absolute -inset-1 bg-white opacity-0 group-hover:opacity-20 transform group-hover:scale-105 transition-all duration-500 blur-lg" />
              </Link>
            ))}
            </div>
          </div>
        </div>

        
        <style jsx>{`
          .custom-scrollbar::-webkit-scrollbar {
            height: 6px;
            background-color: #f3f4f6;
            border-radius: 9999px;
          }

          .custom-scrollbar::-webkit-scrollbar-thumb {
            background-color: #0062B1;
            border-radius: 9999px;
          }

          .custom-scrollbar::-webkit-scrollbar-track {
            background-color: #f3f4f6;
            border-radius: 9999px;
          }

          @media (min-width: 768px) {
            .custom-scrollbar::-webkit-scrollbar {
              display: none;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default ServicesGrid;