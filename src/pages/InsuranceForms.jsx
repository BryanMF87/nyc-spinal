
import {
  Download,
  Phone,
  ChevronRight
} from 'lucide-react';
import { Icon } from '@iconify/react/dist/iconify.js';
import { render } from 'storyblok-rich-text-react-renderer';

const InsuranceAndForms = ({blok}) => {

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      {/* <Helmet>
        <title>Insurance and Forms - New York Center for Spinal Disorders</title>
        <meta name="description" content="Find all the information you need about insurance and appointment forms for your visit to Dr. Nathaniel Tindel. Download forms and get guidance on what to bring." />
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
            alt=""
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
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-sky-100 p-3 rounded-lg">
                  <Icon icon={blok.insurance_icon.icon} className="w-6 h-6 text-[#0062B1]" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[#003666] mb-4">{blok.insurance_headline}</h2>
                  <p className="text-lg text-gray-700">
                    {blok.insurance_paragraph}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#003666] mb-8">{blok.forms_headline}</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {blok.document_list.map((form) => (
                  <div key={form._uid} className="bg-white p-6 rounded-xl shadow-lg group hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="bg-sky-100 p-3 rounded-lg">
                          <Icon icon={form.icon.icon} className="w-6 h-6 text-[#0062B1]" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-[#003666] mb-2">{form.text}</h3>
                          <p className="text-sm text-gray-500">{form.description}</p>
                        </div>
                      </div>
                      <a
                        href={form.link.cached_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                        className="bg-sky-100 p-2 rounded-lg hover:bg-sky-200 transition-colors duration-300"
                      >
                        <Download className="w-5 h-5 text-[#0062B1]" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-[#003666] to-[#0062B1] p-6 rounded-xl text-white">
              <h3 className="text-xl text-white font-bold mb-4">{blok.appointment_headline}</h3>
              <p className="text-sky-100 mb-6">
                {blok.appointment_paragraph}
              </p>
              <a
                href={`${blok.appointment_link}`}
                className="inline-flex items-center space-x-3 text-xl font-semibold"
              >
                <Phone className="w-6 h-6" />
                <span>{blok.appointment_button}</span>
              </a>
            </div>

            <div className="bg-gradient-to-br from-sky-50 to-[#0062B1]/10 p-6 rounded-xl">
              <div className="flex items-start space-x-4">
                <div className="bg-white p-3 rounded-lg">
                  <Icon icon={blok.instructions_icon.icon} className="w-6 h-6 text-[#0062B1]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#003666] mb-4">{blok.instructions_headline}</h3>
                  <div className="space-y-3 text-gray-700">
                    {render(blok.instructions_text)}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-[#003666] mb-4">{blok.help_headline}</h3>
              <p className="text-gray-700 mb-6">
                {blok.help_paragraph}
              </p>
              <a
                href={`${blok.help_link}`}
                className="inline-flex items-center text-[#0062B1] font-semibold hover:text-[#003666]"
              >
                {blok.help_button}
                <ChevronRight className="ml-2" />
              </a>
              <div className="mt-8 pt-4 border-t border-gray-100">
                <a
                  href="files/04082025FeeSchedule.zip"
                  className="text-xs text-gray-400 hover:text-gray-500"
                  style={{ opacity: 0.6 }}
                >
                  Fee schedule
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default InsuranceAndForms;