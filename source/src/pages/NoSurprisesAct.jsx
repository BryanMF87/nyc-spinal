import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';
import { Shield } from 'lucide-react';

const NoSurprisesAct = () => {
  const sections = [
    {
      icon: Shield,
      title: "No Surprises Act and Good Faith Estimate",
      content: `Right to a Good Faith Estimate

Beginning January 1, 2022, patients have the right to receive an estimate of the cost of services they will receive during a procedure or surgery. This estimate is called a "Good Faith Estimate" and is part of the No Surprises Act, which aims to protect you from unexpected bills when receiving care from out-of-network providers at in-network facilities. These protections are part of the Consolidated Appropriations Act of 2021.`
    },
    {
      icon: Shield,
      title: "Good Faith Estimate for Healthcare Services",
      content: `You have the right to receive a Good Faith Estimate that explains how much your healthcare will cost. Healthcare providers, including The New York Center for Spinal Disorders, are required by law to provide you with an estimate of your bill before the items or services are provided, if you do not have certain types of health coverage or if you're not using certain types of coverage.

You are entitled to a Good Faith Estimate for the total expected cost of any healthcare services upon request or when scheduling such items or services. This includes related costs such as medical tests, prescription drugs, equipment, and hospital fees.

• If you schedule healthcare services at least 3 business days in advance, you should receive a Good Faith Estimate in writing within 1 business day after scheduling.
• If you schedule healthcare services at least 10 business days in advance, you should receive a Good Faith Estimate in writing within 3 business days after scheduling.

You can also ask for a Good Faith Estimate before scheduling services. In this case, the healthcare provider or facility must provide the estimate in writing within 3 business days after you ask.

If you receive a bill that is at least $400 more than the Good Faith Estimate you were provided, you can dispute the bill. Make sure to save a copy or photo of your Good Faith Estimate and the bill.`
    },
    {
      icon: Shield,
      title: "What is “Balance Billing” (also known as “Surprise Billing”)?",
      content: `Balance billing occurs when you are billed for the difference between what your health plan agreed to pay and the amount charged by an out-of-network provider. This is sometimes referred to as “surprise billing” when it happens unexpectedly.

• Out-of-network describes providers and facilities that have not signed a contract with your health plan. If you visit an out-of-network provider, they may bill you for the difference between what your insurance paid and the full cost of the service. This amount may be higher than the in-network cost for the same service and may not count toward your annual out-of-pocket limit.`
    },
    {
      icon: Shield,
      title: "Your Rights and Protections Against Surprise Medical Bills",
      content: `When you receive emergency care or are treated by an out-of-network provider at an in-network hospital or ambulatory surgical center, you are protected from balance billing. In these cases, you should not be charged more than your plan’s copayments, coinsurance, and/or deductible.

• Emergency Services: If you receive emergency services from an out-of-network provider or facility, the most the provider or facility may bill you is your plan’s in-network cost-sharing amount (such as copayments and coinsurance). You cannot be balance billed for emergency services. This also applies to services you may receive after your condition is stabilized, unless you give written consent to waive this protection.

• Certain Services at In-Network Facilities: If you receive services at an in-network hospital or ambulatory surgical center, certain providers may be out-of-network (such as emergency medicine, anesthesia, pathology, radiology, laboratory, neonatology, assistant surgeon, hospitalist, or intensivist services). These providers cannot balance bill you and may not ask you to waive your protections.

You are never required to give up your protection from balance billing and are not required to receive care from out-of-network providers. You can always choose a provider or facility within your plan’s network.`
    },
    {
      icon: Shield,
      title: "When Balance Billing Is Not Allowed, You Have Additional Protections:",
      content: `• You are only responsible for paying your share of the cost (such as copayments, coinsurance, and deductibles) that you would pay if the provider or facility was in-network.
• Your health plan will pay the out-of-network providers and facilities directly.
• Your health plan must:
  o Cover emergency services without requiring prior authorization.
  o Cover emergency services by out-of-network providers.
  o Base your cost-sharing on what the plan would pay an in-network provider and show this amount in your explanation of benefits.
  o Count payments made toward your deductible and out-of-pocket limit for emergency services or out-of-network services.`
    },
    {
      icon: Shield,
      title: "New York State Laws",
      content: `In addition to federal protections under the No Surprises Act, New York State provides additional protections for patients against surprise medical bills. Under New York law, if you receive emergency care or are treated by an out-of-network provider at an in-network facility, you are protected from balance billing. This includes services such as emergency medicine, radiology, anesthesia, pathology, and certain surgical services.

Under New York law, health insurance companies are also required to provide in-network benefits for certain out-of-network services if you receive them in an in-network facility. This protects you from balance billing for these services.

• New York State law also prohibits out-of-network providers from balance billing patients in these circumstances, and you are only required to pay your in-network cost-sharing amounts (such as copayments, coinsurance, and deductibles).
• The state ensures that out-of-network providers are paid directly by the insurance company based on the amount they would pay an in-network provider for similar services.

If you believe you have been wrongly billed or that your rights under New York State law have been violated, you can contact the New York State Department of Financial Services at (800) 342-3736 or visit www.dfs.ny.gov for more information.`
    },
    {
      icon: Shield,
      title: "More Information",
      content: `For more information about your rights under the No Surprises Act or to file a complaint, visit www.cms.gov/nosurprises/consumers, email FederalPPDRQuestions@cms.hhs.gov, or call (800) 985-3059.

https://www.cms.gov/files/document/model-disclosure-notice-patient-protections-against-surprise-billing-providers-facilities-health.pdf`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Helmet>
        <title>No Surprises Act - New York Center for Spinal Disorders</title>
        <meta
          name="description"
          content="Review our No Surprises Act policies, including the right to a Good Faith Estimate and protections against balance billing."
        />
        <meta
          name="keywords"
          content="No Surprises Act, Good Faith Estimate, balance billing, out-of-network, New York Center for Spinal Disorders"
        />
        <meta name="author" content="Dr. Nathaniel Tindel" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="New York Center for Spinal Disorders - No Surprises Act" />
        <meta
          property="og:description"
          content="Learn about the No Surprises Act and how we protect you from unexpected medical bills and provide Good Faith Estimates."
        />
        <meta property="og:image" content="/images/logo-header.png" />
        <meta property="og:url" content="https://www.nycspinaldisorders.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="New York Center for Spinal Disorders - No Surprises Act" />
        <meta
          name="twitter:description"
          content="See details about the No Surprises Act, Good Faith Estimates, and protections against surprise billing."
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
              No Surprises Act
            </h1>
            <p className="text-xl text-blue-100">
              Protecting you from unexpected medical bills
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-12">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 md:p-8"
            >
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

export default NoSurprisesAct;
