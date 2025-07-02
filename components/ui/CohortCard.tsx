import React from "react";

interface CohortCardProps {
  name: string;
  totalTests: number;
  online: number;
  offline: number;
  price: number;
  features: string[];
}

const CohortCard: React.FC<CohortCardProps> = ({ name, totalTests, online, offline, price, features }) => {
  return (
    <div className="bg-white rounded-2xl card-shadow border border-gray-200 p-8 flex flex-col h-full transition-transform duration-200 hover:-translate-y-1">
      <div className="mb-4">
        <h3 className="text-2xl font-bold text-[#5C3BFE] mb-2 font-sans">{name}</h3>
        <div className="flex flex-wrap gap-2 text-sm mb-2">
          <span className="pill bg-[#EDE7FE] text-[#5C3BFE]">Total: {totalTests}</span>
          <span className="pill bg-[#D1FAE5] text-[#059669]">Online: {online}</span>
          <span className="pill bg-[#FDE68A] text-[#B45309]">Offline: {offline}</span>
        </div>
        <div className="text-xl font-bold text-gray-900 mt-2 font-sans">₹{price.toLocaleString()}</div>
      </div>
      <ul className="list-disc list-inside text-gray-700 flex-1 space-y-2 mb-6 font-sans">
        {features.map((feature, idx) => (
          <li key={idx}>{feature}</li>
        ))}
      </ul>
      <a
        href="/register"
        className="btn-primary py-3 px-6 text-center w-full mt-auto"
      >
        Register Now
      </a>
    </div>
  );
};

export default CohortCard; 