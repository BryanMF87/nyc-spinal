import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, BookOpen, Activity, Stethoscope, Heart, ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const SpineInstabilityCondition = () => {
  const [openFaqId, setOpenFaqId] = useState(null);

  const toggleFaq = (id) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const pageData = {
    title: "Spinal Instability in New York City",
    metaDescription: "Expert care for spinal instability in New York. Learn about personalized treatments to restore stability and relieve chronic back pain.",
    metaKeywords: "spinal instability, back pain treatment NYC, core strengthening, Dr. Shah, Dr. Tindel",
    heroDescription: "Specialized treatment for spinal instability with personalized care to restore function and alleviate pain.",
    forWho: [
      "Spinal instability occurs when the vertebrae (bones of the spine) no longer maintain normal alignment or movement under ordinary loads. This can happen because of weakened discs, damaged ligaments, or fractures that compromise the spine’s structural integrity. As a result, patients might experience back pain, muscle spasms, and a sensation that their spine “gives out” or locks.",
      "Causes of spinal instability include trauma (such as car accidents), degenerative changes (like disc wear), and certain conditions like spondylolisthesis (when a vertebra slips forward). Instability can place extra pressure on nerves, leading to leg pain, numbness, or weakness over time."
    ],
    conditionInfo: [
      "Without proper diagnosis and care, spinal instability may worsen and lead to further complications. If you suspect your spine is not as stable as it once was—especially if you feel heightened pain when standing or bending—consult the NY Center for Spinal Disorders. Our spine surgeons can confirm the diagnosis through imaging and recommend steps to support or stabilize your spine.",
    ],
    treatment: [
      "Mild instability may improve with targeted exercises, bracing, or physical therapy.",
      "More pronounced cases might require stabilization procedures, often performed with minimally invasive techniques.",
      "Recovery focuses on strengthening core muscles, safe mobility, and gradual return to daily activities."
    ],
    postCare: [
      "Personalized follow-up plans ensure you gain confidence in movement and reduce pain flare-ups.",
      "Our team is available to answer questions and adjust care plans as you heal."
    ],
    nonSurgicalOptions: [
      "Physical therapy",
      "Core strengthening programs",
      "Pain management injections"
    ],
    faqs: [
      {
        id: 1,
        question: "Will I need to wear a brace forever?",
        answer: "Most patients use bracing temporarily as part of a comprehensive rehab plan."
      },
      {
        id: 2,
        question: "Is therapy enough for severe cases?",
        answer: "Severe instability may need surgical stabilization, but therapy remains a vital part of recovery."
      }
    ]
  };  

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <title>{pageData.title} - NYC for Spinal Disorders</title>
      <meta name="description" content={pageData.metaDescription} />
      <meta name="keywords" content={pageData.metaKeywords} />
      <meta name="author" content="New York Center for Spinal Disorders" />
      <meta property="og:title" content={pageData.title} />
      <meta property="og:description" content={pageData.metaDescription} />
      <meta property="og:image" content="/images/logo-header.png" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      <Header />

      
      <div className="flex items-center relative min-h-[40vh] bg-gradient-to-r from-[#003666] to-[#0062B1] py-8">
        <div className="absolute inset-0">
          <img
            src="../images/circles.jpg"
            alt={pageData.title}
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative h-full max-w-6xl mx-auto px-4 flex items-center">
          <div>
            <h1 className="text-5xl font-bold text-white mb-4">{pageData.title}</h1>
            <p className="text-2xl text-blue-100">{pageData.heroDescription}</p>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto py-6 px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/appointment" className="inline-flex items-center px-6 py-3 bg-blue-900 text-white rounded-full hover:bg-blue-800 transition">
              Schedule Consultation <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <a href="tel:+12122493840" className="inline-flex items-center px-6 py-3 border-2 border-blue-900 text-blue-900 rounded-full hover:bg-blue-50 transition">
              <Phone className="mr-2 w-4 h-4" /> Call Now
            </a>
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <BookOpen className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Condition Overview</h2>
                {pageData.forWho.map((paragraph, index) => (
                  <p key={index} className="text-gray-700 leading-relaxed mb-4">{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <Activity className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">What Patients Need to Know</h2>
                <ul className="space-y-4 text-gray-700">
                  {pageData.conditionInfo.map((info, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>{info}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>





        <div className="bg-gradient-to-r from-[#003666] to-[#0062B1] rounded-xl shadow-lg p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Patient-Centered Approach</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our dedicated team of board-certified orthopedic spine physicians at New York Center for Spinal Disorders works together to guide you every step of the way, always prioritizing your comfort and well-being.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/appointment" className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 rounded-full font-bold hover:bg-blue-100 transition duration-300">
              Schedule Consultation
            </Link>
            <a href="tel:+12122493840" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-full font-bold hover:bg-white/10 transition duration-300">
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SpineInstabilityCondition;