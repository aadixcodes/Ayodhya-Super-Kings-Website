
'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Partner from "@/components/Partners";


export default function Gallery() {
  const [loadingImages, setLoadingImages] = useState(true);
  const galleryImages = [
    "/assets/G1.jpg",
    "/assets/G2.jpg",
    "/assets/G3.jpg",
    "/assets/G4.jpg",
    "/assets/G5.jpg",
    "/assets/G6.jpg",
    "/assets/G7.jpg"
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingImages(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="relative w-full overflow-hidden">
        <div className="relative h-[220px] sm:h-[260px] md:h-[320px] lg:h-[380px] xl:h-[420px]">
          <img
            src="/assets/pagesBanner.png"
            alt="Team Banner"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-[#1c0f0d] p-4">
            {/* <nav className="text-xs sm:text-sm md:text-base mb-2 mt-12 sm:mt-0">
              <span>Home / </span>
              <span>gallery</span>
            </nav> */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-koba opacity-95 text-[#1c0f0d] mt-14">Gallery</h1>
          </div>
        </div>
      </section>

      {/* Gallery Images */}
      <section className="pt-12 sm:pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="group relative aspect-square overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {loadingImages ? (
                  <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                ) : (
                  <>
                    <Image
                      src={image}
                      alt={`Gallery image ${index + 1}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      loading={index < 3 ? "eager" : "lazy"}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </>
                )}
              </div>
            ))}
          </div>

          
        </div>
      </section>
    </div>
  );
}