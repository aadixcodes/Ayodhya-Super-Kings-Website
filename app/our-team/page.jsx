'use client';

import { useState } from 'react';

export default function OurTeam() {
  const [activeTab, setActiveTab] = useState('team');

  const teamImages = [
    '/assets/1.png',
    '/assets/2.png',
    '/assets/3.png',
    '/assets/4.png',
    '/assets/5.png',
    '/assets/6.png',
    '/assets/7.png',
    '/assets/8.png',
    '/assets/9.png',
    '/assets/10.png',
    '/assets/11.png',
    '/assets/12.png',
    '/assets/13.png',
    '/assets/14.png',
    '/assets/15.png',
  ];

  const staffImages = [
    '/assets/amritpalsingh.png',
    '/assets/vijaytomar.png',
  ];

  const currentImages = activeTab === 'team' ? teamImages : staffImages;

  return (
    <div className="min-h-screen">
      {/* Page Banner */}
      <section className="relative w-full overflow-hidden">
        <div className="relative h-[220px] sm:h-[260px] md:h-[320px] lg:h-[380px] xl:h-[420px]">
          <img
            src="/assets/pagesBanner.png"
            alt="Team Banner"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-[#1c0f0d] p-4">
            <nav className="text-xs sm:text-sm md:text-base mb-2 mt-12 sm:mt-0">
              <span>Home / </span>
              <span>Our Team</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Our Team</h1>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12">
        {/* Toggle Tabs */}
        <div className="flex justify-center mb-8 md:mb-12">
          <div className="flex gap-3 md:gap-5 p-1 rounded-lg">
            {['team', 'staff'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 md:px-6 md:py-2 rounded-md font-medium text-sm md:text-base transition-all ${
                  activeTab === tab
                    ? 'bg-[#fab604] text-[#1c0f0d]'
                    : 'bg-white border border-[#1c0f0d] text-[#1c0f0d]'
                }`}
              >
                {tab === 'team' ? 'Players Squad' : 'Management'}
              </button>
            ))}
          </div>
        </div>

        {/* Team Grid */}
        <div
          className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 p-4 rounded-xl bg-cover bg-center"
          style={{
            backgroundImage: `url('/assets/gallerybanner.png')`,
          }}
        >
          {currentImages.map((image, index) => (
            <div
              key={index}
              className="w-[calc(50%-8px)] sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)]"
            >
              <div className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow">
                <img
                  src={image}
                  alt={`Member ${index + 1}`}
                  className="w-full aspect-[3/4] object-cover object-center rounded-xl"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
