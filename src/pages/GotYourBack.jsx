import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  ChevronRight,
  FileText,
  Book,
  Heart,
  Search,
  Sparkles
} from 'lucide-react';

import { Helmet } from 'react-helmet';

const BookPage = () => {
  const chapters = [
    {
      icon: Book,
      title: "The Back Story",
      description: "The basics of spine and surgery"
    },
    {
      icon: Search,
      title: "The Usual Suspects",
      description: "Common back diagnoses"
    },
    {
      icon: Heart,
      title: "Dodging the Knife",
      description: "Alternatives to surgery"
    },
    {
      icon: Sparkles,
      title: "Going Under the Knife",
      description: "Surgical procedures"
    },
    {
      icon: FileText,
      title: "After the Surgery",
      description: "Care and complications"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Helmet>
        <title>I've Got Your Back - New York Center for Spinal Disorders</title>
        <meta name="description" content="Explore Dr. Nathaniel Tindel's book, 'I've Got Your Back,' providing insights on spine surgery, treatment alternatives, and expert guidance for back care." />
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
      
      <div className="relative h-[60vh] bg-gradient-to-r from-[#003666] to-[#0062B1]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#003666]/90 to-[#0062B1]/90" />
          <img
            src="/images/circles.jpg"
            alt="Book cover background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative h-full max-w-6xl mx-auto px-4 flex items-center">
          <div className="max-w-3xl">
            <div className="text-sky-100 text-xl mb-4">
              In 19 out of 20 cases, there IS an alternative to back surgery
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">
              I've Got Your Back:
              <span className="block text-2xl mt-2 text-sky-200">
                The truth about spine surgery, straight from a surgeon
              </span>
            </h1>
            <p className="text-xl text-sky-100">
              By Nathaniel L. Tindel, MD, with Tamar Haspel
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-12">
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <img
                    src="/images/publishedbook.jpg"
                    alt="I've Got Your Back book cover"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
                <div className="md:w-2/3">
                  <blockquote className="text-xl text-gray-700 italic mb-6">
                    "A patient who is well informed has the best chance of finding the most effective treatment. The goal of this book is to help you be that patient. Covering everything from common diagnoses to alternatives to surgery, it gives you all the info you'll need to find the right doctor, ask the right questions and make the right decisions about your back."
                  </blockquote>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="https://www.nycspinaldisorders.com/pdfs/iveGotYourBackIntro.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 bg-[#0062B1] text-white rounded-lg hover:bg-[#003666] transition duration-300"
                    >
                      Read an excerpt
                      <ChevronRight className="ml-2" />
                    </a>
                    <a
                      href="http://www.amazon.com/Ive-Got-Your-Back-Straight/dp/1463786670/ref=sr_1_8?s=books&ie=UTF8&qid=1325209616&sr=1-8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#0062B1] text-[#0062B1] rounded-lg hover:bg-sky-50 transition duration-300"
                    >
                      Buy on Amazon
                      <ChevronRight className="ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#003666] mb-8 flex items-center">
                <BookOpen className="w-8 h-8 mr-3" />
                Inside the Book
              </h2>
              <div className="grid gap-6">
                {chapters.map((chapter, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                    <div className="flex items-center space-x-4">
                      <div className="bg-sky-50 p-3 rounded-lg">
                        <chapter.icon className="w-6 h-6 text-[#0062B1]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-[#003666]">{chapter.title}</h3>
                        <p className="text-gray-600">{chapter.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-sky-50 to-[#0062B1]/10 p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-[#003666] mb-4">About the Author</h3>
              <img
                src="/images/DrNathaniel.jpeg"
                alt="Dr. Nathaniel Tindel"
                className="w-full rounded-lg mb-4"
              />
              <p className="text-gray-700 mb-4">
                Dr. Nathaniel Tindel is a board-certified orthopedic surgeon specializing in spine and scoliosis treatment. With over two decades of experience, he brings a thoughtful, personal approach to patient care.
              </p>
              <Link
                to="/meet-dr-tindel"
                className="inline-flex items-center text-[#0062B1] font-semibold hover:text-[#003666]"
              >
                Learn more about Dr. Tindel
                <ChevronRight className="ml-2" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-[#003666] mb-4">What Readers Say</h3>
              <div className="space-y-4">
                <blockquote className="text-gray-700 italic">
                  "An invaluable resource for anyone considering spine surgery. Dr. Tindel's approach is both comprehensive and compassionate."
                </blockquote>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#003666] to-[#0062B1] p-6 rounded-2xl text-white">
              <h3 className="text-xl font-bold mb-4">Have Questions?</h3>
              <p className="text-sky-100 mb-6">
                Schedule a consultation to discuss your specific case with us.
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

export default BookPage;