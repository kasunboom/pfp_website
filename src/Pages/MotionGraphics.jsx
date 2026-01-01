import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ContactSection from "../Components/ContactSection";

// Data for challenges section
const challenges = [
  {
    title: "The Challenge",
    desc: `Vinitha, founder of SwirlCraft, introduced versatile, skin-friendly pigments that could be used across industries—from cars and walls to cosmetics. However, in Bahrain and Eastern Saudi Arabia, the market struggled to understand their versatility and the story behind them.`,
    images: [null, null, null], 
    reverse: false,
    label: "Meydan Freezone"
  },
  {
    title: "The Challenge",
    desc: `Vinitha, founder of SwirlCraft, introduced versatile, skin-friendly pigments that could be used across industries—from cars and walls to cosmetics. However, in Bahrain and Eastern Saudi Arabia, the market struggled to understand their versatility and the story behind them.`,
    images: [null, null, null],
    reverse: true,
    label: null
  },
  {
    title: "The Challenge",
    desc: `Vinitha, founder of SwirlCraft, introduced versatile, skin-friendly pigments that could be used across industries—from cars and walls to cosmetics. However, in Bahrain and Eastern Saudi Arabia, the market struggled to understand their versatility and the story behind them.`,
    images: [null, null, null],
    reverse: false,
    label: null
  }
];

export default function MotionGraphics() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="min-h-screen w-full flex flex-col items-center pt-10 px-2 relative ">
      
      {/* Fixed background layer */}
      <div 
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/HomePage/videoProductionbackground.png')", 
          backgroundColor: 'black' 
        }}
      ></div>

      {/* Navigation Bar */}
      <nav className="absolute top-0 left-0 right-0 z-[100] bg-transparent py-4 md:py-8">
        <div className="max-w-[1200px] xl:max-w-[1400px] mx-auto flex flex-wrap justify-between items-center px-4 md:px-8">
          <div className="logo relative z-50">
            <Link to="/">
              <img src="/HomePage/logo.png" alt="PFP Logo" className="h-[30px] md:h-[40px] lg:h-[50px] w-auto" />
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

          <ul className={`${
              isMobileMenuOpen 
                ? 'fixed inset-0 bg-black/95 flex flex-col items-center justify-center gap-8 text-2xl h-screen w-screen z-40' 
                : 'hidden md:flex'
              } list-none gap-2 md:gap-4 lg:gap-8 order-3 md:order-none w-full md:w-auto justify-center md:justify-end text-[0.6rem] sm:text-[0.75rem] md:text-[0.9rem] font-medium transition-all duration-300 ease-in-out`}>
            <li><button onClick={() => { setIsMobileMenuOpen(false); window.location.href = '/#services'; }} className="text-white hover:text-[#00ff88] border-b-2 border-transparent hover:border-[#00ff88] pb-2 transition-colors duration-300 font-sans cursor-pointer bg-transparent uppercase">SERVICES</button></li>
            <li><Link to="/Case-Studies" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-[#00ff88] border-b-2 border-transparent hover:border-[#00ff88] pb-2 transition-colors duration-300 font-sans">CASE STUDIES</Link></li>
            <li>
                <button onClick={() => { setIsMobileMenuOpen(false); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-white bg-transparent border-none cursor-pointer hover:text-[#00ff88] border-b-2 border-transparent hover:border-[#00ff88] pb-2 transition-colors duration-300 font-medium uppercase font-sans">
                  CONTACT
                </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Header Section */}
      <header className="w-full flex flex-col items-center mb-20 md:mb-40 mt-32 md:mt-80">
        <h1 className="text-[2.5rem] md:text-[4rem] lg:text-[4.5rem] font-bold italic text-left w-full max-w-6xl px-4 md:px-0" style={{ fontFamily: 'serif, Times New Roman, Times, Georgia' }}>
          <span
            className="text-white block text-[60px] md:text-[120px] leading-[60px] md:leading-[100px] tracking-[-5px] md:tracking-[-12px]"
            style={{
              fontFamily: 'Noto Serif Display, serif',
              fontWeight: 700,
              fontStyle: 'italic',
              display: 'block',
            }}
          >
            Motion
          </span>
          <span
            className="text-green-500 block -mt-2 text-[60px] md:text-[120px] leading-[60px] md:leading-[100px] tracking-[-5px] md:tracking-[-12px]"
            style={{
              fontFamily: 'Noto Serif Display, serif',
              fontWeight: 700,
              fontStyle: 'italic',
              display: 'block',
            }}
          >
            Graphics
          </span>
        </h1>
      </header>

      {/* Render challenges list */}
      <div className="w-full max-w-5xl flex flex-col gap-40 mb-20">
        {challenges.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center">
            
            {/* Optional label rendering */}
            {item.label && (
              <div className="w-full text-center mb-40">
                <span
                  style={{
                    fontFamily: 'Arial Nova, Arial, sans-serif',
                    fontWeight: 700,
                    fontStyle: 'italic',
                    fontSize: '45px',
                    lineHeight: '20px',
                    letterSpacing: '0px',
                    textAlign: 'center',
                    fontStretch: 'condensed',
                    display: 'inline-block',
                  }}
                  className="text-white"
                >
                  Meydan{' '}
                  <span className="text-green-400">Freezone</span>
                </span>
              </div>
            )}

            {/* Challenges Section */}
            <div className={`w-full flex flex-col-reverse md:flex-row ${item.reverse ? 'md:flex-row-reverse' : ''} items-center justify-between gap-12 md:gap-20`}>
              
              {/* Decorative image stack */}
              <div className="relative w-[320px] h-[260px] md:w-[480px] md:h-[350px]">
                {/* Center card */}
                <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[130px] h-[190px] md:w-[180px] md:h-[260px] bg-[#E0E0E0] rounded-lg shadow-lg z-10" />
                {/* Left card */}
                <div className="absolute left-0 bottom-4 md:bottom-8 w-[130px] h-[190px] md:w-[180px] md:h-[260px] bg-[#B7ADB0] rounded-lg shadow-xl z-20" />
                {/* Right card */}
                <div className="absolute right-0 bottom-8 md:bottom-16 w-[130px] h-[190px] md:w-[180px] md:h-[260px] bg-[#A88E8F] rounded-lg shadow-xl z-20" />
              </div>

              {/* Text Content */}
              <div className="max-w-xs md:max-w-sm">
                <h3 className={`text-xl md:text-2xl font-bold mb-4 text-fuchsia-400 font-serif ${item.reverse ? 'text-center' : 'text-center'}`}>
                  {item.title}
                </h3>
                <p 
                  className="text-white"
                  style={{
                    fontFamily: 'Arial Nova, Arial, sans-serif',
                    fontWeight: 300,
                    fontStyle: 'normal', 
                    fontSize: '20px',
                    lineHeight: '20px',
                    letterSpacing: '0px',
                    textAlign: 'center',
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

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