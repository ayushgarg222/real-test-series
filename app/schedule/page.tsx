'use client';

export default function Schedule() {
  return (
    <div className="min-h-screen bg-cream-50 pt-20">
      <div className="w-full h-[calc(100vh-5rem)] flex flex-col">
        <iframe
          src="https://drive.google.com/file/d/1YWqEx6gyg9FAcO09ncLwUYhzcSvy1OG8/preview"
          title="RTS Schedule PDF"
          className="w-full flex-1 min-h-[600px] border-none"
          allow="autoplay"
        >
          This browser does not support PDFs. Please download the PDF to view it: 
          <a href="https://drive.google.com/file/d/1YWqEx6gyg9FAcO09ncLwUYhzcSvy1OG8/view?usp=sharing" target="_blank" rel="noopener noreferrer">Download PDF</a>.
        </iframe>
      </div>
    </div>
  );
} 