import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
  Stethoscope,
  BookOpen,
  MessageCircle,
  Brain,
  Activity,
  ChevronRight,
  Check
} from 'lucide-react';

const SurgicalSpecialties = () => {
  const surgicalProcedures = [
    'Microdiscectomy',
    'Spinal Fusion',
    'Spinal Implants',
    'Kyphoplasty',
    'Tumors',
    'Infections',
    'Fractures',
    'Complex Revision Spinal Surgery',
    'Scoliosis Corrective Surgery',
    'Spinal Cord Injury Surgery',
    'Cervical Disc Surgery',
    'Artificial Disc Replacement',
    'Herniated Disc Surgery',
    'Lumbar Laminectomy'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Helmet>
        <title>Surgical Specialties - New York Center for Spinal Disorders</title>
        <meta name="description" content="Explore our expertise in advanced spinal surgeries, including minimally invasive techniques and complex procedures tailored to your unique needs." />
        <meta name="keywords" content="spinal disorders, scoliosis treatment, herniated discs, back pain, spine conditions, New York, spine surgery, orthopedic care, spine care" />
        <meta name="author" content="New York Center for Spinal Disorders" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="New York Center for Spinal Disorders - Surgical Specialties" />
        <meta property="og:description" content="The New York Center for Spinal Disorders provides advanced surgical care for spine conditions, including minimally invasive and complex procedures." />
        <meta property="og:image" content="/images/logo-header.png" />
        <meta property="og:url" content="https://www.nycspinaldisorders.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="New York Center for Spinal Disorders - Surgical Specialties" />
        <meta name="twitter:description" content="The New York Center for Spinal Disorders provides advanced surgical care for spine conditions, including minimally invasive and complex procedures." />
        <meta name="twitter:image" content="/images/logo-header.png" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#4a90e2" />
        <meta name="mobile-web-app-capable" content="yes" />
      </Helmet>

      <Header />
      
      <div className="relative h-[50vh] bg-gradient-to-r from-[#003666] to-[#0062B1]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#003666]/90 to-[#0062B1]/90" />
          <img
            src="/images/spinespecialty.jpg"
            alt="Surgical expertise"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative h-full max-w-6xl mx-auto px-4 flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-white mb-6">Surgical Specialties</h1>
            <p className="text-2xl text-sky-100">
              Advanced spine care tailored to your unique needs
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-12">
            <div className="prose max-w-none">
              <h2 className="text-3xl font-bold text-[#003666] mb-6">
                Matching the Treatment to the Condition
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Every patient is different—from the type of condition to the amount of pain they're experiencing—and what works for one person is not always what works for someone else. Our focus is to find the unique solution that works best for each patient's specific problem.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                When surgery is considered, our team spends significant time educating patients and their families about everything they need to know about their procedure. We view the doctor-patient relationship as a partnership and encourage patients to ask questions and become active partners in the decision-making process to ensure they understand their condition and treatment options.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#003666] to-[#0062B1] p-8 rounded-2xl text-white">
              <div className="flex items-center space-x-3 mb-6">
                <Stethoscope className="w-6 h-6" />
                <h2 className="text-2xl font-bold">Our Surgical Expertise</h2>
              </div>
              <p className="text-sky-100 mb-8">
                Our board-certified surgical team specializes in both minimally invasive techniques and complex spinal procedures, including:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {surgicalProcedures.map((procedure, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-sky-300 flex-shrink-0" />
                    <span className="text-sky-100">{procedure}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-sky-50 p-8 rounded-2xl">
              <div className="flex items-center space-x-3 mb-6">
                <MessageCircle className="w-6 h-6 text-[#0062B1]" />
                <h2 className="text-2xl font-bold text-[#003666]">Our Approach to Care</h2>
              </div>
              <blockquote className="text-xl text-gray-700 italic mb-4">
                "We encourage our patients to ask questions—lots of them. It's their health we're talking about, and it's important that they understand the what, how, and why before we ever proceed with treatment."
              </blockquote>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <BookOpen className="w-6 h-6 text-[#0062B1]" />
                  <h3 className="text-xl font-bold text-[#003666]">Recommended Reading</h3>
                </div>
                <img
                  src="/images/publishedbook.jpg"
                  alt="Recommended book"
                  className="w-10/12 h-96 object-cover rounded-lg mb-4"
                />
                <blockquote className="text-gray-700 italic mb-4">
                  "Covering everything from common diagnoses to surgical procedures, this book is packed with information to help people understand their condition, find the right doctor and make informed decisions about treatment."
                </blockquote>
                <p className="text-gray-600 mb-4">~ Dr. Tindel</p>
                <Link
                  to="/ive-got-your-back"
                  className="inline-flex items-center text-[#0062B1] font-semibold hover:text-[#003666]"
                >
                  Learn more about the book
                  <ChevronRight className="ml-2" />
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: Brain,
                  title: "Minimally Invasive Techniques",
                  description: "Advanced procedures with reduced recovery time"
                },
                {
                  icon: Activity,
                  title: "Complex Spinal Procedures",
                  description: "Expert care for challenging conditions"
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
              <h3 className="text-xl font-bold mb-4">Ready to Take the Next Step?</h3>
              <p className="text-sky-100 mb-6">
                Schedule a consultation to discuss your condition and treatment options with our surgical team.
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

export default SurgicalSpecialties;