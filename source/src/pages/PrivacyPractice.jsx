import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';
import { Shield, User, Lock, Baby, Mail, Phone } from 'lucide-react';

const PrivacyPractice = () => {
  const sections = [
    {
      icon: Shield,
      title: "NOTICE OF PRIVACY PRACTICES",
      content: `THIS NOTICE DESCRIBES HOW MEDICAL INFORMATION ABOUT YOU MAY BE USED AND DISCLOSED AND HOW YOU CAN GET ACCESS TO THIS INFORMATION. PLEASE REVIEW IT CAREFULLY.`
    },
    {
      icon: User,
      title: "Our commitment to your privacy",
      content: `This Notice applies to the entities listed at the bottom of this Notice, and each of their affiliates or subsidiaries that are health care providers and HIPAA covered entities, including the entities listed at the bottom of this Notice (collectively the “Practice,” “we,” or “us”). We are dedicated to maintaining the privacy of your medical information. We are required by law to maintain the confidentiality of your medical information, provide you with this Notice of our legal duties and the privacy practices that we maintain concerning your medical information, and to notify you of a breach of your unsecured medical information. We are required to follow the terms of this Notice that are in effect at the time.`
    },
    {
      icon: User,
      title: "Applicability & changes to this Notice",
      content: `This Notice applies to records containing your medical information that are created or retained by us. This Notice will be followed by all health care professionals, employees, medical staff, and other individuals providing services at the Practice. We reserve the right to revise or amend this Notice. Any revision or amendment to this Notice will apply to all of your medical records that we have created or maintained in the past, and for any of your records that we may create or maintain in the future. We will post a current copy of this Notice on our website. You may also request a copy of the current Notice at any time by reaching out to us at the contact information provided below.`
    },
    {
      icon: User,
      title: "Your rights",
      content: `When it comes to your medical information, you have certain rights. This section explains your rights and the steps we will take to help you exercise those rights.

Right to inspection and copies
You have the right to get an electronic or paper copy of your medical and billing records (referred to collectively as “medical records”). This right does not include psychotherapy notes or health information that is not part of your designated record set. To obtain copies or request inspection of your medical records, you must submit your request in writing to the Privacy Officer, whose contact information is included at the end of this Notice (the “Privacy Officer”). We may charge a reasonable fee that will be in compliance with applicable law. We may deny your request in limited circumstances. If your request is denied, you may request a review of our denial.

Right to request an amendment
You can ask us to correct the medical information we maintain about you if you believe it is incorrect or incomplete. To request an amendment, your request must be made in writing and submitted to the Privacy Officer, whose contact information is included at the bottom of this Notice. Please provide us with a reason for your request and identify the records you would like amended. If we agree to your request, we will notify you and amend your medical information. In certain circumstances, we may deny your request. If your request is denied, we will inform you in writing and explain your rights. Please note that we cannot completely delete information contained in your medical records. Any change requested by you will appear as an addendum (amendment) to the existing medical records.

Right to an accounting
You can ask for a list (an accounting) of the times we shared your medical information for six years prior to the date of your request, who we shared it with, and why. Please note this accounting will not include disclosures made for treatment, payment, and health care operations, and certain other disclosures (such as any you asked us to make). We will provide one accounting a year for free but may charge a reasonable, cost-based fee if you ask for another one within 12 months. To request an accounting, submit your request in writing to the Privacy Officer, whose contact information is included at the bottom of this Notice.

Right to request restrictions
You can ask us not to use or share certain medical information for treatment, payment, or our operations. However, you should note that we are not required to agree to your request, and we may say “no” if it would affect your care. If we agree to your request, our agreement will be in writing, and we will comply with the restriction unless (i) the information is needed to provide you with emergency care or (ii) we are required or permitted by law to disclose it. If you pay in full for a service or health care item out-of-pocket, you can ask us not to share that information for the purpose of payment or our operations with your health insurer. We will agree to this request unless a law requires us to share that information.

Right to confidential communications
You can ask us to contact you in a specific way (for example, only home or office phone) or to send communications to you at an alternative address. We will agree to all reasonable requests. To request confidential communications, you must make a written request to our Privacy Officer specifying the requested method of contact for billing purposes, or the location where you wish to be contacted. You do not need to give a reason for your request.

Right to a paper copy of this Notice
You are entitled to receive a paper copy of this Notice at any time, even if you agreed to receive the Notice electronically. We will provide you with a paper copy promptly upon receipt of a request from you.

Right to file a complaint
If you believe your privacy rights have been violated, you may file a complaint with us by contacting our Privacy Officer. All complaints must be submitted in writing. You also have the right to file a complaint with the Secretary of the Department of Health and Human Services, Office for Civil Rights. We will not retaliate against you for filing a complaint.

Right to a personal representative
If you have given someone medical power of attorney or if someone is your legal guardian, that person (a “Personal Representative”) can exercise your rights under this Notice and make choices about your medical information. We will take steps to verify a Personal Representative’s authority to act before we take action in response to a request from a Personal Representative. Please note that there are some limited situations under State Law where prior authorization of a minor patient is required before certain actions related to their medical information can be taken. We comply with applicable State Laws in this regard, when applicable.`
    },
    {
      icon: User,
      title: "Your choices",
      content: `In some cases, you can decide what medical information we share, and who we share it with.

Family members & friends
We may disclose your medical information to individuals who you have chosen to involve in your medical care unless you object to such a disclosure. If you are not able/available to tell us your preference for disclosing your medical information with others involved in your care, we may go ahead and share the information if we believe in our professional judgment that it is in your best interest. We may also share your information when needed to lessen a serious and imminent threat to health or safety.

Disaster relief
Subject to any additional state law requirements, in the event of a disaster, we may disclose your medical information to organizations assisting in disaster relief efforts unless you tell us not to, and that decision will not interfere with our ability to respond in emergency circumstances.

Disclosures requiring your authorization
Other uses and disclosures of your medical information require your prior written authorization. For example, we will never sell or use your medical information for marketing purposes without your prior written authorization. Most uses and disclosures of psychotherapy notes also require your prior written authorization. You have the right to revoke your written authorization at any time by notifying us in writing. Upon receipt of a revocation from you, we will no longer use or disclose your medical information based on the authorization. However, your revocation will not apply to uses and disclosures already made prior to receipt of your revocation.

Fundraising
We may contact you for fundraising efforts, but you will be given an opportunity to opt-out of further fundraising communications.`
    },
    {
      icon: Lock,
      title: "Permissible uses & disclosures",
      content: `We may use or share your medical information in the following ways, without your prior authorization.

Treatment
We may use your medical information as needed to provide you with treatment. For example, we may use and disclose your medical information to order laboratory tests or prescriptions, to assist other health care providers in their treatment of you, or to inform you of potential treatment alternatives or programs.

Payment
We may use and disclose your medical information to bill and collect payment for the services and items provided by us. For example, we may share your medical information with your health insurance plan so it will pay for the services provided to you. We may also share your medical information with other health care providers to assist in their billing and collection efforts.

Health care operations
We may use and disclose your medical information to operate our practice, improve your care, and contact you when necessary. For example, we may use or disclose your medical information to evaluate the quality of care you received from us or to conduct cost-management and business planning activities. In some circumstances, we may also share medical information with other health care providers for their health care operations, subject to any requirements under State Law.

Health information exchanges
We may participate in one or more Health information exchanges (HIE). HIEs allow health care entities participating in the same HIE to quickly share medical information as necessary to support timely care coordination and quality health care. For example, your medical information related to a recent hospital visit may be shared via a HIE with us so that we can promptly coordinate necessary follow-up treatment with you. If we participate in a HIE, we will follow applicable state laws related to HIE consent or opt out requirements, as applicable.

Research
We may use or share your information for research purposes. However, we must meet many conditions under applicable law before we can share your information for research purposes.`
    },
    {
      icon: User,
      title: "Other uses & disclosures",
      content: `Public health & safety
Subject to certain conditions, we can share your medical information for the following purposes:

• Preventing disease
• Helping with product recalls
• Reporting adverse reactions
• Reporting suspected abuse or neglect
• Preventing or reducing a serious threat to health or safety

Compliance with law
We will share your medical information if state or federal laws require it, including with the Department of Health and Human Services for the purpose of confirming our compliance with federal privacy laws.

Organ & tissue donation requests
Subject to any additional requirements under State Law, we can share your medical information with organ procurement organizations.

Medical examiners & funeral directors
We can share medical information with a coroner, medical examiner, or funeral director in the event of death. We will comply with any additional requirements under State Laws in effect at the time, if any.

Workers’ compensation
We may release your medical information for workers’ compensation and similar programs subject to the requirements of State Law.

Law enforcement & other government requests
We may share medical information for law enforcement purposes or with law enforcement officials when permitted by law. We may also share medical information with health oversight agencies for activities authorized by law, and for special government functions such as military, national security, and presidential protective services.

Court orders & subpoenas
We can share your medical information in response to a court or administrative order, or in response to a subpoena. We will comply with applicable laws in effect at the time when making such disclosures.`
    },
    {
      icon: Baby,
      title: "Standard electronic communications not secure",
      content: `Using any form of unsecure electronic communication (such as regular email or standard text messaging) to communicate with us can present risks to the security of information. These risks include possible interception of the information by unauthorized parties, misdirected messages, shared accounts, message forwarding, or storage of the information on unsecured platforms and/or devices. We do not recommend communicating with us via unsecured email or text message when your medical information or other personal information is involved. We provide multiple platforms that can be used by you to communicate with us via secure electronic messaging platforms. However, you should note that the use of any form of electronic messaging is not appropriate for medical emergencies.

If you provide us with an email address or mobile phone number, we may communicate with you using unsecured text or email related to general information, updates to your account and patient portal, or other reminders. You will be provided with an opportunity to opt out of these communications and may also opt out at any time by notifying us at the contact information included below. Please note, however, that systems can take time to apply updates (in which case please disregard any further communications until the system applies your requested change). We recognize that there may also be times when you choose to communicate with us using unsecure email or standard text messaging for convenience purposes. By choosing to correspond with us via unsecure electronic communication platforms, you are acknowledging and accepting the risks involved and understand that you are responsible for any charges applied by your telecommunications carrier.`
    },
    {
      icon: Mail,
      title: "Questions & concerns",
      content: `If you have any questions about this Notice or would like to notify us of a privacy concern, please contact:

New York Center for Spinal Disorders
Attn: Privacy Officer
425 East 79th Street, Suite 1H
New York, NY 10075
Email: compliance@spine-nyc.com
Phone: (212) 249-3840

UPDATED: 03/12/2025`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Helmet>
        <title>Notice of Privacy Practices - New York Center for Spinal Disorders</title>
        <meta
          name="description"
          content="Read our Notice of Privacy Practices to understand how your medical information may be used and disclosed."
        />
        <meta
          name="keywords"
          content="HIPAA, Notice of Privacy Practices, medical information, patient data, New York Center for Spinal Disorders, data security"
        />
        <meta name="author" content="Dr. Nathaniel Tindel" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="New York Center for Spinal Disorders - Notice of Privacy Practices" />
        <meta
          property="og:description"
          content="Understand how your medical information is used, disclosed, and protected under the HIPAA Notice of Privacy Practices at New York Center for Spinal Disorders."
        />
        <meta property="og:image" content="/images/logo-header.png" />
        <meta property="og:url" content="https://www.nycspinaldisorders.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="New York Center for Spinal Disorders - Notice of Privacy Practices" />
        <meta
          name="twitter:description"
          content="Learn about our HIPAA Notice of Privacy Practices and how we keep your medical information safe."
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Notice of Privacy Practices
            </h1>
            <p className="text-xl text-blue-100">
              How your medical information may be used and disclosed
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-12">
          {sections.map((section, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
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

export default PrivacyPractice;
