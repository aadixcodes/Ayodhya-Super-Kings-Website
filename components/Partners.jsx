
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
    <section className="py-16 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            OUR PARTNERS
          </h2>
        </div>

        {/* Partner logos */}
        <div className="flex flex-wrap justify-center items-center gap-32">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="flex items-center justify-center">
              <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40">
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  fill
                  className="object-contain"
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
