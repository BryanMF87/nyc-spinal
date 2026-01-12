import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, BookOpen, Activity, Heart, ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { render } from 'storyblok-rich-text-react-renderer';

const ProcedureTemplate = ({blok}) => {

  console.log('procedure is : ', blok);

  const [openFaqId, setOpenFaqId] = useState(null);

  const toggleFaq = (id) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      
      <title>{blok.title}</title>
      <meta name="description" content={blok.metaDescription} />
      <meta name="keywords" content={blok.metaKeywords} />
      <meta name="author" content="Dr. Nathaniel Tindel" />
      <meta property="og:title" content={blok.title} />
      <meta property="og:description" content={blok.metaDescription} />
      <meta property="og:image" content="/images/logo-header.png" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      <div className="flex items-center relative min-h-[40vh] bg-gradient-to-r from-[#003666] to-[#0062B1] py-8">
        <div className="absolute inset-0">
          <img
            src="/images/circles.jpg"
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative h-full max-w-6xl mx-auto px-4 flex items-center">
          <div>
            <h1 className="text-5xl font-bold text-white mb-4">{blok.title}</h1>
            <p className="text-2xl text-blue-100">{blok.hero_description}</p>
          </div>
        </div>
      </div>

      
    <div className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto py-6 px-4">
            <div className="flex flex-wrap justify-center gap-4">
                <a href="tel:+12122493840" className="inline-flex items-center px-6 py-3 bg-blue-900 text-white rounded-full hover:bg-blue-800 transition">
                    <Phone className="mr-2 w-4 h-4" /> 
                    Call Now
                </a>
                <a href="mailto:schedule@spine-nyc.com?subject=Appointment%20Request" className="inline-flex items-center px-6 py-3 border-2 border-blue-900 text-blue-900 rounded-full hover:bg-blue-50 transition">
                    Email Us
                </a>
            </div>
        </div>
    </div>

      
      <div className="max-w-6xl mx-auto px-4 py-12">
        
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <BookOpen className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Who Is This Procedure For?</h2>
                <p className="text-gray-700 leading-relaxed">
                  {blok.for_who}
                </p>
              </div>
            </div>
          </div>
        </div>

        
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <Activity className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Procedure Info</h2>
                <div className="flex flex-col items-start gap-2">
                  <ul className="space-y-4">
                    {blok?.procedure_info?.map((procedure) => (
                      <li key={procedure._uid} className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span className="text-gray-700">{procedure.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4 mb-8">
              <HelpCircle className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-blue-900">Frequently Asked Questions</h2>
              </div>
            </div>
            <div className="space-y-4">
              {blok?.faqs?.map((faq) => (
                <div key={faq._uid} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    className="w-full flex items-center justify-between p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                    onClick={() => toggleFaq(faq._uid)}
                  >
                    <span className="font-semibold text-gray-900">{faq.question}</span>
                    {openFaqId === faq._uid ? (
                      <ChevronUp className="w-5 h-5 text-blue-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-blue-600" />
                    )}
                  </button>
                  {openFaqId === faq._uid && (
                    <div className="p-4 bg-white">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>



        
        <div className="bg-gradient-to-r from-[#003666] to-[#0062B1] rounded-xl shadow-lg p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Take the Next Step?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let our board-certified orthopedic spine physicians guide you through your treatment journey.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+12122493840" className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 rounded-full font-bold hover:bg-blue-100 transition duration-300">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
            </a>
            <a href="mailto:schedule@spine-nyc.com?subject=Appointment%20Request" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-full font-bold hover:bg-white/10 transition duration-300">
                Email Us
            </a>
            </div>
        </div>
      </div>

    </div>
  );
};

export default ProcedureTemplate;
