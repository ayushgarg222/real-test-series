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
      <div className="mt-16 bg-[#5c3bfe] text-white py-3 px-4 text-center shadow-sm rounded-b-xl border-b">
        <p className="text-sm font-semibold">
          🎉 Early Bird Registration Open! Limited time offer.
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
            <Image
              src="/hero-illustration.jpeg"
              alt="Students preparing for exams"
              width={800}
              height={400}
              className="w-full max-w-2xl h-auto object-contain rounded-xl shadow-lg"
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

      {/* Call to Action Section */}
      <section className="py-20 bg-[#5C3BFE] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Ace Your Exam?
          </h2>
          <p className="text-xl mb-8">
            Join thousands of successful students. Enroll in our test series today!
          </p>
          <Link href="/register" className="bg-white text-[#5c3bfe] hover:bg-whitepx-8 p-4 rounded-lg font-bold text-lg shadow-lg transition-all duration-300 transform hover:scale-105">
            Enroll Now
          </Link>
    </div>
      </section>
    </main>
  );
}
