

const LegalDisclaimer = () => {

  // Page built inside Storyblok with reusable components

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* <Helmet>
        <title>Legal Disclaimer - New York Center for Spinal Disorders</title>
        <meta name="description" content="Read the legal disclaimer for the New York Center for Spinal Disorders. Understand the terms, use of information, and liability limitations for using our website and services." />
        <meta name="keywords" content="legal disclaimer, terms of use, medical information, New York Center for Spinal Disorders, Dr. Nathaniel Tindel, spine care, legal information, liability, website policy" />
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
      </Helmet>
       */}
      <div className="relative h-[30vh] bg-gradient-to-r from-[#003666] to-[#0062B1]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-[#003666] to-[#0062B1]" />
        </div>
        <div className="relative h-full max-w-6xl mx-auto px-4 flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Legal Disclaimer</h1>
            <p className="text-xl text-blue-100">
              Important information about the use of our website and services
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-8">
          {sections.map((section, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <div className="flex items-center gap-4 mb-4">
                <section.icon className="w-8 h-8 text-blue-600" />
                <h2 className="text-2xl font-bold text-blue-900">{section.title}</h2>
              </div>
              <div className="prose max-w-none">
                {section.content.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-gray-700 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}

          <div className="bg-red-50 rounded-2xl p-6 md:p-8 border-2 border-red-200">
            <h2 className="text-2xl font-bold text-red-600 mb-4">ATTENTION</h2>
            <p className="text-red-700 font-medium">
              Do not request an appointment online for emergency medical needs. If you are experiencing an emergency, please call 911.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default LegalDisclaimer;
