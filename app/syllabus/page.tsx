'use client';

import { useState } from 'react';

interface Subject {
  name: string;
  topics: string[];
}

interface Syllabus {
  category: 'NEET' | 'JEE';
  subjects: Subject[];
}

export default function Syllabus() {
  const [activeCategory, setActiveCategory] = useState<'JEE' | 'NEET'>('JEE');

  const pdfLinks = {
    JEE: 'https://drive.google.com/file/d/18TOGyymVnnvX7IxTp-L4MjniD6YIdFK1/preview',
    NEET: 'https://drive.google.com/file/d/1oJ4njVQRSGj9bX26PRhCVW5L5rmsGaR6/preview',
  };

  return (
    <div className="min-h-screen bg-cream-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Syllabus</h1>
          <p className="text-xl text-gray-700 mb-6">View the complete syllabus for JEE and NEET below.</p>
          <div className="inline-flex rounded-md shadow-sm mb-8">
            <button
              onClick={() => setActiveCategory('JEE')}
              className={`px-6 py-3 rounded-l-lg text-sm font-medium transition-all duration-200 ${activeCategory === 'JEE' ? 'bg-purple-600 text-white shadow-md' : 'bg-white text-gray-700 hover:bg-cream-100'}`}
            >
              JEE
            </button>
            <button
              onClick={() => setActiveCategory('NEET')}
              className={`px-6 py-3 rounded-r-lg text-sm font-medium transition-all duration-200 ${activeCategory === 'NEET' ? 'bg-purple-600 text-white shadow-md' : 'bg-white text-gray-700 hover:bg-cream-100'}`}
            >
              NEET
            </button>
          </div>
        </div>
        <div className="w-full h-[80vh] flex flex-col">
          <iframe
            src={pdfLinks[activeCategory]}
            title={`${activeCategory} Syllabus PDF`}
            className="w-full flex-1 min-h-[600px] border-none rounded-xl shadow"
            allow="autoplay"
          >
            This browser does not support PDFs. Please download the PDF to view it.
          </iframe>
        </div>
      </div>
    </div>
  );
} 