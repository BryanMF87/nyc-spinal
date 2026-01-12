import { Icon } from '@iconify/react/dist/iconify.js';

const AccessibilityStatement = ({blok}) => {

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* <Helmet>
        <title>Accessibility Statement - New York Center for Spinal Disorders</title>
        <meta
          name="description"
          content="Read our Accessibility Statement to learn how we strive to ensure our site is accessible to people with disabilities."
        />
        <meta
          name="keywords"
          content="Accessibility Statement, WCAG 2.1, UserWay, New York Center for Spinal Disorders"
        />
        <meta name="author" content="Dr. Nathaniel Tindel" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="New York Center for Spinal Disorders - Accessibility Statement" />
        <meta
          property="og:description"
          content="Learn how the New York Center for Spinal Disorders makes its site more accessible for people with disabilities."
        />
        <meta property="og:image" content="/images/logo-header.png" />
        <meta property="og:url" content="https://www.nycspinaldisorders.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="New York Center for Spinal Disorders - Accessibility Statement" />
        <meta
          name="twitter:description"
          content="Find out how we ensure our website is accessible and user-friendly for all visitors."
        />
        <meta name="twitter:image" content="/images/logo-header.png" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#4a90e2" />
        <meta name="mobile-web-app-capable" content="yes" />
      </Helmet> */}

      <div className="relative h-[30vh] bg-gradient-to-r from-[#003666] to-[#0062B1]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-[#003666] to-[#0062B1]" />
        </div>
        <div className="relative h-full max-w-6xl mx-auto px-4 flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {blok.headline}
            </h1>
            <p className="text-xl text-blue-100">
              {blok.subheadline}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-12">
          {blok.sections?.content[0].attrs.body.map((section) => (
            <div key={section._uid} className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <div className="flex items-center gap-4 mb-4">
                <Icon icon={section.icon.icon} className="w-8 h-8 text-blue-600" />
                <h2 className="text-2xl font-bold text-blue-900">{section.text}</h2>
              </div>
              <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                {section.description}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default AccessibilityStatement;
