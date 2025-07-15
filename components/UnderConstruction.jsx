'use client';

import Link from 'next/link';
import { Construction, Home } from 'lucide-react';

const UnderConstruction = () => {
  return (
    <div className="py-20 flex flex-col items-center justify-center p-6 text-center text-white">
      <div className="max-w-2xl mx-auto">
        {/* Animated Construction Icon */}
        <div className="mb-8 animate-bounce">
          <Construction className="w-24 h-24 md:w-32 md:h-32 mx-auto  text-[#1c0f0d]" />
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6  text-[#1c0f0d]">
          Under Construction
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl mb-8 leading-relaxed  text-[#1c0f0d]">
          We're working hard to bring you an amazing experience! This page is currently being built with care.
          Please check back soon for updates. Thank you for your patience!
        </p>

        {/* Progress Bar for fun */}
        <div className="w-full bg-gray-700 rounded-full h-4 mb-10">
          <div 
            className="bg-[#fab604] h-4 rounded-full animate-pulse" 
            style={{ width: '65%' }}
          ></div>
        </div>

        {/* Back to Home Button */}
        <Link 
          href="/" 
          className="inline-flex items-center justify-center px-8 py-3 md:px-10 md:py-4 bg-[#fab604] text-[#1c0f0d] rounded-lg font-bold text-lg hover:bg-[#ffc83d] transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <Home className="mr-2" />
          Back to Home
        </Link>

        {/* Footer Note */}
        <p className="mt-12 text-sm  text-[#1c0f0d]">
          Our team is working diligently to complete this page. Estimated completion: Soon!
        </p>
      </div>
    </div>
  );
};

export default UnderConstruction;