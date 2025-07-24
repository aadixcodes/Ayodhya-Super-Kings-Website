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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Heading - Centered at top */}
        <h2 className="text-4xl sm:text-6xl font-koba opacity-95 text-[#1c0f0d] mb-10 text-center">
          GALLERY
        </h2>

        {/* Image Grid - Centered */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
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

        {/* View More Button - Centered at bottom */}
        <div className="w-full flex justify-center">
          <Button 
            onClick={() => router.push("/gallery")} 
            className="bg-[#fab604] hover:bg-[#e0a500] text-[#1c0f0d] font-bold px-6 py-2 transition-colors"
          >
            View More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;