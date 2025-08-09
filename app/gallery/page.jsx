
// 'use client';
// import { useState, useEffect } from 'react';
// import Image from 'next/image';
// import Partner from "@/components/Partners";


// export default function Gallery() {
//   const [loadingImages, setLoadingImages] = useState(true);
//   const galleryImages = [
//     "/assets/G1.jpg",
//     "/assets/G2.jpg",
//     "/assets/G3.jpg",
//     "/assets/G4.jpg",
//     "/assets/G5.jpg",
//     "/assets/G6.jpg",
//     "/assets/G7.jpg"
//   ];

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoadingImages(false);
//     }, 1500);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Page Header */}
//       <section className="relative w-full overflow-hidden">
//         <div className="relative h-[220px] sm:h-[260px] md:h-[320px] lg:h-[380px] xl:h-[420px]">
//           <img
//             src="/assets/pagesBanner.png"
//             alt="Team Banner"
//             className="absolute inset-0 w-full h-full object-cover object-center"
//           />
//           <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-[#1c0f0d] p-4">
//             <h1 className="text-5xl sm:text-6xl md:text-7xl font-koba opacity-95 text-[#1c0f0d] mt-14">Gallery</h1>
//           </div>
//         </div>
//       </section>

//       {/* Gallery Images */}
//       <section className="pt-12 sm:pt-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           {/* Grid Layout */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
//             {galleryImages.map((image, index) => (
//               <div 
//                 key={index} 
//                 className="group relative aspect-square overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
//               >
//                 {loadingImages ? (
//                   <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
//                 ) : (
//                   <>
//                     <Image
//                       src={image}
//                       alt={`Gallery image ${index + 1}`}
//                       fill
//                       className="object-cover group-hover:scale-105 transition-transform duration-500"
//                       loading={index < 3 ? "eager" : "lazy"}
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                   </>
//                 )}
//               </div>
//             ))}
//           </div>

          
//         </div>
//       </section>
//     </div>
//   );
// }

'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Partner from "@/components/Partners";

// Gallery data structure with categories
const galleryData = {
  auction: [
    "/assets/G1.jpg",
    "/assets/G2.jpg",
    "/assets/G3.jpg",
    "/assets/G4.jpg",
    "/assets/G5.jpg",
    "/assets/G6.jpg",
    "/assets/G7.jpg"
  ],
  training: [
    // Currently empty to demonstrate the "coming soon" message
  ],
  match: {
    "Ayodhya Super Kings vs Gorakhpur Giants": [],
    "Ayodhya Super Kings vs Lucknow Tigers": [],
    "Ayodhya Super Kings vs Muzaffarnagar Lions": [],
    "Ayodhya Super Kings vs Noida Thunders": [],
    "Ayodhya Super Kings vs Moradabad Bulls": []
  }
};

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('auction');
  const [loadingImages, setLoadingImages] = useState(true);
  const [images, setImages] = useState([]);
  const [selectedMatch, setSelectedMatch] = useState(null);

  useEffect(() => {
    // Set first match as default when match category is selected
    if (activeFilter === 'match' && !selectedMatch) {
      const firstMatch = Object.keys(galleryData.match)[0];
      setSelectedMatch(firstMatch);
    }

    // Simulate loading delay
    const timer = setTimeout(() => {
      if (activeFilter === 'match') {
        setImages(galleryData.match[selectedMatch] || []);
      } else {
        setImages(galleryData[activeFilter]);
      }
      setLoadingImages(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [activeFilter, selectedMatch]);

  const handleFilter = (filter) => {
    setLoadingImages(true);
    setActiveFilter(filter);
    setSelectedMatch(null);
  };

  const handleMatchClick = (matchName) => {
    setLoadingImages(true);
    setSelectedMatch(matchName);
  };

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
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-koba opacity-95 text-[#1c0f0d] mt-14">Gallery</h1>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="pt-8 sm:pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              onClick={() => handleFilter('auction')}
              className={`px-6 py-2 rounded-full font-bold text-sm sm:text-base transition-all duration-300 cursor-pointer ${
                activeFilter === 'auction'
                  ? 'bg-[#1c0f0d] text-white shadow-lg'
                  : 'bg-white text-[#1c0f0d] hover:bg-gray-100'
              }`}
            >
              Auction
            </button>
            <button
              onClick={() => handleFilter('training')}
              className={`px-6 py-2 rounded-full font-bold text-sm sm:text-base transition-all duration-300 cursor-pointer ${
                activeFilter === 'training'
                  ? 'bg-[#1c0f0d] text-white shadow-lg'
                  : 'bg-white text-[#1c0f0d] hover:bg-gray-100'
              }`}
            >
              Training Camp
            </button>
            <button
              onClick={() => handleFilter('match')}
              className={`px-6 py-2 rounded-full font-bold text-sm sm:text-base transition-all duration-300 cursor-pointer ${
                activeFilter === 'match'
                  ? 'bg-[#1c0f0d] text-white shadow-lg'
                  : 'bg-white text-[#1c0f0d] hover:bg-gray-100'
              }`}
            >
              Match Day
            </button>
          </div>

          {/* Match Day Buttons */}
          {activeFilter === 'match' && (
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {Object.keys(galleryData.match).map((matchName) => (
                <button
                  key={matchName}
                  onClick={() => handleMatchClick(matchName)}
                  className={`px-4 py-2 rounded-full font-medium text-xs sm:text-sm transition-all duration-300 cursor-pointer ${
                    selectedMatch === matchName
                      ? 'bg-[#1c0f0d] text-white shadow-md'
                      : 'bg-white text-[#1c0f0d] hover:bg-gray-100 border border-[#1c0f0d]'
                  }`}
                >
                  {matchName}
                </button>
              ))}
            </div>
          )}

          {/* Match Day Title */}
          {activeFilter === 'match' && selectedMatch && (
            <h2 className="text-2xl md:text-3xl font-bold text-center text-[#1c0f0d] mb-6">
              {selectedMatch} Glimpses
            </h2>
          )}
        </div>
      </section>

      {/* Gallery Images */}
      <section className="pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {images.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {images.map((image, index) => (
                <div 
                  key={index} 
                  className="group relative aspect-square overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Image
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    loading={index < 3 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          ) : loadingImages ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={`skeleton-${index}`}
                  className="aspect-square bg-gray-200 rounded-xl animate-pulse"
                />
              ))}
            </div>
          ) : (
            <div className="w-full text-center py-12">
              <p className="text-gray-600 text-lg sm:text-xl font-medium italic">
                {activeFilter === 'match' && selectedMatch
                  ? `${selectedMatch} Images will be updated soon!`
                  : "Training Camp Images will be updated soon!"}
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}