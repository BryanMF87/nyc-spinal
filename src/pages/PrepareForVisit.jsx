import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import {
  FileText,
  ScrollText,
  Pill,
  CreditCard,
  ClipboardList,
  ChevronRight,
  Calendar
} from 'lucide-react';

import { Helmet } from 'react-helmet';


const BeforeYourVisit = () => {
  const requiredItems = [
    {
      icon: FileText,
      title: "X-rays (Films or Disc) and X-ray reports",
      description: "Recent imaging helps us better understand your condition"
    },
    {
      icon: ScrollText,
      title: "Written reports",
      description: "By your doctor or another specialist"
    },
    {
      icon: Pill,
      title: "List of medications",
      description: "Include all current medications and supplements"
    },
    {
      icon: CreditCard,
      title: "Insurance card/information",
      description: "Ensure your coverage information is up to date"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <Helmet>
        <title>Before Your Visit - New York Center for Spinal Disorders</title>
        <meta name="description" content="Get ready for your visit with Dr. Nathaniel Tindel. Learn what to bring, tips for a successful appointment, and how to prepare for your spine care consultation." />
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
      </Helmet>
      <Header />

      <div className="relative h-[40vh] bg-gradient-to-r from-[#003666] to-[#0062B1]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#003666]/90 to-[#0062B1]/90" />
          <img
            src="/images/facility.png"
            alt="Medical office background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative h-full max-w-6xl mx-auto px-4 flex items-center">
          <div>
            <h1 className="text-5xl font-bold text-white mb-4">Prepare for Your Visit</h1>
            <p className="text-2xl text-sky-100">Everything you need for a successful first appointment</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-[#003666] mb-8">Medical Records</h2>
              <p className="text-lg text-gray-700 mb-8">
                For your first appointment, please bring any or all of the following:
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {requiredItems.map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                    <div className="flex items-start space-x-4">
                      <div className="bg-sky-100 p-3 rounded-lg">
                        <item.icon className="w-6 h-6 text-[#0062B1]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[#003666] mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-sky-50 to-[#0062B1]/10 p-8 rounded-2xl">
              <div className="flex items-start space-x-4">
                <div className="bg-white p-3 rounded-lg">
                  <ClipboardList className="w-6 h-6 text-[#0062B1]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#003666] mb-4">Important Note</h3>
                  <p className="text-gray-700">
                    If you haven't had any tests done yet, our team will order what you need based on what he finds in his initial exam. It's easy to forget important questions when you're taking in a lot of information, so our suggestion is to write down the questions you want to ask prior to your appointment.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-[#003666] to-[#0062B1] p-6 rounded-xl text-white">
              <div className="flex items-center space-x-3 mb-4">
                <Calendar className="w-6 h-6" />
                <h3 className="text-xl font-bold">Ready to Schedule?</h3>
              </div>
              <p className="text-sky-100 mb-6">
                Contact us to schedule your consultation with us.
              </p>
              <Link
                to="/contact"
                className="block w-full text-center bg-white text-[#003666] py-3 rounded-lg hover:bg-sky-50 transition duration-300 font-semibold"
              >
                Schedule Appointment
              </Link>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-[#003666] mb-4">Visit Tips</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#0062B1] rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-700">Arrive 15 minutes early to complete any necessary paperwork</p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#0062B1] rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-700">Wear comfortable clothing that allows easy examination</p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#0062B1] rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-700">Prepare a list of questions you'd like to discuss</p>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-sky-50 to-[#0062B1]/10 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-[#003666] mb-4">Office Locations</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-700 font-semibold">Upper East Side</p>
                  <p className="text-gray-600 text-sm">425 East 79th Street, Suite 1H</p>
                </div>
                <div>
                  <p className="text-gray-700 font-semibold">Flatiron District</p>
                  <p className="text-gray-600 text-sm">19 West 21st Street, Suite 801</p>
                </div>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center text-[#0062B1] font-semibold hover:text-[#003666] mt-4"
              >
                Get directions
                <ChevronRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BeforeYourVisit;