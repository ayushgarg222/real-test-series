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