import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Calendar, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet';

const OurPhysicians = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Helmet>
        <title>Our Physicians - New York Center for Spinal Disorders</title>
        <meta name="description" content="Meet our expert spine surgeons Dr. Nathaniel Tindel and Dr. Neel Shah at the New York Center for Spinal Disorders. Learn about their specialized approach to spine care and personalized treatment plans." />
        <meta name="keywords" content="our physicians, spine specialists, orthopedic surgeons, back pain treatment, scoliosis care, spine surgery, New York, Dr. Tindel, Dr. Shah, spinal care" />
        <meta name="author" content="Dr. Nathaniel Tindel, Dr. Neel P. Shah" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Our Physicians - New York Center for Spinal Disorders" />
        <meta property="og:description" content="Meet our top spine specialists, Dr. Nathaniel Tindel and Dr. Neel Shah, and discover their commitment to innovative and compassionate spine care at the New York Center for Spinal Disorders." />
        <meta property="og:image" content="/images/logo-header.png" />
        <meta property="og:url" content="https://www.nycspinaldisorders.com/our-physicians" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Physicians - New York Center for Spinal Disorders" />
        <meta name="twitter:description" content="Learn about our expert spine specialists, Dr. Nathaniel Tindel and Dr. Neel Shah, and their approach to innovative spine care at the New York Center for Spinal Disorders." />
        <meta name="twitter:image" content="/images/logo-header.png" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#4a90e2" />
        <meta name="mobile-web-app-capable" content="yes" />
      </Helmet>

      
      <Header />
      
      <div className="relative h-96 bg-gradient-to-r from-[#003666] to-[#0062B1]">
        <div className="absolute inset-0">
          <img
            src="../images/interior.png"
            alt="Background Pattern"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative h-full max-w-6xl mx-auto px-4 flex items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Physicians</h1>
            <p className="text-xl md:text-2xl text-blue-100">Expert spine care from leading surgeons</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="prose max-w-none mb-12">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            At the New York Center for Spinal Disorders, our board-certified orthopedic surgeons 
            combine decades of experience with the latest innovations in spine care. Our physicians 
            are committed to providing personalized treatment plans that prioritize the least 
            invasive options while achieving optimal outcomes for our patients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="h-64 md:h-[390px] overflow-hidden">
              <img
                src="../images/DrNathaniel.jpeg"
                alt="Dr. Nathaniel Tindel"
                className="w-full h-full object-cover object-[center_30%]"
              />
            </div>
            <div className="flex flex-col flex-grow justify-between p-6 md:p-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">Nathaniel Tindel, MD</h2>
                <p className="text-base md:text-lg text-gray-600 mb-2">Board Certified Orthopedic Surgeon</p>
                <p className="text-gray-700 mb-6">
                Dr. Tindel brings a thoughtful and compassionate approach to treating spinal disorders, emphasizing trust and open communication with his patients. He believes in creating a partnership with each patient, taking the time to educate them about their condition and exploring all available treatment options. As an experienced marathon runner and a dedicated parent, he deeply understands the importance of maintaining an active lifestyle and the desire to return to it. Dr. Tindel’s commitment to personalized care and minimally invasive techniques reflects his passion for improving his patients’ quality of life.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 sm:justify-between items-start sm:items-center">
                <Link 
                  to="/meet-dr-tindel"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <span className="mr-2">Learn more</span>
                  <ArrowRight size={20} />
                </Link>
                <Link 
                  to="/appointment"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors w-full sm:w-auto justify-center sm:justify-start"
                >
                  <Calendar size={20} className="mr-2" />
                  <span>Book Appointment</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="h-64 md:h-[390px] overflow-hidden">
              <img
                src="../images/DrShahPicture1.jpg"
                alt="Dr. Neel Shah"
                className="w-full h-full object-cover object-[center_20%]"
              />
            </div>
            <div className="flex flex-col flex-grow justify-between p-6 md:p-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">Neel P. Shah, MD</h2>
                <p className="text-base md:text-lg text-gray-600 mb-2">Board Certified Orthopedic Surgeon</p>
                <p className="text-gray-700 mb-6">
                Dr. Neel P. Shah is a highly skilled Orthopedic Spine Surgeon dedicated to using minimally invasive approaches and techniques to treat a wide range of spinal conditions. His commitment to personalized care and innovative treatments sets him apart in the field. With a focus on patient education and comprehensive support, Dr. Shah strives to empower his patients to make informed decisions about their orthopedic health. His passion for improving mobility and restoring quality of life drives his practice. He is a leader in motion preservation in spine surgery, utilizing the latest techniques and implants including cervical and lumbar disc replacements.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 sm:justify-between items-start sm:items-center">
                <Link 
                  to="/neel-shah-md"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <span className="mr-2">Learn more</span>
                  <ArrowRight size={20} />
                </Link>
                <Link 
                  to="/appointment"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors w-full sm:w-auto justify-center sm:justify-start"
                >
                  <Calendar size={20} className="mr-2" />
                  <span>Book Appointment</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">Expert Care You Can Trust</h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Our physicians are supported by a dedicated team of healthcare professionals, all committed 
            to providing comprehensive spine care in a comfortable and caring environment. Whether you're 
            dealing with chronic back pain, scoliosis, or other spine conditions, our team is here to help 
            you achieve the best possible outcome.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OurPhysicians;