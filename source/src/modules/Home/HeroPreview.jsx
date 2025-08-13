import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroPreview = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black/80 via-black/100 to-black/70">
      
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-normal"
        style={{
          backgroundImage: `url("/images/NYCSD.jpg")`,
          transform: `scale(1.1) translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      />

      
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(0deg, transparent 24%, rgba(0, 98, 177, 0.3) 25%, rgba(0, 98, 177, 0.3) 26%, transparent 27%, transparent 74%, rgba(0, 98, 177, 0.3) 75%, rgba(0, 98, 177, 0.3) 76%, transparent 77%, transparent), ' +
            'linear-gradient(90deg, transparent 24%, rgba(0, 98, 177, 0.3) 25%, rgba(0, 98, 177, 0.3) 26%, transparent 27%, transparent 74%, rgba(0, 98, 177, 0.3) 75%, rgba(0, 98, 177, 0.3) 76%, transparent 77%, transparent)',
          backgroundSize: window.innerWidth < 768 ? '30px 30px' : '50px 50px',
          transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px) rotate(${scrollY * 0.02}deg)`,
        }}
      />

      
      <div className="relative max-w-6xl mx-auto px-4 h-screen flex items-center">
        <div className="w-full md:w-2/3 space-y-6 md:space-y-8 py-8 md:py-0">
          <div className="relative">
            <h1 className="text-3xl sm:text-6xl md:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
              Reclaim Your Life with the Precision and
              <span className="block text-transparent h-20 sm:h-24 md:h-32 bg-clip-text bg-gradient-to-r from-white via-white to-[#B3D9F2] animate-gradient">
                Expertise of NYC's Premier Spine Specialists
              </span>
            </h1>
            <div className="absolute -left-4 -top-4 w-16 md:w-24 h-16 md:h-24 border-2 border-white rounded-full opacity-20 animate-spin-slow" />
          </div>
          
          <div className="text-lg sm:text-xl md:text-2xl text-sky-100 mb-6 md:mb-8 font-light relative">
            <p>Where innovative technology meets compassionate care</p>
            
            <div className="mt-4 text-lg text-sky-100">
              425 East 79th Street, Suite 1H
              <br />
              New York, NY 10075
            </div>

            <span className="absolute -right-4 md:-right-8 top-0 w-12 md:w-16 h-12 md:h-16 border border-white rounded-lg opacity-20 animate-pulse" />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <Link
              to="/appointment"
              className="group relative flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-white rounded-full text-[#003666] font-bold text-sm md:text-base overflow-hidden w-full sm:w-auto"
              onMouseEnter={() => setIsPlaying(true)}
              onMouseLeave={() => setIsPlaying(false)}
            >
              <div className="relative z-10 flex items-center text-[#003666] group-hover:text-white">
                  Schedule Now
                  <ArrowRight
                    className={`ml-2 w-4 md:w-5 h-4 md:h-5 transition-transform duration-300 ${
                      isPlaying ? 'translate-x-2' : ''
                    }`}
                  />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-sky-400 via-[#0062B1] to-[#003666] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            </Link>

            <Link
              to="/about-our-practice"
              className="relative px-6 md:px-8 py-3 md:py-4 border-2 border-white text-white rounded-full transition-colors duration-300 text-sm md:text-base flex items-center justify-center overflow-hidden group"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-[#003666]">Learn More</span>
              <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 4s linear infinite;
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
};

export default HeroPreview;