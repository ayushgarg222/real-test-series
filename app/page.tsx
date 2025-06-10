'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { HoverEffect } from "@/components/ui/card-hover-effect";

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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "NEET 2024 Aspirant",
      image: "/testimonials/rahul.jpg",
      quote: "Real Test Series helped me understand my strengths and weaknesses. The offline tests gave me the exact exam feel!"
    },
    {
      name: "Priya Patel",
      role: "JEE 2024 Aspirant",
      image: "/testimonials/priya.jpg",
      quote: "The comprehensive test series and detailed analysis helped me improve my rank significantly."
    },
    {
      name: "Amit Kumar",
      role: "NEET 2024 Aspirant",
      image: "/testimonials/amit.jpg",
      quote: "The dual mode testing option was perfect for my preparation. I could practice both online and offline!"
    }
  ];

  const freeTests = [
    {
      title: "NEET Full Length Test",
      description: "Experience a complete NEET mock test with detailed analysis and performance insights. Perfect for understanding the exam pattern and your current preparation level.",
      link: "/register?test=neet-free",
    },
    {
      title: "JEE Main Practice Test",
      description: "Get a feel of JEE Main with our specially designed practice test and solutions. Includes comprehensive analysis and subject-wise performance breakdown.",
      link: "/register?test=jee-free",
    },
    {
      title: "Subject-wise Assessment",
      description: "Choose your subject and take a focused test to identify your strengths and areas for improvement. Get detailed solutions and performance analytics.",
      link: "/register?test=subject-free",
    },
  ];

  return (
    <main className="min-h-screen bg-indigo-950">
      {/* Early Bird Registration Banner */}
      <div className="mt-16 bg-indigo-900 text-indigo-100 py-3 px-4 text-center shadow-sm rounded-b-xl border-b border-indigo-800">
        <p className="text-sm font-semibold">
          🎉 Early Bird Registration Open! Get 20% off on all test series. Limited time offer.
        </p>
      </div>

      {/* Hero Section with Background Beams */}
      <BackgroundBeamsWithCollision className="relative bg-indigo-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Welcome to Real Test
          </h1>
          <p className="text-xl md:text-2xl text-indigo-100 mb-8">
            Your ultimate preparation platform for NEET and JEE
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register" className="group relative bg-indigo-700 hover:bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Start Free Tests
            </Link>
            <Link href="/info" className="group relative bg-indigo-900 hover:bg-indigo-800 text-indigo-100 font-bold py-3 px-8 rounded-lg border-2 border-indigo-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Learn More
            </Link>
          </div>
        </div>
      </BackgroundBeamsWithCollision>

      {/* Free Tests Section */}
      <section className="py-20 bg-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-block mb-4"
            >
              <span className="bg-indigo-700 text-white px-4 py-1 rounded-full text-sm font-semibold shadow">
                FREE
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-white sm:text-5xl mb-4"
            >
              Start with Free Tests
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-indigo-100 max-w-3xl mx-auto"
            >
              Experience our test series with these free assessments. No credit card required.
            </motion.p>
          </div>

          <HoverEffect items={freeTests} />
        </div>
      </section>

      {/* Step-by-Step Tutorial Section */}
      <section className="py-20 bg-indigo-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          {/* Stepper */}
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            {tutorialSteps.map((step, idx) => (
              <button
                key={step.title}
                onClick={() => setActiveStep(idx)}
                className={`text-left rounded-xl px-6 py-5 transition-all duration-200 shadow-sm border-2 ${
                  activeStep === idx
                    ? 'bg-indigo-900 border-indigo-400 shadow-lg'
                    : 'bg-indigo-950 border-indigo-800 hover:border-indigo-700'
                }`}
              >
                <div className={`font-bold text-lg mb-1 ${activeStep === idx ? 'text-white' : 'text-indigo-300'}`}>{step.title}</div>
                <div className={`text-indigo-100 text-base ${activeStep === idx ? 'font-medium' : 'font-normal'}`}>{step.description}</div>
              </button>
            ))}
          </div>
          {/* Video/Image Area */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <div className="rounded-3xl shadow-xl border-2 border-indigo-800 bg-indigo-900 p-4 w-full max-w-xl aspect-video flex items-center justify-center">
              {/* If you have a video, use video tag, else fallback to image */}
              {tutorialSteps[activeStep].video ? (
                <video
                  key={tutorialSteps[activeStep].video}
                  src={tutorialSteps[activeStep].video}
                  controls
                  className="rounded-2xl w-full h-full object-cover bg-indigo-950"
                  poster={tutorialSteps[activeStep].image}
                />
              ) : (
                <img
                  src={tutorialSteps[activeStep].image}
                  alt={tutorialSteps[activeStep].title}
                  className="rounded-2xl w-full h-full object-cover bg-indigo-950"
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Carousel */}
      <section className="py-20 bg-gradient-to-b from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 sm:text-5xl"
            >
              Why Choose Real Test Series?
            </motion.h2>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {[
                  {
                    title: 'Full Syllabus Coverage',
                    description: 'Comprehensive test papers covering the entire syllabus with real exam level difficulty',
                    icon: '📚',
                    stats: '100% Syllabus Coverage',
                  },
                  {
                    title: 'Dual Mode Testing',
                    description: 'Choose between online and offline modes based on your preference',
                    icon: '💻',
                    stats: '2 Testing Modes',
                  },
                  {
                    title: 'Real Exam Experience',
                    description: 'Experience exam-like conditions with proper invigilation and timing',
                    icon: '⏰',
                    stats: '100% Exam-like Environment',
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="bg-gradient-to-br from-white to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-xl border border-indigo-100 dark:border-indigo-900"
                    >
                      <div className="text-6xl mb-6">{feature.icon}</div>
                      <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-6">
                        {feature.description}
                      </p>
                      <div className="text-indigo-600 dark:text-indigo-400 font-semibold">
                        {feature.stats}
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center mt-8 space-x-2">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    currentSlide === index
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600'
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Videos Section */}
      <section className="py-20 bg-gradient-to-b from-purple-50 to-indigo-50 dark:from-gray-950 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 sm:text-5xl mb-4"
            >
              Student Success Stories
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 dark:text-gray-400"
            >
              Hear from our successful students about their journey
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gradient-to-br from-white to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-xl overflow-hidden border border-indigo-100 dark:border-indigo-900"
        >
                <div className="aspect-w-16 aspect-h-9">
          <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={400}
                    height={225}
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    "{testimonial.quote}"
                  </p>
                  <div className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.role}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 dark:from-indigo-800 dark:via-purple-800 dark:to-indigo-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-white to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-2xl border border-indigo-100 dark:border-indigo-900"
          >
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 mb-8">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
              Join thousands of students who have already benefited from our test series
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/register"
                className="group relative bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                <span className="relative z-10">Register Now</span>
              </Link>
              <Link
                href="/login"
                className="group relative bg-white hover:bg-gray-50 text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 border-2 border-indigo-600"
              >
                <span className="relative z-10">Login</span>
              </Link>
            </div>
          </motion.div>
    </div>
      </section>
    </main>
  );
}
