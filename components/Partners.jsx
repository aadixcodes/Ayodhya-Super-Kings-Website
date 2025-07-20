"use client";
import Image from "next/image";

const Partner = () => {
  const sponsors = [
    {
      name: "Sponsor 1",
      logo: "/assets/partner1.jpg",
    },
    {
      name: "Sponsor 2",
      logo: "/assets/partner2.png",
    },
  ];

  return (
    <section className="py-8 md:py-12 mt-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Reduced max-width */}
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            OUR PARTNERS
          </h2>
        </div>

        {/* Partner logos - now with consistent spacing */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-20"> {/* Reduced gaps */}
          {sponsors.map((sponsor, index) => (
            <div key={index} className="flex items-center justify-center p-2">
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48"> {/* Adjusted sizes */}
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  fill
                  className="object-contain rounded-xl"
                  sizes="(max-width: 640px) 40vw, (max-width: 768px) 30vw, 20vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partner;