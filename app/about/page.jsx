'use client';
import React from "react";
import { Trophy, Users, Target, Award, Check } from "lucide-react";
import Partner from "@/components/Partners";
import { useRouter } from "next/navigation";


const About = () => {
  const router = useRouter();

  const stats = [
    { value: "5+", label: "Matches", label2: "Played" },
    { value: "10+", label: "Trophies", label2: "Won" },
    { value: "3+", label: "Year of", label2: "Legacy" },
    { value: "15+", label: "Active", label2: "Players" },
  ];

  const timelineItems = [
    {
      year: "2025",
      title: "Future Goals",
      description:
        "Expanding our reach to national tournaments and nurturing young talent through volleyball academies.",
      image: "/assets/timeline-image.jpg",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="relative h-[220px] sm:h-[260px] md:h-[320px] lg:h-[380px] xl:h-[420px]">
          <img
            src="/assets/pagesBanner.png"
            alt="Team Banner"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-[#1c0f0d] p-4">
            <nav className="text-xs sm:text-sm md:text-base mb-2 mt-12 sm:mt-0">
              <span>Home / </span>
              <span>aboutus</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              About Us
            </h1>
          </div>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-center items-center mb-16 gap-8 md:gap-0">
            <div className="lg:w-1/2">
              <img
                src="/assets/aboutus1.png"
                alt="about us image"
                className="w-full h-auto rounded-lg"
              />
            </div>

            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1c0f0d]">
                About <br /> <span> Ayodhya Super Kings</span>
              </h2>
              <p className="text-[#1c0f0d] leading-relaxed">
                Ayodhya Super Kings is a passionate volleyball team founded to
                unite young, determined players and create unmatched team spirit
                — we aim to take volleyball to new heights in our region.
              </p>
              <p className="text-[#1c0f0d] leading-relaxed">
                Our team participates in local, district, and regional-level
                tournaments, creating memorable matches and setting new
                benchmarks for competitive volleyball.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                {/* Manager */}
                <div className="flex items-center gap-4 p-4 rounded-lg">
                  <Check className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" />
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm sm:text-base">
                      Manager
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Manager Name
                    </p>
                  </div>
                </div>

                {/* Player */}
                <div className="flex items-center gap-4 p-4 rounded-lg">
                  <Check className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" />
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm sm:text-base">
                      Player
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600">
                      15 Active Players
                    </p>
                  </div>
                </div>

                {/* Coach */}
                <div className="flex items-center gap-4 p-4 rounded-lg col-span-2 md:col-span-1 justify-self-center md:justify-self-auto">
                  <Check className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" />
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm sm:text-base">
                      Coach
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Amrit Pal Singh
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center md:justify-start">
                <button onClick={() => router.push("/our-team")} className="bg-[#fab604] text-[#1c0f0d] hover:scale-105 font-semibold px-6 sm:px-8 py-2 text-sm sm:text-base rounded-lg transition-colors duration-200 mt-6">
                  Our Team →
                </button>
              </div>
            </div>
          </div>

          {/* Updated Stats Section */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4 mb-16">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex flex-row sm:flex-row items-center justify-center text-center sm:text-left"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-yellow-400/60 to-transparent flex items-center justify-center mb-2 sm:mb-0 sm:mr-4">
                  <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1c0f0d]">
                    {stat.value}
                  </span>
                </div>
                <div>
                  <p className="text-[#1c0f0d] text-md sm:text-base md:text-lg ml-[10px] md:ml-0 font-medium">
                    {stat.label} <br /> {stat.label2}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Updated Timeline Section */}
      <section
        className="py-16 relative flex flex-col justify-center items-center gap-6 bg-cover bg-center"
        style={{
          backgroundImage: `url('/assets/aboutusbanner.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center -8rem",
        }}
      >
        {/* Year Selection Buttons */}
        <div className="w-full md:w-[65%] h-16 flex justify-center">
          <div className="flex gap-4 p-2 overflow-x-auto w-full">
            {[2025].map((year) => (
              <button
                key={year}
                className="px-6 py-2 bg-white text-[#1c0f0d] font-bold duration-300 whitespace-nowrap rounded-md"
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Content */}
        <div className="w-full md:w-[80%] h-auto min-h-[20rem] flex flex-col lg:flex-row justify-center gap-6 p-4 md:p-0">
          {/* Text Content */}
          <div className="w-full lg:w-[50rem] h-full py-6 md:py-8 flex flex-col">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#1c0f0d]">
                The Rise of Ayodhya <br /> Super Kings
              </h1>
            </div>
            <div>
              <p className="text-[#1c0f0d] text-base md:text-lg">
                Since our formation, Ayodhya Super Kings has been a rising force
                in local volleyball circuits. From early invitational
                tournaments to district-level championships, every season has
                been a step forward.
                <br />
                <br />
                We secured our first major trophy in 2023 and reached the finals
                in several prestigious events, with each match adding to our
                experience, unity, and hunger to win.
              </p>
            </div>
          </div>

          {/* Image Content */}
          <div className="w-full lg:w-[25rem] h-[25rem] flex-shrink-0 flex items-center justify-center p-2">
            <img
              src="/assets/aboutus2.png"
              alt="Ayodhya Super Kings Team"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Dugout Section */}
      <section className="pt-16 pb-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
              Our Dugout
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Behind every great team is a great vision. Meet the passionate
              leaders guiding Ayodhya Super Kings towards glory on and off the
              court.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 sm:gap-8 px-4">
            {/* Pratibha Tiwari */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-[420px] h-auto sm:h-[760px]">
              <div className="relative w-full h-[300px] sm:h-[520px]">
                <img
                  src="/assets/pratibha2.png"
                  alt="Pratibha Tiwari"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#fcda20]/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-center w-full">
                  <h3 className="text-2xl sm:text-4xl font-bold text-[#1c0f0d]">
                    Pratibha Tiwari
                  </h3>
                  <p className="text-[#1c0f0d] text-xl sm:text-2xl">
                    Owner, ASK
                  </p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-[#1c0f0d] leading-relaxed text-sm sm:text-base">
                  As Owner of Ayodhya Super Kings, Pratibha Tiwari has been
                  instrumental in shaping the team's vision, fostering young
                  talent, and promoting the culture of competitive volleyball in
                  Ayodhya.
                </p>
              </div>
            </div>

            {/* Amrit Pal Singh */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-[420px] h-auto sm:h-[760px]">
              <div className="relative w-full h-[300px] sm:h-[520px]">
                <img
                  src="/assets/amritpal2.png"
                  alt="Amrit Pal Singh"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#fcda20]/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-center w-full">
                  <h3 className="text-2xl sm:text-4xl font-bold text-[#1c0f0d]">
                    Amrit Pal Singh
                  </h3>
                  <p className="text-[#1c0f0d] text-xl sm:text-2xl">
                    Head Coach, ASK
                  </p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-[#1c0f0d] leading-relaxed text-sm sm:text-base">
                  Amrit Pal Singh, the Head Coach of Ayodhya Super Kings, is the
                  tactical mind behind the team's success. With his sharp
                  strategies, disciplined training sessions, and ability to
                  bring out the best in every player, he ensures the team stays
                  competitive, confident, and united on the court.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Partner />
    </div>
  );
};

export default About;
