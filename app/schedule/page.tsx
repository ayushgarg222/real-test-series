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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Test Schedule
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Plan your preparation with our comprehensive test series
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="flex flex-wrap gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Category
              </label>
              <select
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value as 'all' | 'NEET' | 'JEE')}
                className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              >
                <option value="all">All Categories</option>
                <option value="NEET">NEET</option>
                <option value="JEE">JEE</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Mode
              </label>
              <select
                value={activeMode}
                onChange={(e) => setActiveMode(e.target.value as 'all' | 'Online' | 'Offline')}
                className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              >
                <option value="all">All Modes</option>
                <option value="Online">Online</option>
                <option value="Offline">Offline</option>
              </select>
            </div>
          </div>
        </div>

        {/* Schedule Table */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Test
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Mode
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Duration
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Registration Deadline
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {filteredSchedules.map((schedule) => (
                  <tr key={schedule.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                      {formatDate(schedule.date)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                      {schedule.title}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                      {schedule.category}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          schedule.mode === 'Online'
                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                            : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                        }`}
                      >
                        {schedule.mode}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                      {schedule.duration}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                      {formatDate(schedule.registrationDeadline)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Note */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            Note: All times are in Indian Standard Time (IST). Please check your admit card for exact reporting time.
          </p>
        </div>
      </div>
    </div>
  );
} 