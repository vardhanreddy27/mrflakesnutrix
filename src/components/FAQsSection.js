'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'Is there a free trial available?',
    answer:
      'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
  },
  {
    question: 'Can I change my plan later?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time from your account settings.',
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'You can cancel your subscription anytime—no hassle.',
  },
  {
    question: 'Can other info be added to an invoice?',
    answer: 'Yes, billing details like GSTIN, business name, etc., can be added under invoice settings.',
  },
  {
    question: 'How does billing work?',
    answer: 'Billing is monthly or annually based on your selected plan, and invoices are auto-emailed.',
  },
  {
    question: 'How do I change my account email?',
    answer: 'You can update your email under account settings, followed by a verification step.',
  },
];

export default function FAQsSection() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [query, setQuery] = useState('');

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className="bg-[#f8f9fc] py-20 px-6 w-full" id="faqs">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-serif font-semibold text-gray-900 mb-2">
          Frequently asked questions
        </h2>
        <p className="text-center text-gray-500 mb-8">Have questions? We’re here to help.</p>

        {/* Search Bar */}
        <div className="flex justify-center mb-10">
          <input
            type="text"
            placeholder="Search"
            className="w-full md:w-1/2 px-4 py-3 border border-gray-300 rounded-md shadow-sm"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        {/* FAQs */}
        <div className="bg-white rounded-xl shadow-md divide-y divide-gray-200">
          {filteredFaqs.map((item, index) => (
            <div key={index}>
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center py-5 px-4 text-left"
              >
                <span className="font-medium text-gray-900">{item.question}</span>
                <span className="text-2xl text-gray-400">
                  {activeIndex === index ? '−' : '+'}
                </span>
              </button>
              {activeIndex === index && (
                <div className="px-4 pb-5 text-gray-600 text-sm">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
