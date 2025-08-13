import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Clock,
  Users,
  HeartPulse,
  ClipboardCheck,
  Activity,
  Building2,
  Award,
  GraduationCap,
  Stethoscope
} from 'lucide-react';

const AboutOurPractice = () => {
  const conditions = [
    'Herniated Discs',
    'Scoliosis',
    'Spinal Stenosis',
    'Sciatica',
    'Back and Neck Pain',
    'Degenerative Disc Diseases',
    'Spondylolisthesis',
    'Revision Spinal Surgery'
  ];

  const practiceHighlights = [
    {
      icon: Building2,
      title: 'State-of-the-Art Facility',
      description: 'Modern medical equipment and comfortable treatment spaces'
    },
    {
      icon: Users,
      title: 'Patient-First Approach',
      description: 'Individualized treatment plans tailored to your needs'
    },
    {
      icon: HeartPulse,
      title: 'Conservative Care',
      description: 'Focus on non-surgical solutions when possible'
    },
    {
      icon: ClipboardCheck,
      title: 'Comprehensive Care',
      description: 'From diagnosis through recovery and beyond'
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: "30+ Years of Excellence",
      description: "Decades of successful patient outcomes and innovative spine care in New York"
    },
    {
      icon: GraduationCap,
      title: "Research & Education",
      description: "Leading clinical research and training the next generation of spine specialists"
    },
    {
      icon: Stethoscope,
      title: "Innovative Treatments",
      description: "Pioneering minimally invasive techniques and advanced surgical procedures"
    }
  ];


  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <Helmet>
        <title>About Our Practice - New York Center for Spinal Disorders</title>
        <meta name="description" content="Learn about the New York Center for Spinal Disorders, where innovation meets compassionate care. Founded by Dr. Nathaniel Tindel, our practice offers personalized spine treatment in Manhattan." />
        <meta name="keywords" content="spinal disorders, scoliosis treatment, herniated discs, back pain, spine conditions, New York, Dr. Tindel, Dr. Shah, orthopedic surgeon, spine care, scoliosis in teens" />
        <meta name="author" content="Dr. Nathaniel Tindel, Dr. Neel P. Shah" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="New York Center for Spinal Disorders - About Us" />
        <meta property="og:description" content="Learn about our state-of-the-art facility, expert spine surgeons, and patient-first approach at the New York Center for Spinal Disorders. Discover our commitment to innovative, compassionate spine care." />
        <meta property="og:image" content="/images/logo-header.png" />
        <meta property="og:url" content="https://www.nycspinaldisorders.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="New York Center for Spinal Disorders - About Us" />
        <meta name="twitter:description" content="Get to know the New York Center for Spinal Disorders—where expertise meets compassionate care. Learn about our facility, treatments, and dedicated spine specialists." />
        <meta name="twitter:image" content="/images/logo-header.png" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#4a90e2" />
        <meta name="mobile-web-app-capable" content="yes" />
      </Helmet>
      <Header />

      <div className="relative h-[40vh] md:h-[50vh] bg-gradient-to-r from-[#003666] to-[#0062B1]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#003666]/90 to-[#0062B1]/90" />
          <img
            src="images/city.png"
            alt="Facility - New York Center For Spinal Disorders"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative h-full max-w-6xl mx-auto px-4 flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">About Our Practice</h1>
            <p className="text-xl md:text-2xl text-sky-100">
              Where innovation meets compassionate care in the heart of Manhattan
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#003666] mb-6 text-center">Our Locations</h2>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-gradient-to-br from-sky-50 to-[#0062B1]/10 p-6 md:p-8 rounded-2xl">
              <div className="flex items-center space-x-3 mb-4">
                <MapPin className="w-6 h-6 text-[#0062B1]" />
                <h3 className="text-lg md:text-xl font-semibold text-[#003666]">Upper East Side</h3>
              </div>
              <p className="text-sm md:text-base text-gray-700 mb-3">
                Located in the heart of Manhattan's Upper East Side, our practice offers easy access to world-class spine care.
              </p>

              
              <a
                href="https://www.google.com/maps?q=425+East+79th+Street,+Suite+1H,+New+York,+NY+10075"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm md:text-base text-[#0062B1] hover:text-[#003666] transition-colors mb-4"
              >
                425 East 79th Street, Suite 1H<br />
                New York, NY 10075
              </a>

              
              <div className="w-full h-36 md:h-48 mb-5 rounded-lg overflow-hidden border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9729445524093!2d-73.95256462334408!3d40.77294617138189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258c72ada730d%3A0x40c479798b6aa318!2s425%20E%2079th%20St%20%231h%2C%20New%20York%2C%20NY%2010075!5e0!3m2!1sen!2sus!4v1711061480468!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location Map"
                ></iframe>
              </div>

              <div className="flex items-center space-x-3">
                <Clock className="w-6 h-6 text-[#0062B1]" />
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-[#003666]">Office Hours</h3>
                  <p className="text-sm md:text-base text-gray-700">Monday - Friday: 9:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>

<div className="bg-gradient-to-br from-sky-50 to-[#0062B1]/10 p-6 md:p-8 rounded-2xl">
              <div className="flex items-center space-x-3 mb-4">
                <MapPin className="w-6 h-6 text-[#0062B1]" />
                <h3 className="text-lg md:text-xl font-semibold text-[#003666]">Flatiron District</h3>
              </div>
              <p className="text-sm md:text-base text-gray-700 mb-3">
                Our new location in the vibrant Flatiron District provides convenient access to spine care in the heart of Manhattan.
              </p>

              
              <a
                href="https://www.google.com/maps?q=19+West+21st+Street,+Suite+801,+New+York,+NY+10010"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm md:text-base text-[#0062B1] hover:text-[#003666] transition-colors mb-4"
              >
                19 West 21st Street, Suite 801<br />
                New York, NY 10010
              </a>

              
              <div className="w-full h-36 md:h-48 mb-5 rounded-lg overflow-hidden border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.0521234567!2d-73.99234567890!3d40.74123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a31234567%3A0x1234567890abcdef!2s19%20W%2021st%20St%20Suite%20801%2C%20New%20York%2C%20NY%2010010!5e0!3m2!1sen!2sus!4v1711061480468!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Flatiron Office Location Map"
                ></iframe>
              </div>

              <div className="flex items-center space-x-3">
                <Clock className="w-6 h-6 text-[#0062B1]" />
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-[#003666]">Office Hours</h3>
                  <p className="text-sm md:text-base text-gray-700">Monday - Friday: 9:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 relative h-48 md:h-64 rounded-2xl overflow-hidden">
            <img
              src="/images/facility.png"
              alt="Our facility"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 md:py-16">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          <div className="md:col-span-2 space-y-8 md:space-y-12">
            <div className="prose max-w-none">
              <h2 className="text-2xl md:text-3xl font-bold text-[#003666] mb-4 md:mb-6">Who We Are</h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                The New York Center for Spinal Disorders, founded by Dr. Nathaniel Tindel, stands at the forefront of spine care. Our practice combines cutting-edge medical expertise with a deeply personal approach to patient care. We believe in creating lasting relationships with our patients, understanding their unique needs, and developing customized treatment plans that align with their lifestyle and goals.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mt-4">
                In 2024, the practice took an exciting step forward with the addition of <Link to="/meet-dr-shah" className="text-[#0062B1] hover:text-[#003666]">Dr. Neel P. Shah</Link>, a highly accomplished orthopedic spine surgeon specializing in minimally invasive and microscopic surgical techniques. This collaboration reinforces our commitment to delivering world-class spine care while embracing the most advanced, patient-focused treatments available. Together, Dr. Tindel and Dr. Shah lead the practice into a new era of innovation, excellence, and personalized care.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#003666] mb-4 md:mb-6">Our Approach to Care</h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                Recognizing that the decision to have back surgery is one of the most difficult anyone can face, Dr. Tindel brings a comprehensive and compassionate approach to working with his patients. His philosophy prioritizes exploring non-surgical options first and foremost, ensuring patients feel confident and informed at every step.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 md:mb-8">
                Dr. Shah complements this philosophy by incorporating the latest minimally invasive, microsurgical, and traditional open techniques. He is dedicated to relieving pain, restoring function, and helping patients return to their best quality of life. Together, they ensure that each patient's care plan is tailored, evidence-based, and aligned with their unique goals.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {practiceHighlights.map((highlight, index) => (
                  <div key={index} className="bg-white p-4 md:p-6 rounded-xl shadow-lg">
                    <highlight.icon className="w-6 md:w-8 h-6 md:h-8 text-[#0062B1] mb-3 md:mb-4" />
                    <h3 className="text-lg md:text-xl font-semibold text-[#003666] mb-2">{highlight.title}</h3>
                    <p className="text-sm md:text-base text-gray-600">{highlight.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#003666] to-[#0062B1] p-6 md:p-8 rounded-2xl text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Conditions/Procedures</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {conditions.map((condition, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Activity className="w-4 md:w-5 h-4 md:h-5 text-sky-300 flex-shrink-0" />
                    <span className="text-sm md:text-base">{condition}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6 md:space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-[#003666] mb-6">Practice Achievements</h3>
              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <achievement.icon className="w-6 h-6 text-[#0062B1] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-[#003666] mb-1">{achievement.title}</h4>
                      <p className="text-sm text-gray-600">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-sky-50 to-[#0062B1]/10 p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-[#003666] mb-4">Patient Resources</h3>
              <div className="space-y-4">
                <Link
                  to="/our-doctors"
                  className="block p-4 bg-white rounded-lg hover:bg-sky-50 transition duration-300"
                >
                  <h4 className="font-semibold text-[#003666] mb-1">Our Doctors</h4>
                  <p className="text-sm text-gray-600">Meet our experienced team of specialists dedicated to your care</p>
                </Link>
                <Link
                  to="/insurance-and-forms"
                  className="block p-4 bg-white rounded-lg hover:bg-sky-50 transition duration-300"
                >
                  <h4 className="font-semibold text-[#003666] mb-1">Insurance Information</h4>
                  <p className="text-sm text-gray-600">Learn about accepted insurance plans and coverage</p>
                </Link>
                <Link
                  to="/before-your-visit"
                  className="block p-4 bg-white rounded-lg hover:bg-sky-50 transition duration-300"
                >
                  <h4 className="font-semibold text-[#003666] mb-1">FAQs</h4>
                  <p className="text-sm text-gray-600">Find answers to common questions.</p>
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-br from-sky-50 to-[#0062B1]/10 p-4 md:p-6 rounded-2xl">
              <h3 className="text-lg md:text-xl font-bold text-[#003666] mb-3 md:mb-4">Schedule a Consultation</h3>
              <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6">
                Take the first step towards a pain-free life. Contact us to schedule your consultation with our doctors.
              </p>
              <Link
                to="/contact"
                className="block w-full text-center bg-[#0062B1] text-white py-2 md:py-3 rounded-lg hover:bg-[#003666] transition duration-300 text-sm md:text-base"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutOurPractice;