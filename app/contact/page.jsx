// 'use client';

// import { useState } from 'react';
// import Link from 'next/link';
// import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from 'lucide-react';
// import emailjs from '@emailjs/browser';

// export default function ContactPage() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });
//   const [showSuccessPopup, setShowSuccessPopup] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false); // New state for loading

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitting(true); // Start loading
    
//     // Send email using EmailJS
//     emailjs.send(
//       'service_c8phyky', // service ID
//       'template_cvjvfvk', // template ID
//       formData,
//       'CmKceVxPcExwgX959' // Your EmailJS public key
//     )
//     .then((response) => {
//       console.log('Email sent successfully!', response.status, response.text);
//       setShowSuccessPopup(true);
//       setFormData({ name: '', email: '', subject: '', message: '' });
//       setIsSubmitting(false); // Stop loading
      
//       // Auto-close popup after 5 seconds
//       setTimeout(() => {
//         setShowSuccessPopup(false);
//       }, 5000);
//     })
//     .catch((error) => {
//       console.error('Failed to send email:', error);
//       alert('Failed to send message. Please try again later.');
//       setIsSubmitting(false); // Stop loading on error too
//     });
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   return (
//     <div className="min-h-screen">
//       {/* Success Popup */}
//       {showSuccessPopup && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-lg p-6 md:p-8 max-w-md w-full shadow-lg transform transition-all">
//             <div className="text-center">
//               <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                 </svg>
//               </div>
//               <h3 className="text-2xl font-bold text-gray-800 mb-2">Form Submitted Successfully!</h3>
//               <p className="text-gray-600 mb-6">Our team will contact you soon.</p>
//               <button
//                 onClick={() => setShowSuccessPopup(false)}
//                 className="bg-[#fab604] text-[#1c0f0d] px-6 py-2 rounded-lg hover:scale-105 transition-all font-medium"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Page Header */}
//       <section className="relative w-full overflow-hidden">
//         <div className="relative h-[220px] sm:h-[260px] md:h-[320px] lg:h-[380px] xl:h-[420px]">
//           <img
//             src="/assets/pagesBanner.png"
//             alt="Team Banner"
//             className="absolute inset-0 w-full h-full object-cover object-center"
//           />
//           <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-[#1c0f0d] p-4">
//             <nav className="text-xs sm:text-sm md:text-base mb-2 mt-12 sm:mt-0">
//               <span>Home / </span>
//               <span>contact</span>
//             </nav>
//             <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Contact Us</h1>
//           </div>
//         </div>
//       </section>

//       {/* Contact Information */}
//       <section className="py-12 md:py-16 bg-white">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-8 md:mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold mb-2 md:mb-4">
//               <span className="text-[#fab604] text-5xl md:text-7xl stroke-only">Contact</span>
//             </h2>
//             <h3 className="text-3xl md:text-5xl font-bold text-[#1c0f0d]">Contact Information</h3>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
//             <div className="text-center border-r-0 md:border-r-2 border-[#fab604] p-4">
//               <div className="bg-[#fab604] w-12 h-12 md:w-16 md:h-16 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4">
//                 <Phone className="w-6 h-6 md:w-8 md:h-8 text-[#1c0f0d]" />
//               </div>
//               <h4 className="text-md md:text-xl font-bold text-[#1c0f0d] mb-1 md:mb-2">+91-99995 32227</h4>
//               <p className="text-[#1c0f0d] text-xs md:text-sm">
//                 Call us for match<br />
//                 enquiries.
//               </p>
//             </div>

//             <div className="text-center border-r-0 md:border-r-2 border-[#fab604] p-4">
//               <div className="bg-[#fab604] w-12 h-12 md:w-16 md:h-16 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4">
//                 <Mail className="w-6 h-6 md:w-8 md:h-8 text-[#1c0f0d]" />
//               </div>
//               <h4 className="text-md md:text-xl font-bold text-[#1c0f0d] mb-1 md:mb-2">ayodhya.super.kings@uppvl.com</h4>
//               <p className="text-[#1c0f0d] text-xs md:text-sm">
//                 Send your queries<br />
//                 by email.
//               </p>
//             </div>

//             <div className="text-center col-span-2 md:col-span-1 p-4 md:p-0">
//               <div className="bg-[#fab604] w-12 h-12 md:w-16 md:h-16 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4">
//                 <MapPin className="w-6 h-6 md:w-8 md:h-8 text-[#1c0f0d]" />
//               </div>
//               <h4 className="text-md md:text-xl font-bold text-[#1c0f0d] mb-1 md:mb-2">Ayodhya, U.P, India</h4>
//               <p className="text-[#1c0f0d] text-xs md:text-sm">
//                 Find us in<br />
//                 Ayodhya city.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Form */}
//       <section className="py-10 md:py-12 -mt-10 md:mt-0">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-2 gap-8 md:gap-12">
//             <div className='flex flex-col justify-center  items-center md:items-start'>
//               <h3 className="text-3xl md:text-4xl font-bold mb-2 md:mb-4">
//                 <span className="text-[#fab604] text-5xl md:text-7xl stroke-only">Form</span>
//               </h3>
//               <h4 className="text-3xl md:text-5xl font-bold text-[#1c0f0d] mb-4 md:mb-6">Get In Touch !!</h4>
//               <p className="text-[#1c0f0d] mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
//                 Have a question, suggestion, or just want to cheer for the Ayodhya Super Kings? We'd love to hear from you! Whether you're a fan, a fellow player, a sponsor, or a brand looking to collaborate — feel free to reach out. Let's build something exciting together, on and off the court.
//               </p>
//             </div>

//             <div>
//               <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
//                 <div>
//                   <label htmlFor="name" className="block text-[#1c0f0d] font-medium mb-1 md:mb-2 text-sm md:text-base">
//                     Name :
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     placeholder="Enter your name"
//                     className="w-full px-3 py-2 md:px-4 md:py-3 border-2 border-[#fcda20] rounded-lg focus:outline-none focus:border-[#ff9602] transition-colors text-sm md:text-base"
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="email" className="block text-[#1c0f0d] font-medium mb-1 md:mb-2 text-sm md:text-base">
//                     Email :
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     placeholder="Enter your email"
//                     className="w-full px-3 py-2 md:px-4 md:py-3 border-2 border-[#fcda20] rounded-lg focus:outline-none focus:border-[#ff9602] transition-colors text-sm md:text-base"
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="subject" className="block text-[#1c0f0d] font-medium mb-1 md:mb-2 text-sm md:text-base">
//                     Subject :
//                   </label>
//                   <input
//                     type="text"
//                     id="subject"
//                     name="subject"
//                     value={formData.subject}
//                     onChange={handleChange}
//                     placeholder="Enter subject"
//                     className="w-full px-3 py-2 md:px-4 md:py-3 border-2 border-[#fcda20] rounded-lg focus:outline-none focus:border-[#ff9602] transition-colors text-sm md:text-base"
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="message" className="block text-[#1c0f0d] font-medium mb-1 md:mb-2 text-sm md:text-base">
//                     Message :
//                   </label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     placeholder="Enter your message"
//                     rows="4"
//                     className="w-full px-3 py-2 md:px-4 md:py-3 border-2 border-[#fcda20] rounded-lg focus:outline-none focus:border-[#ff9602] transition-colors resize-none text-sm md:text-base"
//                     required
//                   />
//                 </div>

//                 <div className="flex justify-center md:block">
//         <button
//           type="submit"
//           disabled={isSubmitting}
//           className={`bg-[#fab604] text-[#1c0f0d] px-6 py-2 md:px-8 md:py-3 rounded-lg hover:scale-105 transition-all font-medium text-sm md:text-base flex items-center justify-center min-w-[120px] ${
//             isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
//           }`}
//         >
//           {isSubmitting ? (
//             <>
//               <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-[#1c0f0d]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//               </svg>
//               Submitting...
//             </>
//           ) : (
//             'Submit'
//           )}
//         </button>
//       </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    emailjs.send(
      'service_c8phyky',
      'template_cvjvfvk',
      formData,
      'CmKceVxPcExwgX959'
    )
    .then((response) => {
      console.log('Email sent successfully!', response.status, response.text);
      setShowSuccessPopup(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
      setTimeout(() => {
        setShowSuccessPopup(false);
      }, 5000);
    })
    .catch((error) => {
      console.error('Failed to send email:', error);
      alert('Failed to send message. Please try again later.');
      setIsSubmitting(false);
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen overflow-x-hidden"> {/* Added overflow-x-hidden */}
      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 md:p-8 max-w-md w-full shadow-lg transform transition-all">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Form Submitted Successfully!</h3>
              <p className="text-gray-600 mb-6">Our team will contact you soon.</p>
              <button
                onClick={() => setShowSuccessPopup(false)}
                className="bg-[#fab604] text-[#1c0f0d] px-6 py-2 rounded-lg hover:scale-105 transition-all font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

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

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            <div className="text-center border-b-2 sm:border-b-0 sm:border-r-2 border-[#fab604] p-4">
              <div className="bg-[#fab604] w-12 h-12 md:w-16 md:h-16 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                <Phone className="w-6 h-6 md:w-8 md:h-8 text-[#1c0f0d]" />
              </div>
              <h4 className="text-md md:text-xl font-bold text-[#1c0f0d] mb-1 md:mb-2">+91-99995 32227</h4>
              {/* <p className="text-[#1c0f0d] text-xs md:text-sm">
                Call us for match<br />
                enquiries.
              </p> */}
            </div>

            <div className="text-center border-b-2 sm:border-b-0 md:border-r-2 border-[#fab604] p-4">
              <div className="bg-[#fab604] w-12 h-12 md:w-16 md:h-16 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                <Mail className="w-6 h-6 md:w-8 md:h-8 text-[#1c0f0d]" />
              </div>
              <h4 className="text-md md:text-xl font-bold text-[#1c0f0d] mb-1 md:mb-2 break-all px-2">ayodhya.super.kings@uppvl.com</h4>
              {/* <p className="text-[#1c0f0d] text-xs md:text-sm">
                Send your queries<br />
                by email.
              </p> */}
            </div>

            <div className="text-center p-4">
              <div className="bg-[#fab604] w-12 h-12 md:w-16 md:h-16 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                <MapPin className="w-6 h-6 md:w-8 md:h-8 text-[#1c0f0d]" />
              </div>
              <h4 className="text-md md:text-xl font-bold text-[#1c0f0d] mb-1 md:mb-2">G-48, First Floor, Jungpura Extension, Near Eros Cinema, New Delhi-110014</h4>
              {/* <p className="text-[#1c0f0d] text-xs md:text-sm">
                Find us in<br />
                Ayodhya city.
              </p> */}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-10 md:py-12 -mt-10 md:mt-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className='flex flex-col justify-center items-center md:items-start'>
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
                    disabled={isSubmitting}
                    className={`bg-[#fab604] text-[#1c0f0d] px-6 py-2 md:px-8 md:py-3 rounded-lg hover:scale-105 transition-all font-medium text-sm md:text-base flex items-center justify-center min-w-[120px] ${
                      isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-[#1c0f0d]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      'Submit'
                    )}
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