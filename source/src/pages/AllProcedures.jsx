import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';

const AllProcedures = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Define surgical procedures
  const surgicalProceduresItems = [
    {
      title: "Vertebroplasty",
      description: "A minimally invasive procedure that stabilizes spinal fractures with cement injection.",
      url: "/vertebroplasty"
    },
    {
      title: "Microdiscectomy",
      description: "A minimally invasive procedure that relieves nerve pressure caused by herniated disc material.",
      url: "/microdiscectomy"
    },
    {
      title: "Disc Replacement",
      description: "A surgical procedure that replaces a damaged spinal disc with an artificial one to maintain motion and relieve pain.",
      url: "/disc-replacement"
    },
    {
      title: "Revision Spinal Surgery",
      description: "A corrective procedure for patients who have had unsuccessful or problematic spine surgeries in the past.",
      url: "/revision-spinal-surgery"
    },
    {
      title: "Laminectomy",
      description: "Removes part of the vertebral lamina to relieve spinal nerve compression caused by stenosis or other conditions.",
      url: "/laminectomy"
    },
    {
      title: "Laminotomy",
      description: "Removes a small portion of the lamina to address localized nerve impingement and preserve stability.",
      url: "/laminotomy"
    },
    {
      title: "Foraminotomy",
      description: "Widens the nerve foramina to relieve radicular pain caused by bone spurs or disc herniation.",
      url: "/foraminotomy"
    },
    {
      title: "Anterior Cervical Discectomy and Fusion (ACDF)",
      description: "Removes a damaged cervical disc and fuses adjacent vertebrae to alleviate neck pain and nerve compression.",
      url: "/anterior-cervical-discectomy-and-fusion-acdf"
    },
    {
      title: "Posterior Lumbar Fusion (PLIF, TLIF)",
      description: "Fuses lumbar vertebrae from a posterior approach to stabilize the spine and reduce chronic back pain.",
      url: "/posterior-lumbar-fusion-plif-tlif"
    },
    {
      title: "Anterior Lumbar Interbody Fusion (ALIF)",
      description: "Accesses the spine anteriorly to remove a diseased disc and insert a fusion device, preserving back muscles.",
      url: "/anterior-lumbar-interbody-fusion-alif"
    },
    {
      title: "Extreme Lateral Interbody Fusion (XLIF)",
      description: "A lateral approach to lumbar fusion that reduces muscle disruption and shortens recovery time.",
      url: "/extreme-lateral-interbody-fusion-xlif"
    },
    {
      title: "Oblique Lumbar Interbody Fusion (OLIF)",
      description: "Uses an oblique incision for lumbar fusion, minimizing posterior muscle trauma and restoring alignment.",
      url: "/oblique-lumbar-interbody-fusion-olif"
    },
    {
      title: "Sacroiliac (SI) Joint Fusion",
      description: "Stabilizes the sacroiliac joint to relieve chronic low back pain from SI joint dysfunction.",
      url: "/sacroiliac-si-joint-fusion"
    },
    {
      title: "Spinal Cord Stimulator (Permanent Implantation)",
      description: "Implants a device that delivers electrical pulses to modulate pain signals for chronic pain relief.",
      url: "/spinal-cord-stimulator-permanent-implantation"
    },
    {
      title: "Corpectomy",
      description: "Removes a diseased vertebral body and replaces it with a graft or cage to decompress and stabilize the spine.",
      url: "/corpectomy"
    },
    {
      title: "Spinal Decompression for Stenosis",
      description: "Expands the spinal canal by removing bone or tissue to relieve pressure on nerves and improve function.",
      url: "/spinal-decompression-for-stenosis"
    },
    {
      title: "Minimally Invasive Spine Fusion (MIS Fusion)",
      description: "Fuses unstable spinal segments using small incisions, reducing recovery time and tissue damage.",
      url: "/minimally-invasive-spine-fusion-mis-fusion"
    }
  ];
  

  // Define non-surgical procedures
  const nonSurgicalProceduresItems = [
    { title: "Acupuncture", description: "An alternative therapy using fine needles to stimulate specific points and reduce pain.", url: "/acupuncture" },
    { title: "Chiropractic Care", description: "Manual adjustments and manipulations to address spinal misalignments.", url: "/chiropractic-care" },
    { title: "Corticosteroid Injections", description: "Injections to reduce inflammation and pain in spine-related conditions.", url: "/corticosteroid-injections" },
    { title: "Epidural Injections", description: "Injection of medications around the spinal nerves to reduce pain and inflammation.", url: "/epidural-injections" },
    { title: "Facet Joint Injections", description: "Injections to diagnose or treat pain originating from facet joints.", url: "/facet-joint-injections" },
    { title: "Nerve Blocks", description: "Injections that block pain signals from specific nerves.", url: "/nerve-blocks" },
    { title: "PRP Therapy", description: "Platelet-rich plasma injections to promote healing in damaged tissues.", url: "/prp-therapy" },
    { title: "Radiofrequency Ablation", description: "Using heat to reduce or stop nerve conduction for pain relief.", url: "/radiofrequency-ablation" },
    { title: "Stem Cell Therapy", description: "Using stem cells to promote tissue regeneration and healing.", url: "/stem-cell-therapy" },
    { title: "Trigger Point Injections", description: "Injections targeting muscle knots or trigger points that cause pain.", url: "/trigger-point-injections" },
    { title: "Weight Loss & Back Pain", description: "Lifestyle and medical strategies to reduce back pain through weight management.", url: "/weight-loss-back-pain" },
  ];

  // Sort items alphabetically by title
  const sortedSurgical = surgicalProceduresItems.sort((a, b) => a.title.localeCompare(b.title));
  const sortedNonSurgical = nonSurgicalProceduresItems.sort((a, b) => a.title.localeCompare(b.title));

  // Filter items based on search term
  const filteredSurgical = sortedSurgical.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredNonSurgical = sortedNonSurgical.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white overflow-x-hidden">
      <Helmet>
        <title>Spine Procedures - New York Center for Spinal Disorders</title>
        <meta name="description" content="Detailed information about surgical and non-surgical spine procedures at NY Center for Spinal Disorders." />
        <meta name="keywords" content="spine, procedures, surgical, non-surgical, treatments, NY Center" />
        <meta name="author" content="Dr. Nathaniel Tindel" />
        <meta property="og:title" content="Spine Procedures - NY Center for Spinal Disorders" />
        <meta property="og:description" content="Detailed information about surgical and non-surgical spine procedures at NY Center for Spinal Disorders." />
        <meta property="og:image" content="/images/logo-header.png" />
        <meta property="og:url" content="https://www.nycspinaldisorders.com/procedures" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Spine Procedures - NY Center for Spinal Disorders" />
        <meta name="twitter:description" content="Detailed information about surgical and non-surgical spine procedures at NY Center for Spinal Disorders." />
      </Helmet>

      <Header />

      <div className="relative h-[40vh] bg-gradient-to-r from-[#003666] to-[#0062B1]">
        <div className="absolute inset-0">
          <img src="../images/spinebackground.png" alt="Spine Conditions Background" className="w-full h-full object-cover opacity-50" />
        </div>
        <div className="relative h-full max-w-6xl mx-auto px-4 flex items-center">
          <div>
            <h1 className="text-5xl font-bold text-white mb-4">Procedures Library</h1>
            <p className="text-2xl text-blue-100">Overview of surgical and non-surgical treatments</p>
          </div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto mb-16">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search procedures..."
              className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-blue-100 focus:border-blue-500 focus:outline-none text-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-16">
          {filteredNonSurgical.length > 0 && (
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-blue-900 border-b-2 border-blue-100 pb-2">
                Non-Surgical Procedures
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredNonSurgical.map((item, index) => (
                  <Link key={index} to={item.url} className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="p-6 space-y-4">
                      <h3 className="text-xl font-semibold text-blue-900 group-hover:text-blue-600 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                      <div className="flex items-center text-blue-600 font-medium">
                        Learn more
                        <ChevronRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {filteredSurgical.length > 0 && (
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-blue-900 border-b-2 border-blue-100 pb-2">
                Surgical Procedures
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSurgical.map((item, index) => (
                  <Link key={index} to={item.url} className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="p-6 space-y-4">
                      <h3 className="text-xl font-semibold text-blue-900 group-hover:text-blue-600 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                      <div className="flex items-center text-blue-600 font-medium">
                        Learn more
                        <ChevronRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />

      <style jsx>{`
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 4s linear infinite;
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
};

export default AllProcedures;
