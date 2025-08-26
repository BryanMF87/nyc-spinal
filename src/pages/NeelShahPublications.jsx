import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { BookOpen, Presentation, Video } from 'lucide-react';

const NeelShahPublications = () => {
  const presentations = [
    {
      title: "Preventing Neck and Back Pain",
      type: "Media Appearance",
      venue: "Connecticut News 12 Health Talks",
      date: "August 20, 2017",
      link: "https://www.youtube.com/watch?v=A8Ney5b7sCI&t=8s"
    },
    {
      title: "Treating Neck and Back Pain",
      type: "Media Appearance",
      venue: "Connecticut News 12 Health Talks",
      date: "August 20, 2017",
      link: "https://www.youtube.com/watch?v=m2dHvffJveU&t=2s"
    },
    {
      title: "A Novel Approach for the Intraoperative Detection of Acute C5 Nerve Root Palsies",
      type: "Conference Presentation",
      venue: "Annual Meeting for ISASS",
      location: "Toronto, Ontario, CA",
      date: "April 2018",
      authors: "Silverstein, J., Goldstein, M., Porter, D., Madhok, R., Harrington, JF, Basra, S., & Shah, N."
    },
    {
      title: "Local insulin application has a dose-dependent effect on lumbar fusion in a rabbit model",
      type: "Conference Presentation",
      venue: "62nd Annual Orthopaedic Research Society Meeting",
      location: "Orlando, FL",
      date: "March 5-8, 2016",
      authors: "Vives MJ, O'Connor JP, Subramanian S, Cottrell JA, Chaudhary S, Shah NP, Munoz III W, Lin SS"
    }
  ];

  const publications = [
    {
      type: "article",
      title: "Traumatic atlantoaxial dislocation with Hangman fracture",
      authors: "Chaudhary SB, Martinez M, Shah NP, Vives MJ",
      journal: "Spine J",
      date: "2015",
      details: "Apr 1;15(4):e15-8",
      affiliation: "Rutgers – New Jersey Medical School"
    },
    {
      type: "chapter",
      title: "Chapter on Isthmic Spondylolisthesis",
      authors: "Kwon B, Kim D, Shah N",
      book: "Herkowitz and Simeone: The Spine, the 7th Edition",
      date: "2017"
    },
    {
      type: "chapter",
      title: "Chapter & Video on Sub-laminar Wire Placement",
      authors: "Vives M, Sabharwal S, Shah N",
      book: "Spine Surgery: Tricks of the Trade 3rd Edition",
      date: "2016"
    },
    {
      type: "article",
      title: "Early Medical Complications and Delayed Discharge after Spinopelvic Fusion: A Comparative Analysis of 887 NSQIP Cases from 2006 to 2016",
      authors: "Sharfman ZT, Gelfand Y, Shah P, Holtzman AJ, Mendelis JR, Shah N, Krystal J, Yassari R, Kramer DC",
      journal: "Spine Surg Relat Res",
      date: "2020",
      details: "Mar 31;4(4):314-319"
    },
    {
      type: "article",
      title: "Local Insulin Application has a Dose-Dependent Effect on Lumbar Fusion in a Rabbit Model",
      authors: "Abraham S, Vives M, Cottrell J, Mitchell A, Lin HN, Effiong L, Iqbal E, Jingar N, Kim B, Shah N, Munoz W, Chaudhary SB, Lin SS, Benevenia J, O'Connor JP",
      journal: "J Tissue Eng Regen Med",
      date: "2021",
      details: "Feb 19. doi: 10.1002/term.3182"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <title>Publications - Dr. Neel P. Shah | New York Center for Spinal Disorders</title>
      <meta name="description" content="Explore Dr. Neel P. Shah's published works, research presentations, and media appearances in spine surgery and advanced orthopedic techniques." />
      <meta name="keywords" content="Dr. Neel Shah, spine surgeon, spinal disorders, orthopedic research, spine surgery publications, medical presentations, New York spine specialist" />
      <meta name="author" content="Dr. Neel P. Shah" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:title" content="Dr. Neel P. Shah - Publications and Research" />
      <meta property="og:description" content="View Dr. Neel P. Shah's contributions to spine surgery research, including publications, presentations, and media appearances." />
      <meta property="og:image" content="/images/logo-header.png" />
      <meta property="og:url" content="https://www.nycspinaldisorders.com/dr-shah/publications" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Dr. Neel P. Shah - Publications and Research" />
      <meta name="twitter:description" content="Leading spine surgeon Dr. Neel P. Shah's academic publications and presentations in orthopedic medicine." />
      <meta name="twitter:image" content="/images/logo-header.png" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="theme-color" content="#4a90e2" />
      <meta name="mobile-web-app-capable" content="yes" />

      <Header />

      <style>
        {`
          html {
            scroll-behavior: smooth;
          }
        `}
      </style>

      <div className="relative h-[40vh] bg-gradient-to-r from-[#003666] to-[#0062B1]">
        <div className="absolute inset-0">
          <img
            src="../images/circles.jpg"
            alt="Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative h-full max-w-6xl mx-auto px-4 flex items-center">
          <div>
            <h1 className="text-5xl font-bold text-white mb-4">Publications &amp; Presentations</h1>
            <p className="text-2xl text-blue-100">Dr. Neel P. Shah's Academic Contributions</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <nav className="flex flex-wrap gap-6">
          <a href="#presentations" className="text-blue-600 hover:underline">Presentations</a>
          <a href="#publications" className="text-blue-600 hover:underline">Publications</a>
        </nav>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <section id="presentations" className="mb-16">
          <div className="flex items-center mb-8">
            <Presentation className="w-8 h-8 text-blue-600 mr-4" />
            <h2 className="text-3xl font-bold text-blue-900">Presentations</h2>
          </div>
          
          <div className="grid gap-6">
            {presentations.map((presentation, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-start gap-4">
                  {presentation.type === "Media Appearance" ? (
                    <Video className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  ) : (
                    <Presentation className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  )}
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2">{presentation.title}</h3>
                    <p className="text-gray-600">{presentation.venue}</p>
                    {presentation.location && (
                      <p className="text-gray-600">{presentation.location}</p>
                    )}
                    <p className="text-gray-600">{presentation.date}</p>
                    {presentation.authors && (
                      <p className="text-gray-600 mt-2">{presentation.authors}</p>
                    )}
                    {presentation.link && (
                      <a 
                        href={presentation.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline mt-2 inline-block"
                      >
                        Watch Video
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="publications" className="mb-16">
          <div className="flex items-center mb-8">
            <BookOpen className="w-8 h-8 text-blue-600 mr-4" />
            <h2 className="text-3xl font-bold text-blue-900">Publications</h2>
          </div>

          <div className="grid gap-6">
            {publications.map((publication, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-2">{publication.title}</h3>
                <p className="text-gray-600 mb-2">{publication.authors}</p>
                {publication.type === "article" ? (
                  <p className="text-gray-700">
                    {publication.journal}. {publication.date}
                    {publication.details && `, ${publication.details}`}
                    {publication.affiliation && ` • ${publication.affiliation}`}
                  </p>
                ) : (
                  <p className="text-gray-700">
                    In: {publication.book} ({publication.date})
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default NeelShahPublications;