import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';
import { Shield, User, Phone, Mail } from 'lucide-react';

const AccessibilityStatement = () => {
  const sections = [
    {
      icon: Shield,
      title: "Accessibility Statement",
      content: `General
The New York Center for Spinal Disorders (NYCSD) strives to ensure that its services are accessible to people with disabilities. NYCSD has invested a significant amount of resources to help ensure that its website is made easier to use and more accessible for people with disabilities, with the strong belief that every person has the right to live with dignity, equality, comfort and independence.`
    },
    {
      icon: User,
      title: "Accessibility on nycspinaldisorders.com",
      content: `nycspinaldisorders.com makes available the UserWay Website Accessibility Widget that is powered by a dedicated accessibility server. The software allows nycspinaldisorders.com to improve its compliance with the Web Content Accessibility Guidelines (WCAG 2.1).`
    },
    {
      icon: User,
      title: "Enabling the accessibility menu",
      content: `The nycspinaldisorders.com accessibility menu can be enabled by clicking the accessibility menu icon that appears on the corner of the page. After triggering the accessibility menu, please wait a moment for the accessibility menu to load in its entirety.`
    },
    {
      icon: User,
      title: "Disclaimer",
      content: `NYCSD continues its efforts to constantly improve the accessibility of its site and services in the belief that it is our collective moral obligation to allow seamless, accessible and unhindered use also for those of us with disabilities.

Despite our efforts to make all pages and content on nycspinaldisorders.com fully accessible, some content may not have yet been fully adapted to the strictest accessibility standards. This may be a result of not having found or identified the most appropriate technological solution.`
    },
    {
      icon: User,
      title: "Here for you",
      content: `If you are experiencing difficulty with any content on nycspinaldisorders.com or require assistance with any part of our site, please contact us during normal business hours as detailed below and we will be happy to assist.`
    },
    {
      icon: User,
      title: "Contact us",
      content: `If you wish to report an accessibility issue, have any questions or need assistance, please contact NYCSD Customer Support as follows:

New York Center for Spinal Disorders
425 East 79th Street, Suite 1H
New York, NY 10075
Email: compliance@spine-nyc.com
Phone: (212) 249-3840`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Helmet>
        <title>Accessibility Statement - New York Center for Spinal Disorders</title>
        <meta
          name="description"
          content="Read our Accessibility Statement to learn how we strive to ensure our site is accessible to people with disabilities."
        />
        <meta
          name="keywords"
          content="Accessibility Statement, WCAG 2.1, UserWay, New York Center for Spinal Disorders"
        />
        <meta name="author" content="Dr. Nathaniel Tindel" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="New York Center for Spinal Disorders - Accessibility Statement" />
        <meta
          property="og:description"
          content="Learn how the New York Center for Spinal Disorders makes its site more accessible for people with disabilities."
        />
        <meta property="og:image" content="/images/logo-header.png" />
        <meta property="og:url" content="https://www.nycspinaldisorders.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="New York Center for Spinal Disorders - Accessibility Statement" />
        <meta
          name="twitter:description"
          content="Find out how we ensure our website is accessible and user-friendly for all visitors."
        />
        <meta name="twitter:image" content="/images/logo-header.png" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#4a90e2" />
        <meta name="mobile-web-app-capable" content="yes" />
      </Helmet>

      <Header />

      <div className="relative h-[30vh] bg-gradient-to-r from-[#003666] to-[#0062B1]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-[#003666] to-[#0062B1]" />
        </div>
        <div className="relative h-full max-w-6xl mx-auto px-4 flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Accessibility Statement
            </h1>
            <p className="text-xl text-blue-100">
              Ensuring our website is accessible to everyone
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-12">
          {sections.map((section, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <div className="flex items-center gap-4 mb-4">
                <section.icon className="w-8 h-8 text-blue-600" />
                <h2 className="text-2xl font-bold text-blue-900">{section.title}</h2>
              </div>
              <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AccessibilityStatement;
