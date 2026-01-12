
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { render } from 'storyblok-rich-text-react-renderer';
import { Icon } from '@iconify/react/dist/iconify.js';

const Spine101 = ({blok}) => {

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      {/* <Helmet>
        <title>Spine 101 - New York Center for Spinal Disorders</title>
        <meta name="description" content="Learn about the anatomy and function of the spine with Dr. Nathaniel Tindel. Discover how the spine works, common conditions, and its critical role in mobility and protection." />
        <meta name="keywords" content="spinal disorders, scoliosis treatment, herniated discs, back pain, spine conditions, New York, Dr. Tindel, orthopedic surgeon, spine care, scoliosis in teens" />
        <meta name="author" content="Dr. Nathaniel Tindel" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="New York Center for Spinal Disorders - Treating Scoliosis" />
        <meta property="og:description" content="Founded by Dr. Tindel, the New York Center for Spinal Disorders treats adults and teens for scoliosis, herniated discs, back pain, and more spine conditions." />
        <meta property="og:image" content="/images/logo-header.png" />
        <meta property="og:url" content="https://www.nycspinaldisorders.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="New York Center for Spinal Disorders - Treating Scoliosis" />
        <meta name="twitter:description" content="Founded by Dr. Tindel, the New York Center for Spinal Disorders treats adults and teens for scoliosis, herniated discs, back pain, and more spine conditions." />
        <meta name="twitter:image" content="/images/logo-header.png" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#0062B1" />
        <meta name="mobile-web-app-capable" content="yes" />
      </Helmet> */}
      
      <div className="relative h-[40vh] bg-gradient-to-r from-[#003666] to-[#0062B1]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#003666]/90 to-[#0062B1]/90" />
          <img
            src={`${blok.hero_image.filename}`}
            alt={`${blok.hero_image.alt}`}
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="relative h-full max-w-6xl mx-auto px-4 flex items-center">
          <div>
            <h1 className="text-5xl font-bold text-white mb-4">{blok.headline}</h1>
            <p className="text-2xl text-sky-100">{blok.subheadline}</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="richtext space-y-8">
            {render(blok.main_text)}
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-sky-50 to-[#0062B1]/10 p-8 rounded-2xl flex flex-col items-center justify-center">
                <img
                    src={`${blok.spine_image.filename}`}
                    alt={`${blok.spine_image.alt}`}
                    className="w-64 rounded-xl shadow-lg"
                />
                <div className="mt-4 text-sm text-gray-600 text-center">
                    {`${blok.spine_image.alt}`}
                </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-[#003666] mb-4">{blok.quick_facts_headline}</h3>
              <ul className="space-y-3">
                {blok.quick_facts.map((fact)=> (
                  <li key={fact._uid} className="flex items-start space-x-3">
                    <Icon icon={fact.icon.icon} className="w-5 h-5 text-[#0062B1] flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{fact.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-[#003666] to-[#0062B1]/90 p-8 rounded-xl text-white mt-8">
          <h2 className="text-2xl text-white font-bold mb-4">{blok.explore_more_headline}</h2>
          <p className="text-sky-100 mb-6">
            {blok.explore_more_subheadline}
          </p>
          <div className="flex flex-col md:flex-row md:space-x-4">
            {blok.links.map((link)=> (
              <Link
                to={`/${link.link_to.cached_url}`}
                key={link._uid}
                className="inline-flex items-center justify-center px-6 py-3 mb-4 md:mb-0 bg-white text-[#003666] rounded-lg hover:bg-sky-50 transition duration-300 font-semibold"
              >
                {link.text}
                <ChevronRight className="ml-2" />
              </Link>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Spine101;