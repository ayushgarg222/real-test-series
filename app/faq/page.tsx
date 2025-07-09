/* eslint-disable react/no-unescaped-entities */
'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      category: 'Registration & Access',
      question: 'Do I need to register for every test separately?',
      answer: 'No! One-time registration gives you access to the entire test series — both online and offline tests.',
    },
    {
      category: 'Registration & Access',
      question: 'I missed the registration deadline. Can I still join?',
      answer: 'If the series is ongoing, late registration is allowed for upcoming tests. Keep checking the official link or announcements on your portal.',
    },
    {
      category: 'Test Format & Mode',
      question: 'Will the test be online or offline?',
      answer: 'Some tests are online, others offline. Always check your test schedule and admit card for the correct mode.',
    },
    {
      category: 'Test Format & Mode',
      question: 'Where is my exam center?',
      answer: 'Your exam center details will be on the admit card, which is released around 3 days before the test.',
    },
    {
      category: 'Test Format & Mode',
      question: 'Can I change my test mode from offline to online (or vice versa)?',
      answer: 'Test mode cannot be changed.',
    },
    {
      category: 'Exam Day',
      question: 'How early should I reach the exam center?',
      answer: 'At least 30 minutes before the reporting time to avoid any last-minute rush.',
    },
    {
      category: 'After the Test',
      question: 'When will I get my results?',
      answer: 'Results are usually available within a few days for online and for NEET offline it will take about 2 week+.',
    },
    {
      category: 'After the Test',
      question: 'Will I get an All India Rank (AIR)?',
      answer: "Yes! You'll receive AIR for each test that you will take on the scheduled exam day based on overall performance.",
    },
    {
      category: 'After the Test',
      question: 'What if I miss a test?',
      answer: 'No problem. You can take the test online. You can still access the question paper, solutions, and analysis later to practice.',
    },
    {
      category: 'Test Experience & Quality',
      question: 'Is the paper difficulty the same as actual competitive exams?',
      answer: "Yes! The tests are designed to closely match the difficulty, pattern, and pressure of real entrance exams. But we also keep in mind the capability of all students — our goal is not to demotivate anyone, but to help you grow, learn, and improve with every attempt. Think of it as a smart practice ground, not a judgment!",
    },
    {
      category: 'Test Experience & Quality',
      question: 'Will invigilators be present in offline tests?',
      answer: 'Yes, offline exams follow a proper exam-day protocol with invigilation and discipline.',
    },
  ];

  const categories = ['all', ...new Set(faqs.map((faq) => faq.category))];

  const filteredFaqs = activeCategory === 'all'
    ? faqs
    : faqs.filter((faq) => faq.category === activeCategory);

  return (
    <div className="min-h-screen bg-cream-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-700">
            Find answers to common questions about Real Test Series
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                activeCategory === category
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-whiteborder border-gray-200'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200"
            >
              <button
                className="w-full px-6 py-4 text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-gray-900">
                    {faq.question}
                  </h3>
                  <span className="ml-6 flex-shrink-0">
                    <svg
                      className={`h-6 w-6 transform transition-transform duration-200 text-gray-400 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="mt-12 text-center">
          <p className="text-gray-700 mb-4">
            Still have questions? We're here to help!
          </p>
          <a
            href="mailto:support@pw.live"
            className="inline-block bg-[#5C3BFE] text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-[#4b2fd6] transition-colors duration-200 shadow-md"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
} 