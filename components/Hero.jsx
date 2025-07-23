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
      image: "/assets/banner-1.jpg",
      title: "Ayodhya Super Kings",
      subtitle: "Rise. Serve. Conquer.",
      description: "Welcome to the official home of Ayodhya Super Kings – the leading volleyball team that embodies passion, teamwork, and an unwavering desire to win.",
      buttonText: "Know More",
      navLink: "/about"
    },
    {
      id: 2,
      image: "/assets/banner-2.jpg",
      title: "Championship Spirit",
      subtitle: "United We Play. United We Win.",
      description: "Experience the thrill of competitive volleyball with a team that never gives up. Every serve, every spike, every victory reflects our commitment to excellence.",
      buttonText: "View Team",
      navLink: "/our-team"
    },
    {
      id: 3,
      image: "/assets/banner-3.jpg",
      title: "Home Court Advantage",
      subtitle: "Where Legends Are Made.",
      description: "Step into our arena where every match is a battle, every point matters, and every fan becomes part of our winning legacy.",
      buttonText: "Match Schedule",
      navLink: "/fixtures"
    },
  ];

  const handleButtonClick = (navLink) => {
    router.push(navLink);
  };

  // Auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Mobile Carousel (Full Screen) */}
      <div className="md:hidden h-full">
        <div className="relative h-full w-full">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <div className="relative h-full w-full">
                <Image
                  src={slide.image}
                  alt={`Slide ${slide.id}`}
                  fill
                  className="object-cover object-center"
                  priority={index === currentSlide}
                  quality={100}
                />
                <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center px-6">
                  <div className="w-full max-w-md space-y-3"> {/* Reduced space-y from 4 to 3 */}
                    <h1 className="text-3xl font-bold text-yellow-400 leading-tight">{slide.title}</h1>
                    <h2 className="text-xl text-white font-semibold mt-1">{slide.subtitle}</h2> {/* Added mt-1 */}
                    <p className="text-base text-white leading-relaxed mt-2">{slide.description}</p> {/* Added mt-2 */}
                    <Button
                      size="lg"
                      className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold mt-3 px-8 py-4 text-lg"
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
        <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center px-4">
          <Button
            variant="ghost"
            size="sm"
            className="bg-yellow-500 hover:bg-yellow-600 text-black p-2 rounded-full mr-4"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? "bg-yellow-500 scale-125" : "bg-white/50"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            className="bg-yellow-500 hover:bg-yellow-600 text-black p-2 rounded-full ml-4"
            onClick={nextSlide}
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Desktop Carousel (Full Screen) */}
      <div className="hidden md:block relative h-full w-full">
        <div className="relative h-full w-full">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <div className="relative h-full w-full">
                <Image
                  src={slide.image}
                  alt={`Slide ${slide.id}`}
                  fill
                  className="object-cover object-center"
                  priority={index === currentSlide}
                  quality={100}
                />
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center">
                  <div className="container mx-auto px-8 max-w-4xl">
                    <div className="space-y-4"> {/* Reduced space-y from 6 to 4 */}
                      <h1 className="text-4xl lg:text-6xl font-bold text-yellow-400 leading-tight">{slide.title}</h1>
                      <h2 className="text-2xl lg:text-4xl font-semibold text-white ">{slide.subtitle}</h2> {/* Added mt-2 */}
                      <p className="text-lg lg:text-xl text-white leading-relaxed max-w-2xl mx-auto -mt-3"> {/* Added mt-3 */}
                        {slide.description}
                      </p>
                      <Button
                        size="lg"
                        className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold mt-4 px-10 py-5 text-lg" 
                        onClick={() => handleButtonClick(slide.navLink)}
                      >
                        {slide.buttonText}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Navigation */}
        <Button
          variant="ghost"
          size="sm"
          className="absolute bg-yellow-500 hover:bg-yellow-600 left-8 top-1/2 -translate-y-1/2 p-3 rounded-full z-20"
          onClick={prevSlide}
        >
          <ChevronLeft className="w-6 h-6 text-black" />
        </Button>

        <Button
          variant="ghost"
          size="sm"
          className="absolute bg-yellow-500 hover:bg-yellow-600 right-8 top-1/2 -translate-y-1/2 p-3 rounded-full z-20"
          onClick={nextSlide}
        >
          <ChevronRight className="w-6 h-6 text-black" />
        </Button>

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? "bg-yellow-500 scale-125" : "bg-white/50"
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