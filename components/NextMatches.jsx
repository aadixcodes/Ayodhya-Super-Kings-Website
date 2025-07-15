// import React, { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const MatchesSection = () => {
//   const matches = [
//     {
//       id: 1,
//       league: "Uttar Pradesh Pro Volleyball League",
//       date: "JULY 15, 2025",
//       day: "MONDAY",
//       time: "19:30",
//       team1: { name: "LT", logo: "/assets/lucknowlogo.png" },
//       team2: { name: "ASK", logo: "/assets/logo.png" },
//       venue: "KD Singh Babu Stadium, Lucknow",
//       matchNumber: "Match #10",
//       bgImage: "/assets/nextmatchcard.png"
//     },
//     {
//       id: 2,
//       league: "Uttar Pradesh Pro Volleyball League",
//       date: "JULY 15, 2025",
//       day: "MONDAY",
//       time: "18:00",
//       team1: { name: "LT", logo: "/assets/lucknowlogo.png" },
//       team2: { name: "ASK", logo: "/assets/logo.png" },
//       venue: "Gorakhpur Sports Complex",
//       matchNumber: "Match #11",
//       bgImage: "/assets/nextmatchcard.png"
//     },
//     {
//       id: 3,
//       league: "Uttar Pradesh Pro Volleyball League",
//       date: "JULY 15, 2025",
//       day: "MONDAY",
//       time: "20:00",
//       team1: { name: "LT", logo: "/assets/lucknowlogo.png" },
//       team2: { name: "ASK", logo: "/assets/logo.png" },
//       venue: "Ayodhya Sports Arena",
//       matchNumber: "Match #12",
//       bgImage: "/assets/nextmatchcard.png"
//     }
//   ];

//   const [currentIndex, setCurrentIndex] = useState(1);

//   const scrollLeft = () => {
//     setCurrentIndex(prev => Math.max(0, prev - 1));
//   };

//   const scrollRight = () => {
//     setCurrentIndex(prev => Math.min(matches.length - 1, prev + 1));
//   };

//   return (
//     <section className="py-16 bg-background">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-4xl font-bold text-[#1c0f0d] mb-12 text-center">OUR NEXT MATCHES</h2>
        
//         <div className="relative">
//           <div className="flex items-center justify-center gap-4 md:gap-8 overflow-hidden">
//             {matches.map((match, index) => (
//               <div
//                 key={match.id}
//                 className={`transition-all duration-500 ease-in-out ${index === currentIndex ? 'w-full max-w-2xl' : 'w-full max-w-md opacity-80 scale-90'}`}
//               >
//                 <div 
//                   className="relative rounded-xl overflow-hidden shadow-lg h-[17rem]"
//                   style={{ backgroundImage: `url('${match.bgImage}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
//                 >
//                   {/* <div className="absolute inset-0 bg-black/40"></div> */}
//                   <div className="relative h-full flex flex-col p-6 text-white">
                 
//                     <div className="text-center mb-6 bg-white rounded-md">
//                       <p className="text-sm font-medium tracking-wider text-[#1c0f0d]">{match.league}</p>
//                     </div>
                    
                 
//                     <div className="flex justify-between items-center mb-2">
//                       <p className="text-lg font-bold  text-[#1c0f0d]">{match.date}</p>
//                       <p className="text-lg font-bold text-[#1c0f0d]">{match.day}</p>
//                     </div>
                    
                 
//                     <div className="flex items-center justify-between flex-grow -mt-8">
//                       {/* Team 1 Logo */}
//                       <div className="w-16 h-16 rounded-full flex items-center justify-center overflow-hidden">
//                         <img src={match.team1.logo} alt={match.team1.name} className="w-16 h-16 object-contain" />
//                       </div>
                      
                     
//                       <div className="text-center">
//                         <p className="text-2xl font-bold text-[#1c0f0d]">{match.time}</p>
//                         <p className="text-xl font-bold  text-[#1c0f0d]">{match.team1.name} vs {match.team2.name}</p>
//                         <p className="text-sm  text-[#1c0f0d]">{match.venue}</p>
//                       </div>
                      
                     
//                       <div className="w-16 h-16 rounded-full  flex items-center justify-center overflow-hidden">
//                         <img src={match.team2.logo} alt={match.team2.name} className="w-16 h-16 object-contain" />
//                       </div>
//                     </div>
                    
                  
//                     <div className="mt-auto relative">
//                       <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 w-32 h-8 bg-white clip-tilt flex items-center justify-center">
//                         <p className="text-[#1c0f0d] text-sm font-bold">{match.matchNumber}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
          
//           {/* <!-- Navigation Buttons --> */}
//           <div className="flex justify-center mt-8 gap-4">
//             <button 
//               onClick={scrollLeft}
//               className="w-12 h-12 rounded-full bg-[#fab604] text-[#1c0f0d] flex items-center justify-center hover:bg-[#e0a500] transition-colors"
//             >
//               <ChevronLeft size={24} />
//             </button>
//             <button 
//               onClick={scrollRight}
//               className="w-12 h-12 rounded-full bg-[#fab604] text-[#1c0f0d] flex items-center justify-center hover:bg-[#e0a500] transition-colors"
//             >
//               <ChevronRight size={24} />
//             </button>
//           </div>
//         </div>
//       </div>

