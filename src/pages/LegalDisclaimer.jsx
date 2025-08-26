import Header from '../components/Header';
import Footer from '../components/Footer';
import { Scale, Link as LinkIcon, ShieldAlert, FileWarning, Gavel } from 'lucide-react';
import { Helmet } from 'react-helmet';

const LegalDisclaimer = () => {
  const sections = [
    {
      icon: Scale,
      title: "Terms of Use",
      content: [
        "Welcome to New York Center for Spinal Disorders. Please read these Terms of Use carefully before using this site. By accessing or using this site, you agree to be bound by these Terms of Use.",
        "The provision of information and services through this site by New York Center for Spinal Disorders is subject to your agreement to the Terms of Use below."
      ]
    },
    {
      icon: ShieldAlert,
      title: "Use of Information",
      content: [
        "The New York Center for Spinal Disorders Web Site is intended to provide educational information for physicians, other health providers, and members of the public to assist in understanding medical developments and medical knowledge in the broad field of musculoskeletal medicine. Use of this site does not establish a physician-patient relationship. The information provided in this New York Center for Spinal Disorders Web Site does not constitute medical or health care advice for any individual problem and is not a substitute for medical or other professional advice and services from a qualified health care provider familiar with a patient's unique facts. Patients or individuals with other health concerns should always consult their health care providers for any health problem or medical condition, and/or prior to starting any new treatment. Physicians and other health care providers are advised to seek confirmatory information from other sources before applying principles or other information described on this site.",
        "While New York Center for Spinal Disorders seeks to keep this web site up-to-date, medical treatment and knowledge change quickly and this site should not be considered as error-free or as a comprehensive source of all information on a particular topic. It is your responsibility to evaluate the information on this web site, together with your qualified health care professional. Discussion of the use of medication or other treatment on this site does not imply endorsement or recommendation by New York Center for Spinal Disorders of any such medication or treatment.",
        "New York Center for Spinal Disorders assumes no responsibility for any consequence relating directly or indirectly to any action or inaction you take based on the information, services or other material on this site. Your use of this site is subject to the additional disclaimers and caveats that may appear throughout these Terms of Use and the New York Center for Spinal Disorders Web Site."
      ]
    },
    {
      icon: LinkIcon,
      title: "Links to Other Sites",
      content: [
        "Links to other sites are provided for informational purposes and do not constitute endorsements or recommendations by New York Center for Spinal Disorders of those sites, or the information, materials, products or services contained on or accessible through the sites. Users' access and use of such sites, including information, material, products and services on those sites, is solely at the risk of the users. The New York Center for Spinal Disorders is not responsible for information provided on any site to which it is linked."
      ]
    },
    {
      icon: FileWarning,
      title: "Author’s Disclaimer",
      content: [
        "Contributors to this publication are required to fully disclose any financial benefits, equity interest or royalties that they or their immediate family members have received from the commercial entities, including the manufacturers, distributors or suppliers, of the services, products, procedures or drugs discussed in this publication in the twelve months preceding publication as well as during the work on this publication (including during the conduct of any research which is reported in the publication, even if such research was conducted more than a year prior to the publication). The contributors are further required to disclose any such financial interests they anticipate in the twelve months following the completion of the work on the publication."
      ]
    },
    {
      icon: Gavel,
      title: "Disclaimer of Warranty; Limitation of Liability",
      content: [
        "NEW YORK CENTER FOR SPINAL DISORDERS DISCLAIM ALL EXPRESS AND IMPLIED WARRANTIES WITH REGARD TO THE INFORMATION, SERVICES AND MATERIALS CONTAINED ON THIS SITE, INCLUDING, WITHOUT LIMITATION, ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. YOUR USE OF THIS SITE IS AT YOUR OWN RISK. ACCESS TO THIS SITE MAY BE INTERRUPTED AND INFORMATION, SERVICES AND MATERIALS MAY NOT BE ERROR-FREE.",
        "NEITHER NEW YORK CENTER FOR SPINAL DISORDERS NOR ANYONE ELSE INVOLVED IN CREATING, PRODUCING OR DELIVERING THIS SITE OR THE INFORMATION, SERVICES AND MATERIALS CONTAINED ON THIS SITE ASSUMES ANY LIABILITY OR RESPONSIBILITY FOR THE ACCURACY, COMPLETENESS OR USEFULNESS OF ANY INFORMATION, SERVICES AND MATERIALS PROVIDED ON THIS SITE, NOR SHALL THEY BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES ARISING OUT OF YOUR USE OF, OR INABILITY TO USE, THIS SITE. ALL INFORMATION, SERVICES AND MATERIALS ARE PROVIDED \"AS IS\" AND \"AS AVAILABLE\" WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED.",
        "IN NO EVENT, SHALL NEW YORK CENTER FOR SPINAL DISORDERS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES, OR ANY DAMAGES WHATSOEVER, RESULTING FROM THE USE OF, OR INABILITY TO USE, THE INFORMATION, SERVICES OR MATERIALS ON THIS SITE, WHETHER BASED ON BREACH OF CONTRACT, TORT (INCLUDING NEGLIGENCE), PRODUCT LIABILITY OR OTHERWISE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.",
        "BY USING THIS WEB SITE, YOU ACKNOWLEDGE AND AGREE THAT THE LIMITATIONS SET FORTH ABOVE ARE FUNDAMENTAL ELEMENTS OF THESE TERMS OF USE AND THIS SITE WOULD NOT BE PROVIDED TO YOU WITHOUT THOSE LIMITATIONS. SOME STATE LAWS REGARDING LIMITATION OF LIABILITY MIGHT APPLY."
      ]
    },
    {
      icon: Scale,
      title: "Indemnification",
      content: [
        "You agree to indemnify, defend and hold harmless New York Center for Spinal Disorders, and their suppliers from any liability, loss, claim and expense (including attorneys' fees) related to (i) your violation of this Terms of Use of this web site."
      ]
    },
    {
      icon: Gavel,
      title: "Miscellaneous; Applicable Law",
      content: [
        "These Terms of Use and the resolution of any dispute related to these Terms of Use or this web site shall be governed by and construed in accordance with the laws of New York, without giving effect to any principles of conflicts of law. Any legal action or proceeding between New York Center for Spinal Disorders, on one hand, and you, on the other, that are related to these Terms of Use shall be brought exclusively in a federal or state court of competent jurisdiction sitting in New York, New York and/or the Southern District of New York. The failure of New York Center for Spinal Disorders to insist upon strict enforcement of any provision of these Terms of Use shall not be construed as a waiver of any provision or right."
      ]
    },
    {
      icon: FileWarning,
      title: "Right to Change Terms of Use",
      content: [
        "New York Center for Spinal Disorders may, at any time and from time to time, change these Terms of Use. Any changes to these Terms of Use will be effective immediately upon posting of the changed Terms of Use on the New York Center for Spinal Disorders Web Site. You agree to review these Terms of Use periodically, and your use of this web site following any such change constitutes your agreement to follow and be bound by the revised Terms of Use."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Helmet>
        <title>Legal Disclaimer - New York Center for Spinal Disorders</title>
        <meta name="description" content="Read the legal disclaimer for the New York Center for Spinal Disorders. Understand the terms, use of information, and liability limitations for using our website and services." />
        <meta name="keywords" content="legal disclaimer, terms of use, medical information, New York Center for Spinal Disorders, Dr. Nathaniel Tindel, spine care, legal information, liability, website policy" />
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
      
      <div className="relative h-[30vh] bg-gradient-to-r from-[#003666] to-[#0062B1]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-[#003666] to-[#0062B1]" />
        </div>
        <div className="relative h-full max-w-6xl mx-auto px-4 flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Legal Disclaimer</h1>
            <p className="text-xl text-blue-100">
              Important information about the use of our website and services
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-8">
          {sections.map((section, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <div className="flex items-center gap-4 mb-4">
                <section.icon className="w-8 h-8 text-blue-600" />
                <h2 className="text-2xl font-bold text-blue-900">{section.title}</h2>
              </div>
              <div className="prose max-w-none">
                {section.content.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-gray-700 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}

          <div className="bg-red-50 rounded-2xl p-6 md:p-8 border-2 border-red-200">
            <h2 className="text-2xl font-bold text-red-600 mb-4">ATTENTION</h2>
            <p className="text-red-700 font-medium">
              Do not request an appointment online for emergency medical needs. If you are experiencing an emergency, please call 911.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LegalDisclaimer;
