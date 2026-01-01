import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ContactSection from "../Components/ContactSection";


const images = [
  "WhatsApp Image 2025-12-18 at 01.23.24.jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.24 (1).jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.24 (2).jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.25.jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.25 (1).jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.25 (2).jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.26.jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.26 (1).jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.26 (2).jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.27.jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.27 (1).jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.24.jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.24 (1).jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.24 (2).jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.25.jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.25 (1).jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.25 (2).jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.26.jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.26 (1).jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.26 (2).jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.27.jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.24.jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.24 (1).jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.24 (2).jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.25.jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.25 (1).jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.25 (2).jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.26.jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.26 (1).jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.26 (2).jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.27.jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.24.jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.24 (1).jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.24 (2).jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.25.jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.25 (1).jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.25 (2).jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.26.jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.26 (1).jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.26 (2).jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.27.jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.24.jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.24 (1).jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.24 (2).jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.25.jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.25 (1).jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.25 (2).jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.26.jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.26 (1).jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.26 (2).jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.27.jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.24.jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.24 (1).jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.24 (2).jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.25.jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.25 (1).jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.25 (2).jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.26.jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.26 (1).jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.26 (2).jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.27.jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.24.jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.24 (1).jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.24 (2).jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.25.jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.25 (1).jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.25 (2).jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.26.jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.26 (1).jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.26 (2).jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.27.jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.24.jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.24 (1).jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.24 (2).jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.25.jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.25 (1).jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.25 (2).jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.26.jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.26 (1).jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.26 (2).jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.27.jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.24.jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.24 (1).jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.24 (2).jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.25.jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.25 (1).jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.25 (2).jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.26.jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.26 (1).jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.26 (2).jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.27.jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.24.jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.24 (1).jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.24 (2).jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.25.jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.25 (1).jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.25 (2).jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.26.jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.26 (1).jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.26 (2).jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.27.jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.24.jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.24 (1).jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.24 (2).jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.25.jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.25 (1).jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.25 (2).jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.26.jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.26 (1).jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.26 (2).jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.27.jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.24.jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.24 (1).jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.24 (2).jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.25.jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.25 (1).jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.25 (2).jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.26.jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.26 (1).jpeg",
  "WhatsApp Image 2025-12-18 at 01.23.26 (2).jpeg",
];

