'use client';

import Image from 'next/image';

export default function Gallery() {
  const galleryImages = [
    "/assets/gallery1.png",
    "/assets/gallery2.png",
    "/assets/gallery3.png",
    "/assets/gallery4.png",
    "/assets/gallery5.png",
  ];

  return (
    <div className="min-h-screen">
      {/* Page Header */}
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
              <span>gallery</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Gallery</h1>
          </div>
        </div>
      </section>

      {/* Gallery Images - Custom Layout */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {/* First Row - 2 Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 aspect-[4/3]">
              <Image
                src={galleryImages[0]}
                alt="Gallery 1"
                width={800}
                height={600}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 aspect-[4/3]">
              <Image
                src={galleryImages[1]}
                alt="Gallery 2"
                width={800}
                height={600}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          {/* Second Row - 1 Full Width Image */}
          <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 aspect-[16/9]">
            <Image
              src={galleryImages[2]}
              alt="Gallery 3"
              width={1600}
              height={900}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Third Row - 2 Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 aspect-[4/3]">
              <Image
                src={galleryImages[3]}
                alt="Gallery 4"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 aspect-[4/3]">
              <Image
                src={galleryImages[4]}
                alt="Gallery 5"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}