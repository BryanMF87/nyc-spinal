import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
  Heart,
  Activity,
  Check,
  Brain,
  Clock,
  Phone,
  ChevronRight,
  HeartPulse
} from 'lucide-react';

const MISS = () => {
  const benefits = [
    'Smaller Incisions',
    'Reduced Pain and Scarring',
    'Shorter Recovery Period',
    'Lower Risk of Complications',
    'Customized Treatment Plans'
  ];

  const conditions = [
    'Herniated or bulging discs',
    'Spinal stenosis',
    'Degenerative disc disease',
    'Certain types of scoliosis or deformities',
    'Chronic back pain with a confirmed spinal source'
  ];

  const faqs = [
    {
      question: 'What conditions can be treated with minimally invasive spine surgery?',
      answer: 'Minimally invasive techniques can address common conditions such as herniated or bulging discs, spinal stenosis, degenerative disc disease, and certain types of scoliosis. They may also be used for procedures like spinal fusion, decompression, and discectomy, depending on individual patient needs.'
    },
    {
      question: 'How do I know if I am a candidate for minimally invasive surgery?',
      answer: 'Candidacy varies by individual. Our doctors will perform a thorough evaluation to determine the cause and extent of your spinal condition, factoring in your overall health, lifestyle, and personal preferences. If a minimally invasive approach can effectively address your issue, it is often recommended.'
    },
    {
      question: 'Will I experience less pain during and after minimally invasive surgery?',
      answer: 'Yes. Because these procedures involve smaller incisions and less disruption to surrounding tissues, patients often report reduced post-operative pain and discomfort compared to traditional open surgery. Additionally, recovery times are typically shorter, with many patients resuming routine activities more quickly.'
    },
    {
      question: 'How long does it take to recover from a minimally invasive spine procedure?',
      answer: 'Recovery varies based on the complexity of the surgery and individual patient factors. Some patients return to their daily activities within a few weeks. Our medical team will create a personalized rehabilitation plan to optimize your recovery and help prevent future issues.'
    },
    {
      question: 'Are there any risks associated with minimally invasive spine surgery?',
      answer: 'As with any surgery, there are potential risks, including infection, nerve damage, or complications related to anesthesia. However, minimally invasive techniques generally have a lower risk profile compared to traditional open surgeries due to fewer disruptions to surrounding tissues.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Helmet>
        <title>Minimally Invasive Spine Surgery - NY Center for Spinal Disorders</title>
        <meta name="description" content="Learn about minimally invasive spine surgery options at NY Center for Spinal Disorders. Advanced techniques for faster recovery and better outcomes." />
        <meta name="keywords" content="minimally invasive spine surgery, MISS, spine surgery, back pain, NY Center for Spinal Disorders" />
        <meta property="og:title" content="Minimally Invasive Spine Surgery - NY Center for Spinal Disorders" />
        <meta property="og:description" content="Advanced minimally invasive spine surgery techniques for better outcomes and faster recovery." />
        <meta property="og:type" content="website" />
      </Helmet>

      <Header />

      <div className="relative h-[50vh] bg-gradient-to-r from-[#003666] to-[#0062B1]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#003666]/90 to-[#0062B1]/90" />
          <img
            src="/images/spinebackground.png"
            alt="Minimally Invasive Surgery"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="relative h-full max-w-6xl mx-auto px-4 flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-white mb-6">Minimally Invasive Spine Surgery</h1>
            <p className="text-2xl text-sky-100">
              Advanced techniques for optimal outcomes with faster recovery
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-12">
            <div className="prose max-w-none">
              <h2 className="text-3xl font-bold text-[#003666] mb-6">
                Innovative Techniques and Advanced Technology
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                At the NY Center for Spinal Disorders, our team of highly skilled doctors is committed to providing the most advanced, minimally invasive spine surgeries available. We combine clinical excellence with compassionate care—ensuring each patient receives a customized treatment plan that aims to reduce pain, accelerate recovery, and restore mobility. Whether you are experiencing chronic back pain, spinal deformities, or disc issues, our state-of-the-art facility and expert staff are here to guide you on your journey to better spinal health.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Minimally invasive spine surgery (MISS) has revolutionized the way spinal conditions are treated. Our experienced surgeons utilize the latest advancements in surgical tools, imaging technologies, and patient monitoring systems to deliver precise, efficient procedures with smaller incisions, reduced tissue damage, and faster recovery times. Cutting-edge intraoperative navigation, robotic-assisted platforms, and high-resolution imaging enable us to pinpoint the precise location of the issue, minimizing risks and improving overall outcomes.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#003666] to-[#0062B1] p-8 rounded-2xl text-white">
              <div className="flex items-center space-x-3 mb-6">
                <Heart className="w-6 h-6" />
                <h2 className="text-2xl font-bold">Key Advantages</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-sky-300 flex-shrink-0" />
                    <span className="text-sky-100">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-sky-50 p-8 rounded-2xl">
              <div className="flex items-center space-x-3 mb-6">
                <Brain className="w-6 h-6 text-[#0062B1]" />
                <h2 className="text-2xl font-bold text-[#003666]">Who Is This Procedure For?</h2>
              </div>
              <p className="text-gray-700 mb-6">
                Minimally invasive spine surgery may be recommended if you experience persistent back or neck pain that has not responded to conservative treatments such as physical therapy, medications, or injections. Typical candidates include those suffering from:
              </p>
              <div className="grid gap-3">
                {conditions.map((condition, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-[#0062B1] flex-shrink-0" />
                    <span className="text-gray-700">{condition}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-[#003666]">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-sm p-6">
                    <h3 className="text-xl font-semibold text-[#003666] mb-3">{faq.question}</h3>
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <HeartPulse className="w-6 h-6 text-[#0062B1]" />
                  <h3 className="text-xl font-bold text-[#003666]">Expert Care</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Our fellowship-trained spine specialists have years of experience treating a broad range of spinal issues, ensuring you receive the highest quality care.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: Activity,
                  title: "State-of-the-Art Technology",
                  description: "Advanced imaging and surgical navigation systems"
                },
                {
                  icon: Clock,
                  title: "Faster Recovery",
                  description: "Return to daily activities sooner"
                }
              ].map((highlight, index) => (
                <div key={index} className="bg-gradient-to-br from-sky-50 to-[#0062B1]/10 p-6 rounded-xl">
                  <div className="flex items-center space-x-3 mb-2">
                    <highlight.icon className="w-6 h-6 text-[#0062B1]" />
                    <h3 className="text-lg font-semibold text-[#003666]">{highlight.title}</h3>
                  </div>
                  <p className="text-gray-700">{highlight.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-[#003666] to-[#0062B1] p-6 rounded-2xl text-white">
              <h3 className="text-xl font-bold mb-4">Ready to Learn More?</h3>
              <p className="text-sky-100 mb-6">
                Schedule a consultation to discuss if minimally invasive spine surgery is right for you.
              </p>
              <Link
                to="/contact"
                className="block w-full text-center bg-white text-[#003666] py-3 rounded-lg hover:bg-sky-50 transition duration-300 font-semibold"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MISS;