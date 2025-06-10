'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Register() {
  const [formData, setFormData] = useState({
    candidateName: '',
    examSession: '',
    email: '',
    mobileNumber: '',
    gender: '',
    medium: '',
    category: '',
    class: '',
    captcha: '',
  });

  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      // Send OTP
      setStep(2);
    } else if (step === 2) {
      // Verify OTP and complete registration
      // Add your registration logic here
      console.log('Registration completed:', formData);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Create Your Account</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Join Real Test Series and start your journey to success
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {step === 1 ? (
              <>
                <div>
                  <label htmlFor="candidateName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Candidate Name
                  </label>
                  <input
                    type="text"
                    name="candidateName"
                    id="candidateName"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    value={formData.candidateName}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="examSession" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Exam Session
                  </label>
                  <select
                    name="examSession"
                    id="examSession"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    value={formData.examSession}
                    onChange={handleChange}
                  >
                    <option value="">Select Session</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    name="mobileNumber"
                    id="mobileNumber"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="gender" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Gender
                  </label>
                  <select
                    name="gender"
                    id="gender"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="medium" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Medium of Examination
                  </label>
                  <select
                    name="medium"
                    id="medium"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    value={formData.medium}
                    onChange={handleChange}
                  >
                    <option value="">Select Medium</option>
                    <option value="english">English</option>
                    <option value="hindi">Hindi</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Category
                  </label>
                  <select
                    name="category"
                    id="category"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    value={formData.category}
                    onChange={handleChange}
                  >
                    <option value="">Select Category</option>
                    <option value="neet">NEET</option>
                    <option value="jee">JEE</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="class" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Class
                  </label>
                  <select
                    name="class"
                    id="class"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    value={formData.class}
                    onChange={handleChange}
                  >
                    <option value="">Select Class</option>
                    <option value="11th">11th</option>
                    <option value="12th">12th</option>
                    <option value="dropper">Dropper</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="captcha" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Captcha
                  </label>
                  <div className="mt-1 flex items-center space-x-4">
                    <div className="flex-1">
                      <input
                        type="text"
                        name="captcha"
                        id="captcha"
                        required
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        value={formData.captcha}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="bg-gray-200 dark:bg-gray-700 p-2 rounded">
                      <span className="text-lg font-mono">ABC123</span>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div>
                <label htmlFor="otp" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Enter OTP
                </label>
                <input
                  type="text"
                  name="otp"
                  id="otp"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </div>
            )}

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {step === 1 ? 'Send OTP' : 'Complete Registration'}
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                  Already have an account?
                </span>
              </div>
            </div>

            <div className="mt-6">
              <Link
                href="/login"
                className="w-full flex justify-center py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 