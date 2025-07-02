'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CohortCard from "@/components/ui/CohortCard";

const tutorialSteps = [
  {
    title: "Register & Choose Exam",
    description: "Sign up and select your exam (NEET/JEE) and session. Fill in your details and verify your email/mobile.",
    video: "/tutorial/register.mp4",
    image: "/tutorial/register.png",
  },
  {
    title: "Download Admit Card",
    description: "For offline tests, download your admit card from the portal 3 days before the test.",
    video: "/tutorial/admit-card.mp4",
    image: "/tutorial/admit-card.png",
  },
  {
    title: "Attempt the Test",
    description: "Join online or visit your center for offline. Attempt the test in real exam conditions.",
    video: "/tutorial/attempt.mp4",
    image: "/tutorial/attempt.png",
  },
  {
    title: "Check Results & Analysis",
    description: "Get instant results for online tests and detailed analysis for all attempts. Improve with every test!",
    video: "/tutorial/results.mp4",
    image: "/tutorial/results.png",
  },
];

export default function Home() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-cream-50">
      {/* Early Bird Registration Banner */}
      <div className="mt-16 bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 px-4 text-center shadow-sm rounded-b-xl border-b border-purple-800">
        <p className="text-sm font-semibold">
          🎉 Early Bird Registration Open! Get 20% off on all test series. Limited time offer.
        </p>
      </div>

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-[#FDF8F3] to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          {/* Left: Text and CTAs */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Real Exam Experience, Real Results
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              JEE/NEET test series that feels just like the real exam.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href="/register" className="btn-primary py-3 px-8 font-bold">
                Register
              </Link>
              <Link href="/info" className="btn-secondary py-3 px-8 font-bold">
                Learn More
              </Link>
            </div>
          </div>
          {/* Right: Illustration or Image */}
          <div className="flex-1 flex justify-center">
            <img
              src="/hero-illustration.svg"
              alt="Students preparing for exams"
              className="w-full max-w-md h-auto object-contain"
              style={{ minHeight: 240 }}
            />
          </div>
        </div>
      </section>

      {/* What is the REAL Test? */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What is the REAL Test?</h2>
          <p className="text-lg text-gray-700">
            PW REAL Test Series is an offline test series that offers students an authentic JEE/NEET exam experience, from registration to results. It closely simulates the actual exam with questions that mirror the format, difficulty, and syllabus coverage.
          </p>
        </div>
      </section>

      {/* Who Can Participate? */}
      <section className="py-6 bg-cream-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">Who Can Participate?</h3>
          <p className="text-lg text-gray-700">
            The test is open to all 11th, 12th, and Dropper students preparing for JEE or NEET.
          </p>
        </div>
      </section>

      {/* Product Offerings Section */}
      <section className="py-12 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">JEE Test Series</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* JEE CohortCards */}
            <CohortCard
              name="11th JEE RTS 2026"
              totalTests={18}
              online={10}
              offline={8}
              price={3999}
              features={[
                "Hybrid: Online & Offline",
                "NTA-like Experience",
                "18 Tests",
                "Expert Analysis"
              ]}
            />
            <CohortCard
              name="12th JEE RTS 2026"
              totalTests={21}
              online={11}
              offline={10}
              price={5499}
              features={[
                "Hybrid: Online & Offline",
                "Rankers Booklet",
                "21 Tests",
                "Expert Analysis"
              ]}
            />
            <CohortCard
              name="Dropper JEE RTS 2026"
              totalTests={21}
              online={11}
              offline={10}
              price={5499}
              features={[
                "Hybrid: Online & Offline",
                "Rankers Booklet",
                "21 Tests",
                "Expert Analysis"
              ]}
            />
          </div>
          {/* NEET Test Series Section */}
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">NEET Test Series</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CohortCard
              name="11th NEET RTS 2026"
              totalTests={17}
              online={10}
              offline={7}
              price={3999}
              features={[
                "Hybrid: Online & Offline",
                "NTA-like Experience",
                "17 Tests",
                "Expert Analysis"
              ]}
            />
            <CohortCard
              name="12th NEET RTS 2026"
              totalTests={23}
              online={13}
              offline={10}
              price={5499}
              features={[
                "Hybrid: Online & Offline",
                "Rankers Booklet",
                "23 Tests",
                "Expert Analysis"
              ]}
            />
            <CohortCard
              name="Dropper NEET RTS 2026"
              totalTests={23}
              online={13}
              offline={10}
              price={5499}
              features={[
                "Hybrid: Online & Offline",
                "Rankers Booklet",
                "23 Tests",
                "Expert Analysis"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Step-by-Step Tutorial Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          {/* Stepper */}
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            {tutorialSteps.map((step, idx) => (
              <button
                key={step.title}
                onClick={() => setActiveStep(idx)}
                className={`text-left rounded-xl px-6 py-5 transition-all duration-200 shadow-sm border-2 ${
                  activeStep === idx
                    ? 'bg-cream-100 border-purple-400 shadow-lg dark:bg-gray-800'
                    : 'bg-white border-gray-200 hover:border-gray-300 dark:bg-gray-900 dark:border-gray-700 dark:hover:border-gray-600'
                }`}
              >
                <div className={`font-bold text-lg mb-1 ${activeStep === idx ? 'text-purple-700 dark:text-white' : 'text-gray-800 dark:text-gray-300'}`}>{step.title}</div>
                <div className={`text-gray-600 text-base ${activeStep === idx ? 'font-medium dark:text-gray-100' : 'font-normal dark:text-gray-400'}`}>{step.description}</div>
              </button>
            ))}
          </div>
          {/* Video/Image Area */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <div className="rounded-3xl shadow-xl border-2 border-gray-200 bg-white p-4 w-full max-w-xl aspect-video flex items-center justify-center dark:border-gray-700 dark:bg-gray-800">
              {/* If you have a video, use video tag, else fallback to image */}
              {tutorialSteps[activeStep].video ? (
                <video
                  key={tutorialSteps[activeStep].video}
                  src={tutorialSteps[activeStep].video}
                  controls
                  className="rounded-2xl w-full h-full object-cover bg-cream-100 dark:bg-gray-900"
                  poster={tutorialSteps[activeStep].image}
                />
              ) : (
          <Image
                  src={tutorialSteps[activeStep].image}
                  alt={tutorialSteps[activeStep].title}
                  width={400}
                  height={225}
                  className="rounded-2xl w-full h-full object-cover bg-cream-100 dark:bg-gray-900"
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section (shortened) */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">What Students Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-cream-100 rounded-xl p-6 shadow border border-gray-200 flex items-center gap-4">
              <img src="/avatar1.png" alt="Student 1" className="w-14 h-14 rounded-full object-cover" />
              <div>
                <p className="font-semibold text-gray-900 mb-1">“Felt just like the real exam!”</p>
                <span className="text-sm text-gray-600">Aman, AIR 123</span>
              </div>
            </div>
            <div className="bg-cream-100 rounded-xl p-6 shadow border border-gray-200 flex items-center gap-4">
              <img src="/avatar2.png" alt="Student 2" className="w-14 h-14 rounded-full object-cover" />
              <div>
                <p className="font-semibold text-gray-900 mb-1">“Helped me boost my score!”</p>
                <span className="text-sm text-gray-600">Priya, NEET Topper</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-purple-700 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Ace Your Exam?
          </h2>
          <p className="text-xl mb-8">
            Join thousands of successful students. Enroll in our test series today!
          </p>
          <Link href="/register" className="bg-white text-purple-700 hover:bg-cream-100 px-8 py-4 rounded-lg font-bold text-lg shadow-lg transition-all duration-300 transform hover:scale-105">
            Enroll Now
          </Link>
    </div>
      </section>
    </main>
  );
}
