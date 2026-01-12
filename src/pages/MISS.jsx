
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react/dist/iconify.js';
import { render } from 'storyblok-rich-text-react-renderer';

const MISS = ({blok}) => {

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* <Helmet>
        <title>Minimally Invasive Spine Surgery - NY Center for Spinal Disorders</title>
        <meta name="description" content="Learn about minimally invasive spine surgery options at NY Center for Spinal Disorders. Advanced techniques for faster recovery and better outcomes." />
        <meta name="keywords" content="minimally invasive spine surgery, MISS, spine surgery, back pain, NY Center for Spinal Disorders" />
        <meta property="og:title" content="Minimally Invasive Spine Surgery - NY Center for Spinal Disorders" />
        <meta property="og:description" content="Advanced minimally invasive spine surgery techniques for better outcomes and faster recovery." />
        <meta property="og:type" content="website" />
      </Helmet> */}

      <div className="relative h-[50vh] bg-gradient-to-r from-[#003666] to-[#0062B1]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#003666]/90 to-[#0062B1]/90" />
          <img
            src={`${blok.hero_image.filename}`}
            alt={`${blok.hero_image.alt}`}
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="relative h-full max-w-6xl mx-auto px-4 flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-white mb-6">{blok.hero_headline}</h1>
            <p className="text-2xl text-sky-100">
              {blok.hero_subheadline}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-12">
            <div className="richtext max-w-none">
              {render(blok.main_text)}
            </div>

            <div className="bg-gradient-to-br from-[#003666] to-[#0062B1] p-8 rounded-2xl text-white">
              <div className="flex items-center space-x-3 mb-6">
                <Icon icon={blok.advantage_icon.icon} className="w-6 h-6" />
                <h2 className="text-white mb-0 text-2xl font-bold">{blok.advantages_headline}</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {blok.advantages_list.map((advantage) => (
                  <div key={advantage._uid} className="flex items-center space-x-3">
                    <Icon icon={advantage.icon?.icon} className="w-5 h-5 text-sky-300 flex-shrink-0" />
                    <span className="text-sky-100">{advantage.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-sky-50 p-8 rounded-2xl">
              <div className="flex items-center space-x-3 mb-6">
                <Icon icon={blok.who_for_icon.icon} className="w-6 h-6 text-[#0062B1]" />
                <h2 className="text-2xl mb-0 font-bold text-[#003666]">{blok.who_for_headline}</h2>
              </div>
              <p className="text-gray-700 mb-6">
                {blok.who_for_paragraph}
              </p>
              <div className="grid gap-3">
                {blok.who_for_list.map((item) => (
                  <div key={item._uid} className="flex items-center space-x-3">
                    <Icon icon={item.icon.icon} className="w-5 h-5 text-[#0062B1] flex-shrink-0" />
                    <span className="text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-[#003666]">{blok.faq_headline}</h2>
              <div className="space-y-6">
                {blok.faqs.map((faq) => (
                  <div key={faq._uid} className="bg-white rounded-xl shadow-sm p-6">
                    <h3 className="text-xl font-semibold text-[#003666] mb-3">{faq.text}</h3>
                    <p className="text-gray-700">{faq.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Icon icon={blok.expert_care_icon.icon} className="w-6 h-6 text-[#0062B1]" />
                  <h3 className="text-xl font-bold text-[#003666]">{blok.expert_care_headline}</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  {blok.expert_care_paragraph}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {blok.features.map((feature) => (
                <div key={feature._uid} className="bg-gradient-to-br from-sky-50 to-[#0062B1]/10 p-6 rounded-xl">
                  <div className="flex items-center space-x-3 mb-2">
                    <Icon icon={feature.icon.icon} className="w-6 h-6 text-[#0062B1]" />
                    <h3 className="text-lg font-semibold text-[#003666]">{feature.text}</h3>
                  </div>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-[#003666] to-[#0062B1] p-6 rounded-2xl text-white">
              <h3 className="text-xl text-white font-bold mb-4">{blok.cta_headline}</h3>
              <p className="text-sky-100 mb-6">
                {blok.cta_paragraph}
              </p>
              <Link
                to={`${blok.cta_link}`}
                className="block w-full text-center bg-white text-[#003666] py-3 rounded-lg hover:bg-sky-50 transition duration-300 font-semibold"
              >
                {blok.cta_button}
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default MISS;