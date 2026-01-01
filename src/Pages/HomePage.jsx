import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ContactSection from "../Components/ContactSection";


const HomePage = () => {
  const [activeService, setActiveService] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Case Studies Data
  const caseStudiesData = [
    {
      id: 1,
      client: "SwirlCraft",
      subtitle: "Turning Pigments into a Story",
      description: "SwirlCraft had a powerful product—multi-purpose, skin-friendly pigments—but the market didn’t understand its potential. PFP created a brand profile video that blended story and education, showing both the science and the soul behind the product. The film drove 80 inquiries in two weeks, improved market understanding, and strengthened the brand by sharing Vinitha’s personal story.",
      images: [
        '/HomePage/SwirlCraft/Picture4.png',
        '/HomePage/SwirlCraft/Picture5.png',
        '/HomePage/Miley Twinkle Paw/Picture7.png'
      ]
    },
    {
      id: 2,
      client: "FaithnFitness with Conner Brown",
      subtitle: "Building a Fitness Brand with Purpose",
      description: "Conner Brown wanted to launch a TikTok-first fitness channel rooted in faith. PFP helped shape the creative direction, filmed and edited engaging vlogs, and managed publishing for maximum reach. Within one month, the channel crossed 1.2M+ views and 13k+ followers, establishing FaithnFitness as a standout voice in the faith-based fitness space.",
      images: [
        '/HomePage/FaithnFitness with Conner Brown/Picture25.png',
        '/HomePage/FaithnFitness with Conner Brown/Picture26.png',
        '/HomePage/FaithnFitness with Conner Brown/Picture31.png'
      ]
    },
    {
      id: 3,
      client: "ICCBahrain",
      subtitle: "Building a Digital Church in the Middle East",
      description: "ICCBahrain needed a way to connect authentically in a new cultural landscape. PFP built their entire digital foundation—from social media and video production to a full website and blog. TikTok became their breakout platform, reaching nearly 10,000 live viewers and generating 200–450+ weekly inquiries. Their online presence grew into a strong, recognizable faith community across Bahrain and beyond.",
      images: [
        '/HomePage/ICCBahrain/Picture9.png',
        '/HomePage/ICCBahrain/Picture10.png',
        '/HomePage/ICCBahrain/Picture13.png'
      ]
    },
    {
      id: 4,
      client: "Meydan Free Zone",
      subtitle: "Motion Graphics at Scale",
      description: "Meydan Free Zone needed 25 motion graphic ads in under two weeks. PFP took full creative control and delivered all 25 videos—each crafted with custom graphics, curated footage, and detailed sound design. The result was a fast, high-impact campaign that elevated Meydan’s digital ad presence without compromising quality.",
      images: [
        '/HomePage/Meydan Free Zone/Picture18.png',
        '/HomePage/Meydan Free Zone/Picture19.png',
        '/HomePage/Meydan Free Zone/Picture21.png'
      ]
    },
    {
      id: 5,
      client: "Miley Twinkle Paw",
      subtitle: "A Cat With Global Influence",
      description: "Miley Twinkle Paw needed standout content in a crowded pet influencer world. PFP developed, filmed, edited, and published engaging videos that mixed humor, story, and high-quality visuals. The result: 7M+ Instagram views and a rapidly growing global audience, making Miley a recognizable digital brand across borders.",
      images: [
        '/HomePage/Miley Twinkle Paw/Picture4.png',
        '/HomePage/Miley Twinkle Paw/Picture5.png',
        '/HomePage/Miley Twinkle Paw/Picture7.png'
      ]
    }
  ];

  // Auto-scroll logic for Case Studies
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % caseStudiesData.length);
    }, 3000); 
    return () => clearInterval(timer);
  }, []);



  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Auto-scroll logic for Case Studies
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % caseStudiesData.length);
    }, 3000); 
    return () => clearInterval(timer);
  }, []);

  const currentStudy = caseStudiesData[currentIndex];

  return (
    <div className="bg-[#0a0a0a] text-white font-sans overflow-x-hidden">
      {/* Global CSS and Animations */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+Display:ital,wght@1,600;1,700&display=swap');

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee { animation: marquee 22s linear infinite; }
        
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideInUp { animation: slideInUp 0.8s ease; }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp { animation: fadeInUp 1s ease; }
      `}</style>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden min-h-[70vh]">
        <img src="/HomePage/backgrond 01.png" alt="Hero Background" className="absolute top-0 left-0 w-full h-full object-cover z-[1]" />
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-[2]"></div>
        
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

            {/* Desktop and Mobile Menu */}
            <ul className={`${
              isMobileMenuOpen 
                ? 'fixed inset-0 bg-black/95 flex flex-col items-center justify-center gap-8 text-2xl h-screen w-screen z-40' 
                : 'hidden md:flex'
              } list-none gap-2 md:gap-4 lg:gap-8 order-3 md:order-none w-full md:w-auto justify-center md:justify-end text-[0.6rem] sm:text-[0.75rem] md:text-[0.9rem] font-medium transition-all duration-300 ease-in-out`}>
              <li>
                <button onClick={() => { setIsMobileMenuOpen(false); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-white bg-transparent border-none cursor-pointer hover:text-[#00ff88] border-b-2 border-transparent hover:border-[#00ff88] pb-2 transition-colors duration-300 font-medium font-sans">
                  SERVICES
                </button>
              </li>
              <li>
                <button onClick={() => { setIsMobileMenuOpen(false); document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-white bg-transparent border-none cursor-pointer hover:text-[#00ff88] border-b-2 border-transparent hover:border-[#00ff88] pb-2 transition-colors duration-300 font-medium font-sans">
                  CASE STUDIES
                </button>
              </li>
              <li>
                <button onClick={() => { setIsMobileMenuOpen(false); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-white bg-transparent border-none cursor-pointer hover:text-[#00ff88] border-b-2 border-transparent hover:border-[#00ff88] pb-2 transition-colors duration-300 font-medium font-sans">
                  CONTACT
                </button>
              </li>
            </ul>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-[3] text-center flex flex-col items-center gap-12 md:gap-16 animate-fadeInUp px-4">
          <div className="relative inline-block mt-6 mb-4">
            <span className="absolute -top-[25px] -left-[10px] md:-top-[45px] md:-left-[60px] text-[30px] md:text-[50px] leading-tight md:leading-[100px] tracking-[-1px] md:tracking-[-3px] font-bold italic text-white drop-shadow-md" style={{ fontFamily: '"Noto Serif Display", serif' }}>Over</span>
            <h1 className="text-[60px] md:text-[120px] leading-[80px] md:leading-[100px] tracking-[-3px] text-[#00ff88] font-bold italic m-0 p-[10px] md:p-[30px]" style={{ fontFamily: '"Noto Serif Display", serif' }}>1 Billion</h1>
            <span className="absolute -bottom-[25px] -right-[10px] md:-bottom-[45px] md:-right-[60px] text-[30px] md:text-[50px] leading-tight md:leading-[100px] tracking-[-1px] md:tracking-[-3px] font-bold italic text-white drop-shadow-md" style={{ fontFamily: '"Noto Serif Display", serif' }}>Views</span>
          </div>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#00ff88] text-black border-none py-[0.8rem] md:py-[1.2rem] px-[1.5rem] md:px-[3rem] font-bold cursor-pointer rounded-none transition-all duration-300 shadow-[0_0_20px_rgba(0,255,136,0.3)] uppercase hover:scale-105 hover:bg-[#00ff99] hover:shadow-[0_0_30px_rgba(0,255,136,0.6)]" style={{ fontFamily: 'Arial Nova, sans-serif', fontWeight: 700, fontSize: '12px', lineHeight: '25px', letterSpacing: '1px', textAlign: 'center' }}>
            GET YOUR FIRST VIRAL VIDEO
          </button>
        </div>
      </section>

      {/* Brand Marquee Section */}
      <section className="bg-[url('/HomePage/backgrond_02.png')] bg-center bg-cover overflow-hidden py-6 relative" aria-label="Featured brands">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30 pointer-events-none z-[1]"></div>
        <div className="relative w-full [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)] z-[2]">
          <div className="flex items-center gap-8 md:gap-[4.5rem] w-max animate-marquee">
            {[...Array(2)].map((_, repeatIdx) => (
              <React.Fragment key={repeatIdx}>
                {['Vector 01','Vector 02','Vector 03','Vector 04','Vector 05','Vector 06','Vector 07','Vector 08','Vector 09','Vector 10','Vector 11'].map((name, idx) => (
                  <div className="h-[30px] md:h-[44px]" key={`${repeatIdx}-${idx}`}>
                    <img src={`/brand/${name}.png`} alt={`${name} logo`} loading="lazy" className="h-full w-auto object-contain grayscale brightness-125 opacity-80" />
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-12 md:py-16 flex justify-center bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: "url('/HomePage/backgrond 02.png')" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30 pointer-events-none"></div>
        <div className="w-full max-w-[1200px] xl:max-w-[1400px] px-4 md:px-6">
          <img src="/HomePage/industres section.png" alt="Industries Impact Chart" className="w-full h-auto max-h-[820px] object-contain block mx-auto animate-slideInUp" />
        </div>
      </section>

      {/* Countries / World Map Section */}
      <section className="py-12 flex justify-center bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: "url('/HomePage/backgrond 02.png')" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30 pointer-events-none"></div>
        <div className="w-full max-w-[1200px] xl:max-w-[1400px] px-4 md:px-6">
          <img src="/HomePage/world map.png" alt="World Map" className="w-full h-auto max-h-[750px] object-contain block mx-auto animate-slideInUp" />
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-16 md:py-24 bg-cover bg-center bg-no-repeat relative" id="services" style={{ backgroundImage: "url('/HomePage/backgrond 04.png')" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30 pointer-events-none"></div>
        <div className="max-w-[1200px] xl:max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            <div className="flex-1">
              <div className="mb-12">
                <h2 className="text-[3.5rem] md:text-[5rem] font-serif italic text-[#00ff88] leading-none">Core</h2>
                <h3 className="text-[2rem] md:text-[3rem] font-sans font-bold text-white leading-none ml-2">Services</h3>
              </div>
              <div className="flex flex-col gap-12">
                  <div className="group cursor-pointer">
                    <Link to="/video-production" className="flex items-center gap-4 mb-3">
                      <div className="w-8 md:w-10 h-1 md:h-[6px] bg-[#00ff88]"></div>
                      <h4 className="text-[1.5rem] md:text-[2rem] font-bold text-white hover:text-[#00ff88] transition-colors">
                        Video <span className="text-[#00ff88] group-hover:text-white transition-colors">Production</span>
                      </h4>
                    </Link>
                    <p className="pl-12 md:pl-14 max-w-full md:max-w-[500px] text-[16px] leading-[30px] text-[#F6F6F6] font-[700]" style={{ fontFamily: '"Arial Nova", sans-serif' }}>
                      We don't just shoot videos, we engineer experiences. From concept to final cut, our productions bring stories to life with cinematic impact.
                    </p>
                  </div>
                  <div className="group cursor-pointer">
                    <Link to="/content-marketing" className="flex items-center gap-4 mb-3">
                      <div className="w-8 md:w-10 h-1 md:h-[6px] bg-[#00ff88]"></div>
                      <h4 className="text-[1.5rem] md:text-[2rem] font-bold text-white hover:text-[#00ff88] transition-colors">
                        Short-Form <span className="text-[#00ff88] group-hover:text-white transition-colors">Content Marketing</span>
                      </h4>
                    </Link>
                    <p className="pl-12 md:pl-14 max-w-full md:max-w-[500px] text-[16px] leading-[30px] text-[#F6F6F6] font-[700]" style={{ fontFamily: '"Arial Nova", sans-serif' }}>
                      Attention spans are short. Our content is shorter, faster, and designed to stop the scroll. TikTok, Reels, Shorts, we master the formats, the algorithms, and the art of virality.
                    </p>
                  </div>
                  <div className="group cursor-pointer">
                    <Link to="/motion-graphics" className="flex items-center gap-4 mb-3">
                      <div className="w-8 md:w-10 h-1 md:h-[6px] bg-[#00ff88]"></div>
                      <h4 className="text-[1.5rem] md:text-[2rem] font-bold text-white hover:text-[#00ff88] transition-colors">
                        Motion <span className="text-[#00ff88] group-hover:text-white transition-colors">Graphics</span>
                      </h4>
                    </Link>
                    <p className="pl-12 md:pl-14 max-w-full md:max-w-[500px] text-[16px] leading-[30px] text-[#F6F6F6] font-[700]" style={{ fontFamily: '"Arial Nova", sans-serif' }}>
                      Design meets movement. Our graphics don't decorate, they amplify. Every frame is built to hook, inform, and impress.
                    </p>
                  </div>
              </div>
            </div>
            <div className="flex-1 relative mt-8 lg:mt-0 flex flex-col justify-between">
               <div className="relative h-[300px] md:h-[500px] w-full mb-8 lg:mb-0">
                  <img src="/HomePage/sevices image 02.png" alt="Service 2" className="absolute top-0 right-0 w-[65%] md:w-[60%] h-auto object-cover rounded-lg shadow-2xl opacity-80 z-10" />
                  <img src="/HomePage/sevices image 01.png" alt="Service 1" className="absolute top-[40%] md:top-[35%] left-0 md:left-[5%] w-[70%] md:w-[65%] h-auto object-cover rounded-lg shadow-[0_10px_50px_rgba(0,0,0,0.8)] z-20" />
               </div>
               <div className="lg:absolute lg:bottom-0 lg:right-0 text-left lg:text-right z-30 pt-8 lg:pt-0">
                  <h5 className="text-[1.5rem] font-serif italic text-[#ff00ff] mb-4">Other <span className="font-sans font-bold not-italic text-[#ff00ff]">Services</span></h5>
                  <ul className="text-white space-y-2 text-[1rem]">
                    <li>Content Writing</li>
                    <li>Social Media Marketing</li>
                    <li>Video Editing</li>
                  </ul>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section 
        className="py-16 md:py-24 bg-cover bg-center bg-no-repeat relative" 
        id="case-studies"
        style={{ backgroundImage: "url('/HomePage/backgrond 04.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30 pointer-events-none"></div>
        <div className="max-w-[1200px] xl:max-w-[1400px] mx-auto px-4 md:px-8">
          
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            
            {/* Case Study Text Content */}
            <div className="flex-[1] flex flex-col justify-start items-start z-[2] w-full min-h-[400px] md:h-[500px]">
              <div className="mb-8 md:mb-12 text-left">
                <span className="block text-white text-[35px] md:text-[45px] leading-[25px] font-bold mb-[5px] md:mb-[10px]" style={{ fontFamily: '"Arial Nova", sans-serif' }}>Case</span>
                <span className="block text-[#00ff88] text-[40px] md:text-[55px] leading-[25px] font-bold italic ml-[40px] md:ml-[60px]" style={{ fontFamily: '"Noto Serif Display", serif', letterSpacing: '-3px' }}>Studies</span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div 
                  key={currentStudy.id}
                  initial={{ opacity: 0, x: -20 }} 
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-transparent text-left max-w-full lg:max-w-[550px]"
                >
                  <div className="text-white text-[20px] md:text-[22px] font-bold leading-none mb-[1.5rem] text-left" style={{ fontFamily: '"Arial Nova", sans-serif', letterSpacing: '-0.04em' }}>
                    <span className="text-[#00ff88]">{currentStudy.client}</span> — {currentStudy.subtitle}
                  </div>
                  
                  <div className="text-[#b0b0b0] text-[16px] md:text-[20px] leading-tight md:leading-none text-center md:text-left mb-[2rem]" style={{ fontFamily: '"Arial Nova", sans-serif', letterSpacing: '-0.04em' }}>
                    {currentStudy.description}
                  </div>

                  <Link to="/Case-Studies" className="bg-[#00ff88] text-[#0a0a0a] inline-block border-none py-[0.8rem] px-[2.5rem] text-[0.9rem] font-bold cursor-pointer rounded-[3px] transition-all duration-300 hover:scale-105 hover:bg-[#00cc6a] shadow-[0_0_20px_rgba(0,255,136,0.3)] tracking-widest uppercase">
                    EXPLORE
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Case Study Image Slider */}
            <div className="flex-[1] w-full h-[400px] md:h-[600px] overflow-hidden relative">
               <div className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-r from-[#0a0a0a] via-transparent to-[#0a0a0a] opacity-20"></div>
               
               <AnimatePresence mode="wait">
                 <motion.div 
                   key={currentStudy.id}
                   initial={{ x: "100%", opacity: 0 }} 
                   animate={{ x: "0%", opacity: 1 }}   
                   exit={{ x: "-100%", opacity: 0 }}    
                   transition={{ duration: 0.6, ease: "easeInOut" }} 
                   className="relative w-full h-full flex items-center justify-center"
                 >
                    <div className="relative w-full h-[400px] md:h-[500px]">
                      <img 
                        src={currentStudy.images[0]} 
                        alt="Case Study 1"
                        className="absolute top-0 left-0 w-[45%] h-[40%] object-cover rounded-lg shadow-lg z-10 opacity-80"
                      />
                      <img 
                        src={currentStudy.images[1]} 
                        alt="Case Study 2"
                        className="absolute top-[20%] right-0 w-[60%] h-[50%] object-cover rounded-lg shadow-2xl z-20"
                      />
                      <img 
                        src={currentStudy.images[2]} 
                        alt="Case Study 3"
                        className="absolute bottom-0 left-[15%] w-[40%] h-[40%] object-cover rounded-lg shadow-lg z-30"
                      />
                    </div>
                 </motion.div>
               </AnimatePresence>
            </div>

          </div>
        </div>
      </section>

      
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

export default HomePage;