// import { ChevronLeft, ChevronRight, Trophy, Users, Calendar, Medal } from "lucide-react";
// import { useRouter } from "next/navigation";

// const AboutUs = () => {
//   const router = useRouter();

//   const stats = [
//     { 
//       icon: Trophy, 
//       label: "Tournaments Played", 
//       value: "5+", 
//       color: "text-brand-orange",
//       bgImage: "/assets/stats1.png"
//     },
//     { 
//       icon: Medal, 
//       label: "Season In League", 
//       value: "1st", 
//       color: "text-brand-gold",
//       bgImage: "/assets/stats2.png"
//     },
//     { 
//       icon: Calendar, 
//       label: "Active Players", 
//       value: "15+", 
//       color: "text-brand-orange",
//       bgImage: "/assets/stats3.png"
//     },
//     { 
//       icon: Users, 
//       label: "Year of Formation", 
//       value: "2025", 
//       color: "text-brand-gold",
//       bgImage: "/assets/stats4.png"
//     },
//   ];

//   return (
//     <section className="py-12 sm:py-16 bg-background">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
//           <div className="space-y-4 sm:space-y-6">
//             <h3 className="text-3xl sm:text-4xl font-bold text-[#1c0f0d]">ABOUT US</h3>
//             <p className="text-brand-text text-base sm:text-xl leading-relaxed">
//             Ayodhya Super Kings, a professional volleyball franchise representing the sacred city of Ayodhya in the Uttar Pradesh Pro Volleyball League (UPPVL). Established in 2025, the team embodies the spirit of courage, tradition, and competitive excellence. With roots in one of India’s most culturally significant cities, Ayodhya Super Kings stands as a symbol of legacy and pride, bringing together a talented squad to electrify the volleyball courts.

//             </p>
//             <button onClick={() => router.push("/about")} className="bg-[#fab604] rounded-md text-[#1c0f0d] font-semibold px-5 py-1.5 sm:px-6 sm:py-2 transition-all duration-300 hover:scale-105">
//               Read More
//             </button>
//           </div>
//           <div className="relative">
//             <img 
//               src="/assets/aboutsection.png" 
//               alt="Team Photo" 
//               className="rounded-lg shadow-card w-full"
//             />
//           </div>
//         </div>

//         <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-4 sm:gap-6 md:gap-10 lg:gap-20 mt-12 sm:mt-16 md:mt-20">
//           {stats.map((stat, index) => (
//             <div 
//               key={index} 
//               className="bg-[#fab604] w-full sm:w-[180px] md:w-[220px] border-0 shadow-card rounded-3xl relative overflow-hidden h-[100px] sm:h-[120px] md:h-[130px]"
//               style={{
//                 backgroundImage: `url('${stat.bgImage}')`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//             >
//               <div className="p-4 sm:p-6 text-center relative z-10 h-full flex flex-col justify-center">
//                 <h4 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1c0f0d] mb-1">{stat.value}</h4>
//                 <p className="text-[#1c0f0d] text-sm sm:text-base md:text-lg font-medium">{stat.label}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// };

// export default AboutUs;


'use client';
import React, { useState, useEffect } from "react";
import { Trophy, Users, Medal, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const AboutUs = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-[#1c0f0d] mb-4 font-koba opacity-95">
            Welcome To Ayodhya Super Kings
          </h1>
          <p className="text-xl text-[#fab604] font-medium  mb-6">
            Where Legacy Meets Legacy-Makers
          </p>
          <div className="w-20 h-1 bg-[#fab604] mx-auto"></div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-[#1c0f0d] leading-relaxed">
              From the sacred soil of Ram Janmbhoomi to the roaring courts of UPPVL, Ayodhya Super Kings <span className="font-bold"> RISE </span>as a symbol of pride, purpose, and power. We are more than a team — we are the living heartbeat of Ayodhya, blending ancient wisdom with youthful energy to create a new dynasty in Indian volleyball.
            </p>
            <p className="text-lg text-[#1c0f0d] leading-relaxed">
              Every chant in our city echoes dharma, and every move on our court reflects discipline. Inspired by Ayodhya's spiritual legacy and fueled by a new wave of volleyball warriors, our team stands tall — determined to reign not just through strength, but through spirit.
            </p>
            <p className="text-lg text-[#1c0f0d] leading-relaxed">
              Led by iconic mentors and driven by next-gen athletes, we are on a mission to transform devotion into domination, and turn every match into a battle fought with passion, unity, and honor.
            </p>

            {/* Our Mantra */}
            <div className="p-6 rounded-lg text-white mt-8 bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: "url('/assets/bgbanner.png')" }}
    >
              <h3 className="text-xl font-bold text-black mb-2">Our Mantra</h3>
              <p className="text-lg italic text-black">
                Rooted in Tradition. Driven by Destiny. Ready to Rule.
              </p>
            </div>

            {/* Why Choose Us */}
            <div className="mt-8">
              <h3 className="text-3xl text-[#1c0f0d] mb-4 font-koba opacity-95">
                Why Ayodhya Super Kings?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#fab604] mr-2 mt-1">•</span>
                  <span className="text-[#1c0f0d]">Representing the cultural soul of India's most revered city</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fab604] mr-2 mt-1">•</span>
                  <span className="text-[#1c0f0d]">Home to players who play with purpose, not just power</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fab604] mr-2 mt-1">•</span>
                  <span className="text-[#1c0f0d]">Built on values of teamwork, humility, and unshakable focus</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fab604] mr-2 mt-1">•</span>
                  <span className="text-[#1c0f0d]">Backed by experienced leadership and passionate fan support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fab604] mr-2 mt-1">•</span>
                  <span className="text-[#1c0f0d]">A force in the UPPVL — ready to inspire, uplift, and conquer</span>
                </li>
              </ul>
            </div>

            <button 
              onClick={() => router.push("/about")} 
              className="mt-8 bg-[#fab604] hover:bg-[#e6a500] text-[#1c0f0d] font-bold px-8 py-3 rounded-lg transition-colors duration-200 flex items-center group"
            >
              Explore Our Journey
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Image Content */}
          <div className="relative h-full min-h-[400px] lg:min-h-[600px] rounded-xl overflow-hidden shadow-xl">
            {isLoading ? (
              <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
            ) : (
              <Image
                src="/assets/aboutusbanner2.jpg"
                alt="Ayodhya Super Kings Team"
                fill
                className="object-cover object-center"
                loading="lazy"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;