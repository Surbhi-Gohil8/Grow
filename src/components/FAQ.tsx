'use client';
import React, { useState } from "react";
import { CircleChevronRight } from "lucide-react"; 

const faqs = [
  {
    question: "Do you accept insurance?",
    answer: "No, but a superbill is provided for self-submission.",
  },
  {
    question: "Are online sessions available?",
    answer: "Yes—all virtual sessions via Zoom.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "24-hour notice required.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-serif text-center text-sky-900 mb-8">Frequently Asked Questions</h1>
      <h2 className="text-2xl text-sky-700 font-medium mb-6">Therapy</h2>
      <div className="divide-y divide-blue-200">
        {faqs.map((faq, index) => (
          <div key={index} className="py-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left focus:outline-none"
            >
              <div className="flex items-center space-x-2">
                <CircleChevronRight
                  className={`h-5 w-5 text-blue-400 transition-transform duration-300 ${
                    openIndex === index ? "rotate-90" : ""
                  }`}
                />
                <span className="text-blue-400 text-lg font-medium ">
                  {faq.question}
                </span>
              </div>
            </button>
            {openIndex === index && (
              <div className="mt-3 text-gray-600 text-base pl-7">{faq.answer}</div>
            )}
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
