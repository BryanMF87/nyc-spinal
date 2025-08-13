import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import {
  Disc,
  ChevronRight,
  Check,
  ArrowRight,
  Activity,
  Brain,
  Microscope,
  HeartPulse,
  Calendar
} from 'lucide-react';

const DiscReplacementShah = () => {
  const cervicalBenefits = [
    'Preserves natural neck motion instead of fusing bones together',
    'Faster recovery compared to spinal fusion',
    'Reduces stress on adjacent spinal levels, lowering the risk of future issues',
    'Long-term relief from nerve compression and associated pain'
  ];

  const lumbarBenefits = [
    'Maintains flexibility and range of motion in the lower back',
    'Quicker recovery and reduced rehabilitation time',
    'Lower risk of adjacent segment disease compared to fusion',
    'Effective relief from back pain and nerve-related symptoms'
  ];

  const candidateCriteria = [
    'Have chronic neck or lower back pain that has not improved with non-surgical treatments',
    'Suffer from a herniated or degenerated disc causing nerve compression',
    'Do not have severe arthritis, spinal instability, or multiple affected levels'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <Helmet>
        <title>Cervical and Lumbar Disc Replacement - New York Center for Spinal Disorders</title>
        <meta name="description" content="Learn about advanced disc replacement surgery as an alternative to spinal fusion. Dr. Neel Shah specializes in cervical and lumbar disc replacement procedures for chronic spine pain." />
        <meta name="keywords" content="disc replacement, cervical disc replacement, lumbar disc replacement, artificial disc, spinal surgery, spine specialist, total disc replacement, Dr. Neel Shah, New York" />
        <meta name="author" content="Dr. Neel P. Shah" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Cervical and Lumbar Disc Replacement - New York Center for Spinal Disorders" />
        <meta property="og:description" content="Discover how advanced disc replacement surgery can relieve pain while preserving natural spine motion. Expert care by Dr. Neel Shah at the New York Center for Spinal Disorders." />
        <meta property="og:image" content="/images/logo-header.png" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cervical and Lumbar Disc Replacement - New York Center for Spinal Disorders" />
        <meta name="twitter:description" content="Discover how advanced disc replacement surgery can relieve pain while preserving natural spine motion. Expert care by Dr. Neel Shah." />
        <meta name="twitter:image" content="/images/logo-header.png" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#0062B1" />
      </Helmet>

      <Header />
      
      <div className="relative h-[40vh] md:h-[50vh] bg-gradient-to-r from-[#003666] to-[#0062B1]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#003666]/90 to-[#0062B1]/90" />
          <img
            src="/images/spinebackground.png"
            alt="Spine anatomy background"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="relative h-full max-w-6xl mx-auto px-4 flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Cervical and Lumbar Disc Replacement</h1>
            <p className="text-xl md:text-2xl text-sky-100">
              A better alternative to spinal fusion surgery
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        
        <div className="mb-16">
          <div className="grid md:grid-cols-5 gap-8 items-start">
            <div className="md:col-span-3 space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-[#003666]">What is Disc Replacement Surgery?</h2>
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Disc replacement surgery is an advanced procedure designed to relieve pain and restore mobility in patients suffering from degenerative disc disease, herniated discs, or other spinal conditions. Unlike traditional spinal fusion, which limits movement, disc replacement involves removing the damaged disc and replacing it with an artificial one, allowing for preserved motion and a more natural spine function.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Disc replacement surgery, also known as total disc replacement (TDR) or artificial disc replacement (ADR), also will decrease the stress on the levels above and below to lessen the degeneration of those levels.
                </p>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="bg-gradient-to-br from-sky-50 to-[#0062B1]/10 p-6 rounded-2xl">
                <div className="mb-4 flex justify-center">
                  <Disc className="w-16 h-16 text-[#0062B1]" />
                </div>
                <h3 className="text-xl font-bold text-[#003666] mb-3 text-center">Key Advantages</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">Preserves natural motion</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">Faster recovery time</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">Reduces adjacent segment degeneration</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">More natural spine function</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          
          <div className="bg-white p-8 rounded-2xl shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#0062B1]/10 rounded-full -mr-16 -mt-16" />
            
            <h2 className="text-2xl md:text-3xl font-bold text-[#003666] mb-6 relative z-10">Cervical Disc Replacement</h2>
            
            <div className="relative z-10">
              <p className="text-lg text-gray-700 mb-6">
                Cervical disc replacement focuses on the discs in the neck (cervical spine). This procedure is recommended for patients experiencing chronic neck pain, arm pain, numbness, or weakness due to a damaged disc pressing on spinal nerves.
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-[#003666] mb-4">Benefits</h3>
                <ul className="space-y-3">
                  {cervicalBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <ArrowRight className="w-5 h-5 text-[#0062B1] flex-shrink-0 mt-1" />
                      <p className="text-gray-700">{benefit}</p>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-[#003666] mb-4">Procedure</h3>
                <p className="text-lg text-gray-700">
                  Through a small incision in the front of the neck, the surgeon removes the damaged disc, relieves pressure on the spinal cord and nerves, and inserts an artificial disc. Most patients go home the same day.
                </p>
              </div>

              <div className="mt-8 flex justify-center">
                <img 
                  src="/images/CervicalSpine.png" 
                  alt="Cervical Disc Replacement" 
                  className="rounded-lg shadow-md max-w-full h-auto"
                />
              </div>
            </div>
          </div>

          
          <div className="bg-white p-8 rounded-2xl shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#0062B1]/10 rounded-full -mr-16 -mt-16" />
            
            <h2 className="text-2xl md:text-3xl font-bold text-[#003666] mb-6 relative z-10">Lumbar Disc Replacement</h2>
            
            <div className="relative z-10">
              <p className="text-lg text-gray-700 mb-6">
                Lumbar disc replacement is performed on the lower back (lumbar spine) and is an alternative to spinal fusion for patients with chronic lower back pain due to a damaged disc. This procedure is ideal for individuals with minimal spinal instability and no significant deformity.
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-[#003666] mb-4">Benefits</h3>
                <ul className="space-y-3">
                  {lumbarBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <ArrowRight className="w-5 h-5 text-[#0062B1] flex-shrink-0 mt-1" />
                      <p className="text-gray-700">{benefit}</p>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-[#003666] mb-4">Procedure</h3>
                <p className="text-lg text-gray-700">
                  This surgery is typically performed through an incision in the abdomen. The surgeon removes the damaged disc and replaces it with an artificial one designed to function like a natural disc. Recovery includes temporary activity restrictions and physical therapy to rebuild strength.
                </p>
              </div>

              <div className="mt-8 flex justify-center">
                <img 
                  src="/images/LumbarSpine.png" 
                  alt="Lumbar Disc Replacement" 
                  className="rounded-lg shadow-md max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        
        <div className="mb-16">
          <div className="bg-gradient-to-br from-[#003666] to-[#0062B1] p-8 rounded-2xl text-white">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <div className="rounded-full overflow-hidden border-4 border-white/20 mx-auto max-w-xs">
                  <img 
                    src="/images/DrShahPicture1.jpg" 
                    alt="Dr. Neel Shah" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="md:col-span-2 space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold">Dr. Neel Shah: An Expert in Total Disc Replacement</h2>
                <p className="text-lg text-sky-100">
                  Dr. Neel Shah is a leading spine surgeon with specialized expertise in total disc replacement. With extensive training and experience in both cervical and lumbar disc replacement procedures, Dr. Shah is committed to using the most advanced techniques to help patients achieve long-term relief while preserving natural motion. His dedication to innovation and patient care ensures that each individual receives a customized treatment plan tailored to their specific condition and lifestyle.
                </p>
                <Link to="/meet-dr-shah" className="inline-flex items-center bg-white text-[#003666] px-6 py-3 rounded-lg font-semibold hover:bg-sky-50 transition-all duration-300">
                  Learn More About Dr. Shah
                  <ChevronRight className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        
        <div className="grid md:grid-cols-2 gap-8 items-start mb-16">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#003666] mb-6">Is Disc Replacement Right for You?</h2>
            <p className="text-lg text-gray-700 mb-6">
              Candidates for cervical or lumbar disc replacement typically:
            </p>
            <ul className="space-y-4">
              {candidateCriteria.map((criteria, index) => (
                <li key={index} className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-sm">
                  <div className="bg-[#0062B1] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 pt-1">{criteria}</p>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link to="/contact" className="inline-flex items-center bg-[#0062B1] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#003666] transition-all duration-300">
                Schedule a Consultation
                <Calendar className="ml-2" />
              </Link>
            </div>
          </div>
          <div className="bg-gradient-to-br from-sky-50 to-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-[#003666] mb-6">Why Choose Dr. Neel Shah for Disc Replacement?</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Microscope className="w-8 h-8 text-[#0062B1] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-[#003666] mb-2">Cutting-Edge Expertise</h3>
                  <p className="text-gray-700">
                    Advanced training in total disc replacement ensures optimal outcomes and faster recovery times.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Brain className="w-8 h-8 text-[#0062B1] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-[#003666] mb-2">Innovative Approach</h3>
                  <p className="text-gray-700">
                    Specializes in motion-preserving solutions for patients with disc-related spinal conditions.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <HeartPulse className="w-8 h-8 text-[#0062B1] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-[#003666] mb-2">Personalized Care</h3>
                  <p className="text-gray-700">
                    Each treatment plan is tailored to the specific condition and lifestyle needs of the patient.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Activity className="w-8 h-8 text-[#0062B1] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-[#003666] mb-2">Improved Quality of Life</h3>
                  <p className="text-gray-700">
                    Dedicated to helping patients return to their desired activities with less pain and greater mobility.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        
        <div className="bg-gradient-to-br from-sky-50 to-[#0062B1]/10 p-8 rounded-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#003666] mb-4">Take the First Step Toward Relief</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            If you're suffering from chronic neck or back pain, contact us today to schedule a consultation with Dr. Neel Shah and explore your treatment options!
          </p>
          <Link to="/contact" className="inline-flex items-center bg-[#0062B1] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#003666] transition-all duration-300 text-lg">
            Schedule Your Consultation
            <ChevronRight className="ml-2" />
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DiscReplacementShah;