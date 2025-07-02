import React from "react";

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <span className="inline-block w-12 h-12 border-4 border-purple-400 border-t-transparent rounded-full animate-spin"></span>
      <span className="ml-4 text-lg text-purple-600 font-semibold">Processing...</span>
    </div>
  );
} 