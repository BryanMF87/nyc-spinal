import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const faqs = [
    {
      question: "Insurance – What should I know?",
      answer: "We are an out of network practice. Dr. Shah understands the importance of accessible care. To allow a concierge level of care to our patients we are an out-of-network practice. We will work with insurance carriers to ensure our patients can receive the exceptional orthopedic services they deserve. Please do not hesitate to call or contact us with any questions.\n\nWe are out of network with all insurance providers which means you get better service for a similar, if not the same, price as many in-network insurance plans. There are no hidden fees or costs and we want to make sure you have all the necessary information before making an appointment."
    },
    {
      question: "What does Dr. Shah treat?",
      answer: "Dr. Shah treats all ailments of the neck, midback and lower back. This included radiating pain, numbness or tingling down the arms and legs which can be causes by pinched nerves."
    },
    {
      question: "Do I need to come see Dr. Shah only if I need/want surgery?",
      answer: "No. The majority of patients dealing with spinal issues do not need surgery. It is important to see a spine specialist when dealing with neck and back issues. Dr. Shah will perform a comprehensive intake and exam, review imaging and any prior treatments. After which he will help formulate a comprehensive plan to get each one of his patients back to living a pain-free life."
    },
    {
      question: "What is Dr. Shah's approach to second opinions?",
      answer: "Dr. Shah recommends second and even third and fourth opinions before proceeding with surgery. There are many different options when considering spine surgery. Along with considering different surgical options, patients should feel comfortable with their surgeon as well. If indicated for surgery, Dr. Shah usually will recommend a second opinion with another surgery so his patients feel comfortable proceeding. If the patient required immediate surgery for neurologic issues, there may not be time for a second opinion and Dr. Shah will ensure properly communicate this with you."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 mt-4 mb-16">
      <h2 className="text-3xl font-bold text-blue-900 mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <button
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
            >
              <span className="text-lg font-semibold text-gray-800">{faq.question}</span>
              <ChevronDown
                className={`w-5 h-5 text-blue-900 transition-transform duration-200 ${
                  openIndex === index ? 'transform rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-200 ${
                openIndex === index ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <div className="p-6 bg-gray-50">
                {faq.answer.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="text-gray-700 leading-relaxed mb-4 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;