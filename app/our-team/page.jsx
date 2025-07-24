'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function OurTeam() {
  const [activeTab, setActiveTab] = useState('team');
  const [isLoading, setIsLoading] = useState(true);

  const teamImages = [
    '/assets/AK-7.jpg',
    '/assets/AK-8.jpg',
    '/assets/AK-9.jpg',
    '/assets/AK-10.jpg',
    '/assets/AK-11.jpg',
    '/assets/AK-12.jpg',
    '/assets/AK-13.jpg',
    '/assets/AK-14.jpg',
    '/assets/AK-15.jpg',
    '/assets/AK-16.jpg',
    '/assets/AK-17.jpg',
    '/assets/AK-18.jpg',
    '/assets/AK-19.jpg',
    '/assets/AK-20.jpg',
  ];

  const staffData = [
    {
      image: '/assets/amritpal2.JPG',
      name: 'Amrit Pal Singh',
      title: 'Head Coach'
    },
    {
      image: '/assets/vijaytomar3.png',
      name: 'Vijay Tomar',
      title: 'Assistant Coach'
    }
  ];

  useEffect(() => {
    // Simulate loading delay only for images
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-[#f8f8f8]">
      {/* Page Banner - Unchanged */}
      <section className="relative w-full overflow-hidden">
        <div className="relative h-[220px] sm:h-[260px] md:h-[320px] lg:h-[380px] xl:h-[420px]">
          <Image
            src="/assets/pagesBanner.png"
            alt="Team Banner"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-[#1c0f0d] p-4">
            <nav className="text-xs sm:text-sm md:text-base mb-2 mt-12 sm:mt-0">
              <span>Home / </span>
              <span>Our Team</span>
            </nav>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-koba text-[#1c0f0d]">Our Team</h1>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Toggle Tabs - Unchanged */}
        <div className="flex justify-center mb-8 md:mb-12">
          <div className="flex gap-3 md:gap-5 p-1 rounded-lg bg-white shadow-sm">
            {['team', 'staff'].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setIsLoading(true);
                  setActiveTab(tab);
                }}
                className={`px-4 py-1.5 md:px-6 md:py-2 rounded-md font-medium text-sm md:text-base transition-all ${
                  activeTab === tab
                    ? 'bg-[#fab604] text-[#1c0f0d] shadow-md'
                    : 'bg-transparent text-[#1c0f0d] hover:bg-gray-100'
                }`}
              >
                {tab === 'team' ? 'Players Squad' : 'Management'}
              </button>
            ))}
          </div>
        </div>

        {/* Team Grid with Skeleton Loading */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-5 md:gap-6 p-4 sm:p-6 rounded-xl">
          {isLoading ? (
            // Skeleton loading only for images
            Array.from({ length: activeTab === 'team' ? 8 : 2 }).map((_, index) => (
              <div
                key={index}
                className="w-[calc(50%-0.5rem)] sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1.25rem)] lg:w-[calc(25%-1.5rem)]"
              >
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-gray-200 animate-pulse">
                  {activeTab === 'staff' && (
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gray-300 animate-pulse" />
                  )}
                </div>
              </div>
            ))
          ) : activeTab === 'team' ? (
            // Actual team images
            teamImages.map((image, index) => (
              <div
                key={index}
                className="w-[calc(50%-0.5rem)] sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1.25rem)] lg:w-[calc(25%-1.5rem)]"
              >
                <div className="group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="relative aspect-[3/4]">
                    <Image
                      src={image}
                      alt={`Player ${index + 1}`}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </div>
            ))
          ) : (
            // Actual staff images
            staffData.map((staff, index) => (
              <div
                key={index}
                className="w-[calc(50%-0.5rem)] sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1.25rem)] lg:w-[calc(25%-1.5rem)]"
              >
                <div className="group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="relative aspect-[3/4]">
                    <Image
                      src={staff.image}
                      alt={staff.name}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-[#fab604] p-3 text-center">
                    <h3 className="font-bold text-[#1c0f0d] text-sm sm:text-base">{staff.name}</h3>
                    <p className="text-[#1c0f0d] text-xs sm:text-sm">{staff.title}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
}