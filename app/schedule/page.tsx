'use client';

import { useState } from 'react';

interface TestSchedule {
  id: number;
  date: string;
  title: string;
  mode: 'Online' | 'Offline';
  duration: string;
  category: 'NEET' | 'JEE';
  registrationDeadline: string;
}

export default function Schedule() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'NEET' | 'JEE'>('all');
  const [activeMode, setActiveMode] = useState<'all' | 'Online' | 'Offline'>('all');

  const schedules: TestSchedule[] = [
    {
      id: 1,
      date: '2025-01-15',
      title: 'Full Syllabus Test 1',
      mode: 'Online',
      duration: '3 hours',
      category: 'NEET',
      registrationDeadline: '2025-01-10',
    },
    {
      id: 2,
      date: '2025-01-22',
      title: 'Full Syllabus Test 2',
      mode: 'Offline',
      duration: '3 hours',
      category: 'NEET',
      registrationDeadline: '2025-01-17',
    },
    {
      id: 3,
      date: '2025-01-29',
      title: 'Full Syllabus Test 3',
      mode: 'Online',
      duration: '3 hours',
      category: 'JEE',
      registrationDeadline: '2025-01-24',
    },
    {
      id: 4,
      date: '2025-02-05',
      title: 'Full Syllabus Test 4',
      mode: 'Offline',
      duration: '3 hours',
      category: 'JEE',
      registrationDeadline: '2025-01-31',
    },
    // Add more test schedules as needed
  ];

  const filteredSchedules = schedules.filter((schedule) => {
    const categoryMatch = activeCategory === 'all' || schedule.category === activeCategory;
    const modeMatch = activeMode === 'all' || schedule.mode === activeMode;
    return categoryMatch && modeMatch;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-cream-50 pt-20">
      <div className="w-full h-[calc(100vh-5rem)] flex flex-col">
        <iframe
          src="https://drive.google.com/file/d/1YWqEx6gyg9FAcO09ncLwUYhzcSvy1OG8/preview"
          title="RTS Schedule PDF"
          className="w-full flex-1 min-h-[600px] border-none"
          allow="autoplay"
        >
          This browser does not support PDFs. Please download the PDF to view it: 
          <a href="https://drive.google.com/file/d/1YWqEx6gyg9FAcO09ncLwUYhzcSvy1OG8/view?usp=sharing" target="_blank" rel="noopener noreferrer">Download PDF</a>.
        </iframe>
      </div>
    </div>
  );
} 