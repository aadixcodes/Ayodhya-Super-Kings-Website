"use client";
import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const MatchesSection = () => {
  const swiperRef = useRef(null);

  const matches = [
    {
      id: 1,
      league: "Volleyball Showdown",
      date: "JULY 15, 2025",
      day: "MONDAY",
      time: "00:00",
      team1: { name: "LT", logo: "/assets/lucknowlogo.png" },
      team2: { name: "ASK", logo: "/assets/logo.png" },
      venue: "Shaheed Vijay Singh Pathak Sports Complex Indoor Stadium",
      matchNumber: "Match #10",
      bgImage: "/assets/nextmatchcard.png",
    },
    {
      id: 2,
      league: "Smash the Net!",
      date: "JULY 15, 2025",
      day: "MONDAY",
      time: "00:00",
      team1: { name: "LT", logo: "/assets/lucknowlogo.png" },
      team2: { name: "ASK", logo: "/assets/logo.png" },
      venue: "Shaheed Vijay Singh Pathak Sports Complex Indoor Stadium",
      matchNumber: "Match #11",
      bgImage: "/assets/nextmatchcard.png",
    },
    {
      id: 3,
      league: "The Ultimate Serve",
      date: "JULY 15, 2025",
      day: "MONDAY",
      time: "00:00",
      team1: { name: "LT", logo: "/assets/lucknowlogo.png" },
      team2: { name: "ASK", logo: "/assets/logo.png" },
      venue: "Shaheed Vijay Singh Pathak Sports Complex Indoor Stadium",
      matchNumber: "Match #12",
      bgImage: "/assets/nextmatchcard.png",
    },
    {
      id: 4,
      league: "Battle at the Net",
      date: "JULY 16, 2025",
      day: "TUESDAY",
      time: "00:00",
      team1: { name: "LT", logo: "/assets/lucknowlogo.png" },
      team2: { name: "ASK", logo: "/assets/logo.png" },
      venue: "Shaheed Vijay Singh Pathak Sports Complex Indoor Stadium",
      matchNumber: "Match #13",
      bgImage: "/assets/nextmatchcard.png",
    },
    {
      id: 5,
      league: "Court Kings Clash",
      date: "JULY 17, 2025",
      day: "WEDNESDAY",
      time: "00:00",
      team1: { name: "LT", logo: "/assets/lucknowlogo.png" },
      team2: { name: "ASK", logo: "/assets/logo.png" },
      venue: "Shaheed Vijay Singh Pathak Sports Complex Indoor Stadium",
      matchNumber: "Match #14",
      bgImage: "/assets/nextmatchcard.png",
    },
  ];

  const handlePrevSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-[#1c0f0d] mb-12 text-center">
          OUR NEXT MATCHES
        </h2>

        <div className="relative">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Autoplay]}
            loop={true}
            loopedSlides={matches.length}
            slidesPerView={2.5}
            centeredSlides={true}
            spaceBetween={20}
            speed={600}
            autoplay={false}
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
            onSwiper={(swiper) => {
              // Ensure proper initialization
              swiper.loopCreate();
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
                        <div className="w-18 h-18 rounded-full flex items-center justify-center overflow-hidden">
                          <img
                            src={match.team1.logo}
                            alt={match.team1.name}
                            className="w-16 h-16 object-contain"
                          />
                        </div>

                        <div className="text-center">
                          <p className="text-3xl font-bold text-[#1c0f0d]">
                            {match.time}
                          </p>
                          <p className="text-xl font-bold text-[#1c0f0d] ">
                            {match.team1.name} vs {match.team2.name}
                          </p>
                          <p className="text-sm text-[#1c0f0d]">
                            {match.venue}
                          </p>
                        </div>

                        <div className="w-18 h-18 rounded-full flex items-center justify-center overflow-hidden">
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
            <button 
              onClick={handlePrevSlide}
              className="w-12 h-12 rounded-full bg-[#fab604] text-[#1c0f0d] flex items-center justify-center hover:bg-[#e0a500] transition-colors duration-200 hover:scale-110"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={handleNextSlide}
              className="w-12 h-12 rounded-full bg-[#fab604] text-[#1c0f0d] flex items-center justify-center hover:bg-[#e0a500] transition-colors duration-200 hover:scale-110"
            >
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