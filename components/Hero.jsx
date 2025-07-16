"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();

  const slides = [
    {
      id: 1,
      image: "/assets/hero1.png",
      title: "Ayodhya Super Kings",
      subtitle: "Rise. Serve. Conquer.",
      description: "Welcome to the official home of Ayodhya Super Kings – the leading volleyball team that embodies passion, teamwork, and an unwavering desire to win.",
      buttonText: "Join The Squad",
      navLink: "/contact"
    },
    {
      id: 2,
      image: "/assets/hero2.png",
      title: "Championship Spirit",
      subtitle: "United We Play. United We Win.",
      description: "Experience the thrill of competitive volleyball with a team that never gives up. Every serve, every spike, every victory reflects our commitment to excellence.",
      buttonText: "View Team",
      navLink: "/our-team"
    },
    {
      id: 3,
      image: "/assets/hero3.png",
      title: "Home Court Advantage",
      subtitle: "Where Legends Are Made.",
      description: "Step into our arena where every match is a battle, every point matters, and every fan becomes part of our winning legacy.",
      buttonText: "Match Schedule",
      navLink: "/fixtures"
    },
  ];

  // Handle button click navigation
  const handleButtonClick = (navLink) => {
    router.push(navLink);
  };

  // Auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Mobile Carousel (Stacked) */}
      <div className="md:hidden">
        <div className="relative h-[60vh] w-full">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <div className="relative h-full w-full">
                <Image
                  src={slide.image}
                  alt={`Slide ${slide.id}`}
                  fill
                  className="object-cover"
                  priority={index === currentSlide}
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
                <div className="absolute inset-0 flex flex-col justify-end items-center text-center text-white p-6 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
                  <div className="w-full max-w-md space-y-3">
                    <h1 className="text-2xl font-bold text-brand-gold">{slide.title}</h1>
                    <h2 className="text-lg font-semibold">{slide.subtitle}</h2>
                    <p className="text-sm leading-relaxed">{slide.description}</p>
                    <Button
                      size="sm"
                      className="bg-[#fab604] text-[#1c0f0d] hover:bg-[#fab604] font-bold mt-2"
                      onClick={() => handleButtonClick(slide.navLink)}
                    >
                      {slide.buttonText}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile Navigation */}
        <div className="flex justify-between items-center px-4 mt-2">
          <Button
            variant="ghost"
            size="sm"
            className="bg-[#fab604] text-[#1c0f0d] p-2 rounded-full"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide ? "bg-brand-gold scale-125" : "bg-white/50"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            className="bg-[#fab604] text-[#1c0f0d] p-2 rounded-full"
            onClick={nextSlide}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Desktop Carousel (Side Preview) */}
      <div className="hidden md:block relative h-[70vh] lg:h-[80vh] w-full">
        <div className="relative flex items-center justify-center h-full">
          {slides.map((slide, index) => {
            const position = (index - currentSlide + slides.length) % slides.length;
            
            let translateX = "translate-x-0";
            let scale = "scale-90";
            let zIndex = "z-0";
            let opacity = "opacity-80";

            if (position === 0) {
              translateX = "translate-x-0";
              scale = "scale-100";
              zIndex = "z-10";
              opacity = "opacity-100";
            } else if (position === 1) {
              translateX = "translate-x-[30%]";
            } else if (position === slides.length - 1) {
              translateX = "-translate-x-[30%]";
            } else {
              opacity = "opacity-0";
            }

            return (
              <div
                key={slide.id}
                className={`absolute transition-all duration-700 ease-in-out ${translateX} ${scale} ${zIndex} ${opacity}`}
              >
                <div className="relative w-[28rem] h-[20rem] lg:w-[40rem] lg:h-[28rem] xl:w-[50rem] xl:h-[32rem] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={slide.image}
                    alt={`Slide ${slide.id}`}
                    fill
                    className="object-cover"
                    priority={position === 0}
                    sizes="(max-width: 1024px) 50vw, 60vw"
                  />
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-8 bg-gradient-to-t from-black/50 via-black/20 to-transparent">
                    <div className="space-y-4 lg:space-y-6">
                      <h1 className="text-3xl lg:text-5xl font-bold text-brand-gold">{slide.title}</h1>
                      <h2 className="text-xl lg:text-3xl font-semibold">{slide.subtitle}</h2>
                      <p className="text-base lg:text-lg max-w-md lg:max-w-xl mx-auto leading-relaxed">
                        {slide.description}
                      </p>
                      <Button
                        size="sm"
                        className="bg-[#fab604] text-[#1c0f0d] hover:bg-[#fab604] font-bold px-6 py-3 lg:px-8 lg:py-3 text-base lg:text-lg"
                        onClick={() => handleButtonClick(slide.navLink)}
                      >
                        {slide.buttonText}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop Navigation */}
        <Button
          variant="ghost"
          size="sm"
          className="absolute bg-[#fab604] left-4 top-1/2 -translate-y-1/2 p-2 rounded-full z-20"
          onClick={prevSlide}
        >
          <ChevronLeft className="w-5 h-5 text-[#1c0f0d]" />
        </Button>

        <Button
          variant="ghost"
          size="sm"
          className="absolute bg-[#fab604] right-4 top-1/2 -translate-y-1/2 p-2 rounded-full z-20"
          onClick={nextSlide}
        >
          <ChevronRight className="w-5 h-5 text-[#1c0f0d]" />
        </Button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                index === currentSlide ? "bg-brand-gold scale-125" : "bg-white/50"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;