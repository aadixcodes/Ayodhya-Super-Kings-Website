

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      {/* Page Header */}
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
              <span>contact</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Contact Us</h1>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 md:mb-4">
              <span className="text-[#fab604] text-5xl md:text-7xl stroke-only">Contact</span>
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-[#1c0f0d]">Contact Information</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            <div className="text-center border-r-0 md:border-r-2 border-[#fab604] p-4">
              <div className="bg-[#fab604] w-12 h-12 md:w-16 md:h-16 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                <Phone className="w-6 h-6 md:w-8 md:h-8 text-[#1c0f0d]" />
              </div>
              <h4 className="text-md md:text-xl font-bold text-[#1c0f0d] mb-1 md:mb-2">+9195263XXXXX</h4>
              <p className="text-[#1c0f0d] text-xs md:text-sm">
                Call us for match<br />
                inquiries.
              </p>
            </div>

            <div className="text-center border-r-0 md:border-r-2 border-[#fab604] p-4">
              <div className="bg-[#fab604] w-12 h-12 md:w-16 md:h-16 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                <Mail className="w-6 h-6 md:w-8 md:h-8 text-[#1c0f0d]" />
              </div>
              <h4 className="text-md md:text-xl font-bold text-[#1c0f0d] mb-1 md:mb-2">mail@team.in</h4>
              <p className="text-[#1c0f0d] text-xs md:text-sm">
                Send your queries<br />
                by email.
              </p>
            </div>

            <div className="text-center col-span-2 md:col-span-1 p-4 md:p-0">
              <div className="bg-[#fab604] w-12 h-12 md:w-16 md:h-16 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                <MapPin className="w-6 h-6 md:w-8 md:h-8 text-[#1c0f0d]" />
              </div>
              <h4 className="text-md md:text-xl font-bold text-[#1c0f0d] mb-1 md:mb-2">Ayodhya, U.P, India</h4>
              <p className="text-[#1c0f0d] text-xs md:text-sm">
                Find us in<br />
                Ayodhya city.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-10 md:py-12 -mt-10 md:mt-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className='flex flex-col justify-center  items-center md:items-start'>
              <h3 className="text-3xl md:text-4xl font-bold mb-2 md:mb-4">
                <span className="text-[#fab604] text-5xl md:text-7xl stroke-only">Form</span>
              </h3>
              <h4 className="text-3xl md:text-5xl font-bold text-[#1c0f0d] mb-4 md:mb-6">Get In Touch !!</h4>
              <p className="text-[#1c0f0d] mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
                Have a question, suggestion, or just want to cheer for the Ayodhya Super Kings? We'd love to hear from you! Whether you're a fan, a fellow player, a sponsor, or a brand looking to collaborate — feel free to reach out. Let's build something exciting together, on and off the court.
              </p>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-[#1c0f0d] font-medium mb-1 md:mb-2 text-sm md:text-base">
                    Name :
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full px-3 py-2 md:px-4 md:py-3 border-2 border-[#fcda20] rounded-lg focus:outline-none focus:border-[#ff9602] transition-colors text-sm md:text-base"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[#1c0f0d] font-medium mb-1 md:mb-2 text-sm md:text-base">
                    Email :
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 md:px-4 md:py-3 border-2 border-[#fcda20] rounded-lg focus:outline-none focus:border-[#ff9602] transition-colors text-sm md:text-base"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-[#1c0f0d] font-medium mb-1 md:mb-2 text-sm md:text-base">
                    Subject :
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Enter subject"
                    className="w-full px-3 py-2 md:px-4 md:py-3 border-2 border-[#fcda20] rounded-lg focus:outline-none focus:border-[#ff9602] transition-colors text-sm md:text-base"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-[#1c0f0d] font-medium mb-1 md:mb-2 text-sm md:text-base">
                    Message :
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your message"
                    rows="4"
                    className="w-full px-3 py-2 md:px-4 md:py-3 border-2 border-[#fcda20] rounded-lg focus:outline-none focus:border-[#ff9602] transition-colors resize-none text-sm md:text-base"
                    required
                  />
                </div>

                <div className="flex justify-center md:block">
                  <button
                    type="submit"
                    className="bg-[#fab604] text-[#1c0f0d] px-6 py-2 md:px-8 md:py-3 rounded-lg hover:scale-105 transition-all font-medium text-sm md:text-base"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}