export default function ContentMarketing() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div
      className="min-h-screen w-full flex flex-col items-center pt-16"
      style={{
        backgroundImage: "url('/ContentMarketing/background image.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <header className="w-full flex flex-col items-center mb-20">
        <h1
          className="text-[2.5rem] md:text-[4rem] lg:text-[4.5rem] font-bold italic text-center mt-8"
          style={{ fontFamily: "serif, Times New Roman, Times, Georgia" }}
        >
          <span className="text-white">Short-form </span>
          <span className="text-fuchsia-400">Content Marketing</span>
        </h1>
      </header>

      {/* --- GRID MODIFIED TO 8 COLUMNS BELOW --- */}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 w-full max-w-7xl px-2 md:px-8">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="aspect-[9/16] bg-black rounded-lg overflow-hidden shadow-lg border border-gray-800 flex justify-center items-center"
          >
            <img
              src={`/ContentMarketing/${img}`}
              alt="Content Marketing"
              className="object-cover"
              style={{ width: "90%", height: "100%" }}
            />
          </div>
        ))}
      </div>

      {/* --- NAVIGATION BAR --- */}
      <nav className="absolute top-0 left-0 right-0 z-[100] bg-transparent py-4 md:py-8">
        <div className="max-w-[1200px] xl:max-w-[1400px] mx-auto flex flex-wrap justify-between items-center px-4 md:px-8">
          {/* Logo */}
          <div className="logo relative z-50">
            <Link to="/">
              <img
                src="/HomePage/logo.png"
                alt="PFP Logo"
                className="h-[30px] md:h-[40px] lg:h-[50px] w-auto"
              />
            </Link>
          </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white z-50 p-2 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
              )}
            </button>

          {/* Menu Links */}
          <ul className={`${
              isMobileMenuOpen 
                ? 'fixed inset-0 bg-black/95 flex flex-col items-center justify-center gap-8 text-2xl h-screen w-screen z-40' 
                : 'hidden md:flex'
              } list-none gap-2 md:gap-4 lg:gap-8 order-3 md:order-none w-full md:w-auto justify-center md:justify-end text-[0.6rem] sm:text-[0.75rem] md:text-[0.9rem] font-medium transition-all duration-300 ease-in-out`}>
            <li>
              <button
                onClick={() => { setIsMobileMenuOpen(false); window.location.href = '/#services'; }}
                className="text-white hover:text-[#00ff88] border-b-2 border-transparent hover:border-[#00ff88] pb-2 transition-colors duration-300 font-sans cursor-pointer bg-transparent uppercase"
              >
                SERVICES
              </button>
            </li>
            <li>
              <Link
                to="/Case-Studies"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white hover:text-[#00ff88] border-b-2 border-transparent hover:border-[#00ff88] pb-2 transition-colors duration-300 font-sans"
              >
                CASE STUDIES
              </Link>
            </li>
            <li>
              <button
                onClick={() =>
                  { setIsMobileMenuOpen(false); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }
                }
                className="text-white bg-transparent border-none cursor-pointer hover:text-[#00ff88] border-b-2 border-transparent hover:border-[#00ff88] pb-2 transition-colors duration-300 font-medium uppercase font-sans"
              >
                CONTACT
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/ContentMarketing/backgroundimage.png')",
          backgroundColor: "black",
        }}
      ></div>
       {/* Footer and contact form */}
            <footer
              className="bg-transparent pt-0 pb-16 border-t border-[#00ff8833] md:border-none mt-24"
              id="contact"
            >
              <div className="flex flex-col md:flex-row justify-center items-start gap-8 md:gap-16 max-w-[1200px] mx-auto px-4 py-12">
            
                {/* Contact details */}
                <div className="flex-[1.1] flex flex-row items-start gap-6 w-full mt-12">
                  
                  {/* QR code */}
                  <div className="shrink-0">
                    <img
                      src="/HomePage/qr.png"
                      alt="QR Code"
                      className="w-[200px] h-[200px] rounded-[5px] bg-white object-contain shadow-lg"
                    />
                  </div>
            
                  {/* Contact info */}
                  <div className="flex flex-col">
                    <h2 className="text-[2.2rem] md:text-[2.5rem] font-bold mb-2 leading-none">
                      <span className="text-[#00ff88]">Contact</span>{" "}
                      <span className="text-[#f0f0f0] font-light opacity-90">Us</span>
                    </h2>
            
                    <p className="text-[#888] text-[0.9rem] mb-8 font-light tracking-wide">
                      Bahrain – Saudi – UAE – India – Sri Lanka
                    </p>
            
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                      
                      {/* Contact person 1 */}
                      <div className="text-[1rem] leading-snug">
                        <p className="mb-1">
                          <span className="text-[#00ff88] font-medium">Murray</span>{" "}
                          <span className="text-white">William</span> –{" "}
                          <span className="text-[#ff00ff]">CRO</span>
                        </p>
                        <p className="text-[#ff00ff] mb-1">murray@pfp.online</p>
                        <p className="text-[#00ff88]">Bahrain</p>
                      </div>
            
                      {/* Contact person 2 */}
                      <div className="text-[1rem] leading-snug">
                        <p className="mb-1">
                          <span className="text-[#00ff88] font-medium">Dan</span>{" "}
                          <span className="text-white">Joseph</span> –{" "}
                          <span className="text-[#ff00ff]">Director</span>
                        </p>
                        <p className="text-[#ff00ff] mb-1">dan@pfp.online</p>
                        <p className="text-[#00ff88]">Sri Lanka</p>
                      </div>
            
                    </div>
                  </div>
                </div>
            
                {/* Contact form component (EmailJS connected) */}
                <ContactSection />
            
              </div>
            </footer>
    </div>
  );
}