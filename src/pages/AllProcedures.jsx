import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronRight } from 'lucide-react';

const AllProcedures = ({ blok }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Storyblok procedures
  const procedures = blok.procedures || [];

  // Separate procedures by type
  const surgicalProcedures = procedures.filter(
    (procedure) => procedure.content?.kind_of_treatment === "surgical"
  );

  const nonSurgicalProcedures = procedures.filter(
    (procedure) => procedure.content?.kind_of_treatment === "non-surgical"
  );

  // Helper function to safely get a title for sorting
  const getTitle = (procedure) => procedure.title || procedure.name || "";

  // Sort items alphabetically
  const sortedSurgical = surgicalProcedures.sort((a, b) =>
    getTitle(a).localeCompare(getTitle(b))
  );

  const sortedNonSurgical = nonSurgicalProcedures.sort((a, b) =>
    getTitle(a).localeCompare(getTitle(b))
  );

  // Helper function to safely get description for search
  const getDescription = (procedure) =>
    procedure.description || procedure.content?.hero_description || "";

  // Filter based on search term
  const filteredSurgical = sortedSurgical.filter(
    (item) =>
      getTitle(item).toLowerCase().includes(searchTerm.toLowerCase()) ||
      getDescription(item).toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredNonSurgical = sortedNonSurgical.filter(
    (item) =>
      getTitle(item).toLowerCase().includes(searchTerm.toLowerCase()) ||
      getDescription(item).toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white overflow-x-hidden">
      <div className="relative h-[40vh] bg-gradient-to-r from-[#003666] to-[#0062B1]">
        <div className="absolute inset-0">
          <img
            src="../images/spinebackground.png"
            alt="Spine Conditions Background"
            className="w-full h-full object-cover opacity-50"
          />
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
              placeholder="Search procedures..."
              className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-blue-100 focus:border-blue-500 focus:outline-none text-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-16">
          {/* Non-Surgical Procedures */}
          {filteredNonSurgical.length > 0 && (
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-blue-900 border-b-2 border-blue-100 pb-2">
                {blok.non_surgical_headline}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredNonSurgical.map((procedure, index) => (
                  <Link
                    key={index}
                    to={`/procedures/${procedure.slug}`}
                    className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    <div className="p-6 space-y-4">
                      <h3 className="text-xl font-semibold text-blue-900 group-hover:text-blue-600 transition-colors duration-300">
                        {procedure.name || procedure.title || "Untitled Procedure"}
                      </h3>
                      <p className="text-gray-600">{procedure.content?.hero_description || procedure.description || "No description available."}</p>
                      <div className="flex items-center text-blue-600 font-medium">
                        {blok.button_text}
                        <ChevronRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Surgical Procedures */}
          {filteredSurgical.length > 0 && (
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-blue-900 border-b-2 border-blue-100 pb-2">
                {blok.surgical_headline}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSurgical.map((procedure, index) => (
                  <Link
                    key={index}
                    to={`/procedures/${procedure.slug}`}
                    className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    <div className="p-6 space-y-4">
                      <h3 className="text-xl font-semibold text-blue-900 group-hover:text-blue-600 transition-colors duration-300">
                        {procedure.name || procedure.title || "Untitled Procedure"}
                      </h3>
                      <p className="text-gray-600">{procedure.content?.hero_description || procedure.description || "No description available."}</p>
                      <div className="flex items-center text-blue-600 font-medium">
                        {blok.button_text}
                        <ChevronRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
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

export default AllProcedures;
