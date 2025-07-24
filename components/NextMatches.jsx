"use client";
import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

const MatchesSection = () => {
  const swiperRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  const matches = [
    {
      id: 1,
      league: "Volleyball Showdown",
      date: "JULY 15, 2025",
      day: "MONDAY",
      time: "18:30",
      team1: { name: "LT", logo: "/assets/lucknowlogo.png" },
      team2: { name: "ASK", logo: "/assets/logo.png" },
      venue: "Vijay Pathak Sports Complex",
      matchNumber: "Match #10",
      bgImage: "/assets/nextmatchcard.png",
    },
    {
      id: 2,
      league: "Smash the Net!",
      date: "JULY 16, 2025",
      day: "TUESDAY",
      time: "19:00",
      team1: { name: "LT", logo: "/assets/lucknowlogo.png" },
      team2: { name: "ASK", logo: "/assets/logo.png" },
      venue: "Vijay Pathak Sports Complex",
      matchNumber: "Match #11",
      bgImage: "/assets/nextmatchcard.png",
    },
    {
      id: 3,
      league: "The Ultimate Serve",
      date: "JULY 17, 2025",
      day: "WEDNESDAY",
      time: "18:30",
      team1: { name: "LT", logo: "/assets/lucknowlogo.png" },
      team2: { name: "ASK", logo: "/assets/logo.png" },
      venue: "Vijay Pathak Sports Complex",
      matchNumber: "Match #12",
      bgImage: "/assets/nextmatchcard.png",
    },
    {
      id: 4,
      league: "Battle at the Net",
      date: "JULY 18, 2025",
      day: "THURSDAY",
      time: "19:00",
      team1: { name: "LT", logo: "/assets/lucknowlogo.png" },
      team2: { name: "ASK", logo: "/assets/logo.png" },
      venue: "Vijay Pathak Sports Complex",
      matchNumber: "Match #13",
      bgImage: "/assets/nextmatchcard.png",
    },
    {
      id: 5,
      league: "Court Kings Clash",
      date: "JULY 19, 2025",
      day: "FRIDAY",
      time: "18:30",
      team1: { name: "LT", logo: "/assets/lucknowlogo.png" },
      team2: { name: "ASK", logo: "/assets/logo.png" },
      venue: "Vijay Pathak Sports Complex",
      matchNumber: "Match #14",
      bgImage: "/assets/nextmatchcard.png",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

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
    <section className="py-16 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-6xl font-koba text-[#1c0f0d] mb-12 text-center">
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
                    className={`relative rounded-2xl overflow-hidden shadow-xl h-[19rem] transition-all duration-300 ${
                      isActive ? "scale-100 z-10" : "scale-90 opacity-80"
                    }`}
                  >
                    {isLoading ? (
                      <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-2xl"></div>
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40"></div>
                        <Image
                          src={match.bgImage}
                          alt="Match background"
                          fill
                          className="object-cover"
                        />
                        <div className="relative h-full flex flex-col p-4 sm:p-6 text-white">
                          {/* League Badge */}
                          <div className="text-center mb-4 sm:mb-6">
                            <span className="inline-block px-3 sm:px-4 py-1 bg-white rounded-full">
                              <p className="text-xs sm:text-sm font-bold text-[#1c0f0d]">
                                {match.league}
                              </p>
                            </span>
                          </div>

                          {/* Date and Day */}
                          <div className="flex justify-between items-center mb-3 sm:mb-4 px-2">
                            <p className="text-sm sm:text-lg font-bold text-black">
                              {match.date}
                            </p>
                            <p className="text-sm sm:text-lg font-bold text-black">
                              {match.day}
                            </p>
                          </div>

                          {/* Teams and Match Info */}
                          <div className="flex items-center justify-between flex-grow px-1">
                            {/* Team 1 */}
                            <div className="flex flex-col items-center w-1/4">
                              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full p-1 flex items-center justify-center mb-2">
                                <Image
                                  src={match.team1.logo}
                                  alt={match.team1.name}
                                  width={60}
                                  height={60}
                                  className="object-contain w-full h-full"
                                />
                              </div>
                              <p className="text-base sm:text-xl font-bold text-black">
                                {match.team1.name}
                              </p>
                            </div>

                            {/* Match Center */}
                            <div className="text-center w-2/4 px-2">
                              <div className="rounded-lg p-2 sm:p-3 mb-1 sm:mb-2">
                                <p className="text-2xl sm:text-3xl font-bold text-[#1c0f0d]">
                                  {match.time}
                                </p>
                              </div>
                              <p className="text-xl sm:text-2xl font-semibold text-black -mt-3 sm:-mt-5">
                                VS
                              </p>
                              <p className="text-xs sm:text-sm text-black leading-tight mt-1">
                                {match.venue}
                              </p>
                            </div>

                            {/* Team 2 */}
                            <div className="flex flex-col items-center w-1/4">
                              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full p-1 flex items-center justify-center mb-2">
                                <Image
                                  src={match.team2.logo}
                                  alt={match.team2.name}
                                  width={60}
                                  height={60}
                                  className="object-contain w-full h-full"
                                />
                              </div>
                              <p className="text-base sm:text-xl font-bold text-black">
                                {match.team2.name}
                              </p>
                            </div>
                          </div>

                          {/* Match Number */}
                          <div className="mt-3 sm:mt-4 text-center">
                            <span className="inline-block px-4 sm:px-6 py-1 bg-white rounded-full">
                              <p className="text-xs sm:text-sm font-bold text-[#1c0f0d]">
                                {match.matchNumber}
                              </p>
                            </span>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-6 sm:mt-8 gap-4">
            <button
              onClick={handlePrevSlide}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#fab604] text-[#1c0f0d] flex items-center justify-center hover:bg-[#e0a500] transition-all duration-200 hover:scale-110 shadow-md"
              aria-label="Previous match"
            >
              <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={handleNextSlide}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#fab604] text-[#1c0f0d] flex items-center justify-center hover:bg-[#e0a500] transition-all duration-200 hover:scale-110 shadow-md"
              aria-label="Next match"
            >
              <ChevronRight size={20} className="sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MatchesSection;