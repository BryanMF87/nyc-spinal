import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, BookOpen, Activity, Stethoscope, Heart, ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const SacralTumorsCondition = () => {
  const [openFaqId, setOpenFaqId] = useState(null);

  const toggleFaq = (id) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const pageData = {
    title: "Sacral Tumors in New York City",
    metaDescription: "Comprehensive care for sacral tumors in New York. Learn about diagnosis, treatment options, and recovery at NY Center for Spinal Disorders.",
    metaKeywords: "sacral tumors, spinal tumor treatment NYC, lower back pain, Dr. Shah, Dr. Tindel, benign tumors, malignant tumors",
    heroDescription: "Expert care for sacral tumors with personalized treatment plans to restore comfort and function.",
    forWho: [
      "Sacral tumors are abnormal growths that develop in or around the sacrum—the bone at the very bottom of your spine. They can be benign (noncancerous) or malignant (cancerous), and may arise from the sacrum itself or spread from other parts of the body. Depending on their size and location, these tumors may press on nerves, causing lower back pain, numbness, weakness, or even changes in bowel or bladder function.",
      "Although sacral tumors are relatively rare, timely detection is essential to avoid long-term complications. Imaging tests such as MRIs or CT scans are often used to see the tumor’s size and any potential impact on surrounding tissues."
    ],
    conditionInfo: [
      "If you experience persistent pain in the sacral region or neurological issues that could stem from a sacral mass, talk to a spine specialist right away. Our expert team at the NY Center for Spinal Disorders in Manhattan will collaborate with other specialists (like oncologists) to design a treatment strategy that addresses both the tumor and spinal stability.",
    ],
    treatment: [
      "Treatment can include monitoring benign lesions, surgical removal, radiation, or chemotherapy (for malignant cases).",
      "Recovery depends on tumor type, location, and overall health.",
      "Many patients regain function and comfort with comprehensive care."
    ],
    postCare: [
      "Close follow-up ensures early detection of any recurrence or new issues.",
      "We provide educational resources and emotional support throughout the journey."
    ],
    nonSurgicalOptions: [
      "Observation and imaging follow-ups",
      "Radiation therapy (if indicated)",
      "Pain management strategies"
    ],
    faqs: [
      {
        id: 1,
        question: "Is surgery always needed?",
        answer: "Not if the tumor is small, benign, and not causing symptoms."
      },
      {
        id: 2,
        question: "What if I need radiation?",
        answer: "We coordinate with oncology specialists for a seamless treatment plan."
      }
    ]
  };  

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <title>{pageData.title}</title>
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

export default SacralTumorsCondition;