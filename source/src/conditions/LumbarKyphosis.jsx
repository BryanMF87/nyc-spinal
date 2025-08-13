import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, BookOpen, Activity, Stethoscope, Heart, ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const LumbarKyphosisCondition = () => {
  const [openFaqId, setOpenFaqId] = useState(null);

  const toggleFaq = (id) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const pageData = {
    title: "Lumbar Kyphosis in New York City",
    metaDescription: "Comprehensive care for lumbar kyphosis in New York. Explore treatments to correct posture and alleviate pain at NY Center for Spinal Disorders.",
    metaKeywords: "lumbar kyphosis, posture correction NYC, spine curvature treatment, Dr. Shah, Dr. Tindel, back pain relief",
    heroDescription: "Expert treatment for lumbar kyphosis with personalized care to improve posture and restore quality of life.",
    forWho: [
      "Kyphosis is a forward curvature of the spine that is more commonly associated with the thoracic (mid-back) region. However, when it occurs in the lumbar (lower) area, it creates an exaggerated curve that can lead to noticeable posture changes and ongoing discomfort. Causes may include degenerative disc disease, fractures, or congenital anomalies.",
      "Patients might experience persistent lower back pain, fatigue from holding themselves upright, or difficulty standing straight. In severe cases, nerves can be compressed, causing radiating pain or numbness in the legs."
    ],
    conditionInfo: [
      "If you notice your lower back curving forward abnormally or feel persistent pain and tightness, a professional evaluation is recommended. The NY Center for Spinal Disorders can assess whether lumbar kyphosis is the issue and outline potential strategies to improve alignment and relieve discomfort.",
    ],
    treatment: [
      "Physical therapy, bracing, and postural exercises can help mild to moderate cases.",
      "Surgery may be recommended for severe curvatures impacting quality of life.",
      "Recovery times vary based on intervention and individual health."
    ],
    postCare: [
      "We provide continuous monitoring and guidance to improve posture and core strength.",
      "Our team remains reachable to adjust treatments and ensure lasting comfort."
    ],
    nonSurgicalOptions: [
      "Physical therapy",
      "Bracing & posture correction",
      "Pain management strategies"
    ],
    faqs: [
      {
        id: 1,
        question: "Can lumbar kyphosis be reversed?",
        answer: "Mild cases often improve significantly with targeted therapy."
      },
      {
        id: 2,
        question: "Is bracing effective for adults?",
        answer: "Braces can help reduce pain or prevent worsening in some cases."
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

export default LumbarKyphosisCondition;