import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ContactSection from "../Components/ContactSection";


const VideoProduction = () => {
  const [playingVideo, setPlayingVideo] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const videos = [
    {
      id: 1,
      title: "#Brave80 in Kombat Kingdom @bravemmaf",
      description: "High-octane action captured at the Brave Combat Federation. Experience the intensity.",
      youtubeId: "At0gcGbuIW8"
    },
    {
      id: 2,
      title: "Event Coverage Video | The Capital Governate Kingdom of Bahrain",
      description: "Documenting the launch of the new eco-friendly products. A step towards a greener future.",
      youtubeId: "itpKqpnlTPE"
    },
    {
      id: 3,
      title: "Corporate Film for SwirlCraft",
      description: "Showcasing the innovation and culture at a leading tech company. Behind the scenes.",
      youtubeId: "IT9pTpLOeAw"
    },
    {
      id: 4,
      title: "Halftime Show Highlights | @Flipperachi at @bravemmaf’s #Brave80",
      description: "A visually stunning music video featuring vibrant colors and dynamic shots.",
      youtubeId: "IINledKrTw0"
    },
    {
      id: 5,
      title: "Corporate film for Inscribe Writing Services",
      description: "An emotional journey telling the stories of local communities and their heritage.",
      youtubeId: "c8aMK2lSOI4"
    },
    {
      id: 6,
      title: "Arabic Rap Music by Saudi Rapper @rillathekid | Al Sann",
      description: "Sleek and modern commercial spot for the latest line of smart watches.",
      youtubeId: "3EDBf2rgiLg"
    },
    {
      id: 7,
      title: "The Aabhushan Collection by Devji since 1950",
      description: "Elegant showcase of the timeless Aabhushan jewelry collection.",
      youtubeId: "-wowMkQY-mU"
    },
    {
      id: 8,
      title: "UFC Gym Bahrain Launch at Harbour Row GFH Properties",
      description: "Grand opening coverage of the new UFC Gym at Harbour Row.",
      youtubeId: "QzicQaiHWx4"
    }
  ];

  const handlePlay = (id) => {
    setPlayingVideo(id);
  };

  return (
    // Main Container
    <div className="relative h-screen w-full overflow-hidden font-sans selection:bg-green-500 selection:text-black">
      
      {/* Fixed background image */}
      <div 
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/HomePage/videoProductionbackground.png')", 
          backgroundColor: 'black' 
        }}
      ></div>

      {/* Scrollable content wrapper */}
      <div className="relative z-10 h-full overflow-y-auto text-white">
        
        {/* Navigation bar */}
        <nav className="absolute top-0 left-0 right-0 z-[100] bg-transparent py-4 md:py-8">
          <div className="max-w-[1200px] xl:max-w-[1400px] mx-auto flex flex-wrap justify-between items-center px-4 md:px-8">
            {/* Logo section */}
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

            {/* Navigation links */}
            <ul className={`${
              isMobileMenuOpen 
                ? 'fixed inset-0 bg-black/95 flex flex-col items-center justify-center gap-8 text-2xl h-screen w-screen z-40' 
                : 'hidden md:flex'
              } list-none gap-2 md:gap-4 lg:gap-8 order-3 md:order-none w-full md:w-auto justify-center md:justify-end text-[0.6rem] sm:text-[0.75rem] md:text-[0.9rem] font-medium transition-all duration-300 ease-in-out`}>
              <li>
                <button onClick={() => { setIsMobileMenuOpen(false); window.location.href = '/#services'; }} className="text-white hover:text-[#00ff88] border-b-2 border-transparent hover:border-[#00ff88] pb-2 transition-colors duration-300 font-sans cursor-pointer bg-transparent uppercase">SERVICES</button>
              </li>
              <li>
                <Link to="/Case-Studies" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-[#00ff88] border-b-2 border-transparent hover:border-[#00ff88] pb-2 transition-colors duration-300 font-sans">CASE STUDIES</Link>
              </li>
              <li>
                <button onClick={() => { setIsMobileMenuOpen(false); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-white bg-transparent border-none cursor-pointer hover:text-[#00ff88] border-b-2 border-transparent hover:border-[#00ff88] pb-2 transition-colors duration-300 font-medium uppercase font-sans">
                  CONTACT
                </button>
              </li>
            </ul>
          </div>
        </nav>

        {/* Page header */}
        <header className="relative h-screen w-full flex items-center pl-4 md:pl-[200px] pr-4 md:pr-12">
          <div className="w-full">
            <p className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-black bg-green-400 uppercase">
              Services
            </p>
            
            {/* Title section */}
            <h1 
              className="text-white drop-shadow-lg"
              style={{
                fontFamily: '"Noto Serif Display", serif',
                fontWeight: 700,
                fontStyle: 'italic',
              }}
            >
              <span className="block text-[50px] sm:text-[60px] md:text-[120px] leading-[50px] sm:leading-[60px] md:leading-[100px] tracking-[-2px] md:tracking-[-12px] mb-2 md:mb-0">Video</span>
              <span className="block text-[50px] sm:text-[60px] md:text-[120px] leading-[50px] sm:leading-[60px] md:leading-[100px] tracking-[-2px] md:tracking-[-12px]">Production</span>
            </h1>

          </div>
        </header>

        {/* Video grid section */}
        <main className="max-w-5xl mx-auto px-4 py-8 space-y-24">
          {videos.map((video) => (
            <div key={video.id} className="group relative">
              {/* Video player or thumbnail container */}
              <div className="relative aspect-video w-full overflow-hidden rounded-sm bg-neutral-900/80 border border-neutral-800 shadow-2xl">
                
                {playingVideo === video.id ? (
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  ></iframe>
                ) : (
                  <>
                    <img 
                      src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`} 
                      alt={video.title} 
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                    />
                    
                    {/* Play button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button 
                        onClick={() => handlePlay(video.id)}
                        className="w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/30 cursor-pointer z-20"
                      >
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg pointer-events-none">
                          <svg 
                            className="w-5 h-5 ml-1 text-red-600" 
                            fill="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </button>
                    </div>
                  </>
                )}
              </div>

              {/* Video details */}
              <div className="mt-6 text-center p-4 rounded-xl bg-black/60 backdrop-blur-sm border border-white/5">
                <h3 className="text-lg md:text-xl font-bold text-green-400 mb-2 uppercase tracking-wide">
                  {video.title}
                </h3>
                <p className="text-neutral-300 text-sm md:text-base max-w-2xl mx-auto">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
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
    </div>
  );
};

export default VideoProduction;