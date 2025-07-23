'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { Menu, X, Facebook, Instagram, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Fixtures', path: '/fixtures' },
    { name: 'Team', path: '/our-team' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Blog', path: '/blogs' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => pathname === path;

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300`}>
      {/* Main Navbar Container */}
      <div className={`max-w-7xl lg:mx-auto mx-[1rem] md:mx-0 bg-center bg-no-repeat bg-cover ${isMenuOpen ? 'rounded-none' : 'rounded-full'} ${isMenuOpen ? 'mt-0' : 'mt-2 lg:mt-3'} px-0 lg:px-0 relative`}
      style={{ backgroundImage: "url('/assets/bgbanner.png')" }}>
        <div className="flex justify-between items-center h-16 lg:h-18">
          {/* Logo - Positioned outside on left */}
          {!isMenuOpen && (
            <Link href="/" className="flex items-center space-x-3 z-50 absolute -left-[6px] lg:-left-4 top-1/2 transform -translate-y-1/2">
              <div className="relative h-20 w-20">
                <Image 
                  src="/assets/logo.png" 
                  alt="Ayodhya Super Kings" 
                  fill 
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          )}

          {/* Desktop Navigation - Now properly centered */}
          <div className="hidden lg:flex flex-1 justify-center items-center">
            <nav className="flex items-center justify-center w-full">
              <div className="flex space-x-1 px-6 py-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    className={`px-4 py-1 rounded-full text-md font-medium transition-all duration-300 ${
                      isActive(item.path)
                        ? 'bg-white text-black shadow-md'
                        : 'text-black hover:bg-yellow-400 hover:text-black'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </nav>
          </div>

          {/* Social Icons */}
          <div className="hidden lg:flex items-center space-x-2 px-4 py-2 absolute right-0">
            <a
              href="https://www.facebook.com/people/Ayodhya-Superkings/61575231071878/"
              className="text-black hover:text-black transition-colors duration-300 p-2 rounded-full hover:bg-white"
              aria-label="Facebook"
              target="_blank"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://www.instagram.com/ayodhyasuperkings/"
              className="text-black hover:text-black transition-colors duration-300 p-2 rounded-full hover:bg-white"
              aria-label="Instagram"
              target="_blank"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://x.com/ASuperkings/"
              className="text-black hover:text-black transition-colors duration-300 p-2 rounded-full hover:bg-white"
              aria-label="Twitter"
              target="_blank"
            >
              <Twitter size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden absolute right-4 top-1/2 transform -translate-y-1/2 z-50">
            <Button
              variant="ghost"
              size="sm"
              className="text-black hover:bg-yellow-400 p-3 rounded-full"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}
          style={{ backgroundImage: "url('/assets/bgbanner.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="container mx-auto px-4 flex flex-col items-center justify-center h-full space-y-4 pt-16">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`text-xl font-medium transition-all duration-300 px-6 py-2 rounded-full ${
                  isActive(item.path)
                    ? 'text-black bg-white border-2 border-yellow-400'
                    : 'text-black hover:bg-yellow-400 hover:text-black'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile Social Icons */}
            <div className="flex items-center space-x-6 pt-8 mt-8 border-t border-white/30 w-full justify-center">
              <a
                href="https://www.facebook.com/people/Ayodhya-Superkings/61575231071878/"
                className="text-black hover:text-black hover:bg-white transition-colors duration-300 p-3 rounded-full"
                aria-label="Facebook"
                target="_blank"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/ayodhyasuperkings/"
                className="text-black hover:text-black hover:bg-white transition-colors duration-300 p-3 rounded-full"
                aria-label="Instagram"
                target="_blank"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://x.com/ASuperkings/"
                className="text-black hover:text-black hover:bg-white transition-colors duration-300 p-3 rounded-full"
                aria-label="Twitter"
                target="_blank"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;