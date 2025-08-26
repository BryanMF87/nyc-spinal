import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Stethoscope } from 'lucide-react';

const PhysicianShowcase = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) - 0.5,
        y: (e.clientY / window.innerHeight) - 0.5
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const physicians = [
    {
      name: "Nathaniel Tindel, MD",
      image: "/images/DrNathaniel.jpeg",
      role: "Board Certified Orthopedic Surgeon",
      specialty: "Spine and Scoliosis Specialist"
    },
    {
      name: "Neel P. Shah, MD",
      image: "/images/DrShahPicture1.jpg",
      role: "Board Certified Orthopedic Surgeon",
      specialty: "Minimally Invasive Spine Surgery"
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      
      <div className="absolute inset-0 bg-gradient-to-b from-[#003666] via-[#0062B1] to-[#003666]">
        <div className="absolute inset-0 opacity-30">
          
          <div className="absolute inset-0" 
               style={{
                 backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, 0.05) 25%, rgba(255, 255, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.05) 75%, rgba(255, 255, 255, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, 0.05) 25%, rgba(255, 255, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.05) 75%, rgba(255, 255, 255, 0.05) 76%, transparent 77%, transparent)',
                 backgroundSize: '50px 50px',
                 transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
                 transition: 'transform 0.5s ease-out'
               }}
          />
          
          
          {[...Array(12)].map((_, i) => {
            const size = 120 + (i % 3) * 40;
            const baseDelay = i * 0.5;
            return (
              <div
                key={i}
                className="absolute rounded-full bg-sky-400/5 backdrop-blur-sm"
                style={{
                  width: size,
                  height: size,
                  left: `${(i % 4) * 25 + 5}%`,
                  top: `${Math.floor(i / 4) * 30 + 10}%`,
                  transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
                  transition: 'transform 0.5s ease-out',
                  animation: `float 6s ease-in-out infinite`,
                  animationDelay: `${baseDelay}s`
                }}
              />
            );
          })}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 md:mb-24 relative">
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-sky-400 via-[#0062B1] to-[#003666] rounded-lg blur" />
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6 relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-200 via-white to-sky-200 animate-gradient">
              Meet Our Expert Physicians
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-sky-200">Leaders in Innovative Spine Care</p>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {physicians.map((physician) => {
            const lastName = physician.name.includes("Tindel") ? "tindel" : "shah";
            return (
              <div 
                key={physician.name} 
                className="group relative"
              >
                
                <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-105">
                  
                  <div className="relative h-[320px] md:h-[420px] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#003666]/90 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                    <img
                      src={physician.image}
                      alt={physician.name}
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                      style={{
                        objectPosition: physician.name.includes("Shah") || physician.name.includes("Tindel") ? "center 25%" : "center"
                      }}
                    />
                  </div>

                  
                  <div className="p-8 relative">
                    
                    <div className="absolute inset-0 bg-gradient-to-r from-sky-500/20 via-[#0062B1]/20 to-[#003666]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{physician.name}</h3>
                      <p className="text-lg md:text-xl text-sky-200 mb-1">{physician.role}</p>
                      <p className="text-sm md:text-base text-sky-300 mb-6 md:mb-8">{physician.specialty}</p>

                      
                      <Link
                        to={physician.name.includes("Shah") ? "/neel-shah-md" : `/meet-dr-${lastName}`}
                        className="inline-flex items-center px-4 md:px-6 py-2 md:py-3 bg-sky-600 hover:bg-sky-700 rounded-full text-white font-medium transition-all duration-300 group/link cursor-pointer no-underline hover:no-underline z-10"
                      >
                        <span className="text-sm md:text-base">Learn more about Dr. {lastName.charAt(0).toUpperCase() + lastName.slice(1)}</span>
                        <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 transform transition-transform group-hover/link:translate-x-2" />
                      </Link>
                    </div>
                  </div>
                </div>

                
                <div className="absolute -inset-4 bg-gradient-to-r from-sky-600 via-[#0062B1] to-[#003666] rounded-2xl opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>

      
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg className="relative block w-full h-12" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,141.89,111.3,221.93,101.4Z" 
                className="fill-sky-200/10"></path>
        </svg>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 8s linear infinite;
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
};

export default PhysicianShowcase;