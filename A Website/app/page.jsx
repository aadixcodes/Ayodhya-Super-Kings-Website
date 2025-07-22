'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Facebook, Instagram, Twitter, Phone, Mail, MapPin } from 'lucide-react';

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentMatch, setCurrentMatch] = useState(0);

  const bannerSlides = [
    {
      title: "Ayodhya Super Kings",
      subtitle: "Rise. Serve. Conquer.",
      description: "Welcome to the official home of Ayodhya Super Kings — the region's most dynamic volleyball team that combines passion, teamwork, and the relentless drive to win.",
      image: "https://images.pexels.com/photos/8007357/pexels-photo-8007357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Championship Dreams",
      subtitle: "Victory Through Unity",
      description: "Our team's dedication to excellence has led us to multiple championship victories and countless memorable moments on the court.",
      image: "https://images.pexels.com/photos/8007066/pexels-photo-8007066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Building Legends",
      subtitle: "Training Tomorrow's Stars",
      description: "We focus on developing not just skilled players, but also strong characters who embody the spirit of sportsmanship and teamwork.",
      image: "https://images.pexels.com/photos/8007357/pexels-photo-8007357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  const matches = [
    {
      tournament: "State Championship 2024",
      opponent: "vs Delhi Dynamos",
      date: "Dec 15, 2024",
      time: "18:00",
      venue: "Sports Complex",
      matchNumber: "#15"
    },
    {
      tournament: "Uttar Pradesh Pro Volleyball League",
      opponent: "vs ASK Jaipur",
      date: "Dec 22, 2024", 
      time: "19:30",
      venue: "Indoor Stadium",
      matchNumber: "#16"
    },
    {
      tournament: "National Championship",
      opponent: "vs Mumbai Warriors",
      date: "Jan 05, 2025",
      time: "20:00",
      venue: "National Stadium",
      matchNumber: "#17"
    }
  ];

  const galleryImages = [
    "https://images.pexels.com/photos/8007357/pexels-photo-8007357.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1",
    "https://images.pexels.com/photos/8007066/pexels-photo-8007066.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1",
    "https://images.pexels.com/photos/8007484/pexels-photo-8007484.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1",
    "https://images.pexels.com/photos/8007357/pexels-photo-8007357.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1"
  ];

  const sponsors = [
    { name: "RuPay", logo: "https://images.pexels.com/photos/6888764/pexels-photo-6888764.jpeg?auto=compress&cs=tinysrgb&w=150&h=75&dpr=1" },
    { name: "A23", logo: "https://images.pexels.com/photos/6888764/pexels-photo-6888764.jpeg?auto=compress&cs=tinysrgb&w=150&h=75&dpr=1" },
    { name: "SBI", logo: "https://images.pexels.com/photos/6888764/pexels-photo-6888764.jpeg?auto=compress&cs=tinysrgb&w=150&h=75&dpr=1" },
    { name: "IndianOil", logo: "https://images.pexels.com/photos/6888764/pexels-photo-6888764.jpeg?auto=compress&cs=tinysrgb&w=150&h=75&dpr=1" },
    { name: "CRED", logo: "https://images.pexels.com/photos/6888764/pexels-photo-6888764.jpeg?auto=compress&cs=tinysrgb&w=150&h=75&dpr=1" },
    { name: "Cosco", logo: "https://images.pexels.com/photos/6888764/pexels-photo-6888764.jpeg?auto=compress&cs=tinysrgb&w=150&h=75&dpr=1" }
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 4000);

    return () => clearInterval(slideInterval);
  }, [bannerSlides.length]);

  const nextMatch = () => {
    setCurrentMatch((prev) => (prev + 1) % matches.length);
  };

  const prevMatch = () => {
    setCurrentMatch((prev) => (prev - 1 + matches.length) % matches.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-[#ff9602] text-white py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
              <span className="text-[#fab604] font-bold">ASK</span>
            </div>
            <span className="text-[#fab604] font-bold text-lg">SUPER KINGS</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-[#fab604] transition-colors">Home</Link>
            <Link href="/about" className="hover:text-[#fab604] transition-colors">About</Link>
            <Link href="#" className="hover:text-[#fab604] transition-colors">Fixtures</Link>
            <Link href="#" className="hover:text-[#fab604] transition-colors">Team</Link>
            <Link href="#" className="hover:text-[#fab604] transition-colors">Gallery</Link>
            <Link href="#" className="hover:text-[#fab604] transition-colors">Blog</Link>
            <Link href="/contact" className="hover:text-[#fab604] transition-colors">Contact</Link>
          </div>

          <div className="flex space-x-4">
            <Facebook className="w-5 h-5 hover:text-[#fab604] cursor-pointer transition-colors" />
            <Instagram className="w-5 h-5 hover:text-[#fab604] cursor-pointer transition-colors" />
            <Twitter className="w-5 h-5 hover:text-[#fab604] cursor-pointer transition-colors" />
          </div>
        </div>
      </nav>

      {/* Hero Banner */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-[#fcda20] opacity-90"></div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl animate-fade-in">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-black rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-[#fab604] font-bold text-2xl">ASK</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#fab604] mb-4 text-center">
              {bannerSlides[currentSlide].title}
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1c0f0d] mb-6 text-center">
              {bannerSlides[currentSlide].subtitle}
            </h2>
            <p className="text-[#1c0f0d] text-lg mb-8 text-center max-w-xl mx-auto">
              {bannerSlides[currentSlide].description}
            </p>
            <div className="text-center">
              <button className="bg-[#ff9602] text-white px-8 py-3 rounded-lg hover:bg-[#e8850a] transition-colors">
                Join The Squad
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {bannerSlides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-[#ff9602]' : 'bg-white opacity-50'}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Ayodhya Super Kings Title */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-8">
            <span className="text-[#fab604]">AYODHYA</span> <span className="text-[#ff9602]">SUPER KINGS</span>
          </h2>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h3 className="text-3xl font-bold text-[#1c0f0d] mb-6">ABOUT US</h3>
              <p className="text-[#1c0f0d] text-lg mb-6 leading-relaxed">
                Ayodhya Super Kings is not just a team — it's a brotherhood of passionate volleyball players united by the spirit of the game. Based in the historic city of Ayodhya, we compete with heart, grit, and a commitment to excellence both on and off the court. Every serve, spike, and victory reflects our dedication to the sport and our fans.
              </p>
              <button className="bg-[#ff9602] text-white px-6 py-3 rounded-lg hover:bg-[#e8850a] transition-colors">
                Read More
              </button>
            </div>
            <div className="relative">
              <div className="bg-[#fcda20] rounded-lg p-8 relative">
                <div className="w-20 h-20 bg-black rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-[#fab604] font-bold text-2xl">ASK</span>
                </div>
                <h4 className="text-xl font-bold text-[#1c0f0d] text-center mb-4">AYODHYA SUPER KINGS</h4>
                <Image
                  src="https://images.pexels.com/photos/8007357/pexels-photo-8007357.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1"
                  alt="Team Photo"
                  width={400}
                  height={300}
                  className="rounded-lg mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "15+", label: "Tournaments Played" },
              { number: "10+", label: "Championship Wins" },
              { number: "20+", label: "Active Players" },
              { number: "3+", label: "Years of Legacy" }
            ].map((stat, index) => (
              <div key={index} className="bg-[#fcda20] rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl font-bold text-[#1c0f0d] mb-2">{stat.number}</div>
                <div className="text-[#1c0f0d] font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Matches */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-[#1c0f0d] text-center mb-12">OUR NEXT MATCHES</h3>
          <div className="relative">
            <div className="bg-[#fcda20] rounded-lg p-8 max-w-md mx-auto">
              <div className="text-center mb-4">
                <div className="text-sm text-[#1c0f0d] font-medium">{matches[currentMatch].tournament}</div>
                <div className="text-2xl font-bold text-[#1c0f0d] my-2">{matches[currentMatch].opponent}</div>
                <div className="text-xl font-bold text-[#1c0f0d]">{matches[currentMatch].time}</div>
                <div className="text-sm text-[#1c0f0d]">{matches[currentMatch].date}</div>
                <div className="text-sm text-[#1c0f0d]">{matches[currentMatch].venue}</div>
                <div className="text-lg font-bold text-[#1c0f0d] mt-4">{matches[currentMatch].matchNumber}</div>
              </div>
            </div>
            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={prevMatch}
                className="bg-[#ff9602] text-white p-3 rounded-full hover:bg-[#e8850a] transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextMatch}
                className="bg-[#ff9602] text-white p-3 rounded-full hover:bg-[#e8850a] transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-[#fcda20]">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h3 className="text-3xl font-bold text-[#1c0f0d]">GALLERY</h3>
            <button className="bg-[#ff9602] text-white px-6 py-3 rounded-lg hover:bg-[#e8850a] transition-colors">
              View More
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg">
                <Image
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-[#1c0f0d] text-center mb-4">SPONSORS</h3>
          <p className="text-[#1c0f0d] text-center mb-12">
            We are grateful to our sponsors for supporting Ayodhya Super Kings' journey on and off the court.
          </p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
            {sponsors.map((sponsor, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gray-100 rounded-lg p-4 hover:shadow-lg transition-shadow">
                  <div className="text-2xl font-bold text-[#1c0f0d] group-hover:text-[#ff9602] transition-colors">
                    {sponsor.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#fcda20] py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                  <span className="text-[#fab604] font-bold">ASK</span>
                </div>
                <span className="text-[#1c0f0d] font-bold text-lg">SUPER KINGS</span>
              </div>
              <p className="text-[#1c0f0d] text-sm leading-relaxed">
                Ayodhya Super Kings is a passionate volleyball team from the historic city of Ayodhya, dedicated to delivering thrilling matches, fostering sportsmanship, and inspiring the next generation of athletes.
              </p>
            </div>
            
            <div>
              <h4 className="text-[#1c0f0d] font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 text-[#1c0f0d]">
                <li><Link href="/" className="hover:text-[#ff9602] transition-colors">Home</Link></li>
                <li><Link href="/about" className="hover:text-[#ff9602] transition-colors">About Us</Link></li>
                <li><Link href="#" className="hover:text-[#ff9602] transition-colors">Our Team</Link></li>
                <li><Link href="#" className="hover:text-[#ff9602] transition-colors">Gallery</Link></li>
                <li><Link href="#" className="hover:text-[#ff9602] transition-colors">Matches Schedules</Link></li>
                <li><Link href="#" className="hover:text-[#ff9602] transition-colors">Blogs</Link></li>
                <li><Link href="/contact" className="hover:text-[#ff9602] transition-colors">Contact us</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-[#1c0f0d] font-bold text-lg mb-4">Social Media</h4>
              <div className="space-y-2 text-[#1c0f0d]">
                <div className="flex items-center space-x-2">
                  <Instagram className="w-5 h-5" />
                  <span>Instagram</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Facebook className="w-5 h-5" />
                  <span>Facebook</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Twitter className="w-5 h-5" />
                  <span>Twitter</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>Whatsapp</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-[#1c0f0d] text-center text-[#1c0f0d]">
            <p>&copy; Copyright 2022 Ayodhya Super Kings. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}