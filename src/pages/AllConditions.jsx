import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';

const AllConditions = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Define conditions
  const conditionsItems = [
    { title: "Spinal Cord Compression", description: "Pressure on the spinal cord that can cause pain or neurological symptoms.", url: "/spinal-cord-compression" },
    { title: "Spinal Infections", description: "Infections involving the spine, which may lead to pain, fever, and other systemic symptoms.", url: "/spinal-infections" },
    { title: "Spinal Deformities", description: "Abnormal curvature or alignment of the spine.", url: "/spinal-deformities" },
    { title: "Failed Back Surgery Syndrome", description: "Persistent or recurring pain after spinal surgery.", url: "/failed-back-surgery-syndrome" },
    { title: "Spinal Instability", description: "Excessive movement of spinal segments causing pain or nerve compression.", url: "/spinal-instability" },
    { title: "Cauda Equina Syndrome", description: "Severe compression of the nerves in the lower spinal canal, requiring urgent treatment.", url: "/cauda-equina-syndrome" },
    { title: "Degenerative Disc Disease", description: "Age-related changes to spinal discs causing pain and reduced mobility.", url: "/degenerative-disc-disease" },
    { title: "Ankylosing Spondylitis", description: "Inflammatory disease that can cause vertebrae to fuse, reducing flexibility.", url: "/ankylosing-spondylitis" },
    { title: "Spinal Arthritis", description: "Inflammation of the joints in the spine leading to pain and stiffness.", url: "/spinal-arthritis" },
    { title: "Spinal Strains & Sprains", description: "Injuries to muscles or ligaments in the back.", url: "/spinal-strains-sprains" },
    { title: "Vertebral Subluxation", description: "Partial dislocation of a vertebra that may affect spinal structure or function.", url: "/vertebral-subluxation" },
    { title: "Sacroiliac Joint Dysfunction", description: "Pain and inflammation in the joint between the sacrum and ilium.", url: "/sacroiliac-joint-dysfunction" },
    { title: "Sacral Tumors", description: "Abnormal growths in the sacral region of the spine.", url: "/sacral-tumors" },
    { title: "Tarlov Cysts", description: "Fluid-filled sacs that most commonly develop at the base of the spine.", url: "/tarlov-cysts" },
    { title: "Coccydynia", description: "Pain in or around the tailbone area.", url: "/coccydynia" },
    { title: "Post-Laminectomy Syndrome", description: "Chronic pain after a laminectomy procedure.", url: "/post-laminectomy-syndrome" },
    { title: "Lumbar Radiculopathy (Sciatica)", description: "Irritation of the lumbar spinal nerves causing leg pain and numbness.", url: "/lumbar-radiculopathy-sciatica" },
    { title: "Lumbar Spondylolisthesis", description: "Forward slipping of one vertebra over another in the lumbar region.", url: "/lumbar-spondylolisthesis" },
    { title: "Lumbar Facet Joint Syndrome", description: "Arthritic changes or irritation in the facet joints of the lumbar spine.", url: "/lumbar-facet-joint-syndrome" },
    { title: "Lumbar Kyphosis", description: "Excessive outward curvature of the lower spine.", url: "/lumbar-kyphosis" },
    { title: "Lumbosacral Radiculopathy", description: "Nerve pain in the lower spine region, often radiating into the legs.", url: "/lumbosacral-radiculopathy" },
    { title: "Scheuermann Disease", description: "Juvenile kyphosis causing rounded posture in the thoracic or upper lumbar spine.", url: "/scheuermann-disease" },
    { title: "Thoracic Myelopathy", description: "Spinal cord compression in the thoracic region.", url: "/thoracic-myelopathy" },
    { title: "Thoracic Facet Syndrome", description: "Pain arising from the facet joints in the mid-back region.", url: "/thoracic-facet-syndrome" },
    { title: "Cervical Radiculopathy", description: "Compressed nerve root in the neck, causing arm pain or numbness.", url: "/cervical-radiculopathy" },
    { title: "Cervical Myelopathy", description: "Spinal cord compression in the cervical region.", url: "/cervical-myelopathy" },
    { title: "Cervical Fracture", description: "A break in one of the cervical vertebrae.", url: "/cervical-fracture" },
    { title: "Cervical Deformity", description: "Abnormal curvature or alignment of the neck region of the spine.", url: "/cervical-deformity" },
    { title: "Cervicalgia (Neck Pain)", description: "General neck pain or discomfort.", url: "/cervicalgia-neck-pain" },
    { title: "Cervical Facet Syndrome", description: "Pain originating from the facet joints in the neck.", url: "/cervical-facet-syndrome" },
    { title: "Cervical Discitis", description: "Infection or inflammation of the cervical intervertebral disc.", url: "/cervical-discitis" },
    { title: "Whiplash Injury", description: "Neck injury often from sudden extension and flexion, as in vehicle collisions.", url: "/whiplash-injury" },
    { title: "Back and Neck Pain", description: "Comprehensive treatment for acute and chronic pain affecting the spine.", url: "/back-and-neck-pain" },
    { title: "Spinal Stenosis", description: "Narrowing of the spinal canal leading to nerve compression and discomfort.", url: "/spinal-stenosis" },
    { title: "Herniated Disc", description: "Condition where a spinal disc protrudes, causing pain and nerve irritation.", url: "/herniated-discs" },
    { title: "Spondylolysis", description: "Stress fracture in a vertebra, often seen in athletes and active individuals.", url: "/spondylolysis" }
  ];

  // Sort items alphabetically by title
  const sortedItems = conditionsItems.sort((a, b) => a.title.localeCompare(b.title));

  // Filter items based on search term
  const filteredItems = sortedItems.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white overflow-x-hidden">
      <Helmet>
        <title>Spine Conditions - New York Center for Spinal Disorders</title>
        <meta name="description" content="Detailed information about spine conditions at NY Center for Spinal Disorders." />
        <meta name="keywords" content="spine, conditions, back pain, spinal disorders, NY Center" />
        <meta name="author" content="Dr. Nathaniel Tindel" />
        <meta property="og:title" content="Spine Conditions - NY Center for Spinal Disorders" />
        <meta property="og:description" content="Detailed information about spine conditions at NY Center for Spinal Disorders." />
        <meta property="og:image" content="/images/logo-header.png" />
        <meta property="og:url" content="https://www.nycspinaldisorders.com/conditions" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Spine Conditions - NY Center for Spinal Disorders" />
        <meta name="twitter:description" content="Detailed information about spine conditions at NY Center for Spinal Disorders." />
      </Helmet>

      <Header />

      <div className="relative h-[40vh] bg-gradient-to-r from-[#003666] to-[#0062B1]">
        <div className="absolute inset-0">
          <img src="../images/spinebackground.png" alt="Spine Conditions Background" className="w-full h-full object-cover opacity-50" />
        </div>
        <div className="relative h-full max-w-6xl mx-auto px-4 flex items-center">
          <div>
            <h1 className="text-5xl font-bold text-white mb-4">Conditions Library</h1>
            <p className="text-2xl text-blue-100">Comprehensive guide to spine disorders and treatments</p>
          </div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto mb-16">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search conditions..."
              className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-blue-100 focus:border-blue-500 focus:outline-none text-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-16">
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-blue-900 border-b-2 border-blue-100 pb-2">
              Conditions
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item, index) => (
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

export default AllConditions;
