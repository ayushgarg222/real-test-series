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
  const [activeCategory, setActiveCategory] = useState<'NEET' | 'JEE'>('NEET');

  const syllabi: Syllabus[] = [
    {
      category: 'NEET',
      subjects: [
        {
          name: 'Physics',
          topics: [
            'Physical World and Measurement',
            'Kinematics',
            'Laws of Motion',
            'Work, Energy and Power',
            'Motion of System of Particles and Rigid Body',
            'Gravitation',
            'Properties of Bulk Matter',
            'Thermodynamics',
            'Behaviour of Perfect Gas and Kinetic Theory',
            'Oscillations and Waves',
            'Electrostatics',
            'Current Electricity',
            'Magnetic Effects of Current and Magnetism',
            'Electromagnetic Induction and Alternating Currents',
            'Electromagnetic Waves',
            'Optics',
            'Dual Nature of Matter and Radiation',
            'Atoms and Nuclei',
            'Electronic Devices',
          ],
        },
        {
          name: 'Chemistry',
          topics: [
            'Some Basic Concepts of Chemistry',
            'States of Matter',
            'Atomic Structure',
            'Chemical Bonding and Molecular Structure',
            'Chemical Thermodynamics',
            'Solutions',
            'Equilibrium',
            'Redox Reactions and Electrochemistry',
            'Chemical Kinetics',
            'Surface Chemistry',
            'Classification of Elements and Periodicity in Properties',
            'General Principles and Processes of Isolation of Metals',
            'Hydrogen',
            'S-Block Elements',
            'P-Block Elements',
            'D and F Block Elements',
            'Coordination Compounds',
            'Environmental Chemistry',
            'Organic Compounds',
            'Basic Principles and Techniques',
            'Hydrocarbons',
            'Organic Compounds Containing Halogens',
            'Organic Compounds Containing Oxygen',
            'Organic Compounds Containing Nitrogen',
            'Biomolecules',
            'Polymers',
            'Chemistry in Everyday Life',
          ],
        },
        {
          name: 'Biology',
          topics: [
            'Diversity in Living World',
            'Structural Organisation in Animals and Plants',
            'Cell Structure and Function',
            'Plant Physiology',
            'Human Physiology',
            'Reproduction',
            'Genetics and Evolution',
            'Biology and Human Welfare',
            'Biotechnology and Its Applications',
            'Ecology and Environment',
          ],
        },
      ],
    },
    {
      category: 'JEE',
      subjects: [
        {
          name: 'Physics',
          topics: [
            'Physics and Measurement',
            'Kinematics',
            'Laws of Motion',
            'Work, Energy and Power',
            'Rotational Motion',
            'Gravitation',
            'Properties of Solids and Liquids',
            'Thermodynamics',
            'Kinetic Theory of Gases',
            'Oscillations and Waves',
            'Electrostatics',
            'Current Electricity',
            'Magnetic Effects of Current and Magnetism',
            'Electromagnetic Induction and Alternating Currents',
            'Electromagnetic Waves',
            'Optics',
            'Dual Nature of Matter and Radiation',
            'Atoms and Nuclei',
            'Electronic Devices',
            'Communication Systems',
          ],
        },
        {
          name: 'Chemistry',
          topics: [
            'Physical Chemistry',
            'Some Basic Concepts in Chemistry',
            'States of Matter',
            'Atomic Structure',
            'Chemical Bonding and Molecular Structure',
            'Chemical Thermodynamics',
            'Solutions',
            'Equilibrium',
            'Redox Reactions and Electrochemistry',
            'Chemical Kinetics',
            'Surface Chemistry',
            'Inorganic Chemistry',
            'Classification of Elements and Periodicity in Properties',
            'General Principles and Processes of Isolation of Metals',
            'Hydrogen',
            'S-Block Elements',
            'P-Block Elements',
            'D and F Block Elements',
            'Coordination Compounds',
            'Environmental Chemistry',
            'Organic Chemistry',
            'Purification and Characterisation of Organic Compounds',
            'Some Basic Principles of Organic Chemistry',
            'Hydrocarbons',
            'Organic Compounds Containing Halogens',
            'Organic Compounds Containing Oxygen',
            'Organic Compounds Containing Nitrogen',
            'Polymers',
            'Biomolecules',
            'Chemistry in Everyday Life',
            'Principles Related to Practical Chemistry',
          ],
        },
        {
          name: 'Mathematics',
          topics: [
            'Sets, Relations and Functions',
            'Complex Numbers and Quadratic Equations',
            'Matrices and Determinants',
            'Permutations and Combinations',
            'Mathematical Induction',
            'Binomial Theorem and its Simple Applications',
            'Sequences and Series',
            'Limit, Continuity and Differentiability',
            'Integral Calculus',
            'Differential Equations',
            'Coordinate Geometry',
            'Three Dimensional Geometry',
            'Vector Algebra',
            'Statistics and Probability',
            'Trigonometry',
            'Mathematical Reasoning',
          ],
        },
      ],
    },
  ];

  const currentSyllabus = syllabi.find((s) => s.category === activeCategory);

  return (
    <div className="min-h-screen bg-cream-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Syllabus
          </h1>
          <p className="text-xl text-gray-700">
            Comprehensive syllabus coverage for {activeCategory} preparation
          </p>
        </div>

        {/* Category Selector */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm">
            <button
              onClick={() => setActiveCategory('NEET')}
              className={`px-6 py-3 rounded-l-lg text-sm font-medium transition-all duration-200
                ${
                  activeCategory === 'NEET'
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-cream-100'
                }`}
            >
              NEET
            </button>
            <button
              onClick={() => setActiveCategory('JEE')}
              className={`px-6 py-3 rounded-r-lg text-sm font-medium transition-all duration-200
                ${
                  activeCategory === 'JEE'
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-cream-100'
                }`}
            >
              JEE
            </button>
          </div>
        </div>

        {/* Syllabus Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentSyllabus?.subjects.map((subject) => (
            <div
              key={subject.name}
              className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden"
            >
              <div className="px-6 py-4 bg-cream-100 border-b border-gray-200">
                <h2 className="text-xl font-bold text-purple-700">{subject.name}</h2>
              </div>
              <div className="p-6">
                <ul className="list-disc list-inside space-y-2">
                  {subject.topics.map((topic) => (
                    <li key={topic} className="text-gray-700">
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Note: This syllabus is based on the latest exam pattern and may be updated periodically.
            Please check the official website for any changes.
          </p>
        </div>
      </div>
    </div>
  );
} 