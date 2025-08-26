import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, BookOpen, Activity, Stethoscope, Heart, ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const ConditionTemplate = () => {

  const [openFaqId, setOpenFaqId] = useState(null);

  const toggleFaq = (id) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };
  
  const conditionData = {
    title: "Herniated Disc",
    metaDescription: "Expert treatment for herniated discs in New York. Learn about symptoms, causes, and treatment options at NY Center for Spinal Disorders.",
    metaKeywords: "herniated disc, slipped disc, disc treatment, spine specialist New York, Dr. Tindel",
    heroDescription: "Understanding causes, symptoms, and treatment options",
    overview: "A herniated disc occurs when the soft center of a spinal disc pushes through a crack in the tougher exterior casing. This condition can irritate nearby nerves, resulting in pain, numbness, or weakness in an arm or leg.",
    symptoms: [
      "Pain, numbness, or tingling in the affected area of the spine",
      "Radiating pain or numbness that extends to arms or legs",
      "Muscle weakness that may affect your ability to hold items or walk",
      "Loss of reflexes in affected areas of the body"
    ],
    causes: {
      mainParagraph: "The most common cause of a herniated disc is disc degeneration, a natural process that occurs as you age. As you get older, your spinal discs lose some of their water content, making them less flexible and more prone to tearing or rupturing with even a minor strain or twist.",
      additionalInfo: "Risk factors that increase your chance of developing a herniated disc include excess body weight, physically demanding jobs involving repetitive lifting or twisting, and certain genetic factors that may predispose some people to developing disc problems."
    },
    treatment: {
      conservative: "Initial treatment typically involves a combination of pain management techniques, including over-the-counter pain relievers, physical therapy, and targeted exercises. Your doctor may also recommend modified activities and proper posture techniques to help alleviate symptoms and prevent further damage.",
      surgical: "If conservative treatments don't provide adequate relief after several weeks or months, surgical intervention may be considered. The most common surgical procedure for a herniated disc is a microdiscectomy, which removes the protruding portion of the disc to relieve nerve pressure."
    },
    recovery: "Most patients with herniated discs show significant improvement within six weeks to three months with appropriate conservative treatment. After surgery, many patients can return to normal activities within 4-6 weeks, though complete recovery may take several months. Long-term outcomes are generally positive, with proper care and lifestyle modifications to prevent recurrence.",
    faqs: [
      {
        id: 1,
        question: "How long does it take to recover from a herniated disc?",
        answer: "Recovery time varies depending on the severity of the condition and the treatment approach. With conservative treatment, many patients see improvement within 6-12 weeks. Surgical recovery typically takes 4-6 weeks before returning to normal activities, though full recovery may take several months."
      },
      {
        id: 2,
        question: "Can I exercise with a herniated disc?",
        answer: "Yes, but it's important to choose appropriate exercises and get clearance from your healthcare provider. Low-impact activities like walking, swimming, and specific physical therapy exercises are often recommended. Avoid high-impact activities and exercises that involve twisting or sudden movements."
      },
      {
        id: 3,
        question: "Will I need surgery for my herniated disc?",
        answer: "Not necessarily. Most herniated disc cases (about 90%) respond well to conservative treatment methods like physical therapy, medication, and lifestyle modifications. Surgery is typically only recommended if conservative treatments haven't provided relief after several weeks or if there are serious symptoms like severe pain or neurological issues."
      },
      {
        id: 4,
        question: "Can a herniated disc heal on its own?",
        answer: "Yes, herniated discs can often heal on their own through a process called resorption, where the body naturally breaks down the protruding disc material. This process, combined with appropriate conservative treatment, leads to symptom improvement in many cases without surgical intervention."
      },
      {
        id: 5,
        question: "What activities should I avoid with a herniated disc?",
        answer: "You should avoid activities that put excessive strain on your spine, such as heavy lifting, prolonged sitting without proper support, high-impact exercises, and movements that involve twisting or bending. Your doctor can provide specific guidance based on your condition."
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      
      <title>{conditionData.title} - NY Center for Spinal Disorders</title>
      <meta name="description" content={conditionData.metaDescription} />
      <meta name="keywords" content={conditionData.metaKeywords} />
      <meta name="author" content="Dr. Nathaniel Tindel" />
      <meta property="og:title" content={`${conditionData.title} - NY Center for Spinal Disorders`} />
      <meta property="og:description" content={conditionData.metaDescription} />
      <meta property="og:image" content="/images/logo-header.png" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      <Header />

      <div className="relative min-h-[40vh] bg-gradient-to-r from-[#003666] to-[#0062B1] py-8">
        <div className="absolute inset-0">
          <img
            src="../images/circles.jpg"
            alt={conditionData.title}
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative h-full max-w-6xl mx-auto px-4 flex items-center">
          <div>
            <h1 className="text-5xl font-bold text-white mb-4">{conditionData.title}</h1>
            <p className="text-2xl text-blue-100">{conditionData.heroDescription}</p>
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
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Overview</h2>
                <p className="text-gray-700 leading-relaxed">
                  {conditionData.overview}
                </p>
              </div>
            </div>
          </div>
        </div>

        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          <div className="bg-white rounded-xl shadow-lg p-8 h-full">
            <div className="flex items-start gap-4">
              <Activity className="w-8 h-8 text-purple-600 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Common Symptoms</h2>
                <ul className="space-y-4 text-gray-700">
                  {conditionData.symptoms.map((symptom, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">•</span>
                      <span>{symptom}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 h-full">
            <div className="flex items-start gap-4">
              <Activity className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Causes and Risk Factors</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {conditionData.causes.mainParagraph}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {conditionData.causes.additionalInfo}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-blue-900 mb-8 text-center">Treatment Options</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 bg-blue-50 rounded-xl">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Conservative Treatment</h3>
                <p className="text-gray-700 leading-relaxed">
                  {conditionData.treatment.conservative}
                </p>
              </div>
              <div className="p-6 bg-purple-50 rounded-xl">
                <h3 className="text-xl font-semibold text-purple-800 mb-4">Surgical Treatment</h3>
                <p className="text-gray-700 leading-relaxed">
                  {conditionData.treatment.surgical}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <Heart className="w-8 h-8 text-pink-600 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Recovery and Outlook</h2>
                <p className="text-gray-700 leading-relaxed">
                  {conditionData.recovery}
                </p>
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
                <p className="text-gray-700">Find answers to common questions about {conditionData.title.toLowerCase()}.</p>
              </div>
            </div>
            
            <div className="space-y-4">
              {conditionData.faqs.map((faq) => (
                <div
                  key={faq.id}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
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
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Take Action?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Don't let {conditionData.title.toLowerCase()} hold you back. Schedule a consultation with us to discuss your treatment options.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/appointment"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 rounded-full font-bold hover:bg-blue-100 transition duration-300"
            >
              Schedule Consultation
            </Link>
            <a
              href="tel:+12122493840"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-full font-bold hover:bg-white/10 transition duration-300"
            >
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

export default ConditionTemplate;