//       <style>
//         {`
//           .clip-tilt {
//             clip-path: polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%);
//           }
//         `}
//       </style>
//     </section>
//   );
// };

// export default MatchesSection;


// "use client";
// import React from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";

// const MatchesSection = () => {
//   const matches = [
//     {
//       id: 1,
//       league: "Uttar Pradesh Pro Volleyball League",
//       date: "JULY 15, 2025",
//       day: "MONDAY",
//       time: "19:30",
//       team1: { name: "LT", logo: "/assets/lucknowlogo.png" },
//       team2: { name: "ASK", logo: "/assets/logo.png" },
//       venue: "KD Singh Babu Stadium, Lucknow",
//       matchNumber: "Match #10",
//       bgImage: "/assets/nextmatchcard.png",
//     },
//     {
//       id: 2,
//       league: "Uttar Pradesh Pro Volleyball League",
//       date: "JULY 15, 2025",
//       day: "MONDAY",
//       time: "18:00",
//       team1: { name: "LT", logo: "/assets/lucknowlogo.png" },
//       team2: { name: "ASK", logo: "/assets/logo.png" },
//       venue: "Gorakhpur Sports Complex",
//       matchNumber: "Match #11",
//       bgImage: "/assets/nextmatchcard.png",
//     },
//     {
//       id: 3,
//       league: "Uttar Pradesh Pro Volleyball League",
//       date: "JULY 15, 2025",
//       day: "MONDAY",
//       time: "20:00",
//       team1: { name: "LT", logo: "/assets/lucknowlogo.png" },
//       team2: { name: "ASK", logo: "/assets/logo.png" },
//       venue: "Ayodhya Sports Arena",
//       matchNumber: "Match #12",
//       bgImage: "/assets/nextmatchcard.png",
//     },
//   ];

//   return (
//     <section className="py-16 bg-background">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-4xl font-bold text-[#1c0f0d] mb-12 text-center">
//           OUR NEXT MATCHES
//         </h2>

//         <div className="relative">
//           <Swiper
//             modules={[Navigation]}
//             navigation={{
//               nextEl: ".swiper-button-next-custom",
//               prevEl: ".swiper-button-prev-custom",
//             }}
//             loop={true}
//             slidesPerView={2.5}
//             centeredSlides={true}
//             spaceBetween={20}
//             className="overflow-visible"
//           >
//             {matches.map((match) => (
//               <SwiperSlide key={match.id}>
//                 <div
//                   className="relative rounded-xl max-w-lg overflow-hidden shadow-lg h-[17rem] transition-all duration-500 ease-in-out"
//                   style={{
//                     backgroundImage: `url('${match.bgImage}')`,
//                     backgroundSize: "cover",
//                     backgroundPosition: "center",
//                   }}
//                 >
//                   <div className="relative h-full flex flex-col p-6 text-white">
//                     <div className="text-center mb-6 bg-white rounded-md">
//                       <p className="text-sm font-medium tracking-wider text-[#1c0f0d]">
//                         {match.league}
//                       </p>
//                     </div>

//                     <div className="flex justify-between items-center mb-2">
//                       <p className="text-lg font-bold text-[#1c0f0d]">
//                         {match.date}
//                       </p>
//                       <p className="text-lg font-bold text-[#1c0f0d]">
//                         {match.day}
//                       </p>
//                     </div>

//                     <div className="flex items-center justify-between flex-grow -mt-8">
//                       <div className="w-16 h-16 rounded-full flex items-center justify-center overflow-hidden">
//                         <img
//                           src={match.team1.logo}
//                           alt={match.team1.name}
//                           className="w-16 h-16 object-contain"
//                         />
//                       </div>

//                       <div className="text-center">
//                         <p className="text-2xl font-bold text-[#1c0f0d]">
//                           {match.time}
//                         </p>
//                         <p className="text-xl font-bold text-[#1c0f0d]">
//                           {match.team1.name} vs {match.team2.name}
//                         </p>
//                         <p className="text-sm text-[#1c0f0d]">{match.venue}</p>
//                       </div>

//                       <div className="w-16 h-16 rounded-full flex items-center justify-center overflow-hidden">
//                         <img
//                           src={match.team2.logo}
//                           alt={match.team2.name}
//                           className="w-16 h-16 object-contain"
//                         />
//                       </div>
//                     </div>

//                     <div className="mt-auto relative">
//                       <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 w-32 h-8 bg-white clip-tilt flex items-center justify-center">
//                         <p className="text-[#1c0f0d] text-sm font-bold">
//                           {match.matchNumber}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           {/* Navigation Buttons */}
//           <div className="flex justify-center mt-8 gap-4">
//             <button className="swiper-button-prev-custom w-12 h-12 rounded-full bg-[#fab604] text-[#1c0f0d] flex items-center justify-center hover:bg-[#e0a500] transition-colors">
//               <ChevronLeft size={24} />
//             </button>
//             <button className="swiper-button-next-custom w-12 h-12 rounded-full bg-[#fab604] text-[#1c0f0d] flex items-center justify-center hover:bg-[#e0a500] transition-colors">
//               <ChevronRight size={24} />
//             </button>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         .clip-tilt {
//           clip-path: polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%);
//         }
//       `}</style>
//     </section>
//   );
// };

