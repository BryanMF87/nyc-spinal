import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { BookOpen, Layout, Activity, ChevronRight } from 'lucide-react';
import { Helmet } from 'react-helmet';

const Spine101 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <Helmet>
        <title>Spine 101 - New York Center for Spinal Disorders</title>
        <meta name="description" content="Learn about the anatomy and function of the spine with Dr. Nathaniel Tindel. Discover how the spine works, common conditions, and its critical role in mobility and protection." />
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
      
      <div className="relative h-[40vh] bg-gradient-to-r from-[#003666] to-[#0062B1]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#003666]/90 to-[#0062B1]/90" />
          <img
            src="/images/spinebackground.png"
            alt="Spine anatomy background"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="relative h-full max-w-6xl mx-auto px-4 flex items-center">
          <div>
            <h1 className="text-5xl font-bold text-white mb-4">Spine 101</h1>
            <p className="text-2xl text-sky-100">Understanding the spine and how it works</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed">
                Spines are complicated. They support us, they give us mobility, and they house our spinal nerves. Sometimes these three functions are at odds. In order to keep us upright, a spine needs to be stable. It also has to be flexible in order for us to do everything from tying our shoes to lifting our luggage into the overhead compartment. Lastly, it has to be strong enough to protect the spinal cord, which runs through it and provides the conduit for sensation to reach the brain and for the brain's messages to reach our limbs. That's a lot to ask from one structure.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#003666] mb-6">The Architecture of the Spine</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The spine is made up of a long line of vertebrae, which are stacked up on top of each other and are labeled according to their position from top to bottom. The structure between each of the vertebrae is called the disc. The disc has many jobs and one of them is to act like the shock absorbers in your car and prevent your vertebrae from rattling against each other with every step you take. In the middle of the vertebrae is a tube, also called the spinal canal, where the spinal cord and a whole bundle of nerves that connects your brain to the rest of your body. On the outside of the vertebrae are muscles and ligaments that work together, forming a system that allows the spine to move.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With so many pieces of the puzzle to consider, it's no wonder that figuring out the specific source of a particular back problem may (and should) take time. While there are many different conditions that can affect the spine, the more common diagnoses include herniated discs, degenerative disc disease, spinal stenosis, scoliosis and spondylolisthesis.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-sky-50 to-[#0062B1]/10 p-8 rounded-2xl flex flex-col items-center justify-center">
                <img
                    src="/images/fullspine.jpg"
                    alt="Spine anatomy diagram"
                    className="w-64 rounded-xl shadow-lg"
                />
                <div className="mt-4 text-sm text-gray-600 text-center">
                    Detailed anatomy of the human spine
                </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-[#003666] mb-4">Quick Facts</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <Layout className="w-5 h-5 text-[#0062B1] flex-shrink-0 mt-1" />
                  <p className="text-gray-700">The spine contains 33 individual bones called vertebrae</p>
                </li>
                <li className="flex items-start space-x-3">
                  <Activity className="w-5 h-5 text-[#0062B1] flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Your spine naturally forms an S-shape when viewed from the side</p>
                </li>
                <li className="flex items-start space-x-3">
                  <BookOpen className="w-5 h-5 text-[#0062B1] flex-shrink-0 mt-1" />
                  <p className="text-gray-700">The discs between vertebrae act as natural shock absorbers</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-[#003666] to-[#0062B1]/90 p-8 rounded-xl text-white mt-8">
          <h2 className="text-2xl font-bold mb-4">Explore More Spine Topics</h2>
          <p className="text-sky-100 mb-6">
            Dive deeper into minimally invasive spine surgery, common conditions, and advanced procedures.
          </p>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <Link
              to="/minimally-invasive-spine-surgery"
              className="inline-flex items-center justify-center px-6 py-3 mb-4 md:mb-0 bg-white text-[#003666] rounded-lg hover:bg-sky-50 transition duration-300 font-semibold"
            >
              Minimally Invasive Spine Surgery
              <ChevronRight className="ml-2" />
            </Link>
            <Link
              to="/conditions-library"
              className="inline-flex items-center justify-center px-6 py-3 mb-4 md:mb-0 bg-white text-[#003666] rounded-lg hover:bg-sky-50 transition duration-300 font-semibold"
            >
              Conditions Library
              <ChevronRight className="ml-2" />
            </Link>
            <Link
              to="/procedures-library"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#003666] rounded-lg hover:bg-sky-50 transition duration-300 font-semibold"
            >
              Procedures Library
              <ChevronRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Spine101;