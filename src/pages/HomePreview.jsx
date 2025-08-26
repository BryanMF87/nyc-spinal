import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import ServicesGrid from '../modules/Home/ServicesGrid';
import AboutPractice from '../modules/Home/AboutPractice';
import Spine101 from '../modules/Home/Spine101';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PhysicianShowcase from '../modules/Home/Physicians';
import { Link } from 'react-router-dom';
import {
  ChevronRight,
  Brain,
  Activity,
  MessageCircle,
  Calendar,
  HeartHandshake,
} from 'lucide-react';

import HeroPreview from '../modules/Home/HeroPreview';

const HomePreview = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white overflow-x-hidden">
      <Helmet>
        <title>TEST New York Center for Spinal Disorders - Treating Scoliosis</title>
        <meta name="description" content="TEST Founded by Dr. Tindel, the New York Center for Spinal Disorders treats adults and teens for scoliosis, herniated discs, back pain and more spine conditions." />
        <meta name="keywords" content="spinal disorders, scoliosis treatment, herniated discs, back pain, spine conditions, New York, Dr. Tindel, orthopedic surgeon, spine care, scoliosis in teens" />
        <meta name="author" content="Dr. Nathaniel Tindel" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="TEST New York Center for Spinal Disorders - Treating Scoliosis" />
        <meta property="og:description" content="TEST Founded by Dr. Tindel, the New York Center for Spinal Disorders treats adults and teens for scoliosis, herniated discs, back pain, and more spine conditions." />
        <meta property="og:image" content="/images/logo-header.png" />
        <meta property="og:url" content="https://www.nycspinaldisorders.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TEST New York Center for Spinal Disorders - Treating Scoliosis" />
        <meta name="twitter:description" content="TEST Founded by Dr. Tindel, the New York Center for Spinal Disorders treats adults and teens for scoliosis, herniated discs, back pain, and more spine conditions." />
        <meta name="twitter:image" content="/images/logo-header.png" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#0062B1" />
        <meta name="mobile-web-app-capable" content="yes" />
      </Helmet>

      <Header />

      <HeroPreview />

      <PhysicianShowcase />

      <ServicesGrid />

      <section className="py-24 px-4 bg-gradient-to-br from-[#0062B1] to-[#003666] text-white">
        <div className="max-w-6xl mx-auto md:flex items-center space-y-12 md:space-y-0 md:space-x-12">
          <div className="md:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-[#0062B1] rounded-2xl transform rotate-6" />
            <img 
              src="/images/DrNathaniel.jpeg"
              alt="Dr. Nathaniel Tindel"
              className="relative z-10 rounded-2xl shadow-2xl h-72 md:h-auto object-cover"
            />
            <div className="absolute left-1/2 -translate-x-1/2 md:-translate-x-0 md:left-auto md:-right-8 -bottom-8 bg-white text-[#003666] p-4 md:p-6 rounded-xl shadow-xl w-10/12 md:max-w-sm transform rotate-2 z-20">
              <p className="text-base md:text-lg italic font-medium text-center md:text-left">
                "I believe that the doctor-patient relationship is a partnership."
              </p>
            </div>
          </div>
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold">Nathaniel Tindel, MD</h2>
            <p className="text-xl text-sky-100">
              Bringing a thoughtful, personal approach to his practice and patient care, Dr. Nathaniel Tindel is a board-certified orthopaedic surgeon who specializes in the spine and scoliosis.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Calendar, text: '20+ Years Experience' },
                { icon: MessageCircle, text: 'Personalized Care' },
                { icon: Brain, text: 'Advanced Techniques' },
                { icon: Activity, text: 'Proven Results' },
                { icon: HeartHandshake, text: 'Safe Practice' },
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <item.icon className="w-6 h-6 text-sky-300" />
                  <span className="text-sky-100">{item.text}</span>
                </div>
              ))}
            </div>
            <Link 
              to="/meet-dr-tindel"
              className="inline-block group mt-8 px-8 py-4 bg-white text-[#003666] rounded-full font-bold hover:bg-sky-50 transition duration-300"
            >
              <div className="flex items-center">
                Learn more about Dr. Tindel's philosophy
                <ChevronRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <div className="absolute -top-12 -left-12 w-24 h-24 bg-sky-100 rounded-full opacity-50" />
            <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-[#0062B1]/20 rounded-full opacity-50" />
            
            <div className="relative grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 p-8 bg-gradient-to-br from-white to-sky-50 rounded-2xl shadow-lg">
                <h2 className="text-3xl font-bold text-[#003666]">
                  Treating Scoliosis in Teens
                </h2>
                <p className="text-lg text-gray-700">
                  To put it simply, scoliosis is an abnormal side-to-side curvature of the spine. While adults can be diagnosed with it, the vast majority of patients with scoliosis are diagnosed during adolescence.
                </p>
                <Link 
                  to="/understanding-scoliosis"
                  className="group inline-flex items-center text-[#0062B1] font-semibold hover:text-[#003666] transition-colors duration-300"
                >
                  What it is and how we treat it
                  <ChevronRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-400/20 to-[#0062B1]/20 rounded-2xl transform -rotate-2" />
                <img 
                  src="/images/teenscoliosis.webp" 
                  alt="Teen scoliosis treatment"
                  className="relative z-10 rounded-2xl shadow-xl"
                />
                <div className="absolute -right-4 -bottom-4 bg-white p-4 rounded-xl shadow-lg z-20">
                  <p className="text-sm text-gray-600">Most common age of diagnosis</p>
                  <p className="text-2xl font-bold text-[#003666]">10-15 years</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      */}

      <AboutPractice />

      <Spine101 />

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#003666] via-[#0062B1] to-sky-800 opacity-90" />
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url("/api/placeholder/1920/1080")',
            transform: `translateY(${(scrollY - 2000) * 0.2}px)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Transform Your Life?
          </h2>
          <p className="text-xl text-sky-100 mb-12">
            Take the first step towards a pain-free future with our innovative spine care solutions.
          </p>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
            <Link to="/appointment">
              <button className="px-8 py-4 bg-white text-[#003666] rounded-full font-bold hover:bg-sky-50 transition duration-300">
                Schedule Consultation
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePreview;