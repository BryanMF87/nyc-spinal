import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import {
  Linkedin,
  Instagram,
  Calendar,
  ChevronLeft,
  ChevronRight,
  BookIcon,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Video,
  Presentation,
  Disc
} from 'lucide-react';

import { Helmet } from 'react-helmet';

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

const MeetDrShah = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeSection, setActiveSection] = useState('about');

  const doctorImages = [
    '../images/DrShahPicture1.jpg',
    '../images/DrShahPicture2.jpg',
    '../images/DrShahPicture3.jpg'
  ];

  const sections = [
    {
      id: 'about',
      title: 'About Dr. Shah',
      icon: BookOpen
    },
    {
      id: 'publications',
      title: 'Publications & Research',
      icon: BookIcon
    },
    {
      id: 'discReplacement',
      title: 'Disc Replacement',
      icon: Disc
    }
  ];

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % doctorImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + doctorImages.length) % doctorImages.length);
  };

  const ImageCarousel = ({ isMobile }) => (
    <div className={`${isMobile ? 'md:hidden' : 'hidden md:block'} bg-white rounded-2xl shadow-lg overflow-hidden relative group`}>
      <div className="relative">
        <img
          src={doctorImages[currentImageIndex]}
          alt={`Dr. Neel Shah - Image ${currentImageIndex + 1}`}
          className="w-full h-96 object-cover object-top"
        />
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition-colors shadow-md"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6 text-[#003666]" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition-colors shadow-md"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6 text-[#003666]" />
        </button>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {doctorImages.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${index === currentImageIndex ? 'bg-[#003666]' : 'bg-white/60'
                }`}
            />
          ))}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#003666] mb-2">Neel P. Shah, MD</h3>
        <p className="text-gray-600">Board Certified Orthopedic Surgeon</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <Helmet>
        <title>Meet Dr. Neel Shah - Board-Certified Orthopedic Spine Surgeon | NY Spinal Disorders</title>
        <meta name="description" content="Dr. Neel P. Shah specializes in minimally invasive spine surgery and complex spinal disorders. NYU Langone affiliated surgeon providing personalized spine care and advanced surgical techniques in New York." />
        <meta name="keywords" content="Dr. Neel Shah, spine surgeon, spinal disorders, minimally invasive surgery, orthopedic surgeon, spine surgery publications, medical presentations, NYU Langone, New York spine specialist, microsurgery" />
        <meta name="author" content="Dr. Neel P. Shah" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Dr. Neel P. Shah - Board-Certified Spine Surgeon in New York" />
        <meta property="og:description" content="Dr. Neel P. Shah specializes in minimally invasive spine surgery and complex spinal disorders, providing personalized care at NYU Langone and the NY Center for Spinal Disorders." />
        <meta property="og:image" content="/images/logo-header.png" />
        <meta property="og:url" content="https://www.nycspinaldisorders.com/meet-dr-shah" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dr. Neel P. Shah - Leading NY Spine Surgeon" />
        <meta name="twitter:description" content="Board-certified orthopedic spine surgeon specializing in minimally invasive techniques and complex spinal disorders. NYU Langone affiliated." />
        <meta name="twitter:image" content="/images/logo-header.png" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#003666" />
        <meta name="mobile-web-app-capable" content="yes" />
      </Helmet>

      <Header />

      <div className="relative h-96 bg-gradient-to-r from-[#003666] to-[#0062B1]">
        <div className="absolute inset-0">
          <img
            src="../images/circles.jpg"
            alt="Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative h-full max-w-6xl mx-auto px-4 flex items-center">
          <div>
            <h1 className="text-5xl font-bold text-white mb-4">Neel P. Shah, MD</h1>
            <p className="text-lg md:text-2xl text-sky-100">Board-Certified Orthopedic Spine Surgeon</p>
            <p className="text-base md:text-xl text-sky-100 mt-2">Minimally Invasive & Reconstructive Spinal Surgery</p>
            <div className="flex space-x-6 mt-8">
              <a href="https://www.linkedin.com/in/neel-shah-md-23728787/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-sky-200 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://www.instagram.com/discmd/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-sky-200 transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden px-4 mt-8">
        <ImageCarousel isMobile={true} />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            
            <div className="mb-8 space-y-4">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex items-center justify-between p-4 bg-white rounded-lg shadow-md hover:bg-sky-50 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-3">
                    <section.icon className="w-6 h-6 text-[#0062B1]" />
                    <span className="text-lg font-semibold text-[#003666]">{section.title}</span>
                  </div>
                  {activeSection === section.id ? (
                    <ChevronUp className="w-5 h-5 text-[#0062B1]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#0062B1]" />
                  )}
                </button>
              ))}
            </div>

            
            {activeSection === 'about' && (
              <div className="space-y-12 animate-fadeIn">
                <div className="prose max-w-none">
                  <div className="bg-white rounded-xl p-8 shadow-sm">
                    <h2 className="text-3xl font-bold text-[#003666] mb-6">Pioneering Minimally Invasive Spine Care</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      At the forefront of spine surgery innovation, Dr. Neel P. Shah brings together cutting-edge technology and compassionate care. As a board-certified orthopedic spine surgeon, he has dedicated his practice to advancing minimally invasive techniques that prioritize both precision and patient comfort. His expertise in microscopic spine surgery and motion preservation has established him as a leader in modern spinal care.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mt-6">
                      While mastering the complexities of advanced spine surgery, Dr. Shah remains guided by a simple yet powerful philosophy: "Less is more." This approach reflects his commitment to achieving maximum benefits through minimal intervention, carefully selecting the least invasive treatment options that will effectively restore his patients' quality of life.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-[#003666] to-[#0062B1] rounded-xl p-8 mt-8 text-white">
                    <h2 className="text-3xl font-bold mb-6">A Vision for Patient Care</h2>
                    <div className="space-y-6">
                      <p className="text-lg leading-relaxed">
                        Dr. Shah's approach to spine care is built on four fundamental pillars:
                      </p>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white/10 rounded-lg p-6">
                          <h3 className="text-xl font-semibold mb-3">Nerve Decompression</h3>
                          <p>Precision techniques to relieve pressure and restore proper nerve function</p>
                        </div>
                        <div className="bg-white/10 rounded-lg p-6">
                          <h3 className="text-xl font-semibold mb-3">Stability Enhancement</h3>
                          <p>Advanced methods to ensure spinal stability and long-term structural integrity</p>
                        </div>
                        <div className="bg-white/10 rounded-lg p-6">
                          <h3 className="text-xl font-semibold mb-3">Deformity Correction</h3>
                          <p>Innovative solutions to address and correct spinal misalignments</p>
                        </div>
                        <div className="bg-white/10 rounded-lg p-6">
                          <h3 className="text-xl font-semibold mb-3">Motion Preservation</h3>
                          <p>Cutting-edge techniques to maintain natural spinal movement</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 bg-white rounded-xl p-8 shadow-sm">
                    <h2 className="text-3xl font-bold text-[#003666] mb-6">Personal Approach to Care</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Every patient's journey is unique, and Dr. Shah takes pride in providing individualized attention that goes beyond standard care protocols. He believes in taking the time to truly understand each patient's specific needs, lifestyle, and goals. This personalized approach allows him to develop treatment plans that not only address immediate concerns but also support long-term spinal health.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mt-6">
                      Dr. Shah's decision to leave corporate medicine stems from his commitment to treat patients like family and build lasting relationships. He is opposed to the current trend in healthcare where patients are treated on a conveyor belt and clinics become revolving doors. Instead, he strives to spend as much time as needed with each patient, rather than adhering to the allotted times dictated by corporate healthcare and insurance companies.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mt-6">
                      "I treat every patient as if they were family," Dr. Shah often says, "and that means taking the time to explore all options and find the solution that best fits their individual needs." This philosophy has shaped his practice into one where patients feel heard, understood, and confident in their treatment decisions.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mt-6">
                      Dr. Shah is on staff at one of the top hospitals in the country, NYU Langone Hospital. Before returning to NYC, he was in practice in Southern California at one of the most highly rated orthopedic practices, DISC Sport and Spine.
                    </p>
                  </div>

                  <div className="mt-8">
                    <h2 className="text-3xl font-bold text-[#003666] mb-6">Academic Excellence & Current Appointments</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="bg-white rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-semibold text-[#003666] mb-4">Education</h3>
                        <ul className="space-y-3 text-gray-700">
                          <li className="flex items-center">
                            <div className="w-2 h-2 bg-[#0062B1] rounded-full mr-3"></div>
                            <span>BS in Biomedical Engineering - Northwestern University</span>
                          </li>
                          <li className="flex items-center">
                            <div className="w-2 h-2 bg-[#0062B1] rounded-full mr-3"></div>
                            <span>MD - SUNY Downstate College of Medicine</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-white rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-semibold text-[#003666] mb-4">Advanced Training</h3>
                        <ul className="space-y-3 text-gray-700">
                          <li className="flex items-center">
                            <div className="w-2 h-2 bg-[#0062B1] rounded-full mr-3"></div>
                            <span>Orthopedic Surgery Residency - Rutgers University</span>
                          </li>
                          <li className="flex items-center">
                            <div className="w-2 h-2 bg-[#0062B1] rounded-full mr-3"></div>
                            <span>Spine Surgery Fellowship - New England Baptist Hospital</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-8 bg-white rounded-xl p-6 shadow-sm">
                      <h3 className="text-xl font-semibold text-[#003666] mb-4">Current Faculty Appointments</h3>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-[#0062B1] rounded-full mr-3"></div>
                          <span>Assistant Professor - Department of Orthopedic Surgery, NYU Langone</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-[#0062B1] rounded-full mr-3"></div>
                          <span>Assistant Professor - Department of Orthopedic Surgery, Mount Sinai Hospital</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-[#0062B1] rounded-full mr-3"></div>
                          <span>Attending Surgeon - Northwell Health, Lenox Hill Hospital</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            
            {activeSection === 'publications' && (
              <div className="space-y-8 animate-fadeIn">
                <section id="presentations" className="mb-16">
                  <div className="flex items-center mb-8">
                    <Presentation className="w-8 h-8 text-[#0062B1] mr-4" />
                    <h2 className="text-3xl font-bold text-[#003666]">Presentations</h2>
                  </div>

                  <div className="grid gap-6">
                    {presentations.map((presentation, idx) => (
                      <div key={idx} className="bg-white rounded-xl shadow-lg p-6">
                        <div className="flex items-start gap-4">
                          {presentation.type === "Media Appearance" ? (
                            <Video className="w-6 h-6 text-[#0062B1] flex-shrink-0 mt-1" />
                          ) : (
                            <Presentation className="w-6 h-6 text-[#0062B1] flex-shrink-0 mt-1" />
                          )}
                          <div>
                            <h3 className="text-xl font-bold text-[#003666] mb-2">{presentation.title}</h3>
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
                                className="text-[#0062B1] hover:text-[#003666] mt-2 inline-block"
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
                    <BookOpen className="w-8 h-8 text-[#0062B1] mr-4" />
                    <h2 className="text-3xl font-bold text-[#003666]">Publications</h2>
                  </div>

                  <div className="grid gap-6">
                    {publications.map((publication, idx) => (
                      <div key={idx} className="bg-white rounded-xl shadow-lg p-6">
                        <h3 className="text-xl font-bold text-[#003666] mb-2">{publication.title}</h3>
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
            )}

            
            {activeSection === 'discReplacement' && (
              <div className="space-y-8 animate-fadeIn">
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h2 className="text-3xl font-bold text-[#003666] mb-6">Advanced Disc Replacement Surgery</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Dr. Shah is a leading expert in total disc replacement surgery, offering both cervical and lumbar disc replacement as advanced alternatives to traditional spinal fusion. These motion-preserving procedures allow patients to maintain natural spine movement while effectively relieving pain from degenerative disc disease and herniated discs.
                  </p>
                  <div className="mt-8 flex justify-center">
                    <Link to="/disc-replacement-shah" className="inline-flex items-center bg-[#0062B1] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#003666] transition-all duration-300 text-lg">
                      Learn More About Disc Replacement
                      <ChevronRight className="ml-2" />
                    </Link>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-sky-50 to-[#0062B1]/10 p-6 rounded-xl shadow-md">
                    <h3 className="text-xl font-bold text-[#003666] mb-4">Cervical Disc Replacement</h3>
                    <p className="text-gray-700 mb-4">
                      A minimally invasive procedure for the neck that preserves natural motion and offers faster recovery compared to traditional fusion surgery.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-sky-50 to-[#0062B1]/10 p-6 rounded-xl shadow-md">
                    <h3 className="text-xl font-bold text-[#003666] mb-4">Lumbar Disc Replacement</h3>
                    <p className="text-gray-700 mb-4">
                      Advanced treatment for lower back that maintains flexibility and reduces the risk of adjacent segment degeneration.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          
          <div className="space-y-8">
            <ImageCarousel isMobile={false} />

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src="../images/shahAward.jpg"
                alt="Doctor's Choice Award 2017"
                className="w-full h-auto object-contain p-2 md:p-4 max-h-48 md:max-h-none rounded-[40px]"
              />
              <div className="p-4 text-center bg-gray-50">
                <p className="text-sm font-semibold text-gray-700">#3 in the Nation for Orthopedics" - U.S. News & World Report</p>
              </div>
            </div>

            <Link to="/appointment" className="block">
              <div className="bg-[#003666] hover:bg-[#0062B1] transition-colors rounded-2xl shadow-lg p-6 text-center">
                <Calendar size={32} className="mx-auto text-white mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Request Appointment</h3>
                <p className="text-sky-100">Schedule a consultation with Dr. Shah</p>
              </div>
            </Link>

            <div className="bg-gradient-to-br from-[#003666] to-[#0062B1] rounded-2xl text-white p-6">
              <h3 className="text-xl font-bold mb-4">Personal Life</h3>
              <p className="text-sky-100">
                When Dr. Shah isn't busy returning his patients to top shape, you can find him honing his skiing skills down double-black diamonds or exploring New York City. He enjoys spending his free time being active and outdoors with his wife, son, and their Australian Shepherd, Bodhi.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MeetDrShah;