import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Shield, User, Lock, Baby, Mail, Phone } from 'lucide-react';
import { Helmet } from 'react-helmet';

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: Shield,
      title: "Welcome to the New York Center for Spinal Disorders Website",
      content: `Maintaining the privacy of your information is of the highest importance to us. This Website Privacy Policy ("Privacy Policy") explains how New York Center for Spinal Disorders ("NYCSD," "we," or "us") collects, uses, discloses, and processes information in connection with this site, available at [insert website URL] (the "Site"). This Privacy Policy also applies to any other NYCSD or affiliated sites and mobile applications that display a link to this Privacy Policy. If you do not agree to the terms of this Privacy Policy, you should not use this Site. Your continued use of this Site constitutes your agreement to the terms of this Privacy Policy and our use of your information as described in it.`
    },
    {
      icon: User,
      title: "Purpose",
      content: `We are dedicated to protecting your privacy while accessing this Site. This Privacy Policy explains what information we collect, why we collect it, and how we use it. It also informs you of your rights regarding your personal information under applicable New York State and federal privacy laws. Please review it carefully.

When we refer to "personal information" in this Privacy Policy, we mean any identifiable information related to an individual as defined under applicable law, including the New York State Privacy Act and New York General Business Law § 899-AA (NY Shield Act).`
    },
    {
      icon: User,
      title: "Applicability",
      content: `This Privacy Policy applies only to the Sites that display a link to it. It does not apply to third-party websites, offline interactions, or any other websites or applications that do not reference this Privacy Policy.

This Privacy Policy does not apply to protected health information (PHI) governed by HIPAA. For details on how NYCSD uses and discloses PHI, please review our HIPAA Notice of Privacy Practices.

From time to time, we may feature third-party products or services on this Site. This Privacy Policy does not apply to information collected by such third-party sites or applications, which have independent privacy policies. We encourage you to review those policies to understand how third parties may collect and use your information.`
    },
    {
      icon: User,
      title: "Information We Collect and How We Collect It",
      content: `We collect and use information about you when you access and interact with this Site as described in this Privacy Policy. This Site collects different types of information through various methods, including:

1. Information Collected Automatically

When visiting this Site, we automatically collect information via cookies, pixels, third-party tracking technologies, and server logs. This may include:
• Your internet domain and IP address
• The pages or services you view or request access to
• The type of browser and operating system you use
• The date and time of your visit

We use this information to enhance your user experience, direct and tailor information based on your entry path to this Site, and improve accessibility. We may use Google Analytics or similar tools for this purpose, but not in a manner that collects or retains your personal or health-related information. By continuing to use this Site, you agree to our collection of this information.

For a list of third-party tools used on this Site, please contact us at the contact information below. We recommend reviewing third-party privacy policies for more details on how they use your data. NYCSD does not sell visitor information to third parties.

2. Information You Provide Voluntarily

We collect and use information that you voluntarily provide by interacting with this Site, such as when you:
• Submit your information to create or modify your account
• Contact us via this Site
• Communicate with us through this Site

This may include personal information, such as:
• Your name, email address, phone number, and zip code
• Your approximate location
• Your health provider information
• Any comments or feedback you provide

We use the information you provide to fulfill the services you request, respond to inquiries, and for the purposes outlined in the next section.`
    },
    {
      icon: User,
      title: "Why We Collect Information and How We Use It",
      content: `We collect, process, and use personal information for the following purposes:
• To provide services to you
• To enroll, register, and administer your account
• To improve this Site and better understand your needs
• To communicate with you, including responding to inquiries
• To maintain the quality, function, and security of this Site
• To send you surveys or request feedback (unless you opt out)
• To tailor your access to this Site based on your preferences
• To notify you of updates to our Terms and Privacy Policy
• To comply with New York State and federal legal obligations`
    },
    {
      icon: User,
      title: "Your Choices",
      content: `You have control over how your information is collected and used. You can manage cookies and tracking technologies through your web browser settings. Please note that disabling certain tools may affect the functionality of this Site.`
    },
    {
      icon: User,
      title: "Information Retention",
      content: `We retain your personal information only as necessary to provide services to you and comply with legal and contractual obligations.

We may de-identify your information in accordance with applicable law, ensuring it is no longer personally identifiable. De-identified information is not subject to the retention requirements specified in this Privacy Policy.`
    },
    {
      icon: User,
      title: "Information Disclosure",
      content: `We do not sell your personal information. However, we may disclose your information in the following circumstances:
• To affiliates, business partners, or service providers when necessary for business operations
• To third-party vendors for technical and administrative support
• To regulatory agencies, law enforcement, or legal authorities as required by law
• In the event of a business acquisition or merger, where your information may be transferred

We ensure that appropriate security safeguards are in place when sharing information with third parties.`
    },
    {
      icon: Lock,
      title: "Security Measures",
      content: `We implement strict security measures to protect your information. However, transmitting information over the internet presents security risks. We recommend:
• Using strong passwords and keeping them confidential
• Accessing this Site from a secure network
• Not sending personal information or PHI via email or text, as these methods are insecure

If you believe your account has been compromised, notify us immediately.`
    },
    {
      icon: User,
      title: "New York State Law Compliance",
      content: `NYCSD complies with New York State privacy laws, including:
• New York State Privacy Act
• NY General Business Law § 899-AA (NY Shield Act) – Governing data security and breach notification

New York residents may have additional rights regarding their personal data. For questions, please contact us at the information below.`
    },
    {
      icon: Baby,
      title: "Children’s Online Privacy Protection Act (COPPA)",
      content: `This Site is not intended for children under the age of 13. If you believe a child has provided us with information, please contact us immediately.`
    },
    {
      icon: User,
      title: "Unsubscribing",
      content: `You may unsubscribe from email, text messaging, or newsletters by following the opt-out instructions in the communication or contacting us.`
    },
    {
      icon: User,
      title: "Updates & Questions",
      content: `We may update this Privacy Policy periodically. Updates will be posted on this Site. Continued use of this Site constitutes acceptance of the updated Privacy Policy.

For questions, contact us at:
New York Center for Spinal Disorders
Attn: Privacy Officer
425 East 79th Street, Suite 1H
New York, NY 10075
Email: compliance@spine-nyc.com
Phone: (212) 249-3840

________________________________________
This Privacy Policy was last updated on March 12, 2025.`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Helmet>
        <title>Privacy Policy - New York Center for Spinal Disorders</title>
        <meta
          name="description"
          content="Review our Privacy Policy to learn how the New York Center for Spinal Disorders collects, uses, and protects your personal information."
        />
        <meta
          name="keywords"
          content="Privacy Policy, personal information, data protection, New York Center for Spinal Disorders, data security, children's privacy"
        />
        <meta name="author" content="Dr. Nathaniel Tindel" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="New York Center for Spinal Disorders - Treating Scoliosis" />
        <meta
          property="og:description"
          content="Founded by Dr. Tindel, the New York Center for Spinal Disorders treats adults and teens for scoliosis, herniated discs, back pain, and more spine conditions."
        />
        <meta property="og:image" content="/images/logo-header.png" />
        <meta property="og:url" content="https://www.nycspinaldisorders.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="New York Center for Spinal Disorders - Treating Scoliosis" />
        <meta
          name="twitter:description"
          content="Founded by Dr. Tindel, the New York Center for Spinal Disorders treats adults and teens for scoliosis, herniated discs, back pain, and more spine conditions."
        />
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
            <p className="text-xl text-blue-100">
              Protecting your personal information is our priority
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-12">
          {sections.map((section, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <div className="flex items-center gap-4 mb-4">
                <section.icon className="w-8 h-8 text-blue-600" />
                <h2 className="text-2xl font-bold text-blue-900">
                  {section.title}
                </h2>
              </div>
              <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
