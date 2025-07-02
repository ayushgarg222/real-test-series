import React from "react";

export default function CityList() {
  return (
    <div className="min-h-screen bg-cream-50 pt-20">
      <div className="w-full h-[calc(100vh-5rem)] flex flex-col">
        <iframe
          src="https://drive.google.com/file/d/16kP6Pxi4ECEy3ZYJXBkP7Dtxk975SA7Q/preview"
          title="RTS City List PDF"
          className="w-full flex-1 min-h-[600px] border-none"
          allow="autoplay"
        >
          This browser does not support PDFs. Please download the PDF to view it: 
          <a href="https://drive.google.com/file/d/16kP6Pxi4ECEy3ZYJXBkP7Dtxk975SA7Q/view?usp=sharing" target="_blank" rel="noopener noreferrer">Download PDF</a>.
        </iframe>
      </div>
    </div>
  );
} 