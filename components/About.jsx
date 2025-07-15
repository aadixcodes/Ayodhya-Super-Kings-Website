

import { ChevronLeft, ChevronRight, Trophy, Users, Calendar, Medal } from "lucide-react";
import { useRouter } from "next/navigation";

const AboutUs = () => {
  const router = useRouter();

  const stats = [
    { 
      icon: Trophy, 
      label: "Tournaments Played", 
      value: "15+", 
      color: "text-brand-orange",
      bgImage: "/assets/stats1.png"
    },
    { 
      icon: Medal, 
      label: "Championship Wins", 
      value: "10+", 
      color: "text-brand-gold",
      bgImage: "/assets/stats2.png"
    },
    { 
      icon: Calendar, 
      label: "Active Players", 
      value: "20+", 
      color: "text-brand-orange",
      bgImage: "/assets/stats3.png"
    },
    { 
      icon: Users, 
      label: "Years of Legacy", 
      value: "3+", 
      color: "text-brand-gold",
      bgImage: "/assets/stats4.png"
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-3xl sm:text-4xl font-bold text-[#1c0f0d]">ABOUT US</h3>
            <p className="text-brand-text text-base sm:text-xl leading-relaxed">
              Ayodhya Super Kings is not just a team — it's a brotherhood of passionate volleyball players united by the spirit of the game. Based in the historic city of Ayodhya, we compete with heart, grit, and a commitment to excellence both on and off the court. Every serve, spike, and victory reflects our dedication to the sport and our fans.
            </p>
            <button onClick={() => router.push("/about")} className="bg-[#fab604] rounded-md text-[#1c0f0d] font-semibold px-5 py-1.5 sm:px-6 sm:py-2 transition-all duration-300 hover:scale-105">
              Read More
            </button>
          </div>
          <div className="relative">
            <img 
              src="/assets/aboutsection.png" 
              alt="Team Photo" 
              className="rounded-lg shadow-card w-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-4 sm:gap-6 md:gap-10 lg:gap-20 mt-12 sm:mt-16 md:mt-20">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-[#fab604] w-full sm:w-[180px] md:w-[220px] border-0 shadow-card rounded-3xl relative overflow-hidden h-[100px] sm:h-[120px] md:h-[130px]"
              style={{
                backgroundImage: `url('${stat.bgImage}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="p-4 sm:p-6 text-center relative z-10 h-full flex flex-col justify-center">
                <h4 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1c0f0d] mb-1">{stat.value}</h4>
                <p className="text-[#1c0f0d] text-sm sm:text-base md:text-lg font-medium">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
};

export default AboutUs;