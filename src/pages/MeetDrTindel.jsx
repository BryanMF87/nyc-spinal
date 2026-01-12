import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import {
  Award,
  BookOpen,
  Building2,
  Users,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  BookOpen as BookIcon,
  Video,
  FileText,
  Radio,
  ArrowRight,
  GraduationCap,
  Presentation,
  Book
} from 'lucide-react';

import { Helmet } from 'react-helmet';

  // ---------------------------
  // this page as built dynamically inside of the Storyblok platform with reusable components
  // ---------------------------


const MeetDrTindel = () => {
  const [activeSection, setActiveSection] = useState('about');

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const researchPresentations = [
    {
      title: "Heart Valves: Function, Dysfunction and Available Substitutes",
      details: "Oral Defense of Senior Thesis",
      authors: "Tindel, Nathaniel L.",
      location: "Princeton University",
      date: "May 1985"
    },
    {
      title: "Synovial Cysts of the Lumbar Spine",
      details: "American Orthopaedic Association 26th Annual Resident’s Conference",
      authors: "Tindel N, Main K, O'leary P, Ferriter P",
      location: "Seattle, Washington",
      date: "March 1993"
    },
    {
      title: "Synovial Cysts of the Lumbar Spine",
      details: "New York Academy of Medicine — Section on Orthopaedic Surgery Residents' Night",
      authors: "Tindel N, Main K, O'leary P, Ferriter P",
      location: "New York, New York",
      date: "May 10, 1993"
    },
    {
      title: "Submuscular Transposition of the Ulnar Nerve",
      details: "American Orthopaedic Association 27th Annual Resident’s Conference",
      authors: "Tindel N, Posner M, McMahon M",
      location: "Atlanta, Georgia",
      date: "March 1994"
    },
    {
      title: "Submuscular Transposition of the Ulnar Nerve",
      details: "New York Society for Surgery of the Hand Resident’s Night",
      authors: "Tindel N, Posner M, McMahon M",
      location: "New York, NY",
      date: "May 10, 1994"
    },
    {
      title: "Synovial Cysts of the Lumbar Spine",
      details: "Annual Spinal Science Advancement Foundation Meeting — Spine Fellows Symposium",
      authors: "Tindel N, Main K, O'leary P, Ferriter P",
      location: "New Orleans, LA",
      date: "Nov. 18–19, 1994"
    },
    {
      title: "Results of Cervical Laminoplasty after Failed Anterior Cervical Discectomy and Fusion for Cervical Myelopathy",
      details: "Lenox Hill Hospital Alumni Day Symposium",
      authors: "Tindel N, Eismont F",
      location: "New York, NY",
      date: "June 15, 1995"
    },
    {
      title: "Transposition of the Ulnar Nerve: Review of 100 Cases",
      details: "Lenox Hill Hospital Alumni Day Symposium",
      authors: "Posner M, Tindel N, McMahon M, Green S (Presented by Martin Posner, MD)",
      location: "New York, NY",
      date: "June 15, 1995"
    },
    {
      title: "Synovial Cysts of the Lumbar Spine",
      details: "Lenox Hill Hospital Alumni Day Symposium",
      authors: "Tindel N, Main K, O'leary P, Ferriter P (Presented by Pierce Ferriter, MD)",
      location: "New York, NY",
      date: "June 15, 1995"
    },
    {
      title: "Computerized Tomographic Analysis of Normal Pediatric Rotatory Atlanto-Axial Motion",
      details: "Twenty-Eighth Annual Meeting of the Cervical Spine Research Society",
      authors: "Tindel N, Blatt C, Lantos G",
      location: "Charleston, SC",
      date: "Nov. 29–Dec. 3, 2000"
    },
  ];

  // ---------------------------
  // Poster Presentations
  // ---------------------------
  const posterPresentations = [
    {
      event: "Twenty-Third Annual Meeting of the Cervical Spine Research Society",
      title: "Results of Cervical Laminoplasty After Previous Anterior Cervical Discectomy and/or Corpectomy and Fusion (ACDF)",
      authors: "Tindel N, Eismont F",
      location: "Santa Fe, NM",
      date: "Nov. 29–Dec. 2, 1995"
    },
    {
      event: "30th Annual Meeting of the Cervical Spine Research Society",
      title: "Radiographic Variation of the Odontoid Lateral Mass Interval",
      authors: "Tindel N, Myer J, Lantos G, Sacchi R",
      location: "Miami Beach, FL",
      date: "Dec. 5–7, 2002"
    },
    {
      event: "Orthopaedic Trauma Association Annual Meeting",
      title: "Intraoperative Culture Results in Early Retrieval of Spinal Bullets",
      authors: "Wollowick A, Tindel N",
      location: "Ottawa, Canada",
      date: "Oct. 20–22, 2005"
    },
    {
      event: "North American Spine Society",
      title: "Kyphoplasty Assisted Open Reduction and Internal Fixation of Burst Fractures",
      authors: "Tindel N, Czerwain J",
      location: "Seattle, WA",
      date: "Sept. 26–30, 2006"
    },
    {
      event: "5th Annual NYS Society of Orthopaedic Surgeons Symposium/Resident Poster Contest",
      title: "Kyphoplasty Assisted Open Reduction and Internal Fixation of Burst Fractures",
      authors: "Tindel N, Czerwain J",
      location: "Mt. Sinai School of Medicine, NY",
      date: "Oct. 14, 2006"
    },
  ];

  // ---------------------------
  // Publications
  // ---------------------------
  const publications = [
    // Book
    {
      type: "book",
      title: "I’ve Got Your Back: The Truth About Back Surgery, Straight From A Spine Surgeon",
      authors: "Nathaniel L. Tindel, MD with Tamar Haspel",
      publisher: "Penguin Press/NAL",
      date: "Jan. 2007"
    },
    // Thesis
    {
      type: "thesis",
      title: "Heart Valves: Function, Dysfunction and Available Substitutes",
      authors: "Tindel N",
      date: "1985",
      details: "Thesis presented to Princeton University in partial fulfillment for the degree of Bachelor of Science."
    },
    // Articles
    {
      type: "article",
      title: "Pigmented Villonodular Synovitis of the Zygoapophyseal Joint: A Case Report",
      authors: "Rovner, Joshua MD; Yaghoobian, Arash MD; Gott, Michael BS; Tindel, Nathaniel MD",
      journal: "Spine",
      date: "Aug. 15, 2008",
      details: "33(18):E656-E658"
    },
    {
      type: "article",
      title: "Diagnosis of Pedal Osteomyelitis in Diabetic Patients Using Current Scintigraphic Techniques",
      authors: "Keenan A, Tindel N, Alavi A",
      journal: "Archives of Internal Medicine",
      date: "1989",
      details: "149(10):2262–2266"
    },
    {
      type: "article",
      title: "The Plica Syndrome",
      authors: "Nisonson B, Tindel N",
      journal: "Seminars in Orthopaedics",
      date: "1990",
      details: "Volume 5, No. 4"
    },
    {
      type: "article",
      title: "The Plica Syndrome",
      authors: "Tindel N, Nisonson B",
      journal: "The Orthopaedic Clinics of North America",
      date: "1992",
      details: "23(4):613–618"
    },
    {
      type: "article",
      title: "Long-term Follow-up of the Ionescu-Shiley Mitral Pericardial Zenograft",
      authors: "Gabbay S, Bortolotti U, Wasserman F, Tindel N, Factor S, Frater RW",
      journal: "The Journal of Thoracic and Cardiovascular Surgery",
      date: "1984",
      details: "88(5):758–763"
    },
    // Book Chapters
    {
      type: "chapter",
      title: "Acute Brachial Neuropathy",
      authors: "Tindel N, Hershman EB",
      details: "Chapter in Current Therapy in Sports Medicine, 3/e, J Torg: Mosby Year Book, Saint Louis, MO, 1995."
    },
    {
      type: "chapter",
      title: "Brachial Plexus Injuries",
      authors: "Tindel N, Hershman EB, Bergfeld JA",
      details: "Hand and Upper Extremity. Sports Injuries of the Hand and Upper Extremity. Edited by K.M. Chan, Churchill Livingstone, New York, June 1995."
    },
    {
      type: "chapter",
      title: "Spinal Trauma (Contributor)",
      authors: "Tindel N",
      details: "Board Review Series: Emergency Medicine, Section on Spinal Trauma, Editor: Latha Stead: Lippincott, Williams & Wilkins, 2000."
    },
  ];

  // ---------------------------
  // Grand Rounds & Invitational Lectures
  // ---------------------------
  const grandRounds = [
    {
      title: "Scoliosis",
      location: "The Brooklyn Hospital Center Pediatric Grand Rounds",
      date: "May 22, 2001",
    },
    {
      title: "Scoliosis",
      location: "Jacobi Medical Center Department of Pediatrics Grand Rounds",
      date: "Mar. 28, 2003",
    },
    {
      title: "Disc Replacement, IDET and Vertebral Fractures: New Treatment Options For Back Pain",
      location: "Albert Einstein College of Medicine & Montefiore Medical Center Rheumatology Grand Rounds",
      date: "April 2, 2004",
    },
    {
      title: "Spinal Cord Injuries: Surgical and Rehabilitation Aspects",
      location: "New York Society of Physical Medicine and Rehabilitation, New York Academy of Medicine",
      date: "Sept. 8, 2004",
    },
    {
      title: "Scoliosis: New Treatment Options",
      location: "Jacobi Medical Center Department of Pediatrics Grand Rounds",
      date: "Dec. 12, 2005",
    },
    {
      title: "Treatment of Vertebral Fractures",
      location: "Albert Einstein College of Medicine & Montefiore Medical Center Rheumatology Grand Rounds",
      date: "Jan. 13, 2006",
    },
    {
      title: "Orthopaedic Emergencies",
      location: "Albert Einstein College of Medicine: Class of 2008 Lecture",
      date: "April 11, 2006",
    },
    {
      title: "Office Orthopaedics",
      location: "Albert Einstein College of Medicine: Class of 2009 Lecture",
      date: "April 11, 2007",
    },
    {
      title: "Orthopaedic Emergencies",
      location: "Albert Einstein College of Medicine: Class of 2009 Lecture",
      date: "April 19, 2007",
    },
    {
      title: "Minimally Invasive Treatment of Metastatic Diseases to the Spine",
      location: "Jacobi Medical Center & Albert Einstein College of Medicine Dept. of Hematology/Oncology Grand Rounds",
      date: "Aug. 13, 2007",
    },
    {
      title: "Office Orthopaedics",
      location: "Albert Einstein College of Medicine: Class of 2010 Lecture",
      date: "April 7, 2008",
    },
    {
      title: "Orthopaedic Emergencies",
      location: "Albert Einstein College of Medicine: Class of 2010 Lecture",
      date: "April 10, 2008",
    },
    {
      title: "Scoliosis: Diagnosis and Treatment",
      location: "Jacobi Medical Center Department of Pediatrics Grand Rounds",
      date: "April 22, 2008",
    },
  ]

  const sections = [
    {
      id: 'about',
      title: 'About Dr. Tindel',
      icon: BookIcon
    },
    {
      id: 'education',
      title: 'Education & Credentials',
      icon: Award
    },
    {
      id: 'Media',
      title: 'Media Interviews',
      icon: Video
    },
    {
      id: 'publications',
      title: 'Publications',
      icon: Book
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      {/* <Helmet>
        <title>Meet Dr. Nathaniel Tindel - New York Center for Spinal Disorders</title>
        <meta name="description" content="Discover Dr. Nathaniel Tindel's personal philosophy on patient care, emphasizing a thoughtful approach to treating spinal disorders with personalized, compassionate care." />
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
        </Helmet> */}
      <Header />
      
      <div className="relative h-[40vh] bg-gradient-to-r from-[#003666] to-[#0062B1]">
        <div className="absolute inset-0">
          <img
            src="../images/circles.jpg"
            alt="Dr. Tindel"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative h-full max-w-6xl mx-auto px-4 flex items-center">
          <div>
            <h1 className="text-5xl font-bold text-white mb-4">Nathaniel Tindel, MD</h1>
            <p className="text-lg md:text-2xl text-sky-100">Board-Certified Orthopedic Surgeon</p>
            <p className="text-base md:text-xl text-sky-100 mt-2">Spine and Scoliosis Specialist</p>
          </div>
        </div>
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
              <div className="space-y-8 animate-fadeIn">
                <div className="prose max-w-none">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Creating an environment where adults and teens feel comfortable, relaxed and informed is a crucial component to my practice. I spend a lot of time educating my patients about their specific condition and answering their questions about treatment options. I believe it is important to build a partnership with my patients because it builds trust and creates an open channel of communication; two things that are so important when dealing with some of the difficulties that accompany spine conditions.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mt-4">
                    Sometimes, the cure for a given condition follows a straightforward process of matching a particular problem with the right treatment, which may be surgery. But more often than not, it is not. It's a process of trial and error, where I explore the least invasive options first.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#003666] mb-4">Exploring the alternatives</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    While there are conditions for which surgery is appropriate and necessary, there are also conditions that don't respond as well to surgery. I've seen alternative treatments—from exercise to physical therapy to anti-inflammatory medications—work well enough to cure many people. Finding the least involved and safest treatment option is always foremost in my mind.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#003666] mb-4">Connecting with patients</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    I place great emphasis on spending one-on-one time with my patients to help me better understand what their needs and goals are. I've run thirteen marathons and chase after three kids at home, so I really get it when someone comes to me and says, "I just want to get back to my life." Focusing on the needs of my patients and finding the most effective treatment for their condition is my life's work and I am privileged to be in the position to help people find that solution.
                  </p>
                </div>
              </div>
            )}

            
            {activeSection === 'education' && (
              <div className="space-y-12 animate-fadeIn">
                <div className="prose max-w-none">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Board-certified as an orthopaedic surgeon, Dr. Tindel specializes in the spine and scoliosis. He graduated Phi Beta Kappa and with the Highest Honors in Biology from Princeton University in 1985 and from the University of Pennsylvania School of Medicine in 1989.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#003666] mb-6 flex items-center">
                    <BookOpen className="mr-3 text-[#0062B1]" />
                    Residency
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    After completing his internship and residency in orthopaedic surgery at Lenox Hill Hospital in New York City in 1994, Dr. Tindel continued his specialized training in spine surgery with a spine and scoliosis fellowship at the University of Miami/Jackson Memorial Hospital.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#003666] mb-6 flex items-center">
                    <Users className="mr-3 text-[#0062B1]" />
                    Professional Affiliations
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    In addition to his private practice, Dr. Tindel is currently an assistant professor of orthopaedic surgery at The Albert Einstein College of Medicine and Chief of Spinal Surgery at Jacobi Medical Center. He is a member of:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    {[
                      'American Academy of Orthopaedic Surgeons',
                      'American Spinal Injury Association',
                      'Eastern Orthopaedic Association',
                      'Cervical Spine Research Society',
                      'North American Spine Society'
                    ].map((affiliation, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-[#0062B1] rounded-full mr-3"></div>
                        {affiliation}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#003666] mb-6 flex items-center">
                    <Award className="mr-3 text-[#0062B1]" />
                    Achievements
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Dr. Tindel is consistently ranked as one of the New York Metro Area Top Doctors. A contributing writer to various professional publications, he also wrote the book, <em>I've Got Your Back: The truth about spine surgery, straight from a surgeon (New American Library, 2007)</em>.
                  </p>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h2 className="text-2xl font-bold text-[#003666] mb-6">Featured In</h2>
                  <div className="grid grid-cols-4 gap-4">
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
                        <div className="w-full aspect-square rounded-lg bg-gray-100 overflow-hidden">
                          <img
                            src={magazine.src}
                            alt={`Magazine feature ${index + 1}`}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <p className="mt-2 text-sm text-gray-600 text-center">{magazine.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            
            {activeSection === 'Media' && (
              <div className="space-y-8 animate-fadeIn">
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-[#003666] mb-6">Television Appearances</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
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
                    ].map((interview, index) => (
                      <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                        {interview.hasVideo ? (
                          <video
                            controls
                            className="w-full aspect-video object-cover"
                            poster="/images/placeholder.jpg"
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
                          <h3 className="text-xl font-bold text-[#003666] mb-2">{interview.title}</h3>
                          <p className="text-gray-600 mb-4">{interview.description}</p>
                          <a 
                            href={interview.transcriptSrc}
                            className="inline-flex items-center text-[#0062B1] hover:text-[#003666]"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FileText className="w-4 h-4 mr-2" />
                            Read Transcript
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-[#003666] mb-6">Radio Interviews</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
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
                    ].map((interview, index) => (
                      <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-sky-100 rounded-full">
                            <Radio className="w-6 h-6 text-[#0062B1]" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-[#003666] mb-4">{interview.title}</h3>
                            <audio controls className="w-full mb-4">
                              <source src={interview.audioSrc} type="audio/mpeg" />
                              Your browser does not support audio playback.
                            </audio>
                            {interview.transcriptSrc && (
                              <a 
                                href={interview.transcriptSrc}
                                className="text-[#0062B1] hover:text-[#003666] flex items-center"
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

                <div className="bg-gradient-to-br from-[#003666] to-[#0062B1] text-white rounded-2xl p-8">
                  <h2 className="text-2xl font-bold mb-4">Supporting our patients</h2>
                  <p className="text-lg text-sky-100 mb-6">
                    Dr. Tindel treats adults and teens for many different spine conditions, including herniated discs, 
                    scoliosis, spinal stenosis, spinal cord injuries, back and neck pain, degenerative disc diseases, 
                    revision spine surgery and spondylolisthesis.
                  </p>
                  <Link 
                    to="/about-our-practice"
                    className="inline-flex items-center text-white hover:text-sky-200 transition-colors duration-300"
                  >
                    Learn more about our practice
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </div>
            )}

            
            {activeSection === 'publications' && (
              <div className="space-y-8 animate-fadeIn">
                <nav className="flex flex-wrap gap-4 mb-8">
                  <a href="#research-presentations" className="text-[#0062B1] hover:text-[#003666] text-sm">
                    Research Presentations
                  </a>
                  <a href="#poster-presentations" className="text-[#0062B1] hover:text-[#003666] text-sm">
                    Poster Exhibits
                  </a>
                  <a href="#publications-articles" className="text-[#0062B1] hover:text-[#003666] text-sm">
                    Articles
                  </a>
                  <a href="#publications-book" className="text-[#0062B1] hover:text-[#003666] text-sm">
                    Book
                  </a>
                  <a href="#publications-book-chapters" className="text-[#0062B1] hover:text-[#003666] text-sm">
                    Book Chapters
                  </a>
                  <a href="#grand-rounds" className="text-[#0062B1] hover:text-[#003666] text-sm">
                    Grand Rounds
                  </a>
                </nav>

                <div id="publications-book" className="bg-white p-6 rounded-xl shadow-lg">
                  <h2 className="text-2xl font-bold text-[#003666] mb-4">Published Book</h2>
                  <div className="flex flex-col md:flex-row gap-6">
                    <img
                      src="/images/publishedbook.jpg"
                      alt="I've Got Your Back book cover"
                      className="w-48 rounded-lg shadow-md"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-[#003666] mb-2">
                        I've Got Your Back: The truth about spine surgery, straight from a surgeon
                      </h3>
                      <p className="text-gray-700 mb-2">
                        Nathaniel L. Tindel, MD with Tamar Haspel
                      </p>
                      <p className="text-gray-600 mb-4">
                        Penguin Press/NAL, Jan. 2007
                      </p>
                      <p className="text-gray-700 mb-4">
                        A comprehensive guide to understanding spine conditions and making informed decisions about treatment options.
                      </p>
                      <Link
                        to="/ive-got-your-back"
                        className="inline-flex items-center text-[#0062B1] font-semibold hover:text-[#003666]"
                      >
                        Learn more about the book
                        <ChevronRight className="ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>

                <section id="research-presentations">
                  <div className="flex items-center mb-6">
                    <Presentation className="w-6 h-6 text-[#0062B1] mr-3" />
                    <h2 className="text-2xl font-bold text-[#003666]">Research Presentations</h2>
                  </div>
                  <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
                    <table className="w-full border-collapse">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Title</th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Details</th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Authors</th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Location</th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Date</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {researchPresentations.map((rp, idx) => (
                          <tr key={idx} className="hover:bg-gray-50">
                            <td className="px-6 py-4 text-gray-900">{rp.title}</td>
                            <td className="px-6 py-4 text-gray-600">{rp.details}</td>
                            <td className="px-6 py-4 text-gray-600">{rp.authors}</td>
                            <td className="px-6 py-4 text-gray-600">{rp.location}</td>
                            <td className="px-6 py-4 text-gray-600">{rp.date}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>

                <section id="poster-presentations">
                  <div className="flex items-center mb-6">
                    <Award className="w-6 h-6 text-[#0062B1] mr-3" />
                    <h2 className="text-2xl font-bold text-[#003666]">Poster Presentations</h2>
                  </div>
                  <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
                    <table className="w-full border-collapse">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Event</th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Title</th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Authors</th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Location</th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Date</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {posterPresentations.map((pp, idx) => (
                          <tr key={idx} className="hover:bg-gray-50">
                            <td className="px-6 py-4 text-gray-900">{pp.event}</td>
                            <td className="px-6 py-4 text-gray-600">{pp.title}</td>
                            <td className="px-6 py-4 text-gray-600">{pp.authors}</td>
                            <td className="px-6 py-4 text-gray-600">{pp.location}</td>
                            <td className="px-6 py-4 text-gray-600">{pp.date}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>

                <section id="publications-articles">
                  <div className="flex items-center mb-6">
                    <BookOpen className="w-6 h-6 text-[#0062B1] mr-3" />
                    <h2 className="text-2xl font-bold text-[#003666]">Published Articles</h2>
                  </div>
                  <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
                    <table className="w-full border-collapse">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Title</th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Authors</th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Journal</th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Date / Details</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {publications
                          .filter(pub => pub.type === "article")
                          .map((article, idx) => (
                            <tr key={idx} className="hover:bg-gray-50">
                              <td className="px-6 py-4 text-gray-900">{article.title}</td>
                              <td className="px-6 py-4 text-gray-600">{article.authors}</td>
                              <td className="px-6 py-4 text-gray-600">{article.journal}</td>
                              <td className="px-6 py-4 text-gray-600">
                                {article.date}
                                {article.details ? `: ${article.details}` : ""}
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </section>

                <section id="publications-book-chapters">
                  <div className="flex items-center mb-6">
                    <BookOpen className="w-6 h-6 text-[#0062B1] mr-3" />
                    <h2 className="text-2xl font-bold text-[#003666]">Book Chapters</h2>
                  </div>
                  <div className="space-y-4">
                    {publications
                      .filter(pub => pub.type === "chapter")
                      .map((chapter, idx) => (
                        <div key={idx} className="bg-white rounded-xl shadow-lg p-6">
                          <h4 className="text-xl font-bold text-[#003666] mb-2">{chapter.title}</h4>
                          <p className="text-gray-600 mb-2">{chapter.authors}</p>
                          <p className="text-gray-700 italic">{chapter.details}</p>
                        </div>
                      ))}
                  </div>
                </section>

                <section id="grand-rounds">
                  <div className="flex items-center mb-6">
                    <GraduationCap className="w-6 h-6 text-[#0062B1] mr-3" />
                    <h2 className="text-2xl font-bold text-[#003666]">Grand Rounds & Invitational Lectures</h2>
                  </div>
                  <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
                    <table className="w-full border-collapse">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Title</th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Location</th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Date</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {grandRounds.map((gr, idx) => (
                          <tr key={idx} className="hover:bg-gray-50">
                            <td className="px-6 py-4 text-gray-900">{gr.title}</td>
                            <td className="px-6 py-4 text-gray-600">{gr.location}</td>
                            <td className="px-6 py-4 text-gray-600">{gr.date}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>
              </div>
            )}
          </div>

          
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src="../images/DrNathaniel.jpeg"
                alt="Dr. Nathaniel Tindel"
                className="w-full h-92 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#003666] mb-2">Nathaniel Tindel, MD</h3>
                <p className="text-gray-600">Board Certified Orthopedic Surgeon</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#003666] to-[#0062B1] p-6 rounded-2xl text-white">
              <Award className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-4">Ranked NYC Top Doctor</h3>
              <p className="text-sky-100">
                Consistently recognized as one of New York's leading spine surgeons
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <Building2 className="w-8 h-8 text-[#0062B1] mb-4" />
              <h3 className="text-xl font-bold text-[#003666] mb-2">Current Positions</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Assistant Professor of Orthopaedic Surgery at The Albert Einstein College of Medicine</li>
                <li>Chief of Spinal Surgery at Jacobi Medical Center</li>
              </ul>
            </div>

            <div className="bg-sky-50 p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-[#003666] mb-4">Schedule a Consultation</h3>
              <p className="text-gray-700 mb-6">
                Ready to discuss your condition with Dr. Tindel? Contact us to schedule an appointment.
              </p>
              <Link
                to="/contact"
                className="block w-full text-center bg-[#0062B1] text-white py-3 rounded-lg hover:bg-[#003666] transition duration-300 font-semibold"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MeetDrTindel;