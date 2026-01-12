import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const OurPhysicians = ({blok}) => {

  console.log('our physicians page doctor links dont work yet ');

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* <Helmet>
        <title>Our Physicians - New York Center for Spinal Disorders</title>
        <meta name="description" content="Meet our expert spine surgeons Dr. Nathaniel Tindel and Dr. Neel Shah at the New York Center for Spinal Disorders. Learn about their specialized approach to spine care and personalized treatment plans." />
        <meta name="keywords" content="our physicians, spine specialists, orthopedic surgeons, back pain treatment, scoliosis care, spine surgery, New York, Dr. Tindel, Dr. Shah, spinal care" />
        <meta name="author" content="Dr. Nathaniel Tindel, Dr. Neel P. Shah" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Our Physicians - New York Center for Spinal Disorders" />
        <meta property="og:description" content="Meet our top spine specialists, Dr. Nathaniel Tindel and Dr. Neel Shah, and discover their commitment to innovative and compassionate spine care at the New York Center for Spinal Disorders." />
        <meta property="og:image" content="/images/logo-header.png" />
        <meta property="og:url" content="https://www.nycspinaldisorders.com/our-physicians" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Physicians - New York Center for Spinal Disorders" />
        <meta name="twitter:description" content="Learn about our expert spine specialists, Dr. Nathaniel Tindel and Dr. Neel Shah, and their approach to innovative spine care at the New York Center for Spinal Disorders." />
        <meta name="twitter:image" content="/images/logo-header.png" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#4a90e2" />
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{blok.hero_headline}</h1>
            <p className="text-xl md:text-2xl text-blue-100">{blok.hero_subheadline}</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="prose max-w-none mb-12">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            {blok.top_paragraph}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="h-64 md:h-[390px] overflow-hidden">
              <img
                src={`${blok.tindel_image.filename}`}
                alt={`${blok.tindel_image.alt}`}
                className="w-full h-full object-cover object-[center_30%]"
              />
            </div>
            <div className="flex flex-col flex-grow justify-between p-6 md:p-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">{blok.tindel_headline}</h2>
                <p className="text-base md:text-lg text-gray-600 mb-2">{blok.tindel_title}</p>
                <p className="text-gray-700 mb-6">
                  {blok.tindel_paragraph}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 sm:justify-between items-start sm:items-center">
                <Link 
                  to={`/${blok.tindel_link.cached_url}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <span className="mr-2">{blok.tindel_link_text}</span>
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="h-64 md:h-[390px] overflow-hidden">
              <img
                src={`${blok.shah_image.filename}`}
                alt={`${blok.shah_image.alt}`}
                className="w-full h-full object-cover object-[center_30%]"
              />
            </div>
            <div className="flex flex-col flex-grow justify-between p-6 md:p-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">{blok.shah_headline}</h2>
                <p className="text-base md:text-lg text-gray-600 mb-2">{blok.shah_title}</p>
                <p className="text-gray-700 mb-6">
                  {blok.shah_paragraph}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 sm:justify-between items-start sm:items-center">
                <Link 
                  to={`/${blok.shah_link.cached_url}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <span className="mr-2">{blok.shah_link_text}</span>
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">{blok.bottom_paragraph_headline}</h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            {blok.bottom_paragraph}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurPhysicians;