"use client";

import { useState } from "react";
import Partner from "@/components/Partners";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function Fixtures() {
  const [activeTab, setActiveTab] = useState("Teams");

  const fixturesData = [
    {
      id: 1,
      team1: {
        name: "Lucknow Tigers",
        logo: "/assets/lucknowlogo.png",
      },
      team2: {
        name: "Ayodhya Super Kings",
        logo: "/assets/logo.png",
      },
      date: "July 14, 2025",
      stadium: "Shaheed Vijay Singh Pathak Sports Complex Indoor Stadium",
      featured: true,
    },
    {
      id: 2,
      team1: {
        name: "Team A",
        logo: "/assets/lucknowlogo.png",
      },
      team2: {
        name: "Team B",
        logo: "/assets/logo.png",
      },
      date: "July 21, 2025",
      stadium: "Stadium name",
      featured: false,
    },
    {
      id: 3,
      team1: {
        name: "Team B",
        logo: "/assets/lucknowlogo.png",
      },
      team2: {
        name: "Team B",
        logo: "/assets/logo.png",
      },
      date: "July 22, 2025",
      stadium: "Stadium name",
      featured: false,
    },
    {
      id: 4,
      team1: {
        name: "Team C",
        logo: "/assets/lucknowlogo.png",
      },
      team2: {
        name: "Team B",
        logo: "/assets/logo.png",
      },
      date: "July 23, 2025",
      stadium: "Stadium name",
      featured: false,
    },
    {
      id: 5,
      team1: {
        name: "Team D",
        logo: "/assets/lucknowlogo.png",
      },
      team2: {
        name: "Team B",
        logo: "/assets/logo.png",
      },
      date: "July 24, 2025",
      stadium: "Stadium name",
      featured: false,
    },
    {
      id: 6,
      team1: {
        name: "Team D",
        logo: "/assets/lucknowlogo.png",
      },
      team2: {
        name: "Team B",
        logo: "/assets/logo.png",
      },
      date: "July 25, 2025",
      stadium: "Stadium name",
      featured: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <section className="relative w-full overflow-hidden">
        <div className="relative h-[220px] sm:h-[260px] md:h-[320px] lg:h-[380px] xl:h-[420px]">
          <img
            src="/assets/pagesBanner.png"
            alt="Team Banner"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-[#1c0f0d] p-4">
            {/* <nav className="text-xs sm:text-sm md:text-base mb-2 mt-12 sm:mt-0">
              <span>Home / </span>
              <span>fixtures</span>
            </nav> */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-koba opacity-95 text-[#1c0f0d] mt-14">
              Matches Schedule
            </h1>
          </div>
        </div>
      </section>

      {/* Fixtures Schedule Section */}
      <section className="pt-8 sm:pt-12 md:pt-16 lg:pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Fixtures Grid */}
          <div className="space-y-4 sm:space-y-6">
            {fixturesData.map((fixture, index) => (
              <div
                key={fixture.id}
                className={`relative rounded-lg sm:rounded-xl overflow-hidden shadow-lg transition-transform bg-[#ffb900]`}
              >
                {fixture.featured && (
                  <div className="w-full h-2 bg-[#fab604]"></div>
                )}
                <div>
                  {fixture.featured ? (
                    // ✅ Updated Responsive Featured Match Layout
                    <div className="flex flex-col items-center text-center space-y-4 sm:space-y-6 pt-4 px-2 sm:px-0">
                      {/* Teams Row */}
                      <div className="flex flex-row items-center justify-center w-full max-w-xs sm:max-w-4xl">
                        {/* Team 1 */}
                        <div className="flex flex-col-reverse md:flex-row items-center gap-0 md:gap-2 w-1/3 justify-end">
                          <span className="text-lg sm:text-lg md:text-xl font-bold text-[#1c0f0d] text-center">
                            {fixture.team1.name}
                          </span>
                          <div className="w-24 h-24 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center p-1">
                            <img
                              src={fixture.team1.logo}
                              alt={fixture.team1.name}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        </div>

                        {/* VS */}
                        <div className="text-4xl font-bold text-[#1c0f0d] px-6 text-center">
                          VS
                        </div>

                        {/* Team 2 */}
                        <div className="flex flex-col md:flex-row items-center gap-0 md:gap-2 w-1/3 justify-start">
                          <div className="w-24 h-24 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center p-1">
                            <img
                              src={fixture.team2.logo}
                              alt={fixture.team2.name}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <span className="text-lg sm:text-lg md:text-xl font-bold text-[#1c0f0d] text-center">
                            {fixture.team2.name}
                          </span>
                        </div>
                      </div>

                      {/* Match Info Row */}
                      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
                        <div className="text-white bg-[#1c0f0d] px-4 py-2 text-xs sm:text-base rounded-lg font-medium">
                          {fixture.date}
                        </div>
                        <div className="text-[#1c0f0d] text-xs sm:text-base md:text-lg font-medium">
                          {fixture.stadium}
                        </div>
                      </div>

                      {/* Yellow Divider */}
                      <div className="w-full h-8 bg-[#fcda20] flex items-center justify-center">
                        <span className="text-xs sm:text-sm md:text-base font-semibold text-[#1c0f0d]">
                          Teams | Dates
                        </span>
                      </div>
                    </div>
                  ) : (
                    // Regular Match Layout
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-2 px-6">
                      {/* Left Side - Teams */}
                      <div className="flex items-center justify-center sm:justify-start w-full sm:w-auto gap-4">
                        {/* Team 1 */}
                        <div className="flex items-center gap-3">
                          <span className="text-sm sm:text-base font-bold text-[#1c0f0d]">
                            {fixture.team1.name}
                          </span>
                          <div className="w-12 h-12 sm:w-14 sm:h-14  rounded-full flex items-center justify-center  p-1">
                            <img
                              src={fixture.team1.logo}
                              alt={fixture.team1.name}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        </div>

                        {/* VS */}
                        <span className="text-xl sm:text-2xl font-bold text-[#1c0f0d]">
                          VS
                        </span>

                        {/* Team 2 */}
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center  p-1">
                            <img
                              src={fixture.team2.logo}
                              alt={fixture.team2.name}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <span className="text-sm sm:text-base font-bold text-[#1c0f0d]">
                            {fixture.team2.name}
                          </span>
                        </div>
                      </div>

                      {/* Right Side - Date & Stadium */}
                      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
                        <div className="bg-[#1c0f0d] text-white px-3 sm:px-4 py-1 sm:py-2 rounded text-xs sm:text-sm font-semibold whitespace-nowrap">
                          {fixture.date}
                        </div>
                        <div className="text-[#1c0f0d] text-xs sm:text-sm font-medium text-center sm:text-left">
                          {fixture.stadium}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Partner />
    </div>
  );
}
