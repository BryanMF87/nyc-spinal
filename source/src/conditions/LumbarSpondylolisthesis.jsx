import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, BookOpen, Activity, Stethoscope, Heart, ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const LumbarSpondylolisthesisCondition = () => {
  const [openFaqId, setOpenFaqId] = useState(null);

  const toggleFaq = (id) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const pageData = {
    title: "Lumbar Spondylolisthesis in New York City",
    metaDescription: "Comprehensive care for lumbar spondylolisthesis in New York. Explore treatments to relieve pain, restore function, and prevent progression at NY Center for Spinal Disorders.",
    metaKeywords: "lumbar spondylolisthesis, vertebra slippage, back pain treatment NYC, Dr. Shah, Dr. Tindel, spinal instability",
    heroDescription: "Expert treatment for lumbar spondylolisthesis with personalized care to alleviate pain and improve mobility.",
    forWho: [
      "In lumbar spondylolisthesis, one of the vertebrae in the lower back slips forward over the vertebra below it. This slippage can occur due to stress fractures (spondylolysis), degenerative disc changes, or structural abnormalities in the spine. As the vertebra shifts, it may put pressure on spinal nerves, resulting in lower back pain, leg pain, or muscle weakness.",
      "Spondylolisthesis is graded based on how far the vertebra has slipped, and symptoms often worsen with standing or walking for extended periods. Over time, this misalignment can lead to spinal instability if left unaddressed."
    ],
    conditionInfo: [
      "If you suspect spondylolisthesis—especially if you feel a dull ache in your lower back or shooting pain into your legs—seek an evaluation. The spine experts at the NY Center for Spinal Disorders can confirm the diagnosis, determine the severity, and advise on how to best stabilize your spine.",
    ],
    treatment: [
      "Physical therapy, bracing, and anti-inflammatory treatments often relieve mild to moderate cases.",
      "Surgery may be considered for advanced slippage or significant nerve compression.",
      "With proper care, many return to daily activities with minimal pain."
    ],
    postCare: [
      "Follow-up visits monitor stability and pain levels.",
      "Patient education on posture and exercises helps prevent progression."
    ],
    nonSurgicalOptions: [
      "Physical therapy & core strengthening",
      "Pain management injections",
      "Bracing (temporary support)"
    ],
    faqs: [
      {
        id: 1,
        question: "Will my spine continue to slip?",
        answer: "It may remain stable or progress slowly; consistent check-ups catch changes early."
      },
      {
        id: 2,
        question: "Can I stay active with spondylolisthesis?",
        answer: "Yes, guided exercises and modifications often allow an active lifestyle."
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

export default LumbarSpondylolisthesisCondition;