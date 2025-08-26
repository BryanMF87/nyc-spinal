import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FileText, Radio, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const MediaInterviews = () => {
    const videoInterviews = [
        {
          title: "Dr. Holly Phillips interviews Dr. Tindel",
          description: "Dr. Holly Phillips, medical reporter for WCBS-TV and a contributor for The Morning Show on CBS, talks with Dr. Tindel about the spine.",
          hasVideo: false,
          imageSrc: "../images/cbs-morning-show.jpg",
          transcriptSrc: "../files/phillips-transcript.pdf"
        },
        {
          title: "Ian Smith interviews Dr. Tindel",
          description: "Dr. Ian Smith, a medical correspondent for NBC's Today show and WNBC-TV in New York City, discusses disc replacement surgery with Dr Tindel.",
          hasVideo: false,
          imageSrc: "../images/Today-Show-Logo.jpg",
          transcriptSrc: "../files/smith-transcript.pdf"
        },
        {
          title: "Kafi Drexel interviews Dr. Tindel",
          description: "Kafi Drexel, the Health & Fitness Reporter for NY1 News speaks with Dr. Tindel about non-surgical treatment options.",
          hasVideo: true,
          videoSrc: "../files/interview4.mp4",
          transcriptSrc: "../files/drexel-transcript.pdf"
        }
      ];

  const radioInterviews = [
    {
      title: "The Right Balance with Greg Allen",
      audioSrc: "../files/The-Right-Balance.mp3",
      transcriptSrc: "../files/right-balance-transcript.pdf"
    },
    {
      title: "Health Radio's You—The Owner's Manual with Dr. Mike Roizen",
      audioSrc: "../files/You-The-Owners-Manual.mp3",
      transcriptSrc: "../files/health-radio.txt"
    },
    {
      title: "Business TalkRadio Network's The Michael Dresser Show with Mike Dresser",
      audioSrc: "../files/Mike-Dresser-Lifestyle-Talk-Radio-Network.mp3",
      transcriptSrc: "../files/dresser-transcript.pdf"
    },
    {
      title: "A Touch of Gray with Michael Harrison",
      audioSrc: "../files/Touch-of-Grey.mp3",
      transcriptSrc: "../files/touch-of-grey-transcript.pdf"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <title>Dr. Nathaniel Tindel's Media Interviews - New York Center for Spinal Disorders</title>
      <meta name="description" content="Explore Dr. Nathaniel Tindel's television and radio interviews, discussing spine health, scoliosis treatment, and innovative surgical techniques." />
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
          <img
            src="/images/circles.jpg"
            alt="Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative h-full max-w-6xl mx-auto px-4 flex items-center">
          <div>
            <h1 className="text-5xl font-bold text-white mb-4">Media Interviews</h1>
            <p className="text-2xl text-blue-100">Expert insights on spine health and treatment</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">Television</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {videoInterviews.map((interview, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                {interview.hasVideo ? (
                  <video
                    ref={(el) => {
                      if (el) {
                        el.currentTime = 0.1;
                      }
                    }}
                    controls
                    className="w-full aspect-video object-cover"
                    poster="/images/placeholder.jpg"
                    onLoadedMetadata={(e) => {
                      e.target.currentTime = 0.1;
                    }}
                  >
                    <source src={interview.videoSrc} type="video/mp4" />
                    Your browser does not support video playback.
                  </video>
                ) : (
                  <div className="relative aspect-video bg-gray-100">
                    <img
                      src={interview.imageSrc}
                      alt={interview.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{interview.title}</h3>
                  <p className="text-gray-600 mb-4">{interview.description}</p>
                  <div className="flex gap-4">
                    <a 
                      href={interview.transcriptSrc}
                      className="flex items-center text-blue-600 hover:text-blue-800"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      Read Transcript
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">Radio</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {radioInterviews.map((interview, index) => (
              <div key={index} className="bg-white rounded-xl shadow p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <Radio className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-4">{interview.title}</h3>
                    <audio controls className="w-full mb-4">
                      <source src={interview.audioSrc} type="audio/mpeg" />
                      Your browser does not support audio playback.
                    </audio>
                    {interview.transcriptSrc && (
                      <a 
                        href={interview.transcriptSrc}
                        className="text-blue-600 hover:text-blue-800 flex items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Read transcript
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">Supporting our patients</h2>
          <p className="text-lg text-blue-100 mb-6">
            Dr. Tindel treats adults and teens for many different spine conditions, including herniated discs, 
            scoliosis, spinal stenosis, spinal cord injuries, back and neck pain, degenerative disc diseases, 
            revision spine surgery and spondylolisthesis.
          </p>
          <Link 
            to="/about-our-practice"
            className="inline-flex items-center text-white hover:text-blue-200 transition-colors duration-300"
          >
            Learn more about our practice
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default MediaInterviews;