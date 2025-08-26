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
import Hero from '../modules/Home/Hero';
import Attention from '../modules/Home/Attention';
import { StoryblokComponent, storyblokEditable } from "@storyblok/react";

const Home = () => {
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
        <title>New York Center for Spinal Disorders</title>
        <meta name="description" content="Founded by Dr. Tindel, the New York Center for Spinal Disorders treats adults and teens for scoliosis, herniated discs, back pain and more spine conditions." />
        <meta name="keywords" content="spinal disorders, scoliosis treatment, herniated discs, back pain, spine conditions, New York, Dr. Tindel, orthopedic surgeon, spine care, scoliosis in teens" />
        <meta name="author" content="Dr. Nathaniel Tindel" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="New York Center for Spinal Disorders - Treating Scoliosis" />
        <meta property="og:description" content="Founded by Dr. Tindel, the New York Center for Spinal Disorders treats adults and teens for scoliosis, herniated discs, back pain, and more spine conditions." />
        <meta property="og:image" content="/images/logo-header.png" />
        <meta property="og:url" content="https://www.nycspinaldisorders.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="New York Center for Spinal Disorders - Treating Scoliosis" />
        <meta name="twitter:description" content="Founded by Dr. Tindel, the New York Center for Spinal Disorders treats adults and teens for scoliosis, herniated discs, back pain, and more spine conditions." />
        <meta name="twitter:image" content="/images/logo-header.png" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#0062B1" />
        <meta name="mobile-web-app-capable" content="yes" />
      </Helmet>

      <Header />

      <Hero />
      
      <Attention />

      <PhysicianShowcase />

      <ServicesGrid />

      <section className="relative py-32 overflow-hidden">
        
        <div className="absolute inset-0 bg-gradient-to-br from-[#0062B1] to-[#003666]">
          
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='100%25' gradientTransform='rotate(240)'%3E%3Cstop offset='0' stop-color='%23ffffff'/%3E%3Cstop offset='1' stop-color='%234FD1C5'/%3E%3C/linearGradient%3E%3Cpattern patternUnits='userSpaceOnUse' id='b' width='540' height='450' x='0' y='0' viewBox='0 0 1080 900'%3E%3Cg fill-opacity='0.1'%3E%3Cpolygon fill='%23444' points='90 150 0 300 180 300'/%3E%3Cpolygon points='90 150 180 0 0 0'/%3E%3Cpolygon fill='%23AAA' points='270 150 360 0 180 0'/%3E%3Cpolygon fill='%23DDD' points='450 150 360 300 540 300'/%3E%3Cpolygon fill='%23999' points='450 150 540 0 360 0'/%3E%3Cpolygon points='630 150 540 300 720 300'/%3E%3Cpolygon fill='%23DDD' points='630 150 720 0 540 0'/%3E%3Cpolygon fill='%23444' points='810 150 720 300 900 300'/%3E%3Cpolygon fill='%23FFF' points='810 150 900 0 720 0'/%3E%3Cpolygon fill='%23DDD' points='990 150 900 300 1080 300'/%3E%3Cpolygon fill='%23444' points='990 150 1080 0 900 0'/%3E%3Cpolygon fill='%23DDD' points='90 450 0 600 180 600'/%3E%3Cpolygon points='90 450 180 300 0 300'/%3E%3Cpolygon fill='%23666' points='270 450 180 600 360 600'/%3E%3Cpolygon fill='%23AAA' points='270 450 360 300 180 300'/%3E%3Cpolygon fill='%23DDD' points='450 450 360 600 540 600'/%3E%3Cpolygon fill='%23999' points='450 450 540 300 360 300'/%3E%3Cpolygon fill='%23999' points='630 450 540 600 720 600'/%3E%3Cpolygon fill='%23FFF' points='630 450 720 300 540 300'/%3E%3Cpolygon points='810 450 720 600 900 600'/%3E%3Cpolygon fill='%23DDD' points='810 450 900 300 720 300'/%3E%3Cpolygon fill='%23AAA' points='990 450 900 600 1080 600'/%3E%3Cpolygon fill='%23444' points='990 450 1080 300 900 300'/%3E%3Cpolygon fill='%23222' points='90 750 0 900 180 900'/%3E%3Cpolygon points='270 750 180 900 360 900'/%3E%3Cpolygon fill='%23DDD' points='270 750 360 600 180 600'/%3E%3Cpolygon points='450 750 540 600 360 600'/%3E%3Cpolygon points='630 750 540 900 720 900'/%3E%3Cpolygon fill='%23444' points='630 750 720 600 540 600'/%3E%3Cpolygon fill='%23AAA' points='810 750 720 900 900 900'/%3E%3Cpolygon fill='%23666' points='810 750 900 600 720 600'/%3E%3Cpolygon fill='%23999' points='990 750 900 900 1080 900'/%3E%3Cpolygon fill='%23999' points='180 0 90 150 270 150'/%3E%3Cpolygon fill='%23444' points='360 0 270 150 450 150'/%3E%3Cpolygon fill='%23FFF' points='540 0 450 150 630 150'/%3E%3Cpolygon points='900 0 810 150 990 150'/%3E%3Cpolygon fill='%23222' points='0 300 -90 450 90 450'/%3E%3Cpolygon fill='%23FFF' points='0 300 90 150 -90 150'/%3E%3Cpolygon fill='%23FFF' points='180 300 90 450 270 450'/%3E%3Cpolygon fill='%23666' points='180 300 270 150 90 150'/%3E%3Cpolygon fill='%23222' points='360 300 270 450 450 450'/%3E%3Cpolygon fill='%23FFF' points='360 300 450 150 270 150'/%3E%3Cpolygon fill='%23444' points='540 300 450 450 630 450'/%3E%3Cpolygon fill='%23222' points='540 300 630 150 450 150'/%3E%3Cpolygon fill='%23AAA' points='720 300 630 450 810 450'/%3E%3Cpolygon fill='%23666' points='720 300 810 150 630 150'/%3E%3Cpolygon fill='%23FFF' points='900 300 810 450 990 450'/%3E%3Cpolygon fill='%23999' points='900 300 990 150 810 150'/%3E%3Cpolygon points='0 600 -90 750 90 750'/%3E%3Cpolygon fill='%23666' points='0 600 90 450 -90 450'/%3E%3Cpolygon fill='%23AAA' points='180 600 90 750 270 750'/%3E%3Cpolygon fill='%23444' points='180 600 270 450 90 450'/%3E%3Cpolygon fill='%23444' points='360 600 270 750 450 750'/%3E%3Cpolygon fill='%23999' points='360 600 450 450 270 450'/%3E%3Cpolygon fill='%23666' points='540 600 630 450 450 450'/%3E%3Cpolygon fill='%23222' points='720 600 630 750 810 750'/%3E%3Cpolygon fill='%23FFF' points='900 600 810 750 990 750'/%3E%3Cpolygon fill='%23222' points='900 600 990 450 810 450'/%3E%3Cpolygon fill='%23DDD' points='0 900 90 750 -90 750'/%3E%3Cpolygon fill='%23444' points='180 900 270 750 90 750'/%3E%3Cpolygon fill='%23FFF' points='360 900 450 750 270 750'/%3E%3Cpolygon fill='%23AAA' points='540 900 630 750 450 750'/%3E%3Cpolygon fill='%23FFF' points='720 900 810 750 630 750'/%3E%3Cpolygon fill='%23222' points='900 900 990 750 810 750'/%3E%3Cpolygon fill='%23222' points='1080 300 990 450 1170 450'/%3E%3Cpolygon fill='%23FFF' points='1080 300 1170 150 990 150'/%3E%3Cpolygon points='1080 600 990 750 1170 750'/%3E%3Cpolygon fill='%23666' points='1080 600 1170 450 990 450'/%3E%3Cpolygon fill='%23DDD' points='1080 900 1170 750 990 750'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect x='0' y='0' fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect x='0' y='0' fill='url(%23b)' width='100%25' height='100%25'/%3E%3C/svg%3E")`,
              backgroundSize: 'cover',
              animation: 'wave 20s linear infinite',
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            <div className="relative">
              <div className="aspect-square">
                
                <div className="relative h-full w-full overflow-hidden rounded-3xl">
                  
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-400/20 to-white/20 backdrop-blur-sm" />
                  <div className="absolute -inset-1 bg-gradient-to-r from-sky-400/30 via-white/20 to-sky-400/30 blur-2xl" />
                  
                  
                  <div className="relative h-full w-full transform transition-transform duration-700 hover:scale-105">
                    <img
                      src="/images/spinecare.jpeg"
                      alt="Advanced Spine Care"
                      className="h-full w-full object-cover rounded-2xl"
                    />
                    
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-[#003666]/50 to-transparent rounded-2xl" />
                    
                    
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">360° Life Impact</h3>
                      <p className="text-sky-100 text-balance">Your spine is the core of your mobility and well-being</p>
                      <p className="text-sky-100 text-balance">Our personalized treatments help you rediscover a life without limits</p>
                    </div>
                  </div>
                  
                  
                  <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-sky-300/50 rounded-tl-xl" />
                  <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-sky-300/50 rounded-tr-xl" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-sky-300/50 rounded-bl-xl" />
                  <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-sky-300/50 rounded-br-xl" />
                </div>
              </div>
            </div>

            
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Transform Your Life Through Motion
              </h2>
              <p className="text-xl text-sky-100">
                Every movement tells a story. Whether it's playing with your children, 
                excelling in sports, or simply embracing each day with vitality – 
                your spine plays a crucial role in life's most meaningful moments.
              </p>
              
              <div className="grid gap-6">
                {[
                  { number: '4.8 ★★★★★', text: 'Patient-Rated Excellence' },
                  { number: '50+ Years', text: 'Combined Expertise & Experience' },
                  { number: '3,000+', text: 'Successful Procedures Performed' },
                ].map((stat, index) => (
                  <div key={index} className="flex items-center space-x-4 bg-white/10 rounded-xl p-4">
                    <span className="text-2xl font-bold text-sky-300">{stat.number}</span>
                    <span className="text-sky-100">{stat.text}</span>
                  </div>
                ))}
              </div>

              {/* 
              <Link 
                to="#"
                className="inline-block group px-8 py-4 bg-white text-[#003666] rounded-full font-bold hover:bg-sky-50 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center">
                  Explore Success Stories
                  <ChevronRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
              */}
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes wave {
            0% { background-position: 0% 0%; }
            100% { background-position: 100% 100%; }
          }
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 20s linear infinite;
          }
        `}</style>
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
            Start Your Path to Better Spine Care
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

export default Home;