import { ChevronRight } from 'lucide-react';
import { Icon } from '@iconify/react/dist/iconify.js';

const BookPage = ({blok}) => {

  console.log("Got your back page doesn't have the right link attached to Dr. Tindel");

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* <Helmet>
        <title>I've Got Your Back - New York Center for Spinal Disorders</title>
        <meta name="description" content="Explore Dr. Nathaniel Tindel's book, 'I've Got Your Back,' providing insights on spine surgery, treatment alternatives, and expert guidance for back care." />
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
      
      <div className="relative h-[60vh] bg-gradient-to-r from-[#003666] to-[#0062B1]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#003666]/90 to-[#0062B1]/90" />
          <img
            src={blok.hero_image.filename}
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative h-full max-w-6xl mx-auto px-4 flex items-center">
          <div className="max-w-3xl">
            <div className="text-sky-100 text-xl mb-4">
              {blok.hero_subheadline_top}
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">
              {blok.hero_headline}
              <span className="block text-2xl mt-2 text-sky-200">
                {blok.hero_subheadline_middle}
              </span>
            </h1>
            <p className="text-xl text-sky-100">
              {blok.hero_subheadline_bottom}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-12">
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <img
                    src={`${blok.the_book_image.filename}`}
                    alt={`${blok.the_book_image.alt}`}
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
                <div className="md:w-2/3">
                  <blockquote className="text-xl text-gray-700 italic mb-6">
                    {blok.the_book_quote}
                  </blockquote>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={`${blok.excerpt_button_link.cached_url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 bg-[#0062B1] text-white rounded-lg hover:bg-[#003666] transition duration-300"
                    >
                      {blok.excerpt_button_text}
                      <ChevronRight className="ml-2" />
                    </a>
                    <a
                      href={blok.amazon_button_link.cached_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#0062B1] text-[#0062B1] rounded-lg hover:bg-sky-50 transition duration-300"
                    >
                      {blok.amazon_button_text}
                      <ChevronRight className="ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#003666] mb-8 flex items-center">
                <Icon icon={blok.inside_the_book_icon.icon} className="w-8 h-8 mr-3" />
                {blok.inside_the_book_headline}
              </h2>
              <div className="grid gap-6">
                {blok.inside_the_book_list.map((chapter) => (
                  <div key={chapter._uid} className="bg-white p-6 rounded-xl shadow-lg">
                    <div className="flex items-center space-x-4">
                      <div className="bg-sky-50 p-3 rounded-lg">
                        <Icon icon={chapter.icon.icon} className="w-6 h-6 text-[#0062B1]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-[#003666] mb-0">{chapter.text}</h3>
                        <p className="text-gray-600">{chapter.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-sky-50 to-[#0062B1]/10 p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-[#003666] mb-4">{blok.author_headline}</h3>
              <img
                src={`${blok.author_image.filename}`}
                alt={`${blok.author_image.alt}`}
                className="w-full rounded-lg mb-4"
              />
              <p className="text-gray-700 mb-4">
                {blok.author_paragraph}
              </p>
              <a
                href={`${blok.author_link.cached_url}`}
                className="inline-flex items-center text-[#0062B1] font-semibold hover:text-[#003666]"
              >
                {blok.author_link_text}
                <ChevronRight className="ml-2" />
              </a>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-[#003666] mb-4">{blok.quote_headline}</h3>
              <div className="space-y-4">
                <blockquote className="text-gray-700 italic">
                  {blok.quote_paragraph}
                </blockquote>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#003666] to-[#0062B1] p-6 rounded-2xl text-white">
              <h3 className="text-white text-xl font-bold mb-4">{blok.cta_headline}</h3>
              <p className="text-sky-100 mb-6">
                {blok.cta_paragraph}
              </p>
              <a
                href={`${blok.cta_link.cached_url}`}
                className="block w-full text-center bg-white text-[#003666] py-3 rounded-lg hover:bg-sky-50 transition duration-300 font-semibold"
              >
                {blok.cta_button}
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default BookPage;