// export default MatchesSection;



"use client";
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const MatchesSection = () => {
  const matches = [
    {
      id: 1,
      league: "Uttar Pradesh Pro Volleyball League",
      date: "JULY 15, 2025",
      day: "MONDAY",
      time: "19:30",
      team1: { name: "LT", logo: "/assets/lucknowlogo.png" },
      team2: { name: "ASK", logo: "/assets/logo.png" },
      venue: "KD Singh Babu Stadium, Lucknow",
      matchNumber: "Match #10",
      bgImage: "/assets/nextmatchcard.png",
    },
    {
      id: 2,
      league: "Uttar Pradesh Pro Volleyball League",
      date: "JULY 15, 2025",
      day: "MONDAY",
      time: "18:00",
      team1: { name: "LT", logo: "/assets/lucknowlogo.png" },
      team2: { name: "ASK", logo: "/assets/logo.png" },
      venue: "Gorakhpur Sports Complex",
      matchNumber: "Match #11",
      bgImage: "/assets/nextmatchcard.png",
    },
    {
      id: 3,
      league: "Uttar Pradesh Pro Volleyball League",
      date: "JULY 15, 2025",
      day: "MONDAY",
      time: "20:00",
      team1: { name: "LT", logo: "/assets/lucknowlogo.png" },
      team2: { name: "ASK", logo: "/assets/logo.png" },
      venue: "Ayodhya Sports Arena",
      matchNumber: "Match #12",
      bgImage: "/assets/nextmatchcard.png",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-[#1c0f0d] mb-12 text-center">
          OUR NEXT MATCHES
        </h2>

        <div className="relative">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            loop={true}
            loopedSlides={matches.length}
            slidesPerView={2.5}
            centeredSlides={true}
            spaceBetween={20}
            className="overflow-visible"
            breakpoints={{
              320: {
                slidesPerView: 1.1,
              },
              640: {
                slidesPerView: 1.5,
              },
              1024: {
                slidesPerView: 2.5,
              },
            }}
          >
            {matches.map((match) => (
              <SwiperSlide key={match.id}>
                {({ isActive }) => (
                  <div
                    className={`relative rounded-xl max-w-lg overflow-hidden shadow-lg h-[17rem] transition-all duration-500 ease-in-out ${
                      isActive ? "scale-105 rounded-xl" : "scale-90 opacity-70"
                    }`}
                    style={{
                      backgroundImage: `url('${match.bgImage}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="relative h-full flex flex-col p-6 text-white">
                      <div className="text-center mb-6 bg-white rounded-md">
                        <p className="text-sm font-medium tracking-wider text-[#1c0f0d]">
                          {match.league}
                        </p>
                      </div>

                      <div className="flex justify-between items-center mb-2">
                        <p className="text-lg font-bold text-[#1c0f0d]">
                          {match.date}
                        </p>
                        <p className="text-lg font-bold text-[#1c0f0d]">
                          {match.day}
                        </p>
                      </div>

                      <div className="flex items-center justify-between flex-grow -mt-8">
                        <div className="w-16 h-16 rounded-full flex items-center justify-center overflow-hidden">
                          <img
                            src={match.team1.logo}
                            alt={match.team1.name}
                            className="w-16 h-16 object-contain"
                          />
                        </div>

                        <div className="text-center">
                          <p className="text-2xl font-bold text-[#1c0f0d]">
                            {match.time}
                          </p>
                          <p className="text-xl font-bold text-[#1c0f0d]">
                            {match.team1.name} vs {match.team2.name}
                          </p>
                          <p className="text-sm text-[#1c0f0d]">
                            {match.venue}
                          </p>
                        </div>

                        <div className="w-16 h-16 rounded-full flex items-center justify-center overflow-hidden">
                          <img
                            src={match.team2.logo}
                            alt={match.team2.name}
                            className="w-16 h-16 object-contain"
                          />
                        </div>
                      </div>

                      <div className="mt-auto relative">
                        <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 w-32 h-8 bg-white clip-tilt flex items-center justify-center">
                          <p className="text-[#1c0f0d] text-sm font-bold">
                            {match.matchNumber}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 gap-4">
            <button className="swiper-button-prev-custom w-12 h-12 rounded-full bg-[#fab604] text-[#1c0f0d] flex items-center justify-center hover:bg-[#e0a500] transition-colors">
              <ChevronLeft size={24} />
            </button>
            <button className="swiper-button-next-custom w-12 h-12 rounded-full bg-[#fab604] text-[#1c0f0d] flex items-center justify-center hover:bg-[#e0a500] transition-colors">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .clip-tilt {
          clip-path: polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%);
        }
      `}</style>
    </section>
  );
};

export default MatchesSection;
