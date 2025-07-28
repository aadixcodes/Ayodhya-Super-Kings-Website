import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, Youtube } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Team", path: "/our-team" },
    { name: "Gallery", path: "/gallery" },
    // { name: "Matches Schedules", path: "/fixtures" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact us", path: "/contact" },
  ];

  return (
    <footer
      className="mt-20 py-12 relative overflow-hidden bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: "url('/assets/bgbanner.png')" }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/20 to-transparent"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Desktop Layout (unchanged) */}
        <div className="hidden md:flex justify-between gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src='/assets/logo.png' alt="Ayodhya Super Kings" className="h-26 w-24" />
            </div>
            <p className="text-brand-text text-md leading-relaxed max-w-sm">
              Ayodhya Super Kings is a spirited volleyball team from Ayodhya, committed to exciting matches, true sportsmanship, and inspiring young athletes. Follow us for updates and exclusive moments.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-brand-text font-bold text-lg">Quick Links</h4>
            <ul className="space-y-2">
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

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-brand-text font-bold text-lg">Social Media</h4>
            <div className="space-y-3">
              <a
                href="https://www.instagram.com/ayodhyasuperkings/"
                target="_blank"
                className="flex items-center space-x-3 text-brand-text hover:text-brand-orange transition-colors duration-300"
              >
                <Instagram size={20} />
                <span className="text-md font-medium">Instagram</span>
              </a>
              <a
                href="https://www.facebook.com/people/Ayodhya-Superkings/61575231071878/"
                target="_blank"
                className="flex items-center space-x-3 text-brand-text hover:text-brand-orange transition-colors duration-300"
              >
                <Facebook size={20} />
                <span className="text-md font-medium">Facebook</span>
              </a>
              <a
                href="https://x.com/ASuperkings/"
                target="_blank"
                className="flex items-center space-x-3 text-brand-text hover:text-brand-orange transition-colors duration-300"
              >
                <Twitter size={20} />
                <span className="text-md font-medium">Twitter</span>
              </a>
              <a
                href="https://www.youtube.com/@AyodhyaSuperkings/shorts"
                target="_blank"
                className="flex items-center space-x-3 text-brand-text hover:text-brand-orange transition-colors duration-300"
              >
                <Youtube size={20} />
                <span className="text-md font-medium">Youtube</span>
              </a>
              <a
                href="mailto:ayodhya.super.kings@uppvl.com"
                target="_blank"
                className="flex items-center space-x-3 text-brand-text hover:text-brand-orange transition-colors duration-300"
              >
                <Mail size={20} />
                <span className="text-md font-medium">Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col gap-8">
          {/* Logo and Description at top */}
          <div className="space-y-4">
            <div className="flex justify-center md:justify-start space-x-3">
              <img src='/assets/logo.png' alt="Ayodhya Super Kings" className="h-26 w-24" />
            </div>
            <p className="text-brand-text text-md leading-relaxed text-center">
              Ayodhya Super Kings is a spirited volleyball team from Ayodhya, committed to exciting matches, true sportsmanship, and inspiring young athletes. Follow us for updates and exclusive moments.
            </p>
          </div>

          {/* Quick Links and Social in two columns below */}
          <div className="flex justify-between gap-4">
            {/* Quick Links Column */}
            <div className="space-y-2 w-1/2">
              <h4 className="text-brand-text font-bold text-lg text-center">Quick Links</h4>
              <ul className="space-y-1">
                {quickLinks.map((link) => (
                  <li key={link.name} className="text-center">
                    <Link
                      href={link.path}
                      className="text-brand-text hover:text-brand-orange transition-colors text-sm font-medium"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links Column */}
            <div className="space-y-2 w-1/2">
              <h4 className="text-brand-text font-bold text-lg text-center">Connect</h4>
              <div className="flex flex-col items-center space-y-1">
                <a
                  href="https://www.instagram.com/ayodhyasuperkings/"
                  target="_blank"
                  className="flex items-center space-x-2 text-brand-text hover:text-brand-orange transition-colors"
                >
                  <Instagram size={16} />
                  <span className="text-sm font-medium">Instagram</span>
                </a>
                <a
                  href="https://www.facebook.com/people/Ayodhya-Superkings/61575231071878/"
                  target="_blank"
                  className="flex items-center space-x-2 text-brand-text hover:text-brand-orange transition-colors"
                >
                  <Facebook size={16} />
                  <span className="text-sm font-medium">Facebook</span>
                </a>
                <a
                  href="https://x.com/ASuperkings/"
                  target="_blank"
                  className="flex items-center space-x-2 text-brand-text hover:text-brand-orange transition-colors"
                >
                  <Twitter size={16} />
                  <span className="text-sm font-medium">Twitter</span>
                </a>
                <a
                  href="https://www.youtube.com/@AyodhyaSuperkings/shorts"
                  target="_blank"
                  className="flex items-center space-x-2 text-brand-text hover:text-brand-orange transition-colors"
                >
                  <Youtube size={16} />
                  <span className="text-sm font-medium">Youtube</span>
                </a>
                <a
                  href="mailto:ayodhya.super.kings@uppvl.com"
                  target="_blank"
                  className="flex items-center space-x-2 text-brand-text hover:text-brand-orange transition-colors"
                >
                  <Mail size={16} />
                  <span className="text-sm font-medium">Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-black flex flex-wrap justify-center gap-6 lg:justify-between text-center">
          <p className="text-brand-text text-md">
            © Copyright 2025 Ayodhya Super Kings. All Rights Reserved.
          </p>
          <p className="text-brand-text text-md">
          Designed & Developed by Varnix Media Pvt. Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;