import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Real Test Series - Right Evaluation and Assessment for Learning",
  description: "Prepare for competitive exams with Real Test Series - Experience exam-like conditions with our comprehensive test series for NEET and JEE.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800`}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
        {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
