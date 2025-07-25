"use client";
import React, { useState, useEffect } from "react";
import { Trophy, Users, Target, Award, Medal } from "lucide-react";
import Partner from "@/components/Partners";
import { useRouter } from "next/navigation";
import Image from "next/image";

const About = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f8f8]">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="relative h-[220px] sm:h-[260px] md:h-[320px] lg:h-[380px] xl:h-[420px]">
          <Image
            src="/assets/pagesBanner.png"
            alt="Team Banner"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-[#1c0f0d] p-4">
            {/* <nav className="text-xs sm:text-sm md:text-base mb-2 mt-12 sm:mt-0">
              <span>Home / </span>
              <span>About Us</span>
            </nav> */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-koba opacity-95 text-[#1c0f0d] mt-14">
              About Us
            </h1>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-koba text-[#1c0f0d] opacity-95 mb-4">
              Who Are We?
            </h2>
            <div className="w-20 h-1 bg-[#fab604] mx-auto mb-6"></div>
            <p className="text-lg text-[#1c0f0d] max-w-4xl mx-auto leading-relaxed">
              Ayodhya Super Kings is not just a volleyball team — we are the
              collective spirit of Ayodhya, reborn on the court. Rooted in one
              of India's most sacred and historically rich cities, our team
              carries the legacy of dharma, courage, and discipline, inspired by
              the timeless values of Ayodhya and its divine heritage.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Logo Image - Responsive Sizing */}
            <div className="w-full lg:w-1/2 flex justify-center">
              {isLoading ? (
                <div className="relative w-full max-w-md aspect-[2/1] bg-gray-200 animate-pulse rounded-xl"></div>
              ) : (
                <div className="relative w-full max-w-md h-auto">
                  <Image
                    src="/assets/logo.png"
                    alt="Ayodhya Super Kings Logo"
                    width={600}
                    height={300}
                    className="rounded-xl object-contain w-full h-auto"
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 600px"
                  />
                </div>
              )}
            </div>

            <div className="w-full lg:w-1/2 space-y-6">
              <p className="text-[#1c0f0d] leading-relaxed">
                Our players don't just represent talent — they represent a
                movement. A movement where tradition meets transformation, where
                the spirit of Ram Rajya echoes in every serve, and where
                teamwork becomes a path to glory. Every practice, every point,
                and every match is a reflection of the strength, unity, and
                resilience that Ayodhya has stood for through ages.
              </p>
              <p className="text-[#1c0f0d] leading-relaxed">
                Led by icons of Indian volleyball and powered by a dynamic youth
                force, Ayodhya Super Kings is building a new kingdom of
                champions in the Uttar Pradesh Pro Volleyball League. We believe
                in playing with purpose, competing with honor, and inspiring a
                generation through every game we play.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={() => router.push("/our-team")}
                  className="bg-[#fab604] text-[#1c0f0d] hover:bg-[#e6a500] font-bold px-6 py-3 rounded-lg transition-colors duration-200"
                >
                  Meet Our Team
                </button>
                <button
                  onClick={() => router.push("/fixtures")}
                  className="border-2 border-[#fab604] text-[#1c0f0d] hover:bg-[#fab604]/10 font-bold px-6 py-3 rounded-lg transition-colors duration-200"
                >
                  View Fixtures
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section
        className="py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: "url('/assets/bgbanner.png')" }}
      >
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 mr-4 text-[#1c0f0d]" />
                <h3 className="text-2xl font-bold text-[#1c0f0d]">Mission</h3>
              </div>
              <p className="text-[#1c0f0d] leading-relaxed">
                To channel Ayodhya's spiritual legacy into a dominant volleyball
                force — turning divinity into discipline, tradition into
                triumph.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: "url('/assets/bgbanner.png')" }}
      >
              <div className="flex items-center mb-6">
                <Award className="w-8 h-8 mr-4 text-[#1c0f0d]" />
                <h3 className="text-2xl font-bold text-[#1c0f0d]">Vision</h3>
              </div>
              <p className="text-[#1c0f0d] leading-relaxed">
                To create a globally recognized sports identity that reflects
                Ayodhya's soul and India's rising sports culture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Updated Timeline Section with enhanced image styling */}
      <section
        className="py-16 my-16 relative flex flex-col justify-center items-center gap-6 bg-cover bg-center"
        style={{
          backgroundImage: `url('/assets/aboutusbanner.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center -8rem",
        }}
      >
        {/* Timeline Content */}
        <div className="w-full md:w-[80%] h-auto min-h-[20rem] flex flex-col lg:flex-row justify-center gap-6 p-4 md:p-0">
          {/* Text Content */}
          <div className="w-full lg:w-[50rem] h-full py-6 md:py-8 flex flex-col">
            <div>
              <h1 className="text-4xl md:text-6xl mb-4 font-koba opacity-95 text-[#1c0f0d]">
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

          {/* Image Content with enhanced styling */}
          <div className="w-full lg:w-[25rem] h-[25rem] flex-shrink-0 flex items-center justify-center p-2 relative">
            <div className="absolute inset-0 border-4 border-[#fab604] rounded-xl transform rotate-1 z-10"></div>
            <div className="absolute inset-0 border-4 border-white rounded-xl transform -rotate-1 z-10"></div>
            <div className="w-full h-full overflow-hidden rounded-xl relative z-0 shadow-2xl">
              {isLoading ? (
                <div className="w-full h-full bg-gray-200 animate-pulse"></div>
              ) : (
                <Image
                  src="/assets/G1.jpg"
                  alt="Ayodhya Super Kings Team"
                  fill
                  className="object-cover"
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Our Leadership Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-koba  opacity-95 text-[#1c0f0d] mb-4">
              Our Leadership
            </h2>
            <div className="w-20 h-1 bg-[#fab604] mx-auto mb-6"></div>
            <p className="text-lg text-[#1c0f0d] max-w-4xl mx-auto">
              Meet the passionate leaders guiding Ayodhya Super Kings towards
              glory on and off the court.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Owner */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {isLoading ? (
                <div className="h-[25rem] bg-gray-200 animate-pulse"></div>
              ) : (
                <div className="relative h-[25rem]">
                  <Image
                    src="/assets/pratibhanew.JPG"
                    alt="Pratibha Tiwari"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1c0f0d]">
                  Pratibha Tiwari
                </h3>
                <p className="text-[#fab604] mb-4">Owner</p>
                <p className="text-[#1c0f0d] text-sm">
                  As the proud owner of Ayodhya Super Kings, Pratibha Tiwari
                  carries the responsibility of representing Ayodhya's spirit
                  through sports.
                </p>
              </div>
            </div>

            {/* Head Coach */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {isLoading ? (
                <div className="h-[25rem] bg-gray-200 animate-pulse"></div>
              ) : (
                <div className="relative h-[25rem]">
                  <Image
                    src="/assets/amritpal2.JPG"
                    alt="Amrit Pal Singh"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1c0f0d]">
                  Amrit Pal Singh
                </h3>
                <p className="text-[#fab604] mb-4">Head Coach</p>
                <p className="text-[#1c0f0d] text-sm">
                  The tactical mind behind the team's success, ensuring the team
                  stays competitive, confident, and united.
                </p>
              </div>
            </div>

            {/* Assistant Coach */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {isLoading ? (
                <div className="h-[25rem] bg-gray-200 animate-pulse"></div>
              ) : (
                <div className="relative h-[25rem]">
                  <Image
                    src="/assets/vijaytomar3.png"
                    alt="Vijay Tomar"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1c0f0d]">
                  Vijay Tomar
                </h3>
                <p className="text-[#fab604] mb-4">Assistant Coach</p>
                <p className="text-[#1c0f0d] text-sm">
                  Works closely with players to refine techniques and develop
                  winning strategies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Owner's Message */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-xl shadow-xl overflow-hidden bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: "url('/assets/bgbanner.png')" }}
          >
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/3">
                {isLoading ? (
                  <div className="h-full bg-gray-200 animate-pulse"></div>
                ) : (
                  <div className="relative h-96 lg:h-full">
                    <Image
                      src="/assets/pratibhanew.JPG"
                      alt="Pratibha Tiwari"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                )}
              </div>
              <div className="lg:w-2/3 p-8 md:p-12">
                <h2 className="text-3xl md:text4xl font-koba opacity-95 text-[#1c0f0d] mb-6">
                  Owner's Message
                </h2>
                <div className="text-[#1c0f0d] space-y-4">
                  <p>
                    As the proud custodians of Ayodhya Super Kings, we carry a
                    responsibility far beyond the volleyball court. Our team is
                    not just a collection of athletes — it is a symbol of
                    Ayodhya's unwavering spirit, cultural richness, and timeless
                    legacy.
                  </p>
                  <p>
                    From the land where dharma echoes through every street and
                    courage flows through every heart, Ayodhya Super Kings rises
                    — disciplined, determined, and driven to conquer. This is a
                    team born from tradition, built with passion, and led by the
                    vision of creating champions who inspire both on and off the
                    court.
                  </p>
                  <p>
                    Our mission is clear — to represent the people of Ayodhya
                    with pride, foster young talent, and bring the thrill of
                    world-class volleyball to every household in Uttar Pradesh.
                  </p>
                  <p className="font-bold">Jai Shri Ram. Jai Ayodhya.</p>
                </div>
                <div className="mt-8">
                  <p className="text-black font-bold">Pratibha Tiwari</p>
                  <p className="text-black">Owner, Ayodhya Super Kings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Icon Player Section */}
      <section className="py-16 bg-[#f8f8f8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Image Container with fixed aspect ratio */}
            <div className="w-full lg:w-1/2 h-[400px] md:h-[680px] relative">
              {isLoading ? (
                <div className="w-full h-full bg-gray-200 animate-pulse rounded-xl"></div>
              ) : (
                <div className="w-full h-full rounded-xl overflow-hidden shadow-lg relative">
                  <Image
                    src="/assets/amitgulia.JPG"
                    alt="Amit Gulia"
                    fill
                    className="object-cover object-top"
                    priority
                    style={{ objectPosition: "top center" }}
                  />
                  {/* Decorative element */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>
              )}
            </div>
            
            {/* Text Content */}
            <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
              <h2 className="text-4xl md:text-5xl font-koba opacity-95 text-[#1c0f0d] mb-4">
                Icon of Ayodhya Super Kings
              </h2>
              <div className="w-20 h-1 bg-[#fab604] mb-6"></div>
              
              <h3 className="text-3xl font-bold text-[#fab604] mb-2">
                Amit Gulia
              </h3>
              <p className="text-xl italic text-[#1c0f0d] mb-6">
                Explosive. Fearless. Relentless.
              </p>
              
              <div className="space-y-4 text-[#1c0f0d] leading-relaxed">
                <p>
                  Amit Gulia is not just a name — he's a force of nature on the volleyball court. 
                  Known for his explosive spikes, fearless dives, and relentless energy, Amit has 
                  carved his legacy as one of India's most lethal attackers. With an impressive 
                  journey from domestic triumphs to international glory, he has consistently 
                  dominated the net and ignited stadiums with his unmatched athleticism and passion.
                </p>
                <p>
                  Amit's career is decorated with multiple national championships, where he not only 
                  led his teams to victory but also emerged as a crowd-favorite for his aggressive 
                  playstyle and leadership on court. His transition to the international stage was 
                  marked with equal brilliance, as he donned the Indian jersey with pride, representing 
                  the nation in prestigious global tournaments and making his mark among the world's best.
                </p>
                <p>
                  With every serve and spike, Amit Gulia continues to inspire a new generation of 
                  volleyball players, proving that with hard work, heart, and hunger — anything is possible.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center bg-[#fab604] px-4 py-2 rounded-full">
                  <Medal className="w-5 h-5 mr-2 text-[#1c0f0d]" />
                  <span className="text-[#1c0f0d] font-medium">
                    National Champion
                  </span>
                </div>
                <div className="flex items-center bg-[#fab604] px-4 py-2 rounded-full">
                  <Trophy className="w-5 h-5 mr-2 text-[#1c0f0d]" />
                  <span className="text-[#1c0f0d] font-medium">
                    International Player
                  </span>
                </div>
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
