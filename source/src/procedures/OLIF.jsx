import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, BookOpen, Activity, Heart, ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const OLIFProcedure = () => {
  const [openFaqId, setOpenFaqId] = useState(null);

  const toggleFaq = (id) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const data = {
    "title": "Oblique Lumbar Interbody Fusion (OLIF) in New York City",
    "metaDescription": "Expert OLIF procedures in NYC. Learn how this minimally invasive approach restores spinal stability while reducing muscle disruption and recovery time.",
    "metaKeywords": "OLIF NYC, oblique lumbar fusion, minimally invasive spine surgery, degenerative disc disease, spondylolisthesis treatment",
    "heroDescription": "Minimally invasive OLIF for effective spinal fusion with reduced muscle trauma and faster recovery.",
    "forWho": "Patients with degenerative disc disease or lumbar instability requiring fusion. Individuals who desire a minimally invasive approach with reduced muscle disruption. Those diagnosed with conditions such as spondylolisthesis or early degenerative changes.",
    "procedureInfo": [
      "OLIF accesses the disc space through an oblique incision along the side of the abdomen, allowing our NYCSD surgeons to remove the diseased disc and insert a cage with bone graft material.",
      "This procedure restores disc height and alignment while reducing the trauma to posterior musculature, leading to faster recovery and improved spinal biomechanics."
    ],
    "faqs": [
      {
        "id": 1,
        "question": "How does OLIF differ from XLIF?",
        "answer": "OLIF uses an oblique, rather than strictly lateral, approach, further minimizing muscle disruption."
      },
      {
        "id": 2,
        "question": "What are the key benefits of OLIF?",
        "answer": "Reduced postoperative pain, preservation of musculature, and effective restoration of spinal alignment."
      },
      {
        "id": 3,
        "question": "What is the expected recovery like?",
        "answer": "Patients generally experience a shorter hospital stay and quicker return to daily activities."
      },
      {
        "id": 4,
        "question": "Are there specific risks with OLIF?",
        "answer": "Potential risks include vascular or nerve injury, but these are rare when performed by our experienced NYCSD team."
      },
      {
        "id": 5,
        "question": "Will additional stabilization be needed?",
        "answer": "In some instances, supplemental fixation may be recommended to enhance fusion outcomes."
      }
    ],
    "nonSurgicalOptions": [
      "Targeted Physical Therapy",
      "Pain Management Injections",
      "Postural and Ergonomic Modifications"
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      
      <title>{data.title} - NYC for Spinal Disorders</title>
      <meta name="description" content={data.metaDescription} />
      <meta name="keywords" content={data.metaKeywords} />
      <meta name="author" content="Dr. Nathaniel Tindel" />
      <meta property="og:title" content={data.title} />
      <meta property="og:description" content={data.metaDescription} />
      <meta property="og:image" content="/images/logo-header.png" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <Header />

      
      <div className="flex items-center relative min-h-[40vh] bg-gradient-to-r from-[#003666] to-[#0062B1] py-8">
        <div className="absolute inset-0">
          <img
            src="/images/circles.jpg"
            alt={data.title}
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative h-full max-w-6xl mx-auto px-4 flex items-center">
          <div>
            <h1 className="text-5xl font-bold text-white mb-4">{data.title}</h1>
            <p className="text-2xl text-blue-100">{data.heroDescription}</p>
          </div>
        </div>
      </div>

      
      <div className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto py-6 px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/appointment"
              className="inline-flex items-center px-6 py-3 bg-blue-900 text-white rounded-full hover:bg-blue-800 transition"
            >
              Schedule Consultation <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <a
              href="tel:+12122493840"
              className="inline-flex items-center px-6 py-3 border-2 border-blue-900 text-blue-900 rounded-full hover:bg-blue-50 transition"
            >
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
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Who Is This Procedure For?</h2>
                <p className="text-gray-700 leading-relaxed">
                  {data.forWho}
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
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Procedure Information</h2>
                <ul className="space-y-4">
                  {data.procedureInfo.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
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
              {data.faqs.map((faq) => (
                <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    className="w-full flex items-center justify-between p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                    onClick={() => toggleFaq(faq.id)}
                  >
                    <span className="font-semibold text-gray-900">{faq.question}</span>
                    {openFaqId === faq.id ? (
                      <ChevronUp className="w-5 h-5 text-blue-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-blue-600" />
                    )}
                  </button>
                  {openFaqId === faq.id && (
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

export default OLIFProcedure;
