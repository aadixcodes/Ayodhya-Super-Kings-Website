import Link from "next/link";
import { Facebook, Instagram, Twitter, MessageCircle, Mail  } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Team", path: "/our-team" },
    { name: "Gallery", path: "/gallery" },
    { name: "Matches Schedules", path: "/fixtures" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact us", path: "/contact" },
  ];

  return (
    <footer
      className="mt-20 bg-[#ff9602] py-12 relative overflow-hidden bg-center bg-no-repeat bg-cover"
      // style={{ backgroundImage: "url('/assets/bgbanner.png')" }}
    >
      {/* Background Pattern (optional, can be layered above or below) */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/20 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Logo and Description - stays the same on all devices */}
          <div className="space-y-4">
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <img src='/assets/logo.png' alt="Ayodhya Super Kings" className="h-26 w-24" />
            </div>
            <p className="text-brand-text text-md leading-relaxed max-w-sm text-center md:text-start">
              Ayodhya Super Kings is a spirited volleyball team from Ayodhya, committed to exciting matches, true sportsmanship, and inspiring young athletes. Follow us for updates and exclusive moments.
            </p>
          </div>

          {/* Mobile: Two columns for Quick Links and Social Media */}
          <div className="md:hidden grid grid-cols-2 gap-8">
            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-brand-text font-bold text-lg text-center">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name} className="text-center">
                    <Link
                      href={link.path}
                      className="text-brand-text hover:text-brand-orange transition-colors duration-300 text-md font-medium"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h4 className="text-brand-text font-bold text-lg text-center">Social Media</h4>
              <div className="space-y-3">
                <a
                  href="https://www.instagram.com/ayodhyasuperkings/"
                  className="flex items-center justify-center space-x-3 text-brand-text hover:text-brand-orange transition-colors duration-300"
                >
                  <Instagram size={20} />
                  <span className="text-md font-medium">Instagram</span>
                </a>
                <a
                  href="https://www.facebook.com/people/Ayodhya-Superkings/61575231071878/"
                  className="flex items-center justify-center space-x-3 text-brand-text hover:text-brand-orange transition-colors duration-300"
                >
                  <Facebook size={20} />
                  <span className="text-md font-medium">Facebook</span>
                </a>
                <a
                  href="https://x.com/ASuperkings/"
                  className="flex items-center justify-center space-x-3 text-brand-text hover:text-brand-orange transition-colors duration-300"
                >
                  <Twitter size={20} />
                  <span className="text-md font-medium">Twitter</span>
                </a>
                <a
                  href="mailto:ayodhya.super.kings@uppvl.com"
                  className="flex items-center justify-center space-x-3 text-brand-text hover:text-brand-orange transition-colors duration-300"
                >
                  <Mail size={20} />
                  <span className="text-md font-medium">Email</span>
                </a>
              </div>
            </div>
          </div>

          {/* Desktop: Original layout for Quick Links */}
          <div className="hidden md:block space-y-4 flex flex-col items-center">
            <h4 className="text-brand-text font-bold text-lg text-center">Quick Links</h4>
            <ul className="space-y-2 flex flex-col items-center">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="text-brand-text hover:text-brand-orange transition-colors duration-300 text-md font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop: Original layout for Social Media */}
          <div className="hidden md:block space-y-4 flex flex-col items-center">
            <h4 className="text-brand-text font-bold text-lg text-center">Social Media</h4>
            <div className="space-y-3 flex flex-col items-center">
              <a
                href="https://www.instagram.com/ayodhyasuperkings/"
                className="flex items-center space-x-3 text-brand-text hover:text-brand-orange transition-colors duration-300"
              >
                <Instagram size={20} />
                <span className="text-md font-medium">Instagram</span>
              </a>
              <a
                href="https://www.facebook.com/people/Ayodhya-Superkings/61575231071878/"
                className="flex items-center space-x-3 text-brand-text hover:text-brand-orange transition-colors duration-300"
              >
                <Facebook size={20} />
                <span className="text-md font-medium">Facebook</span>
              </a>
              <a
                href="https://x.com/ASuperkings/"
                className="flex items-center space-x-3 text-brand-text hover:text-brand-orange transition-colors duration-300"
              >
                <Twitter size={20} />
                <span className="text-md font-medium">Twitter</span>
              </a>
              <a
                href="mailto:ayodhya.super.kings@uppvl.com"
                className="flex items-center space-x-3 text-brand-text hover:text-brand-orange transition-colors duration-300"
              >
                <Mail size={20} />
                <span className="text-md font-medium">Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-black text-center">
          <p className="text-brand-text text-md">
            © Copyright 2025 Ayodhya Super Kings. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;