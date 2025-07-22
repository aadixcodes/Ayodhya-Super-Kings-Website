"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Gallery = () => {
  const router = useRouter();
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background Banner Image */}
      <div className="absolute inset-0 -z-10 bg-[#ff9602]">
        {/* <Image
          src="/assets/bgbanner.png"
          alt="Gallery Background"
          layout="fill"
          objectFit="cover"
        /> */}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Row */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-4xl font-bold text-[#1c0f0d]">GALLERY</h2>
          <Button onClick={() => router.push("/gallery")} className="bg-[#fab604] text-[#1c0f0d] hover:bg-[#e0a500] font-bold px-6 py-2">
            View More
          </Button>
        </div>

        {/* Image Rows */}
        <div className="space-y-6 flex flex-col">
          {/* First Row - 1 square + 1 long rectangle */}
          <div className="w-full flex flex-wrap justify-center gap-8">
            {/* Square Image */}
            <div className="relative w-[25rem] h-[23rem] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/assets/homegallery1.png"
                alt="Team Celebration"
                layout="fill"
                objectFit="cover"
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Long Rectangle Image */}
            <div className="relative w-[47rem] h-[23rem] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/assets/homegallery2.png"
                alt="Match Action"
                layout="fill"
                objectFit="cover"
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Second Row - 2 small rectangles */}
          <div className="w-full flex flex-wrap justify-center gap-8">
            {/* Small Rectangle 1 */}
            <div className="relative w-[30rem] h-[23rem] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/assets/homegallery3.png"
                alt="Training Session"
                layout="fill"
                objectFit="cover"
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Small Rectangle 2 */}
            <div className="relative w-[30rem] h-[23rem] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/assets/homegallery4.png"
                alt="Trophy Celebration"
                layout="fill"
                objectFit="cover"
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
