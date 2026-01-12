import { useState } from "react";
import { Link } from 'react-router-dom';
import { Search, ChevronRight } from 'lucide-react';

const AllConditions = ({blok}) => {

  const [searchTerm, setSearchTerm] = useState('');

  // Use Storyblok conditions
  const conditions = blok.conditions || [];

  // Sort alphabetically
  const sortedConditions = conditions.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  // Filter based on search term
  const filteredConditions = sortedConditions.filter((condition) => {
    const title = condition.name || '';
    const description = condition.content?.description || '';
    return (
      title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white overflow-x-hidden">
      {/* <Helmet>
        <title>Spine Conditions - New York Center for Spinal Disorders</title>
        <meta name="description" content="Detailed information about spine conditions at NY Center for Spinal Disorders." />
        <meta name="keywords" content="spine, conditions, back pain, spinal disorders, NY Center" />
        <meta name="author" content="Dr. Nathaniel Tindel" />
        <meta property="og:title" content="Spine Conditions - NY Center for Spinal Disorders" />
        <meta property="og:description" content="Detailed information about spine conditions at NY Center for Spinal Disorders." />
        <meta property="og:image" content="/images/logo-header.png" />
        <meta property="og:url" content="https://www.nycspinaldisorders.com/conditions" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Spine Conditions - NY Center for Spinal Disorders" />
        <meta name="twitter:description" content="Detailed information about spine conditions at NY Center for Spinal Disorders." />
      </Helmet> */}

      <div className="relative h-[40vh] bg-gradient-to-r from-[#003666] to-[#0062B1]">
        <div className="absolute inset-0">
          <img src={`${blok.image.filename}`} alt={`${blok.image.alt}`} className="w-full h-full object-cover opacity-50" />
        </div>
        <div className="relative h-full max-w-6xl mx-auto px-4 flex items-center">
          <div>
            <h1 className="text-5xl font-bold text-white mb-4">{blok.headline}</h1>
            <p className="text-2xl text-blue-100">{blok.paragraph}</p>
          </div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto mb-16">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search conditions..."
              className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-blue-100 focus:border-blue-500 focus:outline-none text-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-16">
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-blue-900 border-b-2 border-blue-100 pb-2">
              {blok.subheadline}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredConditions.map((condition, index) => (
                <Link key={index} to={`/conditions/${condition.slug}`} className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold text-blue-900 group-hover:text-blue-600 transition-colors duration-300">
                      {condition.name}
                    </h3>
                    <p className="text-gray-600">{condition.content.description}</p>
                    <div className="flex items-center text-blue-600 font-medium">
                      {blok.button_text}
                      <ChevronRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 4s linear infinite;
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
};

export default AllConditions;
