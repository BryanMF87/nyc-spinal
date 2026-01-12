import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react/dist/iconify.js';
import { ChevronRight } from 'lucide-react';
import { render } from 'storyblok-rich-text-react-renderer';

const BeforeYourVisit = ({blok}) => {

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      {/* <Helmet>
        <title>Before Your Visit - New York Center for Spinal Disorders</title>
        <meta name="description" content="Get ready for your visit with Dr. Nathaniel Tindel. Learn what to bring, tips for a successful appointment, and how to prepare for your spine care consultation." />
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
        <meta name="theme-color" content="#4a90e2" />
        <meta name="mobile-web-app-capable" content="yes" />
      </Helmet> */}

      <div className="relative h-[40vh] bg-gradient-to-r from-[#003666] to-[#0062B1]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#003666]/90 to-[#0062B1]/90" />
          <img
            src={`${blok.hero_image.filename}`}
            alt={`${blok.hero_image.alt}`}
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative h-full max-w-6xl mx-auto px-4 flex items-center">
          <div>
            <h1 className="text-5xl font-bold text-white mb-4">{blok.hero_headline}</h1>
            <p className="text-2xl text-sky-100">{blok.hero_subheadline}</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-[#003666] mb-8">{blok.records_headline}</h2>
              <p className="text-lg text-gray-700 mb-8">
                {blok.records_subheadline}
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {blok.records_list.map((record) => (
                  <div key={record._uid} className="bg-white p-6 rounded-xl shadow-lg">
                    <div className="flex items-start space-x-4">
                      <div className="bg-sky-100 p-3 rounded-lg">
                        <Icon icon={record.icon.icon} className="w-6 h-6 text-[#0062B1]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[#003666] mb-2">{record.text}</h3>
                        <p className="text-gray-600">{record.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-sky-50 to-[#0062B1]/10 p-8 rounded-2xl">
              <div className="flex items-start space-x-4">
                <div className="bg-white p-3 rounded-lg">
                  <Icon icon={blok.note_icon.icon} className="w-6 h-6 text-[#0062B1]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#003666] mb-4">{blok.note_headline}</h3>
                  <p className="text-gray-700">
                    {blok.note_paragraph}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-[#003666] to-[#0062B1] p-6 rounded-xl text-white">
              <div className="flex items-center space-x-3 mb-4">
                <Icon icon={blok.appointment_icon.icon} className="w-6 h-6" />
                <h3 className="text-xl text-white mb-0 font-bold">{blok.appointment_headline}</h3>
              </div>
              <p className="text-sky-100 mb-6">
                {blok.appointment_subheadline}
              </p>
              <Link
                to={`/${blok.appointment_link.cachedUrl}`}
                className="block w-full text-center bg-white text-[#003666] py-3 rounded-lg hover:bg-sky-50 transition duration-300 font-semibold"
              >
                {blok.appointment_button}
              </Link>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-[#003666] mb-4">{blok.tips_headline}</h3>
              <ul className="space-y-4">
                {blok.tips_text.map((tip)=> (
                  <li key={tip._uid} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#0062B1] rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-700">{tip.text}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-sky-50 to-[#0062B1]/10 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-[#003666] mb-4">{blok.locations_headline}</h3>
              <div className="richtext space-y-4">
                {render(blok.locations_text)}
              </div>
              <Link
                to={`${blok.locations_link}`}
                className="inline-flex items-center text-[#0062B1] font-semibold hover:text-[#003666] mt-4"
              >
                {blok.locations_button}
                <ChevronRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default BeforeYourVisit;