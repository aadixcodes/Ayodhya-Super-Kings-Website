// "use client";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import { useRouter } from "next/navigation";

// const Gallery = () => {
//   const router = useRouter();
//   return (
//     <section className="relative py-16 overflow-hidden">
//       {/* Background Banner Image */}
//       <div className="absolute inset-0 -z-10">
//         <Image
//           src="/assets/bgbanner.png"
//           alt="Gallery Background"
//           layout="fill"
//           objectFit="cover"
//         />
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Heading Row */}
//         <div className="flex justify-between items-center mb-10">
//           <h2 className="text-4xl font-bold text-[#1c0f0d]">GALLERY</h2>
//           <Button onClick={() => router.push("/gallery")} className="bg-[#fab604] text-[#1c0f0d] hover:bg-[#e0a500] font-bold px-6 py-2">
//             View More
//           </Button>
//         </div>

//         {/* Image Rows */}
//         <div className="space-y-6 flex flex-col">
//           {/* First Row - 1 square + 1 long rectangle */}
//           <div className="w-full flex flex-wrap justify-center gap-8">
//             {/* Square Image */}
//             <div className="relative w-[25rem] h-[23rem] rounded-xl overflow-hidden shadow-lg">
//               <Image
//                 src="/assets/homegallery1.png"
//                 alt="Team Celebration"
//                 layout="fill"
//                 objectFit="cover"
//                 className="hover:scale-105 transition-transform duration-300"
//               />
//             </div>

//             {/* Long Rectangle Image */}
//             <div className="relative w-[47rem] h-[23rem] rounded-xl overflow-hidden shadow-lg">
//               <Image
//                 src="/assets/homegallery2.png"
//                 alt="Match Action"
//                 layout="fill"
//                 objectFit="cover"
//                 className="hover:scale-105 transition-transform duration-300"
//               />
//             </div>
//           </div>

//           {/* Second Row - 2 small rectangles */}
//           <div className="w-full flex flex-wrap justify-center gap-8">
//             {/* Small Rectangle 1 */}
//             <div className="relative w-[30rem] h-[23rem] rounded-xl overflow-hidden shadow-lg">
//               <Image
//                 src="/assets/homegallery3.png"
//                 alt="Training Session"
//                 layout="fill"
//                 objectFit="cover"
//                 className="hover:scale-105 transition-transform duration-300"
//               />
//             </div>

//             {/* Small Rectangle 2 */}
//             <div className="relative w-[30rem] h-[23rem] rounded-xl overflow-hidden shadow-lg">
//               <Image
//                 src="/assets/homegallery4.png"
//                 alt="Trophy Celebration"
//                 layout="fill"
//                 objectFit="cover"
//                 className="hover:scale-105 transition-transform duration-300"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Gallery;


"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Gallery = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [galleryImages] = useState([
    '/assets/G1.jpg',
    '/assets/G2.jpg',
    '/assets/G3.jpg',
    '/assets/G4.jpg',
    '/assets/G5.jpg',
    '/assets/G6.jpg'
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative py-16 bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: "url('/assets/bgbanner.png')" }}
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Row */}
        <div className="flex flex-row sm:flex-row justify-between items-center mb-10 gap-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1c0f0d]">GALLERY</h2>
          <Button 
            onClick={() => router.push("/gallery")} 
            className="bg-[#fab604] hover:bg-[#e0a500] text-[#1c0f0d] font-bold px-6 py-2 transition-colors"
          >
            View More
          </Button>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="group relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {isLoading ? (
                <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
              ) : (
                <>
                  <Image
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;