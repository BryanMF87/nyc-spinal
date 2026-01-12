import { render } from 'storyblok-rich-text-react-renderer';
import { Icon } from '@iconify/react/dist/iconify.js';

const Section1557Statement = ({blok}) => {

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* <Helmet>
        <title>Section 1557 Statement - New York Center for Spinal Disorders</title>
        <meta
          name="description"
          content="Review our Section 1557 Statement regarding non-discrimination."
        />
        <meta
          name="keywords"
          content="Section 1557, Non-Discrimination Notice, Affordable Care Act, New York Center for Spinal Disorders"
        />
        <meta name="author" content="Dr. Nathaniel Tindel" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="New York Center for Spinal Disorders - Section 1557 Statement" />
        <meta
          property="og:description"
          content="Learn about our commitment to non-discrimination as part of Section 1557 of the Affordable Care Act."
        />
        <meta property="og:image" content="/images/logo-header.png" />
        <meta property="og:url" content="https://www.nycspinaldisorders.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="New York Center for Spinal Disorders - Section 1557 Statement" />
        <meta
          name="twitter:description"
          content="Read about the New York Center for Spinal Disorders' commitment to non-discrimination under Section 1557."
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
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <div className="flex items-center gap-4 mb-4">
              <Icon icon={blok.icon.icon} className="w-8 h-8 text-blue-600" />
              <h2 className="text-2xl font-bold text-blue-900">{blok.statement_headline}</h2>
            </div>
            <div className="richtext">
              {render(blok.statement_text)}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Section1557Statement;
