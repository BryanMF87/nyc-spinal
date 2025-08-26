import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { BookOpen, Presentation, Award, GraduationCap } from 'lucide-react';

const Publications = () => {
  // ---------------------------
  // Research Presentations
  // ---------------------------
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
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <title>Publications - New York Center for Spinal Disorders</title>
      <meta name="description" content="Discover Dr. Nathaniel Tindel's published works on spine surgery, scoliosis treatment, and advanced orthopedic techniques, showcasing his medical expertise." />
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
            src="/images/circles.jpg"
            alt="Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative h-full max-w-6xl mx-auto px-4 flex items-center">
          <div>
            <h1 className="text-5xl font-bold text-white mb-4">Publications &amp; Presentations</h1>
            <p className="text-2xl text-blue-100">Academic contributions and research work</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <nav className="flex flex-wrap gap-6">
            <a href="#research-presentations" className="text-blue-600 hover:underline">
            Research Presentations
            </a>
            <a href="#poster-presentations" className="text-blue-600 hover:underline">
            Research Presentations: Poster Exhibits
            </a>
            <a href="#publications-thesis" className="text-blue-600 hover:underline">
            Publications: Thesis
            </a>
            <a href="#publications-articles" className="text-blue-600 hover:underline">
            Publications: Articles
            </a>
            <a href="#publications-book" className="text-blue-600 hover:underline">
            Publications: Book
            </a>
            <a href="#publications-book-chapters" className="text-blue-600 hover:underline">
            Publications: Book Chapters
            </a>
            <a href="#grand-rounds" className="text-blue-600 hover:underline">
            Grand Rounds/Invitational Lectures
            </a>
        </nav>
     </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <section id="research-presentations" className="mb-16">
          <div className="flex items-center mb-8">
            <Presentation className="w-8 h-8 text-blue-600 mr-4" />
            <h2 className="text-3xl font-bold text-blue-900">Research Presentations</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg shadow-lg">
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

        <section id="poster-presentations" className="mb-16">
          <div className="flex items-center mb-8">
            <Award className="w-8 h-8 text-blue-600 mr-4" />
            <h2 className="text-3xl font-bold text-blue-900">Research Presentations: Poster Exhibits</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg shadow-lg">
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

        <section className="mb-16">
          <div className="flex items-center mb-8">
            <BookOpen className="w-8 h-8 text-blue-600 mr-4" />
            <h2 className="text-3xl font-bold text-blue-900">Publications</h2>
          </div>

          <div className="mb-12" id="publications-book">
            <h3 className="text-2xl font-bold text-blue-800 mb-6">Book</h3>
            {publications
              .filter((pub) => pub.type === "book")
              .map((book, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-lg p-6 mb-4">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-32 h-48 mx-auto md:mx-0 rounded-lg overflow-hidden">
                    <img
                        src="/images/publishedbook.jpg"
                        alt="I've Got Your Back book cover"
                        className="w-full h-full object-cover"
                    />
                    </div>
                    <div className="text-center md:text-left">
                      <h4 className="text-xl font-bold text-blue-900 mb-2">
                        {book.title}
                      </h4>
                      <p className="text-gray-600 mb-2">
                        {book.authors}
                      </p>
                      <p className="text-gray-700">
                        {book.publisher}, {book.date}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          <div className="mb-12" id="publications-thesis">
            <h3 className="text-2xl font-bold text-blue-800 mb-6">Thesis</h3>
            {publications
              .filter((pub) => pub.type === "thesis")
              .map((thesis, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-lg p-6 mb-4">
                  <h4 className="text-xl font-bold text-blue-900 mb-2">
                    {thesis.title}
                  </h4>
                  <p className="text-gray-600 mb-1">{thesis.authors}</p>
                  <p className="text-gray-700 italic">
                    {thesis.details}
                  </p>
                  <p className="text-gray-500 mt-2">Date: {thesis.date}</p>
                </div>
              ))}
          </div>

          <div className="mb-12" id="publications-articles">
            <h3 className="text-2xl font-bold text-blue-800 mb-6">Articles</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg shadow-lg">
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
                    .filter((pub) => pub.type === "article")
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
          </div>

          <div className="mb-12" id="publications-book-chapters">
            <h3 className="text-2xl font-bold text-blue-800 mb-6">Book Chapters</h3>
            {publications
              .filter((pub) => pub.type === "chapter")
              .map((chapter, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-lg p-6 mb-4">
                  <h4 className="text-xl font-bold text-blue-900 mb-2">{chapter.title}</h4>
                  <p className="text-gray-600 mb-1">{chapter.authors}</p>
                  <p className="text-gray-700 italic">{chapter.details}</p>
                </div>
              ))}
          </div>
        </section>

        <section id="grand-rounds" className="mb-16">
          <div className="flex items-center mb-8">
            <GraduationCap className="w-8 h-8 text-blue-600 mr-4" />
            <h3 className="text-3xl font-bold text-blue-900">Grand Rounds & Invitational Lectures</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg shadow-lg">
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

      <Footer />
    </div>
  );
};

export default Publications;
