
"use client";
import Image from "next/image";

const Partner = () => {
  const sponsors = [
    {
      name: "Sponsor 1",
      logo: "https://yt3.googleusercontent.com/2KpL4E7BBvDnywz0BLJXu0cMG_bqiXv6cMQ_dL4MNRTrQYIB6ydv8Tp1PnEvmx6Sg6d4yp7P=s900-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "Sponsor 2",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/16/DD_Sports_logo.svg/1200px-DD_Sports_logo.svg.png",
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
