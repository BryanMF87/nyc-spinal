import { Icon } from '@iconify/react/dist/iconify.js';

const PrivacyPolicy = ({blok}) => {

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* <Helmet>
        <title>Privacy Policy - New York Center for Spinal Disorders</title>
        <meta
          name="description"
          content="Review our Privacy Policy to learn how the New York Center for Spinal Disorders collects, uses, and protects your personal information."
        />
        <meta
          name="keywords"
          content="Privacy Policy, personal information, data protection, New York Center for Spinal Disorders, data security, children's privacy"
        />
        <meta name="author" content="Dr. Nathaniel Tindel" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="New York Center for Spinal Disorders - Treating Scoliosis" />
        <meta
          property="og:description"
          content="Founded by Dr. Tindel, the New York Center for Spinal Disorders treats adults and teens for scoliosis, herniated discs, back pain, and more spine conditions."
        />
        <meta property="og:image" content="/images/logo-header.png" />
        <meta property="og:url" content="https://www.nycspinaldisorders.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="New York Center for Spinal Disorders - Treating Scoliosis" />
        <meta
          name="twitter:description"
          content="Founded by Dr. Tindel, the New York Center for Spinal Disorders treats adults and teens for scoliosis, herniated discs, back pain, and more spine conditions."
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
              {blok.hero_headline}
            </h1>
            <p className="text-xl text-blue-100">
              {blok.hero_subheadline}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-12">
          {blok.sections.map((section) => (
            <div key={section._uid} className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <div className="flex items-center gap-4 mb-4">
                <Icon icon={section.icon?.icon} className="w-8 h-8 text-blue-600" />
                <h2 className="text-2xl font-bold text-blue-900">
                  {section.text}
                </h2>
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

export default PrivacyPolicy;
