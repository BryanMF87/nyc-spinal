import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';
import { Shield } from 'lucide-react';

const Section1557Statement = () => {
  const sections = [
    {
      icon: Shield,
      title: "Section 1557 Statement",
      content: `Non-Discrimination Notice

The New York Center for Spinal Disorders complies with Section 1557 of the Affordable Care Act, which prohibits discrimination on the basis of race, color, national origin, sex, age, or disability in health programs and activities. We are committed to ensuring that our patients receive the highest quality of care and services in a welcoming, inclusive, and accessible environment.

If you need assistance or have questions regarding accessibility or accommodations, please contact us at [insert contact number/email] or visit our office. We provide free language assistance services, including qualified interpreters, and provide auxiliary aids and services, such as alternative formats, to help with effective communication.

If you believe that we have failed to provide adequate access to services or have discriminated against you in violation of Section 1557, you have the right to file a complaint. For more information on how to file a complaint, please contact: 

New York Center for Spinal Disorders
425 East 79th Street, Suite 1H
New York, NY 10075
Email: compliance@spine-nyc.com
Phone: (212) 249-3840`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Helmet>
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
      </Helmet>

      <Header />

      <div className="relative h-[30vh] bg-gradient-to-r from-[#003666] to-[#0062B1]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-[#003666] to-[#0062B1]" />
        </div>
        <div className="relative h-full max-w-6xl mx-auto px-4 flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Section 1557 Statement
            </h1>
            <p className="text-xl text-blue-100">
              Our commitment to non-discrimination
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-12">
          {sections.map((section, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <div className="flex items-center gap-4 mb-4">
                <section.icon className="w-8 h-8 text-blue-600" />
                <h2 className="text-2xl font-bold text-blue-900">{section.title}</h2>
              </div>
              <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Section1557Statement;
