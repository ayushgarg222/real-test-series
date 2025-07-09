import Link from 'next/link';

export default function Info() {
  return (
    <div className="min-h-screen bg-cream-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Real Test Series
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Right Evaluation and Assessment for Learning - Your comprehensive preparation partner
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* What is Real Test Series */}
          <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              What is Real Test Series?
            </h2>
            <p className="text-gray-700 mb-6">
              Real Test Series is designed to help you practice like the actual exam days, ensuring you are:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                Mentally prepared for the exam environment
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                Physically comfortable with the exam duration
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                Strategically equipped to handle the exam pressure
              </li>
            </ul>
          </div>

          {/* What You Get */}
          <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              What You Get
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                Full syllabus test papers with real exam level difficulty
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                Both online and offline test modes
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                Admit cards for offline tests
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                Center settings with proper invigilation
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                Experience similar to the actual exam environment
              </li>
            </ul>
          </div>

          {/* How to Attempt */}
          <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              How to Attempt a Real Test
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  1. Test Mode
                </h3>
                <p className="text-gray-700">
                  Choose between online and offline modes. Online tests can be taken from home using the student portal, while offline tests require visiting the designated center.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  2. Admit Card
                </h3>
                <p className="text-gray-700">
                  For offline tests, download your admit card 3 days before the test from your My Documents portal.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  3. Checklist
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Bring your admit card</li>
                  <li>• Carry valid ID proof</li>
                  <li>• Arrive 30 minutes before the test</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Why Choose Real Test Series?
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Build Confidence
                </h3>
                <p className="text-gray-700">
                  Regular practice with our tests helps reduce anxiety on the actual exam day.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Develop Discipline
                </h3>
                <p className="text-gray-700">
                  Learn to manage time effectively and maintain focus throughout the exam duration.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Build Test-Taking Stamina
                </h3>
                <p className="text-gray-700">
                  Regular practice helps you develop the endurance needed for long-duration exams.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Link
            href="/register"
            className="inline-block bg-[#5C3BFE] text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-[#4b2fd6] transition-colors duration-200 shadow-md"
          >
            Start Your Journey
          </Link>
        </div>
      </div>
    </div>
  );
} 