import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ContactSection from "../Components/ContactSection";


const CaseStudiesPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // DATA: Content matching your requirements
  const caseStudies = [
    {
      id: 1,
      title: "SwirlCraft",
      subtitle: "From Pigments to a Story",
      layout: "image-left",
      challenge: "The Challenge",
      challengeText: "Vinitha, founder of SwirlCraft, introduced versatile, skin-friendly pigments that could be used across industries—from cars and walls to cosmetics. However, in Bahrain and Eastern Saudi Arabia, the market struggled to understand their versatility and the story behind them.",
      images: [
        "/CaseStudies/SwirlCraft/Picture4.png", 
        "/CaseStudies/SwirlCraft/Picture7.png",
        
      ]
    },
    {
      id: 1.5,
      layout: "image-right",
      challenge: "The  Solution",
      challengeText: "PFP created a brand profile video that combined storytelling with education. Handling everything from scripting and conceptualization to production and post, the video showcased both the science and the soul of SwirlCraft—bringing pigments to life and making the brand impossible to ignore.",
      images: [
        "/CaseStudies/SwirlCraft/Picture2.png",
        "/CaseStudies/SwirlCraft/Picture5.png"
      ]
    },
    {
      id: 1.75,
      layout: "image-left",
      noBorder: true,
      results: "The Results",
      resultsList: [
        "80 inquiries generated within 2 weeks of publishing the video",
        "Clearer market understanding of Vinitha, her brand, and her product",
        "Added depth and credibility to the brand by weaving in Vinitha's personal story"
      ],
      images: [
        "/CaseStudies/SwirlCraft/Picture6.png",
        "/CaseStudies/SwirlCraft/Picture3.png"
      ]
    },
    {
      id: 2,
      title: "ICC Bahrain",
      subtitle: "Building a Digital Church in the Middle East",
      layout: "image-left",
      useGreenAccent: true,
      challenge: "The Challenge",
      challengeText: "ICCBahrain is part of the International Christian Church movement (City of Angels ICC). Establishing a branch in Bahrain meant navigating a new cultural landscape, where traditional church models would not automatically resonate. They needed to build a strong, strategic presence that connected with people authentically in a region where faith communities operate under unique sensitivities.",
      
      images: [
         "/CaseStudies/ICCBahrain/Picture13.png",
         "/CaseStudies/ICCBahrain/Picture12.png",
         
      ]
    },
    {
      id: 2.5,
      layout: "image-right",
      useGreenAccent: true,
      challenge: "The  Solution",
      challengeText: "PFP helped ICCBahrain lay its entire digital foundation by establishing and managing their social media presence on YouTube, TikTok, Instagram, and Facebook. The team produced video content for weekly sermons, scripted and shot skits to engage younger audiences, and built and maintained their website (iccbahrain.org), including developing a blog for extended teaching and storytelling.",
      images: [
        "/CaseStudies/ICCBahrain/Picture9.png",
        "/CaseStudies/ICCBahrain/Picture11.png"
      ]
    },
    {
      id: 2.75,
      layout: "image-left",
      noBorder: true,
      useGreenAccent: true,
       results: "The Results",
      resultsList: [
        "TikTok became their breakout platform, with nearly 10,000 people tuning in to their live streams",
        "YouTube became a dedicated channel for sermon distribution",
        "Instagram & Facebook supported ongoing community engagement and connection"
      ],
      images: [
        "/CaseStudies/ICCBahrain/Picture10.png",
        "/CaseStudies/ICCBahrain/Picture8.png"
      ]
    },
    {
      id: 3,
      title: "FaithnFitness with Conor Brown ",
      subtitle: "Building a Fitness Brand with Purpose",
      layout: "image-left",
      challenge: "The Challenge",
      challengeText: "Conner Brown wanted to merge his passion for fitness with his faith by creating a TikTok-first channel. The challenge was breaking into a saturated fitness content space with a brand that stood out while remaining true to his values and resonating authentically with audiences.",
      
      images: [
        "/CaseStudies/FaithnFitness with Conner Brown/Picture31.png",
        "/CaseStudies/FaithnFitness with Conner Brown/Picture30.png",
        
      ]
    },
    {
      id: 3.5,
      layout: "image-right",
      challenge: "The  Solution",
      challengeText: "PFP helped Conner conceptualize FaithnFitness with Conner, shaping it as more than just workouts but content with purpose. We developed the creative direction for the channel, filmed and edited a series of engaging fitness vlogs, and managed publishing to optimize TikTok reach and growth.",
      images: [
        "/CaseStudies/FaithnFitness with Conner Brown/Picture25.png",
        "/CaseStudies/FaithnFitness with Conner Brown/Picture26.png"
      ]
    },
    {
      id: 3.75,
      layout: "image-left",
      noBorder: true,
       results: "The Results",
      resultsList: [
        "1.2 million views on TikTok in under one month",
        "13k+ followers in under one month on Tik Tok",
        "Established FaithnFitness as a unique voice in the faith + fitness content space"
      ],
      images: [
        "/CaseStudies/FaithnFitness with Conner Brown/Picture28.png",
        "/CaseStudies/FaithnFitness with Conner Brown/Picture27.png"
      ]
    },
    {
      id: 4,
      title: "The Ceylon Chamber of  Commerce",
      subtitle: "Sri Lankan Economic Summit 2025",
      layout: "image-left",
      useGreenAccent: true,
      challenge: "The Challenge",
      challengeText: "The Ceylon Chamber of Commerce, one of Sri Lanka’s most influential business organizations, required full video production coverage for their flagship annual event, the Sri Lankan Economic Summit (SLES) 2025. With over 700 attendees and the presence of His Excellency President Anura Kumara Dissanayake, the demand was not only for flawless coverage but also rapid delivery.",
      
      images: [
        "/CaseStudies/The Ceylon Chamber of  Commerce/Picture14.png",
        "/CaseStudies/The Ceylon Chamber of  Commerce/Picture16.png",
        
      ]
    },
    {
      id: 4.5,
      layout: "image-right",
      useGreenAccent: true,
      challenge: "The  Solution",
      challengeText: "PFP deployed a four-person production team equipped with a Netflix-approved cinema camera to ensure broadcast-level quality. We covered keynote speeches, panel discussions, and event highlights, capturing the scale and significance of SLES 2025 with cinematic precision.",
      images: [
        "/CaseStudies/The Ceylon Chamber of  Commerce/Picture15.png",
        "/CaseStudies/The Ceylon Chamber of  Commerce/Picture17.png"
      ]
    },
    {
      id: 4.75,
      layout: "image-left",
      noBorder: true,
      useGreenAccent: true,
       results: "The Results",
      resultsList: [
        "High-quality cinematic coverage of the summitt, attended by the President and 700+ delegates",
        "Edited highlights and speeches delivered within 24 hours of the event’s conclusion",
        "Elevated the Chamber’s reputation with professional, broadcast-quality event documentation"
      ],
      images: [
        "/CaseStudies/The Ceylon Chamber of  Commerce/Picture14.png",
        "/CaseStudies/The Ceylon Chamber of  Commerce/Picture15.png"
      ]
    },
  ];

  return (
    <div className="relative min-h-screen font-sans text-white overflow-x-hidden selection:bg-[#00ff88] selection:text-black p-4 md:p-[75px]">
      
      {/* GLOBAL STYLES & FONTS */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+Display:ital,wght@1,700&display=swap');
        
        /* Custom scrollbar */
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #050505; }
        ::-webkit-scrollbar-thumb { background: #333; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #00ff88; }

        /* Animation for fade in */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp { animation: fadeInUp 1s ease forwards; }
      `}</style>

      {/* -----------------------------------------------------
          BACKGROUND IMAGE (Fixed)
      ----------------------------------------------------- */}
      <div 
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/CaseStudies/background image.png')", 
          backgroundColor: 'black' 
        }}
      ></div>


      {/* -----------------------------------------------------
          NAVBAR
      ----------------------------------------------------- */}
       {/* -----------------------------------------------------
          NAVBAR
       ----------------------------------------------------- */}
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


      {/* -----------------------------------------------------
          HERO SECTION (Updated with Exact Metrics)
      ----------------------------------------------------- */}
      <section className="relative h-screen w-full flex items-center px-4">
        <h1 
          className="text-white text-center md:text-left animate-fadeInUp w-full max-w-[1400px] mx-auto"
          style={{ 
            fontFamily: '"Noto Serif Display", serif',
            fontWeight: 700,
            fontStyle: 'italic',
            fontSize: '60px', 
            lineHeight: '60px',
            letterSpacing: '-2px',
            padding: '20px'
          }}
        >
          <span className="md:hidden">Case Studies</span>
          <span className="hidden md:inline pl-[50px] md:pl-[100px]" style={{ fontSize: '120px', lineHeight: '100px', letterSpacing: '-12px' }}>Case Studies</span>
        </h1>
      </section>


      {/* -----------------------------------------------------
          MAIN CONTENT
      ----------------------------------------------------- */}
      <main className="relative z-10 container mx-auto px-4 pb-32">
        <div className="space-y-32 md:space-y-44">
          {caseStudies.map((study, index) => {
            const isImageLeft = study.layout === 'image-left';

            return (
              <section key={study.id} className="relative group">
                
                {/* 1. SECTION HEADER */}
                <div className="text-center mb-16 md:mb-20">
                    <h2 
                        className="font-bold text-white mb-2" 
                        style={{ fontFamily: 'Arial Nova, Arial, sans-serif', fontWeight: 700, fontSize: '56.5px', lineHeight: '100%', letterSpacing: '0%', textAlign: 'center' }}
                    >
                        {study.title}
                    </h2>
                    <p className={`${study.useGreenAccent ? 'text-[#42FF92]' : 'text-[#ff00ff]'}`} style={{ fontFamily: 'TT Marxiana Trial, serif', fontWeight: 400, fontStyle: 'italic', fontSize: '25px', lineHeight: '100%', letterSpacing: '0%', textAlign: 'center' }}>
                        {study.subtitle}
                    </p>
                </div>

                {/* 2. SPLIT CONTENT (Zig-Zag) */}
                <div className={`flex flex-col md:flex-row gap-20 md:gap-28 items-center ${!isImageLeft ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* --- IMAGES SIDE --- */}
                  <div className="w-full md:w-1/2 relative min-h-[auto] md:min-h-[500px] flex flex-col md:block items-center justify-center gap-6 md:gap-0">
                     {/* Back Image (becomes top image in stack on mobile) */}
                     <div className={`relative md:absolute md:top-8 ${isImageLeft ? 'md:left-8' : 'md:right-8'} w-[90%] md:w-[75%] z-10 transform hover:scale-105 transition duration-700 ease-out shadow-2xl rounded-lg overflow-hidden`}>
                       <img src={study.images[0]} alt="Showcase Main" className="w-full h-auto object-cover aspect-video opacity-100 md:opacity-90 hover:opacity-100 transition-opacity" />
                     </div>
                     {/* Front Image (becomes bottom image in stack on mobile) */}
                     <div className={`relative md:absolute w-[90%] md:w-[75%] z-20 transform hover:scale-105 transition duration-700 shadow-[0_10px_40px_rgba(0,0,0,0.8)] rounded-lg overflow-hidden md:top-[242px] ${isImageLeft ? 'md:-right-[218px]' : 'md:-left-[218px]'}`}>
                       <img src={study.images[1]} alt="Showcase Wide" className="w-full h-auto object-cover aspect-video" />
                     </div>
                  </div>

                  {/* --- TEXT SIDE --- */}
                  <div className={`w-full md:w-1/2 space-y-10 px-2 md:px-0 ${!isImageLeft ? 'md:text-right md:pr-[200px]' : 'text-left md:pl-[150px]'}`}>
                    {/* Challenge */}
                    <div className="relative text-center">
                      <h3 className="italic mb-6" style={{ fontFamily: '"Noto Serif Display", serif', fontWeight: 600, fontSize: '32px', lineHeight: '100%', letterSpacing: '-1%', textAlign: 'center', color: study.useGreenAccent ? '#42FF92' : '#ff00ff' }}>
                        {study.challenge}
                      </h3>
                      <p className="text-white mx-auto" style={{ fontFamily: 'Arial Nova, Arial, sans-serif', fontWeight: 300, fontSize: '20px', lineHeight: '20px', letterSpacing: '0px', textAlign: 'center', maxWidth: '500px' }}>
                        {study.challengeText}
                      </p>
                    </div>
                    {/* Solution */}
                    {study.solution && (
                    <div className="relative">
                       <h3 className="text-[#00ff88] font-bold uppercase tracking-widest text-xs mb-3">
                        {study.solution}
                      </h3>
                      <p className="text-[#d4d4d4] leading-relaxed text-sm md:text-lg font-light">
                        {study.solutionText}
                      </p>
                    </div>
                    )}
                    {/* Results */}
                    {study.results && (
                    <div className="relative text-center">
                       <h3 className="italic mb-6" style={{ fontFamily: '"Noto Serif Display", serif', fontWeight: 600, fontSize: '48px', lineHeight: '1.2', letterSpacing: '-0.02em', color: study.useGreenAccent ? '#42FF92' : '#ff00ff' }}>
                        {study.results}
                      </h3>
                      <ul className={`space-y-4 inline-block ${!isImageLeft ? 'text-right' : 'text-left'}`}>
                        {study.resultsList.map((item, i) => (
                          <li key={i} className={`flex items-start gap-4 ${!isImageLeft ? 'flex-row-reverse' : ''}`}>
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#ff00ff] shrink-0 shadow-[0_0_8px_#ff00ff]"></span>
                            <span className="text-white text-sm md:text-base">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    )}
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </main>


      
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
};

export default CaseStudiesPage;