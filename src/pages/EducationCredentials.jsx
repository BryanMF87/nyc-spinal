import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Award, BookOpen, Building2, Users } from 'lucide-react';

const EducationCredentials = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <title>Dr. Nathaniel Tindel's Education & Credentials - New York Center for Spinal Disorders</title>
      <meta name="description" content="Learn about Dr. Nathaniel Tindel's extensive education, board certifications, professional affiliations, and achievements as a leading spine surgeon in New York." />
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
      <meta name="theme-color" content="#4a90e2" />
      <meta name="mobile-web-app-capable" content="yes" />

      <Header />
      
      <div className="relative h-[40vh] bg-gradient-to-r from-[#003666] to-[#0062B1]">
        <div className="absolute inset-0">

        </div>
        <div className="relative h-full max-w-6xl mx-auto px-4 flex items-center">
          <div>
            <h1 className="text-5xl font-bold text-white mb-4">Education & Credentials</h1>
            <p className="text-2xl text-blue-100">Getting to know Dr. Tindel and his achievements</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-12">
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed">
                Board-certified as an orthopaedic surgeon, Dr. Tindel specializes in the spine and scoliosis. He graduated Phi Beta Kappa and with the Highest Honors in Biology from Princeton University in 1985 and from the University of Pennsylvania School of Medicine in 1989.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6 flex items-center">
                <BookOpen className="mr-3 text-blue-600" />
                Residency
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                After completing his internship and residency in orthopaedic surgery at Lenox Hill Hospital in New York City in 1994, Dr. Tindel continued his specialized training in spine surgery with a spine and scoliosis fellowship at the University of Miami/Jackson Memorial Hospital.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6 flex items-center">
                <Users className="mr-3 text-blue-600" />
                Professional Affiliations
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                In addition to his private practice, Dr. Tindel is currently an assistant professor of orthopaedic surgery at The Albert Einstein College of Medicine and Chief of Spinal Surgery at Jacobi Medical Center. He is a member of:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  American Academy of Orthopaedic Surgeons
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  American Spinal Injury Association
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Eastern Orthopaedic Association
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Cervical Spine Research Society
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  North American Spine Society
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6 flex items-center">
                <Award className="mr-3 text-blue-600" />
                Achievements
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Dr. Tindel is consistently ranked as one of the New York Metro Area Top Doctors. A contributing writer to various professional publications, he also wrote the book, <em>I've Got Your Back: The truth about spine surgery, straight from a surgeon (New American Library, 2007)</em>.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-2xl text-white p-8">
              <div className="text-center">
                <Award className="w-16 h-16 mx-auto mb-4 text-blue-300" />
                <h3 className="text-2xl font-bold mb-2">Ranked NYC Top Doctor</h3>
                <p className="text-blue-200 italic">
                  New York Castle Connolly
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Featured In</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { src: '../images/magazine1.jpg', label: 'New York' },
                  { src: '../images/magazine2.jpg', label: 'New York' },
                  { src: '../images/magazine3.jpg', label: 'Castle Connolly' },
                  { src: '../images/magazine4.jpg', label: 'Castle Connolly' },
                  { src: '../images/magazine5.jpg', label: 'Castle Connolly' },
                  { src: '../images/magazine6.jpg', label: 'Castle Connolly' },
                  { src: '../images/magazine7.jpg', label: 'Castle Connolly' },
                  { src: '../images/magazine8.jpg', label: 'Castle Connolly' },
                ].map((magazine, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="w-24 rounded-lg bg-gray-100 overflow-hidden">
                      <img
                        src={magazine.src}
                        alt={`Magazine feature ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-600">{magazine.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <Building2 className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-blue-900 mb-2">Current Position</h3>
              <p className="text-gray-600">
                Assistant Professor of Orthopaedic Surgery at The Albert Einstein College of Medicine
              </p>
              <p className="text-gray-600 mt-2">
                Chief of Spinal Surgery at Jacobi Medical Center
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EducationCredentials;