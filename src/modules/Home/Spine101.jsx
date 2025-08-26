import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Binary, Stethoscope, Activity } from 'lucide-react';

const Spine101 = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
        
        
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 right-0 h-full" 
               style={{
                 backgroundImage: `
                   radial-gradient(circle at 20% 20%, #0062B1 1%, transparent 1.5%),
                   radial-gradient(circle at 50% 25%, #003666 1%, transparent 1.5%),
                   radial-gradient(circle at 80% 20%, #0062B1 1%, transparent 1.5%),
                   radial-gradient(circle at 20% 50%, #003666 1%, transparent 1.5%),
                   radial-gradient(circle at 50% 50%, #0062B1 1%, transparent 1.5%),
                   radial-gradient(circle at 80% 50%, #003666 1%, transparent 1.5%),
                   radial-gradient(circle at 20% 80%, #0062B1 1%, transparent 1.5%),
                   radial-gradient(circle at 50% 75%, #003666 1%, transparent 1.5%),
                   radial-gradient(circle at 80% 80%, #0062B1 1%, transparent 1.5%)
                 `,
                 backgroundSize: '40px 40px'
               }}
          />
        </div>
        
        
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/3 h-full transform rotate-12 bg-gradient-to-b from-sky-200/20 to-transparent" />
          <div className="absolute top-0 left-0 w-1/4 h-full transform -rotate-12 bg-gradient-to-b from-[#0062B1]/10 to-transparent" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#003666] mb-4">
            Spine101: Understanding Your Spine
          </h2>
          <p className="text-xl text-[#0062B1]">
            Comprehensive Education for Better Spine Health
          </p>
        </div>

        <div className="relative">
          <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 relative h-64 md:h-auto">
                <img
                  src="../images/spineanatomy.png"
                  alt="Spine anatomy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#003666]/80 to-[#0062B1]/80" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                  <h3 className="text-2xl font-bold mb-2">Understanding Your Spine</h3>
                  <p className="text-sky-100">
                    Expert guidance on spine conditions and treatment options
                  </p>
                </div>
              </div>

              <div className="md:w-1/2 p-8 md:p-12 bg-gradient-to-br from-white to-sky-50">
                <div className="prose max-w-none">
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Understanding your spine condition is the first step toward finding relief. 
                    Our comprehensive guide covers common diagnoses, symptoms, and treatment approaches.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-3 text-gray-700">
                      <Binary className="w-5 h-5 text-[#0062B1]" />
                      <span>Learn about different types of back pain</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-700">
                      <Stethoscope className="w-5 h-5 text-[#0062B1]" />
                      <span>Understand diagnostic procedures</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-700">
                      <Activity className="w-5 h-5 text-[#0062B1]" />
                      <span>Explore treatment options</span>
                    </div>
                  </div>

                  <Link 
                    to="/common-diagnoses"
                    className="inline-flex items-center group px-6 py-3 bg-gradient-to-r from-[#003666] to-[#0062B1] text-white rounded-full hover:from-[#002B52] hover:to-[#004E8E] transition-all duration-300"
                  >
                    <span>Explore Spine101</span>
                    <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Spine101;